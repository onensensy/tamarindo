import{v as x,j as B,aj as g,c as E,n as c,k as D,z as t,C as M,O as N,B as U,aN as q,ar as m,A as l,G as o,I as n,Z as d,s as p}from"./index.8f0bf197.js";import{d as j}from"./downloadService.40931a22.js";import{j as F,p as _}from"./app.be92839b.js";import{u as G}from"./useContextMenu.bb260cc5.js";import"./Btn.abe2bb59.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=o("li",{class:"separator"},null,-1),R=o("li",{class:"separator"},null,-1),L=x({__name:"AlbumContextMenu",setup(T){const{go:s}=F(),{base:f,ContextMenuBase:v,open:k,trigger:a}=G(),e=B(),A=g(E.state,"allow_download"),r=c(()=>!q.isUnknown(e.value)),b=c(()=>!m.isUnknown(e.value.artist_id)&&!m.isVarious(e.value.artist_id)),w=()=>a(async()=>{_.queueAndPlay(await p.fetchForAlbum(e.value)),s("queue")}),y=()=>a(async()=>{_.queueAndPlay(await p.fetchForAlbum(e.value),!0),s("queue")}),C=()=>a(()=>s(`album/${e.value.id}`)),S=()=>a(()=>s(`artist/${e.value.artist_id}`)),h=()=>a(()=>j.fromAlbum(e.value));return D.on("ALBUM_CONTEXT_MENU_REQUESTED",async(u,i)=>{e.value=i,await k(u.pageY,u.pageX)}),(u,i)=>(t(),M(U(v),{ref_key:"base",ref:f,"data-testid":"album-context-menu","extra-class":"album-menu"},{default:N(()=>[e.value?(t(),l(d,{key:0},[o("li",{onClick:w},"Play All"),o("li",{onClick:y},"Shuffle All"),P,r.value?(t(),l("li",{key:0,onClick:C},"Go to Album")):n("",!0),b.value?(t(),l("li",{key:1,onClick:S},"Go to Artist")):n("",!0),r.value&&A.value?(t(),l(d,{key:2},[R,o("li",{onClick:h},"Download")],64)):n("",!0)],64)):n("",!0)]),_:1},512))}});export{L as default};
