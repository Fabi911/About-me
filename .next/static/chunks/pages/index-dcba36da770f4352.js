(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3474)}])},3686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(8754),i=n(1757),o=n(5893),s=i._(n(7294)),a=r._(n(3935)),l=r._(n(6665)),u=n(1908),c=n(4706),d=n(5670);n(1558);let f=n(1973),p=r._(n(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,r,i,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=s.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,s.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:x,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:j,onLoad:_,onError:S,...P}=e;return(0,o.jsx)("img",{...P,...h(f),loading:g,width:l,height:a,decoding:u,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:r,src:n,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,p,v,w,y,x))},[n,p,v,w,y,S,x,t]),onLoad:e=>{m(e.currentTarget,p,v,w,y,x)},onError:e=>{j(!0),"empty"!==p&&y(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(d.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=g||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,m=(0,s.useRef)(a);(0,s.useEffect)(()=>{m.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[v,w]=(0,s.useState)(!1),[y,j]=(0,s.useState)(!1),{props:_,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,ref:t}),S.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1558);let r=n(7386),i=n(4706);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,l,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:x,height:b,fill:v=!1,style:w,onLoad:y,onLoadingComplete:j,placeholder:_="empty",blurDataURL:S,fetchPriority:P,layout:z,objectFit:C,objectPosition:E,lazyBoundary:k,lazyRoot:O,...R}=e,{imgConf:Z,showAltText:I,blurComplete:M,defaultLoader:D}=t,N=Z||i.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}let Y=R.loader||D;delete R.loader,delete R.srcSet;let B="__next_img_default"in Y;if(B){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=Y;Y=t=>{let{config:n,...r}=t;return e(r)}}if(z){"fill"===z&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!d&&(d=t)}let F="",W=s(x),A=s(b);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,F=e.src,!v){if(W||A){if(W&&!A){let t=W/e.width;A=Math.round(e.height*t)}else if(!W&&A){let t=A/e.height;W=Math.round(e.width*t)}}else W=e.width,A=e.height}}let L=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,L=!1),a.unoptimized&&(f=!0),B&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let G=s(h),T=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:E}:{},I?{}:{color:"transparent"},w),H=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:A,blurWidth:l,blurHeight:u,blurDataURL:S||"",objectFit:T.objectFit})+'")':'url("'+_+'")',J=H?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},U=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:s,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),c=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:n,quality:o,width:l[c]})}}({config:a,src:c,unoptimized:f,width:W,quality:G,sizes:d,loader:Y});return{props:{...R,loading:L?"lazy":g,fetchPriority:P,width:W,height:A,decoding:"async",className:m,style:{...T,...J},sizes:U.sizes,srcSet:U.srcSet,src:U.src},meta:{unoptimized:f,priority:p,placeholder:_,fill:v}}}},7386:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=r?40*r:t,l=i?40*i:n,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},9267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return a},default:function(){return l}});let r=n(8754),i=n(1908),o=n(3686),s=r._(n(3293)),a=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=o.Image},3293:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},3474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),i=n(2729),o=n(964);function s(){let e=(0,i._)(["\n  width: 65%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: left;\n  font-size: 1.1rem;\n"]);return s=function(){return e},e}function a(){let e=(0,i._)(["\n  width: 60vw;\n  margin-top: 60px;\n  background-color: rgba(60, 60, 60, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 100px;\n  border-radius: 5px;\n  box-shadow: 1px 2px 40px #000;\n"]);return a=function(){return e},e}function l(){return(0,r.jsxs)(c,{children:[(0,r.jsx)("h2",{children:"about me"}),(0,r.jsxs)(u,{children:["Hallo Welt, ich bin Fabian D\xf6z (34). Mein gro\xdfes Interesse besteht darin, nicht stehen zu bleiben, sondern Neues zu lernen, Probleme zu analysieren und zu l\xf6sen.",(0,r.jsx)("br",{})," Auch mal neue Wege zu gehen, wie das erfolgreich abgeschlossene Bootcamp zum Web Developer bei der neueFische GmbH. ",(0,r.jsx)("br",{}),"Hier habe ich meine wahre Passion gefunden. Denn f\xfcr mich macht der Beruf des Web Developers genau das aus, Bestehendes weiter zu entwickeln, Fehler zu beheben und gemeinsam im Team optimale L\xf6sungen zu erarbeiten."]})]})}let u=o.ZP.article(s()),c=o.ZP.div(a()),d=[{name:"HTML 5",logo:"/img/html5.png"},{name:"CSS3",logo:"/img/css3.png"},{name:"javascript",logo:"/img/js.png"},{name:"react",logo:"/img/react.png"},{name:"nextJS",logo:"/img/nextjs.png"},{name:"nodejs",logo:"/img/nodejs.png"},{name:"mongoDB",logo:"/img/mongodb.png"},{name:"mongoose",logo:"/img/mongoose.png"},{name:"useSWR",logo:"/img/useSWR.png"},{name:"styled-components",logo:"/img/styled-components.png"}];var f=n(5675),p=n.n(f);function g(){let e=(0,i._)(["\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(-360deg);\n  }\n"]);return g=function(){return e},e}function m(){let e=(0,i._)(["\n  position: relative;\n  width: 220px;\n  margin: 100px auto 50px auto;\n  perspective: 1200px;\n"]);return m=function(){return e},e}function h(){let e=(0,i._)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  animation: "," 32s infinite forwards linear;\n"]);return h=function(){return e},e}function x(){let e=(0,i._)(["\n  position: absolute;\n  width: 200px;\n  height: 90px;\n  top: -50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backface-visibility: hidden;\n\n  &:nth-child(1) {\n    transform: rotateY(calc((1 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(2) {\n    transform: rotateY(calc((2 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(3) {\n    transform: rotateY(calc((3 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(4) {\n    transform: rotateY(calc((4 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(5) {\n    transform: rotateY(calc((5 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(6) {\n    transform: rotateY(calc((6 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(7) {\n    transform: rotateY(calc((7 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(8) {\n    transform: rotateY(calc((8 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(9) {\n    transform: rotateY(calc((9 - 1) * ",")) translateZ(430px);\n  }\n  &:nth-child(10) {\n    transform: rotateY(calc((10 - 1) * ",")) translateZ(430px);\n  }\n"]);return x=function(){return e},e}function b(){let e=(0,i._)(["\n  margin: auto;\n"]);return b=function(){return e},e}let v="36deg",w=(0,o.F4)(g()),y=o.ZP.div(m()),j=o.ZP.div(h(),w),_=o.ZP.div(x(),v,v,v,v,v,v,v,v,v,v),S=o.ZP.span(b());function P(){return(0,r.jsx)(y,{children:(0,r.jsx)(j,{children:d.map(e=>(0,r.jsx)(_,{children:(0,r.jsx)(S,{children:(0,r.jsx)(p(),{src:e.logo,alt:e.name,style:{width:"auto",height:"4.5rem"},width:1200,height:800})})},e.name))})})}function z(){let e=(0,i._)(["\n  width: 60vw;\n  background-color: rgba(60, 60, 60, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 150px;\n  border-radius: 5px;\n  box-shadow: 1px 2px 40px #000;\n  position: relative;\n"]);return z=function(){return e},e}function C(){let e=(0,i._)(["\n  height: 8.5rem;\n  width: 62rem;\n  position: absolute;\n  background-color: white;\n  top: 95px;\n  opacity: 0.3;\n  /* border: 5px ridge black; */\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px black;\n"]);return C=function(){return e},e}function E(){return(0,r.jsxs)(k,{children:[(0,r.jsx)("h2",{children:"my tech stack & skills"}),(0,r.jsx)(O,{}),(0,r.jsx)(P,{})]})}let k=o.ZP.div(z()),O=o.ZP.div(C());function R(){let e=(0,i._)(["\n  width: 60vw;\n  margin-top: 60px;\n  background-color: rgba(60, 60, 60, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 100px;\n  border-radius: 5px;\n  box-shadow: 1px 2px 40px #000;\n"]);return R=function(){return e},e}function Z(){return(0,r.jsx)(I,{})}let I=o.ZP.div(R());function M(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{}),(0,r.jsx)(l,{}),(0,r.jsx)(Z,{})]})}},5675:function(e,t,n){e.exports=n(9267)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);