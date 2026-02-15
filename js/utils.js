// Shared Utilities
window.AppUtils = {
  underConstructionHTML: function(title, category) {
    return `
      <div class="flex flex-col items-center justify-center py-24 text-center animate-fade-in bg-stone-50 rounded-3xl border border-dashed border-stone-200">
        <div class="bg-white p-6 rounded-full mb-6 shadow-sm border border-stone-100">
           <i data-lucide="cone" class="w-8 h-8 text-teal-600/60"></i>
        </div>
        <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-100">
          ${category}
        </div>
        <h3 class="text-2xl font-serif text-stone-700 mb-3">Content Coming Soon</h3>
        <p class="text-stone-500 max-w-md px-4 leading-relaxed mb-2">
          We are actively working on:
        </p>
        <p class="font-serif text-lg text-stone-800 font-medium max-w-lg">
          ${title}
        </p>
        <div class="mt-8 px-4 py-2 bg-yellow-50 text-yellow-800 text-xs font-bold uppercase tracking-widest rounded-full border border-yellow-100">
            Under Construction
        </div>
      </div>
    `;
  }
};