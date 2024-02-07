<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-switch-disabled',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('switch', {
                        x: 10,
                        y: 10,
                        value: false,
                        disabled: true
                    }),
                    h('switch', {
                        x: 120,
                        y: 10,
                        value: true,
                        disabled: true
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>