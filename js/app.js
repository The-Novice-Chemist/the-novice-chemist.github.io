// ==========================================
// CORE DATA MANAGEMENT & LOADING
// ==========================================

window.AppData = window.AppData || {};

// 1. Config Registration (Called by config.js files)
window.registerConfig = function(categoryId, configData) {
    window.AppData[categoryId] = configData;
    // Attempt to refresh if we are currently waiting on this category
    const route = getRouteFromHash();
    if (route.categoryId === categoryId) {
        render();
    }
};

// 2. Content Registration (Called by individual chapter files like fundamentals.js)
window.registerContent = function(categoryId, topicId, contentHtml) {
    const category = window.AppData[categoryId];
    if (category) {
        // Find the topic in the nested structure to cache the content
        let found = false;
        for (const mod of category.modules) {
            const topic = mod.topics.find(t => t.id === topicId);
            if (topic) {
                topic.content = contentHtml; // Cache it in memory
                found = true;
                break;
            }
        }
        if (found) {
            console.log(`[App] Loaded content for ${categoryId}/${topicId}`);
            render(); // Re-render to show the new content
        }
    }
};

// 3. Dynamic Loader
function loadTopicContent(categoryId, topicId) {
    const scriptId = `script-${categoryId}-${topicId}`;
    if (document.getElementById(scriptId)) return; // Already loading/loaded

    console.log(`[App] Fetching ${categoryId}/${topicId}.js...`);
    
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `js/${categoryId}/${topicId}.js`;
    script.onerror = () => {
        console.error(`Failed to load js/${categoryId}/${topicId}.js`);
        document.getElementById('main-content').innerHTML = `
            <div class="p-12 text-center">
                <div class="text-red-500 text-xl font-bold mb-2">Content Not Found</div>
                <p class="text-stone-500">Could not load <code>js/${categoryId}/${topicId}.js</code>.</p>
                <p class="text-xs text-stone-400 mt-4">Ensure the file exists and follows the <code>window.registerContent</code> pattern.</p>
            </div>
        `;
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
  const categoryId = parts[0];
  // Default logic: If we have a category, but no module/topic, we need to wait for config to load to know defaults
  const moduleId = parts[1] || null;
  const topicId = parts[2] || null;

  return { categoryId, moduleId, topicId };
}

function pushRoute(categoryId, moduleId = null, topicId = null) {
    if (!categoryId) {
        window.location.hash = '';
        return;
    }
    // Only allow Organic for now
    if (categoryId !== 'organic' && categoryId !== null) return;

    // If module/topic not provided, find defaults from data
    if (!moduleId || !topicId) {
        const catData = window.AppData[categoryId];
        if (catData) {
             const defMod = catData.modules[0];
             moduleId = moduleId || defMod.id;
             topicId = topicId || defMod.topics[0].id;
        }
    }
    window.location.hash = `${categoryId}/${moduleId}/${topicId}`;
}

// ==========================================
// RENDERER
// ==========================================

let state = { isMobileMenuOpen: false };

function render() {
    const route = getRouteFromHash();
    const { categoryId, moduleId, topicId } = route;

    // 1. Gather Categories (for Navbar)
    const availableCategories = Object.values(window.AppData).sort((a,b) => {
        // Enforce order
        const order = ['general', 'inorganic', 'organic', 'physical', 'industrial'];
        return order.indexOf(a.id) - order.indexOf(b.id);
    });

    renderNavbar(availableCategories, categoryId);

    // 2. Handle Welcome Screen
    if (!categoryId) {
        renderWelcome(availableCategories);
        return;
    }

    // 3. Handle Category Content
    const currentCategory = window.AppData[categoryId];
    
    if (!currentCategory) {
        document.getElementById('main-content').innerHTML = `<div class="p-12 text-center text-stone-400">Loading Configuration for ${categoryId}...</div>`;
        return;
    }

    // Resolve Defaults if route is incomplete
    let effectiveModuleId = moduleId || currentCategory.modules[0].id;
    let currentModule = currentCategory.modules.find(m => m.id === effectiveModuleId);
    if (!currentModule) {
        effectiveModuleId = currentCategory.modules[0].id;
        currentModule = currentCategory.modules[0];
    }

    let effectiveTopicId = topicId || currentModule.topics[0].id;
    let currentTopic = currentModule.topics.find(t => t.id === effectiveTopicId);
    if (!currentTopic) {
        effectiveTopicId = currentModule.topics[0].id;
        currentTopic = currentModule.topics[0];
    }

    // Update URL if we corrected defaults
    if (moduleId !== effectiveModuleId || topicId !== effectiveTopicId) {
        // Don't push state, just replace hash to avoid history spam
        window.history.replaceState(null, null, `#${categoryId}/${effectiveModuleId}/${effectiveTopicId}`);
    }

    // Render Sidebar
    renderSidebar(currentCategory.modules, effectiveModuleId, effectiveTopicId);

    // Render Content or Loading State
    if (currentTopic.content) {
        renderContent(currentModule, currentTopic);
    } else {
        // Content not loaded yet
        document.getElementById('main-content').innerHTML = `
            <div class="flex flex-col items-center justify-center h-full animate-pulse">
                <i data-lucide="loader-2" class="w-10 h-10 text-teal-600 animate-spin mb-4"></i>
                <div class="text-stone-500 font-serif">Loading Chapter...</div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        // Trigger Dynamic Load
        loadTopicContent(categoryId, effectiveTopicId);
    }

    // Mobile Menu State
    const sidebar = document.getElementById('sidebar-container');
    const overlay = document.getElementById('mobile-overlay');
    if (sidebar && overlay) {
        if (state.isMobileMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            sidebar.classList.remove('hidden'); // Ensure block
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
        // Style: Organic is active/hoverable. Others are disabled/greyed.
        let classes = "px-4 py-2 rounded-full text-sm font-medium transition-all ";
        if (isOrganic) {
            classes += currentId === cat.id 
                ? 'bg-stone-100 text-teal-800 font-semibold shadow-sm' 
                : 'text-stone-600 hover:bg-stone-50 hover:text-teal-700';
        } else {
            classes += 'text-stone-300 cursor-not-allowed';
        }

        // Only add action if organic
        const actionAttr = isOrganic ? `data-action="nav-category" data-id="${cat.id}"` : 'disabled';
        
        return `<button ${actionAttr} class="${classes}">${cat.title.replace(' Chemistry', '')}</button>`;
    }).join('');

    container.innerHTML = `
    <div class="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 lg:px-8 shadow-sm w-full">
      <div class="flex items-center gap-3 cursor-pointer group" data-action="go-home">
        <div class="p-2 bg-stone-900 rounded-lg group-hover:bg-teal-700 transition-colors pointer-events-none"><i data-lucide="beaker" class="w-5 h-5 text-white"></i></div>
        <span class="font-serif font-bold text-lg md:text-xl text-stone-900 tracking-tight pointer-events-none">The Novice Chemist</span>
      </div>
      <div class="hidden md:flex items-center space-x-1">${navItems}</div>
      <button data-action="toggle-mobile-menu" class="md:hidden p-2 text-stone-600"><i data-lucide="menu"></i></button>
    </div>`;
}

function renderSidebar(modules, curModId, curTopId) {
    const container = document.getElementById('sidebar-container');
    container.innerHTML = `<div class="h-full flex flex-col pt-4 md:pt-0"><div class="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
    ${modules.map(mod => `
        <div class="space-y-3 mb-8">
            <div class="px-3 text-xs font-bold text-teal-700/80 uppercase tracking-widest border-l-2 border-teal-500/20 pl-3">${mod.title}</div>
            <ul class="space-y-0.5">
                ${mod.topics.map(topic => {
                    const active = curModId === mod.id && curTopId === topic.id;
                    return `<li><button data-action="nav-topic" data-module="${mod.id}" data-topic="${topic.id}" class="group w-full flex items-center gap-3 px-3 py-2 text-sm transition-all rounded-md ${active ? 'bg-stone-100 text-teal-900 font-medium translate-x-1' : 'text-stone-500 hover:bg-stone-50'}">
                        <span class="w-1.5 h-1.5 rounded-full transition-all ${active ? 'bg-teal-600 scale-125' : 'bg-stone-300 group-hover:bg-stone-400'}"></span>
                        <span class="truncate flex-1 text-left pointer-events-none">${topic.title}</span>
                    </button></li>`;
                }).join('')}
            </ul>
        </div>
    `).join('')}
    </div></div>`;
}

function renderWelcome(categories) {
    const container = document.getElementById('main-content');
    if(categories.length === 0) { container.innerHTML = ""; return; }
    
    // Sort logic handled in render() but checking isOrganic again here for button state
    const buttons = categories.map(c => {
        const isOrganic = c.id === 'organic';
        const classes = isOrganic 
            ? "p-4 bg-white border border-stone-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all font-medium text-stone-700"
            : "p-4 bg-stone-50 border border-stone-100 rounded-xl text-stone-300 cursor-not-allowed";
        
        const action = isOrganic ? `data-action="nav-category" data-id="${c.id}"` : '';
        
        return `<button ${action} class="${classes}">${c.title.replace(' Chemistry','')}</button>`;
    }).join('');

    container.innerHTML = `
    <div class="max-w-5xl mx-auto p-6 md:p-12 min-h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
      <h1 class="text-5xl md:text-7xl font-serif font-medium text-stone-900 mb-6 tracking-tight">The Novice <span class="text-teal-700 italic">Chemist</span></h1>
      <p class="text-lg md:text-xl text-stone-500 max-w-2xl mb-12">Sri Lankan A-Level Chemistry.</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl w-full mb-16 px-4">
        ${buttons}
      </div>
    </div>`;
}

function renderContent(module, topic) {
    const container = document.getElementById('main-content');
    // For single-module configs (Organic), usually we don't need to show the module title if it's generic like "Course Content"
    // But we'll keep the pill style for consistency.
    
    container.innerHTML = `
    <div class="max-w-5xl mx-auto p-6 md:p-12 min-h-full animate-fade-in">
      <header class="mb-12 text-center">
        <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-100">${module.title}</div>
        <h1 class="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-4 leading-tight">${topic.title}</h1>
        <div class="h-1 w-20 bg-teal-600 mx-auto rounded-full opacity-80"></div>
      </header>
      <div class="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:text-stone-600 prose-a:text-teal-600 hover:prose-a:text-teal-700">
        ${topic.content}
      </div>
    </div>`;
    if (window.renderMathInElement) window.renderMathInElement(container, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}], throwOnError:false});
}

// Interaction
document.body.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if(!t) return;
    e.preventDefault();
    const a = t.dataset.action;
    if(a === 'nav-category') pushRoute(t.dataset.id);
    if(a === 'nav-topic') pushRoute(window.location.hash.split('/')[0].substring(1), t.dataset.module, t.dataset.topic); // Reuse current category from hash
    if(a === 'go-home') pushRoute(null);
    if(a === 'toggle-mobile-menu') { state.isMobileMenuOpen = !state.isMobileMenuOpen; render(); }
});

const overlay = document.getElementById('mobile-overlay');
if(overlay) overlay.addEventListener('click', () => { state.isMobileMenuOpen = false; render(); });

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
