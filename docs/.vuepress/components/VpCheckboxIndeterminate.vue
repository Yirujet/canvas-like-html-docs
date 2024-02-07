<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-checkbox-indeterminate',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('checkbox', {
                        x: 10,
                        y: 10,
                        indeterminate: true,
                        text: 'indeterminate'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>