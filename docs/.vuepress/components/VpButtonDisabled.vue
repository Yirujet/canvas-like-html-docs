<template>
    <canvas ref="canvas" width="800" height="180"></canvas>
</template>
<script>

export default {
    name: 'vp-button-disabled',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('button', {
                        x: 10,
                        y: 10,
                        disabled: true,
                        text: '默认按钮'
                    }),
                    h('button', {
                        x: 130,
                        y: 10,
                        disabled: true,
                        type: 'primary',
                        text: '主要按钮'
                    }),
                    h('button', {
                        x: 250,
                        y: 10,
                        disabled: true,
                        type: 'success',
                        text: '成功按钮'
                    }),
                    h('button', {
                        x: 370,
                        y: 10,
                        disabled: true,
                        type: 'info',
                        text: '信息按钮'
                    }),
                    h('button', {
                        x: 490,
                        y: 10,
                        disabled: true,
                        type: 'warning',
                        text: '警告按钮'
                    }),
                    h('button', {
                        x: 610,
                        y: 10,
                        disabled: true,
                        type: 'danger',
                        text: '危险按钮'
                    }),
                    h('button', {
                        x: 10,
                        y: 60,
                        disabled: true,
                        plain: true,
                        text: '朴素按钮'
                    }),
                    h('button', {
                        x: 130,
                        y: 60,
                        disabled: true,
                        plain: true,
                        type: 'primary',
                        text: '主要按钮'
                    }),
                    h('button', {
                        x: 250,
                        y: 60,
                        disabled: true,
                        plain: true,
                        type: 'success',
                        text: '成功按钮'
                    }),
                    h('button', {
                        x: 370,
                        y: 60,
                        disabled: true,
                        plain: true,
                        type: 'info',
                        text: '信息按钮'
                    }),
                    h('button', {
                        x: 490,
                        y: 60,
                        disabled: true,
                        plain: true,
                        type: 'warning',
                        text: '警告按钮'
                    }),
                    h('button', {
                        x: 610,
                        y: 60,
                        disabled: true,
                        plain: true,
                        type: 'danger',
                        text: '危险按钮'
                    }),
                    h('button', {
                        x: 10,
                        y: 110,
                        disabled: true,
                        round: true,
                        text: '圆角按钮'
                    }),
                    h('button', {
                        x: 130,
                        y: 110,
                        disabled: true,
                        round: true,
                        type: 'primary',
                        text: '主要按钮'
                    }),
                    h('button', {
                        x: 250,
                        y: 110,
                        disabled: true,
                        round: true,
                        type: 'success',
                        text: '成功按钮'
                    }),
                    h('button', {
                        x: 370,
                        y: 110,
                        disabled: true,
                        round: true,
                        type: 'info',
                        text: '信息按钮'
                    }),
                    h('button', {
                        x: 490,
                        y: 110,
                        disabled: true,
                        round: true,
                        type: 'warning',
                        text: '警告按钮'
                    }),
                    h('button', {
                        x: 610,
                        y: 110,
                        disabled: true,
                        round: true,
                        type: 'danger',
                        text: '危险按钮'
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>