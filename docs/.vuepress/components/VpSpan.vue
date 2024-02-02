<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-span',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('span', {
                        x: 10,
                        y: 10,
                        text: '默认文本'
                    }),
                    h('span', {
                        x: 80,
                        y: 10,
                        color: 'blue',
                        text: '蓝色文本'
                    }),
                    h('span', {
                        x: 150,
                        y: 10,
                        fontSize: 20,
                        text: '20px文本'
                    }),
                    h('span', {
                        x: 250,
                        y: 10,
                        fontSize: 30,
                        text: '30px文本'
                    }),
                    h('span', {
                        x: 390,
                        y: 10,
                        fontSize: 40,
                        text: '40px文本'
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>