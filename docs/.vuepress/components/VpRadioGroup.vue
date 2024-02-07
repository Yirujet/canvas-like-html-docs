<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-radio-group',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('radio-group', {
                        x: 10,
                        y: 10,
                        $$render_children: h => [
                            h('radio', {
                                value: 'A',
                                text: '选项 A'
                            }),
                            h('radio', {
                                value: 'B',
                                text: '选项 B'
                            }),
                            h('radio', {
                                value: 'C',
                                text: '选项 C'
                            }),
                        ],
                        on: {
                            change(value) {
                                console.log(`选择了${value}`)
                            }
                        }
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>