## Dropdown

### Basic dropdown

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

### Trigger mode

> Set the triggering method of the menu by passing in `trigger`

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

### Menu hiding method

> Pass in `hideOnClick` to set how the menu is hidden after the menu item is clicked.

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

### Attributes

| Attribute   | Description                                          | Type             | Accepted values | Default                                                            |
| ----------- | ---------------------------------------------------- | ---------------- | --------------- | ------------------------------------------------------------------ |
| text        | description text                                     | string           |                 | 下拉菜单                                                           |
| fontSize    | description text fontsize                            | string\| number |                 | The font size set by default for the canvas drawing context object |
| trigger     | Trigger mode                                         | string           | hover\| click  | hover                                                              |
| list        | Menu list                                            | array            |                 | []                                                                 |
| labelName   | The key corresponding to the menu item name          | string           |                 | name                                                               |
| valueName   | The key corresponding to the menu item value         | string           |                 | value                                                              |
| hideOnClick | Whether to hide the menu after selecting a menu item | boolean          |                 | true                                                               |

### Events

| Event Name | Description                               | Parameters |
| ---------- | ----------------------------------------- | ---------- |
| command    | Event triggered after selecting menu item | (value)    |
