## Grid

### background

As we all know, canvas is drawn at the pixel level. Unlike HTML, it does not automatically display its internal block-level elements in one line, and displays the in-line elements in sequence on the same line. If you want to achieve block-level and inline effects similar to HTML on canvas, developers need to manually calculate the horizontal and vertical coordinates of drawing graphics, which is really troublesome. However, this bad situation will be completely solved in canvas-like-html, that is, using the library's built-in row and col elements to implement grid layout in canvas.

### Overview

The grid layout will not be described in detail here. Here is a brief description of the working principle of implementing grid in canvas-like-html:

* Create a row element through the `row` element
* Add the `col` element inside the `row` element to achieve multi-column arrangement
* Each column element `col` can pass in the `span` attribute to control the width it occupies in the row element.
* The span of the column element col only accepts values from `1~24`, that is, a row element can be divided into up to 24 columns.
* All elements in the column element col (except row, which occupies an exclusive row) will be arranged one by one like the inline elements in HTML. If they exceed the row, they will be arranged in a row.

### Basic grid usage

<ClientOnly>
<vp-grid></vp-grid>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<row>
		<col :span="6"><span>col-6</span></col>
		<col :span="6"><span>col-6</span></col>
		<col :span="6"><span>col-6</span></col>
		<col :span="6"><span>col-6</span></col>
	</row>
</canvas>
```

### vertical alignment

> By setting the `align` attribute of the row element, all column elements under the row element can be vertically aligned.

<ClientOnly>
<vp-grid-align></vp-grid-align>
</ClientOnly>

```canvas
<canvas width="800" height="200">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<span>align: top</span>
				</col>
			</row>
			<row align="top">
				<col :span="12"><button>col-12</button></col>
				<col :span="12"><span>col-12</span></col>
			</row>
			<row>
				<col :span="24">
					<span>align: middle</span>
				</col>
			</row>
			<row align="middle">
				<col :span="12"><button>col-12</button></col>
				<col :span="12"><span>col-12</span></col>
			</row>
			<row>
				<col :span="24">
					<span>align: bottom</span>
				</col>
			</row>
			<row align="bottom">
				<col :span="12"><button>col-12</button></col>
				<col :span="12"><button>col-12</button></col>
			</row>
		</col>
	</row>
</canvas>
```

### horizontal arrangement

> By setting the `justify` attribute of the row element, all column elements under the row element can be arranged horizontally.

<ClientOnly>
<vp-grid-justify></vp-grid-justify>
</ClientOnly>

```canvas
<canvas width="800" height="350">
	<row>
		<col :span="24">
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
			<row>
				<col :span="24">
					<span>justify: start</span>
				</col>
			</row>
			<row justify="start">
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
				<col :span="2"><button type="primary">col-2</button></col>
			</row>
		</col>
	</row>
</canvas>
```

### offset

> Column offset can be achieved by setting the `offset` of the column element.

<ClientOnly>
<vp-grid-offset></vp-grid-offset>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<row>
		<col :span="24">
			<row>
				<col :span="6" :offset="6"><span>col-6 col-offset-6</span></col>
				<col :span="6" :offset="6"><span>col-6 col-offset-6</span></col>
			</row>
			<row>
				<col :span="12" :offset="6"><span>col-12 col-offset-6</span></col>
			</row>
		</col>
	</row>
</canvas>

```

### pull、push

> By setting the `pull` and `push` of the col element, you can control the position of the column left and right.
>
> Note: `pull` and `push` only change the position of the current column element and will not affect subsequent columns. The effect is similar to the position: absolute element setting left and right in CSS.

<ClientOnly>
<vp-grid-pull-push></vp-grid-pull-push>
</ClientOnly>

```canvas
<canvas width="800" height="100">
	<row>
		<col :span="24">
			<row>
				<col :span="6" :push="2"><span>col-6 push-2</span></col>
				<col :span="6" :push="3"><span>col-6 push-3</span></col>
			</row>
			<row justify="end">
				<col :span="6" :pull="2"><span>col-6 pull-2</span></col>
				<col :span="6" :pull="2"><span>col-6 pull-2</span></col>
			</row>
			<row justify="center">
				<col :span="18" :push="6"><span>col-18 push-6</span></col>
				<col :span="6" :pull="4"><span>col-6 pull-4</span></col>
			</row>
		</col>
	</row>
</canvas>
```

### gutter

> By setting the `gutter` of the `row` element, you can set a gap for its direct child `col` elements.
>
> Note: The moving distance is in pixels

<ClientOnly>
<vp-grid-gutter></vp-grid-gutter>
</ClientOnly>

```canvas
<canvas width="800" height="50">
	<row :gutter="5" justify="center">
		<col :span="2">
			<tag type="success">col-2</tag>
		</col>
		<col :span="2">
			<tag type="success">col-2</tag>
		</col>
		<col :span="2">
			<tag type="success">col-2</tag>
		</col>
		<col :span="2">
			<tag type="success">col-2</tag>
		</col>
	</row>
</canvas>

```

### Attributes

#### row

| Attribute | Description                                 | Type   | Accepted values                                                                 | Default |
| --------- | ------------------------------------------- | ------ | ------------------------------------------------------------------------------- | ------- |
| align     | vertical alignment                          | string | top\| middle \| bottom                                                       | top     |
| justify   | horizontal arrangement                      | string | start\| center \| end \| space-around \| space-between \| space-evenly | start   |
| gutter    | spacing                                     | number |                                                                                 | 0       |
| type      | Layout method, currently only supports flex | string | flex                                                                            | flex    |

#### col

| Attribute | Description                                             | Type   | Accepted values | Default |
| --------- | ------------------------------------------------------- | ------ | --------------- | ------- |
| span      | The number of cells occupied by the grid                | number | 1-24            | 24      |
| offset    | The number of spacer cells on the left side of the grid | number |                 | 0       |
| push      | The number of cells the grid moves to the left          | number |                 | 0       |
| pull      | The number of cells the grid moves to the right         | number |                 | 0       |
