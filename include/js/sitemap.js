// Gestion de l'overlay sitemap
(() => {
  const normalizePath = (path) => {
    return path
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const sitemapLink = document.querySelector('footer .left-links a[href="#sitemap"]');
  const sitemapOverlay = document.getElementById('sitemap-overlay');
  const closeSitemapBtn = document.getElementById('close-sitemap');
  const creditsOverlay = document.getElementById('credits-overlay');

  let isSitemapOpen = false;

  // Détection de la page actuelle et ajout de la classe active
  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
  const normalizedCurrentPage = normalizePath(currentPage);
  
  const sitemapCards = document.querySelectorAll('.sitemap-card');
  
  sitemapCards.forEach(card => {
    const cardHref = card.getAttribute('href');
    const normalizedCardHref = normalizePath(decodeURIComponent(cardHref));
    
    if (normalizedCardHref === normalizedCurrentPage) {
      card.classList.add('active');
    }
  });

  const openSitemap = () => {
    // Fermer les crédits si ouverts
    if (creditsOverlay && creditsOverlay.classList.contains('open')) {
      creditsOverlay.classList.remove('open');
      creditsOverlay.style.transform = 'translateX(100%)';
    }
    sitemapOverlay.classList.add('open');
    isSitemapOpen = true;
  };

  const closeSitemap = () => {
    sitemapOverlay.classList.remove('open');
    isSitemapOpen = false;
  };

  sitemapLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSitemapOpen) {
      closeSitemap();
    } else {
      openSitemap();
    }
  });

  closeSitemapBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSitemap();
  });

  document.addEventListener('click', (e) => {
    if (isSitemapOpen && 
        !sitemapOverlay.contains(e.target) && 
        !sitemapLink.contains(e.target)) {
      closeSitemap();
    }
  });

  sitemapOverlay.addEventListener('click', (e) => {
    if (e.target === sitemapOverlay) {
      closeSitemap();
    }
  });
})();