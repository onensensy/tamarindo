import{S as E,c as T,e as x}from"./index.f07e8060.js";import{b,v as A,j as Y,m as B,w as C,k as R,bE as O,y as k,z as M,A as N,P as d,O as l,G as I,R as h,N as D,B as L,a5 as $,a6 as U}from"./index.8f0bf197.js";import{p as q,C as Q}from"./app.be92839b.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import"./useAuthorization.5beda362.js";import"./Btn.abe2bb59.js";import"./useSongMenuMethods.5f7dfc3e.js";import"./downloadService.40931a22.js";import"./SoundBars.e7c8d9da.js";import"./useUpload.8e7c76aa.js";var V={},w;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/w=function(){var e={},a={};return e.on=function(t,o){var n={name:t,handler:o};return a[t]=a[t]||[],a[t].unshift(n),n},e.off=function(t){var o=a[t.name].indexOf(t);o!==-1&&a[t.name].splice(o,1)},e.trigger=function(t,o){var n=a[t],r;if(n)for(r=n.length;r--;)n[r].handler(o)},e};var z=w,f={},G=function(a,t,o){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");typeof t=="function"&&(o=t,t={}),t=t||{},o=o||function(){},r.type=t.type||"text/javascript",r.charset=t.charset||"utf8",r.async="async"in t?!!t.async:!0,r.src=a,t.attrs&&H(r,t.attrs),t.text&&(r.text=""+t.text);var i="onload"in r?g:J;i(r,o),r.onload||g(r,o),n.appendChild(r)};function H(e,a){for(var t in a)e.setAttribute(t,a[t])}function g(e,a){e.onload=function(){this.onerror=this.onload=null,a(null,e)},e.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+this.src),e)}}function J(e,a){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,a(null,e))}}Object.defineProperty(f,"__esModule",{value:!0});var K=G,W=X(K);function X(e){return e&&e.__esModule?e:{default:e}}f.default=function(){var e=new Promise(function(a){var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){t&&t(),a(window.YT)}});return(0,W.default)("//www.youtube.com/iframe_api"),e};var v={},y={};Object.defineProperty(y,"__esModule",{value:!0});y.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","clearVideo","getVideoBytesLoaded","getVideoBytesTotal","getVideoLoadedFraction","getVideoStartBytes","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","getPlaylistId","loadModule","unloadModule","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getDebugText","getVideoData","addCueRange","removeCueRange","getApiInterface","showVideoInfo","hideVideoInfo","G","C","R","aa","$","Z","getVideoEmbedCode","getOptions","getOption","Y","X","addEventListener","destroy","A","P","J","setSize","getIframe"];var p={};Object.defineProperty(p,"__esModule",{value:!0});p.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange"];Object.defineProperty(v,"__esModule",{value:!0});var Z=b.exports,c=_(Z),j=y,ee=_(j),te=p,ae=_(te);function _(e){return e&&e.__esModule?e:{default:e}}var m={};m.proxyEvents=function(e){var a={};return c.default.forEach(ae.default,function(t){var o="on"+c.default.upperFirst(t);a[o]=function(n){e.trigger(t,n)}}),a};m.promisifyPlayer=function(e){var a={};return c.default.forEach(ee.default,function(t){a[t]=function(){for(var o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];return e.then(function(i){return i[t].apply(i,n)})}}),a};v.default=m;Object.defineProperty(V,"__esModule",{value:!0});var re=b.exports,oe=u(re),ne=z,ie=u(ne),ue=f,de=u(ue),le=v,P=u(le);function u(e){return e&&e.__esModule?e:{default:e}}var s=void 0,se=V.default=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=void 0;s||(s=(0,de.default)()),t={};var o=(0,ie.default)();if(a.events)throw new Error("Event handlers cannot be overwritten.");if(oe.default.isString(e)&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');a.events=P.default.proxyEvents(o);var n=new Promise(function(r){s.then(function(i){return new i.Player(e,a)}).then(function(i){o.on("ready",function(){r(i)})})});return t=P.default.promisifyPlayer(n),t.on=o.on,t.off=o.off,t};const ce=e=>($("data-v-cd9d8bbf"),e=e(),U(),e),fe={id:"youtubeWrapper"},ve={id:"player"},ye=ce(()=>I("span",{class:"d-block instruction"},"Start a video playback from the right sidebar.",-1)),pe=A({__name:"YouTubeScreen",setup(e){let a;const t=Y("YouTube Video"),o=()=>(a||(a=se("player",{width:"100%",height:"100%"}),a.on("stateChange",({data:r})=>r===1&&q.pause())),a),n=B(Q);return C(()=>{var r;return(r=n.value)==null?void 0:r.playback_state},r=>r==="Playing"&&(a==null?void 0:a.pauseVideo())),R.on("PLAY_YOUTUBE_VIDEO",r=>{t.value=r.title,O(o(),i=>{i.loadVideoById(r.id),i.playVideo()})}),(r,i)=>{const S=k("Icon");return M(),N("section",fe,[d(E,{layout:"collapsed"},{default:l(()=>[h(D(t.value),1)]),_:1}),I("div",ve,[d(T,{"data-testid":"youtube-placeholder"},{icon:l(()=>[d(S,{icon:L(x)},null,8,["icon"])]),default:l(()=>[h(" YouTube videos will be played here. "),ye]),_:1})])])}}});const Ee=F(pe,[["__scopeId","data-v-cd9d8bbf"]]);export{Ee as default};
