<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-grid',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('row', {
                        $$render_children: h => [
                            h('col', { 
                                span: 6,
                                $$render_children: h => [h('span', { text: 'col-6' })]
                            }),
                            h('col', { 
                                span: 6,
                                $$render_children: h => [h('span', { text: 'col-6' })]
                            }),
                            h('col', { 
                                span: 6,
                                $$render_children: h => [h('span', { text: 'col-6' })]
                            }),
                            h('col', { 
                                span: 6,
                                $$render_children: h => [h('span', { text: 'col-6' })]
                            })
                        ]
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>