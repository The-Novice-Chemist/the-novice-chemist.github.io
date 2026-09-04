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
    'atomic-structure': {
        title: '',
        icon: '',
        hideHeader: true,
        color: 'blue',
        basePath: 'general/u1/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'accordion', label: '1. Discoveries', href: 'intro.html', id: 'discoveries', items: [
                 { label: 'Introduction', href: 'intro.html', id: 'intro' },
                 { label: 'The Electron', href: 'electron.html', id: 'electron' },
                 { label: 'The Proton', href: 'proton.html', id: 'proton' },
                 { label: 'The Nucleus', href: 'nucleus.html', id: 'nucleus' },
                 { label: 'Aspects of an Atom', href: 'aspects.html', id: 'aspects' },
             ]},
             { type: 'link', label: '2. Waves, Spectra & Orbitals', href: '#', id: 'waves' },
             { type: 'link', label: '3. Electronic Configuration', href: '#', id: 'configuration' },
             { type: 'link', label: '4. Periodic Table & Trends', href: '#', id: 'trends' },
        ]
    },
    'u1': {
        title: '',
        icon: '',
        hideHeader: true,
        color: 'blue',
        basePath: 'general/u1/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'accordion', label: '1. Discoveries', href: 'intro.html', id: 'discoveries', items: [
                 { label: 'Introduction', href: 'intro.html', id: 'intro' },
                 { label: 'The Electron', href: 'electron.html', id: 'electron' },
                 { label: 'The Proton', href: 'proton.html', id: 'proton' },
                 { label: 'The Nucleus', href: 'nucleus.html', id: 'nucleus' },
                 { label: 'Aspects of an Atom', href: 'aspects.html', id: 'aspects' },
             ]},
             { type: 'link', label: '2. Waves, Spectra & Orbitals', href: '#', id: 'waves' },
             { type: 'link', label: '3. Electronic Configuration', href: '#', id: 'configuration' },
             { type: 'link', label: '4. Periodic Table & Trends', href: '#', id: 'trends' },
        ]
    },
    'bonding': {
        title: 'Structure & Bonding',
        icon: 'sparkles',
        color: 'blue',
        basePath: 'general/u2/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: '1) Ionic Bonding & Lattice Energy', href: 'index.html', id: 'ionic' },
             { type: 'link', label: '2) Covalent Bonding & Octet Rule', href: '#', id: 'covalent' },
             { type: 'link', label: '3) Lewis Structures & Resonance', href: '#', id: 'lewis' },
             { type: 'link', label: '4) VSEPR Theory & Shapes', href: '#', id: 'vsepr' },
             { type: 'link', label: '5) Intermolecular Forces', href: '#', id: 'imf' },
             { type: 'link', label: '6) Metallic Bonding', href: '#', id: 'metallic' },
        ]
    },
    'u2': {
        title: 'Structure & Bonding',
        icon: 'sparkles',
        color: 'blue',
        basePath: 'general/u2/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: '1) Ionic Bonding & Lattice Energy', href: 'index.html', id: 'ionic' },
             { type: 'link', label: '2) Covalent Bonding & Octet Rule', href: '#', id: 'covalent' },
             { type: 'link', label: '3) Lewis Structures & Resonance', href: '#', id: 'lewis' },
             { type: 'link', label: '4) VSEPR Theory & Shapes', href: '#', id: 'vsepr' },
             { type: 'link', label: '5) Intermolecular Forces', href: '#', id: 'imf' },
             { type: 'link', label: '6) Metallic Bonding', href: '#', id: 'metallic' },
        ]
    },
    'calculations': {
        title: 'Chemical Calculations',
        icon: 'calculator',
        color: 'blue',
        basePath: 'general/u3/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: '1) The Mole & Avogadro Constant', href: 'index.html', id: 'mole' },
             { type: 'link', label: '2) Empirical & Molecular Formulas', href: '#', id: 'formulas' },
             { type: 'link', label: '3) Stoichiometry & Limiting Reactants', href: '#', id: 'stoichiometry' },
             { type: 'link', label: '4) Solution Concentrations', href: '#', id: 'solutions' },
             { type: 'link', label: '5) Volumetric Titrations', href: '#', id: 'titrations' },
             { type: 'link', label: '6) Gas Calculations & Yields', href: '#', id: 'gases' },
        ]
    },
    'u3': {
        title: 'Chemical Calculations',
        icon: 'calculator',
        color: 'blue',
        basePath: 'general/u3/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: '1) The Mole & Avogadro Constant', href: 'index.html', id: 'mole' },
             { type: 'link', label: '2) Empirical & Molecular Formulas', href: '#', id: 'formulas' },
             { type: 'link', label: '3) Stoichiometry & Limiting Reactants', href: '#', id: 'stoichiometry' },
             { type: 'link', label: '4) Solution Concentrations', href: '#', id: 'solutions' },
             { type: 'link', label: '5) Volumetric Titrations', href: '#', id: 'titrations' },
             { type: 'link', label: '6) Gas Calculations & Yields', href: '#', id: 'gases' },
        ]
    },
    'general': {
        title: 'General Chem',
        icon: 'atom',
        color: 'blue',
        basePath: 'general/',
        items: [
             { type: 'header', label: 'Units' },
             { type: 'link', label: 'Overview', href: 'index.html', id: 'general-index' },
             { type: 'link', label: 'Unit 1: Atomic Structure', href: 'u1/index.html', id: 'unit1' },
             { type: 'link', label: 'Unit 2: Structure and Bonding', href: 'u2/index.html', id: 'unit2' },
             { type: 'link', label: 'Unit 3: Chemical Calculations', href: 'u3/index.html', id: 'unit3' },
        ]
    },
    'physical': {
        title: 'Physical Chem',
        icon: 'zap',
        color: 'orange',
        basePath: 'physical/',
        items: [
             { type: 'link', label: 'Overview', href: 'index.html', id: 'physical-index' },
             { type: 'link', label: '1) Energetics', href: 'energetics/index.html', id: 'energetics' },
             { type: 'link', label: '2) Gases', href: 'gases/index.html', id: 'gases' },
             { type: 'link', label: '3) Chemical Kinetics', href: 'kinetics/index.html', id: 'kinetics' },
             { type: 'link', label: '4) Chemical Equilibrium', href: 'equilibrium/index.html', id: 'equilibrium' },
             { type: 'link', label: '5) Electrochemistry', href: 'electrochemistry/index.html', id: 'electrochemistry' },
        ]
    },
    'equilibrium': {
        title: 'Equilibrium',
        icon: 'scale',
        color: 'orange',
        basePath: 'physical/equilibrium/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: 'Introduction', href: 'index.html', id: 'intro' },
        ]
    },
    'kinetics': {
        title: 'Chemical Kinetics',
        icon: 'timer',
        color: 'red',
        basePath: 'physical/kinetics/',
        items: [
             { type: 'header', label: 'Topics' },
             { type: 'link', label: '1) The Concept', href: 'index.html', id: 'concept' },
             { type: 'link', label: '2) Rate of Reaction', href: 'rate.html', id: 'rate' },
             { type: 'link', label: '3) Activation Energy', href: 'activation.html', id: 'activation' },
        ]
    },
    'industrial': {
        title: 'Industrial',
        icon: 'wrench',
        color: 'slate',
        basePath: 'industrial/',
        items: [
             { type: 'link', label: 'Mg Production', href: 'mg-production.html', id: 'mg-production' },
        ]
    },
    'inorganic': {
        title: 'Inorganic',
        icon: 'component',
        color: 'purple',
        basePath: 'inorganic/',
        items: [
            { type: 'link', label: 'Overview', href: 'index.html', id: 'inorganic-index' },
            { type: 'link', label: '1) Periodicity', href: 'periodicity.html', id: 'periodicity' },
            { type: 'header', label: 'Blocks' },
            { type: 'link', label: 's-Block', href: 'sblock/trends.html', id: 'sblock' },
            { type: 'link', label: 'p-Block', href: 'pblock/index.html', id: 'pblock' },
            { type: 'link', label: 'd-Block', href: 'dblock/index.html', id: 'dblock' },
        ]
    }
};

// Theme Logic
function initTheme() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Initialize theme immediately
initTheme();

function renderSidebar(config) {
    const { root, module, active } = config;
    const data = SIDEBAR_CONFIG[module];
    
    if (!data) return console.error(`Sidebar module '${module}' not found.`);

    // Determine back button destination and label
    const backHref = config.backHref ? (config.backHref.startsWith('http') || config.backHref.startsWith('/') || config.backHref.startsWith('.') ? config.backHref : root + config.backHref) : (root + 'index.html');
    const backText = config.backText || 'Back to Home';

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

    const showTitleBlock = Boolean(data.title && !data.hideHeader && !config.hideHeader);

    data.items.forEach((item, index) => {
        if (item.type === 'header') {
            const ptClass = (index === 0 && !showTitleBlock) ? 'pt-1' : 'pt-4';
            listHTML += `<li class="px-3 ${ptClass} pb-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">${item.label}</li>`;
        } else if (item.type === 'link') {
            const isActive = active === item.id;
            const linkPath = item.absolute ? root + item.href : root + data.basePath + item.href;
            
            // Color classes based on active state
            const baseClass = "flex items-start gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors";
            const activeClass = `bg-${data.color}-50 dark:bg-${data.color}-900/20 text-${data.color}-700 dark:text-${data.color}-400 border border-${data.color}-100 dark:border-${data.color}-800 shadow-sm`;
            const inactiveClass = `text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-${data.color}-700 dark:hover:text-${data.color}-400`;
            const className = `${baseClass} ${isActive ? activeClass : inactiveClass}`;

            // Icon logic (no bullet dot)
            let iconHTML = '';
            if (item.icon) {
                iconHTML = `<i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 mt-0.5"></i>`;
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
                    ? `font-bold text-${data.color}-700 dark:text-${data.color}-400 bg-${data.color}-50 dark:bg-${data.color}-900/20` 
                    : `text-slate-500 dark:text-slate-400 hover:text-${data.color}-700 dark:hover:text-${data.color}-400 hover:bg-slate-50 dark:hover:bg-slate-800`;
                
                subItemsHTML += `
                    <li>
                        <a href="${subLink}" class="block px-4 py-2 text-sm leading-snug rounded-r-md transition-colors ${subClass}">
                            ${sub.label}
                        </a>
                    </li>
                `;
            });

            listHTML += `
                <li>
                    <div class="flex items-start px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300">
                        ${item.href ? `<a href="${root + data.basePath + item.href}" class="hover:text-${data.color}-700 dark:hover:text-${data.color}-400 transition-colors w-full">${formatLabel(item.label)}</a>` : `<span class="w-full">${formatLabel(item.label)}</span>`}
                    </div>
                    <ul class="pl-3 mt-1 ml-3 border-l-2 border-slate-100 dark:border-slate-800 space-y-1">
                        ${subItemsHTML}
                    </ul>
                </li>
            `;
        }
    });

    const asideHTML = `
    <aside class="fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 -translate-x-full peer-checked:translate-x-0 md:translate-x-0 md:peer-checked:-translate-x-full">
        <div class="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
            <a href="${backHref}" class="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-${data.color}-600 dark:hover:text-${data.color}-400 transition-colors">
                <i data-lucide="arrow-left" class="w-4 h-4"></i><span class="font-bold text-sm uppercase tracking-wide">${backText}</span>
            </a>
        </div>
        <div class="flex-1 overflow-y-auto ${showTitleBlock ? 'py-6' : 'py-3'} px-4 custom-scrollbar space-y-6">
            <div>
                ${showTitleBlock ? `
                <div class="flex items-center gap-3 px-3 mb-6">
                    <div class="w-8 h-8 bg-${data.color}-50 dark:bg-${data.color}-900/20 text-${data.color}-600 dark:text-${data.color}-400 rounded-lg flex items-center justify-center">
                        <i data-lucide="${data.icon}" class="w-4 h-4"></i>
                    </div>
                    <span class="font-bold text-lg text-slate-900 dark:text-white">${data.title}</span>
                </div>` : ''}
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
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    <a href="${root}inorganic/sblock/trends.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 's-block' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">s-Block</a>
                    <a href="${root}inorganic/pblock/index.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 'p-block' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">p-Block</a>
                    <a href="${root}inorganic/dblock/index.html" class="px-4 py-1.5 text-sm font-medium rounded-md transition-all ${module === 'd-block' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">d-Block</a>
                </div>
            `;
            // Ensure header is relative for absolute positioning of the switcher
            if (getComputedStyle(header).position === 'static') {
                header.style.position = 'relative';
            }
            header.insertAdjacentHTML('beforeend', switcherHTML);
        }
    }

    // 4. Inject Theme Toggle into Header if not already present
    const header = document.querySelector('header');
    if (header && !header.querySelector('button[onclick*="toggleTheme"]')) {
        const themeToggleHTML = `
            <button onclick="toggleTheme()" class="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Dark Mode">
                <i data-lucide="moon" class="w-5 h-5 hidden dark:block"></i>
                <i data-lucide="sun" class="w-5 h-5 block dark:hidden"></i>
            </button>
        `;
        // Find the container inside header to append to
        const headerContainer = header.querySelector('.flex.items-center.gap-4');
        if (headerContainer) {
             // If container exists (left side), append to header itself (right side)
             // Wait, structure.html header has justify-between.
             // Left side is .flex.items-center.gap-4
             // Right side is empty.
             // So I can just appendChild to header.
             const rightDiv = document.createElement('div');
             rightDiv.className = 'flex items-center gap-2';
             rightDiv.innerHTML = themeToggleHTML;
             header.appendChild(rightDiv);
        } else {
             // Fallback
             header.insertAdjacentHTML('beforeend', themeToggleHTML);
        }
    }

    // Re-run Lucide to render icons in the new HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
