/*! Copyright © 2018 accengage-web-sdk 3.3.6 by Accengage */
"use strict";!function(a){"[object Object]"===Object.prototype.toString.call(a.AccengageWebSDKObject)&&"string"==typeof a.AccengageWebSDKObject["daraz-by.accengage.net"]&&function(a){a.l(function(){var a=this;(function(a,b,c,d){function e(){p=!("debug"in console)||"internet explorer"===b.browserName,g(),h()}function f(){var c=void 0,d=void 0,e=void 0,f=void 0,g=void 0,h=void 0;c=Array.prototype.slice.call(arguments),"arguments"!==a.typeOf(c)&&0===c.length&&"object"!==a.typeOf(c[0])||(h=new q,d=c[0],e=d.type||"log",f=a.empty(d.contents)?[d.content]:d.contents,g="string"===a.typeOf(d.callee)?d.callee.split(":"):[],h.push(i(e),j(e)),h.push(k(),"font-size: 9px; padding: 4px 5px;"),h.push(l(b.mode),"color: #FFFFFF; background: #A3A3A3; padding: 3px 5px;"),2===g.length&&h.push(m(g[1]),n(g[0])),f.forEach(function(a){h.push(a)}),console.log.apply(console,h.toArray()))}function g(){var a=c.getQueues();o=(a.debug||[]).slice(),a.debug=[],a.debug.push=f}function h(){if(o.length)for(var a=0;a<o.length;a++)f(o[a])}function i(a){return p?"["+a.toUpperCase()+"]":"log"===a?"▷":"▶"}function j(a){var b="color: ";switch(a){case"success":b+="#66F054";break;case"error":b+="#BF3F3F";break;case"warning":b+="#D4CC5B";break;case"info":b+="#69A1F0";break;case"log":default:b+="#A9A9A9"}return b+"; padding: 4px 5px; font-weight: bold;"}function k(){var a=(new Date).toLocaleTimeString();return p?"["+a+"]":a}function l(a){var b=function(){return a===d.TOP?"top":-1!==[d.MIDDLE.PROXY,d.MIDDLE.BRIDGE].indexOf(a)?"middle":a===d.MIDDLE.LANDING?"landing":a.toLowerCase()};return p?"["+b()+"]":b()}function m(a){return p?"["+a+"]":a}function n(a){var b="color: #FFFFFF; background: ";switch(a){case"plugin":b+="#A1D490";break;case"manager":b+="#D4A190";break;case"library":b+="#B6CDB9";break;case"widget":b+="#90C3D4"}return b+"; padding: 4px 5px; font-size: 10px;"}var o=void 0,p=!1,q=function(){var b=[];return{push:function(c,d){var e={content:c};"string"===a.typeOf(d)&&(e.style=d),b.push(e)},toArray:function(){for(var c="",d=[],e=[],f=0;f<b.length;f++){var g=b[f];p?e.push(("object"==typeof g.content?JSON.stringify(g.content):g.content)+" "):"style"in g?(c+="%c"+g.content,d.push(g.style)):e.push(g.content)}return a.empty(c)?e:[c].concat(d,e)}}};e()}).bind({})(a.utils,a.context,a.widgetManager,a.MODE)})}(a[a.AccengageWebSDKObject["daraz-by.accengage.net"]])}(window);