webpackJsonp([3],{2430:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDataLogger=e.getLogger=void 0;var i=t(69),o=function(n){return n&&n.__esModule?n:{default:n}}(i),r=t(2431),u=["debug","info","warn","error"],f=void 0,c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=n+"\r\n";f||(f=t(2433)),f.doLogInFile(e)};e.getLogger=function(n){return function(e){var t={},i=function(t){return function(i){for(var r=arguments.length,f=Array(r>1?r-1:0),a=1;a<r;a++)f[a-1]=arguments[a];var d=(new Date).format("yyyy-MM-dd hh:mm:ss.S"),s="";window.CLIENTCONFIG.ENABLE_IT_MEETING,s=("["+d+"]["+t+"]["+n+"]["+e+"]").toUpperCase()+" "+i;if(u.slice(u.indexOf("info")).indexOf(t)>-1){var l=f.map(function(n){return(0,o.default)(n,null,2)}).join(" \n");l&&(l="[data] "+l),c(s+" "+l,n,e)}}};return u.forEach(function(n){t[n]=i(n)}),t}};e.getDataLogger=r.getDataLogger},2431:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDataLogger=void 0;var i=t(69),o=function(n){return n&&n.__esModule?n:{default:n}}(i),r=["debug","info","warn","error"],u=void 0,f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=n+"\r\n";u||(u=t(2432)),u.doLogInFile(e)};e.getDataLogger=function(n){return function(e){var t={},i=function(t){return function(i){for(var u=arguments.length,c=Array(u>1?u-1:0),a=1;a<u;a++)c[a-1]=arguments[a];var d=(new Date).format("yyyy-MM-dd hh:mm:ss.S"),s="";if(window.CLIENTCONFIG.ENABLE_IT_MEETING,s=("["+d+"]["+t+"]["+n+"]["+e+"]").toUpperCase()+" "+i,r.slice(r.indexOf("info")).indexOf(t)>-1){var l=c.map(function(n){return(0,o.default)(n,null,2)}).join(" \n");l&&(l="[data] "+l),f(s+" "+l,n,e)}}};return r.forEach(function(n){t[n]=i(n)}),t}}},2432:function(n,e,t){"use strict";function i(){if(A=!1,!_){o(L.shift()).then(function(){L.length>0?i():A=!0},function(){_=!0,A=!0})}}function o(n){return new d.default(function(e,t){f().then(function(){return u(n)}).then(e)})}function r(n){n&&L.push(n),A&&i()}function u(n){var e=PromiseObject();return s.writeFile(v+g,n,{flag:"a"},e.resolve),e}function f(){return new d.default(function(n,e){s.stat(v+g,function(e,t){if(e){if("ENOENT"!==e.code)throw n(),e;s.existsSync(v+g)||(s.existsSync(w)||s.mkdirSync(w),s.existsSync(v)||s.mkdirSync(v)),s.writeFileSync(v+g,""),n()}else c(t.size).then(n).catch(n)})})}function c(n){return new d.default(function(e,t){n>l?(s.unlinkSync(v+g),e()):e()})}Object.defineProperty(e,"__esModule",{value:!0});var a=t(3),d=function(n){return n&&n.__esModule?n:{default:n}}(a);e.doLogInFile=r;var s=window.require("fs"),l=5242880,g="/Status.log",w=void 0,v=void 0,L=[],A=!0,_=!1;w="WeLink"===window.CLIENTCONFIG.NEW_APP_NAME?window.process.env.APPDATA+"\\WeLink":window.process.env.APPDATA+"\\HuaweiMeeting",v="WeLink"===window.CLIENTCONFIG.NEW_APP_NAME?window.process.env.APPDATA+"\\WeLink\\log":window.process.env.APPDATA+"\\HuaweiMeeting\\log"},2433:function(n,e,t){"use strict";function i(){if(A=!1,!_){o(L.shift()).then(function(){L.length>0?i():A=!0},function(){_=!0,A=!0})}}function o(n){return new d.default(function(e,t){u().then(function(){return r(n)}).then(e)})}function r(n){var e=PromiseObject();return s.writeFile(g+"/CloudLink.log",n,{flag:"a"},e.resolve),e}function u(){return new d.default(function(n,e){s.stat(g+"/CloudLink.log",function(e,t){if(e){if("ENOENT"!==e.code)throw n(),e;s.existsSync(g+"/CloudLink.log")||(s.existsSync(l)||s.mkdirSync(l),s.existsSync(g)||s.mkdirSync(g)),s.writeFileSync(g+"/CloudLink.log",""),n()}else f(t.size).then(n).catch(n)})})}function f(n){return new d.default(function(e,t){n>w?(s.readdir(g,function(n,e){for(var t=e.filter(function(n){return/^CloudLink[_0-9]*\.log$/i.test(n)}),i=t.length;i>0;i--)i>=v?s.unlinkSync(g+"/"+t[i-1]):s.renameSync(g+"/"+t[i-1],g+"/CloudLink_"+i+".log")}),e()):e()})}function c(n){n&&L.push(n),A&&i()}Object.defineProperty(e,"__esModule",{value:!0});var a=t(3),d=function(n){return n&&n.__esModule?n:{default:n}}(a);e.doLogInFile=c;var s=window.require("fs"),l=void 0,g=void 0;l="WeLink"===window.CLIENTCONFIG.NEW_APP_NAME?window.process.env.APPDATA+"\\WeLink":window.process.env.APPDATA+"\\HuaweiMeeting",g="WeLink"===window.CLIENTCONFIG.NEW_APP_NAME?window.process.env.APPDATA+"\\WeLink\\log":window.process.env.APPDATA+"\\HuaweiMeeting\\log";var w=10485760,v=2,L=[],A=!0,_=!1},59:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HwLoggerSdk=void 0;var i=t(4),o=function(n){return n&&n.__esModule?n:{default:n}}(i),r=t(2430);e.HwLoggerSdk=function n(){(0,o.default)(this,n),this.getLogger=r.getLogger,this.getDataLogger=r.getDataLogger}},69:function(n,e,t){n.exports={default:t(70),__esModule:!0}},70:function(n,e,t){var i=t(8),o=i.JSON||(i.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}}});