window.registerConfig('organic', {
    id: 'organic',
    title: 'Organic Chemistry',
    description: 'Structure, properties, and reactions of carbon compounds.',
    modules: [
        {
            id: 'opt1',
            title: 'Option 1: Fundamentals & Basics',
            topics: [
                { id: 'fundamentals', title: 'Fundamentals' },
                { id: 'nomenclature', title: 'IUPAC Nomenclature' }
            ]
        },
        {
            id: 'opt2',
            title: 'Option 2: Hydrocarbons & Halides',
            topics: [
                { id: 'alkanes', title: 'Alkanes' },
                { id: 'alkenes', title: 'Alkenes / Olefins' },
                { id: 'alkynes', title: 'Alkynes' },
                { id: 'benzene', title: 'Aromatic Hydrocarbons' },
                { id: 'halides', title: 'Organic Halides' }
            ]
        },
        {
            id: 'opt3',
            title: 'Option 3: Oxygen & Nitrogen Compounds',
            topics: [
                { id: 'alcohols', title: 'Alcohols' },
                { id: 'phenols', title: 'Phenols' },
                { id: 'carbonyls', title: 'Aldehydes & Ketones' },
                { id: 'acids', title: 'Carboxylic Acids' },
                { id: 'acid_halides', title: 'Acid Halides' },
                { id: 'esters', title: 'Esters' },
                { id: 'amines', title: 'Amines' }
            ]
        }
    ]
});