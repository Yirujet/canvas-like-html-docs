## 自定义绘图元素

当内置的绘图元素不能满足绘图需求时，可以注册自定义绘图元素以达到复用。

以Vue项目为例：

> 通过CanvasLikeHtml的element方法注册自定义元素后，即可在.canvas文件中使用此自定义元素

<ClientOnly>
<vp-custom-element></vp-custom-element>
</ClientOnly>

```js
// App.vue

<template>
  <div id="app">
    <canvas ref="canvas" width="1800" height="850"></canvas>
  </div>
</template>

<script>
import testCanvas from './test.canvas'
import CanvasLikeHtml from 'canvas-like-html'

export default {
  name: 'App',
  created() {
    const Element = CanvasLikeHtml.elements.get('element')
    const inherite = CanvasLikeHtml.inherit
    // 继承Element即可监听鼠标事件及获取绘制对象的基本属性
    inherite(Circle, Element)
    function Circle(props) {
      Element.call(this)
      this.r = 5
      this.initProps(props)
      this.mouseEntered = true
      // 注册元素事件
      this.registerListenerFromOnProp({
          click: e => {
	      const { offsetX, offsetY } = e
	      if (((this.x - offsetX) ** 2 + (this.y - offsetY) ** 2) ** 0.5 < this.r) {
                    alert('点击了圆内部！')
              }
	  }
      })
      this.render = function() {
        this.ctx.save()
        this.ctx.lineWidth = 1
        this.ctx.arc(this.x, this.y,  this.r, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.restore()
      }
    }
    // 注册元素circle
    CanvasLikeHtml.element('circle', Circle)
  },
  mounted() {
    new CanvasLikeHtml({
        render: h => h(testCanvas)
    }).mount(this.$refs.canvas)
  }
}
</script>
```

```canvas
<!--test.canvas-->
<canvas width="1000" height="500">
    <circle x="250" y="50" :r="30"></circle>
</canvas>
<script>
</script>
```
