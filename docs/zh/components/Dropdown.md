## Dropdown

### 基础用法

<ClientOnly>
<vp-dropdown></vp-dropdown>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <dropdown x="10" y="10" :list="list">下拉菜单</dropdown>
</canvas>
<script>
export default {
	data: {
		list: [
			{name: '选项1', value: 'option-1'},
			{name: '选项2', value: 'option-2'},
			{name: '选项3', value: 'option-3'}
		]
	}
}
</script>
```

### 触发方式

> 通过传入 `trigger`来设置菜单的触发方式

<ClientOnly>
<vp-dropdown-trigger></vp-dropdown-trigger>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    	<dropdown x="10" y="10" trigger="hover" :list="list">下拉菜单</dropdown>
	<dropdown x="100" y="10" trigger="click" :list="list">点击触发</dropdown>
</canvas>
<script>
export default {
	data: {
		list: [
			{name: '选项1', value: 'option-1'},
			{name: '选项2', value: 'option-2'},
			{name: '选项3', value: 'option-3'}
		]
	}
}
</script>
```

### 菜单隐藏方式

> 通过传入 `hideOnClick`来设置菜单项点击后菜单的隐藏方式

<ClientOnly>
<vp-dropdown-hide-on-click></vp-dropdown-hide-on-click>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <dropdown x="10" y="10" :list="list" :hideOnClick="false">下拉菜单</dropdown>
</canvas>
<script>
export default {
	data: {
		list: [
			{name: '选项1', value: 'option-1'},
			{name: '选项2', value: 'option-2'},
			{name: '选项3', value: 'option-3'}
		]
	}
}
</script>

```

### 元素参数

| 参数        | 说明                     | 类型             | 可选值         | 默认值                                 |
| ----------- | ------------------------ | ---------------- | -------------- | -------------------------------------- |
| text        | 菜单说明文字             | string           |                | 下拉菜单                               |
| fontSize    | 菜单说明文字大小         | string\| number |                | canvas绘制上下文对象默认设置的字体大小 |
| trigger     | 触发方式                 | string           | hover\| click | hover                                  |
| list        | 菜单列表                 | array            |                | []                                     |
| labelName   | 菜单项name对应的key      | string           |                | name                                   |
| valueName   | 菜单项value对应的key     | string           |                | value                                  |
| hideOnClick | 选择菜单项后是否隐藏菜单 | boolean          |                | true                                   |

### 元素事件

| 事件名称 | 说明                   | 回调参数        |
| -------- | ---------------------- | --------------- |
| command  | 选择菜单项后触发的事件 | (value) => void |
