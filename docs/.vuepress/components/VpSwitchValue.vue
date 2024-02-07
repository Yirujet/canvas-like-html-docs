<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-switch-value',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('switch', {
                        x: 10,
                        y: 10,
                        activeText: '打开',
                        inactiveText: '关闭',
                        inactiveValue: 'closed',
                        activeValue: 'opened',
                        value: 'opened',
                        on: {
                            change(val) {
                                console.log(`current value is: ${val}`)
                            }
                        }
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>