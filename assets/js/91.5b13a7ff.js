(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{372:function(t,n,a){"use strict";a.r(n);var e=a(14),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"button"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#button"}},[t._v("#")]),t._v(" Button")]),t._v(" "),n("h3",{attrs:{id:"基础按钮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础按钮"}},[t._v("#")]),t._v(" 基础按钮")]),t._v(" "),n("ClientOnly",[n("vp-button")],1),t._v(" "),n("h3",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),n("blockquote",[n("p",[t._v("创建.canvas文件，编写文件内容")])]),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="180">\n    <button x="10" y="10">默认按钮</button>\n    <button x="130" y="10" type="primary">主要按钮</button>\n    <button x="250" y="10" type="success">成功按钮</button>\n    <button x="370" y="10" type="info">信息按钮</button>\n    <button x="490" y="10" type="warning">警告按钮</button>\n    <button x="610" y="10" type="danger">危险按钮</button>\n    <button x="10" y="60" plain>朴素按钮</button>\n    <button x="130" y="60" type="primary" plain>主要按钮</button>\n    <button x="250" y="60" type="success" plain>成功按钮</button>\n    <button x="370" y="60" type="info" plain>信息按钮</button>\n    <button x="490" y="60" type="warning" plain>警告按钮</button>\n    <button x="610" y="60" type="danger" plain>危险按钮</button>\n    <button x="10" y="110" round>圆角按钮</button>\n    <button x="130" y="110" type="primary" round>主要按钮</button>\n    <button x="250" y="110" type="success" round>成功按钮</button>\n    <button x="370" y="110" type="info" round>信息按钮</button>\n    <button x="490" y="110" type="warning" round>警告按钮</button>\n    <button x="610" y="110" type="danger" round>危险按钮</button>\n</canvas>\n\n')])])]),n("h3",{attrs:{id:"禁用状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#禁用状态"}},[t._v("#")]),t._v(" 禁用状态")]),t._v(" "),n("blockquote",[n("p",[t._v("给按钮元素传入"),n("code",[t._v("disabled")]),t._v("属性来控制其是否可用")])]),t._v(" "),n("ClientOnly",[n("vp-button-disabled")],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="180">\n    <button x="10" y="10" disabled>默认按钮</button>\n    <button x="130" y="10" type="primary" disabled>主要按钮</button>\n    <button x="250" y="10" type="success" disabled>成功按钮</button>\n    <button x="370" y="10" type="info" disabled>信息按钮</button>\n    <button x="490" y="10" type="warning" disabled>警告按钮</button>\n    <button x="610" y="10" type="danger" disabled>危险按钮</button>\n    <button x="10" y="60" plain disabled>朴素按钮</button>\n    <button x="130" y="60" type="primary" plain disabled>主要按钮</button>\n    <button x="250" y="60" type="success" plain disabled>成功按钮</button>\n    <button x="370" y="60" type="info" plain disabled>信息按钮</button>\n    <button x="490" y="60" type="warning" plain disabled>警告按钮</button>\n    <button x="610" y="60" type="danger" plain disabled>危险按钮</button>\n    <button x="10" y="110" round disabled>圆角按钮</button>\n    <button x="130" y="110" type="primary" round disabled>主要按钮</button>\n    <button x="250" y="110" type="success" round disabled>成功按钮</button>\n    <button x="370" y="110" type="info" round disabled>信息按钮</button>\n    <button x="490" y="110" type="warning" round disabled>警告按钮</button>\n    <button x="610" y="110" type="danger" round disabled>危险按钮</button>\n</canvas>\n')])])]),n("h3",{attrs:{id:"文字按钮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文字按钮"}},[t._v("#")]),t._v(" 文字按钮")]),t._v(" "),n("blockquote",[n("p",[t._v("没有边框跟背景的按钮")])]),t._v(" "),n("ClientOnly",[n("vp-text-button")],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="50">\n    <button x="10" y="10" type="text">文字按钮</button>\n    <button x="80" y="10" type="text" disabled>文字按钮</button>\n</canvas>\n')])])]),n("h3",{attrs:{id:"事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),n("blockquote",[n("p",[t._v("支持监听click事件")])]),t._v(" "),n("ClientOnly",[n("vp-button-event")],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="60">\n    <button x="10" y="10" type="primary" @click="handleClick">click按钮</button>\n</canvas>\n\n<script>\n{\n    methods: {\n\thandleClick() {\n\t    console.log(\'button -> click event triggered\')\n\t}\n    }\n}\n<\/script>\n')])])]),n("h3",{attrs:{id:"元素参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元素参数"}},[t._v("#")]),t._v(" 元素参数")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),n("td",[t._v("按钮文字")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("按钮")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),n("td",[t._v("按钮文字颜色")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("canvas绘制上下文对象默认设置的字体填充颜色")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("fontSize")]),t._v(" "),n("td",[t._v("按钮文字大小")]),t._v(" "),n("td",[t._v("string| number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("canvas绘制上下文对象默认设置的字体大小")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),n("td",[t._v("类型")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("default| primary | success | info | warning | danger | text")]),t._v(" "),n("td",[t._v("default")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("plain")]),t._v(" "),n("td",[t._v("是否朴素按钮")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("round")]),t._v(" "),n("td",[t._v("是否圆角按钮")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),n("td",[t._v("是否禁用")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h3",{attrs:{id:"元素事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元素事件"}},[t._v("#")]),t._v(" 元素事件")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("click")]),t._v(" "),n("td",[t._v("点击按钮触发的事件")]),t._v(" "),n("td")])])])],1)}),[],!1,null,null,null);n.default=s.exports}}]);