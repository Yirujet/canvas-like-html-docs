## Span

### Basic span

<ClientOnly>
<vp-span></vp-span>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<span x="10" y="10">默认文本</span>
	<span x="80" y="10" color="blue">蓝色文本</span>
	<span x="150" y="10" :fontSize="20">20px文本</span>
	<span x="250" y="10" :fontSize="20">30px文本</span>
	<span x="390" y="10" :fontSize="20">40px文本</span>
</canvas>
```

### Attributes

| Attribute | Description   | Type   | Accepted values | Default |
| --------- | ------------- | ------ | --------------- | ------- |
| text      | show text     | string |                 | '文本'  |
| color     | text color    | string |                 | '#000'  |
| fontSize  | text fontsize | number |                 | 12      |
