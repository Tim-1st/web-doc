// Gestion de l'option full-screen
document.getElementById('fullscreen-btn').addEventListener('click', function (e) {
  e.preventDefault(); 
  
  const isMobile = window.innerWidth <= 800;
  const targetElement = isMobile 
    ? document.getElementById('mainVideo') 
    : document.documentElement;

  if (!document.fullscreenElement &&  
      !document.webkitFullscreenElement && 
      !document.mozFullScreenElement && 
      !document.msFullscreenElement) {

    if (targetElement.requestFullscreen) {
      targetElement.requestFullscreen();
    } else if (targetElement.webkitRequestFullscreen) { 
      targetElement.webkitRequestFullscreen();
    } else if (targetElement.mozRequestFullScreen) { 
      targetElement.mozRequestFullScreen();
    } else if (targetElement.msRequestFullscreen) { 
      targetElement.msRequestFullscreen();
    }
    
    if (isMobile && screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {}); 
    }

  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) { 
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
  }
});


// Gestion de l'option share
document.getElementById('share-btn').addEventListener('click', function (e) {
  e.preventDefault(); 
  
  const currentUrl = encodeURIComponent(window.location.href);
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
  
  window.open(linkedinShareUrl, 'linkedin-share', 'width=550,height=680');
});