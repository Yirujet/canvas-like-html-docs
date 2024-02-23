(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{383:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" Tag")]),t._v(" "),a("h3",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("blockquote",[a("p",[t._v("用"),a("code",[t._v("type")]),t._v("属性来控制标签的类型")])]),t._v(" "),a("ClientOnly",[a("vp-tag")],1),t._v(" "),a("div",{staticClass:"language-canvas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<canvas width="800" height="50">\n    <tag x="10" y="10">默认标签</tag>\n    <tag x="120" y="10" type="success">success标签</tag>\n    <tag x="250" y="10" type="info">info标签</tag>\n    <tag x="360" y="10" type="warning">warning标签</tag>\n    <tag x="490" y="10" type="danger">danger标签</tag>\n</canvas>\n')])])]),a("h3",{attrs:{id:"可移除标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可移除标签"}},[t._v("#")]),t._v(" 可移除标签")]),t._v(" "),a("blockquote",[a("p",[t._v("给标签添加 "),a("code",[t._v("closable")]),t._v("属性使其变为可关闭标签")])]),t._v(" "),a("ClientOnly",[a("vp-tag-closable")],1),t._v(" "),a("div",{staticClass:"language-canvas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<canvas width="800" height="50">\n    <tag x="10" y="10" closable>默认标签</tag>\n    <tag x="100" y="10" type="success" closable>success标签</tag>\n    <tag x="210" y="10" type="info" closable>info标签</tag>\n    <tag x="300" y="10" type="warning" closable>warning标签</tag>\n    <tag x="410" y="10" type="danger" closable>danger标签</tag>\n</canvas>\n')])])]),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("blockquote",[a("p",[t._v("支持监听change和close事件")])]),t._v(" "),a("ClientOnly",[a("vp-tag-event")],1),t._v(" "),a("div",{staticClass:"language-canvas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<canvas width="800" height="50">\n    <tag x="10" y="10" @change="handleClick">默认标签</tag>\n    <tag x="100" y="10" type="success" closable @close="handleClose">success标签</tag>\n</canvas>\n<script>\nexport default {\n\tmethods: {\n\t\thandleClick: () => {\n\t\t\tconsole.log(\'tag clicked\')\n\t\t},\n\t\thandleClose() {\n\t\t\tconsole.log(\'tag closed\')\n\t\t}\n\t}\n}\n<\/script>\n')])])]),a("h3",{attrs:{id:"元素参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素参数"}},[t._v("#")]),t._v(" 元素参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),a("td",[t._v("标签文字")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("按钮")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",[t._v("类型")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default| success | info | warning | danger")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("closable")]),t._v(" "),a("td",[t._v("是否显示删除图标")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"元素事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素事件"}},[t._v("#")]),t._v(" 元素事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("点击标签触发的事件")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("点击标签删除图标触发的事件")]),t._v(" "),a("td")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);