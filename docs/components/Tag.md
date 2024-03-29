## Tag

### Basic tag

> Use the `type` attribute to control the type of tag

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

### Closeable tag

> Add the `closable` attribute to the label to make it a closeable tag

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

### Event

> Support click events

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

### Attributes

| Attribute | Description                        | Type    | Accepted values                                       | Default |
| :-------- | ---------------------------------- | ------- | ----------------------------------------------------- | ------- |
| text      | tag text                           | string  |                                                       | 按钮    |
| type      | tag type                           | string  | default\| success \| info \| warning \| danger | default |
| closable  | Whether to display the delete icon | boolean |                                                       | false   |

### Events

| Event Name | Description                                     | Parameters |
| ---------- | ----------------------------------------------- | ---------- |
| change     | Event triggered by clicking on tag              |            |
| close      | Event triggered by clicking the tag delete icon |            |
