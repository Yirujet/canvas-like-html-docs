## Radio

### 基础用法

<ClientOnly>
<vp-radio></vp-radio>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <radio x="10" y="10">默认单选框</radio>
    <radio x="120" y="10" :checked="true">选中状态</radio>
</canvas>
```

### 禁用状态

> 给radio元素传入 `disabled`属性控制其是否禁用

<ClientOnly>
<vp-radio-disabled></vp-radio-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <radio x="10" y="10" :disabled="true">单选框禁用</radio>
</canvas>
```

### 单选框组

> 使用内置的单选框组元素 `radio-group`可以将多个单选框组合在一起控制选择

<ClientOnly>
<vp-radio-group></vp-radio-group>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<radio-group x="10" y="10" @change="handleChange">
		<radio value="A">选项 A</radio>
		<radio value="B">选项 A</radio>
		<radio value="C">选项 A</radio>
	</radio-group>
</canvas>
<script>
export default {
	methods: {
		handleChange(value) {
			console.log(`选择了${value}`)
		}
	}
}
</script>
```

### 元素参数

#### radio

| 参数     | 说明           | 类型    | 可选值 | 默认值 |
| -------- | -------------- | ------- | ------ | ------ |
| text     | 单选框说明文字 | string  |        |        |
| fontSize | 单选框文字大小 | number  |        |        |
| checked  | 单选框是否勾选 | boolean |        | false  |
| disabled | 单选框是否禁用 | boolean |        | false  |
| value    | 单选框值       | any     |        |        |

| 参数  | 说明       | 类型  | 可选值 | 默认值 |
| ----- | ---------- | ----- | ------ | ------ |
| value | 单选框组值 | Array |        | []     |

### 元素事件

#### radio

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 选择选项时触发的事件 | (value) => void |

#### radio-group

| 事件名称 | 说明                             | 回调参数        |
| -------- | -------------------------------- | --------------- |
| change   | 单选框组的值发生变化时触发的事件 | (value) => void |
