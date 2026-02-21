/**
 * Central Sidebar Configuration & Renderer
 * 
 * Usage in HTML:
 * <script src="[path_to_root]/js/sidebar.js"></script>
 * <script>
 *   renderSidebar({
 *     root: '../../',       // Path to project root
 *     module: 's-block',    // Which sidebar menu to load
 *     active: 'trends'      // ID of the active page to highlight
 *   });
 * </script>
 */

const SIDEBAR_CONFIG = {
    'organic': {
        title: 'Organic',
        icon: 'leaf',
        color: 'emerald', // tailwind class: text-emerald-600, etc.
        basePath: 'organic/',
        items: [
            { type: 'link', label: '1) Fundamentals', href: 'fundamentals.html', id: 'fundamentals' },
            { type: 'link', label: '2) Nomenclature', href: 'nomenclature.html', id: 'nomenclature' },
            { type: 'link', label: '3) Alkanes', href: 'alkanes.html', id: 'alkanes' },
            { type: 'link', label: '4) Alkenes', href: 'alkenes.html', id: 'alkenes' },
            { type: 'link', label: '5) Benzene', href: 'benzene.html', id: 'benzene' }
        ]
    },
    's-block': {
        title: 's-Block',
        icon: 'component',
        color: 'purple',
        basePath: 'inorganic/sblock/',
        items: [
            { type: 'header', label: 'Topics' },
            { type: 'link', label: '1) s-Block Group Trends', href: 'trends.html', id: 'trends' },
            { type: 'link', label: '2) Flame Tests', href: 'flametest.html', id: 'flametest' },
            { type: 'accordion', label: '3) Reactions', id: 'reactions', items: [
                { label: 'Reactions with Acids', href: 'reactions/acids.html', id: 'acids' },
                { label: 'Reactions with Bases', href: 'reactions/bases.html', id: 'bases' },
                { label: 'Reactions with Water', href: 'reactions/water.html', id: 'water' },
                { label: 'Reactions with Oxygen', href: 'reactions/oxygen.html', id: 'oxygen' },
                { label: 'Reactions with Hydrogen', href: 'reactions/hydrogen.html', id: 'hydrogen' },
                { label: 'Reactions with Nitrogen', href: 'reactions/nitrogen.html', id: 'nitrogen' },
            ]},
            { type: 'link', label: '4) Solubility of s-Block Salts', href: 'solubility.html', id: 'solubility' },
            { type: 'link', label: '5) Thermal Decomposition of s-Block Salts', href: 'decomposition.html', id: 'decomposition' },
            { type: 'link', label: '6) Thermal Stability of s-Block Salts', href: 'stability.html', id: 'stability' },
        ]
    },
    'p-block': {
        title: 'p-Block',
        icon: 'layout-grid',
        color: 'indigo',
        basePath: 'inorganic/pblock/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: 'Overview', href: 'index.html', id: 'pblock-index' }
        ]
    },
    'd-block': {
        title: 'd-Block',
        icon: 'hexagon',
        color: 'rose',
        basePath: 'inorganic/dblock/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: 'Overview', href: 'index.html', id: 'dblock-index' }
        ]
    },
    'general': {
        title: 'General Chem',
        icon: 'atom',
        color: 'blue',
        basePath: 'general/',
        items: [
             { type: 'link', label: '1) Atomic Structure', href: 'structure.html', id: 'structure' },
             { type: 'link', label: '2) Bonding', href: '#', id: 'bonding' },
             { type: 'link', label: '3) Stoichiometry', href: '#', id: 'stoichiometry' },
        ]
    },
    'physical': {
        title: 'Physical Chem',
        icon: 'zap',
        color: 'orange',
        basePath: 'physical/',
        items: [
             { type: 'link', label: '1) Equilibria', href: 'equilibria.html', id: 'equilibria' },
             { type: 'link', label: '2) Kinetics', href: '#', id: 'kinetics' },
             { type: 'link', label: '3) Energetics', href: '#', id: 'energetics' },
        ]
    },
    'industrial': {
        title: 'Industrial',
        icon: 'wrench',
        color: 'slate',
        basePath: 'industrial/',
        items: [
             { type: 'link', label: '1) Nitrogen Industry', href: 'nitrogen.html', id: 'nitrogen' },
             { type: 'link', label: '2) Sulfur Industry', href: '#', id: 'sulfur' },
        ]
    },
    'inorganic': {
        title: 'Inorganic',
        icon: 'component',
        color: 'purple',
        basePath: 'inorganic/',
        items: [
            { type: 'link', label: '1) Periodicity', href: 'periodicity.html', id: 'periodicity' },
            { type: 'header', label: 'Blocks' },
            { type: 'link', label: 's-Block', href: 'sblock/trends.html', id: 'sblock' },
            { type: 'link', label: 'p-Block', href: 'pblock/index.html', id: 'pblock' },
            { type: 'link', label: 'd-Block', href: 'dblock/index.html', id: 'dblock' },
        ]
    }
};

function renderSidebar(config) {
    const { root, module, active } = config;
    const data = SIDEBAR_CONFIG[module];
    
    if (!data) return console.error(`Sidebar module '${module}' not found.`);

    // 1. Inject Toggle Checkbox (Mobile)
    const toggleHTML = `
        <input type="checkbox" id="sidebar-toggle" class="peer hidden">
        <label for="sidebar-toggle" class="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-30 hidden peer-checked:block md:peer-checked:hidden cursor-pointer transition-opacity"></label>
    `;

    // 2. Build Sidebar HTML
    let listHTML = '';

    // Helper to format label with hanging indent for numbers
    const formatLabel = (label) => {
        const match = label.match(/^(\d+\))\s+(.+)$/);
        if (match) {
            return `<span class="flex gap-1.5"><span class="shrink-0">${match[1]}</span><span>${match[2]}</span></span>`;
        }
        return `<span class="leading-snug">${label}</span>`;
    };

    data.items.forEach(item => {
        if (item.type === 'header') {
            listHTML += `<li class="px-3 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">${item.label}</li>`;
        } else if (item.type === 'link') {
            const isActive = active === item.id;
            const linkPath = item.absolute ? root + item.href : root + data.basePath + item.href;
            
            // Color classes based on active state
            const baseClass = "flex items-start gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors";
            const activeClass = `bg-${data.color}-50 text-${data.color}-700 border border-${data.color}-100 shadow-sm`;
            const inactiveClass = `text-slate-600 hover:bg-slate-50 hover:text-${data.color}-700`;
            const className = `${baseClass} ${isActive ? activeClass : inactiveClass}`;

            // Icon or Bullet logic
            let iconHTML = '';
            if (item.icon) {
                iconHTML = `<i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 mt-0.5"></i>`;
            } else if (isActive) {
                 iconHTML = `<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-${data.color}-500 shrink-0"></span>`;
            } else {
                 iconHTML = `<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>`; // Default bullet
            }

            listHTML += `
                <li>
                    <a href="${linkPath}" class="${className}">
                        ${iconHTML}
                        ${formatLabel(item.label)}
                    </a>
                </li>
            `;
        } else if (item.type === 'accordion') {
            // Render as a flat list with a header, aligned with other items
            let subItemsHTML = '';
            item.items.forEach(sub => {
                const isSubActive = active === sub.id;
                const subLink = root + data.basePath + sub.href;
                const subClass = isSubActive 
                    ? `font-bold text-${data.color}-700 bg-${data.color}-50` 
                    : `text-slate-500 hover:text-${data.color}-700 hover:bg-slate-50`;
                
                subItemsHTML += `
                    <li>
                        <a href="${subLink}" class="block px-4 py-2 text-sm leading-snug rounded-r-md transition-colors ${subClass}">
                            ${sub.label}
                        </a>
                    </li>
                `;
            });

            // Add bullet to align with other links
            const iconHTML = `<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>`;

            listHTML += `
                <li>
                    <div class="flex items-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600">
                        ${iconHTML}
                        ${formatLabel(item.label)}
                    </div>
                    <ul class="pl-3 mt-1 ml-3 border-l-2 border-slate-100 space-y-1">
                        ${subItemsHTML}
                    </ul>
                </li>
            `;
        }
    });

    const asideHTML = `
    <aside class="fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 -translate-x-full peer-checked:translate-x-0 md:translate-x-0 md:peer-checked:-translate-x-full">
        <div class="h-16 flex items-center px-6 border-b border-slate-100">
            <a href="${root}index.html" class="flex items-center gap-2 text-slate-500 hover:text-${data.color}-600 transition-colors">
                <i data-lucide="arrow-left" class="w-4 h-4"></i><span class="font-bold text-sm uppercase tracking-wide">Back to Home</span>
            </a>
        </div>
        <div class="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar space-y-8">
            <div>
                <div class="flex items-center gap-3 px-3 mb-6">
                    <div class="w-8 h-8 bg-${data.color}-50 text-${data.color}-600 rounded-lg flex items-center justify-center">
                        <i data-lucide="${data.icon}" class="w-4 h-4"></i>
                    </div>
                    <span class="font-bold text-lg text-slate-900">${data.title}</span>
                </div>
                <ul class="space-y-2">
                    ${listHTML}
                </ul>
            </div>
        </div>
    </aside>
    `;

    // Inject into DOM
    document.body.insertAdjacentHTML('afterbegin', toggleHTML + asideHTML);
    
    // 3. Inject Top Nav for Inorganic Blocks
    if (['s-block', 'p-block', 'd-block'].includes(module)) {
        const header = document.querySelector('header');
        if (header) {
            const switcherHTML = `
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-slate-100 p-1 rounded-lg">
                    <a href="${root}inorganic/sblock/trends.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 's-block' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}">s-Block</a>
                    <a href="${root}inorganic/pblock/index.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 'p-block' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}">p-Block</a>
                    <a href="${root}inorganic/dblock/index.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 'd-block' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}">d-Block</a>
                </div>
            `;
            // Ensure header is relative for absolute positioning of the switcher
            if (getComputedStyle(header).position === 'static') {
                header.style.position = 'relative';
            }
            header.insertAdjacentHTML('beforeend', switcherHTML);
        }
    }

    // Re-run Lucide to render icons in the new HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
