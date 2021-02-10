function updateWindowSize(){window.lastInnerWidth=window.innerWidth;window.lastInnerHeight=window.innerHeight;window.lastOrientation=window.orientation;window.lastBodyHeight=document.body.clientHeight}
function detectKeyboard(){if(150<window.lastInnerHeight-window.innerHeight&&window.innerWidth==window.lastInnerWidth){var a=window.lastInnerHeight-window.innerHeight;updateWindowSize();return a}a=(0!=window.lastOrientation&&180!=window.lastOrientation||0!=window.orientation&&180!=window.orientation)&&(90!=window.lastOrientation&&-90!=window.lastOrientation||90!=window.orientation&&-90!=window.orientation)?!0:!1;if(a&&document.body.classList.contains("keyboard-open"))return a=screen.height-window.topBarHeight-
window.innerHeight,updateWindowSize(),a;if(150<window.innerHeight-window.lastInnerHeight&&window.innerWidth==window.lastInnerWidth)return a=-1,updateWindowSize(),a;a=0;updateWindowSize();return a}function keyboardShift(a){document.body.classList.contains("keyboard-open")||document.body.classList.add("keyboard-open");document.body.setAttribute("style","height: calc(100% + "+a+"px);")}
function removeKeyboardShift(){document.body.classList.remove("keyboard-open");document.body.removeAttribute("style")}
;function lfjnoti(txt,avt=false,uri,dur=3000,typec='#52993f, #16a767'){var des = {'text':txt,'duration':dur,'newWindow':true,'gravity': "bottom","position": "right","backgroundColor": "linear-gradient(to right, "+typec+")","stopOnFocus": false};if(uri){des['destination']=uri;} if(avt===true && avt !=='midno'){des['avatar']='//lfj.io/template/logo.png';} if(avt==='mid'){des['position']='center';des['gravity']='top';	};Toastify(des).showToast();}
;function rmlfjnoti(){document.querySelectorAll('.toastify').forEach(e => e.parentNode.removeChild(e));};
; var popupWindow;function centeredPopup(c,d,a,b,e){popupWindow=window.open(c,d,"height="+b+",width="+a+",top="+(screen.height?(screen.height-b)/2:0)+",left="+(screen.width?(screen.width-a)/2:0)+",location=no,scrollbars="+e+",resizable")};
//_________________________________________________________________________________________
var input1='';
var pwdinput='',pwdtimeout;
var timestamp = Math.round(new Date().getTime()/1000);
var langSET= localStorage.getItem('sitelang')?localStorage.getItem('sitelang'):'no';

var Aes={cipher:function(c,e){for(var a=e.length/4-1,d=[[],[],[],[]],b=0;16>b;b++)d[b%4][Math.floor(b/4)]=c[b];d=Aes.addRoundKey(d,e,0,4);for(b=1;b<a;b++)d=Aes.subBytes(d,4),d=Aes.shiftRows(d,4),d=Aes.mixColumns(d,4),d=Aes.addRoundKey(d,e,b,4);d=Aes.subBytes(d,4);d=Aes.shiftRows(d,4);d=Aes.addRoundKey(d,e,a,4);a=Array(16);for(b=0;16>b;b++)a[b]=d[b%4][Math.floor(b/4)];return a},keyExpansion:function(c){for(var e=c.length/4,a=e+6,d=Array(4*(a+1)),b=Array(4),f=0;f<e;f++)d[f]=[c[4*f],c[4*f+1],c[4*f+2],c[4*f+3]];for(f=e;f<4*(a+1);f++){d[f]=Array(4);for(c=0;4>c;c++)b[c]=d[f-1][c];if(0==f%e)for(b=Aes.subWord(Aes.rotWord(b)),c=0;4>c;c++)b[c]^=Aes.rCon[f/e][c];else 6<e&&4==f%e&&(b=Aes.subWord(b));for(c=0;4>c;c++)d[f][c]=d[f-e][c]^b[c]}return d},subBytes:function(c,e){for(var a=0;4>a;a++)for(var d=0;d<e;d++)c[a][d]=Aes.sBox[c[a][d]];return c},shiftRows:function(c,e){for(var a=Array(4),d=1;4>d;d++){for(var b=0;4>b;b++)a[b]=c[d][(b+d)%e];for(b=0;4>b;b++)c[d][b]=a[b]}return c},mixColumns:function(c,e){for(var a=0;4>a;a++){for(var d=Array(4),b=Array(4),f=0;4>f;f++)d[f]=c[f][a],b[f]=c[f][a]&128?c[f][a]<<1^283:c[f][a]<<1;c[0][a]=b[0]^d[1]^b[1]^d[2]^d[3];c[1][a]=d[0]^b[1]^d[2]^b[2]^d[3];c[2][a]=d[0]^d[1]^b[2]^d[3]^b[3];c[3][a]=d[0]^b[0]^d[1]^d[2]^b[3]}return c},addRoundKey:function(c,e,a,d){for(var b=0;4>b;b++)for(var f=0;f<d;f++)c[b][f]^=e[4*a+f][b];return c},subWord:function(c){for(var e=0;4>e;e++)c[e]=Aes.sBox[c[e]];return c},rotWord:function(c){for(var e=c[0],a=0;3>a;a++)c[a]=c[a+1];c[3]=e;return c},sBox:[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],rCon:[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]]};"undefined"!=typeof module&&module.exports&&(module.exports=Aes);"function"==typeof define&&define.amd&&define([],function(){return Aes});"use strict";"undefined"!=typeof module&&module.exports&&(Aes=require("./aes"));Aes.Ctr={};Aes.Ctr.encrypt=function(c,e,a){if(128!=a&&192!=a&&256!=a)return"";c=String(c).utf8Encode();e=String(e).utf8Encode();var d=a/8,b=Array(d);for(a=0;a<d;a++)b[a]=isNaN(e.charCodeAt(a))?0:e.charCodeAt(a);b=Aes.cipher(b,Aes.keyExpansion(b));b=b.concat(b.slice(0,d-16));e=Array(16);a=(new Date).getTime();d=a%1E3;var f=Math.floor(a/1E3),g=Math.floor(65535*Math.random());for(a=0;2>a;a++)e[a]=d>>>8*a&255;for(a=0;2>a;a++)e[a+2]=g>>>8*a&255;for(a=0;4>a;a++)e[a+4]=f>>>8*a&255;d="";for(a=0;8>a;a++)d+=String.fromCharCode(e[a]);b=Aes.keyExpansion(b);f=Math.ceil(c.length/16);g=Array(f);for(var h=0;h<f;h++){for(a=0;4>a;a++)e[15-a]=h>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=h/4294967296>>>8*a;var k=Aes.cipher(e,b),m=h<f-1?16:(c.length-1)%16+1,l=Array(m);for(a=0;a<m;a++)l[a]=k[a]^c.charCodeAt(16*h+a),l[a]=String.fromCharCode(l[a]);g[h]=l.join("")}c=d+g.join("");return c.base64Encode()};Aes.Ctr.decrypt=function(c,e,a){if(128!=a&&192!=a&&256!=a)return"";c=String(c).base64Decode();e=String(e).utf8Encode();var d=a/8,b=Array(d);for(a=0;a<d;a++)b[a]=isNaN(e.charCodeAt(a))?0:e.charCodeAt(a);b=Aes.cipher(b,Aes.keyExpansion(b));b=b.concat(b.slice(0,d-16));e=Array(8);d=c.slice(0,8);for(a=0;8>a;a++)e[a]=d.charCodeAt(a);d=Aes.keyExpansion(b);b=Math.ceil((c.length-8)/16);a=Array(b);for(var f=0;f<b;f++)a[f]=c.slice(8+16*f,16*f+24);c=a;var g=Array(c.length);for(f=0;f<b;f++){for(a=0;4>a;a++)e[15-a]=f>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=(f+1)/4294967296-1>>>8*a&255;var h=Aes.cipher(e,d),k=Array(c[f].length);for(a=0;a<c[f].length;a++)k[a]=h[a]^c[f].charCodeAt(a),k[a]=String.fromCharCode(k[a]);g[f]=k.join("")}c=g.join("");return c.utf8Decode()};"undefined"==typeof String.prototype.utf8Encode&&(String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this))});"undefined"==typeof String.prototype.utf8Decode&&(String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this))}catch(c){return this}});"undefined"==typeof String.prototype.base64Encode&&(String.prototype.base64Encode=function(){if("undefined"!=typeof btoa)return btoa(this);if("undefined"!=typeof Buffer)return(new Buffer(this,"utf8")).toString("base64");throw Error("No Base64 Encode");});"undefined"==typeof String.prototype.base64Decode&&(String.prototype.base64Decode=function(){if("undefined"!=typeof atob)return atob(this);if("undefined"!=typeof Buffer)return(new Buffer(this,"base64")).toString("utf8");throw Error("No Base64 Decode");});"undefined"!=typeof module&&module.exports&&(module.exports=Aes.Ctr);"function"==typeof define&&define.amd&&define(["Aes"],function(){return Aes.Ctr});function encryptFile(c){var e=new FileReader;e.readAsArrayBuffer(c);e.onload=function(a){$("body").css({cursor:"wait"});a=new Uint8Array(e.result);for(var d="",b=0;b<a.length;b++)d+=String.fromCharCode(a[b]);b=$("#password-file").val();a=new Date;b=Aes.Ctr.encrypt(d,b,256);d=new Date;b=new Blob([b],{type:"text/plain"});saveAs(b,c.name+".encrypted");$("#encrypt-file-time").html((d-a)/1E3+"s");$("body").css({cursor:"default"})}}function decryptFile(c){var e=new FileReader;e.readAsText(c);e.onload=function(a){$("body").css({cursor:"wait"});var d=e.result,b=$("#password-file").val();a=new Date;b=Aes.Ctr.decrypt(d,b,256);d=new Date;for(var f=new Uint8Array(b.length),g=0;g<b.length;g++)f[g]=b.charCodeAt(g);b=new Blob([f],{type:"application/octet-stream"});f=c.name.replace(/\.encrypted$/,"")+".decrypted";saveAs(b,f);$("#decrypt-file-time").html((d-a)/1E3+"s");$("body").css({cursor:"default"})}}function hencrypt(c,e){return Aes.Ctr.encrypt(c,e,256)}function hdecrypt(c,e){return Aes.Ctr.decrypt(c,e,256)};

var curenttheme= localStorage.getItem('theme')?localStorage.getItem('theme'):'green';
function returntheme(){curenttheme= localStorage.getItem('theme')?localStorage.getItem('theme'):'green'; return curenttheme;}
window.wclang='';
var ctitle = ['LuckyFriend.js','LittleFun.js','LinkFinder.js','LuckyFree.js','LinkFilter.js','LuckyFilter.Js','LimitlessFreedom.js','LoveFilter.js'];
document.title='LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)];
var detectversion,installedversion,htmtextc,counthe=0;
var changedc=false
var allowstranlse=false;
var curentversion;
var enabledoption=false;

var welcomelock=false;
var fbflangde=false;
//_________________________________________________________________________________________
function  lfjLANG(){if(allowstranlse==true){var allDom = document.getElementsByTagName("*");for(var i =0; i < allDom.length; i++){var elem = allDom[i];var key = elem.getAttribute('lfj-fanyi');if(key != null) {elem.innerHTML = wclang[key]  ;}}}}
function autolang(){
var langSET= localStorage.getItem('sitelang')?localStorage.getItem('sitelang'):'no';
var AUTOLNG;
	if(langSET ==='no'){
	var browserLocales=navigator.languages||navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage;var browserLocale;
		if(typeof browserLocales!='string'){browserLocale=browserLocales[0]}else{browserLocale=browserLocales;}

	if (browserLocale.match(/vi|vn/i)) {allowstranlse=true;AUTOLNG='vi-VN';addtranlate(AUTOLNG);}
	else if (browserLocale.match(/zh|tw|cn/i) ) {allowstranlse=true;AUTOLNG='zh-CN';addtranlate(AUTOLNG);}
	else{allowstranlse=true;AUTOLNG='en-US';addtranlate(AUTOLNG);}
	} else{allowstranlse=true;addtranlate(langSET);}
	}
//_________________________________________________________________________________________

async function addtranlate(clangv){
	const promise = new Promise((resolve, reject) => {
	var langSET= localStorage.getItem('sitelang')?localStorage.getItem('sitelang'):'no';

	if (langSET !=='no'){clangv=langSET;}
	if(localStorage.getItem('wclang')){var langsave = JSON.parse(localStorage.getItem('wclang'));wclang=langsave.config;} else{var langsave={};}
	var timecusc = Math.floor(Date.now() / 1000);


	if (timecusc>langsave['time'] || !localStorage.getItem('wclang')) {
	fetch('./template/js/lang/'+clangv+'.json?v='+Math.random()) .then(response => { response.json().then(jscon => {
	    	      var timejls = parseInt(Math.floor(Date.now() / 1000))+30;
	    	      var svjirs = {'config':jscon,'time':timejls};
	    	      localStorage.setItem('wclang',JSON.stringify(svjirs))
	    	      wclang=svjirs.config;
	    	      resolve(true);

	}) })
	} else{resolve(true);}
	})
		
	let retsulr = await promise;
	return 	retsulr;
}
//___________________________________________________________________________
function isJson(str) {try {JSON.parse(str);}catch (e) {return false;}return true;}

//___________________________________________________________________________
for (var i = 0; i < localStorage.length; i++){
  var datahtml = localStorage.getItem(localStorage.key(i));
  	if(isJson(datahtml)==true){
  		var csexpire = JSON.parse(datahtml);
  		try{
  			var expire=	csexpire.expire;
  			if(timestamp>expire){localStorage.removeItem(localStorage.key(i)); }
	  		}catch (e) {}

  	
  	}
}

//___________________________________________________________________________
function serverworker(cache,update){

var checkfile = localStorage.getItem(cache)?JSON.parse(localStorage.getItem(cache)):null;
	if (update!==null && checkfile === null){
		var htmlr = {"html":update,"expire":(timestamp+2592000)};
		localStorage.setItem(cache,JSON.stringify(htmlr));
		return cache;

	}
	 if (update!==null && checkfile !== null){
		var htmlr = {"html":update,"expire":(timestamp+2592000)};
		localStorage.setItem(cache,JSON.stringify(htmlr));
		return cache;
	}
	 if(update === null && checkfile !== null){
		console.log('Use cache');
		return checkfile.html;
	} else{
	return 'Server down';
	
	}


}
//_________________________________________________________________________________________
function onputpasswrd(event,input,isPaste=false){
	if(pwdtimeout){clearTimeout(pwdtimeout);}

	if(isPaste===true){
		setTimeout(function(){pwdinput=event.target.value;},3);  // make sure content pasted.
	} else{
		var typex=input.value.length;
		if(input.value.length==0){pwdinput="";}
		if(input.value.length==1 && pwdinput.length>0){pwdinput=input.value;}
		if (pwdinput.length>typex){
			if(pwdinput.length>0){var datad = pwdinput.substring(0, (pwdinput.length - 1));} else{ var datad='';}
			pwdinput=datad;
		} else if(typex>pwdinput.length){
			var oport = input.value.substring((typex-1),typex);
			pwdinput+=oport;
		} 
	}
	
	pwdtimeout=	setTimeout(function(){var numberofdot='';for (var i=0; i < input.value.length; i++) {numberofdot+='*';}; input.value=numberofdot;},250); // change input value to *** 

}
//_________________________________________________________________________________________

function hdo(name,data,e=null){

	if(name=='allowoption'){
		if(document.querySelector('#register')){document.querySelector('#register').remove();}
			document.querySelector('#optionarea').innerHTML=data;optionver(202035110);if(wclang.COUNTRYOPTION!==''){document.querySelector('div#maincontent #COUNTRYOPTION').style.display='';};document.querySelector('div#maincontent .settingbtn').innerText=wclang.BACK;lfjLANG();
			document.querySelector('#input').placeholder=wclang.TYPE_YOURDOMAIN;
			document.getElementById('optionarea').scrollIntoView({ behavior: "smooth" });
			
			loadlastestshare();
	}
	
	if(name=='createoption'){
			
			document.querySelector('#optionarea').innerHTML=data;	
			document.querySelector('#input').placeholder=wclang.TYPE_YOURDOMAIN;loadlastestshare();
			optionver(202035110);	document.querySelector('div#maincontent .settingbtn').innerText=wclang.BACK;
			

		
			lfjLANG();	
		



	}
	
	
	if(name=='keygen'){
		document.querySelector('#maincontent').innerHTML='<h3 onclick="copy_data(select_txt)" style="background-color: #89898945;margin-top: 15px; margin: 0 AUTO; text-align: center; border-radius: 16px; border: 1px solid #ccc!important; width: max-content; padding: 30px;color: #bd00c6;"><span style="user-select: auto;" id="select_txt">Please wait..</span><span style="user-select: auto;display:none;color: #687878;" id="select_txt2">'+wclang.COPIED+'</span></h3>';

		setTimeout(function(){ 
			var ddoc='https://wap.lfj.io/#!'+hdecrypt(GM_info.script.cid,'z').replace(/\"/ig,"");
			document.querySelector('#maincontent').innerHTML='<h3 onclick="copy_data(select_txt)" style="background-color: #89898945;margin-top: 15px; margin: 0 AUTO; text-align: center; border-radius: 16px; border: 1px solid #ccc!important; width: max-content; padding: 30px;color: #bd00c6;"><span style="user-select: auto;" id="select_txt">'+ddoc+'</span><span style="user-select: auto;display:none;color: #687878;" id="select_txt2">'+wclang.COPIED+'</span> <div style="display: block; text-align: initial; color: cornsilk; margin-top: 20px; font-size: 12px; font-weight: 500;">'+wclang.MATCHINSTALL+' <span  id="numberofclick">0</span></div></h3>';
					apicountResult(hdecrypt(GM_info.script.cid,'z'));
			 }, 2000);
	}
	
	if(name=='regmd'){
			if(document.querySelector('#optionarea')){document.querySelector('#optionarea').remove();}
			document.querySelector('#register').innerHTML=data;
			location.href = "#Welcome-to-LFJ"; // window.history.pushState({"html":"","pageTitle":""},'LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)], "/");
			document.querySelector('#register').innerHTML=data;

			if(document.querySelector('div#maincontent .anyinlinebtn')){document.querySelector('div#maincontent .anyinlinebtn').innerText=wclang.BACK;}


			document.querySelector("#cryptio").onchange = function(e){
			
			if(document.querySelector("#cryptio").checked){
				input1=document.querySelector("#input1").value;
				document.querySelector("#input1").disabled=true;
				document.querySelector("#input1").value="Is Your Private Key";
				document.querySelector("#input1").style.color="#7b7b7be3";
			//	document.querySelector("label.input1").style.display='none';
			} else{
				document.querySelector("#input1").disabled=false;
				document.querySelector("#input1").value=input1;
		//		document.querySelector("label.input1").style.display='block';
				document.querySelector("#input1").style.color="#94eeff";

		}};
			
			lfjLANG();
	}

	
	if(name=='worksites'){
			document.querySelector('#workingsites').innerHTML=data;
			location.href = "#Welcome-to-LFJ";// window.history.pushState({"html":"","pageTitle":""},'LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)], "/");
			document.querySelector('#workingsites').innerHTML=data;

			if(document.querySelector('div#maincontent .anyinlinebtn')){document.querySelector('div#maincontent .anyinlinebtn').innerText=wclang.BACK;}
				document.querySelectorAll('#workingsites li span').forEach((cax) => {
					var selftext= cax.innerText;
					try{var cid= cax.getAttribute('require')?cax.getAttribute('require'):0;} catch(e){var cid=0;}
					try{var oid= GM_info.handler.origin?GM_info.handler.origin:'auth';} catch(e){var oid='auth';}
						if(oid != 'auth'){
					/*
								if(cid !=0){
									cax.innerHTML='<img src="/template/images/up.png" />'+selftext;
									cax.style.color="#c73a3a";
									cax.className="updateNeed";
								}
								*/
						}
				});
			tippy('span.addPremium', {animateFill: true,arrow: false,theme: 'gradient', content: '<img style="vertical-align: middle;max-width:20px"src="./template/images/lucky.png" /> '+wclang.SITE_PREMIUM,allowHTML: true});
			tippy('span.updateNeed', {animateFill: true,arrow: false,theme: 'lradient', content: '<img style="vertical-align: middle;max-width:20px"src="./template/images/up.png" /> '+wclang.OFFICALREQUEST,allowHTML: true});
			

				
			lfjLANG();selectlang(3);fbflangde=true;
				document.getElementById('terms-of-service').scrollIntoView({ behavior: "smooth" });
				
				
	}
	if(name=='lfi_fetch'){
		
		document.querySelector('.content-html').innerHTML=data;
		location.href = "#Welcome-to-LFJ"; 
		lfjLANG();
		if(e=='home'){document.querySelector('img#Welcome-to-LFJ').src='./template/images/nologo.svg'; detect();}	
		// window.history.pushState({"html":"","pageTitle":""},'LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)], "/");
		if(e=='install' || e=='work' ){worksites();}; 
			if(e=='home' && fbflangde==true){selectlang(1); }; 
		
	}
	
	if(name=='detect'){
	
		
		hanleinstaller();
		curentversion =parseInt(data.match(/version(.+)$/im)[1].replace(/\s/g,"")); 
if ((typeof GM_info.handler.origin) === "string" || installedversion===curentversion){htmtextc='<span lfj-fanyi="FORUMS">'+wclang.FORUMS+'</span>';/*	htmtextc='<span lfj-fanyi="REINSTALL">Reinstall version</span> '+curentversion+'<span lfj-fanyi="VERSION"></span>';		*/}
		if (installedversion>curentversion){htmtextc='<span lfj-fanyi="DOWNAGE">Downgrade to version</span> '+curentversion+'<span lfj-fanyi="VERSION"></span>';}
		if ((typeof GM_info.handler.origin) === "undefined" && installedversion<curentversion){htmtextc='<span lfj-fanyi="UPDATE">Update to version </span>'+curentversion+'<span lfj-fanyi="VERSION"></span>';document.querySelector('img#Welcome-to-LFJ').src='./template/images/logoneedupdate.svg';}
		if(installedversion ===1){htmtextc='<span lfj-fanyi="INSTALL">Install </span><span>lfj.io<span><span lfj-fanyi="SCRIPT"> </span>';}
			
			
		if ((typeof GM_info.handler.origin) === "string" || installedversion===curentversion){document.querySelector('div.install h2.install').innerHTML=wclang.FORUMS;document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');}else{
		document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//lfj.io/lfj.user.js?okp=1", "_self");setTimeout(function(){ location.reload(); }, 6000);');}
		
		
		document.querySelector('div.install h2.install').setAttribute('onmouseleave',"setTimeout(function(){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo.svg?v=5';}, 200);");
		document.querySelector('div.install h2.install').innerHTML=htmtextc;
		document.querySelector('div.install h2.install').style.maxWidth='fit-content';
		document.querySelector('div.install h2.install').style.paddingLeft='20px';
		document.querySelector('div.install h2.install').style.paddingRight='20px';
		document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('lfj-fanyi','SITES_EFFECT');
		document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('onclick','lfi_fetch("work")');
		document.querySelector('div.install h2.anyinlinebtn.inlineblock').innerHTML='Info';
		document.querySelector('div.install h2.anyinlinebtn.inlineblock').style.display='';
			selectlang(1);
			enabledoption=true;
			setting_html();
		
		lfjLANG();
		if(GM_info.script.cid){welcomeid();}
	
	}
	if(name=='mainback'){

			document.querySelector('.content-html').innerHTML=data;setting_html();
			document.querySelector('div.install h2.install').innerHTML=htmtextc;
			document.querySelector('div.install h2.install').style.maxWidth='fit-content';
			document.querySelector('div.install h2.install').style.paddingLeft='20px';
			document.querySelector('div.install h2.install').style.paddingRight='20px';
				if ((typeof GM_info.handler.origin) === "string" || installedversion===curentversion){document.querySelector('div.install h2.install').innerHTML=wclang.FORUMS;document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');}else{document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//lfj.io/lfj.user.js?okp=9", "_self");setTimeout(function(){ location.reload(); }, 6000);');}
			
			
			
			document.querySelector('div.install h2.install').setAttribute('onmouseleave',"setTimeout(function(){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo.svg?v=5';}, 200);");
			document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('lfj-fanyi','SITES_EFFECT');
			document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('onclick','lfi_fetch("work")');
			document.querySelector('div.install h2.anyinlinebtn.inlineblock').style.display='';location.href = "#Welcome-to-LFJ"; // window.history.pushState({"html":"","pageTitle":""},'LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)], "/");
			if(enabledoption==true){setting_html();}
			selectlang(1);
			lfjLANG();
	}


		updateWindowSize();window.topBarHeight=screen.height-window.innerHeight;window.addEventListener("resize",resizeThrottler,!1);var resizeTimeout;function resizeThrottler(){resizeTimeout||(resizeTimeout=setTimeout(function(){resizeTimeout=null;actualResizeHandler()},66))}function actualResizeHandler(){var a=detectKeyboard();0<a?keyboardShift(a):-1==a&&removeKeyboardShift()};


}
//___________________________________________________________________________
function clearAll(windowObject) {
  var id = Math.max(
    windowObject.setInterval(noop, 1000),
    windowObject.setTimeout(noop, 1000)
  );

  while (id--) {
    windowObject.clearTimeout(id);
    windowObject.clearInterval(id);
  }

  function noop(){}
}


//_________________________________________________________________________________________
function selectlang(scm=false){
var langSET= localStorage.getItem('sitelang')?localStorage.getItem('sitelang'):'no';
if(scm==1){		if(500>screen.width){var cpf='position: relative; color: #ff4061; padding: 8px; margin: 0 auto; top: -259px; left: calc(-240px + 190px); padding-left: 0; padding-right: 0;';} else{var cpf='position: relative; color: #ff4061;padding: 8px; margin: 0 auto; top: -140px; left: calc(-240px + 170px); padding-left: 0; padding-right: 0;';}			}
else if(scm==2){	if(500>screen.width){var cpf='position: relative; color: #bd9048; padding: 8px; margin: 0 auto; top: -144px; left: calc(-240px + 185px); padding-left: 0; padding-right: 0;';}else{var cpf='position: relative; color: #bd9048; padding: 8px; margin: 0 auto; top: -144px; left: calc(-240px + 165px); padding-left: 0; padding-right: 0;';}}
else if(scm==3){	if(500>screen.width){var cpf='position: relative; color: #ff4061; padding: 8px; margin: 0 auto; top: -145px; left: calc(-240px + 190px); padding-left: 0; padding-right: 0;';}else{var cpf='position: relative; color: #ff4061; padding: 8px; margin: 0 auto; top: -145px; left: calc(-240px + 165px); padding-left: 0; padding-right: 0;';}	}
else{var cpf='margin-top: 20px;color: #795548;';}
var fiv= document.createElement('div');fiv.setAttribute('style',""+cpf+"");fiv.innerHTML='<span onclick="localStorage.setItem(\'sitelang\',\'en-US\');localStorage.removeItem(\'wclang\');addtranlate().then(function(data){lfi_fetch(\'home\');})" style="margin-right: 30px;" id="langen">English</span><span onclick="localStorage.setItem(\'sitelang\',\'vi-VN\');localStorage.removeItem(\'wclang\');addtranlate().then(function(data){lfi_fetch(\'home\');})"   style="margin-right: 30px;"  id="langvn">Tiếng Việt</span><span style="margin-right: 30px;" onclick="localStorage.setItem(\'sitelang\',\'zh-CN\');localStorage.removeItem(\'wclang\');addtranlate().then(function(data){lfi_fetch(\'home\');})"  id="langcn">中文</span>';
		try{
			if(scm !=1 && scm !=2 && scm !=3 && document.querySelector('.green #maincontent .install')){document.querySelector('#maincontent .install').appendChild(fiv);}
			else if(document.querySelector('.dark #maincontent .install')){document.querySelector('#maincontent .install').appendChild(fiv);}
		} catch(e){ console.log('Lang can not int;');}
			
			
		if(document.querySelector('.dark') && scm==1){fbflangde=true;}	
	try{
	if(langSET ==='vi-VN'){document.getElementById('langvn').hidden=true;}
	if(langSET ==='en-US'){document.getElementById('langen').hidden=true;}
	if(langSET ==='zh-CN'){document.getElementById('langcn').hidden=true;}
	} catch(e){ cakof='';} 

}
//_________________________________________________________________________________________
function create_user(){
		var optionarea = document.createElement('div');
			optionarea.id='register';
			document.querySelector('div#maincontent').appendChild(optionarea);


	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
	serverworker('reg.md',data);	hdo('regmd',data);
	}};
		xhr.open("GET", '//lfj.io/js.php?js=reg', true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('worksites',serverworker('reg.md',null));};xhr.ontimeout = function () {hdo('regmd',serverworker('reg.md',null));};xhr.send();



}
//_________________________________________________________________________________________
function loginOrReg(){
var detect= localStorage.getItem('CLIENT_PHARSE') ?? '';
if(detect ===""){
document.querySelector('div.install h2.install').innerText="Create account";
document.querySelector('div.install h2.install').setAttribute('onclick','create_user();');



}



}
//_________________________________________________________________________________________
function welcomeid(){
	if(localStorage.getItem('CLIENT_NAME') && installedversion===curentversion){document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');document.querySelector('div.install h2.install').innerText=wclang.FORUMS;htmtextc=wclang.FORUMS;}
	if(welcomelock===false){
	welcomelock=true;
	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
		if(data.length>1){document.title='LFJ - Welcome '+data;
		if(installedversion===curentversion){
			document.querySelector('div.install h2.install').innerText=wclang.FORUMS;
			localStorage.setItem('CLIENT_NAME',data);
			htmtextc=wclang.FORUMS;
			document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');
		}}
			
	}}
	xhr.open("GET", '//lfj.io/platform/api.php?lfj='+(hdecrypt(GM_info.script.cid,'z').replace(/\"/ig,'')), true);xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {console.log('No name');};xhr.ontimeout = function () {console.log('No name');};xhr.send();
}

}
//_________________________________________________________________________________________

function detect(){
	if(counthe>2 && changedc==false){changedc=true;document.querySelector('div.install h2.install').innerHTML=wclang.INSTALL+' lfj.io '+wclang.SCRIPT;		changedc=true;document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_noinstall.svg';localStorage.setItem('theme','green');if(curenttheme !=='green'){document.querySelector('body').classList.remove('dark');document.querySelector('body').classList.add('green');}	lfjLANG();selectlang();}
		
	detectversion=	setTimeout(function(){ if ((typeof GM_info) ==='object'){
		installedversion = parseInt(GM_info.script.version);
		document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo.svg?v=5';
		changedc=true;
		localStorage.setItem('theme','dark');
		
		if(curenttheme !=='dark'){document.querySelector('body').classList.remove('green');document.querySelector('body').classList.add('dark');}
	
		if(installedversion ===1 && document.querySelector('div.install h2.install') || document.querySelector('div.install h2.install') && !GM_info.script.name.match(/Porn/i)){
		
		 if(!htmtextc){document.querySelector('div.install h2.install').innerHTML='<img border="0" src="./template/images/spin.gif">';
			if (installedversion===curentversion){document.querySelector('div.install h2.install').innerHTML=wclang.FORUMS;document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');}
		var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
			serverworker('lfj.user.js',data);hdo('detect',data);
		}};
		xhr.open("GET", "//lfj.io/lfj.user.js", true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('detect',serverworker('lfj.user.js',null));};xhr.ontimeout = function () {hdo('detect',serverworker('lfj.user.js',null));};xhr.send();
		
		
		
		
		
		} else{
		if ((typeof GM_info.handler.origin) === "string" || installedversion===curentversion){document.querySelector('div.install h2.install').innerHTML=wclang.FORUMS;document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//bbs.lfj.io/index.php","_blank");');} else{document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//lfj.io/lfj.user.js?okp=2", "_self");setTimeout(function(){ location.reload(); }, 6000);');}
		
		
		 document.querySelector('div.install h2.install').setAttribute('onmouseleave',"setTimeout(function(){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo.svg?v=5';}, 200);"); document.querySelector('div.install h2.install').innerHTML=htmtextc; document.querySelector('div.install h2.install').style.maxWidth='fit-content'; document.querySelector('div.install h2.install').style.paddingLeft='20px'; document.querySelector('div.install h2.install').style.paddingRight='20px'; document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('lfj-fanyi','SITES_EFFECT'); document.querySelector('div.install h2.anyinlinebtn.inlineblock').setAttribute('onclick','lfi_fetch("work")'); document.querySelector('div.install h2.anyinlinebtn.inlineblock').innerHTML='Info'; document.querySelector('div.install h2.anyinlinebtn.inlineblock').style.display='';
		if(enabledoption==true){setting_html();}
		lfjLANG();}
	
		
		} else if(installedversion !==1 && document.querySelector('div.install h2.install')){
			document.querySelector('div.install h2.install').style.maxWidth='fit-content';
			document.querySelector('div.install h2.install').style.paddingLeft='20px';
			document.querySelector('div.install h2.install').style.paddingRight='20px';
			document.querySelector('div.install h2.anyinlinebtn.inlineblock').style.display='';
			document.querySelector('img#Welcome-to-LFJ').src='./template/images/logoneedupdate.svg';
			document.querySelector('div.install h2.install').setAttribute('onmouseleave',"setTimeout(function(){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logoneedupdate.svg?v=5';}, 200);");
			document.querySelector('div.install h2.install').innerHTML='<span lfj-fanyi="YOUSOULDREMOVE">Remove <span style="color:red">PornDownloader</span> before install <span style="color: #73ea46">LFJ</span></span>';
			document.querySelector('div.install h2.install').setAttribute('onclick','window.open("//lfj.io/rmv.user.js", "_self");setTimeout(function(){ location.reload(); }, 6000);');
		
			lfjLANG();
			
		} 
		lfjLANG();
		}else{  detect();	counthe++;} }, 300);
}
//_________________________________________________________________________________________

function lfi_fetch(e){
var uri=e;
if(e=='privacy'){uri='./platform/privacy.md'; if(returntheme()=='dark'){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_privacy_dark.svg';} else{document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_privacy.svg';}}
if(e=='terms'){uri='./platform/terms.md';if(returntheme()=='dark'){document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_terms_dark.svg';} else{document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_terms.svg';}}
if(e=='contacts'){uri='./platform/contacts.md';document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo_contact.svg';}
if(e=='install'){uri='./platform/install.md';}
if(e=='home'){uri='./platform/home.md';counthe=0;changedc=false;}
if(e=='done'){uri='./platform/done.md';}
if(e=='thank'){uri='./platform/thank.md';}
if(e=='issue'){uri='//lfj.io/platform/issue.php?box=issue';}
if(e=='feedback'){uri='//lfj.io/platform/issue.php?box=feedback';}
if(e=='work'){uri='./platform/detaild.md';}
if(e=='option'){return allowoption(); }

	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
	
	serverworker(e+'.md',data);
	hdo('lfi_fetch',data,e);

	}};
	xhr.open("GET", uri, true);xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('lfi_fetch',serverworker(e+'.md',null),e);};xhr.ontimeout = function () {hdo('lfi_fetch',serverworker(e+'.md',null),e);};xhr.send();


return;


}

//_________________________________________________________________________________________
function copy_data(containerid) {
  const curent_var = containerid.innerHTML;
  const height = containerid.offsetHeight;
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  containerid.style.height=height+'px';
  containerid.innerHTML=wclang.COPIED;
  setTimeout(function(){ 
  containerid.innerHTML=curent_var;
  containerid.style.height='auto';

   }, 1200);
}

//_________________________________________________________________________________________

function keygen(){
//	window.history.pushState({"html":"","pageTitle":""},'LFJ - '+ctitle[Math.floor(Math.random() * ctitle.length)], "/");
	document.querySelector('#Welcome-to-LFJ').src='./template/images/logo.svg';
	setTimeout(function(){

	if((typeof GM_info)!=='undefined' && GM_info.script.version >=202035110){
		
		
	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;serverworker('serverjs.md',data);hdo('keygen',data);	}};
		xhr.open("GET", '//lfj.io/module/serverjs.json', true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('keygen',serverworker('serverjs.md',null));};xhr.ontimeout = function () {hdo('keygen',serverworker('serverjs.md',null));};xhr.send();

		
		} else {document.querySelector('#maincontent').innerHTML='<h3  style="margin-top: 15px; margin: 0 AUTO; text-align: center; border-radius: 16px; border: 1px solid #ccc!important; width: max-content; padding: 30px;color: #bd00c6;"><span style="user-select: auto;" id="select_txt">Please install app to get your key</span><span style="user-select: auto;display:none;color: #687878;" id="select_txt2">Copied</span></h3>';}
	}, 500);
}
//_________________________________________________________________________________________
function worksites(){



	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
	serverworker('listweb.md',data);	hdo('worksites',data);
	}};
		xhr.open("GET", '//lfj.io/js.php?js=listweb', true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('worksites',serverworker('listweb.md',null));};xhr.ontimeout = function () {hdo('worksites',serverworker('listweb.md',null));};xhr.send();

}

//_________________________________________________________________________________________
function mainback(){
document.querySelector('img#Welcome-to-LFJ').src='./template/images/logo.svg?v=5';

	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
				
			serverworker('home.md',data);hdo('mainback',data);
	}};
		xhr.open("GET", './platform/home.md', true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('mainback',serverworker('home.md',null));};xhr.ontimeout = function () {hdo('mainback',serverworker('home.md',null));};xhr.send();



}
//_________________________________________________________________________________________
function domainfitlerjson(inputtexarea){
  var regex = /\{(.*?)\n?\t?\s?\}/ig;
  var lfjRules = inputtexarea.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').replace(/\n([\s\t]{1,99})?\n/g,'');
  var domainlist = lfjRules.match(/([a-z0-9\.\-\_\,]+)\s?\t?\{/ig).map(function(value) { return value.substring(0, value.length - 1).split(','); });
  var domainRules = lfjRules.match(/\{([a-z0-9\s\n\t\;\%\:\=\_\-\.\>\$\#\|\*\[\]\,]+)\}/ig).map(function(value) { return '["'+value.substring(1, value.length)
  .replace(/\s?(?:\|remove\r\n\s?|\|remove\r\s?|\|remove\n\s?)\s?/g, '|remove",\n"')
    .replace(/\s?(?:\|transpatent\r\n\s?|\|transpatent\r\s?|\|transpatent\n\s?)\s?/g, '|transpatent",\n"')
    .replace(/\s?(?:\|hide\r\n\s?|\|hide\r\s?|\|hide\n\s?)\s?/g, '|hide",\n"')
    .replace(/\s?(?:\|outViewport\r\n\s?|\|outViewport\r\s?|\|outViewport\n\s?)\s?/g, '|outViewport",\n"')
    .replace(/\s?(?:\|domTrace\r\n\s?|\|domTrace\r\s?|\|domTrace\n\s?)\s?/g, '|domTrace",\n"')
    .replace(/\s?(?:\|click\r\n\s?|\|click\r\s?|\|click\n\s?)\s?/g, '|click",\n"')

   .replace(/\s?(?:\|([a-z\-]+)\:([a-z0-9\)\(\s\,]+)\r\n\s?|\|([a-z\-]+)\:([a-z0-9\)\(\s\,]+)\r\s?|\|([a-z\-]+)\:([a-z0-9\)\(\s\,]+)\n\s?)\s?/, '|$5:$6",\n"')
    .replace(/\s?(?:\|wh([0-9]+)\r\n\s?|\|wh([0-9]+)\r\s?|\|wh([0-9]+)\n\s?)\s?/g, '|wh$3",\n"').replace(/\s?(?:\|w([0-9]+)\r\n\s?|\|w([0-9]+)r\s?|\|w([0-9]+)\n\s?)\s?/, '|w$3",\n"').replace(/\s?(?:\|h([0-9]+)\r\n\s?|\|h([0-9]+)\r\s?|\|hh([0-9]+)\n\s?)\s?/g, '|h$3",\n"')
    
    
      
      
    
    .replace(/\s?(?:\|mp([0-9]+)\r\n\s?|\|mp([0-9]+)\r\s?|\|mp([0-9]+)\n\s?)\s?/g, '|mp$3",\n"').replace(/\s?(?:\|m([0-9]+)\r\n\s?|\|m([0-9]+)\r\s?|\|m([0-9]+)\n\s?)\s?/g, '|m$3",\n"').replace(/\s?(?:\|p([0-9]+)\r\n\s?|\|p([0-9]+)\r\s?|\|p([0-9]+)\n\s?)\s?/g, '|p$3",\n"')
    


    .replace(/\s?(?:\|unListener\r\n\s?|\|unListener\r\s?|\|unListener\n\s?)\s?/g, '|unListener",\n"')
    .replace(/\n+|\r+|\t+|\s\s/i,'').replace('  ','').replace(',\n"}',']'); });
  var adBlockcomplite=[];for (let i = 0; i < domainRules.length; i++) {console.log(domainRules[i]);adBlockcomplite[i]={"contributors":GM_info.script.cid??'',"domain":domainlist[i],"rules":hencrypt(domainRules[i],'')};}
  
return hencrypt(JSON.stringify(adBlockcomplite),GM_info.script.uid); 
}
//_________________________________________________________________________________________
function submitdata(){
if(!document.querySelector('#vancedadblock_rule').value.match(/example\.com/ig) && document.querySelector('#vancedadblock').checked===true && document.querySelector('#vancedadblock_rule').value.length>10){
var datb={};
	datb['uid']=GM_info.script.uid;
	datb['data']=domainfitlerjson(document.querySelector('#vancedadblock_rule').value);
	document.querySelector('div.sharearea').innerHTML='Uploading..'
	fetch('https://lfj.io/platform/adbi.php?wanna=import', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: encodeURIComponent(JSON.stringify(datb))
}).then(res=>res.text())
    .then(res =>{document.querySelector('div.sharearea').innerHTML=wclang.JOBDONE});


} else{document.querySelector('div.sharearea').innerHTML=wclang.MUST_RULES_SELF;}

}
//_________________________________________________________________________________________
function movtosearch(ca){
if(ca.substr(0,1) ==='.'){ca=ca.substr(1,(ca.length));}

document.querySelector('#input').value=ca;
document.querySelector('#input').focus();

}
//_________________________________________________________________________________________
function loadlastestshare(){
apicountResult(hdecrypt(GM_info.script.cid,'z'));
fetch('https://lfj.io/platform/adbi.php?wanna=lastest', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
 }).then(res=>res.json())
    .then(res =>{
    	
    	var RueTXT='<div style="margin-top: 9px; display:block;"></div><span class="exampletext" lfj-fanyi="EX_AMP">'+wclang.EX_AMP+'</span>';
    	
    	for (var i=0; i < res.length; i++) {RueTXT+='<span class="examresult" onclick="movtosearch(this.innerText)">'+res[i]+'</span>'};
    	document.querySelector('#domainresult').style.display='block';
    	document.querySelector('#domainresult').innerHTML=RueTXT;

    	
		setTimeout(function(){
				var css=document.createElement('style');css.innerHTML='[data-tippy-root],[data-tippy-root] .tippy-box{max-width:500px !important}';document.head.appendChild(css)
				if(wclang.LNAME !="zh-CN"){ if(localStorage.getItem('ne') || !localStorage.getItem('nx')){document.querySelector('div#optionarea #niceuu').setAttribute('onclick',"window.open('https://bbs.lfj.io/index.php?threads/unlock-9uu-website.3/','_blank');document.querySelector('div#optionarea #niceuu').checked=false;");}}
				tippy('#uu9com .p-switch', {animateFill: true,arrow: false,theme: 'taskneed', content: '<img style="vertical-align: middle;max-width:20px"src="./template/images/referral.png" /> '+wclang.TASKREQUIRED,allowHTML: true});
			},50);
    })



}
//_________________________________________________________________________________________
function parseRules(ruleArray){
var difl =ruleArray.split('"');
var txt='';
for (var i=0; i < difl.length; i++) {
	var kdf =difl[i].replace(",\n","\n").replace(/\]$/i,"");
	txt+=kdf;
};

return txt.substr(1,(txt.length-1));
}
//_________________________________________________________________________________________
function finddata(){
const regex = /^(?!:\/\/)(^[a-zA-Z0-9]+)?.[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i;
if(document.querySelector('#input').value===""){
return loadlastestshare();
}

if ((m = regex.exec(document.querySelector('#input').value)) !== null) {
	
document.querySelector('#domainresult').style.display='none';
var datb={};
	datb['uid']=GM_info.script.uid;
	datb['data']=hencrypt(document.querySelector('#input').value,GM_info.script.uid);
document.querySelector('#input').disabled=true;
document.querySelector('#input').value='...';
document.querySelector('#input').style.color='#f5ff94cc';
fetch('https://lfj.io/platform/adbi.php?wanna=export', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: encodeURIComponent(JSON.stringify(datb))
}).then(res=>res.json())
    .then(res =>{
    var code = res.code??200;
    if(code==200){
    	addedTXT='';
    	addedTXT+='<p class="numberofresult">'+(res.data.length)+' '+wclang.RESULEFOR+' '+hdecrypt(datb['data'],GM_info.script.uid)+'</p>';
			for (var i=0; i < res.data.length; i++) {
    				var strec=parseRules(hdecrypt(res.data[i].rules,''));
			    	var userTXT='<div class="result userbox"><div class="sharedinfo user">@<p class="inlinedxuser">'+(res.data[i].contributor)+'</p>';
			    	userTXT+='<p class="sharedinfo time"><span data-livestamp="'+(res.data[i].time)+'"></span></p></div>';
			    	userTXT+='<pre onclick="copy_data(this)" class="sharedinfo rules side_bar">'+(res.data[i].domain)+'{\n'+strec+'\n}\n\n</pre>';
			    	userTXT+='<p class="sharedinfo changes ">'+wclang.MAKEING_CHANGES+' '+(res.data[i].totalChanges)+' '+wclang.MAKEING_CHANGES_C+' '+(res.data[i].domain)+'</p></div>';

			};
 
    	
    	document.querySelector('#domainresult').innerHTML=addedTXT+userTXT;
    	document.querySelectorAll('.sharedinfo.time span').forEach(function(xj) {$(xj).livestamp(parseInt($(xj).attr('data-livestamp')));})

    	
    
    } else{
    	document.querySelector('#domainresult').innerText=res.name;
    }
    	document.querySelector('#domainresult').style.display='block';
  //  document.querySelector('#domainresult').innerText=res;
    document.querySelector('#input').disabled=false;document.querySelector('#input').style.color='#94eeff';document.querySelector('#input').value=hdecrypt(datb['data'],GM_info.script.uid);
    });



} else {loadlastestshare();}


}



//_________________________________________________________________________________________
function hanleinstaller(){
	if(document.body.className=="dark"){
		
		
		
		
		
		if((typeof GM_info.handler.name) != "string"){
			setTimeout(function(){
				if((typeof GM_info.handler.name) == "string" && !GM_info.handler.name.match(/(violentmonkey)/i)){
					if(!localStorage.getItem('noti_violentmonkey') || localStorage.getItem('noti_violentmonkey') && parseInt(localStorage.getItem('noti_violentmonkey'))<timestamp){
						lfjnoti(wclang.VIOLENTMONKEY_A+GM_info.handler.name+wclang.VIOLENTMONKEY_B, true, 'https://violentmonkey.github.io/get-it/', 16000, "#b624d4, #9a486c"); setTimeout(rmlfjnoti,18000);
						localStorage.setItem('noti_violentmonkey',parseInt(timestamp+360));	
					}
				}
				},3000);
		
		
		
		} else if((typeof GM_info.handler.name) == "string" && !GM_info.handler.name.match(/(violentmonkey)/i)){
			if(!localStorage.getItem('noti_violentmonkey') || localStorage.getItem('noti_violentmonkey') && parseInt(localStorage.getItem('noti_violentmonkey'))<timestamp){
			lfjnoti(wclang.VIOLENTMONKEY_A+GM_info.handler.name+wclang.VIOLENTMONKEY_B, true, 'https://violentmonkey.github.io/get-it/', 16000, "#b624d4, #9a486c"); setTimeout(rmlfjnoti,18000);
			localStorage.setItem('noti_violentmonkey',parseInt(timestamp+360));	
			}
		
		}
		
	 
	
	
	
	}
	



}
//_________________________________________________________________________________________

function optionver(ver=202035100){
	document.body.className="dark";
	setTimeout(function(){ if(location.hash==="#option"){   selectlang(2);}}, 500);
	try{
	if((typeof GM_info.handler.origin) == "string" && GM_info.handler.origin=="sleazyfork"){document.querySelector('h2.locknocreatesertting').innerText="Save";rmlfjnoti();
	
	setTimeout(function(){	lfjnoti(wclang.SLEAZYFORK, true, '//lfj.io/lfj.user.js', 16000, "#b624d4, #9a486c"); setTimeout(rmlfjnoti,18000);},3000);
	
	}
	if((typeof GM_info.handler.origin) == "undefined" && parseInt(GM_info.script.version)<=ver){
		var hid= document.createElement('div');
		hid.classList.add('privatelfj');
		hid.setAttribute('lfj-fanyi','UPDATE_TOUSE');
		hid.setAttribute('style','color: tomato; text-align: center; font-size: 110%;margin: 0 auto; display: block; margin-bottom: 10px; margin-top: 25px; padding-bottom: 17px;');
		document.querySelector('#lfj_option').insertBefore(hid, document.querySelector('#lfj_option').childNodes[0]);
		
		setTimeout(function(){
		document.querySelector('#lfj_option').querySelectorAll('input').forEach(function(xj) {
			 xj.checked=false;
			 xj.disabled=true;
			 
		})
		}, 120);
	
	}
	} catch(e){document.querySelector('#optionarea').innerHTML='<h2 align="center" style="margin-top: 60px;" class="privatelfj">You must install LFJ first !</h2>';setTimeout(function(){location.href="//lfj.io/lfj.user.js" },1200);}
}
//_________________________________________________________________________________________
function createoption(){
	document.querySelector('div#maincontent').innerHTML='<div class="install"><h2 class="settingbtn inlineblock locknocreatesertting" data-js="option" lfj-fanyi="BACK" style="max-width: fit-content; padding-left: 20px; padding-right: 20px;margin-right: 12px;" onclick="lfi_fetch(\'home\');">Back</h2></div>';
		var optionarea = document.createElement('div');
			optionarea.id='optionarea';
			document.querySelector('div#maincontent').appendChild(optionarea);
			
			
			
			
	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
			serverworker('option.md',data);hdo('createoption',data);
	}};
		xhr.open("GET", '//lfj.io/js.php?js=option', true);
		xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('createoption',serverworker('option.md',null));};xhr.onerror = function () {hdo('createoption',serverworker('option.md',null));};xhr.ontimeout = function () {hdo('createoption',serverworker('option.md',null));};xhr.send();




}
//_________________________________________________________________________________________

	function allowoption(){
	
	document.querySelector('div#maincontent .settingbtn').setAttribute('onclick','mainback();document.querySelector("div.main>p>img").style.maxWidth="400";');
	
	var optionarea = document.createElement('div');
		optionarea.id="optionarea";
		
	document.querySelector('div#maincontent').appendChild(optionarea);
	
	
	var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {if (xhr.readyState == 4 && xhr.status == 200) {var data = this.responseText;
	serverworker('option.md',data);hdo('allowoption',data);
	}};
		xhr.open("GET", '//lfj.io/js.php?js=option', true);xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");xhr.timeout = 15000;xhr.onerror = function () {hdo('allowoption',serverworker('option.md',null));};xhr.ontimeout = function () {hdo('allowoption',serverworker('option.md',null));};xhr.send();
			
	

	
	
	}
//_________________________________________________________________________________________


	function setting_html(){
		enabledoption=true;
		
		var settingbtn = document.createElement('h2');
			settingbtn.classList.add('settingbtn','inlineblock','locknocreatesertting');
			settingbtn.setAttribute('data-js','option');
			settingbtn.setAttribute('lfj-fanyi','OPTION');
			settingbtn.setAttribute('style','max-width: fit-content; padding-left: 20px; padding-right: 20px;margin-right: 12px;');
			settingbtn.setAttribute('onclick','lfi_fetch("option");');
			settingbtn.innerText='Option';
			document.querySelector('div#maincontent h2.install').classList.add('inlineblock');
			if(!document.querySelector('div#maincontent h2.locknocreatesertting')){document.querySelector('div#maincontent div.install').insertBefore(settingbtn,document.querySelector('div#maincontent div.install h2'));}
		
	}
document.addEventListener('DOMContentLoaded', function () {
	
try{document.querySelectorAll('.x.privatelfj').forEach(e => e.parentNode.removeChild(e));}catch(e){console.log('Removed');}

	
document.querySelector('body').classList.add(localStorage.getItem('theme')?localStorage.getItem('theme'):'green');
autolang();



if(location.hash == '#privacy'){lfi_fetch('privacy');}
else if(location.hash == '#terms'){lfi_fetch('terms');}
else if(location.hash == '#contacts'){lfi_fetch('contacts');}
else if(location.hash == '#done'){lfi_fetch('done');}
else if(location.hash == '#thank'){lfi_fetch('thank');}
else if(location.hash == '#issue'){lfi_fetch('issue');}
else if(location.hash == '#feedback'){lfi_fetch('feedback');}
else if(location.hash == '#work'){lfi_fetch('work');}
else if(location.hash == '#option'){createoption();}
else if(location.hash == '#keygen'){keygen();}
else if(location.hash.match(/\#\!([a-z0-9]+)/i)){ return visitCount();}
else {lfi_fetch('home');}

window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-99252457-3');
setTimeout(function(){ clearAll(window);}, 20000);
setTimeout(function(){ autolang();lfjLANG();  window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-99252457-3');}, 1500);


updateWindowSize();window.topBarHeight=screen.height-window.innerHeight;window.addEventListener("resize",resizeThrottler,!1);var resizeTimeout;function resizeThrottler(){resizeTimeout||(resizeTimeout=setTimeout(function(){resizeTimeout=null;actualResizeHandler()},66))}function actualResizeHandler(){var a=detectKeyboard();0<a?keyboardShift(a):-1==a&&removeKeyboardShift()};


});
//_________________________________________________________________________________________

function visitCount(){
var hashc= location.hash.match(/\#\!([a-z0-9]+)/i)[1];
	if(document.referrer !=""){
		localStorage.setItem('ref',hashc);
		lfi_fetch('home');
	} else{lfi_fetch('home');}
}
	

//_________________________________________________________________________________________
function apicountResult(idcx){

fetch('https://lfj.io/platform/api.php?whocanseme='+idcx, {method: 'get'}).then(res=>res.json()).then(res =>{
	
if(document.getElementById('numberofclick')){document.getElementById('numberofclick').innerText=res.count;}

localStorage.setItem('nx',res.count);
	if(res.count>=3){localStorage.removeItem('ne');}else{localStorage.setItem('ne','31');}
	},re=>{console.log('xxxxxx');})
}; 


//_________________________________________________________________________________________

