<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-tag',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('tag', {
                        x: 10,
                        y: 10,
                        text: '默认标签'
                    }),
                    h('tag', {
                        x: 100,
                        y: 10,
                        type: 'success',
                        text: 'success标签'
                    }),
                    h('tag', {
                        x: 210,
                        y: 10,
                        type: 'info',
                        text: 'info标签'
                    }),
                    h('tag', {
                        x: 300,
                        y: 10,
                        type: 'warning',
                        text: 'warning标签'
                    }),
                    h('tag', {
                        x: 410,
                        y: 10,
                        type: 'danger',
                        text: 'danger标签'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>