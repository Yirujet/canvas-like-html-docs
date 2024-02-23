(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{355:function(t,n,e){"use strict";e.r(n);var a=e(14),o=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"grid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" Grid")]),t._v(" "),n("h3",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" background")]),t._v(" "),n("p",[t._v("As we all know, canvas is drawn at the pixel level. Unlike HTML, it does not automatically display its internal block-level elements in one line, and displays the in-line elements in sequence on the same line. If you want to achieve block-level and inline effects similar to HTML on canvas, developers need to manually calculate the horizontal and vertical coordinates of drawing graphics, which is really troublesome. However, this bad situation will be completely solved in canvas-like-html, that is, using the library's built-in row and col elements to implement grid layout in canvas.")]),t._v(" "),n("h3",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The grid layout will not be described in detail here. Here is a brief description of the working principle of implementing grid in canvas-like-html:")]),t._v(" "),n("ul",[n("li",[t._v("Create a row element through the "),n("code",[t._v("row")]),t._v(" element")]),t._v(" "),n("li",[t._v("Add the "),n("code",[t._v("col")]),t._v(" element inside the "),n("code",[t._v("row")]),t._v(" element to achieve multi-column arrangement")]),t._v(" "),n("li",[t._v("Each column element "),n("code",[t._v("col")]),t._v(" can pass in the "),n("code",[t._v("span")]),t._v(" attribute to control the width it occupies in the row element.")]),t._v(" "),n("li",[t._v("The span of the column element col only accepts values from "),n("code",[t._v("1~24")]),t._v(", that is, a row element can be divided into up to 24 columns.")]),t._v(" "),n("li",[t._v("All elements in the column element col (except row, which occupies an exclusive row) will be arranged one by one like the inline elements in HTML. If they exceed the row, they will be arranged in a row.")])]),t._v(" "),n("h3",{attrs:{id:"basic-grid-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-grid-usage"}},[t._v("#")]),t._v(" Basic grid usage")]),t._v(" "),n("ClientOnly",[n("vp-grid")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="50">\n\t<row>\n\t\t<col :span="6"><span>col-6</span></col>\n\t\t<col :span="6"><span>col-6</span></col>\n\t\t<col :span="6"><span>col-6</span></col>\n\t\t<col :span="6"><span>col-6</span></col>\n\t</row>\n</canvas>\n')])])]),n("h3",{attrs:{id:"vertical-alignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vertical-alignment"}},[t._v("#")]),t._v(" vertical alignment")]),t._v(" "),n("blockquote",[n("p",[t._v("By setting the "),n("code",[t._v("align")]),t._v(" attribute of the row element, all column elements under the row element can be vertically aligned.")])]),t._v(" "),n("ClientOnly",[n("vp-grid-align")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="200">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>align: top</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row align="top">\n\t\t\t\t<col :span="12"><button>col-12</button></col>\n\t\t\t\t<col :span="12"><span>col-12</span></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>align: middle</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row align="middle">\n\t\t\t\t<col :span="12"><button>col-12</button></col>\n\t\t\t\t<col :span="12"><span>col-12</span></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>align: bottom</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row align="bottom">\n\t\t\t\t<col :span="12"><button>col-12</button></col>\n\t\t\t\t<col :span="12"><button>col-12</button></col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),n("h3",{attrs:{id:"horizontal-arrangement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-arrangement"}},[t._v("#")]),t._v(" horizontal arrangement")]),t._v(" "),n("blockquote",[n("p",[t._v("By setting the "),n("code",[t._v("justify")]),t._v(" attribute of the row element, all column elements under the row element can be arranged horizontally.")])]),t._v(" "),n("ClientOnly",[n("vp-grid-justify")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="350">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="24">\n\t\t\t\t\t<span>justify: start</span>\n\t\t\t\t</col>\n\t\t\t</row>\n\t\t\t<row justify="start">\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t\t<col :span="2"><button type="primary">col-2</button></col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),n("h3",{attrs:{id:"offset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" offset")]),t._v(" "),n("blockquote",[n("p",[t._v("Column offset can be achieved by setting the "),n("code",[t._v("offset")]),t._v(" of the column element.")])]),t._v(" "),n("ClientOnly",[n("vp-grid-offset")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="50">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="6" :offset="6"><span>col-6 col-offset-6</span></col>\n\t\t\t\t<col :span="6" :offset="6"><span>col-6 col-offset-6</span></col>\n\t\t\t</row>\n\t\t\t<row>\n\t\t\t\t<col :span="12" :offset="6"><span>col-12 col-offset-6</span></col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n\n')])])]),n("h3",{attrs:{id:"pull、push"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pull、push"}},[t._v("#")]),t._v(" pull、push")]),t._v(" "),n("blockquote",[n("p",[t._v("By setting the "),n("code",[t._v("pull")]),t._v(" and "),n("code",[t._v("push")]),t._v(" of the col element, you can control the position of the column left and right.")]),t._v(" "),n("p",[t._v("Note: "),n("code",[t._v("pull")]),t._v(" and "),n("code",[t._v("push")]),t._v(" only change the position of the current column element and will not affect subsequent columns. The effect is similar to the position: absolute element setting left and right in CSS.")])]),t._v(" "),n("ClientOnly",[n("vp-grid-pull-push")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="100">\n\t<row>\n\t\t<col :span="24">\n\t\t\t<row>\n\t\t\t\t<col :span="6" :push="2"><span>col-6 push-2</span></col>\n\t\t\t\t<col :span="6" :push="3"><span>col-6 push-3</span></col>\n\t\t\t</row>\n\t\t\t<row justify="end">\n\t\t\t\t<col :span="6" :pull="2"><span>col-6 pull-2</span></col>\n\t\t\t\t<col :span="6" :pull="2"><span>col-6 pull-2</span></col>\n\t\t\t</row>\n\t\t\t<row justify="center">\n\t\t\t\t<col :span="18" :push="6"><span>col-18 push-6</span></col>\n\t\t\t\t<col :span="6" :pull="4"><span>col-6 pull-4</span></col>\n\t\t\t</row>\n\t\t</col>\n\t</row>\n</canvas>\n')])])]),n("h3",{attrs:{id:"gutter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gutter"}},[t._v("#")]),t._v(" gutter")]),t._v(" "),n("blockquote",[n("p",[t._v("By setting the "),n("code",[t._v("gutter")]),t._v(" of the "),n("code",[t._v("row")]),t._v(" element, you can set a gap for its direct child "),n("code",[t._v("col")]),t._v(" elements.")]),t._v(" "),n("p",[t._v("Note: The moving distance is in pixels")])]),t._v(" "),n("ClientOnly",[n("vp-grid-gutter")],1),t._v(" "),n("div",{staticClass:"language-canvas extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<canvas width="800" height="50">\n\t<row :gutter="5" justify="center">\n\t\t<col :span="2">\n\t\t\t<tag type="success">col-2</tag>\n\t\t</col>\n\t\t<col :span="2">\n\t\t\t<tag type="success">col-2</tag>\n\t\t</col>\n\t\t<col :span="2">\n\t\t\t<tag type="success">col-2</tag>\n\t\t</col>\n\t\t<col :span="2">\n\t\t\t<tag type="success">col-2</tag>\n\t\t</col>\n\t</row>\n</canvas>\n\n')])])]),n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),n("h4",{attrs:{id:"row"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" row")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Accepted values")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("align")]),t._v(" "),n("td",[t._v("vertical alignment")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("top| middle | bottom")]),t._v(" "),n("td",[t._v("top")])]),t._v(" "),n("tr",[n("td",[t._v("justify")]),t._v(" "),n("td",[t._v("horizontal arrangement")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("start| center | end | space-around | space-between | space-evenly")]),t._v(" "),n("td",[t._v("start")])]),t._v(" "),n("tr",[n("td",[t._v("gutter")]),t._v(" "),n("td",[t._v("spacing")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("Layout method, currently only supports flex")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("flex")]),t._v(" "),n("td",[t._v("flex")])])])]),t._v(" "),n("h4",{attrs:{id:"col"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#col"}},[t._v("#")]),t._v(" col")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Attribute")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Accepted values")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("span")]),t._v(" "),n("td",[t._v("The number of cells occupied by the grid")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("1-24")]),t._v(" "),n("td",[t._v("24")])]),t._v(" "),n("tr",[n("td",[t._v("offset")]),t._v(" "),n("td",[t._v("The number of spacer cells on the left side of the grid")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("push")]),t._v(" "),n("td",[t._v("The number of cells the grid moves to the left")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("pull")]),t._v(" "),n("td",[t._v("The number of cells the grid moves to the right")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("0")])])])])],1)}),[],!1,null,null,null);n.default=o.exports}}]);