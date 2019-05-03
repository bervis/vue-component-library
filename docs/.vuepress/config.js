module.exports = {
  title: 'Vue component library',
  description: 'Vue component library documentation',
  themeConfig: {
    repo: 'frederikwagner/vue-component-library',
    sidebar: [
      ['/', 'Home'],
      ['/inspiration', 'Inspiration'],
      {
        title: 'Creating your own',
        collapsable: false,
        children: [
          ['/create/getting-started', 'Getting started'],
          ['/create/development', 'Development'],
          ['/create/project-structure', 'Project structure'],
          ['/create/deployment', 'Deployment'],
        ]
      },
      {
        title: 'Using the library',
        collapsable: false,
        children: [
          ['/use/getting-started', 'Getting started'],
          ['/use/global-styles', 'Global styles'],
        ]
      },
      {
        title: 'Standard components',
        collapsable: false,
        children: [
          ['/components/component-types', 'Component types'],
          ['/components/base-button', '<base-button>'],
          ['/components/base-input', '<base-input>'],
        ]
      },
    ],
  }
}
