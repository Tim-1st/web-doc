// gestion des boutons active
(() => {
  const normalizePath = (path) => {
    return path
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const normalizedCurrentPage = normalizePath(decodeURIComponent(currentPage));
  
  const buttons = document.querySelectorAll('.catégories .boutton');
  
  buttons.forEach(button => {
    const href = button.getAttribute('href');
    const normalizedHref = normalizePath(decodeURIComponent(href));
    
    if (normalizedHref === normalizedCurrentPage || 
        (normalizedCurrentPage === 'index.html' && normalizedHref === 'presentation.html') ||
        (normalizedCurrentPage === '' && normalizedHref === 'presentation.html') ||
        (normalizedCurrentPage === 'podcast.html' && normalizedHref === 'podcast.html')) {
          
      const content = button.querySelector('.content');
      if (content) {
        content.classList.add('active-page');
      }
    }
  });
})();