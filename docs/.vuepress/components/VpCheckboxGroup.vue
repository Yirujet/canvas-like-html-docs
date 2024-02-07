<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-checkbox-group',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('checkbox-group', {
                        x: 10,
                        y: 10,
                        $$render_children: h => [
                            h('checkbox', {
                                value: 'A',
                                text: '复选框 A'
                            }),
                            h('checkbox', {
                                value: 'B',
                                text: '复选框 B'
                            }),
                            h('checkbox', {
                                value: 'C',
                                text: '复选框 C'
                            }),
                        ],
                        on: {
                            change(value) {
                                console.log(`勾选了${value}`)
                            }
                        }
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>