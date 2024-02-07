## Switch

### 基础用法

<ClientOnly>
<vp-switch></vp-switch>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <switch x="10" y="10"></switch>
</canvas>
```

### 文字描述

> 给switch元素分别设置 `inactiveText`和 `activeText`属性，即可设置开关元素的提示文字

<ClientOnly>
<vp-switch-text></vp-switch-text>
</ClientOnly>

<canvas width="800" height="50">
    <switch x="10" y="10" inactiveText="关闭" activeText="打开"></switch>
</canvas>

### 自定义开关的值

> 给switch元素分别设置 `inactiveValue`和 `activeValue`属性，即可设置开关元素的自定义value

<ClientOnly>
<vp-switch-value></vp-switch-value>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <switch x="10" y="10" inactiveText="关闭" activeText="打开" value="opened" inactiveValue="closed" activeValue="opened" @change="handleChange"></switch>
</canvas>
<script>
export default {
	methods: {
		handleChange(val) {
			console.log(`current value is: ${val}`)
		}
	}
}
</script>
```

### 禁用状态

> 给switch元素传入 `disabled`属性控制其是否禁用

<ClientOnly>
<vp-switch-disabled></vp-switch-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<switch x="10" y="10" disabled></switch>
	<switch x="120" y="10" :value="true" disabled></switch>
</canvas>
```

### 元素参数

| 参数          | 说明             | 类型                          | 可选值 | 默认值    |
| ------------- | ---------------- | ----------------------------- | ------ | --------- |
| value         | 开关值           | string\| number \| boolean |        |           |
| disabled      | 是否禁用         | boolean                       |        | false     |
| inactiveText  | 关闭时的文字提示 | string                        |        |           |
| activeText    | 开启时的文字提示 | string                        |        |           |
| inactiveValue | 关闭时的开关值   | string\| number \| boolean |        | false     |
| activeValue   | 开启时的开关值   | string\| number \| boolean |        | true      |
| inactiveColor | 关闭时的开关颜色 | string                        |        | '#C0CCDA' |
| activeColor   | 开启时的开关颜色 | string                        |        | '#409EFF' |

### 元素事件

| 事件名称 | 说明                         | 回调参数        |
| -------- | ---------------------------- | --------------- |
| change   | 开关的值发生变化时触发的事件 | (value) => void |
