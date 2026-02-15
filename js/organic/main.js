(function() {
  const u = (window.AppUtils && window.AppUtils.underConstructionHTML) 
    ? window.AppUtils.underConstructionHTML 
    : function(t, c) { return `<div>${c}: ${t}</div>`; };

  window.AppData = window.AppData || {};

  window.AppData.organic = {
    id: 'organic',
    title: 'Organic Chemistry',
    description: 'Structure, properties, and reactions of carbon compounds.',
    modules: [
      {
        id: 'opt1',
        title: 'Option 1: Fundamentals & Basics',
        description: 'Foundation before specific reactions.',
        topics: [
          { 
            id: 'ch1', 
            title: 'Ch 1: Fundamentals', 
            content: `
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
                         <!-- Simplified double helix representation -->
                         <path d="M10,50 Q55,0 100,50 T190,50" fill="none" stroke="#0d9488" stroke-width="4" class="dna-strand" />
                         <path d="M10,50 Q55,100 100,50 T190,50" fill="none" stroke="#2dd4bf" stroke-width="4" class="dna-strand" style="animation-direction: reverse;" />
                         <!-- Base pairs -->
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

                <hr class="border-stone-200">

                <!-- 1.3 Types of Analysis -->
                <section>
                  <div class="flex items-center gap-2 mb-4">
                    <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1.3</span>
                    <h2 class="text-2xl font-serif text-stone-900 m-0">Types of Analysis</h2>
                  </div>
                  
                  <div class="space-y-4">
                    <div class="flex gap-4 items-start p-4 hover:bg-stone-50 rounded-xl transition-colors border border-transparent hover:border-stone-100">
                        <div class="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-serif font-bold text-stone-400 shrink-0">1</div>
                        <div>
                            <h4 class="font-bold text-stone-800 m-0 text-lg">Qualitative Analysis</h4>
                            <p class="text-stone-600 m-0">Determining <em>what</em> elements are present in the compound.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-start p-4 hover:bg-stone-50 rounded-xl transition-colors border border-transparent hover:border-stone-100">
                        <div class="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-serif font-bold text-stone-400 shrink-0">2</div>
                        <div>
                            <h4 class="font-bold text-stone-800 m-0 text-lg">Quantitative Analysis</h4>
                            <p class="text-stone-600 m-0">Determining <em>how much</em> (quantity) of each element is present.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-start p-4 bg-teal-50 border border-teal-100 rounded-xl shadow-sm">
                        <div class="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-serif font-bold text-white shadow-md shrink-0">3</div>
                        <div>
                            <h4 class="font-bold text-teal-900 m-0 text-lg">Structural Analysis</h4>
                            <p class="text-teal-800 m-0">Studying <em>how</em> the atoms are arranged in space.</p>
                        </div>
                    </div>
                  </div>

                  <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-sm">
                    <div class="flex gap-2 items-center mb-1">
                        <i data-lucide="lightbulb" class="w-4 h-4 text-yellow-600"></i>
                        <span class="font-bold text-yellow-800 uppercase text-xs tracking-wider">Crucial Note</span>
                    </div>
                    <p class="text-stone-800 text-sm m-0 font-medium">
                        Structural Analysis is the most important part. <br/>
                        Everything else in Organic Chemistry comes under Structural Analysis.
                    </p>
                  </div>
                </section>

                <hr class="border-stone-200">

                <!-- 1.4 Functional Groups -->
                <section>
                   <div class="flex items-center gap-2 mb-6">
                    <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1.4</span>
                    <h2 class="text-2xl font-serif text-stone-900 m-0">Functional Groups (Master Table)</h2>
                  </div>
                  
                  <div class="overflow-hidden rounded-xl border border-stone-200 shadow-sm">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left min-w-[600px]">
                            <thead class="bg-stone-100 text-stone-700 font-serif">
                                <tr>
                                    <th class="px-5 py-3 font-semibold border-b border-stone-200 w-1/3">Structure</th>
                                    <th class="px-5 py-3 font-semibold border-b border-stone-200">Name Given</th>
                                    <th class="px-5 py-3 font-semibold border-b border-stone-200">Example</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-stone-100 bg-white">
                                <!-- 1. Alkane -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <line x1="20" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Alkane</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3-CH_3$ (Ethane)</td>
                                </tr>
                                <!-- 2. Alkene -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <line x1="20" y1="16" x2="80" y2="16" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <line x1="20" y1="24" x2="80" y2="24" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Alkene</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_2=CH_2$ (Ethene)</td>
                                </tr>
                                <!-- 3. Alkyne -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <line x1="20" y1="12" x2="80" y2="12" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <line x1="20" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <line x1="20" y1="28" x2="80" y2="28" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Alkyne</td>
                                    <td class="px-5 py-3 text-stone-500">$CH≡CH$ (Ethyne)</td>
                                </tr>
                                <!-- 4. Alkyl Halide -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <line x1="30" y1="20" x2="70" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="25" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="75" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Alkyl Halide</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3-Cl$ (Chloroethane)</td>
                                </tr>
                                <!-- 5. Aryl Halide -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="60" viewBox="0 0 100 60">
                                            <!-- Benzene Ring -->
                                            <g transform="translate(10,5)">
                                                <path d="M15 10 L35 10 L45 27 L35 44 L15 44 L5 27 Z" fill="none" stroke="#374151" stroke-width="2"/>
                                                <circle cx="25" cy="27" r="8" fill="none" stroke="#374151" stroke-width="1.5"/>
                                                <line x1="45" y1="27" x2="65" y2="27" stroke="#374151" stroke-width="2"/>
                                                <text x="70" y="32" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                                            </g>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Aryl Halide</td>
                                    <td class="px-5 py-3 text-stone-500">$C_6H_5-Cl$ (Chlorobenzene)</td>
                                </tr>
                                <!-- 6. Benzyl Halide -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="140" height="60" viewBox="0 0 140 60">
                                            <g transform="translate(10,5)">
                                                <path d="M15 10 L35 10 L45 27 L35 44 L15 44 L5 27 Z" fill="none" stroke="#374151" stroke-width="2"/>
                                                <circle cx="25" cy="27" r="8" fill="none" stroke="#374151" stroke-width="1.5"/>
                                                <line x1="45" y1="27" x2="60" y2="27" stroke="#374151" stroke-width="2"/>
                                                <text x="63" y="32" font-family="sans-serif" font-weight="600" fill="#111827">CH</text>
                                                <text x="86" y="36" font-family="sans-serif" font-size="10" font-weight="600" fill="#111827">2</text>
                                                <line x1="95" y1="27" x2="110" y2="27" stroke="#374151" stroke-width="2"/>
                                                <text x="115" y="32" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                                            </g>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Benzyl Halide</td>
                                    <td class="px-5 py-3 text-stone-500">$C_6H_5CH_2Cl$</td>
                                </tr>
                                <!-- 7. Alcohol -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="50" viewBox="0 0 100 50">
                                            <text x="20" y="35" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <line x1="30" y1="30" x2="50" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="58" y="20" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <line x1="66" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="90" y="20" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">H</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Alcohol</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3OH$ (Methanol)</td>
                                </tr>
                                <!-- 8. Aldehyde -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="60" viewBox="0 0 100 60">
                                            <line x1="20" y1="35" x2="40" y2="35" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="15" y="40" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="50" y="40" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- Double Bond to O -->
                                            <line x1="47" y1="25" x2="47" y2="10" stroke="#374151" stroke-width="2"/>
                                            <line x1="53" y1="25" x2="53" y2="10" stroke="#374151" stroke-width="2"/>
                                            <text x="50" y="8" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- Bond to H -->
                                            <line x1="60" y1="35" x2="80" y2="45" stroke="#374151" stroke-width="2"/>
                                            <text x="88" y="55" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">H</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Aldehyde</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3CHO$ (Ethanal)</td>
                                </tr>
                                <!-- 9. Ketone -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="60" viewBox="0 0 100 60">
                                            <line x1="20" y1="35" x2="40" y2="35" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                            <text x="15" y="40" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="50" y="40" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- Double Bond to O -->
                                            <line x1="47" y1="25" x2="47" y2="10" stroke="#374151" stroke-width="2"/>
                                            <line x1="53" y1="25" x2="53" y2="10" stroke="#374151" stroke-width="2"/>
                                            <text x="50" y="8" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- Bond to R' -->
                                            <line x1="60" y1="35" x2="80" y2="35" stroke="#374151" stroke-width="2"/>
                                            <text x="85" y="40" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#6b7280">R'</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Ketone</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3COCH_3$ (Propanone)</td>
                                </tr>
                                <!-- 10. Carboxylic Acid -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="70" viewBox="0 0 100 70">
                                            <line x1="25" y1="40" x2="45" y2="40" stroke="#374151" stroke-width="2"/>
                                            <text x="15" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="55" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- =O -->
                                            <line x1="52" y1="30" x2="52" y2="15" stroke="#374151" stroke-width="2"/>
                                            <line x1="58" y1="30" x2="58" y2="15" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="12" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- -OH -->
                                            <line x1="63" y1="45" x2="75" y2="55" stroke="#374151" stroke-width="2"/>
                                            <text x="78" y="68" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#e11d48">OH</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Carboxylic Acid</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3COOH$ (Ethanoic Acid)</td>
                                </tr>
                                <!-- 11. Acid Halide -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="70" viewBox="0 0 100 70">
                                            <line x1="25" y1="40" x2="45" y2="40" stroke="#374151" stroke-width="2"/>
                                            <text x="15" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="55" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- =O -->
                                            <line x1="52" y1="30" x2="52" y2="15" stroke="#374151" stroke-width="2"/>
                                            <line x1="58" y1="30" x2="58" y2="15" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="12" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- -X -->
                                            <line x1="63" y1="45" x2="75" y2="55" stroke="#374151" stroke-width="2"/>
                                            <text x="78" y="68" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Acid Halide</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3COCl$ (Ethanoyl chloride)</td>
                                </tr>
                                <!-- 12. Ester -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="70" viewBox="0 0 100 70">
                                            <line x1="25" y1="40" x2="45" y2="40" stroke="#374151" stroke-width="2"/>
                                            <text x="15" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="55" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- =O -->
                                            <line x1="52" y1="30" x2="52" y2="15" stroke="#374151" stroke-width="2"/>
                                            <line x1="58" y1="30" x2="58" y2="15" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="12" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- -O-R -->
                                            <line x1="63" y1="45" x2="72" y2="52" stroke="#374151" stroke-width="2"/>
                                            <text x="78" y="65" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <line x1="85" y1="58" x2="92" y2="63" stroke="#374151" stroke-width="2"/>
                                            <text x="98" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#6b7280">R'</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Ester</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3COOCH_3$</td>
                                </tr>
                                <!-- 13. Ether -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <line x1="20" y1="20" x2="40" y2="20" stroke="#374151" stroke-width="2"/>
                                            <text x="50" y="25" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <line x1="60" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2"/>
                                            <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#6b7280">R'</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Ether</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3OCH_3$ (Dimethyl ether)</td>
                                </tr>
                                <!-- 14. Amide -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="70" viewBox="0 0 100 70">
                                            <line x1="25" y1="40" x2="45" y2="40" stroke="#374151" stroke-width="2"/>
                                            <text x="15" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <text x="55" y="45" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- =O -->
                                            <line x1="52" y1="30" x2="52" y2="15" stroke="#374151" stroke-width="2"/>
                                            <line x1="58" y1="30" x2="58" y2="15" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="12" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#e11d48">O</text>
                                            <!-- -NH2 -->
                                            <line x1="63" y1="45" x2="75" y2="55" stroke="#374151" stroke-width="2"/>
                                            <text x="78" y="68" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#2563eb">NH</text>
                                            <text x="100" y="70" font-family="sans-serif" font-size="10" font-weight="600" fill="#2563eb">2</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Amide</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3CONH_2$ (Ethanamide)</td>
                                </tr>
                                <!-- 15. Amine -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="50" viewBox="0 0 100 50">
                                            <text x="20" y="30" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <line x1="25" y1="25" x2="45" y2="25" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="30" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#2563eb">N</text>
                                            <!-- H's -->
                                            <line x1="60" y1="20" x2="70" y2="10" stroke="#374151" stroke-width="2"/>
                                            <text x="75" y="12" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">H</text>
                                            <line x1="60" y1="30" x2="70" y2="40" stroke="#374151" stroke-width="2"/>
                                            <text x="75" y="45" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">H</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Amine</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3NH_2$ (Methylamine)</td>
                                </tr>
                                <!-- 16. Phenol -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="60" viewBox="0 0 100 60">
                                            <g transform="translate(10,5)">
                                                <path d="M15 10 L35 10 L45 27 L35 44 L15 44 L5 27 Z" fill="none" stroke="#374151" stroke-width="2"/>
                                                <circle cx="25" cy="27" r="8" fill="none" stroke="#374151" stroke-width="1.5"/>
                                                <line x1="45" y1="27" x2="60" y2="27" stroke="#374151" stroke-width="2"/>
                                                <text x="65" y="32" font-family="sans-serif" font-weight="600" fill="#e11d48">OH</text>
                                            </g>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Phenol</td>
                                    <td class="px-5 py-3 text-stone-500">$C_6H_5OH$</td>
                                </tr>
                                <!-- 17. Nitrile -->
                                <tr class="hover:bg-stone-50 transition-colors">
                                    <td class="px-5 py-3">
                                        <svg width="100" height="40" viewBox="0 0 100 40">
                                            <text x="20" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                            <line x1="25" y1="20" x2="45" y2="20" stroke="#374151" stroke-width="2"/>
                                            <text x="55" y="25" text-anchor="middle" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                            <!-- Triple Bond -->
                                            <line x1="62" y1="14" x2="82" y2="14" stroke="#374151" stroke-width="2"/>
                                            <line x1="62" y1="20" x2="82" y2="20" stroke="#374151" stroke-width="2"/>
                                            <line x1="62" y1="26" x2="82" y2="26" stroke="#374151" stroke-width="2"/>
                                            <text x="90" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#2563eb">N</text>
                                        </svg>
                                    </td>
                                    <td class="px-5 py-3 font-medium">Nitrile</td>
                                    <td class="px-5 py-3 text-stone-500">$CH_3CN$ (Ethanenitrile)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </section>

                <!-- 1.5 Polarity (Construction) -->
                <section>
                   <div class="flex items-center gap-2 mb-4">
                    <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1.5</span>
                    <h2 class="text-2xl font-serif text-stone-900 m-0">Polarity</h2>
                  </div>
                  ${u("Polarity & Electronegativity", "Organic")}
                </section>
              </div>
            ` 
          },
          { 
            id: 'ch2', 
            title: 'Ch 2: IUPAC Nomenclature', 
            content: u("IUPAC Nomenclature", "Organic") 
          },
        ]
      },
      {
        id: 'opt2',
        title: 'Option 2: Hydrocarbons & Halides',
        description: 'Carbon backbone and simple derivatives.',
        topics: [
          { id: 'ch3', title: 'Ch 3: Alkanes', content: u("Alkanes", "Organic") },
          { id: 'ch4', title: 'Ch 4: Alkenes/Olefins', content: u("Alkenes/Olefins", "Organic") },
          { id: 'ch5', title: 'Ch 5: Alkynes', content: u("Alkynes", "Organic") },
          { id: 'ch6', title: 'Ch 6: Aromatic Hydrocarbons', content: u("Aromatic Hydrocarbons (Benzene)", "Organic") },
          { id: 'ch7', title: 'Ch 7: Organic Halides', content: u("Organic Halides (The bridge to other compounds)", "Organic") },
        ]
      },
      {
        id: 'opt3',
        title: 'Option 3: Oxygen & Nitrogen Compounds',
        description: 'Complex functional groups.',
        topics: [
          { id: 'ch8', title: 'Ch 8: Alcohols', content: u("Alcohols", "Organic") },
          { id: 'ch9', title: 'Ch 9: Phenols', content: u("Phenols", "Organic") },
          { id: 'ch10', title: 'Ch 10: Aldehydes & Ketones', content: u("Aldehydes and Ketones", "Organic") },
          { id: 'ch11', title: 'Ch 11: Carboxylic Acids', content: u("Carboxylic Acids", "Organic") },
          { id: 'ch12', title: 'Ch 12: Acid Halides', content: u("Acid Halides", "Organic") },
          { id: 'ch13', title: 'Ch 13: Esters', content: u("Esters", "Organic") },
          { id: 'ch14', title: 'Ch 14: Amines', content: u("Amines", "Organic") },
        ]
      }
    ]
  };
})();