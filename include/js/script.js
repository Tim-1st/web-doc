// Activer le bouton correspondant à la page actuelle
(() => {
  // Récupérer le nom de la page actuelle (décodage de l'URL pour gérer les accents)
  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
  
  // Trouver tous les boutons de catégories
  const buttons = document.querySelectorAll('.catégories .boutton');
  
  buttons.forEach(button => {
    const href = button.getAttribute('href');
    
    // Vérifier si le href correspond à la page actuelle
    if (href === currentPage || 
        (currentPage === 'index.html' && href === 'presentation.html') ||
        (currentPage === '' && href === 'presentation.html')) {
      // Ajouter la classe active au content
      const content = button.querySelector('.content');
      if (content) {
        content.classList.add('active-page');
      }
    }
  });
})();

document.getElementById('fullscreen-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le lien de faire une navigation
  
  // Vérifier si l'appareil prend en charge le mode plein écran
  if (!document.fullscreenElement &&   // Si on n'est pas déjà en plein écran
      !document.webkitFullscreenElement && 
      !document.mozFullScreenElement && 
      !document.msFullscreenElement) {

    // Tenter de passer en mode plein écran
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // Quitter le mode plein écran
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
});

document.getElementById('share-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  
  // Copie de l'URL actuelle dans le presse-papiers
  const currentUrl = window.location.href;

  // Utilisation de l'API Clipboard pour copier l'URL
  navigator.clipboard.writeText(currentUrl).then(function() {
    alert("URL copiée dans le presse-papiers !"); // Message de confirmation
  }).catch(function(error) {
    console.error("Erreur lors de la copie de l'URL: ", error);
  });
});

(() => {
  const creditsLink = document.querySelector('footer .left-links a[href="#credits"]');
  const creditsOverlay = document.getElementById('credits-overlay');
  const closeOverlayBtn = document.getElementById('close-overlay');

  // Variable pour savoir si l'overlay est ouvert
  let isOverlayOpen = false;

  // Fonction pour ouvrir l'overlay
  const openOverlay = () => {
    creditsOverlay.classList.add('open');
    creditsOverlay.style.transform = 'translateX(0)';
    isOverlayOpen = true;
  };

  // Fonction pour fermer l'overlay
  const closeOverlay = () => {
    creditsOverlay.classList.remove('open');
    creditsOverlay.style.transform = 'translateX(100%)';
    isOverlayOpen = false;
  };

  // Ouvrir/fermer l'overlay lorsqu'on clique sur "Crédits"
  creditsLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Empêche la propagation du clic
    
    if (isOverlayOpen) {
      closeOverlay();
    } else {
      openOverlay();
    }
  });

  // Fermer l'overlay lorsqu'on clique sur le bouton "Fermer"
  closeOverlayBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    closeOverlay();
  });

  // Fermer l'overlay en cliquant en dehors de celui-ci
  document.addEventListener('click', (e) => {
    if (isOverlayOpen && 
        !creditsOverlay.contains(e.target) && 
        !creditsLink.contains(e.target)) {
      closeOverlay();
    }
  });

  // Empêcher la fermeture si on clique à l'intérieur de l'overlay
  creditsOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
  });
})();