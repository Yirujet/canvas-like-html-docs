<template>
    <canvas ref="canvas" width="1200" height="600"></canvas>
</template>

<script>

export default {
    name: 'vp-table-big-data',
    data() {
        return {
            colLen: 1000,
            rowLen: 10000,
            fixedColIndex: []
        }
    },
    mounted() {
        const head = Array.from({ length: this.colLen }).map((e, i) => ({
            field: `col${i}`,
            label: `col${i + 1}`,
            fixed: ((i) => {
                if (this.fixedColIndex.includes(i)) {
                    return 'right'
                }
            })(i),
        }))
        let list = []
        for (let i = 0, l = this.rowLen, row = {}; i < l; i++) {
            row = {}
            for(let j = 0, k = head.length; j < k; j++) {
                row.index = i + 1
                row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            }
            list.push(row)
        }
        new CanvasLikeHtml.default({
            render: h => h({
                render: h => [
                    h('table', {
                        width: 1200,
                        height: 600,
                        columns: head,
                        data: list
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>