## Input

在canvas上实现输入框、选择器等表单输入类控件本身没有任何意义，因为html更适合做这件事。CanvasLikeHtml也仅仅内置了input一个表单类元素，仅仅是为了说明表单类元素在canvas上的一种实现思路。

### 基础用法

<ClientOnly>
<vp-input></vp-input>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10"></input>
</canvas>
```

### 禁用

> 通过传入 `disabled`属性来设置输入框是否禁用

<ClientOnly>
<vp-input-disabled></vp-input-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10" disabled value="test"></input>
</canvas>
```

### 可清空

> 通过传入 `clearable`属性来设置输入框的值是否可清空

<ClientOnly>
<vp-input-clearable></vp-input-clearable>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10" clearable></input>
</canvas>
```

### 元素参数

| 参数        | 说明           | 类型    | 可选值 | 默认值     |
| ----------- | -------------- | ------- | ------ | ---------- |
| value       | 输入框值       | string  |        |            |
| placeholder | 输入框占位文本 | string  |        | 请输入内容 |
| disabled    | 是否禁用       | boolean |        | false      |
| clearable   | 是否可清空值   | boolean |        | false      |

### 元素事件

| 事件名称 | 说明               | 回调参数        |
| -------- | ------------------ | --------------- |
| input    | 输入框值改变时触发 | (value) => void |
| clear    | 点击清空后触发     | () => void      |
