## Button

### 基础按钮

<ClientOnly>
<vp-button></vp-button>
</ClientOnly>

### 使用

> 创建.canvas文件，编写文件内容

```canvas
<canvas width="800" height="180">
    <button x="10" y="10">默认按钮</button>
    <button x="130" y="10" type="primary">主要按钮</button>
    <button x="250" y="10" type="success">成功按钮</button>
    <button x="370" y="10" type="info">信息按钮</button>
    <button x="490" y="10" type="warning">警告按钮</button>
    <button x="610" y="10" type="danger">危险按钮</button>
    <button x="10" y="60" plain>朴素按钮</button>
    <button x="130" y="60" type="primary" plain>主要按钮</button>
    <button x="250" y="60" type="success" plain>成功按钮</button>
    <button x="370" y="60" type="info" plain>信息按钮</button>
    <button x="490" y="60" type="warning" plain>警告按钮</button>
    <button x="610" y="60" type="danger" plain>危险按钮</button>
    <button x="10" y="110" round>圆角按钮</button>
    <button x="130" y="110" type="primary" round>主要按钮</button>
    <button x="250" y="110" type="success" round>成功按钮</button>
    <button x="370" y="110" type="info" round>信息按钮</button>
    <button x="490" y="110" type="warning" round>警告按钮</button>
    <button x="610" y="110" type="danger" round>危险按钮</button>
</canvas>

```

### 禁用状态

<ClientOnly>
<vp-button-disabled></vp-button-disabled>
</ClientOnly>

> 给按钮元素传入disabled属性来控制其是否可用

```
<canvas width="800" height="180">
    <button x="10" y="10" disabled>默认按钮</button>
    <button x="130" y="10" type="primary" disabled>主要按钮</button>
    <button x="250" y="10" type="success" disabled>成功按钮</button>
    <button x="370" y="10" type="info" disabled>信息按钮</button>
    <button x="490" y="10" type="warning" disabled>警告按钮</button>
    <button x="610" y="10" type="danger" disabled>危险按钮</button>
    <button x="10" y="60" plain disabled>朴素按钮</button>
    <button x="130" y="60" type="primary" plain disabled>主要按钮</button>
    <button x="250" y="60" type="success" plain disabled>成功按钮</button>
    <button x="370" y="60" type="info" plain disabled>信息按钮</button>
    <button x="490" y="60" type="warning" plain disabled>警告按钮</button>
    <button x="610" y="60" type="danger" plain disabled>危险按钮</button>
    <button x="10" y="110" round disabled>圆角按钮</button>
    <button x="130" y="110" type="primary" round disabled>主要按钮</button>
    <button x="250" y="110" type="success" round disabled>成功按钮</button>
    <button x="370" y="110" type="info" round disabled>信息按钮</button>
    <button x="490" y="110" type="warning" round disabled>警告按钮</button>
    <button x="610" y="110" type="danger" round disabled>危险按钮</button>
</canvas>
```

### 文字按钮

> 没有边框跟背景的按钮

<ClientOnly>
<vp-text-button></vp-text-button>
</ClientOnly>

```
<canvas width="800" height="50">
    <button x="10" y="10" type="text">文字按钮</button>
    <button x="80" y="10" type="text" disabled>文字按钮</button>
</canvas>
```

### 事件

> 支持监听click事件

<ClientOnly>
<vp-button-event></vp-button-event>
</ClientOnly>

```
<canvas width="800" height="60">
    <button x="10" y="10" type="primary" @click="handleClick">click按钮</button>
</canvas>

<script>
{
    methods: {
	handleClick() {
	    console.log('button -> click event triggered')
	}
    }
}
</script>
```

### 元素参数

| 参数     | 说明         | 类型             | 可选值                                                                         | 默认值                                     |
| :------- | ------------ | ---------------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| text     | 按钮文字     | string           |                                                                                | 按钮                                       |
| color    | 按钮文字颜色 | string           |                                                                                | canvas绘制上下文对象默认设置的字体填充颜色 |
| fontSize | 按钮文字大小 | string\| number |                                                                                | canvas绘制上下文对象默认设置的字体大小     |
| type     | 类型         | string           | default \| primary \| success \| info \| warning \| danger \| text | default                                    |
| plain    | 是否朴素按钮 | boolean          |                                                                                | false                                      |
| round    | 是否圆角按钮 | boolean          |                                                                                | false                                      |
| disabled | 是否禁用     | boolean          |                                                                                | false                                      |

### 元素事件

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| click    | 点击按钮触发的事件 |          |
