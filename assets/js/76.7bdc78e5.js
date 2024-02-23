(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{358:function(t,e,n){"use strict";n.r(e);var a=n(14),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" Link")]),t._v(" "),e("h3",{attrs:{id:"basic-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-link"}},[t._v("#")]),t._v(" Basic link")]),t._v(" "),e("ClientOnly",[e("vp-link")],1),t._v(" "),e("div",{staticClass:"language-canvas extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<canvas width="800" height="50">\n    <link x="10" y="10">默认链接</link>\n    <link x="80" y="10" type="primary">主要链接</link>\n    <link x="150" y="10" type="success">成功链接</link>\n    <link x="220" y="10" type="info">信息链接</link>\n    <link x="290" y="10" type="warning">警告链接</link>\n    <link x="360" y="10" type="danger">危险链接</link>\n</canvas>\n\n')])])]),e("h3",{attrs:{id:"disabled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disabled"}},[t._v("#")]),t._v(" Disabled")]),t._v(" "),e("ClientOnly",[e("vp-link-disabled")],1),t._v(" "),e("blockquote",[e("p",[t._v("Pass the disabled attribute to the link element to control whether it is available")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<canvas width="800" height="50">\n    <link x="10" y="10" disabled>默认按钮</link>\n    <link x="80" y="10" type="primary" disabled>主要按钮</link>\n    <link x="150" y="10" type="success" disabled>成功按钮</link>\n    <link x="220" y="10" type="info" disabled>信息按钮</link>\n    <link x="290" y="10" type="warning" disabled>警告按钮</link>\n    <link x="360" y="10" type="danger" disabled>危险按钮</link>\n</canvas>\n')])])]),e("h3",{attrs:{id:"underline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#underline"}},[t._v("#")]),t._v(" Underline")]),t._v(" "),e("blockquote",[e("p",[t._v("Pass the underline attribute to the link element to control whether it displays underline")])]),t._v(" "),e("ClientOnly",[e("vp-underline-link")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<canvas width="800" height="50">\n    <link x="10" y="10" underline>有下划线</link>\n    <link x="80" y="10" type="text" :underline="false">无下划线</link>\n</canvas>\n')])])]),e("h3",{attrs:{id:"event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),e("blockquote",[e("p",[t._v("Support click events")])]),t._v(" "),e("ClientOnly",[e("vp-link-event")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<canvas width="800" height="50">\n    <link x="10" y="10" type="primary" @click="handleClick">click链接</link>\n</canvas>\n\n<script>\n{\n    methods: {\n\thandleClick() {\n\t    console.log(\'link -> click event triggered\')\n\t}\n    }\n}\n<\/script>\n')])])]),e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Accepted values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),e("td",[t._v("link text")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("按钮")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("fontSize")]),t._v(" "),e("td",[t._v("link text fontsize")]),t._v(" "),e("td",[t._v("string| number")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The font size set by default for the canvas drawing context object")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",[t._v("link type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("default| primary | success | info | warning | danger | text")]),t._v(" "),e("td",[t._v("default")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("href")]),t._v(" "),e("td",[t._v("Native href attribute")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),e("td",[t._v("Whether to disable")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Parameters")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("Event triggered by link click")]),t._v(" "),e("td")])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);