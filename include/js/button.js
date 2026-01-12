// gestion des boutons active
(() => {

  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
  
  const buttons = document.querySelectorAll('.catégories .boutton');
  
  buttons.forEach(button => {
    const href = button.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === 'index.html' && href === 'presentation.html') ||
        (currentPage === '' && href === 'presentation.html') ||
        (currentPage === 'podcast.html' && href === 'podcast.html')) {
          
      const content = button.querySelector('.content');
      if (content) {
        content.classList.add('active-page');
      }
    }
  });
})();