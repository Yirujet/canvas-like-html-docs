(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{386:function(t,a,v){"use strict";v.r(a);var e=v(14),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"canvas文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas文件"}},[t._v("#")]),t._v(" .canvas文件")]),t._v(" "),a("p",[t._v("受益于尤大的vue框架，许许多多经历过从原生js -> jquery -> angularjs、extjs、backbone... -> vue、react、angular...的前端开发者们，极大的提高了开发效率，vue框架以其简洁的api，优秀的性能，俘获了一众前端人的心，笔者也是其中之一，最主要的，这是国人实现的前端框架（赞！！！）。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你之前有过前端框架使用经验，那么编写.canvas对你来说，学习负担为0，为了考虑前端新手，笔者还是会对.canvas的文件结构做下说明。")])]),t._v(" "),a("p",[t._v(".canvas文件内容，应主要包含两部分：视图(canvas节点)和逻辑(script节点)。")]),t._v(" "),a("h3",{attrs:{id:"canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[t._v("#")]),t._v(" <canvas>")]),t._v(" "),a("blockquote",[a("p",[t._v("canvas节点主要用于描述绘制内容，作用与 "),a("code",[t._v("<html>")]),t._v("类似，根节点canvas本身接收width、height两个属性用作后续画布的宽高属性。")])]),t._v(" "),a("p",[t._v("在canvas节点内部，可以使用内置的元素节点或自定义的元素节点来进行绘制。")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-canvas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<canvas width="300" height="50">\n    <tag attr1="attr1Val" :attr2="attr2Val" @eventName="handleEvent"></tag>\n</canvas>\n')])])]),a("p",[a("code",[t._v("tag")]),t._v(": 元素名称")]),t._v(" "),a("p",[a("code",[t._v("attr1")]),t._v(": 静态属性名称")]),t._v(" "),a("p",[a("code",[t._v("attr1Val")]),t._v(": 静态属性值")]),t._v(" "),a("p",[a("code",[t._v("attr2")]),t._v(": 动态属性名称")]),t._v(" "),a("p",[a("code",[t._v("attr2Val")]),t._v(": 动态属性值")]),t._v(" "),a("p",[a("code",[t._v("eventName")]),t._v(": 元素绑定的事件名称")]),t._v(" "),a("p",[a("code",[t._v("handleEvent")]),t._v(": 元素绑定的事件")]),t._v(" "),a("h3",{attrs:{id:"script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" <script>")]),t._v(" "),a("blockquote",[a("p",[t._v("script节点主要用于处理业务逻辑，如：动态绑定值、事件接受及处理等。")]),t._v(" "),a("p",[t._v("注：script中支持canvas绘制的生命周期钩子函数回调，目前仅支持created、mounted两个钩子。")])]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-canvas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<canvas width="300" height="50">\n    \t<tag attr1="attr1Val" :attr2="attr2Val" @eventName="handleEvent"></tag>\n</canvas>\n<script>\n\texport default {\n\t\tdata: {\n\t\t\tattr2Val: \'hello world\'\n\t\t},\n\t\tmethods: {\n\t\t\thandleEvent() {\n\t\t\t\tconsole.log(\'hello world!\')\n\t\t\t}\n\t\t}\n\t}\n<\/script>\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);