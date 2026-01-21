// Base de données des pages et contenus indexables
const searchDatabase = [
  {
    title: 'Présentation',
    page: 'presentation.html',
    category: 'main',
    content: ['Présentation', 'Apprenez-en un peu plus sur l\'intervenant']
  },
  {
    title: 'Vivre l\'alternance de plus près',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'main',
    content: ['Vivre l\'alternance', 'L\'expérience de l\'alternance au quotidien']
  },
  {
    title: 'La face cachée d\'un développeur',
    page: 'la-face-cachee-d\'un-developpeur.html',
    category: 'main',
    content: ['La face cachée', 'Les coulisses du développement web', 'développeur']
  },
  {
    title: 'Un métier au cœur des mythes',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'main',
    content: ['Un métier au cœur des mythes', 'Démystifier les idées reçues', 'mythes']
  },
  {
    title: 'Conseil',
    page: 'conseil.html',
    category: 'main',
    content: ['Conseil', 'Recommandations et astuces']
  },
  {
    title: 'Podcast',
    page: 'podcast.html',
    category: 'main',
    content: ['Podcast', 'Écoutez notre Podcast']
  },
  {
    title: 'Accueil',
    page: 'index.html',
    category: 'main',
    content: ['Accueil', 'Web-Doc Développeur Full Stack', 'Timéo DC']
  }
];

class SearchBar {
  constructor() {
    this.container = null;
    this.input = null;
    this.resultsContainer = null;
    this.init();
  }

  init() {
    // Créer la structure HTML de la barre de recherche
    this.createSearchBar();
    this.attachEventListeners();
  }

  createSearchBar() {
    // Chercher le header pour insérer APRÈS
    const header = document.querySelector('header');
    
    if (!header) return;

    // Créer le conteneur de recherche
    this.container = document.createElement('div');
    this.container.className = 'search-container';
    this.container.id = 'search-bar';

    // Créer l'input
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.id = 'search-input';
    this.input.placeholder = 'Chercher une catégorie...';
    this.input.className = 'search-input';

    // Créer le conteneur de résultats
    this.resultsContainer = document.createElement('div');
    this.resultsContainer.id = 'search-results';
    this.resultsContainer.className = 'search-results';

    // Ajouter les éléments
    this.container.appendChild(this.input);
    this.container.appendChild(this.resultsContainer);

    // Insérer APRÈS le header
    header.parentNode.insertBefore(this.container, header.nextSibling);
  }

  attachEventListeners() {
    if (!this.input) return;

    this.input.addEventListener('input', (e) => this.handleSearch(e));
    this.input.addEventListener('focus', () => this.resultsContainer.style.display = 'block');
    this.input.addEventListener('blur', () => {
      setTimeout(() => {
        this.resultsContainer.style.display = 'none';
      }, 200);
    });

    // Fermer les résultats quand on clique ailleurs
    document.addEventListener('click', (e) => {
      if (!this.container.contains(e.target)) {
        this.resultsContainer.style.display = 'none';
      }
    });
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
      this.resultsContainer.innerHTML = '';
      this.resultsContainer.style.display = 'none';
      return;
    }

    const results = this.search(query);
    this.displayResults(results);
  }

  search(query) {
    const results = [];

    searchDatabase.forEach(item => {
      // Chercher dans le titre
      const titleScore = this.calculateScore(item.title.toLowerCase(), query);
      
      // Chercher dans le contenu
      let contentScore = 0;
      item.content.forEach(text => {
        contentScore = Math.max(contentScore, this.calculateScore(text.toLowerCase(), query));
      });

      const totalScore = titleScore * 2 + contentScore; // Privilégier le titre

      if (totalScore > 0) {
        results.push({
          ...item,
          score: totalScore
        });
      }
    });

    // Trier par pertinence
    return results.sort((a, b) => b.score - a.score).slice(0, 8);
  }

  calculateScore(text, query) {
    if (text.includes(query)) {
      // Correspondance exacte = score plus élevé
      return 10;
    }
    
    // Vérifier si chaque mot de la requête est dans le texte
    const queryWords = query.split(' ');
    const matchedWords = queryWords.filter(word => text.includes(word)).length;
    
    if (matchedWords > 0) {
      return matchedWords;
    }

    return 0;
  }

  displayResults(results) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = '<div class="search-no-results">Aucun résultat trouvé</div>';
      this.resultsContainer.style.display = 'block';
      return;
    }

    let html = '<div class="search-results-list">';
    
    results.forEach(result => {
      html += `
        <div class="search-result-item" data-page="${result.page}">
          <div class="search-result-title">${this.highlightQuery(result.title)}</div>
          <div class="search-result-subtitle">${result.category === 'main' ? 'Catégorie principale' : 'Section'}</div>
        </div>
      `;
    });

    html += '</div>';
    this.resultsContainer.innerHTML = html;
    this.resultsContainer.style.display = 'block';

    // Ajouter les événements click
    this.resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const page = item.getAttribute('data-page');
        this.navigateToPage(page);
      });
    });
  }

  highlightQuery(text) {
    const query = this.input.value.toLowerCase();
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  navigateToPage(page) {
    // Déterminer l'URL actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === page || (!currentPage && page === 'index.html')) {
      // On est déjà sur la page, fermer la barre
      this.input.value = '';
      this.resultsContainer.innerHTML = '';
      this.resultsContainer.style.display = 'none';
    } else {
      // Naviguer vers la page
      window.location.href = page;
    }
  }
}

// Initialiser quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  new SearchBar();
});
