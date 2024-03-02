import{v as ne,j as i,$ as A,a0 as w,aj as O,c as B,n as re,w as N,aN as P,s as ue,l as ie,k as de,a9 as me,z as l,A as o,C as b,I as d,O as _,B as e,P as p,ar as R,N as f,G as r,aM as ce,F as ve,R as g,aO as _e,aa as m,bl as V,Q as C,ab as D,Z as I,Y as T}from"./index.8f0bf197.js";import{d as pe}from"./downloadService.40931a22.js";import{l as fe,j as ye}from"./app.be92839b.js";import"./Btn.abe2bb59.js";import{u as be,S as Se,A as ge,a as ke}from"./index.f07e8060.js";import{S as he}from"./ScreenHeaderSkeleton.a1e2892b.js";import{S as Ae}from"./ArtistAlbumScreenTabs.b0203fe8.js";import{_ as we}from"./_plugin-vue_export-helper.cdc0426e.js";import"./useAuthorization.5beda362.js";import"./useSongMenuMethods.5f7dfc3e.js";import"./SoundBars.e7c8d9da.js";import"./useUpload.8e7c76aa.js";const Pe={key:0,id:"albumWrapper"},Ve=["href"],Ce={key:1,class:"nope"},De=["onClick"],Ie={class:"songs-pane"},Le={class:"albums-pane","data-testid":"albums-pane"},Ee={key:0,class:"as-list"},Oe={key:1,class:"text-secondary"},Be={key:1,class:"as-list"},Ne={key:0,class:"info-pane"},Re=ne({__name:"AlbumScreen",setup(Te){const t=i("Songs"),x=A(()=>w(()=>import("./AlbumInfo.26b205e3.js"),["assets/AlbumInfo.26b205e3.js","assets/AlbumInfo.51727455.css","assets/index.8f0bf197.js","assets/app.be92839b.js","assets/app.f853c32d.css","assets/Btn.abe2bb59.js","assets/Btn.535c40ae.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/mediaInfoService.83930c31.js","assets/index.f07e8060.js","assets/index.5481f61c.css","assets/useAuthorization.5beda362.js","assets/useSongMenuMethods.5f7dfc3e.js","assets/downloadService.40931a22.js","assets/SoundBars.e7c8d9da.js","assets/useUpload.8e7c76aa.js"])),F=A(()=>w(()=>import("./AlbumCard.1926e624.js"),["assets/AlbumCard.1926e624.js","assets/index.f07e8060.js","assets/index.5481f61c.css","assets/index.8f0bf197.js","assets/useAuthorization.5beda362.js","assets/app.be92839b.js","assets/app.f853c32d.css","assets/Btn.abe2bb59.js","assets/Btn.535c40ae.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/useSongMenuMethods.5f7dfc3e.js","assets/downloadService.40931a22.js","assets/SoundBars.e7c8d9da.js","assets/useUpload.8e7c76aa.js"])),U=A(()=>w(()=>import("./index.f07e8060.js").then(u=>u.i),["assets/index.f07e8060.js","assets/index.5481f61c.css","assets/index.8f0bf197.js","assets/useAuthorization.5beda362.js","assets/app.be92839b.js","assets/app.f853c32d.css","assets/Btn.abe2bb59.js","assets/Btn.535c40ae.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/useSongMenuMethods.5f7dfc3e.js","assets/downloadService.40931a22.js","assets/SoundBars.e7c8d9da.js","assets/useUpload.8e7c76aa.js"])),{showErrorDialog:j}=fe(),{getRouteParam:z,go:M,onScreenActivated:G}=ye(),k=i(),a=i(),y=i([]),c=i(!1);let v=i(),H=i();const{SongList:$,SongListControls:Q,ControlsToggle:W,headerLayout:Y,songList:Z,showingControls:S,isPhone:q,duration:J,sort:L,onPressEnter:K,playAll:X,playSelected:ee,applyFilter:ae,onScrollBreakpoint:le}=be(y),E=O(B.state,"use_last_fm"),te=O(B.state,"allow_download"),oe=re(()=>a.value?!R.isVarious(a.value.artist_id)&&!R.isUnknown(a.value.artist_id):!0),se=()=>pe.fromAlbum(a.value);return N(t,async u=>{if(u==="OtherAlbums"&&!v.value){const s=await P.fetchForArtist(a.value.artist_id);v.value=s.filter(h=>h.id!==a.value.id)}}),N(k,async u=>{if(!(!u||c.value)){a.value=void 0,H.value=void 0,v.value=void 0,t.value="Songs",c.value=!0;try{[a.value,y.value]=await Promise.all([P.resolve(u),ue.fetchForAlbum(u)]),L("track")}catch(s){ie.error(s),j("Failed to load album. Please try again.","Error")}finally{c.value=!1}}}),G("Album",()=>k.value=parseInt(z("id"))),de.on("SONGS_UPDATED",()=>P.byId(k.value)||M("albums")),(u,s)=>{const h=me("koel-overflow-fade");return a.value?(l(),o("section",Pe,[c.value?(l(),b(he,{key:0})):d("",!0),!c.value&&a.value?(l(),b(Se,{key:1,layout:y.value.length===0?"collapsed":e(Y)},{thumbnail:_(()=>[p(ge,{entity:a.value},null,8,["entity"])]),meta:_(()=>[oe.value?(l(),o("a",{key:0,href:`#/artist/${a.value.artist_id}`,class:"artist"},f(a.value.artist_name),9,Ve)):(l(),o("span",Ce,f(a.value.artist_name),1)),r("span",null,f(e(ce)(y.value,"song")),1),r("span",null,f(e(J)),1),te.value?(l(),o("a",{key:2,class:"download",role:"button",title:"Download all songs in album",onClick:ve(se,["prevent"])}," Download All ",8,De)):d("",!0)]),controls:_(()=>[y.value.length&&(!e(q)||e(S))?(l(),b(e(Q),{key:0,onFilter:e(ae),onPlayAll:e(X),onPlaySelected:e(ee)},null,8,["onFilter","onPlayAll","onPlaySelected"])):d("",!0)]),default:_(()=>[g(f(a.value.name)+" ",1),p(e(W),{modelValue:e(S),"onUpdate:modelValue":s[0]||(s[0]=n=>_e(S)?S.value=n:null)},null,8,["modelValue"])]),_:1},8,["layout"])):d("",!0),p(Ae,null,{header:_(()=>[r("label",{class:C({active:t.value==="Songs"})},[g(" Songs "),m(r("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>t.value=n),type:"radio",name:"tab",value:"Songs"},null,512),[[V,t.value]])],2),r("label",{class:C({active:t.value==="OtherAlbums"})},[g(" Other Albums "),m(r("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>t.value=n),type:"radio",name:"tab",value:"OtherAlbums"},null,512),[[V,t.value]])],2),E.value?(l(),o("label",{key:0,class:C({active:t.value==="Info"})},[g(" Information "),m(r("input",{"onUpdate:modelValue":s[3]||(s[3]=n=>t.value=n),type:"radio",name:"tab",value:"Info"},null,512),[[V,t.value]])],2)):d("",!0)]),default:_(()=>[m(r("div",Ie,[c.value?(l(),b(ke,{key:0})):(l(),b(e($),{key:1,ref_key:"songList",ref:Z,onSort:e(L),"onPress:enter":e(K),onScrollBreakpoint:e(le)},null,8,["onSort","onPress:enter","onScrollBreakpoint"]))],512),[[D,t.value==="Songs"]]),m(r("div",Le,[e(v)?(l(),o(I,{key:0},[e(v).length?m((l(),o("ul",Ee,[(l(!0),o(I,null,T(e(v),n=>(l(),o("li",{key:n.id},[p(e(F),{album:n,layout:"compact"},null,8,["album"])]))),128))])),[[h]]):(l(),o("p",Oe,"No other albums by "+f(a.value.artist_name)+" found in the library.",1))],64)):(l(),o("ul",Be,[(l(),o(I,null,T(12,n=>r("li",{key:n},[p(e(U),{layout:"compact"})])),64))]))],512),[[D,t.value==="OtherAlbums"]]),E.value&&a.value?m((l(),o("div",Ne,[p(e(x),{album:a.value,mode:"full"},null,8,["album"])],512)),[[D,t.value==="Info"]]):d("",!0)]),_:1})])):d("",!0)}}});const Ze=we(Re,[["__scopeId","data-v-247f0886"]]);export{Ze as default};
