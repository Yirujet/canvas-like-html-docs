(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{378:function(t,s,r){"use strict";r.r(s);var e=r(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"progress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#progress"}},[t._v("#")]),t._v(" Progress")]),t._v(" "),s("h3",{attrs:{id:"线形进度条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线形进度条"}},[t._v("#")]),t._v(" 线形进度条")]),t._v(" "),s("blockquote",[s("p",[t._v("给progress元素设置"),s("code",[t._v("percentage")]),t._v("即为进度条元素的进度值，范围为0-100。")])]),t._v(" "),s("ClientOnly",[s("vp-progress")],1),t._v(" "),s("div",{staticClass:"language-canvas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<canvas width="800" height="80">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="success"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="exception"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="warning"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),s("h3",{attrs:{id:"百分比内显"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#百分比内显"}},[t._v("#")]),t._v(" 百分比内显")]),t._v(" "),s("blockquote",[s("p",[t._v("给进度条元素设置 "),s("code",[t._v("textInside")]),t._v("属性即将显示文字移至进度条内部")])]),t._v(" "),s("ClientOnly",[s("vp-progress-text-inside")],1),t._v(" "),s("div",{staticClass:"language-canvas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<canvas width="800" height="80">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" :textInside="true" strokeWidth="20"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="success" :textInside="true" strokeWidth="20"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="exception" :textInside="true" strokeWidth="20"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" status="warning" :textInside="true" strokeWidth="20"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n\n')])])]),s("h3",{attrs:{id:"自定义颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义颜色"}},[t._v("#")]),t._v(" 自定义颜色")]),t._v(" "),s("blockquote",[s("p",[t._v("设置进度条元素的color属性，可以自定义进度条在不同进度值时的颜色显示")])]),t._v(" "),s("ClientOnly",[s("vp-progress-color")],1),t._v(" "),s("div",{staticClass:"language-canvas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<canvas width="800" height="80">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="30" strokeWidth="20" :color="customColors"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="80" strokeWidth="20" :color="customColors"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n<script>\nexport default {\n\tdata: {\n\t\tcustomColors: [\n\t\t\t{color: \'#f56c6c\', percentage: 20},\n\t\t\t{color: \'#5cb87a\', percentage: 60},\n\t\t]\n\t}\n}\n<\/script>\n')])])]),s("h3",{attrs:{id:"环形进度条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环形进度条"}},[t._v("#")]),t._v(" 环形进度条")]),t._v(" "),s("blockquote",[s("p",[t._v("给进度条元素设置 "),s("code",[t._v("type")]),t._v('="'),s("code",[t._v("circle")]),t._v('"使其变为一个环形进度条')])]),t._v(" "),s("ClientOnly",[s("vp-progress-circle")],1),t._v(" "),s("div",{staticClass:"language-canvas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<canvas width="800" height="150">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" strokeWidth="10" type="circle"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),s("h3",{attrs:{id:"仪表盘进度条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仪表盘进度条"}},[t._v("#")]),t._v(" 仪表盘进度条")]),t._v(" "),s("blockquote",[s("p",[t._v("给进度条元素设置 "),s("code",[t._v("type")]),t._v('="'),s("code",[t._v("dashboard")]),t._v('"使其变为一个环形进度条')])]),t._v(" "),s("ClientOnly",[s("vp-progress-dashboard")],1),t._v(" "),s("div",{staticClass:"language-canvas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<canvas width="800" height="150">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<progress :percentage="66" strokeWidth="10" type="dashboard"></progress>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),s("h3",{attrs:{id:"元素参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素参数"}},[t._v("#")]),t._v(" 元素参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("percentage")]),t._v(" "),s("td",[t._v("进度条值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("0-100")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("进度条显示类型")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("line| circle | dashboard")]),t._v(" "),s("td",[t._v("line")])]),t._v(" "),s("tr",[s("td",[t._v("strokeWidth")]),t._v(" "),s("td",[t._v("进度条线条宽度")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("6")])]),t._v(" "),s("tr",[s("td",[t._v("textInside")]),t._v(" "),s("td",[t._v("进度条显示文字是否内嵌")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("进度条状态")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("success| exception | warning")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("自定义进度条颜色")]),t._v(" "),s("td",[t._v("string|Array")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("进度条宽度")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("126")])]),t._v(" "),s("tr",[s("td",[t._v("showText")]),t._v(" "),s("td",[t._v("是否显示进度条文字")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("strokeLinecap")]),t._v(" "),s("td",[t._v("进度条线端类型")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("butt | round | square")]),t._v(" "),s("td",[t._v("round")])])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);