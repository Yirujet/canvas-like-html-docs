(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{340:function(l,e,o){"use strict";o.r(e);o(89);var n={name:"vp-table-children",data:()=>({colLen:10,rowLen:4,fixedLeftColIndex:[],fixedRightColIndex:[]}),mounted(){const l=Array.from({length:this.colLen}).map((l,e)=>({field:"col"+e,label:"col"+(e+1),fixed:(l=>this.fixedLeftColIndex.includes(l)?"left":this.fixedRightColIndex.includes(l)?"right":void 0)(e)}));l.unshift({label:"col-parent",children:[{label:"col-1",children:[{label:"col-1-1",field:"col1",children:[{label:"col-1-1-1",field:"col3",children:[{label:"col-1-1-1-1",field:"col4"},{label:"col-1-1-1-2",field:"col3"}]}]},{label:"col-1-2",field:"col2",children:[{label:"col-1-2-1",field:"col1"},{label:"col-1-2-2",field:"col2"}]}]},{label:"col-2",field:"col9"}]});let e=[];for(let o=0,n=this.rowLen,c={};o<n;o++){c={};for(let e=0,n=l.length;e<n;e++)c.index=o+1,c["col"+e]=`row-${o+1}-col${e+1}`;e.push(c)}new CanvasLikeHtml.default({render:o=>o({render:o=>[o("table",{width:500,height:500,columns:l,data:e})]})}).mount(this.$refs.canvas)}},c=o(14),i=Object(c.a)(n,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{width:"800",height:"500"}})}),[],!1,null,null,null);e.default=i.exports}}]);