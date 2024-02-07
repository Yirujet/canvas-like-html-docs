<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-switch-text',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('switch', {
                        x: 10,
                        y: 10,
                        activeText: '打开',
                        inactiveText: '关闭'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>