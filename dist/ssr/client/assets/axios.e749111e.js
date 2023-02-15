import{f as ve}from"./index.c122a3f1.js";var L={exports:{}},re=function(e,t){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return e.apply(t,a)}},ye=re,w=Object.prototype.toString;function H(r){return w.call(r)==="[object Array]"}function q(r){return typeof r=="undefined"}function be(r){return r!==null&&!q(r)&&r.constructor!==null&&!q(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function we(r){return w.call(r)==="[object ArrayBuffer]"}function ge(r){return typeof FormData!="undefined"&&r instanceof FormData}function xe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ee(r){return typeof r=="string"}function Se(r){return typeof r=="number"}function te(r){return r!==null&&typeof r=="object"}function A(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ce(r){return w.call(r)==="[object Date]"}function Oe(r){return w.call(r)==="[object File]"}function Re(r){return w.call(r)==="[object Blob]"}function ne(r){return w.call(r)==="[object Function]"}function Ae(r){return te(r)&&ne(r.pipe)}function je(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ne(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function $e(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function F(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),H(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function D(){var r={};function e(a,i){A(r[i])&&A(a)?r[i]=D(r[i],a):A(a)?r[i]=D({},a):H(a)?r[i]=a.slice():r[i]=a}for(var t=0,n=arguments.length;t<n;t++)F(arguments[t],e);return r}function Pe(r,e,t){return F(e,function(a,i){t&&typeof a=="function"?r[i]=ye(a,t):r[i]=a}),r}function Te(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:H,isArrayBuffer:we,isBuffer:be,isFormData:ge,isArrayBufferView:xe,isString:Ee,isNumber:Se,isObject:te,isPlainObject:A,isUndefined:q,isDate:Ce,isFile:Oe,isBlob:Re,isFunction:ne,isStream:Ae,isURLSearchParams:je,isStandardBrowserEnv:$e,forEach:F,merge:D,extend:Pe,trim:Ne,stripBOM:Te},x=h;function z(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ae=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(x.isURLSearchParams(t))a=t.toString();else{var i=[];x.forEach(t,function(s,v){s===null||typeof s=="undefined"||(x.isArray(s)?v=v+"[]":s=[s],x.forEach(s,function(l){x.isDate(l)?l=l.toISOString():x.isObject(l)&&(l=JSON.stringify(l)),i.push(z(v)+"="+z(l))}))}),a=i.join("&")}if(a){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},ke=h;function $(){this.handlers=[]}$.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){ke.forEach(this.handlers,function(n){n!==null&&e(n)})};var Ue=$,Be=h,_e=function(e,t){Be.forEach(e,function(a,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[i])})},se=function(e,t,n,a,i){return e.config=t,n&&(e.code=n),e.request=a,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},qe=se,ie=function(e,t,n,a,i){var o=new Error(e);return qe(o,t,n,a,i)},De=ie,Le=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(De("Request failed with status code "+n.status,n.config,null,n.request,n))},O=h,He=O.isStandardBrowserEnv()?function(){return{write:function(t,n,a,i,o,u){var s=[];s.push(t+"="+encodeURIComponent(n)),O.isNumber(a)&&s.push("expires="+new Date(a).toGMTString()),O.isString(i)&&s.push("path="+i),O.isString(o)&&s.push("domain="+o),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Fe=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Me=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Ie=Fe,Je=Me,ze=function(e,t){return e&&!Ie(t)?Je(e,t):t},k=h,Ve=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ke=function(e){var t={},n,a,i;return e&&k.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=k.trim(u.substr(0,i)).toLowerCase(),a=k.trim(u.substr(i+1)),n){if(t[n]&&Ve.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},V=h,We=V.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(o){var u=V.isString(o)?a(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),R=h,Xe=Le,Ge=He,Qe=ae,Ye=ze,Ze=Ke,er=We,U=ie,K=function(e){return new Promise(function(n,a){var i=e.data,o=e.headers,u=e.responseType;R.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(v+":"+g)}var l=Ye(e.baseURL,e.url);s.open(e.method.toUpperCase(),Qe(l,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function f(){if(!!s){var b="getAllResponseHeaders"in s?Ze(s.getAllResponseHeaders()):null,y=!u||u==="text"||u==="json"?s.responseText:s.response,S={data:y,status:s.status,statusText:s.statusText,headers:b,config:e,request:s};Xe(n,a,S),s=null}}if("onloadend"in s?s.onloadend=f:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(f)},s.onabort=function(){!s||(a(U("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){a(U("Network Error",e,null,s)),s=null},s.ontimeout=function(){var y="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),a(U(y,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},R.isStandardBrowserEnv()){var c=(e.withCredentials||er(l))&&e.xsrfCookieName?Ge.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}"setRequestHeader"in s&&R.forEach(o,function(y,S){typeof i=="undefined"&&S.toLowerCase()==="content-type"?delete o[S]:s.setRequestHeader(S,y)}),R.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(y){!s||(s.abort(),a(y),s=null)}),i||(i=null),s.send(i)})},d=h,W=_e,rr=se,tr={"Content-Type":"application/x-www-form-urlencoded"};function X(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function nr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=K),r}function ar(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var P={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:nr(),transformRequest:[function(e,t){return W(t,"Accept"),W(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(X(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(X(t,"application/json"),ar(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||a&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?rr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};P.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){P.headers[e]={}});d.forEach(["post","put","patch"],function(e){P.headers[e]=d.merge(tr)});var M=P,sr=h,ir=M,or=function(e,t,n){var a=this||ir;return sr.forEach(n,function(o){e=o.call(a,e,t)}),e},oe=function(e){return!!(e&&e.__CANCEL__)},G=h,B=or,ur=oe,cr=M;function _(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var fr=function(e){_(e),e.headers=e.headers||{},e.data=B.call(e,e.data,e.headers,e.transformRequest),e.headers=G.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),G.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||cr.adapter;return t(e).then(function(a){return _(e),a.data=B.call(e,a.data,a.headers,e.transformResponse),a},function(a){return ur(a)||(_(e),a&&a.response&&(a.response.data=B.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},p=h,ue=function(e,t){t=t||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function s(f,c){return p.isPlainObject(f)&&p.isPlainObject(c)?p.merge(f,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function v(f){p.isUndefined(t[f])?p.isUndefined(e[f])||(n[f]=s(void 0,e[f])):n[f]=s(e[f],t[f])}p.forEach(a,function(c){p.isUndefined(t[c])||(n[c]=s(void 0,t[c]))}),p.forEach(i,v),p.forEach(o,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=s(void 0,e[c])):n[c]=s(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=s(e[c],t[c]):c in e&&(n[c]=s(void 0,e[c]))});var g=a.concat(i).concat(o).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter(function(c){return g.indexOf(c)===-1});return p.forEach(l,v),n};const lr="axios@^0.21.1",dr="axios@0.21.4",pr=!1,hr="sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",mr="/axios",vr={},yr={type:"range",registry:!0,raw:"axios@^0.21.1",name:"axios",escapedName:"axios",rawSpec:"^0.21.1",saveSpec:null,fetchSpec:"^0.21.1"},br=["#USER","/"],wr="https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",gr="c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",xr="axios@^0.21.1",Er="/home/runner/work/devcontainers-universal-2-linux-quasar/devcontainers-universal-2-linux-quasar/quasar-project",Sr={name:"Matt Zabriskie"},Cr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Or={url:"https://github.com/axios/axios/issues"},Rr=!1,Ar=[{path:"./dist/axios.min.js",threshold:"5kB"}],jr={"follow-redirects":"^1.14.0"},Nr=!1,$r="Promise based HTTP client for the browser and node.js",Pr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Tr="https://axios-http.com",kr="dist/axios.min.js",Ur=["xhr","http","ajax","promise","node"],Br="MIT",_r="index.js",qr="axios",Dr={type:"git",url:"git+https://github.com/axios/axios.git"},Lr={build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},Hr="./index.d.ts",Fr="dist/axios.min.js",Mr="0.21.4";var Ir={_from:lr,_id:dr,_inBundle:pr,_integrity:hr,_location:mr,_phantomChildren:vr,_requested:yr,_requiredBy:br,_resolved:wr,_shasum:gr,_spec:xr,_where:Er,author:Sr,browser:Cr,bugs:Or,bundleDependencies:Rr,bundlesize:Ar,dependencies:jr,deprecated:Nr,description:$r,devDependencies:Pr,homepage:Tr,jsdelivr:kr,keywords:Ur,license:Br,main:_r,name:qr,repository:Dr,scripts:Lr,typings:Hr,unpkg:Fr,version:Mr},ce=Ir,I={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){I[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Q={},Jr=ce.version.split(".");function fe(r,e){for(var t=e?e.split("."):Jr,n=r.split("."),a=0;a<3;a++){if(t[a]>n[a])return!0;if(t[a]<n[a])return!1}return!1}I.transitional=function(e,t,n){var a=t&&fe(t);function i(o,u){return"[Axios v"+ce.version+"] Transitional option '"+o+"'"+u+(n?". "+n:"")}return function(o,u,s){if(e===!1)throw new Error(i(u," has been removed in "+t));return a&&!Q[u]&&(Q[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,u,s):!0}};function zr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),a=n.length;a-- >0;){var i=n[a],o=e[i];if(o){var u=r[i],s=u===void 0||o(u,i,r);if(s!==!0)throw new TypeError("option "+i+" must be "+s);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Vr={isOlderVersion:fe,assertOptions:zr,validators:I},le=h,Kr=ae,Y=Ue,Z=fr,T=ue,de=Vr,E=de.validators;function C(r){this.defaults=r,this.interceptors={request:new Y,response:new Y}}C.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=T(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&de.assertOptions(t,{silentJSONParsing:E.transitional(E.boolean,"1.0.0"),forcedJSONParsing:E.transitional(E.boolean,"1.0.0"),clarifyTimeoutError:E.transitional(E.boolean,"1.0.0")},!1);var n=[],a=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(a=a&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!a){var u=[Z,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var s=e;n.length;){var v=n.shift(),g=n.shift();try{s=v(s)}catch(l){g(l);break}}try{o=Z(s)}catch(l){return Promise.reject(l)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};C.prototype.getUri=function(e){return e=T(this.defaults,e),Kr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};le.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(t,n){return this.request(T(n||{},{method:e,url:t,data:(n||{}).data}))}});le.forEach(["post","put","patch"],function(e){C.prototype[e]=function(t,n,a){return this.request(T(a||{},{method:e,url:t,data:n}))}});var Wr=C;function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var pe=J,Xr=pe;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;r(function(a){t.reason||(t.reason=new Xr(a),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.source=function(){var e,t=new N(function(a){e=a});return{token:t,cancel:e}};var Gr=N,Qr=function(e){return function(n){return e.apply(null,n)}},Yr=function(e){return typeof e=="object"&&e.isAxiosError===!0},ee=h,Zr=re,j=Wr,et=ue,rt=M;function he(r){var e=new j(r),t=Zr(j.prototype.request,e);return ee.extend(t,j.prototype,e),ee.extend(t,e),t}var m=he(rt);m.Axios=j;m.create=function(e){return he(et(m.defaults,e))};m.Cancel=pe;m.CancelToken=Gr;m.isCancel=oe;m.all=function(e){return Promise.all(e)};m.spread=Qr;m.isAxiosError=Yr;L.exports=m;L.exports.default=m;var tt=L.exports,me=tt;const nt=me.create({baseURL:"https://api.example.com"});var st=ve(({app:r})=>{r.config.globalProperties.$axios=me,r.config.globalProperties.$api=nt});export{nt as api,st as default};
