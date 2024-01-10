<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-text-button',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('button', {
                        x: 10,
                        y: 10,
                        type: 'text',
                        text: '文字按钮'
                    }),
                    h('button', {
                        x: 80,
                        y: 10,
                        type: 'text',
                        disabled: true,
                        text: '主要按钮'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>