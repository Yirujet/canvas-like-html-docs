module.exports = {
    title: 'Canvas like html',
    description: 'Make canvas drawing as convenient as using html elements',
    base: '/canvas-like-html-docs/',
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
    locales: {
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'Canvas like html',
        description: 'Make canvas drawing as convenient as using html elements'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'Canvas like html',
        description: '让canvas绘制像使用html元素一样方便'
      }
    },
    themeConfig: {
      home: true,
      subSidebar: 'auto',
      locales: {
        '/': {
          selectText: 'Languages',
          label: 'English',
          sidebar: [
            {
              title: 'Guide',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/guide/install.md',
                '/guide/use.md',
                '/guide/canvas_sfc.md'
              ],
            },
            {
              title: 'Elements',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/components/Span.md',
                '/components/Button.md',
                '/components/Link.md',
                '/components/Tag.md',
                '/components/Checkbox.md',
                '/components/Radio.md',
                '/components/Progress.md',
                '/components/Switch.md',
                '/components/Dropdown.md',
                '/components/Input.md',
                '/components/Table.md'
              ],
            },
            {
              title: 'Layout',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/components/Grid.md',
              ]
            },
            {
              title: 'Directives',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/directives/for.md',
                '/directives/insertVal.md'
              ]
            },
            {
              title: 'Other',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/other/Element.md',
                '/other/CustomElement.md'
              ]
            }
          ],
        },
        '/zh/': {
          selectText: '选择语言',
          label: '简体中文',
          sidebar: [
            {
              title: '使用指南',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/zh/guide/install.md',
                '/zh/guide/use.md',
                '/zh/guide/canvas_sfc.md'
              ],
            },
            {
              title: '绘图元素',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/zh/components/Span.md',
                '/zh/components/Button.md',
                '/zh/components/Link.md',
                '/zh/components/Tag.md',
                '/zh/components/Checkbox.md',
                '/zh/components/Radio.md',
                '/zh/components/Progress.md',
                '/zh/components/Switch.md',
                '/zh/components/Dropdown.md',
                '/zh/components/Input.md',
                '/zh/components/Table.md'
              ],
            },
            {
              title: '布局元素',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/zh/components/Grid.md',
              ]
            },
            {
              title: '内置指令',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/zh/directives/for.md',
                '/zh/directives/insertVal.md'
              ]
            },
            {
              title: '其他',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/zh/other/Element.md',
                '/zh/other/CustomElement.md'
              ]
            }
          ],
        }
      },
    },
}