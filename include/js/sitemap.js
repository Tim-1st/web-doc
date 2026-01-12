// Gestion de l'overlay sitemap
(() => {
  const sitemapLink = document.querySelector('footer .left-links a[href="#sitemap"]');
  const sitemapOverlay = document.getElementById('sitemap-overlay');
  const closeSitemapBtn = document.getElementById('close-sitemap');

  let isSitemapOpen = false;

  // Détection de la page actuelle et ajout de la classe active
  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
  const sitemapCards = document.querySelectorAll('.sitemap-card');
  
  sitemapCards.forEach(card => {
    const cardHref = card.getAttribute('href');
    const decodedCardHref = decodeURIComponent(cardHref);
    
    if (cardHref === currentPage || decodedCardHref === currentPage) {
      card.classList.add('active');
    }
  });

  const openSitemap = () => {
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