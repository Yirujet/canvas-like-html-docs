## 栅格

### 背景

众所周知，canvas是像素级绘制，并不像html一样会自动将其内部的块级元素独占一行显示，将行内元素在同一行依次排开显示。如果想在canvas上实现类似于html的块级、行内的效果，需要开发者手动计算绘制图形的横纵坐标，这实在比较麻烦。不过，这种糟糕的情况将在canvas-like-html中被彻底解决，那就是使用库内置的row和col元素，来实现canvas中的栅格布局。

### 概述

栅格布局这边不再赘述，这里简述下在canvas-like-html中实现栅格的工作原理：

* 通过 `row`元素建立一个行元素
* 在 `row`元素内部添加 `col`元素实现多列排布
* 每个列元素 `col`可以传入 `span`属性来控制其在行元素占据的宽度
* 列元素col的span仅接受 `1~24`的值，即一个行元素内最多可以均分成24列
* 列元素col中的所有元素(row除外，它独占一行)会像html中的行内元素一样，依次排放，超出会折行排放

### 基础栅格使用

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

### 垂直对齐方式

> 通过设置row元素的 `align`属性，可对该行元素下的所有列元素进行垂直方向的对齐

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

### 水平排列方式

> 通过设置row元素的 `justify`属性，可对该行元素下的所有列元素进行水平方向的排列

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

### 偏移

> 通过设置列元素的 `offset`可以实现列的偏移

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

### 移动

> 通过设置col元素的 `pull`、`push`，可以控制左右移动列的位置
>
> 注：`pull`跟 `push`仅仅是改变当前列元素的位置，并不会对其后续列产生影响，效果跟css中position: absolute的元素设置left、right相似


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

### 间隔

> 通过设置 `row`元素的 `gutter`，可以给其直接子 `col`元素设置间隔
>
> 注：移动距离以`像素`为单位



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

### 元素参数

#### row

| 参数    | 说明                     | 类型   | 可选值                                                                            | 默认值 |
| ------- | ------------------------ | ------ | --------------------------------------------------------------------------------- | ------ |
| align   | 垂直对齐方式             | string | top\| middle \| bottom                                                         | top    |
| justify | 水平排列方式             | string | start \| center \| end \| space-around \| space-between \| space-evenly | start  |
| gutter  | 间隔                     | number |                                                                                   | 0      |
| type    | 布局方式，目前仅支持flex | string | flex                                                                              | flex   |

#### col

| 参数   | 说明                 | 类型   | 可选值 | 默认值 |
| ------ | -------------------- | ------ | ------ | ------ |
| span   | 栅格占据格子数       | number | 1-24   | 24     |
| offset | 栅格左侧的间隔格子数 | number |        | 0      |
| push   | 栅格向左移动的格子数 | number |        | 0      |
| pull   | 栅格向右移动的格子数 | number |        | 0      |
