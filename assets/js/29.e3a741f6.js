(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(t,e,s){"use strict";s.r(e);var i={name:"vp-custom-element",created(){const t=CanvasLikeHtml.default.elements.get("element");function e(e){t.call(this),this.r=5,this.initProps(e),this.mouseEntered=!0,this.registerListenerFromOnProp({click:t=>{const{offsetX:e,offsetY:s}=t;((this.x-e)**2+(this.y-s)**2)**.5<this.r&&alert("点击了圆内部！")}}),this.render=function(){this.ctx.save(),this.ctx.lineWidth=1,this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.stroke(),this.ctx.restore()}}(0,CanvasLikeHtml.default.inherit)(e,t),CanvasLikeHtml.default.element("circle",e)},mounted(){new CanvasLikeHtml.default({render:t=>t({render:t=>[t("circle",{x:250,y:50,r:30})]})}).mount(this.$refs.canvas)}},n=s(14),r=Object(n.a)(i,(function(){return(0,this._self._c)("canvas",{ref:"canvas",attrs:{width:"1000",height:"500"}})}),[],!1,null,null,null);e.default=r.exports}}]);