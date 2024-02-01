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
      ]
    ],
    themeConfig: {
      home: true,
      subSidebar: 'auto',
      sidebar: [
        {
          title: '使用指南', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0, // 可选的, 默认值是 1
          children: ['/guide/install.md', '/guide/use.md'],
        },
        {
          title: '绘图组件',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/components/Button.md',
            '/components/Link.md'
          ],
        },
        {
          title: '布局组件',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/components/Grid.md',
          ]
        }
      ],
    },
}