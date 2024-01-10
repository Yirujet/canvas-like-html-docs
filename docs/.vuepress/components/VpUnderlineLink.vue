<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-underline-link',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('link', {
                        x: 10,
                        y: 10,
                        underline: true,
                        text: '有下划线'
                    }),
                    h('link', {
                        x: 80,
                        y: 10,
                        underline: false,
                        text: '无下划线'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>