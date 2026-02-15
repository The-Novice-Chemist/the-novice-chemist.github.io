window.registerContent('organic', 'fundamentals', `
  <div class="space-y-12">
    
    <!-- 1.1 Introduction -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-lg font-bold px-2 py-1 rounded rotate-2 border-2 border-teal-200">1.1</span>
        <h2 class="text-4xl font-hand-title text-stone-900 m-0">Introduction</h2>
      </div>
      <p class="text-2xl leading-[2rem] text-stone-800 mb-6">
        Organic Chemistry is the scientific study of the structure, properties, and reactions of organic compounds and organic materials—matter that contains <strong class="text-stone-900 underline decoration-wavy decoration-teal-400">Carbon</strong> atoms.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 items-center bg-white/50 p-6 rounded-xl border-2 border-stone-200 shadow-[4px_4px_0px_0px_#e5e7eb]">
        <div>
          <h4 class="text-3xl font-hand-title font-bold text-stone-800 mb-4">Why is it important?</h4>
          <ul class="space-y-3">
            <li class="flex gap-3 items-center">
              <i data-lucide="dna" class="w-6 h-6 text-teal-600 shrink-0"></i>
              <span>It is the <strong class="text-teal-700">basis of Life</strong>. (DNA, proteins, cells).</span>
            </li>
            <li class="flex gap-3 items-center">
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

    <div class="border-t-2 border-dashed border-stone-300 w-1/2 mx-auto"></div>

    <!-- 1.2 Importance of Carbon -->
    <section>
       <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-lg font-bold px-2 py-1 rounded -rotate-1 border-2 border-teal-200">1.2</span>
        <h2 class="text-4xl font-hand-title text-stone-900 m-0">Importance of Carbon</h2>
      </div>
      <p class="mb-4 text-stone-800">Carbon ($C$) is unique among elements in the periodic table.</p>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 border-2 border-stone-200 rounded-lg bg-white shadow-sm hover:rotate-1 transition-transform">
            <div class="text-teal-600 mb-2"><i data-lucide="shield" class="w-8 h-8"></i></div>
            <h3 class="text-2xl font-hand-title font-bold text-stone-800 mb-2 mt-0">Stability</h3>
            <p class="text-xl text-stone-600 m-0 leading-tight">Carbon forms strong, stable covalent bonds with itself and other elements.</p>
        </div>
        <div class="p-5 border-2 border-stone-200 rounded-lg bg-white shadow-sm hover:-rotate-1 transition-transform">
            <div class="text-teal-600 mb-2"><i data-lucide="link" class="w-8 h-8"></i></div>
            <h3 class="text-2xl font-hand-title font-bold text-stone-800 mb-2 mt-0">Catenation</h3>
            <p class="text-xl text-stone-600 m-0 leading-tight">The unique ability to form very <strong>complex modules</strong>, long chains, and rings.</p>
        </div>
      </div>
    </section>

    <div class="border-t-2 border-dashed border-stone-300 w-1/2 mx-auto"></div>

    <!-- 1.3 Types of Analysis -->
    <section>
      <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-lg font-bold px-2 py-1 rounded rotate-1 border-2 border-teal-200">1.3</span>
        <h2 class="text-4xl font-hand-title text-stone-900 m-0">Types of Analysis</h2>
      </div>
      
      <div class="space-y-4">
        <div class="flex gap-4 items-start p-4 bg-white/40 rounded-xl border-2 border-transparent hover:border-stone-200 hover:bg-white transition-all">
            <div class="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600 shrink-0">1</div>
            <div>
                <h4 class="font-bold text-stone-800 m-0 text-2xl font-hand-title">Qualitative Analysis</h4>
                <p class="text-stone-600 m-0">Determining <em>what</em> elements are present in the compound.</p>
            </div>
        </div>
        <div class="flex gap-4 items-start p-4 bg-white/40 rounded-xl border-2 border-transparent hover:border-stone-200 hover:bg-white transition-all">
            <div class="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600 shrink-0">2</div>
            <div>
                <h4 class="font-bold text-stone-800 m-0 text-2xl font-hand-title">Quantitative Analysis</h4>
                <p class="text-stone-600 m-0">Determining <em>how much</em> (quantity) of each element is present.</p>
            </div>
        </div>
        <div class="flex gap-4 items-start p-4 bg-teal-50 border-2 border-teal-200 rounded-xl shadow-sm transform rotate-1">
            <div class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white shrink-0">3</div>
            <div>
                <h4 class="font-bold text-teal-900 m-0 text-2xl font-hand-title">Structural Analysis</h4>
                <p class="text-teal-800 m-0">Studying <em>how</em> the atoms are arranged in space.</p>
            </div>
        </div>
      </div>

      <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg relative overflow-hidden">
        <div class="flex gap-2 items-center mb-1">
            <i data-lucide="lightbulb" class="w-5 h-5 text-yellow-600"></i>
            <span class="font-bold text-yellow-800 uppercase text-sm tracking-wider font-sans">Exam Tip</span>
        </div>
        <p class="text-stone-800 text-xl m-0 font-medium relative z-10">
            Structural Analysis is the most important part. <br/>
            Everything else in Organic Chemistry comes under Structural Analysis.
        </p>
      </div>
    </section>

    <div class="border-t-2 border-dashed border-stone-300 w-1/2 mx-auto"></div>

    <!-- 1.4 Functional Groups -->
    <section>
       <div class="flex items-center gap-2 mb-6">
        <span class="bg-teal-100 text-teal-800 text-lg font-bold px-2 py-1 rounded -rotate-2 border-2 border-teal-200">1.4</span>
        <h2 class="text-4xl font-hand-title text-stone-900 m-0">Functional Groups (Master Table)</h2>
      </div>
      
      <div class="overflow-hidden rounded-xl border-2 border-stone-200 shadow-sm bg-white">
        <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[600px]">
                <thead class="bg-stone-100 text-stone-700 font-hand-title text-xl">
                    <tr>
                        <th class="px-5 py-3 font-bold border-b-2 border-stone-200 w-1/3">Structure</th>
                        <th class="px-5 py-3 font-bold border-b-2 border-stone-200">Name Given</th>
                        <th class="px-5 py-3 font-bold border-b-2 border-stone-200">Example</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 font-hand-body text-xl">
                    <!-- 1. Alkane -->
                    <tr class="hover:bg-teal-50/30 transition-colors">
                        <td class="px-5 py-4">
                            <svg width="100" height="40" viewBox="0 0 100 40">
                                <line x1="20" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                            </svg>
                        </td>
                        <td class="px-5 py-4 font-bold text-stone-700">Alkane</td>
                        <td class="px-5 py-4 text-stone-500">$CH_3-CH_3$ (Ethane)</td>
                    </tr>
                    <!-- 2. Alkene -->
                    <tr class="hover:bg-teal-50/30 transition-colors">
                        <td class="px-5 py-4">
                            <svg width="100" height="40" viewBox="0 0 100 40">
                                <line x1="20" y1="16" x2="80" y2="16" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <line x1="20" y1="24" x2="80" y2="24" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                            </svg>
                        </td>
                        <td class="px-5 py-4 font-bold text-stone-700">Alkene</td>
                        <td class="px-5 py-4 text-stone-500">$CH_2=CH_2$ (Ethene)</td>
                    </tr>
                    <!-- 3. Alkyne -->
                    <tr class="hover:bg-teal-50/30 transition-colors">
                        <td class="px-5 py-4">
                            <svg width="100" height="40" viewBox="0 0 100 40">
                                <line x1="20" y1="12" x2="80" y2="12" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <line x1="20" y1="20" x2="80" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <line x1="20" y1="28" x2="80" y2="28" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <text x="15" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                                <text x="85" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#111827">C</text>
                            </svg>
                        </td>
                        <td class="px-5 py-4 font-bold text-stone-700">Alkyne</td>
                        <td class="px-5 py-4 text-stone-500">$CH≡CH$ (Ethyne)</td>
                    </tr>
                    <!-- 4. Alkyl Halide -->
                    <tr class="hover:bg-teal-50/30 transition-colors">
                        <td class="px-5 py-4">
                            <svg width="100" height="40" viewBox="0 0 100 40">
                                <line x1="30" y1="20" x2="70" y2="20" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
                                <text x="25" y="25" text-anchor="end" font-family="sans-serif" font-weight="600" fill="#6b7280">R</text>
                                <text x="75" y="25" text-anchor="start" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                            </svg>
                        </td>
                        <td class="px-5 py-4 font-bold text-stone-700">Alkyl Halide</td>
                        <td class="px-5 py-4 text-stone-500">$CH_3-Cl$ (Chloroethane)</td>
                    </tr>
                    <!-- 5. Aryl Halide -->
                    <tr class="hover:bg-teal-50/30 transition-colors">
                        <td class="px-5 py-4">
                            <svg width="100" height="60" viewBox="0 0 100 60">
                                <g transform="translate(10,5)">
                                    <path d="M15 10 L35 10 L45 27 L35 44 L15 44 L5 27 Z" fill="none" stroke="#374151" stroke-width="2"/>
                                    <circle cx="25" cy="27" r="8" fill="none" stroke="#374151" stroke-width="1.5"/>
                                    <line x1="45" y1="27" x2="65" y2="27" stroke="#374151" stroke-width="2"/>
                                    <text x="70" y="32" font-family="sans-serif" font-weight="600" fill="#16a34a">X</text>
                                </g>
                            </svg>
                        </td>
                        <td class="px-5 py-4 font-bold text-stone-700">Aryl Halide</td>
                        <td class="px-5 py-4 text-stone-500">$C_6H_5-Cl$ (Chlorobenzene)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="p-4 bg-stone-50 border-t border-stone-200 text-center text-stone-400 text-lg">
            (Table truncated for brevity - full list from previous notes available in study guide)
        </div>
      </div>
    </section>

    <div class="border-t-2 border-dashed border-stone-300 w-1/2 mx-auto"></div>

    <!-- 1.5 Polarity -->
    <section>
       <div class="flex items-center gap-2 mb-4">
        <span class="bg-teal-100 text-teal-800 text-lg font-bold px-2 py-1 rounded rotate-2 border-2 border-teal-200">1.5</span>
        <h2 class="text-4xl font-hand-title text-stone-900 m-0">Polarity</h2>
      </div>
      
      <p class="mb-4 text-stone-800">Electronegativity is the ability of an atom to attract a bonding pair of electrons.</p>
      
      <div class="p-6 bg-white border-2 border-teal-100 rounded-xl shadow-sm">
        <h4 class="font-bold font-hand-title text-2xl text-teal-800 mb-2">Trend in Periodic Table</h4>
        <div class="flex items-center justify-between text-xl text-stone-600">
            <span>F > O > N > Cl > Br > I > S > C ~ H</span>
        </div>
        <div class="mt-4 text-base text-stone-500 italic">
            Fluorine is the most electronegative element.
        </div>
      </div>
    </section>

  </div>
`);