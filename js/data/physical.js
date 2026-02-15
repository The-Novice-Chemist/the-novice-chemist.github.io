(function() {
  const u = (window.AppUtils && window.AppUtils.underConstructionHTML) 
    ? window.AppUtils.underConstructionHTML 
    : function(t, c) { return `<div>${c}: ${t}</div>`; };

  window.AppData = window.AppData || {};

  window.AppData.physical = {
    id: 'physical',
    title: 'Physical Chemistry',
    description: 'The physics of chemical systems.',
    modules: [
      {
        id: 'phy_energy',
        title: 'Energetics',
        topics: [
          { id: 'enthalpy', title: 'Enthalpy Changes', content: u("Enthalpy", "Physical") },
          { id: 'entropy', title: 'Entropy & Gibbs Energy', content: u("Entropy", "Physical") },
        ]
      }
    ]
  };
})();