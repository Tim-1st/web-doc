(() => {
  const BTN_SELECTOR = "a.boutton[data-seq], .boutton[data-seq]";

  function goToSequence(id) {
    if (!id) return;

    // Fallback hash (si ton export écoute l'URL)
    const hashes = [`#${id}`, `#/${id}`, `#/sequence/${id}`, `#!/${id}`];
    location.hash = "";
    location.hash = hashes[0];
  }

  // Fonction pour mettre à jour le bouton actif
  function updateActiveButton(sequenceId) {
    // Retirer la classe active de tous les boutons
    document.querySelectorAll(BTN_SELECTOR).forEach(btn => {
      const content = btn.querySelector('.content');
      if (content) {
        content.classList.remove('active-sequence');
      }
    });

    // Ajouter la classe active au bouton correspondant
    if (sequenceId) {
      const activeBtn = document.querySelector(`[data-seq="${sequenceId}"]`);
      if (activeBtn) {
        const content = activeBtn.querySelector('.content');
        if (content) {
          content.classList.add('active-sequence');
        }
      }
    }
  }

  // Gérer les clics sur les boutons
  document.addEventListener("click", (e) => {
    const el = e.target.closest(BTN_SELECTOR);
    if (!el) return;

    e.preventDefault();
    const seqId = el.getAttribute("data-seq");
    goToSequence(seqId);

    // Mettre à jour immédiatement le bouton actif
    setTimeout(() => updateActiveButton(seqId), 100);
  });

  // Gérer le clic sur le titre pour retourner à Présentation
  const titleElement = document.querySelector('.title');
  if (titleElement) {
    titleElement.style.cursor = 'pointer';
    titleElement.addEventListener('click', () => {
      const presentationSeqId = "B5BD6DC4-E71B-7B9E-4D72-07B235322BBF";
      goToSequence(presentationSeqId);
      setTimeout(() => updateActiveButton(presentationSeqId), 100);
    });
  }

  // Détecter aussi les changements de hash
  window.addEventListener("hashchange", () => {
    const seqId = location.hash.replace("#", "");
    updateActiveButton(seqId);
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
  const creditsLink = document.querySelector('footer .left-links a[href=""]');
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

// Récupérer les éléments du DOM
const overlay = document.getElementById('credits-overlay');
const openButton = document.getElementById('open-overlay'); // bouton pour ouvrir l'overlay
const closeButton = document.getElementById('close-overlay'); // bouton pour fermer l'overlay

// Ajouter un écouteur d'événement pour ouvrir l'overlay
openButton.addEventListener('click', () => {
  overlay.classList.remove('close'); // Enlever la classe de fermeture
  overlay.classList.add('open'); // Ajouter la classe d'ouverture
});

// Ajouter un écouteur d'événement pour fermer l'overlay
closeButton.addEventListener('click', () => {
  overlay.classList.remove('open'); // Enlever la classe d'ouverture
  overlay.classList.add('close'); // Ajouter la classe de fermeture
});











