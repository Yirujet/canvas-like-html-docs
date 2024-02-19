<template>
    <canvas ref="canvas" width="800" height="300"></canvas>
</template>

<script>

export default {
    name: 'vp-table-slot-head',
    data() {
        return {
            colLen: 10,
            rowLen: 4,
            fixedLeftColIndex: [],
            fixedRightColIndex: []
        }
    },
    mounted() {
        const head = Array.from({ length: this.colLen }).map((e, i) => ({
            field: `col${i}`,
            label: `col${i + 1}`,
            fixed: ((i) => {
                if (this.fixedLeftColIndex.includes(i)) {
                    return 'left'
                }
                if (this.fixedRightColIndex.includes(i)) {
                    return 'right'
                }
            })(i),
        }))
        head.push({
            field: 'col3',
            label: '操作',
            fixed: 'right',
            width: 150,
            slot: {
                head: (h, col) => {
                    return h('span', {
                        text: `${col.label}-${col.field}`
                    })
                }
            }
        })
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
                        width: 600,
                        height: 250,
                        columns: head,
                        data: list
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>