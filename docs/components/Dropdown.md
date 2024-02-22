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
