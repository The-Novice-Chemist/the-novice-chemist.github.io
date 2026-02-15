(function() {
  const u = (window.AppUtils && window.AppUtils.underConstructionHTML) 
    ? window.AppUtils.underConstructionHTML 
    : function(t, c) { return `<div>${c}: ${t}</div>`; };

  window.AppData = window.AppData || {};

  window.AppData.industrial = {
    id: 'industrial',
    title: 'Industrial Chemistry',
    description: 'Chemical processes in industry.',
    modules: [
      {
        id: 'ind_env',
        title: 'Environmental',
        topics: [
          { id: 'pollute', title: 'Pollution & Control', content: u("Environmental Pollution", "Industrial") },
        ]
      }
    ]
  };
})();