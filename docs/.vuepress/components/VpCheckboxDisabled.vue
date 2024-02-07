<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-checkbox-disabled',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('checkbox', {
                        x: 10,
                        y: 10,
                        disabled: true,
                        text: '复选框禁用'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>