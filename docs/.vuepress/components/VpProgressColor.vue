<template>
    <canvas ref="canvas" width="800" height="80"></canvas>
</template>
<script>

export default {
    name: 'vp-progress-color',
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
                                                        percentage: 30,
                                                        strokeWidth: 20,
                                                        color: [
                                                            {color: '#f56c6c', percentage: 20},
                                                            {color: '#5cb87a', percentage: 60},
                                                        ]
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
                                                        percentage: 80,
                                                        strokeWidth: 20,
                                                        color: [
                                                            {color: '#f56c6c', percentage: 20},
                                                            {color: '#5cb87a', percentage: 60},
                                                        ]
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