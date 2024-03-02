import{v as J,j as $,a8 as D,a1 as K,n as v,a9 as W,z as p,A as b,G as e,a7 as j,B as o,Q as S,N as f,F as g,I as P,aa as n,ab as A,R as i,aH as d,Z as q,Y,P as B,O as T,aG as Q,b as Z,s as X,aM as ee,k as te,l as ae}from"./index.8f0bf197.js";import{k as le,l as se}from"./app.be92839b.js";import{u as oe}from"./useModal.8598f864.js";import{u as ne}from"./useOverlay.b8f8c136.js";import{B as x}from"./Btn.abe2bb59.js";import{_ as ie}from"./_plugin-vue_export-helper.cdc0426e.js";const re=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz & Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","Alternative Rock","Bass","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta","Top 40","Christian Rap","Pop/Funk","Jungle","Native US","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock","National Folk","Swing","Fast Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore Techno","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","SynthPop","Abstract","Art Rock","Baroque","Bhangra","Big beat","Breakbeat","Chillout","Downtempo","Dub","EBM","Eclectic","Electro","Electroclash","Emo","Experimental","Garage","Global","IDM","Illbient","Industro-Goth","Jam Band","Krautrock","Leftfield","Lounge","Math Rock","New Romantic","Nu-Breakz","Post-Punk","Post-Rock","Psytrance","Shoegaze","Space Rock","Trop Rock","World Music","Neoclassical","Audiobook","Audio Theatre","Neue Deutsche Welle","Podcast","Indie-Rock","G-Funk","Dubstep","Garage Rock","Psybient"],de=["onSubmit","onKeydown"],ce={class:"meta"},ue={class:"tabs"},me={class:"clear",role:"tablist"},pe=["aria-selected"],be=["aria-selected"],_e={class:"panes"},ye={id:"editSongPanelDetails","aria-labelledby":"editSongTabDetails",role:"tabpanel",tabindex:"0"},he={key:0,class:"form-row"},ge={class:"form-row cols"},ke=["placeholder"],ve=["placeholder"],Se={class:"form-row"},fe=["placeholder"],Pe={class:"form-row cols"},Re=["placeholder"],Ce=["placeholder"],we={class:"form-row cols"},De=["placeholder"],Ae={id:"genres"},Be=["value"],Te=["placeholder"],xe={key:0,id:"editSongPanelLyrics","aria-labelledby":"editSongTabLyrics",role:"tabpanel",tabindex:"0"},Fe={class:"form-row"},Ee=J({__name:"EditSongForm",emits:["close"],setup(Me,{emit:F}){const{showOverlay:E,hideOverlay:M}=ne(),{toastSuccess:G}=le(),{showConfirmDialog:N,showErrorDialog:V}=se(),{getFromContext:R}=oe(),s=R("songs"),m=$(R("initialTab")),r=s.length===1,u=r?"":"Leave unchanged",c=h=>r?!0:new Set(s.map(a=>a[h])).size===1,y=c("artist_name"),_=c("album_id"),I=_?s[0].album_cover||D:D,t=K({title:c("title")?s[0].title:"",album_name:_?s[0].album_name:"",artist_name:y?s[0].artist_name:"",album_artist_name:"",lyrics:r?s[0].lyrics:"",track:c("track")&&s[0].track!==0?s[0].track:null,disc:c("disc")&&s[0].disc!==0?s[0].disc:null,year:c("year")?s[0].year:null,genre:c("genre")?s[0].genre:""});_&&y&&s[0].album_artist_id===s[0].artist_id?t.album_artist_name="":t.album_artist_name=c("album_artist_name")?s[0].album_artist_name:"",r||(delete t.title,delete t.lyrics);const U=Object.assign({},t),z=v(()=>r?t.title:`${s.length} songs selected`),L=v(()=>y||t.artist_name?t.artist_name:"Mixed Artists"),H=v(()=>_||t.album_name?t.album_name:"Mixed Albums"),k=()=>F("close"),C=async()=>{if(Z.exports.isEqual(t,U)){k();return}await N("Discard all changes?")&&k()},O=async()=>{E();try{await X.update(s,t),G(`Updated ${ee(s,"song")}.`),te.emit("SONGS_UPDATED"),k()}catch(h){V("Something went wrong. Please try again.","Error"),ae.error(h)}finally{M()}};return(h,a)=>{const w=W("koel-focus");return p(),b("form",{onSubmit:g(O,["prevent"]),onKeydown:Q(C,["esc"])},[e("header",null,[e("span",{class:"cover",style:j({backgroundImage:`url(${o(I)})`})},null,4),e("div",ce,[e("h1",{class:S({mixed:!r})},f(z.value),3),e("h2",{"data-testid":"displayed-artist-name",class:S({mixed:!o(y)&&!t.artist_name})},f(L.value),3),e("h2",{"data-testid":"displayed-album-name",class:S({mixed:!o(_)&&!t.album_name})},f(H.value),3)])]),e("main",ue,[e("div",me,[e("button",{id:"editSongTabDetails","aria-selected":m.value==="details","aria-controls":"editSongPanelDetails",role:"tab",type:"button",onClick:a[0]||(a[0]=g(l=>m.value="details",["prevent"]))}," Details ",8,pe),r?(p(),b("button",{key:0,id:"editSongTabLyrics","aria-selected":m.value==="lyrics","aria-controls":"editSongPanelLyrics","data-testid":"edit-song-lyrics-tab",role:"tab",type:"button",onClick:a[1]||(a[1]=g(l=>m.value="lyrics",["prevent"]))}," Lyrics ",8,be)):P("",!0)]),e("div",_e,[n(e("div",ye,[r?(p(),b("div",he,[e("label",null,[i(" Title "),n(e("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>t.title=l),"data-testid":"title-input",name:"title",title:"Title",type:"text"},null,512),[[d,t.title],[w]])])])):P("",!0),e("div",ge,[e("label",null,[i(" Artist "),n(e("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>t.artist_name=l),placeholder:o(u),"data-testid":"artist-input",name:"artist",type:"text"},null,8,ke),[[d,t.artist_name]])]),e("label",null,[i(" Album Artist "),n(e("input",{"onUpdate:modelValue":a[4]||(a[4]=l=>t.album_artist_name=l),placeholder:o(u),"data-testid":"albumArtist-input",name:"album_artist",type:"text"},null,8,ve),[[d,t.album_artist_name]])])]),e("div",Se,[e("label",null,[i(" Album "),n(e("input",{"onUpdate:modelValue":a[5]||(a[5]=l=>t.album_name=l),placeholder:o(u),"data-testid":"album-input",name:"album",type:"text"},null,8,fe),[[d,t.album_name]])])]),e("div",Pe,[e("label",null,[i(" Track "),n(e("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>t.track=l),placeholder:o(u),"data-testid":"track-input",min:"1",name:"track",type:"number"},null,8,Re),[[d,t.track]])]),e("label",null,[i(" Disc "),n(e("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>t.disc=l),placeholder:o(u),"data-testid":"disc-input",min:"1",name:"disc",type:"number"},null,8,Ce),[[d,t.disc]])])]),e("div",we,[e("label",null,[i(" Genre "),n(e("input",{"onUpdate:modelValue":a[8]||(a[8]=l=>t.genre=l),placeholder:o(u),"data-testid":"genre-input",name:"genre",type:"text",list:"genres"},null,8,De),[[d,t.genre]]),e("datalist",Ae,[(p(!0),b(q,null,Y(o(re),l=>(p(),b("option",{key:l,value:l},null,8,Be))),128))])]),e("label",null,[i(" Year "),n(e("input",{"onUpdate:modelValue":a[9]||(a[9]=l=>t.year=l),placeholder:o(u),"data-testid":"year-input",name:"year",type:"number"},null,8,Te),[[d,t.year]])])])],512),[[A,m.value==="details"]]),r?n((p(),b("div",xe,[e("div",Fe,[n(e("textarea",{"onUpdate:modelValue":a[10]||(a[10]=l=>t.lyrics=l),"data-testid":"lyrics-input",name:"lyrics",title:"Lyrics"},null,512),[[d,t.lyrics],[w]])])],512)),[[A,m.value==="lyrics"]]):P("",!0)])]),e("footer",null,[B(x,{type:"submit"},{default:T(()=>[i("Update")]),_:1}),B(x,{class:"btn-cancel",white:"",onClick:g(C,["prevent"])},{default:T(()=>[i("Cancel")]),_:1},8,["onClick"])])],40,de)}}});const Le=ie(Ee,[["__scopeId","data-v-dfb3ad92"]]);export{Le as default};