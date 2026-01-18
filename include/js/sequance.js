    const video = document.getElementById('mainVideo');
    const chapterButtons = document.querySelectorAll('.chapter-btn');

    chapterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const time = parseFloat(this.getAttribute('data-time'));
        video.currentTime = time;
        video.play();
        
        chapterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    video.addEventListener('timeupdate', function() {
      const currentTime = video.currentTime;
      
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
    });