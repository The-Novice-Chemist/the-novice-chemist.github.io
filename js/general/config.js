window.registerConfig('general', {
    id: 'general',
    title: 'General Chemistry',
    modules: [
      {
        id: 'gen_struct',
        title: 'Atomic Structure',
        topics: [
          { id: 'subatomic', title: 'Subatomic Particles' },
          { id: 'elec_config', title: 'Electronic Configuration' }
        ]
      },
      {
        id: 'gen_bond',
        title: 'Bonding & Structure',
        topics: [
          { id: 'ionic', title: 'Ionic Bonding' },
          { id: 'covalent', title: 'Covalent Bonding' },
          { id: 'vsepr', title: 'Shapes of Molecules' }
        ]
      }
    ]
});