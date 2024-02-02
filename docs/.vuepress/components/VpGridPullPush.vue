<template>
    <canvas ref="canvas" width="800" height="100"></canvas>
</template>
<script>

export default {
    name: 'vp-grid-pull-push',
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
                                                push: 2,
                                                $$render_children: h => [h('span', { text: 'col-6 push-2' })]
                                            }),
                                            h('col', { 
                                                span: 6,
                                                push: 3,
                                                $$render_children: h => [h('span', { text: 'col-6 push-3' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'end',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 6,
                                                pull: 2,
                                                $$render_children: h => [h('span', { text: 'col-6 pull-2' })]
                                            }),
                                            h('col', { 
                                                span: 6,
                                                pull: 2,
                                                $$render_children: h => [h('span', { text: 'col-6 pull-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'center',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 18,
                                                push: 6,
                                                $$render_children: h => [h('span', { text: 'col-18 push-6' })]
                                            }),
                                            h('col', { 
                                                span: 6,
                                                pull: 18,
                                                $$render_children: h => [h('span', { text: 'col-6 pull-18' })]
                                            })
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