<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-radio',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('radio', {
                        x: 10,
                        y: 10,
                        text: '默认单选框'
                    }),
                    h('radio', {
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