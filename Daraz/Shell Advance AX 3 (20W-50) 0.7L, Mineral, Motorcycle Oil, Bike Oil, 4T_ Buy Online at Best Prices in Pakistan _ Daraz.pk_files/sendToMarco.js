/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var h;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=aa(this);function v(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.$jscomp$symbol$id_=e;p(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.$jscomp$symbol$id_};var d=0;return b},"es6","es3");
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ba(m(this))}})}return a},"es6","es3");function ba(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}function ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}v("Array.prototype.keys",function(a){return a?a:function(){return ca(this,function(b){return b})}},"es6","es3");var da=this||self;
function z(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ea=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function A(){}var ha="function"==typeof Uint8Array;
function B(a,b,c,d,e,f){a.wrappers_=null;b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;a:{c=a.array.length;b=-1;if(c&&(b=c-1,c=a.array[b],!(null===c||"object"!=typeof c||Array.isArray(c)||ha&&c instanceof Uint8Array))){a.pivot_=b-a.arrayIndexOffset_;a.extensionObject_=c;break a}-1<d?(a.pivot_=Math.max(d,b+1-a.arrayIndexOffset_),a.extensionObject_=null):a.pivot_=Number.MAX_VALUE}a.convertedPrimitiveFields_={};if(e)for(d=0;d<e.length;d++)b=e[d],b<a.pivot_?
(b+=a.arrayIndexOffset_,a.array[b]=a.array[b]||C):(D(a),a.extensionObject_[b]=a.extensionObject_[b]||C);if(f&&f.length)for(d=0;d<f.length;d++){b=e=void 0;c=a;for(var g=f[d],n=0;n<g.length;n++){var y=g[n],E=F(c,y);null!=E&&(b=y,e=E,G(c,y,void 0))}b&&G(c,b,e)}}var C=Object.freeze?Object.freeze([]):[];function D(a){var b=a.pivot_+a.arrayIndexOffset_;a.array[b]||(a.extensionObject_=a.array[b]={})}
function F(a,b){if(b<a.pivot_){b+=a.arrayIndexOffset_;var c=a.array[b];return c===C?a.array[b]=[]:c}if(a.extensionObject_)return c=a.extensionObject_[b],c===C?a.extensionObject_[b]=[]:c}function G(a,b,c){b<a.pivot_?a.array[b+a.arrayIndexOffset_]=c:(D(a),a.extensionObject_[b]=c);return a}function H(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=F(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]}
function I(a,b,c){a.wrappers_||(a.wrappers_={});var d=c?c.array:c;a.wrappers_[b]=c;return G(a,b,d)}A.prototype.toString=function(){return this.array.toString()};
A.prototype.getExtension=function(a){D(this);this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;return a.isRepeated?a.isMessageType()?(this.wrappers_[b]||(this.wrappers_[b]=ea(this.extensionObject_[b]||[],function(c){return new a.ctor(c)})),this.wrappers_[b]):this.extensionObject_[b]=this.extensionObject_[b]||[]:a.isMessageType()?(!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b]):this.extensionObject_[b]};
A.prototype.clone=function(){return new this.constructor(K(this.array))};function K(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?K(d):d)}return b}if(ha&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?K(d):d);return b};function L(a){B(this,a,0,-1,null,null)}z(L,A);function ia(a){B(this,a,0,-1,null,null)}z(ia,A);L.prototype.getConversionId=function(){return F(this,2)};L.prototype.getLabel=function(){return F(this,3)};function ja(a){B(this,a,0,-1,null,null)}z(ja,A);function ka(a){B(this,a,0,-1,null,null)}z(ka,A);function M(a){B(this,a,0,-1,la,null)}z(M,A);function N(a){B(this,a,0,-1,null,null)}z(N,A);var la=[9],ma={UNSET:0,COUNTER:1,SALES:2};function na(a){var b=new N;null!=a.uVariableId&&G(b,1,a.uVariableId);null!=a.type&&G(b,2,a.type);null!=a.customKey&&G(b,3,a.customKey);return b}N.prototype.getUVariableId=function(){return F(this,1)};N.prototype.getType=function(){return F(this,2)};h=M.prototype;h.getDcmAdvertiserId=function(){return F(this,3)};h.getType=function(){return F(this,4)};
h.getCat=function(){return F(this,5)};h.getTagType=function(){return F(this,6)};h.getCountingMethod=function(){return F(this,7)};h.getCustomVariablesList=function(){this.wrappers_||(this.wrappers_={});if(!this.wrappers_[9]){for(var a=F(this,9),b=[],c=0;c<a.length;c++)b[c]=new N(a[c]);this.wrappers_[9]=b}a=this.wrappers_[9];a==C&&(a=this.wrappers_[9]=[]);return a};function O(a){B(this,a,0,-1,null,oa)}z(O,A);var oa=[[2,3]];O.prototype.getAllowRemarketing=function(){var a=F(this,1);return null==a?a:!!a};O.prototype.getFloodlightTag=function(){return H(this,M,2)};O.prototype.getAdwordsConversionTag=function(){return H(this,L,3)};function pa(a){B(this,a,0,-1,null,null)}z(pa,A);function R(a){B(this,a,0,-1,null,null)}z(R,A);function S(a){B(this,a,0,-1,null,null)}z(S,A);h=S.prototype;h.getId=function(){return F(this,1)};h.getName=function(){return F(this,2)};h.getSeller=function(){return F(this,3)};h.getQuantity=function(){return F(this,4)};h.getValue=function(){var a=F(this,5);return null==a?a:+a};h.getCurrency=function(){return F(this,6)};R.prototype.getProduct=function(){return H(this,S,1,1)};R.prototype.getOrderId=function(){return F(this,2)};function T(a){B(this,a,0,-1,null,null)}z(T,A);T.prototype.getTransaction=function(){return H(this,R,1,1)};T.prototype.getFiredTag=function(){return H(this,O,2,1)};var U={UNKNOWN:0,ID:1,NAME:2,SELLER:3};function qa(a){this.document_=a||{cookie:""}}h=qa.prototype;h.isEnabled=function(){return navigator.cookieEnabled};h.isValidName=function(a){return!/[;=\s]/.test(a)};h.isValidValue=function(a){return!/[;\r\n]/.test(a)};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.sameSite;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var n=c.maxAge}if(!this.isValidName(a))throw Error('Invalid cookie name "'+a+'"');if(!this.isValidValue(b))throw Error('Invalid cookie value "'+b+'"');void 0===n&&(n=-1);this.setCookie_(a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>n?"":0==n?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*n)).toUTCString())+(d?";secure":"")+(null!=
e?";samesite="+e:""))};h.get=function(a,b){for(var c=a+"=",d=this.getParts_(),e=0,f;e<d.length;e++){f=fa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};h.remove=function(a,b,c){var d=this.containsKey(a);this.set(a,"",{maxAge:0,path:b,domain:c});return d};h.containsKey=function(a){return void 0!==this.get(a)};h.clear=function(){for(var a=this.getKeyValues_().keys,b=a.length-1;0<=b;b--)this.remove(a[b])};h.setCookie_=function(a){this.document_.cookie=a};
h.getParts_=function(){return(this.document_.cookie||"").split(";")};h.getKeyValues_=function(){for(var a=this.getParts_(),b=[],c=[],d,e,f=0;f<a.length;f++)e=fa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};var ra=new qa("undefined"==typeof document?null:document);function sa(a){a=JSON.parse(a);return Array.isArray(a)?a.map(function(b){b&&b.firedTag&&b.firedTag.floodlightTag&&b.firedTag.floodlightTag.customVariables&&(b.firedTag.floodlightTag.customVariablesList=b.firedTag.floodlightTag.customVariables);var c=new T;if(b.transaction){var d=b.transaction,e=new R;if(d.product){var f=d.product,g=new S;null!=f.id&&G(g,1,f.id);null!=f.name&&G(g,2,f.name);null!=f.seller&&G(g,3,f.seller);null!=f.quantity&&G(g,4,f.quantity);null!=f.value&&G(g,5,f.value);null!=f.currency&&
G(g,6,f.currency);I(e,1,g)}null!=d.orderId&&G(e,2,d.orderId);I(c,1,e)}if(b.firedTag){e=b.firedTag;d=new O;null!=e.allowRemarketing&&G(d,1,e.allowRemarketing);if(e.floodlightTag){g=e.floodlightTag;f=new M;null!=g.token&&G(f,1,g.token);null!=g.kind&&G(f,2,g.kind);null!=g.dcmAdvertiserId&&G(f,3,g.dcmAdvertiserId);null!=g.type&&G(f,4,g.type);null!=g.cat&&G(f,5,g.cat);null!=g.tagType&&G(f,6,g.tagType);null!=g.countingMethod&&G(f,7,g.countingMethod);null!=g.remarketingUVariable&&G(f,8,g.remarketingUVariable);
if(g.customVariablesList){g=g.customVariablesList.map(na);f.wrappers_||(f.wrappers_={});g=g||[];for(var n=[],y=0;y<g.length;y++)n[y]=g[y].array;f.wrappers_[9]=g;G(f,9,n)}I(d,2,f)}e.adwordsConversionTag&&(e=e.adwordsConversionTag,f=new L,null!=e.kind&&G(f,1,e.kind),null!=e.conversionId&&G(f,2,e.conversionId),null!=e.label&&G(f,3,e.label),null!=e.appEventType&&G(f,4,e.appEventType),null!=e.appEventName&&G(f,5,e.appEventName),null!=e.gclid&&G(f,6,e.gclid),e.remarketingInformation&&(g=e.remarketingInformation,
n=new ia,null!=g.feedType&&G(n,1,g.feedType),null!=g.pageType&&G(n,2,g.pageType),I(f,7,n)),null!=e.offlineConversionName&&G(f,8,e.offlineConversionName),I(d,3,f));I(c,2,d)}b.device&&(d=b.device,e=new ka,null!=d.userAgent&&G(e,1,d.userAgent),null!=d.ipAddress&&G(e,2,d.ipAddress),null!=d.resettableDeviceId&&G(e,3,d.resettableDeviceId),null!=d.os&&G(e,4,d.os),null!=d.osVersion&&G(e,5,d.osVersion),I(c,3,e));b.app&&(d=b.app,e=new ja,null!=d.appId&&G(e,1,d.appId),null!=d.appVersion&&G(e,2,d.appVersion),
I(c,4,e));b.trackingEventInformation&&(b=b.trackingEventInformation,d=new pa,null!=b.trackingEventId&&G(d,1,b.trackingEventId),I(c,5,d));return c}):[]}function V(a){return void 0===a||a?0:1}function ta(a,b){var c="u"+a.getUVariableId();b=b.getTransaction().getProduct();a=a.getType();if(1===a||1===U[a])a=b.getId()||"";else if(2===a||2===U[a])a=b.getName()||"";else if(3===a||3===U[a])a=b.getSeller()||"";else return null;return{key:c,value:a}}function W(a){return 2===ma[a]||2===a}
function ua(){var a=ra.get("_gcl_marco");a||(a="1."+Math.floor(2147483647*Math.random())+"."+Math.floor(Date.now()/1E3));ra.set("_gcl_marco",a,{maxAge:5184E3,path:"/"});return a}function va(){var a=new URL(document.location.toString());return a&&a.searchParams?a.searchParams.get("gclid"):null}function wa(){void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date))}
function xa(a,b,c,d,e,f,g){d=void 0===d?null:d;f=void 0===f?!0:f;g=void 0===g?null:g;var n=new XMLHttpRequest;n.onload=function(){if(n.responseText){var E=f,P=sa(n.responseText);wa();P=w(P);for(var l=P.next();!l.done;l=P.next()){l=l.value;var k=l.getFiredTag();if(k.getAdwordsConversionTag())if(E){k=l.getFiredTag();var q=k.getAdwordsConversionTag();l=l.getTransaction();var x=l.getProduct();gtag("config","AW-"+q.getConversionId());gtag("event","conversion",{send_to:"AW-"+q.getConversionId()+"/"+q.getLabel(),
value:x.getValue()||1,currency:x.getCurrency()||"USD",transaction_id:l.getOrderId(),allow_ad_personalization_signals:0===V(k.getAllowRemarketing())})}else k=l.getFiredTag(),q=k.getAdwordsConversionTag(),l=l.getTransaction(),x=l.getProduct(),l="https://www.googleadservices.com/pagead/conversion/"+(q.getConversionId()+"/?label=")+q.getLabel()+"&guid=ON&script=0&value="+(x.getValue()||1)+("&currency="+(x.getCurrency()||"USD"))+("&oid="+l.getOrderId())+("&npa="+V(k.getAllowRemarketing())),k=document.createElement("img"),
k.setAttribute("width","1"),k.setAttribute("height","1"),k.setAttribute("src",l),k.setAttribute("class","cdemux-tag"),document.body.appendChild(k);else if(k.getFloodlightTag())if(E){var t=l.getFiredTag();k=t.getFloodlightTag();q=l.getTransaction();x=q.getProduct();var Q=W(k.getTagType())?"purchase":"conversion";t={allow_custom_scripts:!1,send_to:"DC-"+k.getDcmAdvertiserId()+"/"+(k.getType()+"/")+(k.getCat()+"+")+k.getCountingMethod(),npa:V(t.getAllowRemarketing())};for(var J=w(k.getCustomVariablesList()),
u=J.next();!u.done;u=J.next())if(u=ta(u.value,l))t[u.key]=u.value;W(k.getTagType())&&(t.transaction_id=q.getOrderId(),t.quantity=x.getQuantity(),t.value=x.getValue());gtag("config","DC-"+k.getDcmAdvertiserId());gtag("event",Q,t)}else{k=l.getFiredTag();q=k.getFloodlightTag();x=l.getTransaction();t=x.getProduct();Q="";J=w(q.getCustomVariablesList());for(u=J.next();!u.done;u=J.next())(u=ta(u.value,l))&&(Q+=u.key+"="+encodeURIComponent(u.value)+";");l="";W(q.getTagType())&&(l=t.getQuantity()||0,t=t.getValue()||
0,l="qty="+l+";cost="+t+";");l="https://"+q.getDcmAdvertiserId()+".fls.doubleclick.net/activityi;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dc_lat=;src="+(q.getDcmAdvertiserId()+";type=")+(q.getType()+";cat=")+(q.getCat()+";npa=")+(V(k.getAllowRemarketing())+";")+l+(""+Q)+("ord="+x.getOrderId()+"?");k=document.createElement("iframe");k.setAttribute("width","1");k.setAttribute("height","1");k.setAttribute("src",l);k.setAttribute("class","cdemux-tag");document.body.appendChild(k)}else console.error("Unknown conversion tag type.")}}};
a:switch(void 0===e?null:e){case null:e=null;break a;case !0:case "true":case 1:e=!0;break a;default:e=!1}g||(g=va());var y=!0===e?"":ua();n.open("POST","https://cdemux.appspot.com/conversion/core/partner/"+(a+"?event="+b)+(d?"&oid="+d:"")+(e?"&npa="+e:"")+("&muid="+y)+(g?"&gclid="+g:""),!0);n.setRequestHeader("Content-Type","application/json;charset=UTF-8");n.send(JSON.stringify({products:c}))}var X=["sendToMarco"],Y=da;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);
for(var Z;X.length&&(Z=X.shift());)X.length||void 0===xa?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=xa;
