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
  },
  // Chapitres - Présentation
  {
    title: 'La présentation',
    page: 'presentation.html',
    category: 'chapter',
    parentCategory: 'Présentation',
    chapterTime: 0,
    content: ['La présentation', 'Présentation']
  },
  {
    title: 'Le rôle',
    page: 'presentation.html',
    category: 'chapter',
    parentCategory: 'Présentation',
    chapterTime: 23,
    content: ['Le rôle', 'Présentation']
  },
  {
    title: 'Les missions',
    page: 'presentation.html',
    category: 'chapter',
    parentCategory: 'Présentation',
    chapterTime: 34,
    content: ['Les missions', 'Présentation']
  },
  {
    title: 'Parcours scolaire',
    page: 'presentation.html',
    category: 'chapter',
    parentCategory: 'Présentation',
    chapterTime: 49,
    content: ['Parcours scolaire', 'Présentation', 'études']
  },
  {
    title: 'Témoignage',
    page: 'presentation.html',
    category: 'chapter',
    parentCategory: 'Présentation',
    chapterTime: 72,
    content: ['Témoignage', 'Présentation']
  },
  // Chapitres - Vivre l'alternance
  {
    title: 'Théorie vs pratique',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'chapter',
    parentCategory: 'Vivre l\'alternance',
    chapterTime: 0,
    content: ['Théorie', 'pratique', 'alternance']
  },
  {
    title: 'Responsabilités en alternance',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'chapter',
    parentCategory: 'Vivre l\'alternance',
    chapterTime: 64,
    content: ['Responsabilités', 'alternance']
  },
  {
    title: 'Réalités de l\'alternance',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'chapter',
    parentCategory: 'Vivre l\'alternance',
    chapterTime: 102,
    content: ['Réalités', 'alternance']
  },
  {
    title: 'Équilibre études-entreprise',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'chapter',
    parentCategory: 'Vivre l\'alternance',
    chapterTime: 176,
    content: ['Équilibre', 'études', 'entreprise', 'alternance']
  },
  {
    title: 'Réalité salariale',
    page: 'vivre-l\'alternance-de-plus-pres.html',
    category: 'chapter',
    parentCategory: 'Vivre l\'alternance',
    chapterTime: 209,
    content: ['Réalité', 'salariale', 'alternance', 'salaire']
  },
  // Chapitres - La face cachée
  {
    title: 'Temps de codage',
    page: 'la-face-cachee-d\'un-developpeur.html',
    category: 'chapter',
    parentCategory: 'La face cachée',
    chapterTime: 0,
    content: ['Temps', 'codage', 'développeur']
  },
  {
    title: 'Autres postes',
    page: 'la-face-cachee-d\'un-developpeur.html',
    category: 'chapter',
    parentCategory: 'La face cachée',
    chapterTime: 47,
    content: ['Autres', 'postes', 'développeur']
  },
  {
    title: 'Aspect répétitif',
    page: 'la-face-cachee-d\'un-developpeur.html',
    category: 'chapter',
    parentCategory: 'La face cachée',
    chapterTime: 65,
    content: ['Aspect', 'répétitif', 'développeur']
  },
  // Chapitres - Un métier au cœur des mythes
  {
    title: 'L\'anglais et les maths !',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'chapter',
    parentCategory: 'Un métier au cœur des mythes',
    chapterTime: 0,
    content: ['anglais', 'maths', 'mathématiques', 'développeur']
  },
  {
    title: 'Le par cœur !',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'chapter',
    parentCategory: 'Un métier au cœur des mythes',
    chapterTime: 45,
    content: ['par cœur', 'mémorisation', 'mythes']
  },
  {
    title: '0 Erreures !',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'chapter',
    parentCategory: 'Un métier au cœur des mythes',
    chapterTime: 92,
    content: ['erreurs', 'bugs', 'développement']
  },
  {
    title: 'Pour les introvertis !',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'chapter',
    parentCategory: 'Un métier au cœur des mythes',
    chapterTime: 129,
    content: ['introvertis', 'sociabilité', 'communication']
  },
  {
    title: 'L\'IA va tout remplacer !',
    page: 'un-metier-au-coeur-des-mythes.html',
    category: 'chapter',
    parentCategory: 'Un métier au cœur des mythes',
    chapterTime: 158,
    content: ['IA', 'intelligence artificielle', 'automatisation']
  },
  // Chapitres - Conseil
  {
    title: 'Pour les débutants',
    page: 'conseil.html',
    category: 'chapter',
    parentCategory: 'Conseil',
    chapterTime: 0,
    content: ['débutants', 'conseil']
  },
  {
    title: 'Pour les alternants',
    page: 'conseil.html',
    category: 'chapter',
    parentCategory: 'Conseil',
    chapterTime: 45,
    content: ['alternants', 'alternance', 'conseil']
  },
  {
    title: 'Pour les futures développeurs',
    page: 'conseil.html',
    category: 'chapter',
    parentCategory: 'Conseil',
    chapterTime: 130,
    content: ['futures', 'développeurs', 'conseil']
  },
  // Chapitres - Podcast
  {
    title: 'Présentation',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 0,
    content: ['Présentation', 'podcast', 'introduction']
  },
  {
    title: 'Contexte',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 52,
    content: ['Contexte', 'podcast', 'background']
  },
  {
    title: 'Les Difficultés',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 175,
    content: ['Difficultés', 'podcast', 'challenges', 'problèmes']
  },
  {
    title: 'Tournage',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 208,
    content: ['Tournage', 'podcast', 'production', 'réalisation']
  },
  {
    title: 'L\'apport du projet',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 260,
    content: ['apport', 'projet', 'podcast', 'bénéfices']
  },
  {
    title: 'Retour critique',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 315,
    content: ['Retour', 'critique', 'podcast', 'analyse']
  },
  {
    title: 'BUT MMI',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 447,
    content: ['BUT', 'MMI', 'podcast', 'formation', 'études']
  },
  {
    title: 'Le métier idéal',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 532,
    content: ['métier', 'idéal', 'podcast', 'carrière']
  },
  {
    title: 'Conclusion',
    page: 'podcast.html',
    category: 'chapter',
    parentCategory: 'Podcast',
    chapterTime: 600,
    content: ['Conclusion', 'podcast', 'fin', 'résumé']
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
    this.input.placeholder = 'Chercher une catégorie ou un chapitre...';
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
      const subtitle = result.category === 'main' ? 'Catégorie principale' : `Chapitre • ${result.parentCategory}`;
      const chapterTime = result.chapterTime !== undefined ? `?chapter=${result.chapterTime}` : '';
      
      html += `
        <div class="search-result-item" data-page="${result.page}" data-chapter="${result.chapterTime || ''}">
          <div class="search-result-title">${this.highlightQuery(result.title)}</div>
          <div class="search-result-subtitle">${subtitle}</div>
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
        const chapter = item.getAttribute('data-chapter');
        this.navigateToPage(page, chapter);
      });
    });
  }

  highlightQuery(text) {
    const query = this.input.value.toLowerCase();
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  navigateToPage(page, chapter = '') {
    // Déterminer l'URL actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === page || (!currentPage && page === 'index.html')) {
      // On est déjà sur la page
      if (chapter) {
        // Si c'est un chapitre, chercher le bouton et déclencher un clic
        this.navigateToChapter(parseFloat(chapter));
      }
      
      // Fermer la barre
      this.input.value = '';
      this.resultsContainer.innerHTML = '';
      this.resultsContainer.style.display = 'none';
    } else {
      // Naviguer vers la page
      if (chapter) {
        window.location.href = `${page}?chapter=${chapter}`;
      } else {
        window.location.href = page;
      }
    }
  }

  navigateToChapter(chapterTime) {
    // Attendre un peu pour que le lecteur soit prêt
    const maxAttempts = 20;
    let attempts = 0;

    const checkAndSeek = () => {
      attempts++;
      
      // Vérifier si le lecteur YouTube est prêt
      if (typeof player !== 'undefined' && player && typeof player.seekTo === 'function') {
        try {
          player.seekTo(chapterTime, true);
          player.playVideo();
        } catch (e) {
          console.log('Impossible de naviguer au chapitre');
        }
      } else if (attempts < maxAttempts) {
        // Réessayer dans 100ms
        setTimeout(checkAndSeek, 100);
      }
    };

    checkAndSeek();
  }
}

// Initialiser quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = new SearchBar();
  
  // Vérifier si un chapitre est spécifié dans l'URL
  const params = new URLSearchParams(window.location.search);
  const chapter = params.get('chapter');
  
  if (chapter) {
    // Attendre que le lecteur soit prêt et naviguer au chapitre
    searchBar.navigateToChapter(parseFloat(chapter));
    // Nettoyer l'URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

