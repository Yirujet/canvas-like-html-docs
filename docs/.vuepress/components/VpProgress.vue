<template>
    <canvas ref="canvas" width="800" height="80"></canvas>
</template>
<script>

export default {
    name: 'vp-progress',
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
                                                    h('progress', {
                                                        percentage: 66
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('progress', {
                                                        percentage: 66,
                                                        status: 'success'
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('progress', {
                                                        percentage: 66,
                                                        status: 'exception'
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    h('row', {
                                        $$render_children: h => [
                                            h('col', {
                                                span: 24,
                                                $$render_children: h => [
                                                    h('progress', {
                                                        percentage: 66,
                                                        status: 'warning'
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                        ]
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>