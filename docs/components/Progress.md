## Progress

### linear progress bar

> Setting `percentage` to the progress element is the progress value of the progress bar element, ranging from 0-100.

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

### Percent internal display

> Set the `textInside` attribute to the progress bar element to move the displayed text inside the progress bar.

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

### Custom color

> Set the color attribute of the progress bar element to customize the color display of the progress bar at different progress values.

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

### Circular progress bar

> Set `type`="`circle`" to the progress bar element to turn it into a circular progress bar

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

### Dashboard progress bar

> Set `type`="`dashboard`" to the progress bar element to turn it into a circular progress bar

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

### Attributes

| Attribute     | Description                                         | Type          | Accepted values                   | Default |
| ------------- | --------------------------------------------------- | ------------- | --------------------------------- | ------- |
| percentage    | progress bar value                                  | number        | 0-100                             | 0       |
| type          | Progress bar type                                   | string        | line\| circle \| dashboard     | line    |
| strokeWidth   | progress bar line width                             | number        |                                   | 6       |
| textInside    | The progress bar shows whether the text is embedded | boolean       |                                   | false   |
| status        | progress bar status                                 | string        | success\| exception \| warning |         |
| color         | Customize progress bar color                        | string\|Array |                                   |         |
| width         | progress bar width                                  | number        |                                   | 126     |
| showText      | Whether to display progress bar text                | boolean       |                                   | true    |
| strokeLinecap | Progress bar line end type                          | string        | butt\| round \| square         | round   |
