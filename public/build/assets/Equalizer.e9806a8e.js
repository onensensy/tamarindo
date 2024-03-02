import{v as E,j as p,w as g,V as k,y as B,z as r,A as i,G as e,aa as G,bI as U,Z as b,Y as w,B as m,P as y,aT as F,O as I,F as V,aG as N,N as S,R as A}from"./index.8f0bf197.js";import{n as D}from"./nouislider.56dafe2f.js";import{n as u,q as _,r as P}from"./app.be92839b.js";import{B as K}from"./Btn.abe2bb59.js";import"./_plugin-vue_export-helper.cdc0426e.js";const M=["onKeydown"],T={class:"select-wrapper"},j=e("option",{disabled:"",value:"-1"},"Preset",-1),L=["value"],O={class:"bands"},R=e("span",{class:"band"},[e("span",{class:"slider"}),e("label",null,"Preamp")],-1),Y=e("span",{class:"indicators"},[e("span",null,"+20"),e("span",null,"0"),e("span",null,"-20")],-1),Z=e("span",{class:"slider"},null,-1),ee=E({__name:"Equalizer",emits:["close"],setup(H,{emit:q}){const c=u.bands,d=p(),l=p(0),o=p(-1);g(l,a=>u.changePreampGain(a)),g(o,()=>{o.value!==-1&&C(_.getPresetById(o.value)||P[0]),f()});const z=()=>{const a=_.getConfig();if(o.value=a.id,l.value=a.preamp,!d.value)throw new Error("Equalizer config or root element not found");d.value.querySelectorAll(".slider").forEach((t,n)=>{D.create(t,{connect:[!1,!0],start:n===0?a.preamp:a.gains[n-1],range:{min:-20,max:20},orientation:"vertical",direction:"rtl"}),t.isPreamp=n===0,t.noUiSlider.on("slide",(s,x)=>{const h=parseFloat(s[x]);t.isPreamp?l.value=h:u.changeFilterGain(c[n-1].filter,h),o.value=-1,f()})})},C=a=>{var t;l.value=a.preamp,(t=d.value)==null||t.querySelectorAll(".slider").forEach((n,s)=>{if(!n.noUiSlider)throw new Error("Preset can only be loaded after sliders have been set up");n.isPreamp?n.noUiSlider.set(a.preamp):(u.changeFilterGain(c[s-1].filter,a.gains[s-1]),n.noUiSlider.set(a.gains[s-1]))})},f=()=>_.saveConfig(o.value,l.value,c.map(a=>a.db)),v=()=>q("close");return k(()=>z()),(a,t)=>{const n=B("Icon");return r(),i("form",{id:"equalizer",ref_key:"root",ref:d,"data-testid":"equalizer",tabindex:"0",onKeydown:N(v,["esc"])},[e("header",null,[e("label",T,[G(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),title:"Select equalizer"},[j,(r(!0),i(b,null,w(m(P),s=>(r(),i("option",{key:s.id,value:s.id},S(s.name),9,L))),128))],512),[[U,o.value]]),y(n,{icon:m(F),class:"arrow text-highlight",size:"sm"},null,8,["icon"])])]),e("main",null,[e("div",O,[R,Y,(r(!0),i(b,null,w(m(c),s=>(r(),i("span",{key:s.label,class:"band"},[Z,e("label",null,S(s.label),1)]))),128))])]),e("footer",null,[y(K,{onClick:V(v,["prevent"])},{default:I(()=>[A("Close")]),_:1},8,["onClick"])])],40,M)}}});export{ee as default};
