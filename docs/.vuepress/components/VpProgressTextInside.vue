<template>
    <canvas ref="canvas" width="800" height="80"></canvas>
</template>
<script>

export default {
    name: 'vp-progress-text-inside',
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
                                                        percentage: 66,
                                                        textInside: true,
                                                        strokeWidth: 20
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
                                                        status: 'success',
                                                        textInside: true,
                                                        strokeWidth: 20
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
                                                        status: 'exception',
                                                        textInside: true,
                                                        strokeWidth: 20
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
                                                        status: 'warning',
                                                        textInside: true,
                                                        strokeWidth: 20
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