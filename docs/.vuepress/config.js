module.exports = {
  base: '/website/componentsDoc/',
  dest: 'docs/.vuepress/dist/componentsDoc',
  title: 'Official Website Components',
  description: 'Official Website Components Docs',
  themeConfig: {
    repo: '@midea/official-website/common-components',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Technical points', link: '/technicalPoints/' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/components/': [
        '',
        'component2',
      ],
      '/technicalPoints/': [
        '',
      ],
    },
    smoothScroll: true,
  },
}

