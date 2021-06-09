const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TAM Dev Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    smoothScroll: true,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
        items: [
          { text: 'Welcome', link: '/guide/' },
          { text: 'Repos', link: '/guide/repos/' },
          { text: 'Code', link: '/guide/code/' }
        ]
      },
      {
        text: 'UI',
        items: [
          { text: 'Overview', link: '/ui/' },
          { text: 'BootstrapVue', link: '/ui/bootstrap/' },
          { text: 'Components', link: '/ui/components/' },
          { text: 'Styling', link: '/ui/styling/' }
        ]
      },
      {
        text: 'JSON',
        link: '/json/',
      },
      {
        text: 'LMS',
        link: '/LMS/',
      },
      {
        text: 'Accessibility',
        link: '/accessibility/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'repos',
            'code',
            'using-vue',
          ]
        }
      ],
      '/ui/': [
        {
          title: 'UI',
          collapsable: false,
          children: [
            '',
            'bootstrap',
            'components',
            'styling',
          ]
        }
      ],
      '/json/': [
        {
          title: 'JSON',
          collapsable: false,
          children: [
            '',
            'overview',
            'i18n',
          ]
        }
      ],
      '/accessibility/': [
        {
          title: 'Accessibility',
          collapsable: false,
          children: [
            '',
            'overview',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
