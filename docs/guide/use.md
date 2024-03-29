## Get started quickly

This section will introduce how to use canvas-like-html in your project.

### Import canvas-like-html

> npm

```shell
npm i canvas-like-html -S
```

### Usage

1. Use js to create drawing elements, similar to vue's render writing method

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
2. Using SFC (`.canvas` file, recommended method!!!), canvas-like-html supports compiling `.canvas` files and rendering the compiled results onto the canvas element. (Note: You need to install the `canvas-loaders` module and introduce `canvas-loaders` in the webpack loader to process .canvas files)

   webpack.config.js

   ```js
   module.exports = {
       module: {
           rules: [
               {
                   test: /\.canvas$/,
                   use: [
                       'canvas-loaders'
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
