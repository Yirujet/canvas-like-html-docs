<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-tag-event',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('tag', {
                        x: 10,
                        y: 10,
                        text: '点击标签',
                        on: {
                            change: () => {
                                console.log('tag clicked')
                            }
                        }
                    }),
                    h('tag', {
                        x: 100,
                        y: 10,
                        type: 'success',
                        closable: true,
                        text: 'success标签',
                        on: {
                            close() {
                                console.log('tag closed')
                            }
                        }
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>