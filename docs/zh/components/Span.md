## Span

### 静态文本

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

### 元素参数

| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| text     | 显示文字 | string |        | '文本' |
| color    | 文字颜色 | string |        | '#000' |
| fontSize | 文字大小 | number |        | 12     |
