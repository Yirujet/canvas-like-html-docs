<template>
    <canvas ref="canvas" width="800" height="350"></canvas>
</template>
<script>

export default {
    name: 'vp-grid-justify',
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
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: start' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'start',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: center' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'center',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: end' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'end',
                                        $$render_children: h => [
                                            h('col', {
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: space-around' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'space-around',
                                        $$render_children: h => [
                                            h('col', {
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: space-between' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'space-between',
                                        $$render_children: h => [
                                            h('col', {
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'justify: space-evenly' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        justify: 'space-evenly',
                                        $$render_children: h => [
                                            h('col', {
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
                                            }),
                                            h('col', { 
                                                span: 2,
                                                $$render_children: h => [h('button', { type: 'primary', text: 'col-2' })]
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