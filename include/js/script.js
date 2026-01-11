// gestion des boutons active
(() => {

  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
  
  const buttons = document.querySelectorAll('.catégories .boutton');
  
  buttons.forEach(button => {
    const href = button.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === 'index.html' && href === 'presentation.html') ||
        (currentPage === '' && href === 'presentation.html')) {
          
      const content = button.querySelector('.content');
      if (content) {
        content.classList.add('active-page');
      }
    }
  });
})();




// Gestion de l'option full-screen
document.getElementById('fullscreen-btn').addEventListener('click', function (e) {
  e.preventDefault(); 
  
  if (!document.fullscreenElement &&  
      !document.webkitFullscreenElement && 
      !document.mozFullScreenElement && 
      !document.msFullscreenElement) {

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { 
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) { 
      document.documentElement.msRequestFullscreen();
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
  
  const currentUrl = window.location.href;

  navigator.clipboard.writeText(currentUrl).then(function() {
    alert("URL copiée dans le presse-papiers !"); 
  }).catch(function(error) {
    console.error("Erreur lors de la copie de l'URL: ", error);
  });
});




// Gestion de l'overlay crédits
(() => {
  const creditsLink = document.querySelector('footer .left-links a[href="#credits"]');
  const creditsOverlay = document.getElementById('credits-overlay');
  const closeOverlayBtn = document.getElementById('close-overlay');

  let isOverlayOpen = false;

  const openOverlay = () => {
    creditsOverlay.classList.add('open');
    creditsOverlay.style.transform = 'translateX(0)';
    isOverlayOpen = true;
  };

  const closeOverlay = () => {
    creditsOverlay.classList.remove('open');
    creditsOverlay.style.transform = 'translateX(100%)';
    isOverlayOpen = false;
  };

  creditsLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    
    if (isOverlayOpen) {
      closeOverlay();
    } else {
      openOverlay();
    }
  });

  closeOverlayBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    closeOverlay();
  });

  document.addEventListener('click', (e) => {
    if (isOverlayOpen && 
        !creditsOverlay.contains(e.target) && 
        !creditsLink.contains(e.target)) {
      closeOverlay();
    }
  });

  creditsOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
  });
})();