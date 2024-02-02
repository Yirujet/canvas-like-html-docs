<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-grid-gutter',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('row', {
                        gutter: 5,
                        justify: 'center',
                        $$render_children: h => [
                            h('col', {
                                span: 2,
                                $$render_children: h => [
                                    h('tag', {type: 'success', text: 'col-2'})
                                ]
                            }),
                            h('col', {
                                span: 2,
                                $$render_children: h => [
                                    h('tag', {type: 'success', text: 'col-2'})
                                ]
                            }),
                            h('col', {
                                span: 2,
                                $$render_children: h => [
                                    h('tag', {type: 'success', text: 'col-2'})
                                ]
                            }),
                            h('col', {
                                span: 2,
                                $$render_children: h => [
                                    h('tag', {type: 'success', text: 'col-2'})
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