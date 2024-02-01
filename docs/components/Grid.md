## 栅格

### 背景

众所周知，canvas是像素级绘制，并不像html一样会自动将其内部的块级元素独占一行显示，将行内元素在同一行依次排开显示。如果想在canvas上实现类似于html的块级、行内的效果，需要开发者手动计算绘制图形的横纵坐标，这实在比较麻烦。不过，这种糟糕的情况将在canvas-like-html中被彻底解决，那就是使用库内置的row和col元素，来实现canvas中的栅格布局。

### 概述

栅格布局这边不再赘述，这里简述下在canvas-like-html中实现栅格的工作原理：

* 通过 `row`元素建立一个行元素
* 在 `row`元素内部添加 `col`元素实现多列排布
* 每个列元素 `col`可以传入 `span`属性来控制其在行元素占据的宽度
* 列元素col的span仅接受 `1~24`的值，即一个行元素内最多可以均分成24列

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

垂直对齐方式

> 通过设置row元素的align属性，可垂直对齐row下的所有列元素

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
