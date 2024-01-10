<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-link-disabled',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('link', {
                        x: 10,
                        y: 10,
                        disabled: true,
                        text: '默认链接'
                    }),
                    h('link', {
                        x: 80,
                        y: 10,
                        disabled: true,
                        type: 'primary',
                        text: '主要链接'
                    }),
                    h('link', {
                        x: 150,
                        y: 10,
                        disabled: true,
                        type: 'success',
                        text: '成功链接'
                    }),
                    h('link', {
                        x: 220,
                        y: 10,
                        disabled: true,
                        type: 'info',
                        text: '信息链接'
                    }),
                    h('link', {
                        x: 290,
                        y: 10,
                        disabled: true,
                        type: 'warning',
                        text: '警告链接'
                    }),
                    h('link', {
                        x: 360,
                        y: 10,
                        disabled: true,
                        type: 'danger',
                        text: '危险链接'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>