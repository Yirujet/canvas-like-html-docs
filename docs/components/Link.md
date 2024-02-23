## Link

### Basic link

<ClientOnly>
<vp-link></vp-link>
</ClientOnly>

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

### Disabled

<ClientOnly>
<vp-link-disabled></vp-link-disabled>
</ClientOnly>

> Pass the disabled attribute to the link element to control whether it is available

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

### Underline

> Pass the underline attribute to the link element to control whether it displays underline

<ClientOnly>
<vp-underline-link></vp-underline-link>
</ClientOnly>

```
<canvas width="800" height="50">
    <link x="10" y="10" underline>有下划线</link>
    <link x="80" y="10" type="text" :underline="false">无下划线</link>
</canvas>
```

### Event

> Support click events

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

### Attributes

| Attribute | Description           | Type             | Accepted values                                                              | Default                                                            |
| :-------- | --------------------- | ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| text      | link text             | string           |                                                                              | 按钮                                                               |
| fontSize  | link text fontsize    | string\| number |                                                                              | The font size set by default for the canvas drawing context object |
| type      | link type             | string           | default\| primary \| success \| info \| warning \| danger \| text | default                                                            |
| href      | Native href attribute | string           |                                                                              |                                                                    |
| disabled  | Whether to disable    | boolean          |                                                                              | false                                                              |

### Events

| Event Name | Description                   | Parameters |
| ---------- | ----------------------------- | ---------- |
| click      | Event triggered by link click |            |
