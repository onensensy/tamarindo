import{v as y,j as m,a1 as g,V as I,bx as _,a9 as V,z as l,A as c,F as S,G as e,R as r,aa as B,aH as P,P as v,O as D,I as f,a5 as E,a6 as A}from"./index.8f0bf197.js";import{i as h}from"./invitationService.3ec71d57.js";import{l as U,j as M}from"./app.be92839b.js";import{B as N}from"./Btn.abe2bb59.js";import{P as T}from"./PasswordField.1e406e0f.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const w=a=>(E("data-v-debe8796"),a=a(),A(),a),R={class:"invitation-wrapper"},j=["onSubmit"],F=w(()=>e("header",null," Welcome to Koel! To accept the invitation, fill in the form below and click that button. ",-1)),Y={class:"form-row"},q=["value"],z={class:"form-row"},G={class:"form-row"},H=w(()=>e("small",null,"Min. 10 characters. Should be a mix of characters, numbers, and symbols.",-1)),K={class:"form-row"},L={key:1},O=y({__name:"AcceptInvitation",setup(a){const{showErrorDialog:d}=U(),{getRouteParam:b,go:W}=M(),n=m(),u=m(!0),s=g({name:"",password:""}),p=String(b("token")),k=async()=>{try{await h.accept(p,s.name,s.password),window.location.href="/"}catch(t){const o=t.response.status===422?_(t.response.data)[0]:"Unknown error.";d(o,"Error")}};return I(async()=>{try{n.value=await h.getUserProspect(p)}catch(t){if(t.response.status===404){u.value=!1;return}const o=t.response.status===422?_(t.response.data)[0]:"Unknown error.";d(o,"Error")}}),(t,o)=>{const x=V("koel-focus");return l(),c("div",R,[n.value?(l(),c("form",{key:0,autocomplete:"off",onSubmit:S(k,["prevent"])},[F,e("div",Y,[e("label",null,[r(" Your email "),e("input",{type:"text",value:n.value.email,disabled:""},null,8,q)])]),e("div",z,[e("label",null,[r(" Your name "),B(e("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>s.name=i),type:"text",required:"",placeholder:"Erm\u2026 Bruce Dickinson?"},null,512),[[P,s.name],[x]])])]),e("div",G,[e("label",null,[r(" Password "),v(T,{modelValue:s.password,"onUpdate:modelValue":o[1]||(o[1]=i=>s.password=i),minlength:"10"},null,8,["modelValue"]),H])]),e("div",K,[v(N,{type:"submit"},{default:D(()=>[r("Accept & Log In")]),_:1})])],40,j)):f("",!0),u.value?f("",!0):(l(),c("p",L,"Invalid or expired invite."))])}}});const oe=C(O,[["__scopeId","data-v-debe8796"]]);export{oe as default};