(function(u,p,a,e,r,h,t){if(u.__sec_entry_loaded||p.__no_sec_entry){return}u.__sec_entry_loaded=true;var o=e.userAgent;var i=t("%58%75%65%58%69");var n=i.toLowerCase();if(o.indexOf(i)>=0||r.host.indexOf(n)>=0||top!==self&&p.referrer.indexOf(n)>=0){return}var l=p.getElementsByTagName("head")[0];function g(a){var e=p.createElement("script");e.src=a;return l.appendChild(e)}var c="//g.alicdn.com";var s=self.goldlog;if(s&&s.getCdnPath){c=s.getCdnPath()}c+="/secdev/";var f=o.match(/Chrome\/(\d*)/);if(f){f=+f[1]}if(!p._sufei_data2){var d="3.9.1";var v=g(c+"sufei_data/"+d+"/index.js");v.async=p.cookie.indexOf("isg=")<0;v.id="aplus-sufei"}var m=.001;if(a()<m){p._linkstat_sample=m;g(c+"linkstat/index.js?v=1201")}u.nsrprtrt=1e-4;var _=0;var y=["taobao","alibaba.com","alipay.com","tmall.com","lazada","aliexpress","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com","youku.com","jiaoyimao","sm.cn","dingtalk.com","alibaba-inc","guoguo-app","kaola","alicdn","soku"];for(var x=0;x<y.length;x++){if(~r.host.indexOf(y[x])){_=1;break}}if(_){var b=["1.0.78","e",88];var j=["1.0.83","e",92];var k=0;var C=b;if(r.href.indexOf("sycm.taobao.com/mc/mq/market_monitor")>0){k=1e3}if((a()*1e4|0)<k){C=j}if(!C){return}var M=c;var E=true;if(r.hostname.indexOf("buyertrade.taobao.com")>-1||/refund2\.taobao\.com$|refund2\.tmall\.com$/.test(r.hostname)&&r.pathname==="/dispute/apply.htm"){if(!E){M=M.replace("/secdev/","??xlly/spl/index.js,secdev/")}else{M=M.replace("/secdev/","??xlly/spl/index.js,xlly/spl/rp.js,secdev/")}}else if(E){M=M.replace("/secdev/","??xlly/spl/rp.js,secdev/")}var S=M+"nsv/"+C[0]+"/";var O=S+"ns_"+C[1]+"_"+C[2]+"_3_f.js";var w=S+"ns_"+C[1]+"_"+C[2]+"_3_n.js";function I(){var a="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in p.documentElement.style){if(escape(e.javaEnabled.toString())===a){return true}}return false}var L=o.match(/Edge\/([\d]*)/);var A=o.match(/Safari\/([\d]*)/);var D=o.match(/Firefox\/([\d]*)/);var T=o.match(/MSIE|Trident/);if(L){g(O)}else if(f){g(O)}else if(A||D||T){g(w)}else{if(I()){g(O)}else{g(w)}}}else{g(c.replace("/secdev/","/xlly/spl/rp.js"))}function W(){var a=u.atob;if(!a){return}function r(a,e){var r=[];for(var t in a){r.push(t+"="+h(a[t]))}(new Image).src=e+r.join("&")}var e=0;var t="";function o(){if(++e==3){clearInterval(f)}l()}var i;var n=Math.random()*1e8|0;function l(){var a=i.getUA({MaxMTLog:500,MTInterval:7});a=n+"|"+a;var e={token:a,cna:t,ext:7};r(e,"https://fourier.taobao.com/ts?")}var c=+localStorage._xlly;if(!c&&/xlly=1/.test(p.cookie)){c=+new Date;localStorage._xlly=c}if(c){var s=new Date-c;if(s>1e3*3600*24){s=0;delete localStorage._xlly}if(s<1e3*60*20){var f=setInterval(o,1e3*60);if(u.addEventListener){u.addEventListener("unload",l)}var d=p.cookie.match(/cna=([^;]+)/);if(d){t=d[1]}var v=g(a("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));var m=unescape("%75%61%62");v.onload=function(){u.AWSC&&AWSC.use(m,function(a,e){if(a==="loaded"){i=e}})}}}}try{W()}catch(a){}try{u.etrprtrt=.01;var B=0;for(var x=0;x<y.length;x++){if(r.host&&~r.host.indexOf(y[x])){B=1;break}}if(B){var F="1.61.1";var N="1.62.1";var R=1;var U=F;if(Math.random()<R){U=N}if(!U){return}var z="//g.alicdn.com/AWSC/et/"+U+"/";var H=z+"et_f.js";var P=z+"et_n.js";if(L){g(H)}else if(f){g(H)}else if(A||D||T){g(P)}else{if(I()){g(H)}else{g(P)}}}}catch(a){}})(window,document,Math.random,navigator,location,encodeURIComponent,decodeURIComponent);