## .canvas文件

受益于尤大的vue框架，许许多多经历过从原生js -> jquery -> angularjs、extjs、backbone... -> vue、react、angular...的前端开发者们，极大的提高了开发效率，vue框架以其简洁的api，优秀的性能，俘获了一众前端人的心，笔者也是其中之一，最主要的，这是国人实现的前端框架（赞！！！）。

> 如果你之前有过前端框架使用经验，那么编写.canvas对你来说，学习负担为0，为了考虑前端新手，笔者还是会对.canvas的文件结构做下说明。

.canvas文件内容，应主要包含两部分：视图(canvas节点)和逻辑(script节点)。

### <canvas\>

> canvas节点主要用于描述绘制内容，作用与 `<html>`类似，根节点canvas本身接收width、height两个属性用作后续画布的宽高属性。

在canvas节点内部，可以使用内置的元素节点或自定义的元素节点来进行绘制。

举个例子：

```canvas
<canvas width="300" height="50">
    <tag attr1="attr1Val" :attr2="attr2Val" @eventName="handleEvent"></tag>
</canvas>
```

`tag`: 元素名称

`attr1`: 静态属性名称

`attr1Val`: 静态属性值

`attr2`: 动态属性名称

`attr2Val`: 动态属性值

`eventName`: 元素绑定的事件名称

`handleEvent`: 元素绑定的事件

### <script\>

> script节点主要用于处理业务逻辑，如：动态绑定值、事件接受及处理等。
>
> 注：script中支持canvas绘制的生命周期钩子函数回调，目前仅支持created、mounted两个钩子。

举个例子：

```canvas
<canvas width="300" height="50">
    	<tag attr1="attr1Val" :attr2="attr2Val" @eventName="handleEvent"></tag>
</canvas>
<script>
	export default {
		data: {
			attr2Val: 'hello world'
		},
		methods: {
			handleEvent() {
				console.log('hello world!')
			}
		}
	}
</script>
```
