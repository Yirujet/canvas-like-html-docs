<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-link-event',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('link', {
                        x: 10,
                        y: 10,
                        text: 'click链接',
                        on: {
                            click() {
                                console.log('link -> click event triggered')
                            }
                        }
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>