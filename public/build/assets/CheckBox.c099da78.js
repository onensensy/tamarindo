import{v as l,j as p,y as r,z as c,A as u,G as _,aJ as d,C as m,B as k,J as f,I as h}from"./index.8f0bf197.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";const v=["checked"],C=l({__name:"CheckBox",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const e=p(a.modelValue),s=o=>{e.value=o.target.checked,t("update:modelValue",e.value)};return(o,x)=>{const n=r("Icon");return c(),u("span",null,[_("input",d({checked:e.value,type:"checkbox"},o.$attrs,{onInput:s}),null,16,v),e.value?(c(),m(n,{key:0,icon:k(f)},null,8,["icon"])):h("",!0)])}}});const I=i(C,[["__scopeId","data-v-7cbed0cf"]]);export{I as C};
