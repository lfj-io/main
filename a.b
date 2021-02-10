window.loader;
var Aes={cipher:function(c,e){for(var a=e.length/4-1,d=[[],[],[],[]],b=0;16>b;b++)d[b%4][Math.floor(b/4)]=c[b];d=Aes.addRoundKey(d,e,0,4);for(b=1;b<a;b++)d=Aes.subBytes(d,4),d=Aes.shiftRows(d,4),d=Aes.mixColumns(d,4),d=Aes.addRoundKey(d,e,b,4);d=Aes.subBytes(d,4);d=Aes.shiftRows(d,4);d=Aes.addRoundKey(d,e,a,4);a=Array(16);for(b=0;16>b;b++)a[b]=d[b%4][Math.floor(b/4)];return a},keyExpansion:function(c){for(var e=c.length/4,a=e+6,d=Array(4*(a+1)),b=Array(4),f=0;f<e;f++)d[f]=[c[4*f],c[4*f+1],c[4*f+2],c[4*f+3]];for(f=e;f<4*(a+1);f++){d[f]=Array(4);for(c=0;4>c;c++)b[c]=d[f-1][c];if(0==f%e)for(b=Aes.subWord(Aes.rotWord(b)),c=0;4>c;c++)b[c]^=Aes.rCon[f/e][c];else 6<e&&4==f%e&&(b=Aes.subWord(b));for(c=0;4>c;c++)d[f][c]=d[f-e][c]^b[c]}return d},subBytes:function(c,e){for(var a=0;4>a;a++)for(var d=0;d<e;d++)c[a][d]=Aes.sBox[c[a][d]];return c},shiftRows:function(c,e){for(var a=Array(4),d=1;4>d;d++){for(var b=0;4>b;b++)a[b]=c[d][(b+d)%e];for(b=0;4>b;b++)c[d][b]=a[b]}return c},mixColumns:function(c,e){for(var a=0;4>a;a++){for(var d=Array(4),b=Array(4),f=0;4>f;f++)d[f]=c[f][a],b[f]=c[f][a]&128?c[f][a]<<1^283:c[f][a]<<1;c[0][a]=b[0]^d[1]^b[1]^d[2]^d[3];c[1][a]=d[0]^b[1]^d[2]^b[2]^d[3];c[2][a]=d[0]^d[1]^b[2]^d[3]^b[3];c[3][a]=d[0]^b[0]^d[1]^d[2]^b[3]}return c},addRoundKey:function(c,e,a,d){for(var b=0;4>b;b++)for(var f=0;f<d;f++)c[b][f]^=e[4*a+f][b];return c},subWord:function(c){for(var e=0;4>e;e++)c[e]=Aes.sBox[c[e]];return c},rotWord:function(c){for(var e=c[0],a=0;3>a;a++)c[a]=c[a+1];c[3]=e;return c},sBox:[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],rCon:[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]]};"undefined"!=typeof module&&module.exports&&(module.exports=Aes);"function"==typeof define&&define.amd&&define([],function(){return Aes});"use strict";"undefined"!=typeof module&&module.exports&&(Aes=require("./aes"));Aes.Ctr={};Aes.Ctr.encrypt=function(c,e,a){if(128!=a&&192!=a&&256!=a)return"";c=String(c).utf8Encode();e=String(e).utf8Encode();var d=a/8,b=Array(d);for(a=0;a<d;a++)b[a]=isNaN(e.charCodeAt(a))?0:e.charCodeAt(a);b=Aes.cipher(b,Aes.keyExpansion(b));b=b.concat(b.slice(0,d-16));e=Array(16);a=(new Date).getTime();d=a%1E3;var f=Math.floor(a/1E3),g=Math.floor(65535*Math.random());for(a=0;2>a;a++)e[a]=d>>>8*a&255;for(a=0;2>a;a++)e[a+2]=g>>>8*a&255;for(a=0;4>a;a++)e[a+4]=f>>>8*a&255;d="";for(a=0;8>a;a++)d+=String.fromCharCode(e[a]);b=Aes.keyExpansion(b);f=Math.ceil(c.length/16);g=Array(f);for(var h=0;h<f;h++){for(a=0;4>a;a++)e[15-a]=h>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=h/4294967296>>>8*a;var k=Aes.cipher(e,b),m=h<f-1?16:(c.length-1)%16+1,l=Array(m);for(a=0;a<m;a++)l[a]=k[a]^c.charCodeAt(16*h+a),l[a]=String.fromCharCode(l[a]);g[h]=l.join("")}c=d+g.join("");return c.base64Encode()};Aes.Ctr.decrypt=function(c,e,a){if(128!=a&&192!=a&&256!=a)return"";c=String(c).base64Decode();e=String(e).utf8Encode();var d=a/8,b=Array(d);for(a=0;a<d;a++)b[a]=isNaN(e.charCodeAt(a))?0:e.charCodeAt(a);b=Aes.cipher(b,Aes.keyExpansion(b));b=b.concat(b.slice(0,d-16));e=Array(8);d=c.slice(0,8);for(a=0;8>a;a++)e[a]=d.charCodeAt(a);d=Aes.keyExpansion(b);b=Math.ceil((c.length-8)/16);a=Array(b);for(var f=0;f<b;f++)a[f]=c.slice(8+16*f,16*f+24);c=a;var g=Array(c.length);for(f=0;f<b;f++){for(a=0;4>a;a++)e[15-a]=f>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=(f+1)/4294967296-1>>>8*a&255;var h=Aes.cipher(e,d),k=Array(c[f].length);for(a=0;a<c[f].length;a++)k[a]=h[a]^c[f].charCodeAt(a),k[a]=String.fromCharCode(k[a]);g[f]=k.join("")}c=g.join("");return c.utf8Decode()};"undefined"==typeof String.prototype.utf8Encode&&(String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this))});"undefined"==typeof String.prototype.utf8Decode&&(String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this))}catch(c){return this}});"undefined"==typeof String.prototype.base64Encode&&(String.prototype.base64Encode=function(){if("undefined"!=typeof btoa)return btoa(this);if("undefined"!=typeof Buffer)return(new Buffer(this,"utf8")).toString("base64");throw Error("No Base64 Encode");});"undefined"==typeof String.prototype.base64Decode&&(String.prototype.base64Decode=function(){if("undefined"!=typeof atob)return atob(this);if("undefined"!=typeof Buffer)return(new Buffer(this,"base64")).toString("utf8");throw Error("No Base64 Decode");});"undefined"!=typeof module&&module.exports&&(module.exports=Aes.Ctr);"function"==typeof define&&define.amd&&define(["Aes"],function(){return Aes.Ctr});function encryptFile(c){var e=new FileReader;e.readAsArrayBuffer(c);e.onload=function(a){$("body").css({cursor:"wait"});a=new Uint8Array(e.result);for(var d="",b=0;b<a.length;b++)d+=String.fromCharCode(a[b]);b=$("#password-file").val();a=new Date;b=Aes.Ctr.encrypt(d,b,256);d=new Date;b=new Blob([b],{type:"text/plain"});saveAs(b,c.name+".encrypted");$("#encrypt-file-time").html((d-a)/1E3+"s");$("body").css({cursor:"default"})}}function decryptFile(c){var e=new FileReader;e.readAsText(c);e.onload=function(a){$("body").css({cursor:"wait"});var d=e.result,b=$("#password-file").val();a=new Date;b=Aes.Ctr.decrypt(d,b,256);d=new Date;for(var f=new Uint8Array(b.length),g=0;g<b.length;g++)f[g]=b.charCodeAt(g);b=new Blob([f],{type:"application/octet-stream"});f=c.name.replace(/\.encrypted$/,"")+".decrypted";saveAs(b,f);$("#decrypt-file-time").html((d-a)/1E3+"s");$("body").css({cursor:"default"})}}function hencrypt(c,e){return Aes.Ctr.encrypt(c,e,256)}function hdecrypt(c,e){return Aes.Ctr.decrypt(c,e,256)};
const jscrypto='dwpacmlf';function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(a,i){try{var s=t[a](i),r=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(r).then(function(e){o("next",e)},function(e){o("throw",e)});e(r)}("next")})}}let lrephadr,localDB;!function(e){"use strict";let t=/^((192\.168|172\.([1][6-9]|[2]\d|3[01]))(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){2}|10(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){3})|(localhost)$/.test(e.location.hostname)?"":".min";localDB=function(e){let t=null,n=0;const o=function(){return new Promise((o,a)=>{1===n&&void 0!==o&&o("success");let i=indexedDB.open(e.database);return i.onerror=function(e){a(e)},i.onsuccess=function(e){t=i.result,n=1,o(e)},i.onupgradeneeded=function(n){t=n.target.result;let a=Object.keys(e.tables);for(const n of a)if(!t.objectStoreNames.contains(n)){let o=t.createObjectStore(n,{keyPath:"key"});e.tables[n].forEach(e=>o.createIndex(e,"key",{unique:!0}))}n.target.transaction.oncomplete=(()=>o(t))}})},a=(i=_asyncToGenerator(function*(){return 0===n?n:(t&&t.close(),console.log(`数据库${e.database}已关闭`),n=0)}),function(){return i.apply(this,arguments)});var i;const s=(r=_asyncToGenerator(function*(){if(!t)return console.warn(`目前还没有数库${e.database}`);yield a(),indexedDB.deleteDatabase(e.database),t=null,console.log(`数据库${e.database}已删除`)}),function(){return r.apply(this,arguments)});var r;const c=(l=_asyncToGenerator(function*(n,o,a){return new Promise(function(i,s){let r=t.transaction(n,"readwrite").objectStore(n),c={key:o,value:a,version:e.getVersion()};new Promise(function(e,t){let n=r.index("key").get(o);n.onsuccess=(t=>{e(t.target.result?"put":"add")}),n.onerror=(()=>e("add"))}).then(function(e){let t=r[e](c);t.onsuccess=function(){i("success")},t.onerror=function(e){s(e)}})})}),function(e,t,n){return l.apply(this,arguments)});var l;const u=function(e,n){return new Promise((o,a)=>{let i=t.transaction(e,"readonly").objectStore(e).index("key").get(n);i.onsuccess=function(e){o(i.result)},i.onerror=function(e){a(e)}})};(function(){return!!(window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB)||(console.log("您的浏览器不支持indexedDB，请使用现代浏览器，例如chrome,firefox等."),!1)})&&(this.open=o,this.close=a,this.delete=s,this.setItem=c,this.getItem=u)},lrephadr=function(n){let o=n||{};this.dataDir=o.dataDir||"",this.dataCss=o.dataCss||[],this.dataJs=o.dataJs||[],this.dataFont=o.dataFont||[],this.dataLifecycle=o.dataLifecycle||l,this.dataActive=o.dataActive||c,this.callback=o.callback||null,this.multiLoad=o.multiLoad||".min"===t,this.showLog=o.showLog||!1,this.preload=void 0!==o.preload?o.preload:0;let a=this,i=e=>0===e.indexOf("http://")||0===e.indexOf("https://"),s=function(e){let n=new Date,o=e||2;return o=Math.min(24,o),""===t?""+n.getTime():""+(n.getMonth()+1)+n.getDate()+Math.ceil((n.getHours()+1)/o)},r=function(e){let t=[],n="";for(let o=0;o<e.length;o++)0!==(n=e[o].replace(/^(\s*)|(\s*)$/g,"")).length&&t.indexOf(n)<0&&t.push(n);return t},p=function(e,t){t.length>0&&t.forEach(function(t){e.setAttribute(t.split("=")[0],t.split("=")[1])})};void 0===e.lrephadrCache&&(e.lrephadrCache={});let g=function(e,t){C.setItem("data",F.encode(e),t).then(null)},J=function(e,n,o){return a.dataActive&&["js","css"].includes(n)?`${a.dataDir}${n}${t}/${e.split("|")[0]}`.replace("."+(o||n),"")+t+"."+(o||n):`${a.dataDir}${n}/${e.split("|")[0]}.${o||n}`},y=function(e,n){return((a.dataDir+n+t+"/"+e.split("|")[0]).replace("."+n,"")+t).replace(/\./g,"_")},U=function(e){return new Promise(t=>{if(i(e))return L(e),t("success");let n=J(e,"js")+"?v="+u,o=y(e,"js");C.getItem("data",F.encode(o)).then(e=>{!function(e){let a,i=e;null===i?(window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),void 0!==a&&(a.open("GET",n),a.send(null),a.onreadystatechange=function(){4===Number(a.readyState)&&200===Number(a.status)&&(i=a.responseText,g(o,i=null===i?"":i),h++,t("success"))})):t("success")}(e&&e.version===x.getVersion()?e.value:null)})})},T=function(e){return new Promise(t=>{if(i(e))return A(e),t("success");let n=J(e,"css")+"?v="+u,o=y(e,"css");C.getItem("data",F.encode(o)).then(e=>{!function(e){let i,s=e;null===s?(window.XMLHttpRequest?i=new XMLHttpRequest:window.ActiveXObject&&(i=new ActiveXObject("Microsoft.XMLHTTP")),void 0!==i&&(i.open("GET",n),i.send(null),i.onreadystatechange=function(){4===Number(i.readyState)&&200===Number(i.status)&&(s=(s=(s=null===(s=i.responseText)?"":s).replace(/\[dataDir]/g,a.dataDir)).replace(/\[v]/g,d),g(o,s),h++,t("success"))})):t("success")}(e&&e.version===x.getVersion()?e.value:null)})})},w=function(e){return new Promise((t=_asyncToGenerator(function*(t){let n=J(e,"fonts","woff")+"?v="+u;if("function"!=typeof FontFace)return new Promise(function(e){return e("success")});const o=new FontFace("elfRound","url("+n+")");yield o.load(),document.fonts.add(o),t("success")}),function(e){return t.apply(this,arguments)}));var t},b=function(e,n){if(""!==t)return Function(n)(),!1;let o=document.getElementsByTagName("HEAD").item(0),a=document.createElement("script");p(a,e.split("|").splice(1)),a.setAttribute("type","text/javascript"),a.setAttribute("data-name",e.split("|")[0].replace(".js","")+t),a.innerHTML=n,o.appendChild(a)},v=function(e,n){if(0===document.getElementsByTagName("HEAD").length)return!1;let o,i=document.getElementsByTagName("HEAD").item(0);if(a.multiLoad&&(o=document.getElementsByTagName("style").item(0)))return o.innerHTML+=n,!1;o=document.createElement("style"),p(o,e.split("|").splice(1)),o.setAttribute("type","text/css"),o.setAttribute("data-name",e.split("|")[0].replace(".css","")+t),o.innerHTML=n,i.appendChild(o)},L=function(e){if(0===document.getElementsByTagName("HEAD").length)return!1;let n=document.getElementsByTagName("HEAD").item(0),o=document.createElement("script");p(o,e.split("|").splice(1)),o.src=0===e.indexOf("http")?e.split("|")[0]:e.split("|")[0].replace(".js","")+t+".js?"+u,n.appendChild(o)},A=function(e){if(0===document.getElementsByTagName("HEAD").length)return!1;let n=document.getElementsByTagName("HEAD").item(0),o=document.createElement("link");p(o,e.split("|").splice(1)),o.type="text/css",o.rel="stylesheet",o.media="screen",o.href=0===e.indexOf("http")?e.split("|")[0]:e.split("|")[0].replace(".css","")+t+".css?"+u,n.appendChild(o)},E=(D=_asyncToGenerator(function*(e,n){return new Promise(function(o){let i,s={JS:b,CSS:v}[n.toUpperCase()];if(!s)return o("refuse this method.");let r={},c=[];e.forEach(function(e){r[e]=null;c.push(new Promise(function(o){i=(a.dataDir+n+t+"/"+e.replace(/(\.js)|(\.css)/g,"")+t).replace(/\./g,"_"),C.getItem("data",F.encode(i)).then(t=>{r[e]=t.value,o(!0)})}))}),Promise.all(c).then(function(){s(1===e.length?e[0]:n+"_"+u,Object.values(r).join("js"===n?";":" ")),o("success")})})}),function(e,t){return D.apply(this,arguments)});var D;let B=function(e,t){if(0===document.getElementsByTagName("HEAD").length)return!1;if(!e||0===e.length)return new Promise(e=>e("success"));let n={JS:U,CSS:T,FONT:w}[t.toUpperCase()],o=(i=_asyncToGenerator(function*(o){let i=0,s=(r=_asyncToGenerator(function*(){if(i>=e.length)return!0;yield n(e[i]),0===a.preload&&(yield E([e[i]],t)),i++,yield s()}),function(){return r.apply(this,arguments)});var r;yield s(),o("success")}),function(e){return i.apply(this,arguments)});var i;return new Promise(a.multiLoad?function(o){e&&0!==e.length||o("success");let i=new Array(e.length).fill(0).map((t,o)=>new Promise((s=_asyncToGenerator(function*(t){yield n(e[o]),t("success")}),function(e){return s.apply(this,arguments)})));var s;Promise.all(i).then(_asyncToGenerator(function*(){0!==e.length&&0===a.preload&&(yield E(e,t)),o("success")}))}:o)},F=new function(){let e="";for(let t=48;t<=122;t++)t>=58&&t<=64||t>=91&&t<=96||(e+=String.fromCharCode(t));let t=(e=(e=e.replace(/[aeiouAEIOU01]/g,"")).slice(0,18)+"$-_+!*"+e.slice(18)).length,n=location.host.length,o=-1,a="",i="";this.encode=function(s){a=encodeURIComponent(s).replace(/\./g,"&dot"),i="",o=-1;for(let s=0;s<a.length;s++)o=e.indexOf(a.charAt(s)),i+=o<0?a.charAt(s):e.charAt((o+n)%t);return i}},x={database:"lrephadrDB",tables:{data:["key","value","version"]},getVersion:s},C=new localDB(x);this.run=function(){_asyncToGenerator(function*(){yield C.open(),a.dataCss=r(a.dataCss.join(",").replace(/_css/g,m).split(",")),a.dataJs=r(a.dataJs.join(",").replace(/_js/g,m).split(",")),a.dataFont=r(a.dataFont.join(",").replace(/_js/g,m).split(",")),u=s(l),d=s(24);B(a.dataCss,"css"),B(a.dataFont,"font"),yield B(a.dataJs,"js"),a.showLog&&function(){let t=(new Date).getTime()-f;e.lrephadrHistory=void 0!==e.lrephadrHistory?e.lrephadrHistory:[],void 0!==e.showLogTimeout&&clearTimeout(e.showLogTimeout),e.showLogTimeout=setTimeout(()=>{h>0&&(e.lrephadrHistory=e.lrephadrHistory.concat(new Array(h-1).fill(0),t));let n=0,o=0;e.lrephadrHistory.length>0&&(n=e.lrephadrHistory.reduce((e,t)=>e+t),o=Math.ceil(n/e.lrephadrHistory.length)),console.log("当前页面使用lrephadr"+(a.multiLoad?"并行":"串行")+"网络请求%c"+h+"个%cJS/CSS文件，程序用时%c"+t+"毫秒%c，累计网络请求%c"+e.lrephadrHistory.length+"个%cJS/CSS文件，单文件平均用时%c"+o+"毫秒","color:#1b8884","","color:#1b8884","","color:#1b8884","","color:#1b8884","")},3e3)}(),"function"==typeof a.callback&&a.callback.call(!1)})()}};let n,o,aa=document.getElementsByTagName("html"),a=document.getElementsByTagName("script"),i=[],s=[],r=[],c=!1,l=2,u="",d="",h=0,f=(new Date).getTime();for(let e=0;e<aa.length;e++)if(aa[e].hasAttribute("data-l")){n=aa.item(e);break};let p=console.log&&".min"!==t,m=location.pathname.replace(".html","");""===location.pathname.replace(/.*\//,"").replace(".html","")&&(m+="index"),m=0===m.indexOf("/")?m.substr(1):m,n.hasAttribute("data-active")?c=["true",""].includes(n.getAttribute("data-active")):p&&console.log('%c友情提示:script标签未设置"data-active"属性,默认为false.',"color:#69F;"),n.hasAttribute("data-l")?l=Number(n.getAttribute("data-l")):p&&console.log(`%c友情提示:script标签未设置"data-l"属性,默认为${l}小时.`,"color:#69F;"),n.hasAttribute("data-d")?o=hdecrypt(n.getAttribute("data-d"),jscrypto):p&&console.log('%c友情提示:script标签未设置"data-d"属性.',"color:#69F;"),n.hasAttribute("data-a")?s=hdecrypt(n.getAttribute("data-a"),jscrypto).split(","):p&&console.log('%c友情提示:script标签未设置"data-a"属性',"color:#69F;"),n.hasAttribute("data-b")?i=hdecrypt(n.getAttribute("data-b"),jscrypto).split(","):p&&console.log('%c友情提示:script标签未设置"data-b"属性',"color:#69F;"),n.hasAttribute("data-f")?r=hdecrypt(n.getAttribute("data-f"),jscrypto).split(","):p&&console.log('%c友情提示:script标签未设置"data-f"属性',"color:#69F;"),aa.length>0&&""!==t&&a.item(0).remove();let g=new lrephadr;o&&(g.dataDir=o),g.dataCss=s,g.dataJs=i,g.dataFont=r,g.dataLifecycle=l,g.run()}(window.location.origin===window.top.location.origin?window.top:window);
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.md/metrika/tag.js","ym");ym(69936538,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});



window.addEventListener('load', function () {
var ovj=document.createElement('script');
ovj.src="//lfj.io/template/js/site.js";
setTimeout(function () {document.head.appendChild(ovj);}, 150);

var ovx=document.createElement('script');
ovx.innerHTML="loader = new lrephadr({dataDir: './template/',dataJs: ['toastify', 'popper.min', 'tippy-bundle.umd.min', 'livestamp.min'],preload: 0});loader.run();";
document.body.appendChild(ovx);

			    setTimeout(function () {
			        try {
			            document.querySelector(".x.privatelfj")
			                .style.display = "";
			            document.querySelector(".x.privatelfj")
			                .style.position = "relative";
			            document.querySelector(".x.privatelfj")
			                .style.margin = "0 auto";
			            document.querySelector(".x.privatelfj")
			                .style.top = "-262px";
			            document.querySelector(".x.privatelfj h2")
			                .innerHTML = "<p style='max-width: 600px; margin: 0 auto;color: #981e6a;'>Your web browser or your browser configuration is incompatible with this website. </p><br> <p style='max-width: 600px; margin: 0 auto; text-align: left; font-size: 80%;'>This issue may be caused by your firewall, web browser or an ad-blocker you have installed such as: AdGuard, AdBlock, uBlock Origin, etc. Please check or switch to another browser then try to access again.</p>";
			        }
			        catch (e) {}
}, 3000);
})
