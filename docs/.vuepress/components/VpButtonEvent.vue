<template>
    <canvas ref="canvas" width="800" height="60"></canvas>
</template>
<script>

export default {
    name: 'vp-button-event',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('button', {
                        x: 10,
                        y: 10,
                        text: 'click按钮',
                        type: 'primary',
                        on: {
                            click() {
                                console.log('button -> click event triggered')
                            }
                        }
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>