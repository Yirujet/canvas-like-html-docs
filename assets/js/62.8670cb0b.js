(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{342:function(e,t,n){"use strict";n.r(t);n(89);var l={name:"vp-table-selection",data:()=>({colLen:10,rowLen:4,fixedLeftColIndex:[],fixedRightColIndex:[]}),mounted(){const e=Array.from({length:this.colLen}).map((e,t)=>({field:"col"+t,label:"col"+(t+1),fixed:(e=>this.fixedLeftColIndex.includes(e)?"left":this.fixedRightColIndex.includes(e)?"right":void 0)(t)}));e.unshift({type:"checkbox",fixed:"left",width:35});let t=[];for(let n=0,l=this.rowLen,i={};n<l;n++){i={};for(let t=0,l=e.length;t<l;t++)i.index=n+1,i["col"+t]=`row-${n+1}-col${t+1}`;t.push(i)}new CanvasLikeHtml.default({render:n=>n({render:n=>[n("table",{width:500,height:250,columns:e,data:t})]})}).mount(this.$refs.canvas)}},i=n(14),o=Object(i.a)(l,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{width:"800",height:"300"}})}),[],!1,null,null,null);t.default=o.exports}}]);