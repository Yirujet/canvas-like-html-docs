## Table

### 基础表格

> 给 `table`元素传入 `columns`、`data`属性即可在画布自动绘制出相应表格

<ClientOnly>
<vp-table></vp-table>
</ClientOnly>

```canvas
<canvas width="800" height="300">
	<table width="500" height="250" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
  		colLen: 10,
            	rowLen: 4,
		head: [],
		list: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
            		field: `col${i}`,
            		label: `col${i + 1}`,
        	}))
        	let list = []
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>
```

### 固定列

> 给列传入 `fixed`属性即可将该列固定

<ClientOnly>
<vp-table-fixed></vp-table-fixed>
</ClientOnly>

```canvas
<canvas width="800" height="500">
	<table width="500" height="250" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
		colLen: 10,
            	rowLen: 4,
		head: [],
		list: [],
		fixedLeftColIndex: [6],
		fixedRightColIndex: [8]
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
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
        	let list = []
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>

```

### 选择列

> 给列传入值为 `checkbox`的 `type`属性即将该列变为一个选择列

<ClientOnly>
<vp-table-selection></vp-table-selection>
</ClientOnly>

```canvas
<canvas width="800" height="300">
	<table width="500" height="250" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
		colLen: 10,
            	rowLen: 4,
		head: [],
		list: [],
		fixedLeftColIndex: [],
		fixedRightColIndex: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
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
			type: 'checkbox',
			fixed: 'left',
			width: 35
		})
        	let list = []
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>
```

### 树形表头

> 给列传入 `children`属性即可为该列添加子列

<ClientOnly>
<vp-table-children></vp-table-children>
</ClientOnly>

```canvas
<canvas width="800" height="500">
	<table width="500" height="500" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
		colLen: 10,
            	rowLen: 4,
		head: [],
		list: [],
		fixedLeftColIndex: [],
		fixedRightColIndex: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
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
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>

```

### 自定义表头列

> 设置列的 `slot`属性中的 `head`可实现自定义表头列的功能

<ClientOnly>
<vp-table-slot-head></vp-table-slot-head>
</ClientOnly>

```canvas
<canvas width="800" height="500">
	<table width="600" height="250" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
		colLen: 10,
            	rowLen: 4,
		head: [],
		list: [],
		fixedLeftColIndex: [],
		fixedRightColIndex: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
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
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>


```

### 自定义内容列

> 设置列的 `slot`属性中的 `body`可实现自定义内容列的功能

<ClientOnly>
<vp-table-slot-body></vp-table-slot-body>
</ClientOnly>

```canvas
<canvas width="800" height="500">
	<table width="800" height="500" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
		colLen: 10,
            	rowLen: 4,
		head: [],
		list: [],
		fixedLeftColIndex: [],
		fixedRightColIndex: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
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
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>



```

### 大数据量渲染

> table元素就是为解决dom中大数据表格渲染卡顿的问题而开发，能够稳定并流畅展示百万级数据

<ClientOnly>
<vp-table-big-data></vp-table-big-data>
</ClientOnly>

```canvas
<canvas width="1200" height="600">
	<table width="1200" height="600" :columns="head" :data="list"></table>
</canvas>
<script>
export default {
	data: {
  		colLen: 1000,
            	rowLen: 10000,
		head: [],
		list: []
	},
	mounted() {
		const head = Array.from({ length: this.colLen.value }).map((e, i) => ({
            		field: `col${i}`,
            		label: `col${i + 1}`,
        	}))
        	let list = []
        	for (let i = 0, l = this.rowLen.value, row = {}; i < l; i++) {
            		row = {}
            		for(let j = 0, k = head.length; j < k; j++) {
                		row.index = i + 1
                		row[`col${j}`] = `row-${i + 1}-col${j + 1}`
            		}
            		list.push(row)
        	}
		this.head.value = head
		this.list.value = list
	}
}
</script>

```

### 元素参数

#### table

| 参数    | 说明       | 类型  | 可选值 | 默认值 |
| ------- | ---------- | ----- | ------ | ------ |
| columns | 表格列配置 | Array |        | []     |
| data    | 表格数据   | Array |        | []     |

#### col

| 参数     | 说明           | 类型         | 可选值        | 默认值 |
| -------- | -------------- | ------------ | ------------- | ------ |
| label    | 表头列显示文字 | string       |               |        |
| field    | 列绑定字段     | string       |               |        |
| width    | 列宽           | number       |               |        |
| fixed    | 固定列         | string       | left\| right |        |
| type     | 列显示类型     | string       | checkbox      |        |
| children | 树形表头列配置 | Array\<col\> |               |        |

### 元素事件

| 事件名称         | 说明                     | 回调参数  |
| ---------------- | ------------------------ | --------- |
| selection-change | 勾选表格数据时触发的事件 | selection |
