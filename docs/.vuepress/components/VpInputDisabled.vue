<template>
    <canvas ref="canvas" width="800" height="60"></canvas>
</template>
<script>

export default {
    name: 'vp-input-disabled',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('input', {
                        x: 10,
                        y: 10,
                        disabled: true,
                        value: 'test'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>