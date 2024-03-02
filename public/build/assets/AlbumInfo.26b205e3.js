import{v as L,$ as T,a0 as x,x as F,j as _,w as P,n as f,y as S,z as a,A as l,B as t,G as n,N as B,P as M,bL as N,F as p,I as s,C as v,Z as V,R as H,Q as R,s as z}from"./index.8f0bf197.js";import{j as D,p as E}from"./app.be92839b.js";import{m as $}from"./mediaInfoService.83930c31.js";import"./Btn.abe2bb59.js";import{b as j,A as q}from"./index.f07e8060.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";import"./useAuthorization.5beda362.js";import"./useSongMenuMethods.5f7dfc3e.js";import"./downloadService.40931a22.js";import"./SoundBars.e7c8d9da.js";import"./useUpload.8e7c76aa.js";const G={key:0,class:"name"},O=["title","onClick"],Q={key:0,class:"wiki"},Z=["innerHTML"],J=["innerHTML"],K=["href"],U=L({__name:"AlbumInfo",props:{album:{},mode:{default:"aside"}},setup(y){const k=y,b=T(()=>x(()=>import("./AlbumTrackList.7d653698.js"),["assets/AlbumTrackList.7d653698.js","assets/AlbumTrackList.ff33777c.css","assets/index.8f0bf197.js","assets/app.be92839b.js","assets/app.f853c32d.css","assets/Btn.abe2bb59.js","assets/Btn.535c40ae.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/index.f07e8060.js","assets/index.5481f61c.css","assets/useAuthorization.5beda362.js","assets/useSongMenuMethods.5f7dfc3e.js","assets/downloadService.40931a22.js","assets/SoundBars.e7c8d9da.js","assets/useUpload.8e7c76aa.js"])),{album:o,mode:u}=F(k),{go:h}=D(),{useLastfm:w,useSpotify:A}=j(),e=_(null),i=_(!1);P(o,async()=>{i.value=!1,e.value=null,(w.value||A.value)&&(e.value=await $.fetchForAlbum(o.value))},{immediate:!0});const r=f(()=>u.value!=="full"&&!i.value),C=f(()=>!r.value),g=async()=>{E.queueAndPlay(await z.fetchForAlbum(o.value)),h("queue")};return(X,c)=>{var m,d;const I=S("Icon");return a(),l("article",{class:R([t(u),"album-info"]),"data-testid":"album-info"},[t(u)==="aside"?(a(),l("h1",G,[n("span",null,B(t(o).name),1),n("button",{title:`Play all songs in ${t(o).name}`,class:"control",type:"button",onClick:p(g,["prevent"])},[M(I,{icon:t(N),size:"xl"},null,8,["icon"])],8,O)])):s("",!0),n("main",null,[t(u)==="aside"?(a(),v(q,{key:0,entity:t(o)},null,8,["entity"])):s("",!0),e.value?(a(),l(V,{key:1},[(m=e.value.wiki)!=null&&m.summary?(a(),l("div",Q,[r.value?(a(),l("div",{key:0,class:"summary","data-testid":"summary",innerHTML:e.value.wiki.summary},null,8,Z)):s("",!0),C.value?(a(),l("div",{key:1,class:"full","data-testid":"full",innerHTML:e.value.wiki.full},null,8,J)):s("",!0),r.value?(a(),l("button",{key:2,class:"more",onClick:c[0]||(c[0]=p(Y=>i.value=!0,["prevent"]))}," Full Wiki ")):s("",!0)])):s("",!0),(d=e.value.tracks)!=null&&d.length?(a(),v(t(b),{key:1,album:t(o),tracks:e.value.tracks,"data-testid":"album-info-tracks"},null,8,["album","tracks"])):s("",!0),n("footer",null,[H(" Data \xA9 "),n("a",{href:e.value.url,rel:"noopener",target:"_blank"},"Last.fm",8,K)])],64)):s("",!0)])],2)}}});const me=W(U,[["__scopeId","data-v-e222bcc1"]]);export{me as default};
