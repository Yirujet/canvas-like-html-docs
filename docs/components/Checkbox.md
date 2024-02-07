## Checkbox

### 基础用法

<ClientOnly>
<vp-checkbox></vp-checkbox>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10">默认复选框</checkbox>
    <checkbox x="120" y="10" :checked="true">选中状态</checkbox>
</canvas>
```

### 禁用状态

> 给checkbox元素传入`disabled`属性控制其是否禁用

<ClientOnly>
<vp-checkbox-disabled></vp-checkbox-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10" :disabled="true">复选框禁用</checkbox>
</canvas>
```

### indeterminate

> `indeterminate`属性用于表示checkbox的不确定状态，一般用于全选效果

<ClientOnly>
<vp-checkbox-indeterminate></vp-checkbox-indeterminate>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10" :indeterminate="true">indeterminate</checkbox>
</canvas>
```

### 复现框组

> 使用内置的复选框组元素 `checkbox-group`可以将多个复选框组合在一起控制勾选

<ClientOnly>
<vp-checkbox-group></vp-checkbox-group>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<checkbox-group x="10" y="10" @change="handleChange">
		<checkbox value="A">复选框 A</checkbox>
		<checkbox value="B">复选框 B</checkbox>
		<checkbox value="C">复选框 C</checkbox>
	</checkbox-group>
</canvas>
<script>
export default {
	methods: {
		handleChange(value) {
			console.log(`勾选了${value}`)
		}
	}
}
</script>
```

### 元素参数

#### checkbox

| 参数          | 说明                    | 类型    | 可选值 | 默认值 |
| ------------- | ----------------------- | ------- | ------ | ------ |
| text          | 复选框说明文字          | string  |        |        |
| fontSize      | 复选框文字大小          | number  |        |        |
| checked       | 复选框是否勾选          | boolean |        | false  |
| disabled      | 复选框是否禁用          | boolean |        | false  |
| indeterminate | 设置 indeterminate 状态 | boolean |        | false  |
| value         | 复选框值                | any     |        |        |

#### checkbox-group

| 参数  | 说明       | 类型  | 可选值 | 默认值 |
| ----- | ---------- | ----- | ------ | ------ |
| value | 复选框组值 | Array |        | []     |

### 元素事件

#### checkbox

| 事件名称 | 说明                   | 回调参数                 |
| -------- | ---------------------- | ------------------------ |
| change   | 勾选复选框时触发的事件 | (value, checked) => void |

#### checkbox-group

| 事件名称 | 说明                             | 回调参数        |
| -------- | -------------------------------- | --------------- |
| change   | 复选框组的值发生变化时触发的事件 | (value) => void |
