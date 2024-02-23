## .canvas file

Benefiting from Evan You's vue framework, many front-end developers who have experienced from native js -> jquery -> angularjs, extjs, backbone... -> vue, react, angular... have greatly improved. Development efficiency, the Vue framework has captured the hearts of many front-end people with its simple API and excellent performance. The author is one of them. The most important thing is that this is the front-end framework implemented by Chinese people (like it!!!).

> If you have previous experience in using front-end frameworks, then writing .canvas will have zero learning burden for you. In order to consider front-end novices, the author will still explain the file structure of .canvas.

The content of the .canvas file should mainly include two parts: view (canvas node) and logic (script node).

### <canvas\>

> The canvas node is mainly used to describe the drawing content, and its function is similar to `<html>`. The root node canvas itself receives two attributes, width and height, which are used as the width and height attributes of the subsequent canvas.

Inside the canvas node, you can use built-in element nodes or custom element nodes to draw.

for example:

```canvas
<canvas width="300" height="50">
    <tag attr1="attr1Val" :attr2="attr2Val" @eventName="handleEvent"></tag>
</canvas>
```

`tag`: element name

`attr1`: static property name

`attr1Val`: static property value

`attr2`: dynamic property name

`attr2Val`: dynamic attribute value

`eventName`: event name bound to the element

`handleEvent`: events bound to elements

### <script\>

> The script node is mainly used to process business logic, such as dynamic binding of values, event acceptance and processing, etc.
>
> Note: The script supports life cycle hook function callbacks for canvas drawing. Currently, only created and mounted hooks are supported.

for example:

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
