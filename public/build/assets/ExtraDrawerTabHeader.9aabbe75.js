import{v as x,n as y,y as k,a9 as A,z as i,A as a,aa as u,Q as d,F as c,P as m,B as n,bN as C,bb as w,ba as V,I as Y,Z as g}from"./index.8f0bf197.js";import{b as D,e as L}from"./index.f07e8060.js";import"./app.be92839b.js";import"./Btn.abe2bb59.js";import"./useAuthorization.5beda362.js";import"./useSongMenuMethods.5f7dfc3e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./downloadService.40931a22.js";import"./SoundBars.e7c8d9da.js";import"./useUpload.8e7c76aa.js";const P=x({__name:"ExtraDrawerTabHeader",props:{modelValue:{default:null}},emits:["update:modelValue"],setup(v,{emit:b}){const f=v,{useYouTube:T}=D(),t=y({get:()=>f.modelValue,set:o=>b("update:modelValue",o)}),l=o=>t.value=t.value===o?null:o;return(o,e)=>{const r=k("Icon"),s=A("koel-tooltip");return i(),a(g,null,[u((i(),a("button",{id:"extraTabLyrics",class:d({active:t.value==="Lyrics"}),title:"Lyrics",type:"button",onClick:e[0]||(e[0]=c(p=>l("Lyrics"),["prevent"]))},[m(r,{icon:n(C),"fixed-width":""},null,8,["icon"])],2)),[[s,void 0,void 0,{left:!0}]]),u((i(),a("button",{id:"extraTabArtist",class:d({active:t.value==="Artist"}),title:"Artist information",type:"button",onClick:e[1]||(e[1]=c(p=>l("Artist"),["prevent"]))},[m(r,{icon:n(w),"fixed-width":""},null,8,["icon"])],2)),[[s,void 0,void 0,{left:!0}]]),u((i(),a("button",{id:"extraTabAlbum",class:d({active:t.value==="Album"}),title:"Album information",type:"button",onClick:e[2]||(e[2]=c(p=>l("Album"),["prevent"]))},[m(r,{icon:n(V),"fixed-width":""},null,8,["icon"])],2)),[[s,void 0,void 0,{left:!0}]]),n(T)?u((i(),a("button",{key:0,id:"extraTabYouTube",class:d({active:t.value==="YouTube"}),title:"Related YouTube videos",type:"button",onClick:e[3]||(e[3]=c(p=>l("YouTube"),["prevent"]))},[m(r,{icon:n(L),"fixed-width":""},null,8,["icon"])],2)),[[s,void 0,void 0,{left:!0}]]):Y("",!0)],64)}}});export{P as default};