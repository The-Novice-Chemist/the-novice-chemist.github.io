/**
 * =============================================================================
 * GLOBAL WEBSITE CONFIGURATION (SINGLE EDIT PLACE)
 * -----------------------------------------------------------------------------
 * Tweak these variables here to customize the entire website:
 * - globalfontsize : Content font size (e.g., '13.5px', '14px', '15px')
 * - globalLightBg  : Light mode background color (default '#FFFFFF')
 * - globalDarkBg   : Dark mode background color (replaces dark blue, set to '#000000')
 * =============================================================================
 */
var globalfontsize = '13.5px';
var globalLightBg  = '#FFFFFF';
var globalDarkBg   = '#000000';

window.globalfontsize = globalfontsize;
window.globalLightBg = globalLightBg;
window.globalDarkBg = globalDarkBg;

// Configure Tailwind CDN palette if loaded so dark:bg-slate-950 maps to globalDarkBg
if (window.tailwind) {
    window.tailwind.config = window.tailwind.config || {};
    window.tailwind.config.darkMode = 'class';
    window.tailwind.config.theme = window.tailwind.config.theme || {};
    window.tailwind.config.theme.extend = window.tailwind.config.theme.extend || {};
    window.tailwind.config.theme.extend.colors = window.tailwind.config.theme.extend.colors || {};
    window.tailwind.config.theme.extend.colors.slate = window.tailwind.config.theme.extend.colors.slate || {};
    window.tailwind.config.theme.extend.colors.slate['950'] = globalDarkBg;
}

// Apply CSS variables to root immediately
document.documentElement.style.setProperty('--globalfontsize', globalfontsize);
document.documentElement.style.setProperty('--globalLightBg', globalLightBg);
document.documentElement.style.setProperty('--globalDarkBg', globalDarkBg);

// Inject global content font sizing, dark background overrides, and scrollbar styles
function applyGlobalThemeRules() {
    var styleId = 'novice-chemist-global-theme-styles';
    var style = document.getElementById(styleId);
    if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        if (document.head) {
            document.head.appendChild(style);
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                if (!document.getElementById(styleId)) {
                    document.head.appendChild(style);
                }
            });
        }
    }
    
    style.textContent = `
        :root {
            --globalfontsize: ${globalfontsize};
            --globalLightBg: ${globalLightBg};
            --globalDarkBg: ${globalDarkBg};
        }

        html.dark {
            color-scheme: dark;
        }

        /* Light mode page backgrounds */
        html:not(.dark),
        html:not(.dark) body,
        html:not(.dark) main {
            background-color: var(--globalLightBg, #FFFFFF);
        }

        /* Dark mode page backgrounds: dynamically driven by var(--globalDarkBg) */
        html.dark,
        html.dark body,
        html.dark main,
        html.dark .bg-slate-950,
        html.dark .dark\\:bg-slate-950,
        html.dark .dark\\:bg-slate-950\\/90,
        html.dark .dark\\:bg-slate-950\\/80,
        html.dark [class*="dark:bg-slate-950"] {
            background-color: var(--globalDarkBg, #000000) !important;
        }

        /* Custom scrollbar in dark mode */
        html.dark .custom-scrollbar::-webkit-scrollbar-thumb,
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #3f3f46 !important;
        }

        /* Content font size scaling - affects reading content only */
        .content-body,
        .content-body p,
        .content-body ol > li,
        .content-body ul > li,
        .content-body figcaption,
        .content-body td,
        .content-area p,
        .content-area li,
        .content-text,
        main .overflow-y-auto p:not(.text-xs):not(.text-\\[10px\\]):not(.text-\\[11px\\]),
        main .overflow-y-auto ol:not(.text-xs) > li,
        main .overflow-y-auto ul:not(.text-xs) > li {
            font-size: var(--globalfontsize, 13.5px) !important;
            line-height: 1.65;
        }
    `;
}
applyGlobalThemeRules();

function setGlobalFontSize(newSize) {
    globalfontsize = newSize;
    window.globalfontsize = newSize;
    document.documentElement.style.setProperty('--globalfontsize', newSize);
    applyGlobalThemeRules();
}
window.setGlobalFontSize = setGlobalFontSize;

function setGlobalColors(lightColor, darkColor) {
    if (lightColor) {
        globalLightBg = lightColor;
        window.globalLightBg = lightColor;
        document.documentElement.style.setProperty('--globalLightBg', lightColor);
    }
    if (darkColor) {
        globalDarkBg = darkColor;
        window.globalDarkBg = darkColor;
        document.documentElement.style.setProperty('--globalDarkBg', darkColor);
    }
    applyGlobalThemeRules();
}
window.setGlobalColors = setGlobalColors;

// Check for saved theme preference. Default to light if not set.
if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    // Ensure CSS custom properties and styles remain active
    document.documentElement.style.setProperty('--globalLightBg', globalLightBg);
    document.documentElement.style.setProperty('--globalDarkBg', globalDarkBg);
}

// Expose to window
window.toggleTheme = toggleTheme;
window.applyGlobalThemeRules = applyGlobalThemeRules;
