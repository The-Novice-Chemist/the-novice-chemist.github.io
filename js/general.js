(function() {
  // Defensive check: use fallback if AppUtils failed to load
  const u = (window.AppUtils && window.AppUtils.underConstructionHTML) 
    ? window.AppUtils.underConstructionHTML 
    : function(t, c) { return `<div class="p-8 text-center text-stone-500"><h2>${c}: ${t}</h2><p>Content placeholder (Utils missing)</p></div>`; };

  window.AppData = window.AppData || {};
  
  window.AppData.general = {
    id: 'general',
    title: 'General Chemistry',
    description: 'Foundational concepts of matter and energy.',
    modules: [
      {
        id: 'gen_struct',
        title: 'Atomic Structure',
        topics: [
          { id: 'subatomic', title: 'Subatomic Particles', content: u("Subatomic Particles", "General") },
          { id: 'elec_config', title: 'Electronic Configuration', content: u("Electronic Configuration", "General") },
        ]
      },
      {
        id: 'gen_bond',
        title: 'Bonding & Structure',
        topics: [
          { id: 'ionic', title: 'Ionic Bonding', content: u("Ionic Bonding", "General") },
          { id: 'covalent', title: 'Covalent Bonding', content: u("Covalent Bonding", "General") },
          { id: 'vsepr', title: 'Shapes of Molecules', content: u("Shapes of Molecules", "General") },
        ]
      }
    ]
  };
})();