## Button

### Basic button

<ClientOnly>
<vp-button></vp-button>
</ClientOnly>

### Usage

> Create a `.canvas` file and write the file content

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

### Disabled

> Pass the `disabled` attribute to the button element to control whether it is available

<ClientOnly>
<vp-button-disabled></vp-button-disabled>
</ClientOnly>

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

### text button

> Buttons without borders and backgrounds

<ClientOnly>
<vp-text-button></vp-text-button>
</ClientOnly>

```
<canvas width="800" height="50">
    <button x="10" y="10" type="text">文字按钮</button>
    <button x="80" y="10" type="text" disabled>文字按钮</button>
</canvas>
```

### Event

> Support click events

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

### Attributes

| Attribute | Description                                | Type             | Accepted values                                                              | Default                                                                  |
| :-------- | ------------------------------------------ | ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| text      | button text                                | string           |                                                                              | 按钮                                                                     |
| color     | Button text color                          | string           |                                                                              | The font fill color set by default for the canvas drawing context object |
| fontSize  | Button text fontsize                       | string\| number |                                                                              | The font size set by default for the canvas drawing context object       |
| type      | Button type                                | string           | default\| primary \| success \| info \| warning \| danger \| text | default                                                                  |
| plain     | Whether the button is plain                | boolean          |                                                                              | false                                                                    |
| round     | Whether to round the corners of the button | boolean          |                                                                              | false                                                                    |
| disabled  | Whether the button is disabled             | boolean          |                                                                              | false                                                                    |

### Events

| Event Name | Description                     | Parameters |
| ---------- | ------------------------------- | ---------- |
| click      | Event triggered by button click |            |
