<template>
    <canvas ref="canvas" width="800" height="150"></canvas>
</template>
<script>

export default {
    name: 'vp-progress-dashboard',
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
                                                        type: 'dashboard',
                                                        strokeWidth: 10
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
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