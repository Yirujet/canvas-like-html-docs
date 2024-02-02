<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-tag-closable',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('tag', {
                        x: 10,
                        y: 10,
                        closable: true,
                        text: '默认标签'
                    }),
                    h('tag', {
                        x: 120,
                        y: 10,
                        type: 'success',
                        closable: true,
                        text: 'success标签'
                    }),
                    h('tag', {
                        x: 250,
                        y: 10,
                        type: 'info',
                        closable: true,
                        text: 'info标签'
                    }),
                    h('tag', {
                        x: 360,
                        y: 10,
                        type: 'warning',
                        closable: true,
                        text: 'warning标签'
                    }),
                    h('tag', {
                        x: 490,
                        y: 10,
                        type: 'danger',
                        closable: true,
                        text: 'danger标签'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>