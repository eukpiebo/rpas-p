/*!
   JW Player version 8.3.5
   Copyright (c) 2018, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.3.5/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[0],{112:function(e,t,i){"use strict";t.a={attachMedia:function(){this.eventsOn_()},detachMedia:function(){return this.eventsOff_(),this.video}}},113:function(e,t,i){"use strict";var n=i(6),r=i(21),a=i(71),s={container:null,volume:function(e){e=Math.max(Math.min(e/100,1),0),this.video.volume=e},mute:function(e){this.video.muted=!!e,this.video.muted||this.video.removeAttribute("muted")},resize:function(e,t,i){var a=this.video,s=a.videoWidth,o=a.videoHeight;if(e&&t&&s&&o){var c={objectFit:"",width:"",height:""};if("uniform"===i){var u=e/t,d=s/o,l=Math.abs(u-d);l<.09&&l>.0025&&(c.objectFit="fill",i="exactfit")}if(n.Browser.ie||n.OS.iOS&&n.OS.version.major<9||n.Browser.androidNative)if("uniform"!==i){c.objectFit="contain";var h=e/t,f=s/o,v=1,g=1;"none"===i?v=g=h>f?Math.ceil(100*o/t)/100:Math.ceil(100*s/e)/100:"fill"===i?v=g=h>f?h/f:f/h:"exactfit"===i&&(h>f?(v=h/f,g=1):(v=1,g=f/h)),Object(r.e)(a,"matrix("+v.toFixed(2)+", 0, 0, "+g.toFixed(2)+", 0, 0)")}else c.top=c.left=c.margin="",Object(r.e)(a,"");Object(r.d)(a,c)}},getContainer:function(){return this.container},setContainer:function(e){this.container=e,this.video.parentNode!==e&&e.appendChild(this.video)},remove:function(){this.stop(),this.destroy();var e=this.container;e&&e===this.video.parentNode&&e.removeChild(this.video)},atEdgeOfLiveStream:function(){if(!this.isLive())return!1;return Object(a.a)(this.video.buffered)-this.video.currentTime<=2}};t.a=s},114:function(e,t,i){"use strict";var n=i(2),r=i(9),a={canplay:function(){this.trigger(n.z)},play:function(){this.stallTime=-1,this.video.paused||this.state===n.Ka||this.setState(n.Ia)},loadedmetadata:function(){var e={duration:this.getDuration(),height:this.video.videoHeight,width:this.video.videoWidth,seekRange:this.getSeekRange()},t=this.drmUsed;t&&(e.drm=t),this.trigger(n.F,e)},timeupdate:function(){var e=this.getCurrentTime(),t=this.getDuration();if(!isNaN(t)){this.seeking||this.video.paused||this.state!==n.La&&this.state!==n.Ia||this.stallTime===this.getCurrentTime()||(this.stallTime=-1,this.setState(n.Ka));var i={position:e,duration:t,currentTime:this.video.currentTime,seekRange:this.getSeekRange(),metadata:{currentTime:this.video.currentTime}};if(this.getPtsOffset){var r=this.getPtsOffset();r>=0&&(i.metadata.mpegts=r+e)}(this.state===n.Ka||this.seeking)&&this.trigger(n.M,i)}},click:function(e){this.trigger(n.j,e)},volumechange:function(){var e=this.video;this.trigger(n.P,{volume:Math.round(100*e.volume)}),this.trigger(n.G,{mute:e.muted})},seeked:function(){this.seeking&&(this.seeking=!1,this.trigger(n.L))},playing:function(){-1===this.stallTime&&this.setState(n.Ka),this.trigger(n.Aa)},pause:function(){this.state!==n.Fa&&(this.video.ended||this.video.error||this.video.currentTime!==this.video.duration&&this.setState(n.Ja))},progress:function(){var e=this.getDuration();if(!(e<=0||e===1/0)){var t=this.video.buffered;if(t&&0!==t.length){var i=r.a.between(t.end(t.length-1)/e,0,1);this.trigger(n.y,{bufferPercent:100*i,position:this.getCurrentTime(),duration:e,currentTime:this.video.currentTime,seekRange:this.getSeekRange()})}}},ratechange:function(){this.trigger(n.J,{playbackRate:this.video.playbackRate})},ended:function(){this.videoHeight=0,this.streamBitrate=0,this.state!==n.Ha&&this.state!==n.Fa&&this.trigger(n.A)},loadeddata:function(){this.renderNatively&&this.setTextTracks(this.video.textTracks)},error:function(){var e=this.video.error&&this.video.error.code||-1,t={1:"Unknown operation aborted",2:"Unknown network error",3:"Unknown decode error",4:"File could not be played"}[e]||"Unknown";this.trigger(n.B,{code:e,message:"Error loading media: "+t})}};t.a=a},115:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(40),a=i(2),s=i(72),o=i(6),c=i(54),u=i(114),d=i(113),l=i(112),h=i(21),f=i(9),v=i(10),g=i(50),T=i(5),k=i(69),b=i(71),m=i(62),y=window.clearTimeout,p=120,x="html5";function _(e,t){Object.keys(e).forEach(function(i){t.removeEventListener(i,e[i])})}function w(e,t,i){this.state=a.Ha,this.seeking=!1;var r,g=this,w={progress:function(){u.a.progress.call(g),ne()},timeupdate:function(){S!==C.currentTime&&(V(C.currentTime),u.a.timeupdate.call(g)),ne(),o.Browser.ie&&K()},resize:K,ended:function(){N=-1,re(),u.a.ended.call(g)},loadedmetadata:function(){var e=g.getDuration();D&&e===1/0&&(e=0);var t={duration:e,height:C.videoHeight,width:C.videoWidth};g.trigger(a.F,t),K()},durationchange:function(){D||u.a.progress.call(g)},loadeddata:function(){var e;u.a.loadeddata.call(g),function(e){if(M=null,!e)return;if(e.length){for(var t=0;t<e.length;t++)if(e[t].enabled){P=t;break}-1===P&&(e[P=0].enabled=!0),M=Object(n.A)(e,function(e){var t={name:e.label||e.language,language:e.language};return t})}g.addTracksListener(e,"change",Y),M&&g.trigger("audioTracks",{currentTrack:P,tracks:M})}(C.audioTracks),e=g.getDuration(),E&&-1!==E&&e&&e!==1/0&&g.seek(E),K()},canplay:function(){j=!0,D||ie(),o.Browser.ie&&9===o.Browser.version.major&&g.setTextTracks(g._textTracks),u.a.canplay.call(g)},seeking:function(){var e=null!==L?L:g.getCurrentTime(),t=S;V(e),L=null,E=0,g.seeking=!0,g.trigger(a.K,{position:t,offset:e})},seeked:function(){u.a.seeked.call(g)},waiting:function(){g.seeking?g.setState(a.Ia):g.state===a.Ka&&(g.atEdgeOfLiveStream()&&g.setPlaybackRate(1),g.stallTime=g.getCurrentTime(),g.setState(a.La))},webkitbeginfullscreen:function(e){R=!0,Z(e)},webkitendfullscreen:function(e){R=!1,Z(e)}};Object.keys(u.a).forEach(function(e){if(!w[e]){var t=u.a[e];w[e]=function(e){t.call(g,e)}}}),Object(n.j)(this,T.a,d.a,l.a,k.a,{renderNatively:(r=t.renderCaptionsNatively,!(!o.OS.iOS&&!o.Browser.safari)||r&&o.Browser.chrome),eventsOn_:function(){var e,t;e=w,t=C,Object.keys(e).forEach(function(i){t.removeEventListener(i,e[i]),t.addEventListener(i,e[i])})},eventsOff_:function(){_(w,C)},detachMedia:function(){return l.a.detachMedia.call(g),re(),this.removeTracksListener(C.textTracks,"change",this.textTrackChangeHandler),this.disableTextTrack(),C},attachMedia:function(){l.a.attachMedia.call(g),j=!1,this.seeking=!1,C.loop=!1,this.enableTextTrack(),this.renderNatively&&this.setTextTracks(this.video.textTracks),this.addTracksListener(C.textTracks,"change",this.textTrackChangeHandler)},isLive:function(){return C.duration===1/0}});var C=i,O={level:{}},B=null!==t.liveTimeout?t.liveTimeout:3e4,j=!1,E=0,L=null,S=null,I=void 0,N=-1,R=!1,A=f.a.noop,M=null,P=-1,H=-1,U=!1,F=null,D=!1;function K(){var e=O.level;if(e.width!==C.videoWidth||e.height!==C.videoHeight){if(!C.videoWidth&&!te()||-1===N)return;e.width=C.videoWidth,e.height=C.videoHeight,ie(),O.reason=O.reason||"auto",O.mode="hls"===I[N].type?"auto":"manual",O.bitrate=0,e.index=N,e.label=I[N].label,g.trigger(a.O,O),O.reason=""}}function V(e){S=q(e)}function q(e){return g.getDuration()<0&&(e-=$()),e}function W(e){var t=void 0;return"array"===f.a.typeOf(e)&&e.length>0&&(t=e.map(function(e,t){return{label:e.label||t}})),t}function X(e){I=e,N=function(e){var i=Math.max(0,N),n=t.qualityLabel;if(e)for(var r=0;r<e.length;r++)if(e[r].default&&(i=r),n&&e[r].label===n)return r;O.reason="initial choice",O.level.width&&O.level.height||(O.level={});return i}(e)}function z(){return C.duration===1/0&&C.paused&&C.played&&C.played.length&&C.load(),C.play()||Object(m.a)(C)}function J(e){E=0,re();var t=C.src,i=document.createElement("source");i.src=I[N].file,i.src!==t?(Q(I[N]),t&&C.load()):0===e&&C.currentTime>0&&(E=-1,g.seek(e)),e>0&&C.currentTime!==e&&g.seek(e);var n=W(I);n&&g.trigger(a.D,{levels:n,currentQuality:N}),I.length&&"hls"!==I[0].type&&g.sendMediaType(I)}function Q(e){M=null,P=-1,O.reason||(O.reason="initial choice",O.level={}),j=!1;var t=document.createElement("source");t.src=e.file,C.src!==t.src&&(C.src=e.file)}function G(){for(var e=C.seekable?C.seekable.length:0,t=1/0;e--;)t=Math.min(t,C.seekable.start(e));return t}function $(){for(var e=C.seekable?C.seekable.length:0,t=0;e--;)t=Math.max(t,C.seekable.end(e));return t}function Y(){for(var e=-1,t=0;t<C.audioTracks.length;t++)if(C.audioTracks[t].enabled){e=t;break}ee(e)}function Z(e){g.trigger("fullscreenchange",{target:e.target,jwstate:R})}function ee(e){C&&C.audioTracks&&M&&e>-1&&e<C.audioTracks.length&&e!==P&&(C.audioTracks[P].enabled=!1,P=e,C.audioTracks[P].enabled=!0,g.trigger("audioTrackChanged",{currentTrack:P,tracks:M}))}function te(){return 0===C.videoHeight&&!((o.OS.iOS||o.Browser.safari)&&C.readyState<2)}function ie(){if("hls"===I[0].type){var e=te()?"audio":"video";g.trigger(a.N,{mediaType:e})}}function ne(){if(0!==B){var e=Object(b.a)(C.buffered);g.isLive()&&e&&F===e?-1===H&&(H=setTimeout(function(){U=!0,function(){if(U&&g.atEdgeOfLiveStream())return g.trigger(a.B,{message:"The live stream is either down or has ended"}),!0}()},B)):(re(),U=!1),F=e}}function re(){y(H),H=-1}this.isSDK=!!t.sdkplatform,this.video=C,this.supportsPlaybackRate=!0,g.getCurrentTime=function(){return q(C.currentTime)},g.getDuration=function(){var e=C.duration;if(D&&e===1/0&&0===C.currentTime||isNaN(e))return 0;var t=$();if(g.isLive()&&t){var i=t-G();i!==1/0&&i>p&&(e=-i)}return e},g.getSeekRange=function(){var e={start:0,end:g.getDuration()},t=this.video.seekable;return t.length&&(e.end=Math.max(t.end(0),t.end(t.length-1)),e.start=Math.min(t.start(0),t.start(t.length-1))),e},this.stop=function(){re(),C&&(g.disableTextTrack(),C.removeAttribute("preload"),C.removeAttribute("src"),Object(v.g)(C),Object(h.d)(C,{objectFit:""}),N=-1,!o.Browser.msie&&"load"in C&&C.load()),this.clearTracks(),o.Browser.ie&&C.pause(),this.setState(a.Ha)},this.destroy=function(){A=f.a.noop,_(w,C),this.removeTracksListener(C.audioTracks,"change",Y),this.removeTracksListener(C.textTracks,"change",g.textTrackChangeHandler),this.off()},this.init=function(e){X(e.sources);var t=I[N];(D=Object(c.a)(t))&&(g.supportsPlaybackRate=!1,w.waiting=f.a.noop),g.eventsOn_(),I.length&&"hls"!==I[0].type&&this.sendMediaType(I),O.reason=""},this.preload=function(e){X(e.sources);var t=I[N],i=t.preload||"metadata";"none"!==i&&(C.setAttribute("preload",i),Q(t))},this.load=function(e){X(e.sources),J(e.starttime,e.duration),this.setupSideloadedTracks(e.tracks)},this.play=function(){return A(),z()},this.pause=function(){re(),A=function(){if(C.paused&&C.currentTime&&g.isLive()){var e=$(),t=e-G(),i=t<p,n=e-C.currentTime;i&&e&&(n>15||n<0)&&(L=Math.max(e-10,e-t),V(C.currentTime),C.currentTime=L)}},C.pause()},this.seek=function(e){if(e<0&&(e+=G()+$()),j||(j=!!$()),j){E=0;try{g.seeking=!0,L=e,V(C.currentTime),C.currentTime=e}catch(t){g.seeking=!1,E=e}}else E=e,o.Browser.firefox&&C.paused&&z()},this.setVisibility=function(e){(e=!!e)||o.OS.android?Object(h.d)(g.container,{visibility:"visible",opacity:1}):Object(h.d)(g.container,{visibility:"",opacity:0})},this.setFullscreen=function(e){if(e=!!e)return!(f.a.tryCatch(function(){var e=C.webkitEnterFullscreen||C.webkitEnterFullScreen;e&&e.apply(C)})instanceof f.a.Error)&&g.getFullScreen();var t=C.webkitExitFullscreen||C.webkitExitFullScreen;return t&&t.apply(C),e},g.getFullScreen=function(){return R||!!C.webkitDisplayingFullscreen},this.setCurrentQuality=function(e){if(N!==e&&e>=0&&I&&I.length>e){N=e,O.reason="api",O.level={},this.trigger(a.E,{currentQuality:e,levels:W(I)}),t.qualityLabel=I[e].label;var i=C.currentTime||0;g.getDuration();J(i),z()}},this.setPlaybackRate=function(e){C.playbackRate=C.defaultPlaybackRate=e},this.getPlaybackRate=function(){return C.playbackRate},this.getCurrentQuality=function(){return N},this.getQualityLevels=function(){return Array.isArray(I)?I.map(function(e){return Object(s.a)(e)}):[]},this.getName=function(){return{name:x}},this.setCurrentAudioTrack=ee,this.getAudioTracks=function(){return M||[]},this.getCurrentAudioTrack=function(){return P}}Object(n.j)(w.prototype,g.a),w.getName=function(){return{name:"html5"}};var C=w,O=i(45),B=i(68),j=function(e,t,i){C.call(this,e,t,i);var s=this,o=s.init,c=s.load,u=s.destroy,d=s.renderNatively;function l(e){Object(B.a)([e])?s.renderNatively=!1:s.renderNatively=d}function h(e){var t=e.sources[0];if(!s.fairplay||!Object.is(s.fairplay.source,t)){var i=t.drm;i&&i.fairplay?(s.fairplay=Object(n.j)({},{certificateUrl:"",processSpcUrl:"",licenseResponseType:"arraybuffer",licenseRequestHeaders:[],licenseRequestMessage:function(e){return e},licenseRequestFilter:function(){},licenseResponseFilter:function(){},extractContentId:function(e){return e.split("skd://")[1]},extractKey:function(e){return new Uint8Array(e)}},i.fairplay),s.fairplay.source=t,s.fairplay.destroy=function(){L(s.video,"webkitneedkey",f);var e=this.session;e&&(L(e,"webkitkeymessage",v),L(e,"webkitkeyerror",y)),s.fairplay=null},E(s.video,"webkitneedkey",f)):s.fairplay&&s.fairplay.destroy()}}function f(e){var t=e.target,i=e.initData;if(t.webkitKeys||t.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")),!t.webkitKeys)throw new Error("Could not create MediaKeys");var n=s.fairplay;n.initData=i,Object(O.a)(n.certificateUrl,function(e){var r=new Uint8Array(e.response),a=n.extractContentId(S(i));"string"==typeof a&&(a=function(e){for(var t=new ArrayBuffer(2*e.length),i=new Uint16Array(t),n=0,r=e.length;n<r;n++)i[n]=e.charCodeAt(n);return i}(a));var s=function(e,t,i){var n=0,r=new ArrayBuffer(e.byteLength+4+t.byteLength+4+i.byteLength),a=new DataView(r);new Uint8Array(r,n,e.byteLength).set(e),n+=e.byteLength,a.setUint32(n,t.byteLength,!0),n+=4;var s=new Uint16Array(r,n,t.length);return s.set(t),n+=s.byteLength,a.setUint32(n,i.byteLength,!0),n+=4,new Uint8Array(r,n,i.byteLength).set(i),new Uint8Array(r,0,r.byteLength)}(i,a,r),o=t.webkitKeys.createSession("video/mp4",s);if(!o)throw new Error("Could not create key session");E(o,"webkitkeymessage",v),E(o,"webkitkeyerror",y),n.session=o},m,{responseType:"arraybuffer"})}function v(e){var t=s.fairplay,i=e.target,n=e.message,r=new XMLHttpRequest;r.responseType=t.licenseResponseType,r.addEventListener("load",T,!1),r.addEventListener("error",p,!1);var a="";a="function"==typeof t.processSpcUrl?t.processSpcUrl(S(t.initData)):t.processSpcUrl,r.open("POST",a,!0),r.body=t.licenseRequestMessage(n,i),r.headers={},[].concat(t.licenseRequestHeaders||[]).forEach(function(e){r.setRequestHeader(e.name,e.value)});var o=t.licenseRequestFilter.call(e.target,r,t);o&&"function"==typeof o.then?o.then(function(){g(r)}):g(r)}function g(e){Object.keys(e.headers).forEach(function(t){e.setRequestHeader(t,e.headers[t])}),e.send(e.body)}function T(e){var t=s.fairplay,i=e.target,n={};(i.getAllResponseHeaders()||"").trim().split(/[\r\n]+/).forEach(function(e){var t=e.split(": "),i=t.shift();n[i]=t.join(": ")});var r={data:i.response,headers:n},a=t.licenseResponseFilter.call(e.target,r,t);a&&"function"==typeof a.then?a.then(function(){k(r.data)}):k(r.data)}function k(e){var t=s.fairplay.extractKey(e);"function"==typeof t.then?t.then(b):b(t)}function b(e){var t=s.fairplay.session,i=e;"string"==typeof i&&(i=function(e){for(var t=Object(r.a)(e),i=t.length,n=new Uint8Array(new ArrayBuffer(i)),a=0;a<i;a++)n[a]=t.charCodeAt(a);return n}(i)),t.update(i)}function m(){s.trigger(a.B,{message:"Error loading media: Failed to retrieve the server certificate"})}function y(){s.trigger(a.B,{message:"Error loading media: Decryption key error was encountered"})}function p(){s.trigger(a.B,{message:"Error loading media: The license request failed"})}this.init=function(e){h(e),l(e),o.call(this,e)},this.load=function(e){h(e),l(e),c.call(this,e)},this.destroy=function(e){this.fairplay&&this.fairplay.destroy(),u.call(this,e)}};function E(e,t,i){L(e,t,i),e.addEventListener(t,i,!1)}function L(e,t,i){e&&e.removeEventListener(t,i,!1)}function S(e){var t=new Uint16Array(e.buffer);return String.fromCharCode.apply(null,t)}Object(n.j)(j.prototype,C.prototype),j.getName=C.getName;t.default=j},56:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(1);function r(e){var t=[],i=(e=Object(n.h)(e)).split("\r\n\r\n");1===i.length&&(i=e.split("\n\n"));for(var r=0;r<i.length;r++)if("WEBVTT"!==i[r]){var s=a(i[r]);s.text&&t.push(s)}return t}function a(e){var t={},i=e.split("\r\n");1===i.length&&(i=e.split("\n"));var r=1;if(i[0].indexOf(" --\x3e ")>0&&(r=0),i.length>r+1&&i[r+1]){var a=i[r],s=a.indexOf(" --\x3e ");s>0&&(t.begin=Object(n.f)(a.substr(0,s)),t.end=Object(n.f)(a.substr(s+5)),t.text=i.slice(r+1).join("\r\n"))}return t}},57:function(e,t,i){"use strict";var n=window.VTTCue;function r(e){if("string"!=typeof e)return!1;return!!{start:!0,middle:!0,end:!0,left:!0,right:!0}[e.toLowerCase()]&&e.toLowerCase()}if(!n){(n=function(e,t,i){var n=this;n.hasBeenReset=!1;var a="",s=!1,o=e,c=t,u=i,d=null,l="",h=!0,f="auto",v="start",g="auto",T=100,k="middle";Object.defineProperty(n,"id",{enumerable:!0,get:function(){return a},set:function(e){a=""+e}}),Object.defineProperty(n,"pauseOnExit",{enumerable:!0,get:function(){return s},set:function(e){s=!!e}}),Object.defineProperty(n,"startTime",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");o=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"endTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"text",{enumerable:!0,get:function(){return u},set:function(e){u=""+e,this.hasBeenReset=!0}}),Object.defineProperty(n,"region",{enumerable:!0,get:function(){return d},set:function(e){d=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"vertical",{enumerable:!0,get:function(){return l},set:function(e){var t=function(e){return"string"==typeof e&&!!{"":!0,lr:!0,rl:!0}[e.toLowerCase()]&&e.toLowerCase()}(e);if(!1===t)throw new SyntaxError("An invalid or illegal string was specified.");l=t,this.hasBeenReset=!0}}),Object.defineProperty(n,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(n,"line",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");f=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");v=t,this.hasBeenReset=!0}}),Object.defineProperty(n,"position",{enumerable:!0,get:function(){return g},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"size",{enumerable:!0,get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}}),Object.defineProperty(n,"align",{enumerable:!0,get:function(){return k},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");k=t,this.hasBeenReset=!0}}),n.displayState=void 0}).prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)}}t.a=n},58:function(e,t,i){"use strict";var n=i(57),r=i(11),a=i(9),s=i(3),o=i(56),c=i(1);function u(e){e||d()}function d(){throw new Error("Invalid DFXP file")}function l(e,t,n){e.xhr=a.a.ajax(e.file,function(a){!function(e,t,n,a){var l=e.responseXML?e.responseXML.firstChild:null,h=void 0,v=void 0;if(l)for("xml"===Object(s.b)(l)&&(l=l.nextSibling);l.nodeType===l.COMMENT_NODE;)l=l.nextSibling;try{if(l&&"tt"===Object(s.b)(l))h=function(e){u(e);var t=[],i=e.getElementsByTagName("p"),n=30,r=e.getElementsByTagName("tt");if(r&&r[0]){var a=parseFloat(r[0].getAttribute("ttp:frameRate"));isNaN(a)||(n=a)}u(i),i.length||(i=e.getElementsByTagName("tt:p")).length||(i=e.getElementsByTagName("tts:p"));for(var s=0;s<i.length;s++){for(var o=i[s],l=o.getElementsByTagName("br"),h=0;h<l.length;h++){var f=l[h];f.parentNode.replaceChild(e.createTextNode("\r\n"),f)}var v=o.innerHTML||o.textContent||o.text||"",g=Object(c.h)(v).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(g){var T=o.getAttribute("begin"),k=o.getAttribute("dur"),b=o.getAttribute("end"),m={begin:Object(c.f)(T,n),text:g};b?m.end=Object(c.f)(b,n):k&&(m.end=m.begin+Object(c.f)(k,n)),t.push(m)}}return t.length||d(),t}(e.responseXML),v=f(h),delete t.xhr,n(v);else{var g=e.responseText;g.indexOf("WEBVTT")>=0?i.e(15).then(function(e){return i(121).default}.bind(null,i)).catch(Object(r.b)(131)).then(function(e){var i=new e(window);v=[],i.oncue=function(e){v.push(e)},i.onflush=function(){delete t.xhr,n(v)},i.parse(g)}).catch(function(e){delete t.xhr,a(e)}):(h=Object(o.a)(g),v=f(h),delete t.xhr,n(v))}}catch(e){delete t.xhr,a(e)}}(a,e,t,n)},n)}function h(e){e&&e.forEach(function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})}function f(e){return e.map(function(e){return new n.a(e.begin,e.end,e.text)})}i.d(t,"c",function(){return l}),i.d(t,"a",function(){return h}),i.d(t,"b",function(){return f})},60:function(e,t,i){"use strict";function n(e,t){var i=e.kind||"cc";return e.default||e.defaulttrack?"default":e._id||e.file||i+t}function r(e,t){var i=e.label||e.name||e.language;return i||(i="Unknown CC",(t+=1)>1&&(i+=" ["+t+"]")),{label:i,unknownCount:t}}i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},62:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(4);function r(e){return new n.a(function(t,i){if(e.paused)return i(new Error("Play refused."));var n=function(){e.removeEventListener("play",r),e.removeEventListener("playing",a),e.removeEventListener("pause",a),e.removeEventListener("abort",a),e.removeEventListener("error",a)},r=function(){e.addEventListener("playing",a),e.addEventListener("abort",a),e.addEventListener("error",a),e.addEventListener("pause",a)},a=function(e){n(),"playing"===e.type?t():i(new Error('The play() request was interrupted by a "'+e.type+'" event.'))};e.addEventListener("play",r)})}},65:function(e,t,i){"use strict";i.d(t,"c",function(){return r}),i.d(t,"b",function(){return a}),i.d(t,"a",function(){return s});var n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function r(e,t){for(var i=e.length,n=void 0,r=void 0,a=void 0,s="",o=t||0;o<i;)if(0!==(n=e[o++])&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(n);break;case 12:case 13:r=e[o++],s+=String.fromCharCode((31&n)<<6|63&r);break;case 14:r=e[o++],a=e[o++],s+=String.fromCharCode((15&n)<<12|(63&r)<<6|(63&a)<<0)}return s}function a(e){var t=function(e){for(var t="0x",i=0;i<e.length;i++)e[i]<16&&(t+="0"),t+=e[i].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var i=new Uint8Array(t.data),s=i.length;t={value:{key:"",data:""}};for(var o=10;o<14&&o<i.length&&0!==i[o];)t.value.key+=String.fromCharCode(i[o]),o++;var c=19,u=i[c];3!==u&&0!==u||(u=i[++c],s--);var d=0;if(1!==u&&2!==u)for(var l=c+1;l<s;l++)if(0===i[l]){d=l-c;break}if(d>0){var h=r(i.subarray(c,c+=d),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===h){var f=1&a(i.subarray(c,c+=4)),v=a(i.subarray(c,c+=4))+(f?4294967296:0);t.value.data=v}else t.value.data=r(i,c+1);t.value.info=h}else t.value.info=h,t.value.data=r(i,c+1)}else{var g=i[c];t.value.data=1===g||2===g?function(e,t){for(var i=e.length-1,n="",r=t||0;r<i;)254===e[r]&&255===e[r+1]||(n+=String.fromCharCode((e[r]<<8)+e[r+1])),r+=2;return n}(i,c+1):r(i,c+1)}}if(n.hasOwnProperty(t.value.key)&&(e[n[t.value.key]]=t.value.data),t.value.info){var T=e[t.value.key];T!==Object(T)&&(T={},e[t.value.key]=T),T[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e},{})}},68:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return a});var n=i(11);function r(e){return window.WebGLRenderingContext&&e.some(function(e){return e.stereomode&&e.stereomode.length>0})}function a(e,t){return i.e(12).then(function(n){var r=new(0,i(70).default)(e,t);e.addPlugin("vr",r)}.bind(null,i)).catch(Object(n.b)(132)).catch(function(t){e.trigger("error",t)})}},69:function(e,t,i){"use strict";var n=i(58),r=i(60),a=i(65),s=i(6),o=i(2),c=i(0),u={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_activeCuePosition:null,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0},addTracksListener:function(e,t,i){if(!e)return;if(d(e,t,i),this.instreamMode)return;e.addEventListener?e.addEventListener(t,i):e["on"+t]=i},clearTracks:function(){Object(n.a)(this._itemTracks);var e=this._tracksById&&this._tracksById.nativemetadata;(this.renderNatively||e)&&(f(this.renderNatively,this.video.textTracks),e&&(e.oncuechange=null));this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCuePosition=null,this.renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),f(this.renderNatively,this.video.textTracks))},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];if(e){e.mode="disabled";var t=e._id;t&&0===t.indexOf("nativecaptions")&&(e.mode="hidden")}}},enableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode="showing")}},getSubtitlesTrack:function(){return this._currentTextTrackIndex},removeTracksListener:d,addTextTracks:l,setTextTracks:function(e){if(this._currentTextTrackIndex=-1,!e)return;this._textTracks?(this._unknownCount=0,this._textTracks=this._textTracks.filter(function(e){var t=e._id;return this.renderNatively&&t&&0===t.indexOf("nativecaptions")?(delete this._tracksById[t],!1):(e.name&&0===e.name.indexOf("Unknown")&&this._unknownCount++,!0)},this),delete this._tracksById.nativemetadata):this._initTextTracks();if(e.length)for(var t=0,i=e.length;t<i;t++){var n=e[t];if(!n._id){if("captions"===n.kind||"metadata"===n.kind){if(n._id="native"+n.kind+t,!n.label&&"captions"===n.kind){var a=Object(r.b)(n,this._unknownCount);n.name=a.label,this._unknownCount=a.unknownCount}}else n._id=Object(r.a)(n,this._textTracks.length);if(this._tracksById[n._id])continue;n.inuse=!0}if(n.inuse&&!this._tracksById[n._id])if("metadata"===n.kind)n.mode="hidden",n.oncuechange=k.bind(this),this._tracksById[n._id]=n;else if(v(n.kind)){var o=n.mode,u=void 0;if(n.mode="hidden",!n.cues.length&&n.embedded)continue;if(n.mode=o,this._cuesByTrackId[n._id]&&!this._cuesByTrackId[n._id].loaded){for(var d=this._cuesByTrackId[n._id].cues;u=d.shift();)h(this.renderNatively,n,u);n.mode=o,this._cuesByTrackId[n._id].loaded=!0}T.call(this,n)}}this.renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||function(){var e=this.video.textTracks,t=Object(c.k)(e,function(e){return(e.inuse||!e._id)&&v(e.kind)});if(!this._textTracks||function(e){if(e.length>this._textTracks.length)return!0;for(var t=0;t<e.length;t++){var i=e[t];if(!i._id||!this._tracksById[i._id])return!0}return!1}.call(this,t))return void this.setTextTracks(e);for(var i=-1,n=0;n<this._textTracks.length;n++)if("showing"===this._textTracks[n].mode){i=n;break}i!==this._currentTextTrackIndex&&this.setSubtitlesTrack(i+1)}.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),(s.Browser.edge||s.Browser.firefox||s.Browser.safari)&&(this.addTrackHandler=this.addTrackHandler||function(){this.setTextTracks(this.video.textTracks)}.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler)));this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})},setupSideloadedTracks:function(e){if(!this.renderNatively)return;var t=e===this._itemTracks;t||Object(n.a)(this._itemTracks);if(this._itemTracks=e,!e)return;t||(this.disableTextTrack(),function(){if(!this._textTracks)return;var e=this._textTracks.filter(function(e){return e.embedded||"subs"===e.groupid});this._initTextTracks(),e.forEach(function(e){this._tracksById[e._id]=e}),this._textTracks=e}.call(this),this.addTextTracks(e))},setSubtitlesTrack:function(e){if(!this.renderNatively)return void(this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1));if(!this._textTracks)return;0===e&&this._textTracks.forEach(function(e){e.mode=e.embedded?"hidden":"disabled"});if(this._currentTextTrackIndex===e-1)return;this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing");this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})},textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:function(e){var t=this._tracksById[e.name];if(!t)return;t.source=e.source;for(var i=e.captions||[],r=[],a=!1,s=0;s<i.length;s++){var o=i[s],c=e.name+"_"+o.begin+"_"+o.end;this._metaCuesByTextTime[c]||(this._metaCuesByTextTime[c]=o,r.push(o),a=!0)}a&&r.sort(function(e,t){return e.begin-t.begin});var u=Object(n.b)(r);Array.prototype.push.apply(t.data,u)},addCaptionsCue:function(e){if(!e.text||!e.begin||!e.end)return;var t=e.trackid.toString(),i=this._tracksById&&this._tracksById[t];i||(i={kind:"captions",_id:t,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));var r=void 0;e.useDTS&&(i.source||(i.source=e.source||"mpegts"));r=e.begin+"_"+e.text;var a=this._metaCuesByTextTime[r];if(!a){a={begin:e.begin,end:e.end,text:e.text},this._metaCuesByTextTime[r]=a;var s=Object(n.b)([a])[0];i.data.push(s)}},addVTTCue:function(e){this._tracksById||this._initTextTracks();var t=e.track?e.track:"native"+e.type,i=this._tracksById[t],n="captions"===e.type?"Unknown CC":"ID3 Metadata",r=e.cue;if(!i){var a={kind:e.type,_id:t,label:n,embedded:!0};i=g.call(this,a),this.renderNatively||"metadata"===i.kind?this.setTextTracks(this.video.textTracks):l.call(this,[i])}(function(e,t){var i=e.kind;this._cachedVTTCues[e._id]||(this._cachedVTTCues[e._id]={});var n=this._cachedVTTCues[e._id],r=void 0;switch(i){case"captions":case"subtitles":r=Math.floor(20*t.startTime);var a="_"+t.line,s=Math.floor(20*t.endTime),o=n[r+a]||n[r+1+a]||n[r-1+a];return!(o&&Math.abs(o-s)<=1)&&(n[r+a]=s,!0);case"metadata":var c=t.data?new Uint8Array(t.data).join(""):t.text;return r=t.startTime+c,n[r]?!1:(n[r]=t.endTime,!0);default:return!1}}).call(this,i,r)&&(this.renderNatively||"metadata"===i.kind?h(this.renderNatively,i,r):i.data.push(r))},addVTTCuesToTrack:function(e,t){if(!this.renderNatively)return;var i=this._tracksById[e._id];if(!i)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[e._id]={cues:t,loaded:!1});if(this._cuesByTrackId[e._id]&&this._cuesByTrackId[e._id].loaded)return;var n=void 0;this._cuesByTrackId[e._id]={cues:t,loaded:!0};for(;n=t.shift();)h(this.renderNatively,i,n)},renderNatively:!1};function d(e,t,i){e&&(e.removeEventListener?e.removeEventListener(t,i):e["on"+t]=null)}function l(e){var t=this;e&&(this._textTracks||this._initTextTracks(),e.forEach(function(e){if(!e.kind||v(e.kind)){var i=g.call(t,e);T.call(t,i),e.file&&(e.data=[],Object(n.c)(e,function(e){t.addVTTCuesToTrack(i,e)},function(e){t.trigger(o.s,{message:"Captions failed to load",reason:e})}))}}),this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks}))}function h(e,t,i){if(s.Browser.ie&&e&&window.TextTrackCue){var n=new window.TextTrackCue(i.startTime,i.endTime,i.text);t.addCue(n)}else t.addCue(i)}function f(e,t){t&&t.length&&Object(c.i)(t,function(t){if(!(s.Browser.ie&&e&&/^(native|subtitle|cc)/.test(t._id))){t.mode="disabled",t.mode="hidden";for(var i=t.cues.length;i--;)t.removeCue(t.cues[i]);t.embedded||(t.mode="disabled"),t.inuse=!1}})}function v(e){return"subtitles"===e||"captions"===e}function g(e){var t=void 0,i=Object(r.b)(e,this._unknownCount),n=i.label;if(this._unknownCount=i.unknownCount,this.renderNatively||"metadata"===e.kind){var a=this.video.textTracks;(t=Object(c.m)(a,{label:n}))||(t=this.video.addTextTrack(e.kind,n,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=Object(r.a)(e,this._textTracks.length)),t}function T(e){this._textTracks.push(e),this._tracksById[e._id]=e}function k(e){var t=e.currentTarget.activeCues;if(t&&t.length){var i=t[t.length-1].startTime;if(this._activeCuePosition!==i){var n=[];if(Object(c.i)(t,function(e){e.startTime<i||(e.data||e.value?n.push(e):e.text&&this.trigger("meta",{metadataTime:i,metadata:JSON.parse(e.text)}))},this),n.length){var r=Object(a.a)(n);this.trigger("meta",{metadataTime:i,metadata:r})}this._activeCuePosition=i}}}t.a=u},71:function(e,t,i){"use strict";function n(e){return e&&e.length?e.end(e.length-1):0}i.d(t,"a",function(){return n})},72:function(e,t,i){"use strict";function n(e){return{bitrate:e.bitrate,label:e.label,width:e.width,height:e.height}}i.d(t,"a",function(){return n})}}]);