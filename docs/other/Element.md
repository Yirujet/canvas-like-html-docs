## Element

The Element element is the base class of all built-in drawing elements. All custom drawing elements should also inherit it, because this class defines the basic attributes required for drawing. The most important thing is that you can subscribe to canvas-like-html by inheriting it. Internal mouse events.

### Attributes

| Attribute           | Description                                                                                          | Default   |
| ------------------- | ---------------------------------------------------------------------------------------------------- | --------- |
| ctx                 | canvas rendering context                                                                             | null      |
| x                   | x-axis coordinate                                                                                    | null      |
| y                   | y-axis coordinate                                                                                    | null      |
| width               | element width                                                                                        | null      |
| height              | element height                                                                                       | null      |
| eventObserver       | event listening object                                                                               | null      |
| mouseEntered        | whether the mouse enters the element                                                                 | false     |
| globalProps         | global properties                                                                                    | null      |
| root                | default CanvasLikeHtml object                                                                        | null      |
| parentElement       | parent element                                                                                       | null      |
| cursor              | mouse style                                                                                          | 'default' |
| watchedProps        | Internal property. Element objects that do not inherit from Element need to implement this property. | {}        |
| watchedEvents       | Internal property. Element objects that do not inherit from Element need to implement this property. | {}        |
| \$\$key             | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$template        | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$for             | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$for_key         | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$for_exp         | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$props           | Internal property. Element objects that do not inherit from Element need to implement this property. | {}        |
| \$\$render_children | Internal property. Element objects that do not inherit from Element need to implement this property. | null      |
| \$\$scope_chain     | Internal property. Element objects that do not inherit from Element need to implement this property. | []        |

### Methods

| Method name                | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| initProps                  | Merge element configuration properties with its own properties |
| registerListenerFromOnProp | Register elements to listen for events                         |
| triggerEvent               | Trigger listening                                              |
