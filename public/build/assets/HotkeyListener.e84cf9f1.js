import{v as h,j as y,aD as _,aE as b,V as w,aF as D,z as k,C,B as O,aG as l,k as S,q as f,g as x,a as A}from"./index.8f0bf197.js";import{p}from"./app.be92839b.js";import"./Btn.abe2bb59.js";import"./_plugin-vue_export-helper.cdc0426e.js";/*!
  * vue-global-events v2.1.0
  * (c) 2022 Damian Dulisz, Eduardo San Martin Morote
  * @license MIT
  */let m;function L(){return m==null?m=/msie|trident/.test(window.navigator.userAgent.toLowerCase()):m}const I=/^on(\w+?)((?:Once|Capture|Passive)*)$/,K=/[OCP]/g;function P(n){return n?L()?n.includes("Capture"):n.replace(K,",$&").toLowerCase().slice(1).split(",").reduce((r,a)=>(r[a]=!0,r),{}):void 0}const B=h({name:"GlobalEvents",props:{target:{type:String,default:"document"},filter:{type:Function,default:()=>()=>!0}},setup(n,{attrs:u}){let r=Object.create(null);const a=y(!0);return _(()=>{a.value=!0}),b(()=>{a.value=!1}),w(()=>{Object.keys(u).filter(e=>e.startsWith("on")).forEach(e=>{const s=u[e],t=Array.isArray(s)?s:[s],c=e.match(I);if(!c){console.warn(`[vue-global-events] Unable to parse "${e}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`);return}let[,o,E]=c;o=o.toLowerCase();const g=t.map(i=>d=>{a.value&&n.filter(d,i,o)&&i(d)}),v=P(E);g.forEach(i=>{window[n.target].addEventListener(o,i,v)}),r[e]=[g,o,v]})}),D(()=>{for(const e in r){const[s,t,c]=r[e];s.forEach(o=>{window[n.target].removeEventListener(t,o,c)})}r={}}),()=>null}}),F=B,T=h({__name:"HotkeyListener",setup(n){const u=t=>!(t.target instanceof Document)&&t.target.matches("input, textarea, button, select")&&!t.target.matches("input[type=range]")?!0:(t.preventDefault(),p.toggle(),!1),r=t=>!(t.target instanceof Document)&&t.target.matches("input, select, textarea")?!0:(t.preventDefault(),p.playPrev(),!1),a=t=>!(t.target instanceof Document)&&t.target.matches("input, select, textarea")?!0:(t.preventDefault(),p.playNext(),!1),e=t=>!(t.target instanceof Document)&&t.target.matches("input, select, textarea")&&!t.target.matches("input[type=range]")||t.metaKey||t.ctrlKey?!0:(t.preventDefault(),S.emit("FOCUS_SEARCH_FIELD"),!1),s=t=>!(t.target instanceof Document)&&t.target.matches("input, select, textarea")?!0:(f.current&&(x.toggleOne(f.current),A.broadcast("SOCKET_SONG",f.current)),!1);return(t,c)=>(k(),C(O(F),{onKeydown:[l(u,["space"]),l(a,["j"]),l(r,["k"]),l(e,["f"]),l(s,["l"])]},null,8,["onKeydown"]))}});export{T as default};