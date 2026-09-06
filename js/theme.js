/**
 * =============================================================================
 * GLOBAL FONT SIZE CONFIGURATION
 * -----------------------------------------------------------------------------
 * Adjust `globalfontsize` below to manually scale the font size of reading
 * content across the entire website.
 * Default: '14.5px' (options: '14px', '14.5px', '15px', '0.92rem', etc.)
 * =============================================================================
 */
var globalfontsize = '14.5px';
window.globalfontsize = globalfontsize;

// Apply --globalfontsize to the document root
document.documentElement.style.setProperty('--globalfontsize', globalfontsize);

// Inject global content font sizing rules
(function applyGlobalContentTypography() {
    var styleId = 'novice-chemist-global-fontsize';
    if (document.getElementById(styleId)) return;
    
    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        :root {
            --globalfontsize: ${globalfontsize};
        }
        /* Content font size scaling - affects reading content only */
        .content-body,
        .content-body p,
        .content-body ol > li,
        .content-body ul > li,
        .content-area p,
        .content-area li,
        .content-text,
        main .overflow-y-auto p:not(.text-xs):not(.text-\\[10px\\]):not(.text-\\[11px\\]),
        main .overflow-y-auto ol:not(.text-xs) > li,
        main .overflow-y-auto ul:not(.text-xs) > li {
            font-size: var(--globalfontsize) !important;
            line-height: 1.65;
        }
    `;
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            if (!document.getElementById(styleId)) {
                document.head.appendChild(style);
            }
        });
    }
})();

function setGlobalFontSize(newSize) {
    globalfontsize = newSize;
    window.globalfontsize = newSize;
    document.documentElement.style.setProperty('--globalfontsize', newSize);
    var el = document.getElementById('novice-chemist-global-fontsize');
    if (el) {
        el.textContent = `
            :root { --globalfontsize: ${newSize}; }
            .content-body,
            .content-body p,
            .content-body ol > li,
            .content-body ul > li,
            .content-area p,
            .content-area li,
            .content-text,
            main .overflow-y-auto p:not(.text-xs):not(.text-\\[10px\\]):not(.text-\\[11px\\]),
            main .overflow-y-auto ol:not(.text-xs) > li,
            main .overflow-y-auto ul:not(.text-xs) > li {
                font-size: var(--globalfontsize) !important;
                line-height: 1.65;
            }
        `;
    }
}
window.setGlobalFontSize = setGlobalFontSize;

// Check for saved theme preference. Default to light if not set.
if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
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

// Expose to window
window.toggleTheme = toggleTheme;
