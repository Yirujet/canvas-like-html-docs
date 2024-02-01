<template>
    <canvas ref="canvas" width="800" height="200"></canvas>
</template>
<script>

export default {
    name: 'vp-grid-align',
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
                                                    h('span', { text: 'align: top' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        align: 'top',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('button', { text: 'col-12' })]
                                            }),
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('span', { text: 'col-12' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'align: middle' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        align: 'middle',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('button', { text: 'col-12' })]
                                            }),
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('span', { text: 'col-12' })]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('span', { text: 'align: bottom' }),
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        align: 'bottom',
                                        $$render_children: h => [
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('button', { text: 'col-12' })]
                                            }),
                                            h('col', { 
                                                span: 12,
                                                $$render_children: h => [h('span', { text: 'col-12' })]
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