// Defensive data loading
function getSafeData(key) {
    if (window.AppData && window.AppData[key]) {
        console.log(`[App] Loaded ${key}`);
        return window.AppData[key];
    }
    console.warn(`[App] Missing syllabus data for: ${key}`);
    return null;
}

// Ensure AppData exists
window.AppData = window.AppData || {};

// ==========================================
// ROUTER LOGIC
// ==========================================
function getRouteFromHash() {
  const CATEGORIES = [
    getSafeData('general'),
    getSafeData('inorganic'),
    getSafeData('organic'),
    getSafeData('physical'),
    getSafeData('industrial')
  ].filter(Boolean);

  const hash = window.location.hash.slice(1).toLowerCase();
  if (!hash) return { categoryId: null, moduleId: null, topicId: null };

  const parts = hash.split('/');
  const categoryId = parts[0];
  const moduleId = parts[1] || null;
  const topicId = parts[2] || null;

  const category = CATEGORIES.find(c => c.id === categoryId);
  if (category) {
    const effectiveModuleId = moduleId || category.modules[0].id;
    const module = category.modules.find(m => m.id === effectiveModuleId);
    const effectiveTopicId = topicId || (module ? module.topics[0].id : null);
    
    return { categoryId: category.id, moduleId: effectiveModuleId, topicId: effectiveTopicId };
  }
  return { categoryId: null, moduleId: null, topicId: null };
}

function pushRoute(categoryId, moduleId = null, topicId = null) {
  let hash = '';
  if (categoryId) {
    hash = categoryId;
    if (moduleId) {
      hash += `/${moduleId}`;
      if (topicId) hash += `/${topicId}`;
    }
  }
  window.location.hash = hash;
}

// ==========================================
// COMPONENTS
// ==========================================

function renderNavbar(categories, currentCategoryId) {
  const container = document.getElementById('navbar-container');
  if (!container) return;
  
  if (categories.length === 0) {
      container.innerHTML = `
        <div class="h-16 bg-white border-b border-red-200 flex items-center px-4 lg:px-8 shadow-sm w-full">
            <span class="font-serif font-bold text-lg text-red-800">System Error: Data Missing</span>
        </div>`;
      return;
  }

  const navItems = categories.map(cat => {
    const isActive = currentCategoryId === cat.id;
    return `
      <button
        data-action="nav-category"
        data-id="${cat.id}"
        class="
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${isActive 
            ? 'bg-stone-100 text-teal-800 font-semibold' 
            : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
          }
        "
      >
        ${cat.title.replace(' Chemistry', '')}
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div class="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 lg:px-8 shadow-sm w-full">
      <div class="flex items-center gap-3 cursor-pointer group" data-action="go-home">
        <div class="p-2 bg-stone-900 rounded-lg group-hover:bg-teal-700 transition-colors duration-300 pointer-events-none">
          <i data-lucide="beaker" class="w-5 h-5 text-white"></i>
        </div>
        <span class="font-serif font-bold text-lg md:text-xl text-stone-900 tracking-tight pointer-events-none">The Novice Chemist</span>
      </div>
      <div class="hidden md:flex items-center space-x-1">${navItems}</div>
      <button data-action="toggle-mobile-menu" class="md:hidden p-2 text-stone-600">
        <i data-lucide="menu"></i>
      </button>
    </div>
  `;
}

function renderSidebar(modules, currentModuleId, currentTopicId) {
  const container = document.getElementById('sidebar-container');
  if (!container) return;
  
  if (!modules || modules.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    container.classList.remove('md:block');
    return;
  }

  container.classList.remove('hidden');
  container.classList.add('md:block');

  const html = modules.map(module => `
    <div class="space-y-3 mb-8">
      <div class="px-3 text-xs font-bold text-teal-700/80 uppercase tracking-widest border-l-2 border-teal-500/20 pl-3">
        ${module.title}
      </div>
      <ul class="space-y-0.5">
        ${module.topics.map(topic => {
          const isActive = currentModuleId === module.id && currentTopicId === topic.id;
          return `
            <li>
              <button
                data-action="nav-topic"
                data-module="${module.id}"
                data-topic="${topic.id}"
                class="
                  group w-full flex items-center gap-3 px-3 py-2 text-sm transition-all duration-300 rounded-md
                  ${isActive 
                    ? 'bg-stone-100 text-teal-900 font-medium translate-x-1' 
                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                  }
                "
              >
                <span class="
                  w-1.5 h-1.5 rounded-full transition-all duration-300
                  ${isActive ? 'bg-teal-600 scale-125' : 'bg-stone-300 group-hover:bg-stone-400'}
                "></span>
                <span class="truncate flex-1 text-left pointer-events-none">${topic.title}</span>
                ${isActive ? '<i data-lucide="chevron-right" class="w-3.5 h-3.5 text-teal-400"></i>' : ''}
              </button>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `).join('');

  container.innerHTML = `<div class="h-full flex flex-col pt-4 md:pt-0"><div class="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">${html}</div></div>`;
}

function renderWelcome(categories) {
  const container = document.getElementById('main-content');
  if (!container) return;
  
  const displayCats = categories.length > 0 ? categories : [
    {id:'error', title: 'Data Loading Error', icon: 'alert-triangle'}
  ];
  
  const categoryCards = displayCats.map(cat => {
    const iconMap = {
        'general': 'atom',
        'inorganic': 'layers',
        'organic': 'flask-conical',
        'physical': 'flame',
        'industrial': 'factory'
    };
    const icon = iconMap[cat.id] || 'circle';

    return `
    <button data-action="nav-category" data-id="${cat.id}" class="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md hover:border-teal-100 transition-all duration-300 cursor-pointer group w-full">
      <div class="mb-3 text-stone-400 group-hover:text-teal-600 transition-colors pointer-events-none">
        <i data-lucide="${icon}" class="w-6 h-6"></i>
      </div>
      <span class="text-sm font-medium text-stone-600 group-hover:text-stone-900 pointer-events-none">${cat.title.replace(' Chemistry', '')}</span>
    </button>
  `}).join('');

  container.innerHTML = `
    <div class="max-w-5xl mx-auto p-6 md:p-12 min-h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
      <div class="relative mb-12">
        <div class="absolute inset-0 bg-stone-200 blur-3xl opacity-30 rounded-full w-40 h-40 mx-auto"></div>
        <div class="relative bg-white p-6 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100">
           <i data-lucide="beaker" class="w-16 h-16 text-stone-800" stroke-width="1.5"></i>
        </div>
      </div>
      <h1 class="text-5xl md:text-7xl font-serif font-medium text-stone-900 mb-6 tracking-tight">The Novice <span class="text-teal-700 italic">Chemist</span></h1>
      <p class="text-lg md:text-xl text-stone-500 max-w-2xl mb-12 leading-relaxed font-light">Your complete digital companion for the <br/> <strong class="font-medium text-stone-700">Sri Lankan A-Level Chemistry</strong> syllabus.</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl w-full mb-16 px-4">${categoryCards}</div>
      <button data-action="nav-category" data-id="organic" class="group relative inline-flex items-center gap-4 bg-stone-900 hover:bg-teal-800 text-white text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-stone-200 hover:shadow-teal-100 hover:-translate-y-1 overflow-hidden">
        <span class="relative z-10 pointer-events-none">Start with Organic</span>
        <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"></i>
      </button>
    </div>
  `;
}

function renderContent(module, topic) {
  const container = document.getElementById('main-content');
  if (!container) return;
  
  container.innerHTML = `
    <div class="max-w-5xl mx-auto p-6 md:p-12 min-h-full animate-fade-in">
      <header class="mb-12 text-center">
        <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-100">${module.title.split(':')[0]}</div>
        <h1 class="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-4 leading-tight">${topic.title}</h1>
        <div class="h-1 w-20 bg-teal-600 mx-auto rounded-full opacity-80"></div>
      </header>
      <div class="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:text-stone-600 prose-a:text-teal-600 hover:prose-a:text-teal-700">
        ${topic.content}
      </div>
    </div>
  `;

  if (window.renderMathInElement) {
    try {
        window.renderMathInElement(container, {
          delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
          throwOnError: false
        });
    } catch(e) { console.warn("KaTeX render error", e); }
  }
}

// ==========================================
// MAIN APP LOGIC
// ==========================================

let state = {
  currentCategoryId: null,
  currentModuleId: null,
  currentTopicId: null,
  isMobileMenuOpen: false
};

function render() {
  try {
    const CATEGORIES = [
      getSafeData('general'),
      getSafeData('inorganic'),
      getSafeData('organic'),
      getSafeData('physical'),
      getSafeData('industrial')
    ].filter(Boolean);

    if (CATEGORIES.length === 0) {
        // Fallback or loading state
        console.log("Waiting for data...");
    }

    const { currentCategoryId, currentModuleId, currentTopicId, isMobileMenuOpen } = state;
    const currentCategory = CATEGORIES.find(c => c.id === currentCategoryId);
    const currentModule = currentCategory?.modules.find(m => m.id === currentModuleId);
    const currentTopic = currentModule?.topics.find(t => t.id === currentTopicId);

    renderNavbar(CATEGORIES, currentCategoryId);
    renderSidebar(currentCategory ? currentCategory.modules : [], currentModuleId, currentTopicId);

    if (currentCategory && currentModule && currentTopic) {
      renderContent(currentModule, currentTopic);
    } else {
      renderWelcome(CATEGORIES);
    }

    const sidebarContainer = document.getElementById('sidebar-container');
    const overlay = document.getElementById('mobile-overlay');
    
    if (sidebarContainer && overlay) {
      if (isMobileMenuOpen) {
        sidebarContainer.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        sidebarContainer.classList.remove('hidden');
        sidebarContainer.classList.add('block');
      } else {
        sidebarContainer.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  } catch (error) {
    console.error("Render Error:", error);
    document.getElementById('main-content').innerHTML = `<div class="p-8 text-red-600">Critical Render Error: ${error.message}</div>`;
  }
}

// Actions
function navigateToCategory(categoryId) {
  const CATEGORIES = [
      getSafeData('general'),
      getSafeData('inorganic'),
      getSafeData('organic'),
      getSafeData('physical'),
      getSafeData('industrial')
    ].filter(Boolean);

  const category = CATEGORIES.find(c => c.id === categoryId);
  if (category) {
    const moduleId = category.modules[0].id;
    const topicId = category.modules[0].topics[0].id;
    state.currentCategoryId = categoryId;
    state.currentModuleId = moduleId;
    state.currentTopicId = topicId;
    state.isMobileMenuOpen = false;
    pushRoute(categoryId, moduleId, topicId);
    render();
  } else {
    console.warn(`Category not found: ${categoryId}`);
  }
}

function navigateToTopic(moduleId, topicId) {
  state.currentModuleId = moduleId;
  state.currentTopicId = topicId;
  state.isMobileMenuOpen = false;
  pushRoute(state.currentCategoryId, moduleId, topicId);
  render();
}

function goHome() {
  state = { currentCategoryId: null, currentModuleId: null, currentTopicId: null, isMobileMenuOpen: false };
  pushRoute(null);
  render();
}

// Event Delegation
document.body.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;

  if (action === 'nav-category') {
    e.preventDefault();
    navigateToCategory(target.dataset.id);
  } else if (action === 'nav-topic') {
    e.preventDefault();
    navigateToTopic(target.dataset.module, target.dataset.topic);
  } else if (action === 'go-home') {
    e.preventDefault();
    goHome();
  } else if (action === 'toggle-mobile-menu') {
    e.preventDefault();
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    render();
  }
});

const overlay = document.getElementById('mobile-overlay');
if (overlay) overlay.addEventListener('click', () => { state.isMobileMenuOpen = false; render(); });

window.addEventListener('hashchange', () => {
  const route = getRouteFromHash();
  state = { ...state, ...route };
  render();
});

// Init
console.log("App starting...");
window.addEventListener('DOMContentLoaded', () => {
    const route = getRouteFromHash();
    state = { ...state, ...route };
    render();
});