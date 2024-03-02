import{v as V,a1 as C,a9 as S,z as B,A as D,G as e,R as t,aa as d,aH as m,P as n,O as p,F as _,aG as E,u as N,bx as A,b as O,a5 as q,a6 as F}from"./index.8f0bf197.js";import{k as I,l as M}from"./app.be92839b.js";import{u as K}from"./useOverlay.b8f8c136.js";import{B as w}from"./Btn.abe2bb59.js";import{_ as P}from"./TooltipIcon.vue_vue_type_script_setup_true_lang.7d6ec67c.js";import{C as T}from"./CheckBox.c099da78.js";import{_ as G}from"./_plugin-vue_export-helper.cdc0426e.js";const f=r=>(q("data-v-7d331e47"),r=r(),F(),r),$=["onSubmit","onKeydown"],j=f(()=>e("header",null,[e("h1",null,"Add New User")],-1)),z={class:"form-row"},H={class:"form-row"},R={class:"form-row"},J=f(()=>e("p",{class:"help"},"Min. 10 characters. Should be a mix of characters, numbers, and symbols.",-1)),L={class:"form-row"},Q=V({__name:"AddUserForm",emits:["close"],setup(r,{emit:v}){const{showOverlay:h,hideOverlay:y}=K(),{toastSuccess:b}=I(),{showErrorDialog:x,showConfirmDialog:g}=M(),c={name:"",email:"",password:"",is_admin:!1},s=C(Object.assign({},c)),U=async()=>{h();try{await N.store(s),b(`New user "${s.name}" created.`),l()}catch(i){const a=i.response.status===422?A(i.response.data)[0]:"Unknown error.";x(a,"Error")}finally{y()}},l=()=>v("close"),u=async()=>{if(O.exports.isEqual(s,c)){l();return}await g("Discard all changes?")&&l()};return(i,a)=>{const k=S("koel-focus");return B(),D("form",{onSubmit:_(U,["prevent"]),onKeydown:E(u,["esc"])},[j,e("main",null,[e("div",z,[e("label",null,[t(" Name "),d(e("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>s.name=o),name:"name",required:"",title:"Name",type:"text"},null,512),[[m,s.name],[k]])])]),e("div",H,[e("label",null,[t(" Email "),d(e("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>s.email=o),name:"email",required:"",title:"Email",type:"email"},null,512),[[m,s.email]])])]),e("div",R,[e("label",null,[t(" Password "),d(e("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>s.password=o),autocomplete:"new-password",name:"password",required:"",title:"Password",type:"password"},null,512),[[m,s.password]])]),J]),e("div",L,[e("label",null,[n(T,{modelValue:s.is_admin,"onUpdate:modelValue":a[3]||(a[3]=o=>s.is_admin=o),name:"is_admin"},null,8,["modelValue"]),t(" User is an admin "),n(P,{title:"Admins can perform administrative tasks like managing users and uploading songs."})])])]),e("footer",null,[n(w,{class:"btn-add",type:"submit"},{default:p(()=>[t("Save")]),_:1}),n(w,{class:"btn-cancel",white:"",onClick:_(u,["prevent"])},{default:p(()=>[t("Cancel")]),_:1},8,["onClick"])])],40,$)}}});const oe=G(Q,[["__scopeId","data-v-7d331e47"]]);export{oe as default};
