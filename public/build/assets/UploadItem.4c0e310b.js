import{v as k,$ as I,a0 as g,x as B,n as t,y as R,z as o,A as x,G as a,a7 as w,B as s,N as E,C as r,O as _,I as i,Q as N,aw as d,bJ as U,P as u,bK as V,a_ as z}from"./index.8f0bf197.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const P=["title"],S={class:"details"},b={class:"name"},D={class:"controls"},L=k({__name:"UploadItem",props:{file:{}},setup(p){const m=p,n=I(()=>g(()=>import("./Btn.abe2bb59.js").then(l=>l.a),["assets/Btn.abe2bb59.js","assets/Btn.535c40ae.css","assets/index.8f0bf197.js","assets/_plugin-vue_export-helper.cdc0426e.js"])),{file:e}=B(m),v=t(()=>e.value.status==="Canceled"||e.value.status==="Errored"),f=t(()=>e.value.status!=="Uploading"),y=t(()=>U(e.value.status).toLowerCase()),C=()=>d.remove(e.value),h=()=>d.retry(e.value);return(l,O)=>{const c=R("Icon");return o(),x("div",{class:N([y.value,"upload-item"]),title:s(e).message},[a("span",{style:w({width:`${s(e).progress}%`}),class:"progress"},null,4),a("span",S,[a("span",b,E(s(e).name),1),a("span",D,[v.value?(o(),r(s(n),{key:0,"icon-only":"",title:"Retry",transparent:"",unrounded:"",onClick:h},{default:_(()=>[u(c,{icon:s(V)},null,8,["icon"])]),_:1})):i("",!0),f.value?(o(),r(s(n),{key:1,"icon-only":"",title:"Remove",transparent:"",unrounded:"",onClick:C},{default:_(()=>[u(c,{icon:s(z)},null,8,["icon"])]),_:1})):i("",!0)])])],10,P)}}});const G=A(L,[["__scopeId","data-v-221fd46a"]]);export{G as default};