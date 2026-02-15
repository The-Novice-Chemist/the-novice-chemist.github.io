window.registerContent('organic', 'fundamentals', `
  <div class="space-y-12">
    <!-- 1.1 Introduction -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1.1</span>
        <h2 class="text-2xl font-serif text-stone-900 m-0">Introduction</h2>
      </div>
      <p class="text-lg leading-relaxed text-stone-600 mb-6">
        Organic Chemistry is the scientific study of the structure, properties, and reactions of organic compounds and organic materials—matter that contains <strong class="text-stone-900">Carbon</strong> atoms.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 items-center bg-stone-50 p-6 rounded-xl border border-stone-100">
        <div>
          <h4 class="font-bold text-stone-800 mb-2">Why is it important?</h4>
          <ul class="space-y-3">
            <li class="flex gap-3">
              <i data-lucide="dna" class="w-6 h-6 text-teal-600 shrink-0"></i>
              <span>It is the <strong class="text-teal-700">basis of Life</strong>. (DNA, proteins, cells).</span>
            </li>
            <li class="flex gap-3">
              <i data-lucide="flask-conical" class="w-6 h-6 text-teal-600 shrink-0"></i>
              <span>It fuels scientific exploration.</span>
            </li>
          </ul>
        </div>
        
        <!-- DNA Visualization -->
        <div class="flex justify-center dna-float relative h-24">
          <svg width="200" height="100" viewBox="0 0 200 100" class="opacity-80">
             <path d="M10,50 Q55,0 100,50 T190,50" fill="none" stroke="#0d9488" stroke-width="4" class="dna-strand" />
             <path d="M10,50 Q55,100 100,50 T190,50" fill="none" stroke="#2dd4bf" stroke-width="4" class="dna-strand" style="animation-direction: reverse;" />
             <line x1="30" y1="30" x2="30" y2="70" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
             <line x1="55" y1="15" x2="55" y2="85" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
             <line x1="80" y1="30" x2="80" y2="70" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
             <line x1="120" y1="30" x2="120" y2="70" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
             <line x1="145" y1="15" x2="145" y2="85" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
             <line x1="170" y1="30" x2="170" y2="70" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </section>

    <hr class="border-stone-200">

    <!-- 1.2 Importance of Carbon -->
    <section>
       <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1.2</span>
        <h2 class="text-2xl font-serif text-stone-900 m-0">Importance of Carbon</h2>
      </div>
      <p class="mb-4 text-stone-600">Carbon ($C$) is unique among elements in the periodic table.</p>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 border border-stone-200 rounded-lg hover:border-teal-300 transition-all bg-white shadow-sm">
            <div class="text-teal-600 mb-2"><i data-lucide="shield" class="w-6 h-6"></i></div>
            <h3 class="text-lg font-bold text-stone-800 mb-2 mt-0">Stability</h3>
            <p class="text-sm text-stone-600 m-0">Carbon forms strong, stable covalent bonds with itself and other elements.</p>
        </div>
        <div class="p-5 border border-stone-200 rounded-lg hover:border-teal-300 transition-all bg-white shadow-sm">
            <div class="text-teal-600 mb-2"><i data-lucide="link" class="w-6 h-6"></i></div>
            <h3 class="text-lg font-bold text-stone-800 mb-2 mt-0">Catenation</h3>
            <p class="text-sm text-stone-600 m-0">The unique ability to form very <strong>complex modules</strong>, long chains, and rings.</p>
        </div>
      </div>
    </section>
  </div>
`);