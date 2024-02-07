<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-checkbox',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('checkbox', {
                        x: 10,
                        y: 10,
                        text: '默认复选框'
                    }),
                    h('checkbox', {
                        x: 120,
                        y: 10,
                        checked: true,
                        text: '选中状态'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>