## 插值表达式

* 插值表达式以双括号`{{}}`包裹
* 用法：
  将动态数据插入到指定文本
  举个例子：

  ```canvas
  <canvas>
  	<button>{{value}}}</button>
  </canvas>
  <script>
  export default {
  	data: {
  		value: 'test'
  	}
  }
  </script>
  ```
