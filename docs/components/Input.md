## Input

There is no point in implementing form input controls such as input boxes and selectors on canvas, because html is more suitable for this. CanvasLikeHtml also only has a built-in input form element, just to illustrate an implementation idea of form elements on canvas.

### Basic input

<ClientOnly>
<vp-input></vp-input>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10"></input>
</canvas>
```

### Disabled

> Set whether the input box is disabled by passing in the `disabled` attribute

<ClientOnly>
<vp-input-disabled></vp-input-disabled>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10" disabled value="test"></input>
</canvas>
```

### Clearable

> Set whether the value of the input box can be cleared by passing in the `clearable` attribute

<ClientOnly>
<vp-input-clearable></vp-input-clearable>
</ClientOnly>

```canvas
<canvas width="800" height="60">
    <input x="10" y="10" clearable></input>
</canvas>
```

### Attributes

| Attribute   | Description                      | Type    | Accepted values | Default    |
| ----------- | -------------------------------- | ------- | --------------- | ---------- |
| value       | Input value                      | string  |                 |            |
| placeholder | Input placeholder text           | string  |                 | 请输入内容 |
| disabled    | Whether to disable               | boolean |                 | false      |
| clearable   | Whether the value can be cleared | boolean |                 | false      |

### Events

| Event Name | Description                                | Parameters |
| ---------- | ------------------------------------------ | ---------- |
| input      | Triggered when the input box value changes | (value)    |
| clear      | Triggered after clicking clear             |            |
