## interpolation expression

* Interpolation expressions are wrapped in double brackets `{{}}`
* Usage：
  Insert dynamic data into specified text
  for example:

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
