## Element

Element元素是所有内置绘制元素的基类，所有自定义的绘图元素应该也要继承它，因为该类定义了绘图时所需的基本属性，最重要的，继承它即可订阅canvas-like-html内部的鼠标事件。

### 属性

| 属性名称            | 说明                                            | 默认值    |
| ------------------- | ----------------------------------------------- | --------- |
| ctx                 | canvas渲染上下文                                | null      |
| x                   | 横坐标                                          | null      |
| y                   | 纵坐标                                          | null      |
| width               | 元素宽度                                        | null      |
| height              | 元素高度                                        | null      |
| eventObserver       | 事件监听对象                                    | null      |
| mouseEntered        | 鼠标是否进入元素                                | false     |
| globalProps         | 全局属性                                        | null      |
| root                | 默认CanvasLikeHtml对象                          | null      |
| parentElement       | 父级元素                                        | null      |
| cursor              | 鼠标样式                                        | 'default' |
| watchedProps        | 内部属性，非继承自Element的元素对象需实现该属性 | {}        |
| watchedEvents       | 内部属性，非继承自Element的元素对象需实现该属性 | {}        |
| \$\$key             | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$template        | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$for             | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$for_key         | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$for_exp         | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$props           | 内部属性，非继承自Element的元素对象需实现该属性 | {}        |
| \$\$render_children | 内部属性，非继承自Element的元素对象需实现该属性 | null      |
| \$\$scope_chain     | 内部属性，非继承自Element的元素对象需实现该属性 | []        |

### 方法

| 方法名称                   | 说明                         |
| -------------------------- | ---------------------------- |
| initProps                  | 将元素配置属性与自身属性合并 |
| registerListenerFromOnProp | 注册元素监听事件             |
| triggerEvent               | 触发监听                     |
