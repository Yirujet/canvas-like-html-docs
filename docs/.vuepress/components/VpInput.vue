<template>
    <canvas ref="canvas" width="800" height="60"></canvas>
</template>
<script>

export default {
    name: 'vp-input',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('input', {
                        x: 10,
                        y: 10,
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>