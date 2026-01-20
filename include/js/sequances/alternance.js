// Charger l'API YouTube
let player;
let isPlayerReady = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('mainVideo', {
    height: '100%',
    width: '100%',
    videoId: 'x6k94cEHpw0', 
    playerVars: {
      'playsinline': 1,
      'rel': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  isPlayerReady = true;
  initChapterButtons();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    startTimeUpdate();
  }
}

// Gestion des chapitres
const chapterButtons = document.querySelectorAll('.chapter-btn');

function initChapterButtons() {
  chapterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (isPlayerReady) {
        const time = parseFloat(this.getAttribute('data-time'));
        player.seekTo(time, true);
        player.playVideo();
        
        chapterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
}

// Mise à jour du chapitre actif
let timeUpdateInterval;

function startTimeUpdate() {
  if (timeUpdateInterval) {
    clearInterval(timeUpdateInterval);
  }
  
  timeUpdateInterval = setInterval(() => {
    if (player && isPlayerReady) {
      const currentTime = player.getCurrentTime();
      updateActiveChapter(currentTime);
    }
  }, 100);
}

function updateActiveChapter(currentTime) {
  let activeChapter = null;
  
  chapterButtons.forEach((btn, index) => {
    const chapterTime = parseFloat(btn.getAttribute('data-time'));
    const nextChapterTime = index < chapterButtons.length - 1 
      ? parseFloat(chapterButtons[index + 1].getAttribute('data-time'))
      : Infinity;
    
    if (currentTime >= chapterTime && currentTime < nextChapterTime) {
      activeChapter = btn;
    }
  });

  chapterButtons.forEach(btn => btn.classList.remove('active'));
  if (activeChapter) {
    activeChapter.classList.add('active');
  }
}

// Charger l'API YouTube si elle n'est pas déjà chargée
if (!window.YT) {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}