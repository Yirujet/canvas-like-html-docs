(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{344:function(e,t,l){"use strict";l.r(t);l(89);var n={name:"vp-table-slot-head",data:()=>({colLen:10,rowLen:4,fixedLeftColIndex:[],fixedRightColIndex:[]}),mounted(){const e=Array.from({length:this.colLen}).map((e,t)=>({field:"col"+t,label:"col"+(t+1),fixed:(e=>this.fixedLeftColIndex.includes(e)?"left":this.fixedRightColIndex.includes(e)?"right":void 0)(t)}));e.push({field:"col3",label:"操作",fixed:"right",width:150,slot:{head:(e,t)=>e("span",{text:`${t.label}-${t.field}`})}});let t=[];for(let l=0,n=this.rowLen,i={};l<n;l++){i={};for(let t=0,n=e.length;t<n;t++)i.index=l+1,i["col"+t]=`row-${l+1}-col${t+1}`;t.push(i)}new CanvasLikeHtml.default({render:l=>l({render:l=>[l("table",{width:600,height:250,columns:e,data:t})]})}).mount(this.$refs.canvas)}},i=l(14),d=Object(i.a)(n,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{width:"800",height:"300"}})}),[],!1,null,null,null);t.default=d.exports}}]);