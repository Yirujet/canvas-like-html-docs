## Tag

### 基础用法

> 用`type`属性来控制标签的类型

<ClientOnly>
<vp-tag></vp-tag>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <tag x="10" y="10">默认标签</tag>
    <tag x="120" y="10" type="success">success标签</tag>
    <tag x="250" y="10" type="info">info标签</tag>
    <tag x="360" y="10" type="warning">warning标签</tag>
    <tag x="490" y="10" type="danger">danger标签</tag>
</canvas>
```

### 可移除标签

> 给标签添加 `closable`属性使其变为可关闭标签

<ClientOnly>
<vp-tag-closable></vp-tag-closable>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <tag x="10" y="10" closable>默认标签</tag>
    <tag x="100" y="10" type="success" closable>success标签</tag>
    <tag x="210" y="10" type="info" closable>info标签</tag>
    <tag x="300" y="10" type="warning" closable>warning标签</tag>
    <tag x="410" y="10" type="danger" closable>danger标签</tag>
</canvas>
```

### 事件

> 支持监听change和close事件

<ClientOnly>
<vp-tag-event></vp-tag-event>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <tag x="10" y="10" @change="handleClick">默认标签</tag>
    <tag x="100" y="10" type="success" closable @close="handleClose">success标签</tag>
</canvas>
<script>
export default {
	methods: {
		handleClick: () => {
			console.log('tag clicked')
		},
		handleClose() {
			console.log('tag closed')
		}
	}
}
</script>
```


### 元素参数

| 参数     | 说明             | 类型    | 可选值                                                | 默认值  |
| :------- | ---------------- | ------- | ----------------------------------------------------- | ------- |
| text     | 标签文字         | string  |                                                       | 按钮    |
| type     | 类型             | string  | default\| success \| info \| warning \| danger | default |
| closable | 是否显示删除图标 | boolean |                                                       | false   |

### 元素事件

| 事件名称 | 说明                       | 回调参数 |
| -------- | -------------------------- | -------- |
| change   | 点击标签触发的事件         |          |
| close    | 点击标签删除图标触发的事件 |          |
