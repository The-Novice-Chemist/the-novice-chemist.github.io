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
            content: u("Organic Chemistry Fundamentals (Bonding, Hybridization, Isomerism)", "Organic") 
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