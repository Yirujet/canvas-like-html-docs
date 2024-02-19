<template>
    <canvas ref="canvas" width="800" height="500"></canvas>
</template>

<script>

export default {
    name: 'vp-table-children',
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
        head.unshift({ 
            label: 'col-parent', 
            children: [
                { 
                    label: 'col-1', 
                    children: [
                        {
                            label: 'col-1-1',
                            field: 'col1',
                            children: [
                                {
                                    label: 'col-1-1-1',
                                    field: 'col3',
                                    children: [
                                        {
                                            label: 'col-1-1-1-1',
                                            field: 'col4'
                                        },
                                        {
                                            label: 'col-1-1-1-2',
                                            field: 'col3'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'col-1-2',
                            field: 'col2',
                            children: [
                                {
                                    label: 'col-1-2-1',
                                    field: 'col1',
                                },
                                {
                                    label: 'col-1-2-2',
                                    field: 'col2',
                                }
                            ]
                        }
                    ]
                },
                { label: 'col-2', field: 'col9' }
            ]
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
                        width: 500,
                        height: 500,
                        columns: head,
                        data: list
                    })
                ]
            })
        }).mount(this.$refs.canvas)
    },
}
</script>