module.exports = {
    title: 'Canvas like html',
    description: 'Make canvas drawing as convenient as using html elements',
    markdown: {
      lineNumbers: false,
    },
    head: [
      [
        'script',
        { src: '/index.js' }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: '/index.css' 
        }
      ]
    ],
    themeConfig: {
      home: true,
      subSidebar: 'auto',
      sidebar: [
        {
          title: '使用指南',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/guide/install.md',
            '/guide/use.md',
            '/guide/canvas_sfc.md'
          ],
        },
        {
          title: '绘图元素',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/components/Span.md',
            '/components/Button.md',
            '/components/Link.md'
          ],
        },
        {
          title: '布局元素',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/components/Grid.md',
          ]
        },
        {
          title: '内置指令',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/directives/for.md',
          ]
        }
      ],
    },
}