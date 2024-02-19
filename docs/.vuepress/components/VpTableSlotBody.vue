<template>
    <canvas ref="canvas" width="800" height="500"></canvas>
</template>

<script>

export default {
    name: 'vp-table-slot-body',
    data() {
        return {
            colLen: 10,
            rowLen: 10,
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
            field: 'operation',
            label: '操作',
            fixed: 'right',
            width: 250,
            slot: {
                head: (h, col) => {
                    return h('span', {
                        text: `${col.label}`
                    })
                },
                body: (h, scope) => {
                    return [
                        h('button', {
                            // type: 'success',
                            type: 'text',
                            text: '查看',
                            on: {
                                click() {
                                    alert(`查看第${scope.$index + 1}行`)
                                }
                            }
                        }),
                        h('link', {
                            type: 'primary',
                            text: '编辑',
                            on: {
                                click() {
                                    alert(`编辑第${scope.$index + 1}行`)
                                }
                            }
                        }),
                        h('link', {
                            type: 'danger',
                            text: '删除',
                            disabled: true,
                            on: {
                                click() {
                                    alert(`删除第${scope.$index + 1}行`)
                                }
                            }
                        }),
                        h('dropdown', {
                            text: '更多',
                            trigger: 'click',
                            list: [
                                { name: `btn${scope.$index + 1}`, value: `btn${scope.$index + 1}` },
                            ],
                            on: {
                                command: (val) => {
                                    alert(`点击了第${scope.$index + 1}行-${val}`)
                                }
                            }
                        })
                    ]
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
                        width: 800,
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