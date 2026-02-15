// --- CONFIGURATION & DATA ---

const BRANCHES = [
    { id: 'general', title: 'General', icon: 'atom', desc: 'Atomic structure & Bonding' },
    { id: 'inorganic', title: 'Inorganic', icon: 'gem', desc: 's, p, d block elements' },
    { id: 'organic', title: 'Organic', icon: 'flask-conical', desc: 'Carbon compounds' },
    { id: 'physical', title: 'Physical', icon: 'activity', desc: 'Thermodynamics & Kinetics' },
    { id: 'industrial', title: 'Industrial', icon: 'factory', desc: 'Chemical processes' }
];

const ORGANIC_DATA = {
    categories: [
        {
            id: 'fundamentals',
            title: 'I. Fundamentals & Basics',
            description: 'Building the foundation.',
            chapters: [
                { number: 1, title: 'Organic Fundamentals', description: 'Bonding, Hybridization, Isomerism' },
                { number: 2, title: 'IUPAC Nomenclature', description: 'Systematic Naming Rules' }
            ]
        },
        {
            id: 'hydrocarbons',
            title: 'II. Hydrocarbons & Halides',
            description: 'The carbon backbone.',
            chapters: [
                { number: 3, title: 'Alkanes', description: 'Saturated Hydrocarbons' },
                { number: 4, title: 'Alkenes', description: 'Double bonds & Addition' },
                { number: 5, title: 'Alkynes', description: 'Triple bonds Reactivity' },
                { number: 6, title: 'Benzene', description: 'Aromatic Systems' },
                { number: 7, title: 'Alkyl Halides', description: 'Substitution & Elimination' }
            ]
        },
        {
            id: 'oxygen-nitrogen',
            title: 'III. Oxygen & Nitrogen',
            description: 'Functional group chemistry.',
            chapters: [
                { number: 8, title: 'Alcohols', description: 'Hydroxyl chemistry' },
                { number: 9, title: 'Phenols', description: 'Aromatic alcohols' },
                { number: 10, title: 'Carbonyls', description: 'Aldehydes & Ketones' },
                { number: 11, title: 'Carboxylic Acids', description: 'Acidity & Derivatives' },
                { number: 12, title: 'Amines', description: 'Nitrogen bases' }
            ]
        }
    ]
};

// --- COMPONENT RENDERERS ---

function renderNav() {
    return `
    <nav class="fixed w-full z-50 top-0 border-b border-chem-border glass-nav transition-all duration-300">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center h-16">
                <a href="#/" class="flex items-center gap-2 group">
                    <div class="bg-stone-100 p-2 rounded-lg group-hover:bg-amber-50 transition-colors">
                        <i data-lucide="flask-round" class="h-5 w-5 text-chem-accent"></i>
                    </div>
                    <span class="font-serif font-bold text-lg text-chem-text-main tracking-tight">The Novice Chemist</span>
                </a>
                <div class="hidden md:flex gap-6 text-sm font-medium text-chem-text-muted">
                    <a href="#/" class="hover:text-chem-accent transition-colors">Home</a>
                    <a href="#/organic" class="hover:text-chem-accent transition-colors">Organic</a>
                    <a href="https://github.com" target="_blank" class="hover:text-chem-text-main transition-colors flex items-center gap-2">
                        <i data-lucide="github" class="h-4 w-4"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

function renderFooter() {
    return `
    <footer class="mt-auto bg-stone-50 border-t border-chem-border py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p class="font-serif text-stone-600 mb-2">The Novice Chemist</p>
            <p class="text-xs text-stone-400">Sri Lankan A-Level Syllabus Resource</p>
        </div>
    </footer>
    `;
}

function renderHomePage() {
    // Generate Horizontal Tiles
    const tilesHtml = BRANCHES.map(branch => `
        <a href="#/${branch.id}" class="group flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur border border-stone-200 rounded-lg shadow-sm hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300">
            <i data-lucide="${branch.icon}" class="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-colors"></i>
            <span class="font-serif text-stone-700 font-medium group-hover:text-stone-900">${branch.title}</span>
        </a>
    `).join('');

    return `
    <section class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden animate-fade-in">
        <!-- Background Elements -->
        <div class="absolute inset-0 pointer-events-none opacity-40">
            <div class="absolute top-20 left-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div class="absolute bottom-20 right-10 w-80 h-80 bg-stone-100 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>

        <div class="relative max-w-5xl mx-auto px-4 text-center z-10 -mt-16">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm text-[10px] font-bold text-stone-400 mb-8 uppercase tracking-widest">
                <i data-lucide="sparkles" class="h-3 w-3 text-amber-500"></i>
                Est. 2024
            </div>
            
            <!-- Main Title -->
            <h1 class="text-6xl md:text-8xl font-serif text-chem-text-main mb-6 leading-none tracking-tight">
                The Novice <br/>
                <span class="italic text-stone-400 text-5xl md:text-7xl">Chemist</span>
            </h1>
            
            <!-- Slogan -->
            <p class="text-lg md:text-xl text-chem-text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Your comprehensive digital companion for mastering the molecular world.
            </p>

            <!-- HORIZONTAL NAVIGATION TILES -->
            <div class="flex flex-wrap justify-center gap-3 w-full animate-fade-in" style="animation-delay: 0.2s;">
                ${tilesHtml}
            </div>
        </div>
    </section>
    `;
}

function renderOrganicPage() {
    let syllabusHtml = '<div class="space-y-12 max-w-4xl mx-auto">';
    
    ORGANIC_DATA.categories.forEach(cat => {
        syllabusHtml += `
            <div class="animate-fade-in">
                <div class="flex items-end justify-between border-b border-stone-200 pb-3 mb-6">
                    <div>
                        <h3 class="text-2xl font-serif text-stone-800">${cat.title}</h3>
                        <p class="text-sm text-stone-500 mt-1">${cat.description}</p>
                    </div>
                </div>
                <div class="grid gap-3">
        `;
        
        cat.chapters.forEach(chap => {
            syllabusHtml += `
                <div class="group flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-stone-50 text-stone-400 font-serif font-bold group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                        ${chap.number}
                    </span>
                    <div class="flex-grow">
                        <h4 class="font-medium text-stone-800 group-hover:text-amber-700 transition-colors">${chap.title}</h4>
                        <p class="text-xs text-stone-500">${chap.description}</p>
                    </div>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-stone-300 group-hover:text-amber-400 transition-colors"></i>
                </div>
            `;
        });
        
        syllabusHtml += `</div></div>`;
    });
    syllabusHtml += `</div>`;

    return `
        <div class="pt-24 pb-20 animate-fade-in">
            <header class="bg-stone-50/50 border-b border-stone-200 py-16 mb-12">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <div class="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="flask-conical" class="h-8 w-8 text-amber-600"></i>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Organic Chemistry</h1>
                    <p class="text-lg text-stone-500 max-w-xl mx-auto">
                        A structured approach to carbon compounds, mechanisms, and synthesis pathways.
                    </p>
                </div>
            </header>
            <div class="px-4">
                ${syllabusHtml}
            </div>
        </div>
    `;
}

function renderConstructionPage(branchId) {
    const branch = BRANCHES.find(b => b.id === branchId) || { title: 'Unknown', icon: 'alert-circle' };
    
    return `
    <div class="flex-grow flex flex-col items-center justify-center min-h-screen px-4 pt-16 animate-fade-in">
        <div class="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6 ring-4 ring-stone-50">
            <i data-lucide="${branch.icon}" class="h-10 w-10 text-stone-300"></i>
        </div>
        <h1 class="text-3xl md:text-4xl font-serif text-stone-900 mb-2">${branch.title} Chemistry</h1>
        <p class="text-stone-400 mb-8">Module under active development.</p>
        
        <a href="#/" class="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition-colors text-sm font-medium">
            Return Home
        </a>
    </div>
    `;
}

// --- ROUTER ---

function handleRoute() {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#/';
    
    window.scrollTo(0, 0);

    let content = '';

    if (hash === '#/') {
        content = renderHomePage();
    } else if (hash === '#/organic') {
        content = renderOrganicPage();
    } else {
        const branchId = hash.replace('#/', '');
        const validBranches = BRANCHES.map(b => b.id);
        
        if (validBranches.includes(branchId)) {
            content = renderConstructionPage(branchId);
        } else {
            content = renderHomePage();
        }
    }

    app.innerHTML = content;
    
    // Initialize icons for the new content
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --- INITIALIZATION ---

function init() {
    const nav = document.getElementById('navbar-container');
    const footer = document.getElementById('footer-container');

    if (nav) nav.innerHTML = renderNav();
    if (footer) footer.innerHTML = renderFooter();

    // Initial Route
    handleRoute();

    // Route Listener
    window.addEventListener('hashchange', handleRoute);
}

// Start
document.addEventListener('DOMContentLoaded', init);
