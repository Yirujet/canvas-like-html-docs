## Progress

### 线形进度条

> 给progress元素设置`percentage`即为进度条元素的进度值，范围为0-100。

<ClientOnly>
<vp-progress></vp-progress>
</ClientOnly>

```canvas
<canvas width="800" height="80">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<progress :percentage="66"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="success"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="exception"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="warning"></progress>
				</col>
			</row>
		</col>
	</row>
</canvas>
```

### 百分比内显

> 给进度条元素设置 `textInside`属性即将显示文字移至进度条内部

<ClientOnly>
<vp-progress-text-inside></vp-progress-text-inside>
</ClientOnly>

```canvas
<canvas width="800" height="80">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<progress :percentage="66" :textInside="true" strokeWidth="20"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="success" :textInside="true" strokeWidth="20"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="exception" :textInside="true" strokeWidth="20"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="66" status="warning" :textInside="true" strokeWidth="20"></progress>
				</col>
			</row>
		</col>
	</row>
</canvas>

```

### 自定义颜色

> 设置进度条元素的color属性，可以自定义进度条在不同进度值时的颜色显示

<ClientOnly>
<vp-progress-color></vp-progress-color>
</ClientOnly>

```canvas
<canvas width="800" height="80">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<progress :percentage="30" strokeWidth="20" :color="customColors"></progress>
				</col>
			</row>
			<row>
				<col :span="24">
					<progress :percentage="80" strokeWidth="20" :color="customColors"></progress>
				</col>
			</row>
		</col>
	</row>
</canvas>
<script>
export default {
	data: {
		customColors: [
			{color: '#f56c6c', percentage: 20},
			{color: '#5cb87a', percentage: 60},
		]
	}
}
</script>
```

### 环形进度条

> 给进度条元素设置 `type`="`circle`"使其变为一个环形进度条

<ClientOnly>
<vp-progress-circle></vp-progress-circle>
</ClientOnly>

```canvas
<canvas width="800" height="150">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<progress :percentage="66" strokeWidth="10" type="circle"></progress>
				</col>
			</row>
		</col>
	</row>
</canvas>
```

### 仪表盘进度条

> 给进度条元素设置 `type`="`dashboard`"使其变为一个环形进度条

<ClientOnly>
<vp-progress-dashboard></vp-progress-dashboard>
</ClientOnly>

```canvas
<canvas width="800" height="150">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<progress :percentage="66" strokeWidth="10" type="dashboard"></progress>
				</col>
			</row>
		</col>
	</row>
</canvas>
```

### 元素参数

| 参数          | 说明                   | 类型          | 可选值                            | 默认值 |
| ------------- | ---------------------- | ------------- | --------------------------------- | ------ |
| percentage    | 进度条值               | number        | 0-100                             | 0      |
| type          | 进度条显示类型         | string        | line\| circle \| dashboard     | line   |
| strokeWidth   | 进度条线条宽度         | number        |                                   | 6      |
| textInside    | 进度条显示文字是否内嵌 | boolean       |                                   | false  |
| status        | 进度条状态             | string        | success\| exception \| warning |        |
| color         | 自定义进度条颜色       | string\|Array |                                   |        |
| width         | 进度条宽度             | number        |                                   | 126    |
| showText      | 是否显示进度条文字     | boolean       |                                   | true   |
| strokeLinecap | 进度条线端类型         | string        | butt \| round \| square       | round  |
