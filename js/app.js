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
        for (const mod of category.modules) {
            const topic = mod.topics.find(t => t.id === topicId);
            if (topic) {
                topic.content = contentHtml;
                found = true;
                break;
            }
        }
        if (found) {
            render();
        }
    }
};

// 3. Dynamic Loader
function loadTopicContent(categoryId, topicId) {
    const scriptId = `script-${categoryId}-${topicId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `js/${categoryId}/${topicId}.js`; 
    script.onerror = () => {
        document.getElementById('main-content').innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center p-8">
                <div class="text-stone-300 mb-4"><i data-lucide="file-x" class="w-12 h-12"></i></div>
                <h3 class="text-xl font-hand-title text-stone-700 mb-2">Content Not Found</h3>
                <p class="text-stone-500 max-w-md font-hand-body text-xl">We couldn't load the file <code>js/${categoryId}/${topicId}.js</code>.</p>
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
    if (categoryId !== 'organic') return;

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

// State now includes sidebarOpen
let state = { 
    isSidebarOpen: true, // Default open on load
    isMobile: window.innerWidth < 768 
};

// Listen for resize
window.addEventListener('resize', () => {
    state.isMobile = window.innerWidth < 768;
    updateLayout();
});

function render() {
    const route = getRouteFromHash();
    const { categoryId, moduleId, topicId } = route;

    const availableCategories = Object.values(window.AppData).sort((a,b) => {
        const order = ['general', 'inorganic', 'organic', 'physical', 'industrial'];
        return order.indexOf(a.id) - order.indexOf(b.id);
    });

    renderNavbar(availableCategories, categoryId);

    if (!categoryId) {
        renderWelcome(availableCategories);
        updateLayout();
        return;
    }

    const currentCategory = window.AppData[categoryId];
    if (!currentCategory) {
        document.getElementById('main-content').innerHTML = `
            <div class="flex items-center justify-center h-full">
                <div class="animate-pulse text-stone-400 font-hand-title text-2xl">Loading Configuration...</div>
            </div>`;
        return;
    }

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

    if (moduleId !== effectiveModuleId || topicId !== effectiveTopicId) {
        window.history.replaceState(null, null, `#${categoryId}/${effectiveModuleId}/${effectiveTopicId}`);
    }

    renderSidebar(currentCategory.modules, effectiveModuleId, effectiveTopicId);
    updateLayout(); // Apply sidebar state classes

    if (currentTopic && currentTopic.content) {
        renderContent(currentModule, currentTopic);
    } else if (currentTopic) {
        document.getElementById('main-content').innerHTML = `
            <div class="flex flex-col items-center justify-center h-full animate-pulse">
                <i data-lucide="loader-2" class="w-10 h-10 text-teal-600 animate-spin mb-4"></i>
                <div class="text-stone-500 font-hand-title text-2xl">Loading Chapter...</div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        loadTopicContent(categoryId, effectiveTopicId);
    }
}

// Manages Sidebar Visibility CSS
function updateLayout() {
    const sidebar = document.getElementById('sidebar-container');
    const overlay = document.getElementById('mobile-overlay');
    
    // Clear manual overrides first
    sidebar.classList.remove('w-0', 'w-80', 'px-0', '-translate-x-full', 'translate-x-0', 'hidden', 'block');
    overlay.classList.add('hidden');

    if (state.isMobile) {
        // Mobile Behavior: Off-canvas
        sidebar.classList.add('fixed', 'w-80');
        if (state.isSidebarOpen) {
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
        }
    } else {
        // Desktop Behavior: Collapsible
        sidebar.classList.remove('fixed', '-translate-x-full');
        sidebar.classList.add('relative');
        
        if (state.isSidebarOpen) {
            sidebar.classList.add('w-80', 'translate-x-0');
        } else {
            sidebar.classList.add('w-0', 'border-none'); // Hide width and border
        }
    }
    if(window.lucide) window.lucide.createIcons();
}

function renderNavbar(categories, currentId) {
    const container = document.getElementById('navbar-container');
    const navItems = categories.map(cat => {
        const isOrganic = cat.id === 'organic';
        let btnClass = "px-4 py-2 rounded-full text-lg font-hand-body transition-all duration-200 ";
        
        if (isOrganic) {
            btnClass += currentId === cat.id 
                ? 'bg-teal-50 text-teal-800 font-bold shadow-sm ring-1 ring-teal-200' 
                : 'text-stone-600 hover:bg-stone-50 hover:text-teal-700 cursor-pointer';
        } else {
            btnClass += 'text-stone-300 opacity-60 cursor-not-allowed select-none';
        }
        const actionData = isOrganic ? `data-action="nav-category" data-id="${cat.id}"` : '';
        return `<button ${actionData} class="${btnClass}">${cat.title.replace(' Chemistry', '')}</button>`;
    }).join('');

    container.innerHTML = `
    <div class="h-16 bg-white/90 backdrop-blur-md border-b border-stone-200 flex items-center justify-between px-4 lg:px-6 shadow-sm w-full sticky top-0 z-50">
      <div class="flex items-center gap-4">
          <!-- Toggle Button (Visible on both Mobile and Desktop now) -->
          <button data-action="toggle-sidebar" class="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors" title="Toggle Sidebar">
            <i data-lucide="${state.isSidebarOpen ? 'panel-left-close' : 'panel-left-open'}" class="w-6 h-6"></i>
          </button>

          <div class="flex items-center gap-2 cursor-pointer group" data-action="go-home">
            <span class="font-hand-title font-bold text-2xl md:text-3xl text-stone-900 tracking-tight pointer-events-none group-hover:text-teal-700 transition-colors">The Novice Chemist</span>
          </div>
      </div>
      
      <div class="hidden md:flex items-center space-x-2">${navItems}</div>
    </div>`;
}

function renderSidebar(modules, curModId, curTopId) {
    const container = document.getElementById('sidebar-container');
    const modulesHtml = modules.map(mod => `
        <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 px-3">
                <div class="text-xl font-hand-title font-bold text-teal-800 tracking-wide">${mod.title}</div>
            </div>
            <ul class="space-y-1">
                ${mod.topics.map(topic => {
                    const active = curModId === mod.id && curTopId === topic.id;
                    return `<li>
                        <button data-action="nav-topic" data-module="${mod.id}" data-topic="${topic.id}" 
                            class="group w-full flex items-center gap-3 px-3 py-1.5 text-lg font-hand-body transition-all rounded-md
                            ${active 
                                ? 'text-teal-900 font-bold bg-teal-50/80 translate-x-1' 
                                : 'text-stone-500 hover:text-stone-800 hover:translate-x-1'}">
                            ${active ? '<i data-lucide="pen-tool" class="w-4 h-4 text-teal-600"></i>' : '<span class="w-4"></span>'}
                            <span class="truncate text-left pointer-events-none">${topic.title}</span>
                        </button>
                    </li>`;
                }).join('')}
            </ul>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="h-full flex flex-col bg-stone-50 w-80">
            <div class="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
                ${modulesHtml}
            </div>
        </div>`;
}

function renderWelcome(categories) {
    const container = document.getElementById('main-content');
    if(categories.length === 0) return;
    
    const buttons = categories.map(c => {
        const isOrganic = c.id === 'organic';
        const classes = isOrganic
            ? "group relative p-6 bg-white border-2 border-stone-200 rounded-lg hover:border-teal-400 hover:shadow-[4px_4px_0px_0px_rgba(45,212,191,0.5)] transition-all duration-300 cursor-pointer text-left"
            : "p-6 bg-stone-50 border border-stone-100 rounded-lg text-stone-300 cursor-not-allowed text-left";
        
        return `
        <button ${isOrganic ? `data-action="nav-category" data-id="${c.id}"` : ''} class="${classes}">
            <div class="font-hand-title font-bold text-3xl mb-1 ${isOrganic ? 'text-stone-800 group-hover:text-teal-800' : 'text-stone-300'}">${c.title}</div>
            <div class="text-xl font-hand-body ${isOrganic ? 'text-stone-500' : 'text-stone-300'}">${c.description || 'Module'}</div>
        </button>`;
    }).join('');

    container.innerHTML = `
    <div class="paper-bg min-h-full flex flex-col justify-center animate-fade-in p-8 relative">
      <div class="max-w-4xl mx-auto w-full">
          <div class="text-center mb-16">
              <h1 class="text-6xl md:text-8xl font-hand-title font-bold text-stone-900 mb-6 transform -rotate-2">
                The Novice <span class="text-teal-600">Chemist</span>
              </h1>
              <p class="text-2xl md:text-3xl font-hand-body text-stone-600 max-w-2xl mx-auto leading-relaxed transform rotate-1">
                Your complete digital companion for the Sri Lankan A-Level Chemistry syllabus.
              </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            ${buttons}
          </div>
      </div>
    </div>`;
    if(window.lucide) window.lucide.createIcons();
}

function renderContent(module, topic) {
    const container = document.getElementById('main-content');
    
    // Using 'paper-bg' class defined in CSS for the lined paper look
    container.innerHTML = `
    <div class="paper-bg min-h-full p-8 md:p-16 animate-fade-in">
      <div class="max-w-4xl mx-auto">
          <header class="mb-12 border-b-2 border-stone-200 pb-8 relative">
            <div class="absolute -left-4 top-1 w-8 h-8 bg-stone-200 rounded-full opacity-50"></div>
            <div class="flex items-center gap-2 text-xl font-hand-body font-bold text-teal-700 uppercase mb-2 pl-6">
                <span>${module.title.split(':')[0]}</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-hand-title font-bold text-stone-900 mb-2 pl-6 leading-tight">${topic.title}</h1>
          </header>
          
          <!-- Content Body with Handwriten Font -->
          <div class="font-hand-body text-2xl leading-[2rem] text-stone-800 prose-headings:font-hand-title prose-headings:font-bold prose-headings:text-teal-800 prose-strong:text-stone-900 prose-p:mb-0">
            ${topic.content}
          </div>
      </div>
    </div>`;
    
    if (window.renderMathInElement) window.renderMathInElement(container, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}], throwOnError:false});
    if (window.lucide) window.lucide.createIcons();
}

// Interaction Handlers
document.body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if(!t) return;
    if(t.classList.contains('cursor-not-allowed')) return;
    
    e.preventDefault();
    const a = t.dataset.action;
    
    if(a === 'toggle-sidebar') {
        state.isSidebarOpen = !state.isSidebarOpen;
        render(); // Re-renders navbar (icon update) and calls updateLayout
    }
    if(a === 'nav-category') pushRoute(t.dataset.id);
    if(a === 'nav-topic') {
        // On Mobile, auto-close sidebar after selection
        if(state.isMobile) state.isSidebarOpen = false;
        pushRoute(window.location.hash.split('/')[0].substring(1), t.dataset.module, t.dataset.topic);
        if(state.isMobile) render(); // Force re-render to close sidebar
    }
    if(a === 'go-home') pushRoute(null);
});

const overlay = document.getElementById('mobile-overlay');
if(overlay) overlay.addEventListener('click', () => { 
    state.isSidebarOpen = false; 
    render(); 
});

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
