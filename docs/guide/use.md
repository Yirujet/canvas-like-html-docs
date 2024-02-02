## 快速上手

本节将介绍如何在项目中使用canvas-like-html。

### 引入canvas-like-html

> npm

### 使用方式

1. 使用js创建绘制元素，类似于vue的render写法

   ```js
   import CanvasLikeHtml from 'canvas-like-html'

   document.body.onload = () => {
       new CanvasLikeHtml({
       render: h => h({
                   render: h => [
                       h('row', {
                           $$render_children: h => [
                               h('col', {
                                   span: 24,
                                   $$render_children: h => [
                                       h('row', {
                                           $$render_children: h => [
                                               h('col', { 
                                                   span: 6,
                                                   offset: 6,
                                                   $$render_children: h => [h('span', { text: 'col-6 col-offset-6' })]
                                               }),
                                               h('col', { 
                                                   span: 6,
                                                   offset: 6,
                                                   $$render_children: h => [h('span', { text: 'col-6 col-offset-6' })]
                                               })
                                           ]
                                       }),
                                       h('row', {
                                           $$render_children: h => [
                                               h('col', { 
                                                   span: 12,
                                                   offset: 6,
                                                   $$render_children: h => [h('span', { text: 'col-12 col-offset-6' })]
                                               }),
                                           ]
                                       }),
                                   ]
                               })
                           ]
                       }),
                   ]
               })
       }).mount(document.getElementById('canvas'))
   }
   ```
2. 使用SFC（`.canvas`文件，推荐方式！！！），canvas-like-html支持编译 `.canvas`文件，并将其编译结果渲染到canvas元素上。(注：需安装 `canvas-loaders`模块并在webpack loader中引入 `canvas-loaders`用于处理.canvas文件)

   webpack.config.js

   ```js
   module.exports = {
       module: {
           rules: [
               {
                   test: /\.canvas$/,
                   use: [
                       'canvas-loader'
                   ]
               }
           ]
       },
   }

   ```

   test.canvas

   ```canvas
   <canvas width="800" height="50">
       <link x="10" y="10" type="primary" @click="handleClick">click链接</link>
   </canvas>

   <script>
   export default {
   	methods: {
   		handleClick() {
   			console.log('link -> click event triggered')
   		}
   	}
   }
   </script>
   ```
