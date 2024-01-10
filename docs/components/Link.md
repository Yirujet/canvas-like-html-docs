## Link

### 基础链接

<ClientOnly>
<vp-link></vp-link>
</ClientOnly>

### 使用

> 创建.canvas文件，编写文件内容

```canvas
<canvas width="800" height="50">
    <link x="10" y="10">默认链接</link>
    <link x="80" y="10" type="primary">主要链接</link>
    <link x="150" y="10" type="success">成功链接</link>
    <link x="220" y="10" type="info">信息链接</link>
    <link x="290" y="10" type="warning">警告链接</link>
    <link x="360" y="10" type="danger">危险链接</link>
</canvas>

```

### 禁用状态

<ClientOnly>
<vp-link-disabled></vp-link-disabled>
</ClientOnly>

> 给链接元素传入disabled属性来控制其是否可用

```
<canvas width="800" height="50">
    <link x="10" y="10" disabled>默认按钮</link>
    <link x="80" y="10" type="primary" disabled>主要按钮</link>
    <link x="150" y="10" type="success" disabled>成功按钮</link>
    <link x="220" y="10" type="info" disabled>信息按钮</link>
    <link x="290" y="10" type="warning" disabled>警告按钮</link>
    <link x="360" y="10" type="danger" disabled>危险按钮</link>
</canvas>
```

### 下划线

> 给链接元素传入underline属性来控制其是否显示下划线

<ClientOnly>
<vp-underline-link></vp-underline-link>
</ClientOnly>

```
<canvas width="800" height="50">
    <link x="10" y="10" underline>有下划线</link>
    <link x="80" y="10" type="text" :underline="false">无下划线</link>
</canvas>
```

### 事件

> 支持监听click事件

<ClientOnly>
<vp-link-event></vp-link-event>
</ClientOnly>

```
<canvas width="800" height="50">
    <link x="10" y="10" type="primary" @click="handleClick">click链接</link>
</canvas>

<script>
{
    methods: {
	handleClick() {
	    console.log('link -> click event triggered')
	}
    }
}
</script>
```

### 组件参数

| 参数     | 说明           | 类型             | 可选值                                                                       | 默认值                                 |
| :------- | -------------- | ---------------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| text     | 链接文字       | string           |                                                                              | 按钮                                   |
| fontSize | 链接文字大小   | string\| number |                                                                              | canvas绘制上下文对象默认设置的字体大小 |
| type     | 类型           | string           | default\| primary \| success \| info \| warning \| danger \| text | default                                |
| href     | 原生 href 属性 | string           |                                                                              |                                        |
| disabled | 是否禁用       | boolean          |                                                                              | false                                  |

### 组件事件

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| click    | 点击链接触发的事件 |          |
