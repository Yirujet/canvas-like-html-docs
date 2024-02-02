<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-grid-offset',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('row', {
                        $$render_children: h => [
                            h('col', {
                                span: 24,
                                $$render_children: h => [
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 6,
                                                offset: 6,
                                                $$render_children: h => [h('span', { text: 'col-6 col-offset-6' })]
                                            }),
                                            h('col', { 
                                                span: 6,
                                                offset: 6,
                                                $$render_children: h => [h('span', { text: 'col-6 col-offset-6' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 12,
                                                offset: 6,
                                                $$render_children: h => [h('span', { text: 'col-12 col-offset-6' })]
                                            }),
                                        ]
                                    }),
                                ]
                            })
                        ]
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>