(function() {
  const u = (window.AppUtils && window.AppUtils.underConstructionHTML) 
    ? window.AppUtils.underConstructionHTML 
    : function(t, c) { return `<div>${c}: ${t}</div>`; };

  window.AppData = window.AppData || {};

  window.AppData.inorganic = {
    id: 'inorganic',
    title: 'Inorganic Chemistry',
    description: 'Study of the elements and non-carbon compounds.',
    modules: [
      {
        id: 'in_sblock',
        title: 's-Block Elements',
        topics: [
          { id: 'grp1', title: 'Group 1: Alkali Metals', content: u("Group 1 Elements", "Inorganic") },
          { id: 'grp2', title: 'Group 2: Alkaline Earth Metals', content: u("Group 2 Elements", "Inorganic") },
        ]
      },
      {
        id: 'in_pblock',
        title: 'p-Block Elements',
        topics: [
          { id: 'grp13', title: 'Group 13', content: u("Group 13 Elements", "Inorganic") },
          { id: 'grp15', title: 'Group 15 (Nitrogen)', content: u("Group 15 Elements", "Inorganic") },
        ]
      }
    ]
  };
})();