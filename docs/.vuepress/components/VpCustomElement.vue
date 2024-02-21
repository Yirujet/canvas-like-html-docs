<template>
    <canvas ref="canvas" width="1000" height="500"></canvas>
</template>
<script>

export default {
    name: 'vp-custom-element',
    created() {
        const Element = CanvasLikeHtml.default.elements.get('element')
        const inherite = CanvasLikeHtml.default.inherit

        inherite(Circle, Element)
        function Circle(props) {
            Element.call(this)
            this.r = 5
            this.initProps(props)
            this.mouseEntered = true
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

        CanvasLikeHtml.default.element('circle', Circle)
    },
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('circle', {
                        x: 250,
                        y: 50,
                        r: 30,
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>