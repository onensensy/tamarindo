import{v as Q,j as m,n as v,V as X,w as Y,k as Z,y as $,z as o,A as ee,C as r,bj as ae,O as u,B as a,I as p,s as P,l as ne,bo as oe,G as S,N as y,aM as te,P as w,R as b,aO as le,bc as se}from"./index.8f0bf197.js";import{u as re,S as ue,c as ce,g as ie,a as me}from"./index.f07e8060.js";import{l as de,j as ge,p as C}from"./app.be92839b.js";import"./Btn.abe2bb59.js";import{S as ve}from"./ScreenHeaderSkeleton.a1e2892b.js";import"./useAuthorization.5beda362.js";import"./useSongMenuMethods.5f7dfc3e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./downloadService.40931a22.js";import"./SoundBars.e7c8d9da.js";import"./useUpload.8e7c76aa.js";const pe={id:"genreWrapper"},Se={class:"text-thin"},B=500,Ve=Q({__name:"GenreScreen",setup(ye){const{SongList:R,SongListControls:N,ControlsToggle:V,ThumbnailStack:x,headerLayout:A,songs:t,songList:E,thumbnails:G,showingControls:d,isPhone:L,onPressEnter:T,playSelected:D,onScrollBreakpoint:F}=re(m([])),{showErrorDialog:O}=de(),{getRouteParam:I,go:j,onRouteChanged:q}=ge();let f="title",h="asc";const l=m(null),n=m(null),c=m(!1),i=m(1),H=v(()=>i.value!==null),U=v(()=>c.value&&t.value.length===0),z=v(()=>{var e,s;return oe((s=(e=n.value)==null?void 0:e.length)!=null?s:0)}),M=async(e,s)=>{i.value=1,t.value=[],f=e,h=s,await g()},g=async()=>{if(!(!H.value||c.value)){c.value=!0;try{let e;[n.value,e]=await Promise.all([ie.fetchOne(l.value),P.paginateForGenre(l.value,f,h,i.value)]),i.value=e.nextPage,t.value.push(...e.songs)}catch(e){O("Failed to fetch genre details or genre was not found.","Error"),ne.error(e)}finally{c.value=!1}}},k=async()=>{n.value=null,i.value=1,t.value=[],await g()},_=()=>{var e;return(e=I("name"))!=null?e:null};q(e=>{e.screen==="Genre"&&(l.value=_())});const W=async()=>{!n.value||(n.value.song_count<=B?C.queueAndPlay(t.value,!0):C.queueAndPlay(await P.fetchRandomForGenre(n.value,B)),j("queue"))};return X(()=>l.value=_()),Y(l,async()=>l.value&&await k()),Z.on("SONGS_UPDATED",async()=>n.value&&await k()),(e,s)=>{const J=$("Icon");return o(),ee("section",pe,[n.value?(o(),r(ue,{key:0,layout:a(A)},ae({thumbnail:u(()=>[w(a(x),{thumbnails:a(G)},null,8,["thumbnails"])]),controls:u(()=>[!a(L)||a(d)?(o(),r(a(N),{key:0,onPlayAll:W,onPlaySelected:a(D)},null,8,["onPlaySelected"])):p("",!0)]),default:u(()=>[b(" Genre: "),S("span",Se,y(decodeURIComponent(l.value)),1),a(t).length?(o(),r(a(V),{key:0,modelValue:a(d),"onUpdate:modelValue":s[0]||(s[0]=K=>le(d)?d.value=K:null)},null,8,["modelValue"])):p("",!0)]),_:2},[n.value?{name:"meta",fn:u(()=>[S("span",null,y(a(te)(n.value.song_count,"song")),1),S("span",null,y(z.value),1)]),key:"0"}:void 0]),1032,["layout"])):(o(),r(ve,{key:1})),U.value?(o(),r(me,{key:2})):(o(),r(a(R),{key:3,ref_key:"songList",ref:E,onSort:M,"onPress:enter":a(T),onScrollBreakpoint:a(F),onScrolledToEnd:g},null,8,["onPress:enter","onScrollBreakpoint"])),!a(t).length&&!c.value?(o(),r(ce,{key:4},{icon:u(()=>[w(J,{icon:a(se)},null,8,["icon"])]),default:u(()=>[b(" No songs in this genre. ")]),_:1})):p("",!0)])}}});export{Ve as default};
