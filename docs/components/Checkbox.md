## Checkbox

### Basic checkbox

<ClientOnly>
<vp-checkbox></vp-checkbox>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10">默认复选框</checkbox>
    <checkbox x="120" y="10" :checked="true">选中状态</checkbox>
</canvas>
```

### Disabled

> Pass the `disabled` attribute to the checkbox element to control whether it is disabled

<ClientOnly>
<vp-checkbox-disabled></vp-checkbox-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10" :disabled="true">复选框禁用</checkbox>
</canvas>
```

### indeterminate

> The `indeterminate` attribute is used to indicate the uncertain state of the checkbox, generally used for the all-select effect.

<ClientOnly>
<vp-checkbox-indeterminate></vp-checkbox-indeterminate>
</ClientOnly>

```canvas
<canvas width="800" height="50">
    <checkbox x="10" y="10" :indeterminate="true">indeterminate</checkbox>
</canvas>
```

### Checkbox group

> Use the built-in checkbox group element `checkbox-group` to group multiple checkboxes together to control checking.

<ClientOnly>
<vp-checkbox-group></vp-checkbox-group>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<checkbox-group x="10" y="10" @change="handleChange">
		<checkbox value="A">复选框 A</checkbox>
		<checkbox value="B">复选框 B</checkbox>
		<checkbox value="C">复选框 C</checkbox>
	</checkbox-group>
</canvas>
<script>
export default {
	methods: {
		handleChange(value) {
			console.log(`勾选了${value}`)
		}
	}
}
</script>
```

### Attributes

#### checkbox

| Attribute     | Description                      | Type    | Accepted values | Default                                                            |
| ------------- | -------------------------------- | ------- | --------------- | ------------------------------------------------------------------ |
| text          | Checkbox description text        | string  |                 |                                                                    |
| fontSize      | Checkbox text fontsize           | number  |                 | The font size set by default for the canvas drawing context object |
| checked       | Is the checkbox checked?         | boolean |                 | false                                                              |
| disabled      | Whether the checkbox is disabled | boolean |                 | false                                                              |
| indeterminate | Set indeterminate state          | boolean |                 | false                                                              |
| value         | checkbox value                   | any     |                 |                                                                    |

#### checkbox-group

| Attribute | Description          | Type  | Accepted values | Default |
| --------- | -------------------- | ----- | --------------- | ------- |
| value     | Checkbox group value | Array |                 | []      |

### Events

#### checkbox

| Event Name | Description                                | Parameters       |
| ---------- | ------------------------------------------ | ---------------- |
| change     | Event triggered when a checkbox is checked | (value, checked) |

#### checkbox-group

| Event Name | Description                                                | Parameters |
| ---------- | ---------------------------------------------------------- | ---------- |
| change     | Event triggered when the value of a checkbox group changes | (value)    |
