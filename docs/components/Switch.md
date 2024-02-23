## Switch

### Basic switch

<ClientOnly>
<vp-switch></vp-switch>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <switch x="10" y="10"></switch>
</canvas>
```

### inactiveText、activeText

> Set the `inactiveText` and `activeText` attributes respectively to the switch element to set the prompt text of the switch element.

<ClientOnly>
<vp-switch-text></vp-switch-text>
</ClientOnly>

<canvas width="800" height="50">
    <switch x="10" y="10" inactiveText="关闭" activeText="打开"></switch>
</canvas>

### Custom switch value

> Set the `inactiveValue` and `activeValue` attributes respectively to the switch element to set the custom value of the switch element.

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

### Disabled

> Pass the `disabled` attribute to the switch element to control whether it is disabled

<ClientOnly>
<vp-switch-disabled></vp-switch-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<switch x="10" y="10" disabled></switch>
	<switch x="120" y="10" :value="true" disabled></switch>
</canvas>
```

### Attributes

| Attribute     | Description                 | Type                          | Accepted values | Default   |
| ------------- | --------------------------- | ----------------------------- | --------------- | --------- |
| value         | switch value                | string\| number \| boolean |                 |           |
| disabled      | Whether to disable          | boolean                       |                 | false     |
| inactiveText  | Text prompt when closing    | string                        |                 |           |
| activeText    | Text prompt when opening    | string                        |                 |           |
| inactiveValue | Switch value when closed    | string\| number \| boolean |                 | false     |
| activeValue   | Switch value when turned on | string\| number \| boolean |                 | true      |
| inactiveColor | Switch color when closed    | string                        |                 | '#C0CCDA' |
| activeColor   | Switch color when turned on | string                        |                 | '#409EFF' |

### Events

| Event Name | Description                                          | Parameters |
| ---------- | ---------------------------------------------------- | ---------- |
| change     | Event triggered when the value of the switch changes | (value)    |
