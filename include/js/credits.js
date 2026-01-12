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