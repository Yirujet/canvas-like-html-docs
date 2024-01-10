## 快速上手

本节将介绍如何在项目中使用canvas-like-html。

### 引入canvas-like-html

> npm

```js
import CanvasLikeHtml from 'canvas-like-html'

import testCanvas from './test.canvas'

document.body.onload = () => {
    new CanvasLikeHtml({
        render: h => h(testCanvas)
    }).mount(document.getElementById('canvas'))
}
```

> cdn
