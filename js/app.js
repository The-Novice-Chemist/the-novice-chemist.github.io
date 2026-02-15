// ==========================================
// CORE DATA MANAGEMENT & LOADING
// ==========================================

window.AppData = window.AppData || {};

// 1. Config Registration
window.registerConfig = function(categoryId, configData) {
    window.AppData[categoryId] = configData;
    const route = getRouteFromHash();
    if (route.categoryId === categoryId) {
        render();
    }
};

// 2. Content Registration
window.registerContent = function(categoryId, topicId, contentHtml) {
    const category = window.AppData[categoryId];
    if (category) {
        let found = false;
        // Search through all modules to find the topic
        for (const mod of category.modules) {
            const topic = mod.topics.find(t => t.id === topicId);
            if (topic) {
                topic.content = contentHtml;
                found = true;
                break;
            }
        }
        if (found) {
            console.log(`[App] Loaded content for ${categoryId}/${topicId}`);
            render();
        }
    }
};

// 3. Dynamic Loader
function loadTopicContent(categoryId, topicId) {
    const scriptId = `script-${categoryId}-${topicId}`;
    if (document.getElementById(scriptId)) return;

    console.log(`[App] Fetching js/${categoryId}/${topicId}.js...`);
    
    const script = document.createElement('script');
    script.id = scriptId;
    // Flat file structure: js/organic/alkanes.js
    script.src = `js/${categoryId}/${topicId}.js`; 
    script.onerror = () => {
        console.error(`Failed to load js/${categoryId}/${topicId}.js`);
        document.getElementById('main-content').innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center p-8">
                <div class="text-stone-300 mb-4"><i data-lucide="file-x" class="w-12 h-12"></i></div>
                <h3 class="text-xl font-serif text-stone-700 mb-2">Content Not Found</h3>
                <p class="text-stone-500 max-w-md">We couldn't load the file <code>js/${categoryId}/${topicId}.js</code>.</p>
            </div>
        `;
        if(window.lucide) window.lucide.createIcons();
    };
    document.body.appendChild(script);
}

// ==========================================
// ROUTER
// ==========================================

function getRouteFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase();
  if (!hash) return { categoryId: null, moduleId: null, topicId: null };

  const parts = hash.split('/');
  return { 
      categoryId: parts[0], 
      moduleId: parts[1] || null, 
      topicId: parts[2] || null 
  };
}

function pushRoute(categoryId, moduleId = null, topicId = null) {
    if (!categoryId) {
        window.location.hash = '';
        return;
    }
    
    // RESTRICTION: Only allow Organic Chemistry
    if (categoryId !== 'organic') return;

    // Resolve Defaults
    if (!moduleId || !topicId) {
        const catData = window.AppData[categoryId];
        if (catData && catData.modules.length > 0) {
             const defMod = catData.modules[0];
             moduleId = moduleId || defMod.id;
             topicId = topicId || (defMod.topics.length > 0 ? defMod.topics[0].id : null);
        }
    }
    
    if(moduleId && topicId) {
        window.location.hash = `${categoryId}/${moduleId}/${topicId}`;
    }
}

// ==========================================
// RENDERER
// ==========================================

let state = { isMobileMenuOpen: false };

function render() {
    const route = getRouteFromHash();
    const { categoryId, moduleId, topicId } = route;

    // 1. Gather Categories
    const availableCategories = Object.values(window.AppData).sort((a,b) => {
        const order = ['general', 'inorganic', 'organic', 'physical', 'industrial'];
        return order.indexOf(a.id) - order.indexOf(b.id);
    });

    renderNavbar(availableCategories, categoryId);

    // 2. Welcome Screen (if no category selected)
    if (!categoryId) {
        renderWelcome(availableCategories);
        return;
    }

    // 3. Category Content
    const currentCategory = window.AppData[categoryId];
    if (!currentCategory) {
        // Still loading config?
        document.getElementById('main-content').innerHTML = `
            <div class="flex items-center justify-center h-full">
                <div class="animate-pulse text-stone-400 font-serif">Loading Configuration...</div>
            </div>`;
        return;
    }

    // Determine current module/topic with fallbacks
    let effectiveModuleId = moduleId;
    let effectiveTopicId = topicId;

    let currentModule = currentCategory.modules.find(m => m.id === effectiveModuleId);
    if (!currentModule) {
        currentModule = currentCategory.modules[0];
        effectiveModuleId = currentModule.id;
    }

    let currentTopic = currentModule.topics.find(t => t.id === effectiveTopicId);
    if (!currentTopic && currentModule.topics.length > 0) {
        currentTopic = currentModule.topics[0];
        effectiveTopicId = currentTopic.id;
    }

    // Fix URL if we fell back to defaults
    if (moduleId !== effectiveModuleId || topicId !== effectiveTopicId) {
        window.history.replaceState(null, null, `#${categoryId}/${effectiveModuleId}/${effectiveTopicId}`);
    }

    renderSidebar(currentCategory.modules, effectiveModuleId, effectiveTopicId);

    // Render Topic Content
    if (currentTopic && currentTopic.content) {
        renderContent(currentModule, currentTopic);
    } else if (currentTopic) {
        // Show Loading & Fetch Content
        document.getElementById('main-content').innerHTML = `
            <div class="flex flex-col items-center justify-center h-full animate-pulse">
                <i data-lucide="loader-2" class="w-10 h-10 text-teal-600 animate-spin mb-4"></i>
                <div class="text-stone-500 font-serif">Loading Chapter...</div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        loadTopicContent(categoryId, effectiveTopicId);
    }

    // Handle Mobile Menu
    const sidebar = document.getElementById('sidebar-container');
    const overlay = document.getElementById('mobile-overlay');
    if (sidebar && overlay) {
        if (state.isMobileMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            sidebar.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }
}

function renderNavbar(categories, currentId) {
    const container = document.getElementById('navbar-container');
    const navItems = categories.map(cat => {
        const isOrganic = cat.id === 'organic';
        // Base classes
        let btnClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ";
        
        if (isOrganic) {
            // Active or Inactive Organic State
            btnClass += currentId === cat.id 
                ? 'bg-stone-100 text-teal-800 font-bold shadow-sm ring-1 ring-stone-200' 
                : 'text-stone-600 hover:bg-stone-50 hover:text-teal-700 cursor-pointer';
        } else {
            // Disabled State for others
            btnClass += 'text-stone-300 opacity-60 cursor-not-allowed select-none';
        }

        const actionData = isOrganic ? `data-action="nav-category" data-id="${cat.id}"` : '';
        
        return `<button ${actionData} class="${btnClass}">${cat.title.replace(' Chemistry', '')}</button>`;
    }).join('');

    container.innerHTML = `
    <div class="h-16 bg-white/80 backdrop-blur-md border-b border-stone-200 flex items-center justify-between px-4 lg:px-8 shadow-sm w-full sticky top-0">
      <div class="flex items-center gap-3 cursor-pointer group" data-action="go-home">
        <div class="p-2 bg-stone-900 rounded-lg group-hover:bg-teal-700 transition-colors pointer-events-none shadow-md">
            <i data-lucide="beaker" class="w-5 h-5 text-white"></i>
        </div>
        <span class="font-serif font-bold text-lg md:text-xl text-stone-900 tracking-tight pointer-events-none">The Novice Chemist</span>
      </div>
      <div class="hidden md:flex items-center space-x-2">${navItems}</div>
      <button data-action="toggle-mobile-menu" class="md:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"><i data-lucide="menu"></i></button>
    </div>`;
    if(window.lucide) window.lucide.createIcons();
}

function renderSidebar(modules, curModId, curTopId) {
    const container = document.getElementById('sidebar-container');
    
    const modulesHtml = modules.map(mod => `
        <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 px-3">
                <div class="h-px bg-teal-200 w-4"></div>
                <div class="text-xs font-bold text-teal-800 uppercase tracking-widest">${mod.title}</div>
            </div>
            <ul class="space-y-1">
                ${mod.topics.map(topic => {
                    const active = curModId === mod.id && curTopId === topic.id;
                    return `<li>
                        <button data-action="nav-topic" data-module="${mod.id}" data-topic="${topic.id}" 
                            class="group w-full flex items-center gap-3 px-3 py-2 text-sm transition-all rounded-r-lg border-l-[3px] 
                            ${active 
                                ? 'bg-stone-50 border-teal-600 text-teal-900 font-semibold' 
                                : 'border-transparent text-stone-500 hover:bg-stone-50 hover:text-stone-900'}">
                            <span class="truncate text-left pointer-events-none">${topic.title}</span>
                            ${active ? '<i data-lucide="chevron-right" class="w-3 h-3 text-teal-500 ml-auto"></i>' : ''}
                        </button>
                    </li>`;
                }).join('')}
            </ul>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="h-full flex flex-col bg-white">
            <div class="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
                ${modulesHtml}
            </div>
        </div>`;
    if(window.lucide) window.lucide.createIcons();
}

function renderWelcome(categories) {
    const container = document.getElementById('main-content');
    if(categories.length === 0) return;
    
    const buttons = categories.map(c => {
        const isOrganic = c.id === 'organic';
        const classes = isOrganic
            ? "group relative p-6 bg-white border border-stone-200 rounded-2xl hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
            : "p-6 bg-stone-50 border border-stone-100 rounded-2xl text-stone-300 cursor-not-allowed text-left";
        
        const iconColor = isOrganic ? "text-teal-600 group-hover:scale-110 transition-transform" : "text-stone-300";
        const titleColor = isOrganic ? "text-stone-800 group-hover:text-teal-800" : "text-stone-300";
        
        return `
        <button ${isOrganic ? `data-action="nav-category" data-id="${c.id}"` : ''} class="${classes}">
            <div class="mb-4 ${iconColor}">
                <i data-lucide="${getIconForCategory(c.id)}" class="w-8 h-8"></i>
            </div>
            <div class="font-serif font-bold text-lg mb-1 ${titleColor}">${c.title}</div>
            <div class="text-sm ${isOrganic ? 'text-stone-500' : 'text-stone-300'}">${c.description || 'Module'}</div>
            ${!isOrganic ? '<div class="absolute top-4 right-4"><i data-lucide="lock" class="w-4 h-4 text-stone-200"></i></div>' : ''}
        </button>`;
    }).join('');

    container.innerHTML = `
    <div class="max-w-6xl mx-auto p-6 md:p-12 min-h-full flex flex-col justify-center animate-fade-in">
      <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center p-3 bg-teal-50 rounded-2xl mb-6 ring-4 ring-teal-50/50">
            <i data-lucide="atom" class="w-10 h-10 text-teal-700"></i>
          </div>
          <h1 class="text-5xl md:text-7xl font-serif font-medium text-stone-900 mb-6 tracking-tight">
            The Novice <span class="text-teal-700 italic">Chemist</span>
          </h1>
          <p class="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Your complete digital companion for the Sri Lankan A-Level Chemistry syllabus.
          </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">
        ${buttons}
      </div>
    </div>`;
    if(window.lucide) window.lucide.createIcons();
}

function renderContent(module, topic) {
    const container = document.getElementById('main-content');
    container.innerHTML = `
    <div class="max-w-4xl mx-auto p-8 md:p-16 min-h-full animate-fade-in bg-white shadow-sm my-4 md:my-8 rounded-2xl border border-stone-100">
      <header class="mb-12 border-b border-stone-100 pb-8">
        <div class="flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-4">
            <span class="bg-teal-50 px-3 py-1 rounded-full border border-teal-100">${module.title.split(':')[0]}</span>
            <span class="text-stone-300">/</span>
            <span>Chapter View</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">${topic.title}</h1>
      </header>
      <div class="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-800 prose-p:text-stone-600 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-xl">
        ${topic.content}
      </div>
    </div>`;
    if (window.renderMathInElement) window.renderMathInElement(container, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}], throwOnError:false});
    if (window.lucide) window.lucide.createIcons();
}

function getIconForCategory(id) {
    const map = {
        'general': 'box',
        'inorganic': 'gem',
        'organic': 'leaf',
        'physical': 'zap',
        'industrial': 'factory'
    };
    return map[id] || 'circle';
}

// Interaction Handlers
document.body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if(!t) return;
    if(t.classList.contains('cursor-not-allowed')) return; // Prevent clicks on disabled items
    
    e.preventDefault();
    const a = t.dataset.action;
    if(a === 'nav-category') pushRoute(t.dataset.id);
    if(a === 'nav-topic') pushRoute(window.location.hash.split('/')[0].substring(1), t.dataset.module, t.dataset.topic);
    if(a === 'go-home') pushRoute(null);
    if(a === 'toggle-mobile-menu') { state.isMobileMenuOpen = !state.isMobileMenuOpen; render(); }
});

const overlay = document.getElementById('mobile-overlay');
if(overlay) overlay.addEventListener('click', () => { state.isMobileMenuOpen = false; render(); });

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
