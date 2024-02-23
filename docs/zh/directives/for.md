## *for

* 目前仅支持接收数组(Array)类型的数据作为其循环来源
* 用法：
  基于给定的源数据循环渲染元素节点。
  举个例子：

  ```canvas
  <canvas>
  	<row align="middle" justify="space-evenly">
  		<col :span="colItem.span" *for="(colItem, index) in colList"></col>
  	<row>
  </canvas>
  ```
