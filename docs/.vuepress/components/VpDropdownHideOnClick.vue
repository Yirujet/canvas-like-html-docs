<template>
    <canvas ref="canvas" width="800" height="50"></canvas>
</template>
<script>

export default {
    name: 'vp-dropdown-hide-on-click',
    mounted() {
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('dropdown', {
                        x: 10,
                        y: 10,
                        text: '下拉菜单',
                        hideOnClick: false,
                        list: [
                            {name: '选项1', value: 'option-1'},
                            {name: '选项2', value: 'option-2'},
                            {name: '选项3', value: 'option-3'}
                        ]
                    }),
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>