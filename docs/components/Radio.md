## Radio

### Basic radio

<ClientOnly>
<vp-radio></vp-radio>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <radio x="10" y="10">默认单选框</radio>
    <radio x="120" y="10" :checked="true">选中状态</radio>
</canvas>
```

### Disabled

> Pass the `disabled` attribute to the radio element to control whether it is disabled

<ClientOnly>
<vp-radio-disabled></vp-radio-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <radio x="10" y="10" :disabled="true">单选框禁用</radio>
</canvas>
```

### Radio group

> Multiple radio buttons can be grouped together to control selection using the built-in radio button group element `radio-group`

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

### Attributes

#### radio

| Attribute | Description                          | Type    | Accepted values | Default |
| --------- | ------------------------------------ | ------- | --------------- | ------- |
| text      | radio button description text        | string  |                 |         |
| fontSize  | radio button text size               | number  |                 |         |
| checked   | Is the radio button checked?         | boolean |                 | false   |
| disabled  | Whether the radio button is disabled | boolean |                 | false   |
| value     | radio button value                   | any     |                 |         |

| Attribute | Description       | Type  | Accepted values | Default |
| --------- | ----------------- | ----- | --------------- | ------- |
| value     | radio-group value | Array |                 | []      |

### Events

#### radio

| Event Name | Description                                | Parameters |
| ---------- | ------------------------------------------ | ---------- |
| change     | Event triggered when an option is selected | (value)    |

#### radio-group

| Event Name | Description                                               | Parameters |
| ---------- | --------------------------------------------------------- | ---------- |
| change     | Event triggered when the value of the radio-group changes | (value)    |
