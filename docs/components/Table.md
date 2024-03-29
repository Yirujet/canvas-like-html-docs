## Table

### Basic table

> Pass in the `columns` and `data` attributes to the `table` element to automatically draw the corresponding table on the canvas.

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

### Fixed

> Pass the `fixed` attribute to the column to fix the column

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

### Selection

> Passing the `type` attribute with the value `checkbox` to the column will turn the column into a selection column

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

### Tree table header

> Pass the `children` attribute to the column to add sub-columns to the column

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

### Custom table header

> Setting the `head` in the `slot` attribute of the column can realize the function of customizing the header column.

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

### Custom table cell

> Setting the `body` in the `slot` attribute of the column can implement the function of customizing the content column

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

### Large data volume rendering

> The table element was developed to solve the problem of stuck rendering of large data tables in DOM, and can display millions of data stably and smoothly.

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

### Attributes

#### table

| Attribute | Description                | Type  | Accepted values | Default |
| --------- | -------------------------- | ----- | --------------- | ------- |
| columns   | table column configuration | Array |                 | []      |
| data      | table data                 | Array |                 | []      |

#### col

| Attribute | Description                            | Type         | Accepted values | Default |
| --------- | -------------------------------------- | ------------ | --------------- | ------- |
| label     | header column display text             | string       |                 |         |
| field     | column bound fields                    | string       |                 |         |
| width     | column width                           | number       |                 |         |
| fixed     | fixed columns                          | string       | left\| right   |         |
| type      | column display type                    | string       | checkbox        |         |
| children  | tree table header column configuration | Array\<col\> |                 |         |

### Events

| Event Name       | Description                                | Parameters |
| ---------------- | ------------------------------------------ | ---------- |
| selection-change | Event triggered when table data is checked | selection  |
