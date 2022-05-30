!function(u,D){"object"==typeof exports&&"undefined"!=typeof module?module.exports=D():"function"==typeof define&&define.amd?define(D):u.JSON5=D()}(this,function(){"use strict";function u(u,D){return u(D={exports:{}},D.exports),D.exports}var D=u(function(u){var D=u.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=D)}),e=u(function(u){var D=u.exports={version:"2.6.5"};"number"==typeof __e&&(__e=D)}),t=(e.version,function(u){return"object"==typeof u?null!==u:"function"==typeof u}),r=function(u){if(!t(u))throw TypeError(u+" is not an object!");return u},F=function(u){try{return!!u()}catch(u){return!0}},n=!F(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),C=D.document,A=t(C)&&t(C.createElement),i=!n&&!F(function(){return 7!=Object.defineProperty((u="div",A?C.createElement(u):{}),"a",{get:function(){return 7}}).a;var u}),E=Object.defineProperty,o={f:n?Object.defineProperty:function(u,D,e){if(r(u),D=function(u,D){if(!t(u))return u;var e,r;if(D&&"function"==typeof(e=u.toString)&&!t(r=e.call(u)))return r;if("function"==typeof(e=u.valueOf)&&!t(r=e.call(u)))return r;if(!D&&"function"==typeof(e=u.toString)&&!t(r=e.call(u)))return r;throw TypeError("Can't convert object to primitive value")}(D,!0),r(e),i)try{return E(u,D,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(u[D]=e.value),u}},a=n?function(u,D,e){return o.f(u,D,function(u,D){return{enumerable:!(1&u),configurable:!(2&u),writable:!(4&u),value:D}}(1,e))}:function(u,D,e){return u[D]=e,u},c={}.hasOwnProperty,B=function(u,D){return c.call(u,D)},s=0,f=Math.random(),l=u(function(u){var t=D["__core-js_shared__"]||(D["__core-js_shared__"]={});(u.exports=function(u,D){return t[u]||(t[u]=void 0!==D?D:{})})("versions",[]).push({version:e.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})("native-function-to-string",Function.toString),d=u(function(u){var t,r="Symbol(".concat(void 0===(t="src")?"":t,")_",(++s+f).toString(36)),F=(""+l).split("toString");e.inspectSource=function(u){return l.call(u)},(u.exports=function(u,e,t,n){var C="function"==typeof t;C&&(B(t,"name")||a(t,"name",e)),u[e]!==t&&(C&&(B(t,r)||a(t,r,u[e]?""+u[e]:F.join(String(e)))),u===D?u[e]=t:n?u[e]?u[e]=t:a(u,e,t):(delete u[e],a(u,e,t)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||l.call(this)})}),v=function(u,D,e){if(function(u){if("function"!=typeof u)throw TypeError(u+" is not a function!")}(u),void 0===D)return u;switch(e){case 1:return function(e){return u.call(D,e)};case 2:return function(e,t){return u.call(D,e,t)};case 3:return function(e,t,r){return u.call(D,e,t,r)}}return function(){return u.apply(D,arguments)}},p=function(u,t,r){var F,n,C,A,i=u&p.F,E=u&p.G,o=u&p.S,c=u&p.P,B=u&p.B,s=E?D:o?D[t]||(D[t]={}):(D[t]||{}).prototype,f=E?e:e[t]||(e[t]={}),l=f.prototype||(f.prototype={});for(F in E&&(r=t),r)C=((n=!i&&s&&void 0!==s[F])?s:r)[F],A=B&&n?v(C,D):c&&"function"==typeof C?v(Function.call,C):C,s&&d(s,F,C,u&p.U),f[F]!=C&&a(f,F,A),c&&l[F]!=C&&(l[F]=C)};D.core=e,p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128;var h,m=p,g=Math.ceil,y=Math.floor,w=function(u){return isNaN(u=+u)?0:(u>0?y:g)(u)},S=(h=!1,function(u,D){var e,t,r=String(function(u){if(null==u)throw TypeError("Can't call method on  "+u);return u}(u)),F=w(D),n=r.length;return F<0||F>=n?h?"":void 0:(e=r.charCodeAt(F))<55296||e>56319||F+1===n||(t=r.charCodeAt(F+1))<56320||t>57343?h?r.charAt(F):e:h?r.slice(F,F+2):t-56320+(e-55296<<10)+65536});m(m.P,"String",{codePointAt:function(u){return S(this,u)}});e.String.codePointAt;var b=Math.max,x=Math.min,N=String.fromCharCode,P=String.fromCodePoint;m(m.S+m.F*(!!P&&1!=P.length),"String",{fromCodePoint:function(u){for(var D,e,t,r=arguments,F=[],n=arguments.length,C=0;n>C;){if(D=+r[C++],t=1114111,((e=w(e=D))<0?b(e+t,0):x(e,t))!==D)throw RangeError(D+" is not a valid code point");F.push(D<65536?N(D):N(55296+((D-=65536)>>10),D%1024+56320))}return F.join("")}});e.String.fromCodePoint;var _,I,O,j,V,J,M,k,L,T,z,H,$,R,G={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},U={isSpaceSeparator:function(u){return G.Space_Separator.test(u)},isIdStartChar:function(u){return u>="a"&&u<="z"||u>="A"&&u<="Z"||"$"===u||"_"===u||G.ID_Start.test(u)},isIdContinueChar:function(u){return u>="a"&&u<="z"||u>="A"&&u<="Z"||u>="0"&&u<="9"||"$"===u||"_"===u||"‌"===u||"‍"===u||G.ID_Continue.test(u)},isDigit:function(u){return/[0-9]/.test(u)},isHexDigit:function(u){return/[0-9A-Fa-f]/.test(u)}};function Z(){for(T="default",z="",H=!1,$=1;;){R=q();var u=X[T]();if(u)return u}}function q(){if(_[j])return String.fromCodePoint(_.codePointAt(j))}function W(){var u=q();return"\n"===u?(V++,J=0):u?J+=u.length:J++,u&&(j+=u.length),u}var X={default:function(){switch(R){case"\t":case"\v":case"\f":case" ":case" ":case"\ufeff":case"\n":case"\r":case"\u2028":case"\u2029":return void W();case"/":return W(),void(T="comment");case void 0:return W(),K("eof")}if(!U.isSpaceSeparator(R))return X[I]();W()},comment:function(){switch(R){case"*":return W(),void(T="multiLineComment");case"/":return W(),void(T="singleLineComment")}throw tu(W())},multiLineComment:function(){switch(R){case"*":return W(),void(T="multiLineCommentAsterisk");case void 0:throw tu(W())}W()},multiLineCommentAsterisk:function(){switch(R){case"*":return void W();case"/":return W(),void(T="default");case void 0:throw tu(W())}W(),T="multiLineComment"},singleLineComment:function(){switch(R){case"\n":case"\r":case"\u2028":case"\u2029":return W(),void(T="default");case void 0:return W(),K("eof")}W()},value:function(){switch(R){case"{":case"[":return K("punctuator",W());case"n":return W(),Q("ull"),K("null",null);case"t":return W(),Q("rue"),K("boolean",!0);case"f":return W(),Q("alse"),K("boolean",!1);case"-":case"+":return"-"===W()&&($=-1),void(T="sign");case".":return z=W(),void(T="decimalPointLeading");case"0":return z=W(),void(T="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=W(),void(T="decimalInteger");case"I":return W(),Q("nfinity"),K("numeric",1/0);case"N":return W(),Q("aN"),K("numeric",NaN);case'"':case"'":return H='"'===W(),z="",void(T="string")}throw tu(W())},identifierNameStartEscape:function(){if("u"!==R)throw tu(W());W();var u=Y();switch(u){case"$":case"_":break;default:if(!U.isIdStartChar(u))throw Fu()}z+=u,T="identifierName"},identifierName:function(){switch(R){case"$":case"_":case"‌":case"‍":return void(z+=W());case"\\":return W(),void(T="identifierNameEscape")}if(!U.isIdContinueChar(R))return K("identifier",z);z+=W()},identifierNameEscape:function(){if("u"!==R)throw tu(W());W();var u=Y();switch(u){case"$":case"_":case"‌":case"‍":break;default:if(!U.isIdContinueChar(u))throw Fu()}z+=u,T="identifierName"},sign:function(){switch(R){case".":return z=W(),void(T="decimalPointLeading");case"0":return z=W(),void(T="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=W(),void(T="decimalInteger");case"I":return W(),Q("nfinity"),K("numeric",$*(1/0));case"N":return W(),Q("aN"),K("numeric",NaN)}throw tu(W())},zero:function(){switch(R){case".":return z+=W(),void(T="decimalPoint");case"e":case"E":return z+=W(),void(T="decimalExponent");case"x":case"X":return z+=W(),void(T="hexadecimal")}return K("numeric",0*$)},decimalInteger:function(){switch(R){case".":return z+=W(),void(T="decimalPoint");case"e":case"E":return z+=W(),void(T="decimalExponent")}if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},decimalPointLeading:function(){if(U.isDigit(R))return z+=W(),void(T="decimalFraction");throw tu(W())},decimalPoint:function(){switch(R){case"e":case"E":return z+=W(),void(T="decimalExponent")}return U.isDigit(R)?(z+=W(),void(T="decimalFraction")):K("numeric",$*Number(z))},decimalFraction:function(){switch(R){case"e":case"E":return z+=W(),void(T="decimalExponent")}if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},decimalExponent:function(){switch(R){case"+":case"-":return z+=W(),void(T="decimalExponentSign")}if(U.isDigit(R))return z+=W(),void(T="decimalExponentInteger");throw tu(W())},decimalExponentSign:function(){if(U.isDigit(R))return z+=W(),void(T="decimalExponentInteger");throw tu(W())},decimalExponentInteger:function(){if(!U.isDigit(R))return K("numeric",$*Number(z));z+=W()},hexadecimal:function(){if(U.isHexDigit(R))return z+=W(),void(T="hexadecimalInteger");throw tu(W())},hexadecimalInteger:function(){if(!U.isHexDigit(R))return K("numeric",$*Number(z));z+=W()},string:function(){switch(R){case"\\":return W(),void(z+=function(){switch(q()){case"b":return W(),"\b";case"f":return W(),"\f";case"n":return W(),"\n";case"r":return W(),"\r";case"t":return W(),"\t";case"v":return W(),"\v";case"0":if(W(),U.isDigit(q()))throw tu(W());return"\0";case"x":return W(),function(){var u="",D=q();if(!U.isHexDigit(D))throw tu(W());if(u+=W(),D=q(),!U.isHexDigit(D))throw tu(W());return u+=W(),String.fromCodePoint(parseInt(u,16))}();case"u":return W(),Y();case"\n":case"\u2028":case"\u2029":return W(),"";case"\r":return W(),"\n"===q()&&W(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case void 0:throw tu(W())}return W()}());case'"':return H?(W(),K("string",z)):void(z+=W());case"'":return H?void(z+=W()):(W(),K("string",z));case"\n":case"\r":throw tu(W());case"\u2028":case"\u2029":!function(u){console.warn("JSON5: '"+nu(u)+"' in strings is not valid ECMAScript; consider escaping")}(R);break;case void 0:throw tu(W())}z+=W()},start:function(){switch(R){case"{":case"[":return K("punctuator",W())}T="value"},beforePropertyName:function(){switch(R){case"$":case"_":return z=W(),void(T="identifierName");case"\\":return W(),void(T="identifierNameStartEscape");case"}":return K("punctuator",W());case'"':case"'":return H='"'===W(),void(T="string")}if(U.isIdStartChar(R))return z+=W(),void(T="identifierName");throw tu(W())},afterPropertyName:function(){if(":"===R)return K("punctuator",W());throw tu(W())},beforePropertyValue:function(){T="value"},afterPropertyValue:function(){switch(R){case",":case"}":return K("punctuator",W())}throw tu(W())},beforeArrayValue:function(){if("]"===R)return K("punctuator",W());T="value"},afterArrayValue:function(){switch(R){case",":case"]":return K("punctuator",W())}throw tu(W())},end:function(){throw tu(W())}};function K(u,D){return{type:u,value:D,line:V,column:J}}function Q(u){for(var D=0,e=u;D<e.length;D+=1){var t=e[D];if(q()!==t)throw tu(W());W()}}function Y(){for(var u="",D=4;D-- >0;){var e=q();if(!U.isHexDigit(e))throw tu(W());u+=W()}return String.fromCodePoint(parseInt(u,16))}var uu={start:function(){if("eof"===M.type)throw ru();Du()},beforePropertyName:function(){switch(M.type){case"identifier":case"string":return k=M.value,void(I="afterPropertyName");case"punctuator":return void eu();case"eof":throw ru()}},afterPropertyName:function(){if("eof"===M.type)throw ru();I="beforePropertyValue"},beforePropertyValue:function(){if("eof"===M.type)throw ru();Du()},beforeArrayValue:function(){if("eof"===M.type)throw ru();"punctuator"!==M.type||"]"!==M.value?Du():eu()},afterPropertyValue:function(){if("eof"===M.type)throw ru();switch(M.value){case",":return void(I="beforePropertyName");case"}":eu()}},afterArrayValue:function(){if("eof"===M.type)throw ru();switch(M.value){case",":return void(I="beforeArrayValue");case"]":eu()}},end:function(){}};function Du(){var u;switch(M.type){case"punctuator":switch(M.value){case"{":u={};break;case"[":u=[]}break;case"null":case"boolean":case"numeric":case"string":u=M.value}if(void 0===L)L=u;else{var D=O[O.length-1];Array.isArray(D)?D.push(u):D[k]=u}if(null!==u&&"object"==typeof u)O.push(u),I=Array.isArray(u)?"beforeArrayValue":"beforePropertyName";else{var e=O[O.length-1];I=null==e?"end":Array.isArray(e)?"afterArrayValue":"afterPropertyValue"}}function eu(){O.pop();var u=O[O.length-1];I=null==u?"end":Array.isArray(u)?"afterArrayValue":"afterPropertyValue"}function tu(u){return Cu(void 0===u?"JSON5: invalid end of input at "+V+":"+J:"JSON5: invalid character '"+nu(u)+"' at "+V+":"+J)}function ru(){return Cu("JSON5: invalid end of input at "+V+":"+J)}function Fu(){return Cu("JSON5: invalid identifier character at "+V+":"+(J-=5))}function nu(u){var D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(D[u])return D[u];if(u<" "){var e=u.charCodeAt(0).toString(16);return"\\x"+("00"+e).substring(e.length)}return u}function Cu(u){var D=new SyntaxError(u);return D.lineNumber=V,D.columnNumber=J,D}return{parse:function(u,D){_=String(u),I="start",O=[],j=0,V=1,J=0,M=void 0,k=void 0,L=void 0;do{M=Z(),uu[I]()}while("eof"!==M.type);return"function"==typeof D?function u(D,e,t){var r=D[e];if(null!=r&&"object"==typeof r)for(var F in r){var n=u(r,F,t);void 0===n?delete r[F]:r[F]=n}return t.call(D,e,r)}({"":L},"",D):L},stringify:function(u,D,e){var t,r,F,n=[],C="",A="";if(null==D||"object"!=typeof D||Array.isArray(D)||(e=D.space,F=D.quote,D=D.replacer),"function"==typeof D)r=D;else if(Array.isArray(D)){t=[];for(var i=0,E=D;i<E.length;i+=1){var o=E[i],a=void 0;"string"==typeof o?a=o:("number"==typeof o||o instanceof String||o instanceof Number)&&(a=String(o)),void 0!==a&&t.indexOf(a)<0&&t.push(a)}}return e instanceof Number?e=Number(e):e instanceof String&&(e=String(e)),"number"==typeof e?e>0&&(e=Math.min(10,Math.floor(e)),A="          ".substr(0,e)):"string"==typeof e&&(A=e.substr(0,10)),c("",{"":u});function c(u,D){var e=D[u];switch(null!=e&&("function"==typeof e.toJSON5?e=e.toJSON5(u):"function"==typeof e.toJSON&&(e=e.toJSON(u))),r&&(e=r.call(D,u,e)),e instanceof Number?e=Number(e):e instanceof String?e=String(e):e instanceof Boolean&&(e=e.valueOf()),e){case null:return"null";case!0:return"true";case!1:return"false"}return"string"==typeof e?B(e):"number"==typeof e?String(e):"object"==typeof e?Array.isArray(e)?function(u){if(n.indexOf(u)>=0)throw TypeError("Converting circular structure to JSON5");n.push(u);var D=C;C+=A;for(var e,t=[],r=0;r<u.length;r++){var F=c(String(r),u);t.push(void 0!==F?F:"null")}if(0===t.length)e="[]";else if(""===A){var i=t.join(",");e="["+i+"]"}else{var E=",\n"+C,o=t.join(E);e="[\n"+C+o+",\n"+D+"]"}return n.pop(),C=D,e}(e):function(u){if(n.indexOf(u)>=0)throw TypeError("Converting circular structure to JSON5");n.push(u);var D=C;C+=A;for(var e,r,F=t||Object.keys(u),i=[],E=0,o=F;E<o.length;E+=1){var a=o[E],B=c(a,u);if(void 0!==B){var f=s(a)+":";""!==A&&(f+=" "),f+=B,i.push(f)}}if(0===i.length)e="{}";else if(""===A)r=i.join(","),e="{"+r+"}";else{var l=",\n"+C;r=i.join(l),e="{\n"+C+r+",\n"+D+"}"}return n.pop(),C=D,e}(e):void 0}function B(u){for(var D={"'":.1,'"':.2},e={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"},t="",r=0;r<u.length;r++){var n=u[r];switch(n){case"'":case'"':D[n]++,t+=n;continue;case"\0":if(U.isDigit(u[r+1])){t+="\\x00";continue}}if(e[n])t+=e[n];else if(n<" "){var C=n.charCodeAt(0).toString(16);t+="\\x"+("00"+C).substring(C.length)}else t+=n}var A=F||Object.keys(D).reduce(function(u,e){return D[u]<D[e]?u:e});return A+(t=t.replace(new RegExp(A,"g"),e[A]))+A}function s(u){if(0===u.length)return B(u);var D=String.fromCodePoint(u.codePointAt(0));if(!U.isIdStartChar(D))return B(u);for(var e=D.length;e<u.length;e++)if(!U.isIdContinueChar(String.fromCodePoint(u.codePointAt(e))))return B(u);return u}}}});

/**
 * bootbox.js 5.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(t,e){'use strict';'function'==typeof define&&define.amd?define(['jquery'],e):'object'==typeof exports?module.exports=e(require('jquery')):t.bootbox=e(t.jQuery)}(this,function e(u,p){'use strict';var r,n,i,l;Object.keys||(Object.keys=(r=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable('toString'),l=(i=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor']).length,function(t){if('function'!=typeof t&&('object'!=typeof t||null===t))throw new TypeError('Object.keys called on non-object');var e,o,a=[];for(e in t)r.call(t,e)&&a.push(e);if(n)for(o=0;o<l;o++)r.call(t,i[o])&&a.push(i[o]);return a}));var d={};d.VERSION='5.0.0';var b={ar:{OK:'موافق',CANCEL:'الغاء',CONFIRM:'تأكيد'},bg_BG:{OK:'Ок',CANCEL:'Отказ',CONFIRM:'Потвърждавам'},br:{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Sim'},cs:{OK:'OK',CANCEL:'Zrušit',CONFIRM:'Potvrdit'},da:{OK:'OK',CANCEL:'Annuller',CONFIRM:'Accepter'},de:{OK:'OK',CANCEL:'Abbrechen',CONFIRM:'Akzeptieren'},el:{OK:'Εντάξει',CANCEL:'Ακύρωση',CONFIRM:'Επιβεβαίωση'},en:{OK:'OK',CANCEL:'Cancel',CONFIRM:'OK'},es:{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Aceptar'},eu:{OK:'OK',CANCEL:'Ezeztatu',CONFIRM:'Onartu'},et:{OK:'OK',CANCEL:'Katkesta',CONFIRM:'OK'},fa:{OK:'قبول',CANCEL:'لغو',CONFIRM:'تایید'},fi:{OK:'OK',CANCEL:'Peruuta',CONFIRM:'OK'},fr:{OK:'OK',CANCEL:'Annuler',CONFIRM:'Confirmer'},he:{OK:'אישור',CANCEL:'ביטול',CONFIRM:'אישור'},hu:{OK:'OK',CANCEL:'Mégsem',CONFIRM:'Megerősít'},hr:{OK:'OK',CANCEL:'Odustani',CONFIRM:'Potvrdi'},id:{OK:'OK',CANCEL:'Batal',CONFIRM:'OK'},it:{OK:'OK',CANCEL:'Annulla',CONFIRM:'Conferma'},ja:{OK:'OK',CANCEL:'キャンセル',CONFIRM:'確認'},ka:{OK:'OK',CANCEL:'გაუქმება',CONFIRM:'დადასტურება'},ko:{OK:'OK',CANCEL:'취소',CONFIRM:'확인'},lt:{OK:'Gerai',CANCEL:'Atšaukti',CONFIRM:'Patvirtinti'},lv:{OK:'Labi',CANCEL:'Atcelt',CONFIRM:'Apstiprināt'},nl:{OK:'OK',CANCEL:'Annuleren',CONFIRM:'Accepteren'},no:{OK:'OK',CANCEL:'Avbryt',CONFIRM:'OK'},pl:{OK:'OK',CANCEL:'Anuluj',CONFIRM:'Potwierdź'},pt:{OK:'OK',CANCEL:'Cancelar',CONFIRM:'Confirmar'},ru:{OK:'OK',CANCEL:'Отмена',CONFIRM:'Применить'},sk:{OK:'OK',CANCEL:'Zrušiť',CONFIRM:'Potvrdiť'},sl:{OK:'OK',CANCEL:'Prekliči',CONFIRM:'Potrdi'},sq:{OK:'OK',CANCEL:'Anulo',CONFIRM:'Prano'},sv:{OK:'OK',CANCEL:'Avbryt',CONFIRM:'OK'},sw:{OK:'Sawa',CANCEL:'Ghairi',CONFIRM:'Thibitisha'},ta:{OK:'சரி',CANCEL:'ரத்து செய்',CONFIRM:'உறுதி செய்'},th:{OK:'ตกลง',CANCEL:'ยกเลิก',CONFIRM:'ยืนยัน'},tr:{OK:'Tamam',CANCEL:'İptal',CONFIRM:'Onayla'},uk:{OK:'OK',CANCEL:'Відміна',CONFIRM:'Прийняти'},zh_CN:{OK:'OK',CANCEL:'取消',CONFIRM:'确认'},zh_TW:{OK:'OK',CANCEL:'取消',CONFIRM:'確認'}},f={dialog:"<div class=\"bootbox modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"bootbox-body\"></div></div></div></div></div>",header:"<div class=\"modal-header\"><h5 class=\"modal-title\"></h5></div>",footer:'<div class="modal-footer"></div>',closeButton:'<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>',form:'<form class="bootbox-form"></form>',button:'<button type="button" class="btn"></button>',option:'<option></option>',promptMessage:'<div class="bootbox-prompt-message"></div>',inputs:{text:'<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',textarea:'<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',email:'<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',select:'<select class="bootbox-input bootbox-input-select form-control"></select>',checkbox:'<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',radio:'<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',date:'<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',time:'<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',number:'<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',password:'<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',range:'<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'}},m={locale:'en',backdrop:'static',animate:!0,className:null,closeButton:!0,show:!0,container:'body',value:'',inputType:'text',swapButtonOrder:!1,centerVertical:!1,multiple:!1,scrollable:!1};function c(t,e,o){return u.extend(!0,{},t,function(t,e){var o=t.length,a={};if(o<1||2<o)throw new Error('Invalid argument length');return 2===o||'string'==typeof t[0]?(a[e[0]]=t[0],a[e[1]]=t[1]):a=t[0],a}(e,o))}function h(t,e,o,a){var r;a&&a[0]&&(r=a[0].locale||m.locale,(a[0].swapButtonOrder||m.swapButtonOrder)&&(e=e.reverse()));var n,i,l,s={className:'bootbox-'+t,buttons:function(t,e){for(var o={},a=0,r=t.length;a<r;a++){var n=t[a],i=n.toLowerCase(),l=n.toUpperCase();o[i]={label:(s=l,c=e,u=b[c],u?u[s]:b.en[s])}}var s,c,u;return o}(e,r)};return n=c(s,a,o),l={},w(i=e,function(t,e){l[e]=!0}),w(n.buttons,function(t){if(l[t]===p)throw new Error('button key "'+t+'" is not allowed (options are '+i.join(' ')+')')}),n}function C(t){return Object.keys(t).length}function w(t,o){var a=0;u.each(t,function(t,e){o(t,e,a++)})}function O(t){t.data.dialog.find('.bootbox-accept').first().trigger('focus')}function v(t){t.target===t.data.dialog[0]&&t.data.dialog.remove()}function g(t){t.target===t.data.dialog[0]&&(t.data.dialog.off('escape.close.bb'),t.data.dialog.off('click'))}function N(t,e,o){t.stopPropagation(),t.preventDefault(),u.isFunction(o)&&!1===o.call(e,t)||e.modal('hide')}function y(t){return/([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(t)}function x(t){return/(\d{4})-(\d{2})-(\d{2})/.test(t)}return d.locales=function(t){return t?b[t]:b},d.addLocale=function(t,o){return u.each(['OK','CANCEL','CONFIRM'],function(t,e){if(!o[e])throw new Error('Please supply a translation for "'+e+'"')}),b[t]={OK:o.OK,CANCEL:o.CANCEL,CONFIRM:o.CONFIRM},d},d.removeLocale=function(t){if('en'===t)throw new Error('"en" is used as the default and fallback locale and cannot be removed.');return delete b[t],d},d.setLocale=function(t){return d.setDefaults('locale',t)},d.setDefaults=function(){var t={};return 2===arguments.length?t[arguments[0]]=arguments[1]:t=arguments[0],u.extend(m,t),d},d.hideAll=function(){return u('.bootbox').modal('hide'),d},d.init=function(t){return e(t||u)},d.dialog=function(t){if(u.fn.modal===p)throw new Error("\"$.fn.modal\" is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(t=function(r){var n,i;if('object'!=typeof r)throw new Error('Please supply an object of options');if(!r.message)throw new Error('"message" option must not be null or an empty string.');(r=u.extend({},m,r)).buttons||(r.buttons={});return n=r.buttons,i=C(n),w(n,function(t,e,o){if(u.isFunction(e)&&(e=n[t]={callback:e}),'object'!==u.type(e))throw new Error('button with key "'+t+'" must be an object');if(e.label||(e.label=t),!e.className){var a=!1;a=r.swapButtonOrder?0===o:o===i-1,e.className=i<=2&&a?'btn-primary':'btn-secondary btn-default'}}),r}(t),u.fn.modal.Constructor.VERSION){t.fullBootstrapVersion=u.fn.modal.Constructor.VERSION;var e=t.fullBootstrapVersion.indexOf('.');t.bootstrap=t.fullBootstrapVersion.substring(0,e)}else t.bootstrap='2',t.fullBootstrapVersion='2.3.2',console.warn('Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.');var o=u(f.dialog),a=o.find('.modal-dialog'),r=o.find('.modal-body'),n=u(f.header),i=u(f.footer),l=t.buttons,s={onEscape:t.onEscape};if(r.find('.bootbox-body').html(t.message),0<C(t.buttons)&&(w(l,function(t,e){var o=u(f.button);switch(o.data('bb-handler',t),o.addClass(e.className),t){case'ok':case'confirm':o.addClass('bootbox-accept');break;case'cancel':o.addClass('bootbox-cancel')}o.html(e.label),i.append(o),s[t]=e.callback}),r.after(i)),!0===t.animate&&o.addClass('fade'),t.className&&o.addClass(t.className),t.size)switch(t.fullBootstrapVersion.substring(0,3)<'3.1'&&console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using '+t.fullBootstrapVersion+'. Please upgrade to use this option.'),t.size){case'small':case'sm':a.addClass('modal-sm');break;case'large':case'lg':a.addClass('modal-lg');break;case'extra-large':case'xl':a.addClass('modal-xl'),t.fullBootstrapVersion.substring(0,3)<'4.2'&&console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using '+t.fullBootstrapVersion+'. Please upgrade to use this option.')}if(t.scrollable&&(a.addClass('modal-dialog-scrollable'),t.fullBootstrapVersion.substring(0,3)<'4.3'&&console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using '+t.fullBootstrapVersion+'. Please upgrade to use this option.')),t.title&&(r.before(n),o.find('.modal-title').html(t.title)),t.closeButton){var c=u(f.closeButton);t.title?3<t.bootstrap?o.find('.modal-header').append(c):o.find('.modal-header').prepend(c):c.prependTo(r)}if(t.centerVertical&&(a.addClass('modal-dialog-centered'),t.fullBootstrapVersion<'4.0.0'&&console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using '+t.fullBootstrapVersion+'. Please upgrade to use this option.')),o.one('hide.bs.modal',{dialog:o},g),t.onHide){if(!u.isFunction(t.onHide))throw new Error('Argument supplied to "onHide" must be a function');o.on('hide.bs.modal',t.onHide)}if(o.one('hidden.bs.modal',{dialog:o},v),t.onHidden){if(!u.isFunction(t.onHidden))throw new Error('Argument supplied to "onHidden" must be a function');o.on('hidden.bs.modal',t.onHidden)}if(t.onShow){if(!u.isFunction(t.onShow))throw new Error('Argument supplied to "onShow" must be a function');o.on('show.bs.modal',t.onShow)}if(o.one('shown.bs.modal',{dialog:o},O),t.onShown){if(!u.isFunction(t.onShown))throw new Error('Argument supplied to "onShown" must be a function');o.on('shown.bs.modal',t.onShown)}return'static'!==t.backdrop&&o.on('click.dismiss.bs.modal',function(t){o.children('.modal-backdrop').length&&(t.currentTarget=o.children('.modal-backdrop').get(0)),t.target===t.currentTarget&&o.trigger('escape.close.bb')}),o.on('escape.close.bb',function(t){s.onEscape&&N(t,o,s.onEscape)}),o.on('click','.modal-footer button:not(.disabled)',function(t){var e=u(this).data('bb-handler');e!==p&&N(t,o,s[e])}),o.on('click','.bootbox-close-button',function(t){N(t,o,s.onEscape)}),o.on('keyup',function(t){27===t.which&&o.trigger('escape.close.bb')}),u(t.container).append(o),o.modal({backdrop:!!t.backdrop&&'static',keyboard:!1,show:!1}),t.show&&o.modal('show'),o},d.alert=function(){var t;if((t=h('alert',['ok'],['message','callback'],arguments)).callback&&!u.isFunction(t.callback))throw new Error('alert requires the "callback" property to be a function when provided');return t.buttons.ok.callback=t.onEscape=function(){return!u.isFunction(t.callback)||t.callback.call(this)},d.dialog(t)},d.confirm=function(){var t;if(t=h('confirm',['cancel','confirm'],['message','callback'],arguments),!u.isFunction(t.callback))throw new Error('confirm requires a callback');return t.buttons.cancel.callback=t.onEscape=function(){return t.callback.call(this,!1)},t.buttons.confirm.callback=function(){return t.callback.call(this,!0)},d.dialog(t)},d.prompt=function(){var r,e,t,n,o,a;if(t=u(f.form),(r=h('prompt',['cancel','confirm'],['title','callback'],arguments)).value||(r.value=m.value),r.inputType||(r.inputType=m.inputType),o=r.show===p?m.show:r.show,r.show=!1,r.buttons.cancel.callback=r.onEscape=function(){return r.callback.call(this,null)},r.buttons.confirm.callback=function(){var t;if('checkbox'===r.inputType)t=n.find('input:checked').map(function(){return u(this).val()}).get();else if('radio'===r.inputType)t=n.find('input:checked').val();else{if(n[0].checkValidity&&!n[0].checkValidity())return!1;t='select'===r.inputType&&!0===r.multiple?n.find('option:selected').map(function(){return u(this).val()}).get():n.val()}return r.callback.call(this,t)},!r.title)throw new Error('prompt requires a title');if(!u.isFunction(r.callback))throw new Error('prompt requires a callback');if(!f.inputs[r.inputType])throw new Error('Invalid prompt type');switch(n=u(f.inputs[r.inputType]),r.inputType){case'text':case'textarea':case'email':case'password':n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.maxlength&&n.attr('maxlength',r.maxlength),r.required&&n.prop({required:!0}),r.rows&&!isNaN(parseInt(r.rows))&&'textarea'===r.inputType&&n.attr({rows:r.rows});break;case'date':case'time':case'number':case'range':if(n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.required&&n.prop({required:!0}),'date'!==r.inputType&&r.step){if(!('any'===r.step||!isNaN(r.step)&&0<parseFloat(r.step)))throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.');n.attr('step',r.step)}!function(t,e,o){var a=!1,r=!0,n=!0;if('date'===t)e===p||(r=x(e))?o===p||(n=x(o))||console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.'):console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.');else if('time'===t){if(e!==p&&!(r=y(e)))throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');if(o!==p&&!(n=y(o)))throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.')}else{if(e!==p&&isNaN(e))throw r=!1,new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.');if(o!==p&&isNaN(o))throw n=!1,new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.')}if(r&&n){if(o<=e)throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');a=!0}return a}(r.inputType,r.min,r.max)||(r.min!==p&&n.attr('min',r.min),r.max!==p&&n.attr('max',r.max));break;case'select':var i={};if(a=r.inputOptions||[],!u.isArray(a))throw new Error('Please pass an array of input options');if(!a.length)throw new Error('prompt with "inputType" set to "select" requires at least one option');r.placeholder&&n.attr('placeholder',r.placeholder),r.required&&n.prop({required:!0}),r.multiple&&n.prop({multiple:!0}),w(a,function(t,e){var o=n;if(e.value===p||e.text===p)throw new Error('each option needs a "value" property and a "text" property');e.group&&(i[e.group]||(i[e.group]=u('<optgroup />').attr('label',e.group)),o=i[e.group]);var a=u(f.option);a.attr('value',e.value).text(e.text),o.append(a)}),w(i,function(t,e){n.append(e)}),n.val(r.value);break;case'checkbox':var l=u.isArray(r.value)?r.value:[r.value];if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "checkbox" requires at least one option');n=u('<div class="bootbox-checkbox-list"></div>'),w(a,function(t,o){if(o.value===p||o.text===p)throw new Error('each option needs a "value" property and a "text" property');var a=u(f.inputs[r.inputType]);a.find('input').attr('value',o.value),a.find('label').append('\n'+o.text),w(l,function(t,e){e===o.value&&a.find('input').prop('checked',!0)}),n.append(a)});break;case'radio':if(r.value!==p&&u.isArray(r.value))throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"');if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "radio" requires at least one option');n=u('<div class="bootbox-radiobutton-list"></div>');var s=!0;w(a,function(t,e){if(e.value===p||e.text===p)throw new Error('each option needs a "value" property and a "text" property');var o=u(f.inputs[r.inputType]);o.find('input').attr('value',e.value),o.find('label').append('\n'+e.text),r.value!==p&&e.value===r.value&&(o.find('input').prop('checked',!0),s=!1),n.append(o)}),s&&n.find('input[type="radio"]').first().prop('checked',!0)}if(t.append(n),t.on('submit',function(t){t.preventDefault(),t.stopPropagation(),e.find('.bootbox-accept').trigger('click')}),''!==u.trim(r.message)){var c=u(f.promptMessage).html(r.message);t.prepend(c),r.message=t}else r.message=t;return(e=d.dialog(r)).off('shown.bs.modal',O),e.on('shown.bs.modal',function(){n.focus()}),!0===o&&e.modal('show'),e},d});
/*!
 * Socket.IO v2.3.0
 * (c) 2014-2019 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,r=o(t),i=r.source,u=r.id,p=r.path,h=c[u]&&p in c[u].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||h;return f?(a("ignoring socket cache for %s",i),n=s(i,e)):(c[u]||(a("new io instance for %s",i),c[u]=s(i,e)),n=c[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o=n(1),i=n(7),s=n(15),a=n(3)("socket.io-client");t.exports=e=r;var c=e.managers={};e.protocol=i.protocol,e.connect=r,e.Manager=n(15),e.Socket=n(39)},function(t,e,n){function r(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var r=n.host.indexOf(":")!==-1,s=r?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){"use strict";function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),this.useColors){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(r++,"%c"===t&&(o=r))}),e.splice(o,0,n)}}function s(){var t;return"object"===("undefined"==typeof console?"undefined":p(console))&&console.log&&(t=console).log.apply(t,arguments)}function a(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(n){}}function c(){var t=void 0;try{t=e.storage.getItem("debug")}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function u(){try{return localStorage}catch(t){}}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=n(5)(e);var h=t.exports.formatters;h.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,h,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t){function e(t){for(var e=0,n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return o.colors[Math.abs(e)%o.colors.length]}function o(t){function n(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];if(n.enabled){var s=n,a=Number(new Date),c=a-(r||a);s.diff=c,s.prev=r,s.curr=a,r=a,e[0]=o.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");var u=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,function(t,n){if("%%"===t)return t;u++;var r=o.formatters[n];if("function"==typeof r){var i=e[u];t=r.call(s,i),e.splice(u,1),u--}return t}),o.formatArgs.call(s,e);var p=s.log||o.log;p.apply(s,e)}}var r=void 0;return n.namespace=t,n.enabled=o.enabled(t),n.useColors=o.useColors(),n.color=e(t),n.destroy=i,n.extend=s,"function"==typeof o.init&&o.init(n),o.instances.push(n),n}function i(){var t=o.instances.indexOf(this);return t!==-1&&(o.instances.splice(t,1),!0)}function s(t,e){var n=o(this.namespace+("undefined"==typeof e?":":e)+t);return n.log=this.log,n}function a(t){o.save(t),o.names=[],o.skips=[];var e=void 0,n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length;for(e=0;e<r;e++)n[e]&&(t=n[e].replace(/\*/g,".*?"),"-"===t[0]?o.skips.push(new RegExp("^"+t.substr(1)+"$")):o.names.push(new RegExp("^"+t+"$")));for(e=0;e<o.instances.length;e++){var i=o.instances[e];i.enabled=o.enabled(i.namespace)}}function c(){var t=[].concat(r(o.names.map(p)),r(o.skips.map(p).map(function(t){return"-"+t}))).join(",");return o.enable(""),t}function u(t){if("*"===t[t.length-1])return!0;var e=void 0,n=void 0;for(e=0,n=o.skips.length;e<n;e++)if(o.skips[e].test(t))return!1;for(e=0,n=o.names.length;e<n;e++)if(o.names[e].test(t))return!0;return!1}function p(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function h(t){return t instanceof Error?t.stack||t.message:t}return o.debug=o,o["default"]=o,o.coerce=h,o.disable=c,o.enable=a,o.enabled=u,o.humanize=n(6),Object.keys(t).forEach(function(e){o[e]=t[e]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=e,o.enable(o.load()),o}t.exports=o},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*h;case"weeks":case"week":case"w":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){var e=Math.abs(t);return e>=u?Math.round(t/u)+"d":e>=c?Math.round(t/c)+"h":e>=a?Math.round(t/a)+"m":e>=s?Math.round(t/s)+"s":t+"ms"}function o(t){var e=Math.abs(t);return e>=u?i(t,e,u,"day"):e>=c?i(t,e,c,"hour"):e>=a?i(t,e,a,"minute"):e>=s?i(t,e,s,"second"):t+" ms"}function i(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}var s=1e3,a=60*s,c=60*a,u=24*c,p=7*u,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isFinite(t))return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f("encoded %j as %s",t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h("unknown packet type "+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=u(t.substr(n)),c=a!==!1&&(r.type===e.ERROR||y(a));if(!c)return h("invalid payload");r.data=a}return f("decoded %s as %j",t,r),r}function u(t){try{return JSON.parse(t)}catch(e){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error: "+t}}var f=n(8)("socket.io-parser"),l=n(11),d=n(12),y=n(13),m=n(14);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+'"encode error"';r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if("string"==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!m(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){(function(r){"use strict";function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"===("undefined"==typeof console?"undefined":p(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function u(){try{return window.localStorage}catch(t){}}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e=t.exports=n(9),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e,n){"use strict";function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var u=n.log||e.log||console.log.bind(console);u.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&&(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(10),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(13),s=n(14),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),u="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,p){if(!t)return t;if(c&&t instanceof Blob||u&&t instanceof File){r++;var h=new FileReader;h.onload=function(){p?p[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){function n(t){return r&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=n;var r="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"==typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||a;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o=n(16),i=n(39),s=n(11),a=n(7),c=n(41),u=n(42),p=n(3)("socket.io-client:manager"),h=n(38),f=n(43),l=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},s(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var i=c(n,"open",function(){r.onopen(),t&&t()}),s=c(n,"error",function(e){if(p("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var u=setTimeout(function(){p("connect attempt timed out after %d",a),i.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},r.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",u(this,"ondata"))),this.subs.push(c(t,"ping",u(this,"onping"))),this.subs.push(c(t,"pong",u(this,"onpong"))),this.subs.push(c(t,"error",u(this,"onerror"))),this.subs.push(c(t,"close",u(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~h(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new i(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=h(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(17),t.exports.parser=n(24)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(18),s=n(11),a=n(3)("engine.io-client:socket"),c=n(38),u=n(24),p=n(2),h=n(32);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=u.protocol,r.Socket=r,r.Transport=n(23),r.transports=n(18),r.parser=n(24),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,withCredentials:n.withCredentials||this.withCredentials,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{
if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",p),!p)return;r.priorWebsocketSuccess="websocket"===p.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(p),p.send([{type:"upgrade"}]),f.emit("upgrade",p),p=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,u(),p.close(),p=null)}function o(e){var r=new Error("probe error: "+e);r.transport=p.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){p&&t.name!==p.name&&(a('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",c),p.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,u=location.port;u||(u=c?443:80),n=t.hostname!==location.hostname||u!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=n(19),i=n(21),s=n(35),a=n(36);e.polling=r,e.websocket=a},function(t,e,n){var r=n(20);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(i){}try{if("undefined"!=typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(i){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(19),c=n(22),u=n(11),p=n(33),h=n(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(n.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(r){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError("number"==typeof e.status?e.status:0)},0))},h("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var f="onpagehide"in self?"pagehide":"unload";addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(23),i=n(32),s=n(24),a=n(33),c=n(34),u=n(3)("engine.io-client:polling");t.exports=r;var p=function(){var t=n(19),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){u("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(u("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){u("pre-pause polling complete"),--r||e()})),this.writable||(u("we are currently writing - waiting to pause"),r++,this.once("drain",function(){u("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;u("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(24),i=n(11);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,p=n(25),h=n(26),f=n(27),l=n(28),d=n(29);"undefined"!=typeof ArrayBuffer&&(u=n(30));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),C={type:"error",data:"parser error"},w=n(31);e.encodePacket=function(t,e,n,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof n&&(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof w&&a instanceof w)return s(t,e,i);if(a&&a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&&(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,n){var r="b"+e.packets[t.type];if("undefined"!=typeof w&&t.data instanceof w){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return C;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return C;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:C}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===n&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!u)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=u.decode(t.substr(1));return"blob"===e&&w&&(r=new w([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?w&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(C,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var p=t.charAt(c);if(":"===p){if(""===a||a!=(i=Number(a)))return r(C,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(C,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),C.type===o.type&&C.data===o.data)return r(C,0,1);var h=r(o,c+i,u);if(!1===h)return}c+=i,a=""}else a+=p}return""!==a?r(C,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new w(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",u=1;255!==s[u];u++){if(c.length>310)return r(C,0,1);c+=s[u]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(h){var l=new Uint8Array(p);p="";for(var u=0;u<l.length;u++)p+=String.fromCharCode(l[u])}i.push(p),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e<n;e++)if(r(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0;return!1}var o=n(13),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var n="";return 0==(4294965248&t)?n=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),n=d(t>>12&15|224),n+=i(t,6)):0==(4292870144&t)&&(n=d(t>>18&7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,u="";++c<a;)r=i[c],u+=s(r,o);return u}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&h[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function u(t){var e,n,r,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&h[l],l++,0==(128&e))return e;if(192==(224&e)){if(n=c(),s=(31&e)<<6|n,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=c(),r=c(),s=(15&e)<<12|n<<6|r,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=c(),r=c(),i=c(),s=(7&e)<<18|n<<12|r<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function p(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=u(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var h,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:p}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var p=new ArrayBuffer(a),h=new Uint8Array(p);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[u++]=r<<2|o>>4,h[u++]=(15&o)<<4|i>>2,h[u++]=(3&i)<<6|63&s;return p}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=n(+new Date);return t!==i?(u=0,i=t):t+"."+n(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var s=n(22),a=n(33);t.exports=i;var c,u=/\n/g,p=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,"\\\n"),this.area.value=t.replace(u,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(23),a=n(24),c=n(32),u=n(33),p=n(34),h=n(3)("engine.io-client:websocket");if("undefined"!=typeof WebSocket?o=WebSocket:"undefined"!=typeof self&&(o=self.WebSocket||self.MozWebSocket),"undefined"==typeof window)try{i=n(37)}catch(f){}var l=o||i;t.exports=r,u(r,s),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o<i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),n.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h("websocket closed before onclose event")}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o=n(7),i=n(11),s=n(40),a=n(41),c=n(42),u=n(3)("socket.io-client:socket"),p=n(32),h=n(26);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=i.prototype.emit;i(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=s(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?o.BINARY_EVENT:o.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"==typeof this.query?p.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:o.CONNECT,query:t})}else this.packet({type:o.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===o.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=s(arguments);u("sending ack %j",r),e.packet({type:h(r)?o.BINARY_ACK:o.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map
!function(s,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.socketio=e():s.socketio=e()}(self,(function(){return(()=>{"use strict";var s={d:(e,i)=>{for(var t in i)s.o(i,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},o:(s,e)=>Object.prototype.hasOwnProperty.call(s,e),r:s=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function i(s,e){var i="undefined"!=typeof Symbol&&s[Symbol.iterator]||s["@@iterator"];if(!i){if(Array.isArray(s)||(i=function(s,e){if(s){if("string"==typeof s)return t(s,e);var i=Object.prototype.toString.call(s).slice(8,-1);return"Object"===i&&s.constructor&&(i=s.constructor.name),"Map"===i||"Set"===i?Array.from(s):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(s,e):void 0}}(s))||e&&s&&"number"==typeof s.length){i&&(s=i);var n=0,o=function(){};return{s:o,n:function(){return n>=s.length?{done:!0}:{done:!1,value:s[n++]}},e:function(s){throw s},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,r=!0,u=!1;return{s:function(){i=i.call(s)},n:function(){var s=i.next();return r=s.done,s},e:function(s){u=!0,c=s},f:function(){try{r||null==i.return||i.return()}finally{if(u)throw c}}}}function t(s,e){(null==e||e>s.length)&&(e=s.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=s[i];return t}s.r(e),s.d(e,{default:()=>n});const n=function(s){var e={_socket:null,_subscribeCounter:0,_subscribesAll:{},_subscribesPath:{},_subscribesWaitingTimeoutId:0,_subscribesWaitingDoing:!1,_subscribesWaiting:{},_unsubscribesWaitingTimeoutId:0,_unsubscribesWaitingDoing:!1,_unsubscribesWaiting:{},subscribe:function(s,e,i,t){t=t||{};var n=this._getSocket();n.connected||n.connect();var o=++this._subscribeCounter;this._subscribesAll[o]={path:s,cbMessage:e,cbSubscribed:i,options:t};var c=this._subscribesPath[s],r=!1;return c||(c=this._subscribesPath[s]={scene:t.scene,items:{}},r=!0,delete this._unsubscribesWaiting[s]),c.items[o]=!0,n.connected&&(r?(this._subscribesWaiting[s]=!0,this._doSubscribesWaiting()):this._subscribesWaiting[s]||i&&i()),o},unsubscribe:function(s){var e=this._subscribesAll[s];if(e){var i=this._subscribesPath[e.path];i&&(delete i.items[s],0===Object.keys(i.items).length&&(delete this._subscribesPath[e.path],delete this._subscribesWaiting[e.path],i.socketId&&(this._unsubscribesWaiting[e.path]={scene:i.scene,socketId:i.socketId},this._doUnsubscribesWaiting()))),delete this._subscribesAll[s],0===Object.keys(this._subscribesAll).length&&this.disconnect()}},_doSubscribesWaiting:function(){var e=this;if(!this._subscribesWaitingDoing&&0===this._subscribesWaitingTimeoutId&&0!==Object.keys(this._subscribesWaiting).length&&this._socket.connected){var t=[];for(var n in this._subscribesWaiting){var o=this._subscribesPath[n];o&&t.push({path:n,scene:o.scene})}this._subscribesWaitingDoing=!0,s.subscribe({subscribes:t,socketId:this._socket.id}).then((function(){var s,n=i(t);try{for(n.s();!(s=n.n()).done;){var o=s.value;delete e._subscribesWaiting[o.path];var c=e._subscribesPath[o.path];if(c)for(var r in c.socketId=e._socket.id,c.items){var u=e._subscribesAll[r];u&&u.cbSubscribed&&u.cbSubscribed()}}}catch(s){n.e(s)}finally{n.f()}e._subscribesWaitingDoing=!1,e._doSubscribesWaiting()})).catch((function(s){e._subscribesWaitingDoing=!1,401===s.code?e._logout():e._subscribesWaitingTimeoutId=window.setTimeout((function(){e._subscribesWaitingTimeoutId=0,e._doSubscribesWaiting()}),2e3)}))}},_doUnsubscribesWaiting:function(){var e=this;if(!this._unsubscribesWaitingDoing&&0===this._unsubscribesWaitingTimeoutId&&0!==Object.keys(this._unsubscribesWaiting).length){var t=[];for(var n in this._unsubscribesWaiting)if(this._subscribesPath[n])delete this._unsubscribesWaiting[n];else{var o=this._unsubscribesWaiting[n];t.push({path:n,scene:o.scene,socketId:o.socketId})}this._unsubscribesWaitingDoing=!0,s.unsubscribe({subscribes:t}).then((function(){var s,n=i(t);try{for(n.s();!(s=n.n()).done;){var o=s.value;delete e._unsubscribesWaiting[o.path]}}catch(s){n.e(s)}finally{n.f()}e._unsubscribesWaitingDoing=!1,e._doUnsubscribesWaiting()})).catch((function(s){e._unsubscribesWaitingDoing=!1,401===s.code?e._logout():e._unsubscribesWaitingTimeoutId=window.setTimeout((function(){e._unsubscribesWaitingTimeoutId=0,e._doUnsubscribesWaiting()}),2e3)}))}},_getSocket:function(){return this._socket||(this._socket=s.socket(),this._socket.on("connect",this._onConnectBind),this._socket.on("disconnect",this._onDisconnectBind),this._socket.on("message",this._onMessageBind),this._socket.on("message-system",this._onMessageSystemBind)),this._socket},_logout:function(){this.disconnect(),s.logout&&s.logout()},_onMessage:function(s){var e=this._subscribesPath[s.path];if(e)for(var i in e.items){var t=this._subscribesAll[i];t&&t.cbMessage&&t.cbMessage({message:s.message})}},_onMessageSystem:function(s){401===s.code&&this._onMessageSystem_401(s)},_onMessageSystem_401:function(e){var i=e.type;if("self"===i||"all"===i)this._logout();else if("provider"===i){var t=s.user();if(t.op.anonymous)this._logout();else{var n=t.provider,o=e.provider;n.scene===o.scene&&n.id===o.id&&this._logout()}}},_onConnect:function(){if(this._subscribesWaiting={},0===Object.keys(this._subscribesPath).length)this.disconnect();else{for(var s in this._subscribesPath)this._subscribesWaiting[s]=!0;this._doSubscribesWaiting()}},_onDisconnect:function(s){this._subscribesWaiting={},"io server disconnect"!==s&&"transport close"!==s||this.connect()},connect:function(){this._socket&&this._socket.connect()},disconnect:function(){this._socket&&this._socket.disconnect()},reset:function(){var e=this;this._unsubscribesWaiting={},this._unsubscribesWaitingTimeoutId=0,this._unsubscribesWaitingDoing=!1,this._subscribesWaiting={},this._subscribesWaitingTimeoutId=0,this._subscribesWaitingDoing=!1,this._subscribesAll={},this._subscribesPath={},this.disconnect(),this._socket&&(this._socket.off("connect",this._onConnectBind),this._socket.off("disconnect",this._onDisconnectBind),this._socket.off("message",this._onMessageBind),this._socket.off("message-system",this._onMessageSystemBind),this._socket=null),s.user().op.anonymous||this.subscribe("/a/socketio/messageSystem",(function(s){var i=s.message;e._onMessageSystem(JSON.parse(i.content))}))}};return e._onConnectBind=e._onConnect.bind(e),e._onDisconnectBind=e._onDisconnect.bind(e),e._onMessageBind=e._onMessage.bind(e),e._onMessageSystemBind=e._onMessageSystem.bind(e),s.initialize(e),e};return e})()}));
//# sourceMappingURL=socketio.min.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  function __patchJSON() {
    var __dateTest = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

    function __jsonReviver(k, v, reviver) {
      if (v && typeof v === 'string' && __dateTest.test(v)) {
        v = new Date(v);
      }

      if (!reviver) return v;
      return reviver(k, v);
    }

    var _jsonParse = JSON.parse;

    JSON.parse = function (source, reviver) {
      return _jsonParse(source, function (k, v) {
        return __jsonReviver(k, v, reviver);
      });
    };

    var _json5Parse = window.JSON5.parse;

    window.JSON5.parse = function (source, reviver) {
      return _json5Parse(source, function (k, v) {
        return __jsonReviver(k, v, reviver);
      });
    };
  }

  __patchJSON();

  var HTML_ESCAPE_TEST_RE = /[&<>"']/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"']/g;
  var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  function _replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }

  function _escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, _replaceUnsafeChar);
    }

    return str;
  }

  var URL_ESCAPE_TEST_RE = /[<>"']/;
  var URL_ESCAPE_REPLACE_RE = /[<>"']/g;
  var URL_REPLACEMENTS = {
    '<': '%3C',
    '>': '%3E',
    '"': '%22',
    "'": '%27'
  };

  function _replaceUnsafeCharURL(ch) {
    return URL_REPLACEMENTS[ch];
  }

  function _escapeURL(str) {
    if (URL_ESCAPE_TEST_RE.test(str)) {
      return str.replace(URL_ESCAPE_REPLACE_RE, _replaceUnsafeCharURL);
    }

    return str;
  }

  var _createPromise = function _createPromise(handler) {
    var resolved = false;
    var rejected = false;
    var resolveArgs;
    var rejectArgs;
    var promiseHandlers = {
      then: undefined,
      "catch": undefined
    };
    var promise = {
      then: function then(thenHandler) {
        if (resolved) {
          thenHandler.apply(void 0, _toConsumableArray(resolveArgs));
        } else {
          promiseHandlers.then = thenHandler;
        }

        return promise;
      },
      "catch": function _catch(catchHandler) {
        if (rejected) {
          catchHandler.apply(void 0, _toConsumableArray(rejectArgs));
        } else {
          promiseHandlers["catch"] = catchHandler;
        }

        return promise;
      }
    };

    function resolve() {
      resolved = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (promiseHandlers.then) promiseHandlers.then.apply(promiseHandlers, args);else resolveArgs = args;
    }

    function reject() {
      rejected = true;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (promiseHandlers["catch"]) promiseHandlers["catch"].apply(promiseHandlers, args);else rejectArgs = args;
    }

    handler(resolve, reject);
    return promise;
  };

  var _formatDateTime = function _formatDateTime(date, fmt) {
    var o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'Q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }

    return fmt;
  };

  var _time = {
    now: function now() {
      return this.formatDateTime(null);
    },
    today: function today() {
      return this.formatDate(null);
    },
    formatDateTime: function formatDateTime(date, fmt) {
      date = date || new Date();
      if (_typeof(date) !== 'object') date = new Date(date);
      fmt = fmt || 'YYYY-MM-DD HH:mm:ss';
      return _formatDateTime(date, fmt);
    },
    formatDate: function formatDate(date, sep) {
      sep = sep || '-';
      return this.formatDateTime(date, "YYYY".concat(sep, "MM").concat(sep, "DD"));
    },
    formatTime: function formatTime(date, sep) {
      sep = sep || ':';
      return this.formatDateTime(date, "HH".concat(sep, "mm").concat(sep, "ss"));
    }
  };
  window.util = {
    time: _time,
    formatDateTime: function formatDateTime(date) {
      return this.time.formatDateTime(date, "".concat(env.format.date, " ").concat(env.format.time));
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || window.location.href;
      var params;
      var param;
      var length;

      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&');
        length = params.length;

        for (var i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }

      return query;
    },
    promise: function promise(handler) {
      return window.Promise ? new Promise(handler) : _createPromise(handler);
    },
    getAtomClassFullName: function getAtomClassFullName(atomClass) {
      return "".concat(atomClass.module, ":").concat(atomClass.atomClassName);
    },
    atomClassEqual: function atomClassEqual(atomClass1, atomClass2) {
      if (!atomClass1 || !atomClass2) return false;
      return this.getAtomClassFullName(atomClass1) === this.getAtomClassFullName(atomClass2);
    },
    rootUrl: function rootUrl(language, atomClass) {
      var _env;

      if (!atomClass || this.atomClassEqual(atomClass, env.site.atomClass)) {
        _env = env;
      } else {
        _env = env.envs && env.envs[this.getAtomClassFullName(atomClass)];
        if (!_env) return null;
      }

      language = language || _env.language && _env.language.current;
      return "".concat(_env.site.rawRootUrl).concat(!_env.language || language === _env.language["default"] ? '' : '/' + language);
    },
    url: function url(path, language, atomClass) {
      if (path && (path.indexOf('http://') === 0 || path.indexOf('https://') === 0)) return this.escapeURL(path);
      var urlRoot = this.rootUrl(language, atomClass);

      var _url = path ? "".concat(urlRoot, "/").concat(path) : urlRoot;

      return this.escapeURL(_url);
    },
    serverUrl: function serverUrl(str) {
      var baseURL = 'http://localhost:9092';
      if (!str) return baseURL;
      if (str && (str.indexOf('http://') === 0 || str.indexOf('https://') === 0)) return str;
      if (str[0] !== '/') str = '/' + str;
      return baseURL + str;
    },
    ajax: function ajax(_ref) {
      var _this = this;

      var url = _ref.url,
          body = _ref.body;
      return this.promise(function (resolve, reject) {
        $.ajax({
          type: 'GET',
          url: _this.serverUrl("/api".concat(url)),
          data: body,
          dataType: 'jsonp',
          timeout: 18000
        }).done(function (data) {
          if (data.code === 0) {
            resolve(data.data);
          } else {
            reject(data.message);
          }
        }).fail(function () {
          reject(null);
        });
      });
    },
    cors: function cors(_ref2) {
      var _this2 = this;

      var method = _ref2.method,
          url = _ref2.url,
          body = _ref2.body;
      return this.promise(function (resolve, reject) {
        var ajaxMethod = method.toUpperCase();
        $.ajax({
          type: ajaxMethod,
          url: _this2.serverUrl("/api".concat(url)),
          data: ajaxMethod === 'POST' ? JSON.stringify(body) : body,
          contentType: ajaxMethod === 'POST' ? 'application/json' : undefined,
          dataType: 'json',
          timeout: 18000,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            'x-scene': 'web',
            'x-clientid': _this2.clientId
          }
        }).done(function (data) {
          if (data.code === 0) {
            resolve(data.data);
          } else {
            reject(data.message);
          }
        }).fail(function (xhr, status) {
          reject(xhr.responseJSON && xhr.responseJSON.message || status);
        });
      });
    },
    performAction: function performAction(params) {
      if ($.support && $.support.cors) {
        return this.cors(params);
      }

      return this.ajax({
        url: '/a/base/util/performAction',
        body: {
          params: JSON.stringify(params)
        }
      });
    },
    combineImageUrl: function combineImageUrl(url, width, height) {
      if (!url) return this.url('plugins/cms-pluginbase/assets/images/avatar_user.png');
      if (url.indexOf('/api/a/file/file/download') === -1) return this.escapeURL(url);
      if (!width && !height) return this.escapeURL(url);
      var pixelRatio = window.devicePixelRatio || 1;
      var query = '';
      if (width) query = "width=".concat(parseInt(width) * pixelRatio);
      if (height) query = "".concat(query ? query + '&' : '', "height=").concat(parseInt(height) * pixelRatio);

      var _url = "".concat(url).concat(url.charAt(url.length - 1) === '?' ? '' : '?').concat(query);

      return this.escapeURL(_url);
    },
    loadMore: function loadMore(_ref3) {
      var container = _ref3.container,
          loadOnScroll = _ref3.loadOnScroll,
          _ref3$threshold = _ref3.threshold,
          threshold = _ref3$threshold === void 0 ? 100 : _ref3$threshold,
          _ref3$index = _ref3.index,
          index = _ref3$index === void 0 ? 0 : _ref3$index,
          context = _ref3.context,
          onFetch = _ref3.onFetch,
          onParse = _ref3.onParse;
      if (loadOnScroll === undefined) loadOnScroll = env.loadMore.loadOnScroll;
      var $container = $(container);
      var $window = $(window);
      var $body = $('body');
      var $loadMoreContainer = $('<div class="load-more"></div>');
      $loadMoreContainer.insertAfter($container);
      var finished = false;
      var fetching = false;
      var error = false;
      var _onFetch2 = null;

      var _showButtonLoadMore = function _showButtonLoadMore() {
        var $buttonMore = $('<button type="button" class="btn btn-warning btn-xs">Load More</button>');
        $buttonMore.click(function () {
          _onFetch2();
        });
        $loadMoreContainer.empty();
        $loadMoreContainer.append($buttonMore);
      };

      var _showTextLoadCompleted = function _showTextLoadCompleted() {
        $loadMoreContainer.empty();
      };

      _onFetch2 = function _onFetch() {
        fetching = true;
        $loadMoreContainer.empty();
        $loadMoreContainer.append($('<i class="fas fa-sync"></i>'));
        var res = onFetch({
          index: index,
          context: context
        });
        res.then(function (data) {
          if (!data.finished) {
            _showButtonLoadMore();
          } else {
            _showTextLoadCompleted();
          }

          index = data.index;
          finished = data.finished;

          for (var i = 0; i < data.list.length; i++) {
            $container.append($(onParse(data.list[i])));
          }

          error = false;
          fetching = false;
        })["catch"](function (err) {
          console.error(err);
          var $buttonTry = $('<button type="button" class="btn btn-warning btn-xs">Load error, try again</button>');
          $buttonTry.click(function () {
            _onFetch2();
          });
          $loadMoreContainer.empty();
          $loadMoreContainer.append($buttonTry);
          error = true;
          fetching = false;
        });
      };

      var _onScroll = function _onScroll() {
        if (finished || fetching || error) return false;

        if ($body.outerHeight() - $window.height() - $window.scrollTop() < threshold || $container.offset().top + $container.outerHeight() - $window.height() - $window.scrollTop() < threshold) {
          _onFetch2();

          return true;
        }

        return false;
      };

      var _getInitIndex = function _getInitIndex() {
        if (!env.index || !env.site.path) return 0;
        return env.index[env.site.path];
      };

      var _fetchOrScroll = function _fetchOrScroll() {
        if (index === _getInitIndex()) {
          _onFetch2();
        } else {
          if (!_onScroll()) {
            _showButtonLoadMore();
          }
        }
      };

      if (loadOnScroll) {
        $window.on('scroll.infinite resize.infinite', _onScroll);
      }

      _fetchOrScroll();

      var _controller = {
        reload: function reload(ops) {
          if (fetching) return false;
          index = ops.index;
          context = ops.context;
          finished = false;
          error = false;
          $container.empty();

          _fetchOrScroll();

          return true;
        }
      };
      return _controller;
    },
    loadScript: function loadScript(src, callback) {
      if (!(typeof callback === 'function')) {
        callback = function callback() {};
      }

      var check = document.querySelectorAll("script[src='" + src + "']");

      if (check.length > 0) {
        check[0].addEventListener('load', function () {
          callback();
        });
        callback();
        return;
      }

      var script = document.createElement('script');
      var head = document.getElementsByTagName('head')[0];
      script.type = 'text/javascript';
      script.charset = 'UTF-8';
      script.async = true;
      script.src = src;

      if (script.addEventListener) {
        script.addEventListener('load', function () {
          callback();
        }, false);
      } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
          var target = window.event.srcElement;

          if (target.readyState === 'loaded') {
            callback();
          }
        });
      }

      head.appendChild(script);
    },
    loadLink: function loadLink(src, callback) {
      if (!(typeof callback === 'function')) {
        callback = function callback() {};
      }

      var check = document.querySelectorAll("link[href='" + src + "']");

      if (check.length > 0) {
        callback();
        return;
      }

      var link = document.createElement('link');
      var head = document.getElementsByTagName('head')[0];
      link.rel = 'stylesheet';
      link.href = src;

      if (link.addEventListener) {
        link.addEventListener('load', function () {
          callback();
        }, false);
      } else if (link.attachEvent) {
        link.attachEvent('onreadystatechange', function () {
          var target = window.event.srcElement;

          if (target.readyState === 'loaded') {
            callback();
          }
        });
      }

      head.appendChild(link);
    },
    echo: function echo() {
      var _this3 = this;

      return this.performAction({
        method: 'post',
        url: '/a/base/auth/echo'
      }).then(function (data) {
        _this3.user = data.user;
        _this3.clientId = data.clientId;
        $(document).trigger('echo-ready', data);
      });
    },
    escapeHtml: function escapeHtml(str) {
      return _escapeHtml(str);
    },
    escapeURL: function escapeURL(str) {
      return _escapeURL(str);
    },
    hostUtil: function hostUtil(options) {
      var self = this;
      return {
        text: function text() {
          return arguments.length <= 0 ? undefined : arguments[0];
        },
        url: function url(str) {
          return this.escapeURL(self.serverUrl(str));
        },
        urlFront: function urlFront(str) {
          return this.url(str);
        },
        escapeHtml: function escapeHtml(str) {
          return util.escapeHtml(str);
        },
        escapeURL: function escapeURL(str) {
          return util.escapeURL(str);
        },
        performAction: function performAction(_ref4) {
          var method = _ref4.method,
              url = _ref4.url,
              body = _ref4.body;
          return self.performAction({
            method: method,
            url: url,
            body: body
          });
        },
        navigate: function navigate(url) {
          window.location.assign(url);
        }
      };
    },
    login: function login() {
      var url = "".concat(env.site.serverUrl, "/#!").concat(location.href);
      location.assign(url);
    },
    logout: function logout() {
      util.performAction({
        method: 'post',
        url: '/a/base/auth/logout'
      }).then(function () {
        location.reload();
      });
    }
  };
  $(document).ready(function () {
    var requirecss_path = 'api/static/a/base/vendor/require-css/css.min';
    var config = {
      baseUrl: window.util.serverUrl(),
      map: {
        '*': {
          css: requirecss_path
        }
      }
    };
    window.requirejs.config(config);
  });
})();
"use strict";

(function () {
  var __socketioAdapter = {
    _io: null,
    initialize: function initialize(io) {
      var self = this;
      self._io = io;
      $(document).on('echo-ready', function () {
        self._io.reset();
      });
      $(document).on('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
          self._io.disconnect();
        }

        if (document.visibilityState === 'visible') {
          if (!util.user.op.anonymous) {
            self._io.connect();
          }
        }
      });

      self._io.reset();
    },
    subscribe: function subscribe(_ref) {
      var subscribes = _ref.subscribes,
          socketId = _ref.socketId;
      return util.performAction({
        method: 'post',
        url: '/a/socketio/subscribe',
        body: {
          subscribes: subscribes,
          socketId: socketId
        }
      });
    },
    unsubscribe: function unsubscribe(_ref2) {
      var subscribes = _ref2.subscribes;
      return util.performAction({
        method: 'post',
        url: '/a/socketio/unsubscribe',
        body: {
          subscribes: subscribes
        }
      });
    },
    socket: function socket() {
      var url = 'http://localhost:9092';
      var opts = {
        autoConnect: false,
        withCredentials: true,
        transports: ['websocket']
      };
      opts.query = {
        'x-scene': util.user.provider.scene,
        'x-clientid': util.clientId
      };
      return window.io(url, opts);
    },
    user: function user() {
      return util.user;
    },
    logout: function logout() {
      location.reload(true);
    }
  };
  Object.defineProperty(util, 'io', {
    get: function get() {
      if (!util.__io) {
        var _io = window.socketio["default"](__socketioAdapter);

        var _subscribe = _io.subscribe;

        _io.subscribe = function (path, cbMessage, cbSubscribed, options) {
          options = options || {};

          if (options.scene === undefined) {
            options.scene = util.clientId;
          }

          return _subscribe.call(_io, path, cbMessage, cbSubscribed, options);
        };

        util.__io = _io;
      }

      return util.__io;
    }
  });
})();
"use strict";

(function () {
  $(document).ready(function () {
    util.echo();
    $.each($('.img-delay'), function (index, item) {
      var $item = $(item);
      var src = $item.data('src');
      var width = $item.data('width');
      var height = $item.data('height');
      $item.attr('src', util.combineImageUrl(src, width, height));
      $(item).removeClass('img-delay');
    });
  });
  $(document).on('echo-ready', function () {
    if (util.user.op.anonymous) return;
    var atomId;
    var file;
    var hotloadFile;

    if (env.site.path === 'static/waiting') {
      var query = util.parseUrlQuery();
      atomId = parseInt(query.atomId);
      hotloadFile = "atom/".concat(atomId);
    } else if (env.article) {
      if (env.article.userIdUpdated === util.user.op.id) {
        atomId = env.article.atomId;
        hotloadFile = "atom/".concat(atomId);
      }
    } else {
      file = env.site.hotloadFile;
      hotloadFile = file;
    }

    if (!hotloadFile) return;
    var __hotloadFileTime = 0;
    window.setTimeout(function () {
      var subscribePath = "/a/cms/hotloadFile/".concat(hotloadFile);
      util.io.subscribe(subscribePath, function () {
        location.reload(true);
      }, function () {
        util.performAction({
          method: 'post',
          url: '/a/cms/site/checkFile',
          body: {
            atomId: atomId,
            file: file,
            mtime: __hotloadFileTime
          }
        }).then(function (data) {
          if (env.site.path === 'static/waiting') {
            if (data && data.mtime) {
              getArticleUrl(atomId, function (url) {
                location.replace(url);
              });
            }
          } else if (atomId) {
            if (data && data.mtime > new Date(env.article.renderAt).getTime()) {
              location.reload(true);
            }
          } else {
            if (!__hotloadFileTime) {
              if (data && data.mtime) {
                __hotloadFileTime = data.mtime;
              }
            } else {
              if (data && data.mtime !== __hotloadFileTime) {
                location.reload(true);
              }
            }
          }
        });
      });
    }, 0);

    function getArticleUrl(atomId, cb) {
      util.performAction({
        method: 'post',
        url: '/a/cms/render/getArticleUrl',
        body: {
          key: {
            atomId: atomId
          }
        }
      }).then(function (data) {
        if (data && data.url) {
          cb(data.url);
        }
      });
    }
  });
})();
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  function _onParseComment(item) {
    var actionsEdit = item.userId !== util.user.op.id ? '' : "\n<a href=\"".concat(util.article.commentUrl({
      atomId: item.atomId,
      id: item.id,
      replyId: 0
    }), "\" class=\"action\" target=\"_self\"><i class=\"fas fa-edit\"></i></a>\n<a href=\"#\" class=\"action delete\"><i class=\"fas fa-trash\"></i></a>\n");
    var reply = !env.article.allowComment ? '' : "\n<a href=\"".concat(util.article.commentUrl({
      atomId: item.atomId,
      id: 0,
      replyId: item.id
    }), "\" class=\"action\" target=\"_self\"><i class=\"fas fa-reply\"></i></a>\n");
    var html = "\n<div class=\"comment card panel-default\" data-atom-id=\"".concat(item.atomId, "\" data-comment-id=\"").concat(item.id, "\">\n<div class=\"header card-header\">\n<div class=\"user\">\n<img class=\"avatar avatar32\" src=\"").concat(util.combineImageUrl(item.avatar, 32, 32), "\" />\n<h3 class=\"name panel-title\">").concat(util.escapeHtml(item.userName), "</h3>\n<div class=\"date\">#").concat(item.sorting, " \xB7 ").concat(util.time.formatDateTime(item.createdAt), "</div>\n</div>\n<div class=\"actions\">\n").concat(actionsEdit, "\n<a href=\"#\" class=\"action heart\">\n<i class=\"fas fa-heart heart-on ").concat(item.heart ? '' : 'd-none', "\"></i>\n<i class=\"far fa-heart heart-off ").concat(item.heart ? 'd-none' : '', "\"></i>\n<span class=\"num\">").concat(item.heartCount, "</span>\n</a>\n").concat(reply, "\n</div>\n</div>\n<div class=\"content card-body\">\n").concat(item.html, "\n</div>\n</div>\n");
    var $html = $(html);
    window.util.article.mountMarkdown($html);
    return $html;
  }

  function _onParseCommentAll(item) {
    var actionsEdit = item.h_userId !== util.user.op.id ? '' : "\n<a href=\"".concat(util.article.commentUrl({
      atomId: item.atomId,
      id: item.h_id,
      replyId: 0
    }), "\" class=\"action\" target=\"_self\"><i class=\"fas fa-edit\"></i></a>\n<a href=\"#\" class=\"action delete\"><i class=\"fas fa-trash\"></i></a>\n");
    var reply = !item.allowComment ? '' : "\n<a href=\"".concat(util.article.commentUrl({
      atomId: item.atomId,
      id: 0,
      replyId: item.h_id
    }), "\" class=\"action\" target=\"_self\"><i class=\"fas fa-reply\"></i></a>\n");
    var html = "\n<div class=\"comment card panel-default\" data-atom-id=\"".concat(item.atomId, "\" data-comment-id=\"").concat(item.h_id, "\">\n<div class=\"header card-header\">\n<h5 class=\"article-title\"><a target=\"_blank\" href=\"").concat(util.url(item.url, item.atomLanguage), "#comments\">Re: ").concat(util.escapeHtml(item.atomName), "</a></h5>\n<div class=\"user\">\n<img class=\"avatar avatar32\" src=\"").concat(util.combineImageUrl(item.h_avatar, 32, 32), "\" />\n<h3 class=\"name panel-title\">").concat(util.escapeHtml(item.h_userName), "</h3>\n<div class=\"date\">#").concat(item.h_sorting, " \xB7 ").concat(util.time.formatDateTime(item.h_createdAt), "</div>\n</div>\n<div class=\"actions\">\n").concat(actionsEdit, "\n<a href=\"#\" class=\"action heart\">\n<i class=\"fas fa-heart heart-on ").concat(item.h_heart ? '' : 'd-none', "\"></i>\n<i class=\"far fa-heart heart-off ").concat(item.h_heart ? 'd-none' : '', "\"></i>\n<span class=\"num\">").concat(item.h_heartCount, "</span>\n</a>\n").concat(reply, "\n</div>\n</div>\n<div class=\"content card-body\">\n").concat(item.h_html, "\n</div>\n</div>\n");
    var $html = $(html);
    window.util.article.mountMarkdown($html);
    return $html;
  }

  window.util.article = {
    stats: function stats() {
      var _this = this;

      var stats = $('.stat');
      var atomIds = {};
      $.each(stats, function (index, item) {
        var $item = $(item);

        if (!$item.hasClass('no-parse')) {
          atomIds[$item.data('article-id')] = true;
        }
      });
      if (Object.keys(atomIds).length === 0) return;
      util.performAction({
        method: 'post',
        url: '/a/base/atom/stats',
        body: {
          atomIds: Object.keys(atomIds)
        }
      }).then(function (atoms) {
        _this._setStats(atoms);

        _this.read();
      });
    },
    read: function read() {
      var _this2 = this;

      if (!env.article) return;
      util.performAction({
        method: 'post',
        url: '/a/base/atom/readCount',
        body: {
          key: {
            atomId: env.article.atomId
          },
          atom: {
            readCount: 1
          }
        }
      }).then(function () {
        _this2._readCountInc(env.article.atomId, 1);
      });
    },
    brothers: function brothers(_ref) {
      var container = _ref.container,
          order = _ref.order;
      var $container = $(container);
      if (!env.article || $container.length === 0) return;
      order = order || env.brother.order || 'desc';

      this._brothers($container, 'prev', order);

      this._brothers($container, 'next', order);
    },
    comments: function comments(options) {
      var _this3 = this;

      var $container = $(options.container);
      if ($container.length === 0) return;
      if (!options.onParse) options.onParse = env.article ? _onParseComment : _onParseCommentAll;
      var orderInit = env.article ? env.comment.order : 'desc';

      if (env.article) {
        $('.button-postComment', $container).click(function () {
          var url = util.article.commentUrl({
            atomId: env.article.atomId,
            id: 0,
            replyId: 0
          });
          location.assign(url);
        });
        $('.order a', $container).click(function (event) {
          event.preventDefault();
          var link = $(event.target).closest('a');
          var order = link.hasClass('asc') ? 'desc' : 'asc';

          _this3._switchOrder({
            $container: $container,
            order: order,
            onParse: options.onParse
          });
        });
      }

      $('.list', $container).click(function (event) {
        var link = $(event.target).closest('a.action');

        if (link.length > 0) {
          var comment = link.closest('.comment');
          var commentId = parseInt(comment.data('comment-id'));
          var atomId = parseInt(comment.data('atom-id'));

          if (link.hasClass('delete')) {
            event.preventDefault();

            _this3._commentActionDelete({
              comment: comment,
              atomId: atomId,
              id: commentId
            });
          } else if (link.hasClass('heart')) {
            event.preventDefault();
            var heart = $('.heart-on', link).hasClass('d-none') ? 1 : 0;

            _this3._commentActionHeart({
              link: link,
              atomId: atomId,
              id: commentId,
              heart: heart
            });
          }
        }
      });

      this._switchOrder({
        $container: $container,
        order: orderInit,
        onParse: options.onParse
      });
    },
    commentUrl: function commentUrl(_ref2) {
      var atomId = _ref2.atomId,
          id = _ref2.id,
          replyId = _ref2.replyId;
      return "".concat(env.site.serverUrl, "/#!/a/basefront/comment/item?atomId=").concat(atomId, "&commentId=").concat(id, "&replyId=").concat(replyId || 0, "&returnTo=").concat(encodeURIComponent(location.href));
    },
    articleEdit: function articleEdit(options) {
      if (window.self !== window.top) return;
      var $container = $(options.container);
      if ($container.length === 0) return;

      if (env.article.userIdCreated === util.user.op.id || env.article.userIdUpdated === util.user.op.id) {
        var item = {
          atomId: env.article.atomId,
          itemId: env.article.itemId,
          module: env.site.atomClass.module,
          atomClassName: env.site.atomClass.atomClassName,
          atomClassIdParent: env.site.atomClass.atomClassIdParent
        };
        var url = "".concat(env.site.serverUrl, "/#!/a/cms/article/edit?item=").concat(encodeURIComponent(JSON.stringify(item)));
        var edit = "<a href=\"".concat(url, "\" target=\"_blank\"><i class=\"fas fa-edit\"></i></a>");
        $container.append($(edit));
      }
    },
    _commentActionDelete: function _commentActionDelete(_ref3) {
      var _this4 = this;

      var comment = _ref3.comment,
          atomId = _ref3.atomId,
          id = _ref3.id;
      window.bootbox.confirm({
        message: 'Are You Sure?',
        buttons: {
          confirm: {
            label: 'Yes'
          },
          cancel: {
            label: 'No'
          }
        },
        callback: function callback(res) {
          if (!res) return;
          util.performAction({
            method: 'post',
            url: '/a/base/comment/delete',
            body: {
              key: {
                atomId: atomId
              },
              data: {
                commentId: id
              }
            }
          }).then(function () {
            comment.remove();

            _this4._commentCountInc(atomId, -1);
          });
        }
      });
    },
    _commentActionHeart: function _commentActionHeart(_ref4) {
      var _this5 = this;

      var link = _ref4.link,
          atomId = _ref4.atomId,
          id = _ref4.id,
          heart = _ref4.heart;

      if (util.user.op.anonymous) {
        var url = "".concat(env.site.serverUrl, "/#!/a/basefront/comment/autoHeart?atomId=").concat(atomId, "&commentId=").concat(id, "&returnTo=").concat(encodeURIComponent(location.href));
        location.assign(url);
      } else {
        util.performAction({
          method: 'post',
          url: '/a/base/comment/heart',
          body: {
            key: {
              atomId: atomId
            },
            data: {
              commentId: id,
              heart: heart
            }
          }
        }).then(function () {
          _this5._commentHeartSwitch(link, atomId, id, heart);
        });
      }
    },
    _switchOrder: function _switchOrder(_ref5) {
      var $container = _ref5.$container,
          order = _ref5.order,
          _onParse = _ref5.onParse;
      var res;

      if (this._commentsController) {
        res = this._commentsController.reload({
          index: 0,
          context: {
            order: order
          }
        });
      } else {
        res = true;
        this._commentsController = util.loadMore({
          container: $('.list', $container),
          index: 0,
          context: {
            order: order
          },
          onFetch: function onFetch(_ref6) {
            var index = _ref6.index,
                context = _ref6.context;

            if (env.article) {
              var _options = {
                orders: [['sorting', context.order]],
                page: {
                  index: index
                }
              };
              return util.performAction({
                method: 'post',
                url: '/a/base/comment/list',
                body: {
                  key: {
                    atomId: env.article.atomId
                  },
                  options: _options
                }
              });
            }

            var options = {
              orders: [['h_updatedAt', 'desc']],
              page: {
                index: index
              }
            };
            return util.performAction({
              method: 'post',
              url: '/a/cms/comment/all',
              body: {
                atomClass: env.site.atomClass,
                options: options
              }
            });
          },
          onParse: function onParse(item) {
            return _onParse(item);
          }
        });
      }

      if (res) {
        if (order === 'asc') {
          $('.order .asc', $container).removeClass('d-none');
          $('.order .desc', $container).addClass('d-none');
        } else {
          $('.order .asc', $container).addClass('d-none');
          $('.order .desc', $container).removeClass('d-none');
        }
      }
    },
    _brothers: function _brothers($container, type, order) {
      var _this6 = this;

      var article = env.article;
      var options = {
        language: article.atomLanguage,
        category: article.atomCategoryId,
        where: {},
        page: {
          index: 0,
          size: 1
        },
        mode: 'default'
      };

      if (article.sorting > 0) {
        options.where['p.sorting'] = {
          op: type === 'prev' ? '<' : '>',
          val: article.sorting
        };
        options.orders = [['p.sorting', type === 'prev' ? 'desc' : 'asc']];
      } else {
        options.where['a.createdAt'] = {
          op: type === 'prev' ? order === 'desc' ? '>' : '<' : order === 'desc' ? '<' : '>',
          val: article.atomCreatedAt
        };
        options.orders = [['a.createdAt', type === 'prev' ? order === 'desc' ? 'asc' : 'desc' : order === 'desc' ? 'desc' : 'asc']];
      }

      util.performAction({
        method: 'post',
        url: '/a/cms/article/list',
        body: {
          atomClass: env.site.atomClass,
          options: options
        }
      }).then(function (data) {
        _this6._brother({
          $container: $container,
          type: type,
          article: data.list[0]
        });
      });
    },
    _brother: function _brother(_ref7) {
      var $container = _ref7.$container,
          type = _ref7.type,
          article = _ref7.article;
      if (!article) return;
      var $brother = $(".".concat(type), $container);
      var $brotherLink = $(".".concat(type, " a"), $container);
      $brotherLink.attr('href', "".concat(util.url(article.url)));
      $brotherLink.text(article.atomName);
      $brother.removeClass('d-none');
      $container.removeClass('d-none');
    },
    _setStats: function _setStats(atoms) {
      var _this7 = this;

      var _iterator = _createForOfIteratorHelper(atoms),
          _step;

      try {
        var _loop = function _loop() {
          var atom = _step.value;
          var atomId = atom.atomId;
          var $stat = $(".stat[data-article-id=".concat(atomId, "]"));
          $('.num.readCount', $stat).text(atom.readCount);
          $('.num.commentCount', $stat).text(atom.commentCount);

          _this7._starCount(atomId, atom.star, atom.starCount);

          $('.button-starCount', $stat).click(function () {
            _this7._starClick(atomId);
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    _starClick: function _starClick(atomId) {
      var _this8 = this;

      if (util.user.op.anonymous) {
        var url = "".concat(env.site.serverUrl, "/#!/a/basefront/atom/autoStar?atomId=").concat(atomId, "&returnTo=").concat(encodeURIComponent(location.href));
        location.assign(url);
      } else {
        var $stat = $(".stat[data-article-id=".concat(atomId, "]"));
        var star = $('.button-starCount .star-on', $stat).hasClass('d-none') ? 1 : 0;
        util.performAction({
          method: 'post',
          url: '/a/base/atom/star',
          body: {
            key: {
              atomId: atomId
            },
            atom: {
              star: star
            }
          }
        }).then(function (data) {
          _this8._starCount(atomId, data.star, data.starCount);
        });
      }
    },
    _starCount: function _starCount(atomId, star, starCount) {
      var $stat = $(".stat[data-article-id=".concat(atomId, "]"));
      $('.num.starCount', $stat).text(starCount);

      if (star) {
        $('.button-starCount .star-on').removeClass('d-none');
        $('.button-starCount .star-off').addClass('d-none');
      } else {
        $('.button-starCount .star-on').addClass('d-none');
        $('.button-starCount .star-off').removeClass('d-none');
      }
    },
    _readCountInc: function _readCountInc(atomId, num) {
      var $stat = $(".stat[data-article-id=".concat(atomId, "]"));
      var $readCount = $('.num.readCount', $stat);
      $readCount.text(parseInt($($readCount[0]).text()) + num);
    },
    _commentCountInc: function _commentCountInc(atomId, num) {
      var $stat = $(".stat[data-article-id=".concat(atomId, "]"));
      var $commentCount = $('.num.commentCount', $stat);
      $commentCount.text(parseInt($($commentCount[0]).text()) + num);
    },
    _commentHeartSwitch: function _commentHeartSwitch(link, atomId, id, heart) {
      var $heartCount = $('.num', link);
      $heartCount.text(parseInt($($heartCount[0]).text()) + (heart ? 1 : -1));

      if (heart) {
        $('.heart-on', link).removeClass('d-none');
        $('.heart-off', link).addClass('d-none');
      } else {
        $('.heart-on', link).addClass('d-none');
        $('.heart-off', link).removeClass('d-none');
      }
    }
  };
})();
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  var BlockClasses = [];

  util.article.mountMarkdown = function ($container) {
    var $blocks = $('.markdown-it-cabloy-block', $container);

    for (var i = 0; i < $blocks.length; i++) {
      _mountBlock($blocks[i]);
    }
  };

  function _mountBlock($blockContainer) {
    var blockParams = _getBlockParams($blockContainer);

    var blockContent = _getBlockContent($blockContainer);

    if (!blockParams || !blockContent) return;

    _getBlockClass(blockParams).then(function (BlockClass) {
      if (!BlockClass) {
        return;
      }

      var host = _getHost($blockContainer, blockContent);

      var blockInstance = new BlockClass(host);

      if (blockInstance.mount) {
        blockInstance.mount();
      }
    });
  }

  function _getBlockParams($block) {
    var params = $block.getAttribute('data-block-params');
    if (!params) return null;

    var _params$split = params.split(':'),
        _params$split2 = _slicedToArray(_params$split, 2),
        module = _params$split2[0],
        blockName = _params$split2[1];

    if (!module || !blockName) return null;
    return {
      params: params,
      module: module,
      blockName: blockName
    };
  }

  function _getBlockContent($block) {
    var content = $block.getAttribute('data-block-content');
    if (!content) return null;
    return window.JSON5.parse(decodeURIComponent(content));
  }

  function _getBlockClass(blockParams) {
    var params = blockParams.params,
        module = blockParams.module,
        blockName = blockParams.blockName;
    var BlockClass = BlockClasses[params];
    if (BlockClass) return Promise.resolve(BlockClass);
    return new Promise(function (resolve) {
      var ext = '';
      var block_js = "api/static/".concat(module.replace('-', '/'), "/blocks/").concat(blockName, "/main").concat(ext);
      window.requirejs([block_js], function (BlockClass) {
        BlockClasses[params] = BlockClass;
        resolve(BlockClass);
      });
    });
  }

  function _getHost($blockContainer, blockContent) {
    var $host = {
      atom: env.article,
      atomId: env.article && env.article.atomId,
      mode: 'view-cms'
    };
    var $util = window.util.hostUtil({
      locale: $host.atom && $host.atom.atomLanguage
    });
    return {
      $host: $host,
      $container: $blockContainer,
      $content: blockContent,
      $util: $util,
      $user: window.util.user,
      $$: $
    };
  }
})();
"use strict";

(function () {
  $(document).ready(function () {});
  $(document).on('echo-ready', function () {
    util.article.stats();
    util.article.brothers({
      container: '.brothers'
    });
    util.article.comments({
      container: '.comments'
    });
    util.article.articleEdit({
      container: '.article-edit'
    });
    util.article.mountMarkdown($('.article-body'));
  });
})();
"use strict";

(function () {
  $(document).ready(function () {
    _backtotop();
  });

  function _backtotop() {
    var $window = $(window);
    var $body = $('body');
    var $htmlBody = $('html, body');
    var $button = $('<a class="backtotop"><i class="fas fa-angle-up"></i></a>');
    $button.click(function () {
      var animateSpeed = "500";
      $htmlBody.animate({
        scrollTop: 0
      }, parseInt(animateSpeed));
    });
    $body.append($button);

    var _onScroll = function _onScroll() {
      var visible = $window.scrollTop() > $(window).height() / 2;

      if (visible) {
        $button.fadeIn();
      } else {
        $button.fadeOut();
      }
    };

    $window.on('scroll.infinite resize.infinite', _onScroll);

    _onScroll();
  }
})();
"use strict";

(function () {
  function _onParseCommentRecent(item, atomClass) {
    var itemURL = util.url(item.url, item.atomLanguage, atomClass);
    return "\n<li class=\"media\">\n<div class=\"media-body\">\n<h5 class=\"media-heading\">\n<a target=\"_blank\" href=\"".concat(itemURL, "#comments\">Re: ").concat(util.escapeHtml(item.atomName), "</a>\n</h5>\n<div class=\"body\">").concat(item.h_summary, "</div>\n<div class=\"user\">-- ").concat(util.escapeHtml(item.h_userName), "</div>\n</div>\n</li>\n");
  }

  function _onParseTag(item) {
    var tagURL = "".concat(util.url('static/articles.html'), "?tagId=").concat(item.id, "&tagName=").concat(encodeURIComponent(item.tagName));
    return "\n<li class=\"media\">\n<div class=\"media-body\">\n<div class=\"media-heading\">\n<a href=\"".concat(tagURL, "\">").concat(util.escapeHtml(item.tagName), "</a>\n</div>\n</div>\n<div class=\"media-right\"><span class=\"badge badge-secondary\">").concat(item.tagAtomCount, "</span></div>\n</li>\n");
  }

  function _onParseProfileAuthor(data) {
    var author = data.user;
    var imgSrc = util.combineImageUrl(author.avatar, 48, 48);
    return "\n<div>\n<a class='avatar'>\n<img class=\"avatar avatar48\" src=\"".concat(imgSrc, "\" title=\"").concat(util.escapeHtml(author.userName), "\"/>\n</a>\n<span class='name'><a>").concat(util.escapeHtml(author.userName), "</a></span>\n<div class=\"motto\">").concat(util.escapeHtml(author.motto) || '', "</div>\n</div>\n");
  }

  function _onParseArticleRecent(item, atomClass) {
    var audio = !item.audioFirst ? '' : '<i class="fas fa-music"></i> ';
    var attachment = item.attachmentCount === 0 ? '' : '<i class="fas fa-paperclip"></i> ';
    var userAvatar = item.avatar || util.url('plugins/cms-pluginsidebar/assets/images/user.png');
    var itemURL = util.url(item.url, item.atomLanguage, atomClass);
    var stat = "\n<div class=\"title stat no-parse\" data-article-id=\"".concat(item.atomId, "\">\n<img class=\"avatar avatar16\" src=\"").concat(util.combineImageUrl(userAvatar, 16, 16), "\">\n<span>").concat(util.escapeHtml(item.userName), "</span>\n<span class=\"num date\">").concat(util.time.formatDateTime(item.updatedAt, 'MM-DD HH:mm'), "</span>\n<i class=\"fas fa-eye\"></i><span class=\"num readCount\">").concat(item.readCount, "</span>\n<i class=\"fas fa-heart\"></i><span class=\"num starCount\">").concat(item.starCount, "</span>\n<a target=\"_blank\" href=\"").concat(itemURL, "#comments\">\n<i class=\"fas fa-comment\"></i>\n<span class=\"num commentCount\">").concat(item.commentCount, "</span>\n</a>\n</div>\n");
    return "\n<li class=\"media\">\n<div class=\"media-body\">\n<h4 class=\"media-heading\">\n".concat(audio).concat(attachment, "\n<a target=\"_blank\" href=\"").concat(itemURL, "\">").concat(util.escapeHtml(item.atomName), "</a>\n</h4>\n").concat(util.escapeHtml(item.description) || item.summary, "\n").concat(stat, "\n</div>\n</li>\n");
  }

  util.sidebar = {
    tags: function tags(options) {
      var $container = $(options.container);
      if ($container.length === 0) return;
      if (!options.onParse) options.onParse = _onParseTag;

      this._loadTags({
        $container: $container,
        onParse: options.onParse
      });
    },
    getTagName: function getTagName(tagId) {
      var tag = window._tags.list.find(function (item) {
        return item.id === tagId;
      });

      return tag ? tag.tagName : '';
    },
    commentsRecent: function commentsRecent(options) {
      var $containers = $(options.container);
      if ($containers.length === 0) return;

      for (var i = 0; i < $containers.length; i++) {
        var $container = $($containers[i]);
        if (!options.onParse) options.onParse = _onParseCommentRecent;

        this._loadCommentsRecent({
          $container: $container,
          onParse: options.onParse
        });
      }
    },
    profileAuthor: function profileAuthor(options) {
      var $container = $(options.container);
      if ($container.length === 0) return;
      if (!options.onParse) options.onParse = _onParseProfileAuthor;

      this._loadProfileAuthor({
        $container: $container,
        onParse: options.onParse
      });
    },
    articlePost: function articlePost(options) {
      var $container = $(options.container);
      if ($container.length === 0) return;
      $('.button-article-post', $container).click(function () {
        var item = {
          module: env.site.atomClass.module,
          atomClassName: env.site.atomClass.atomClassName,
          atomClassIdParent: env.site.atomClass.atomClassIdParent
        };

        if (env.language) {
          item.language = env.language.current;
        }

        var url = "".concat(env.site.serverUrl, "/#!/a/cms/article/post?item=").concat(encodeURIComponent(JSON.stringify(item)));
        location.assign(url);
      });
    },
    articlesRecent: function articlesRecent(options) {
      var $containers = $(options.container);
      if ($containers.length === 0) return;

      for (var i = 0; i < $containers.length; i++) {
        var $container = $($containers[i]);
        if (!options.onParse) options.onParse = _onParseArticleRecent;

        this._loadArticlesRecent({
          $container: $container,
          onParse: options.onParse
        });
      }
    },
    _loadArticlesRecent: function _loadArticlesRecent(_ref) {
      var $container = _ref.$container,
          onParse = _ref.onParse;
      var atomClass;

      if ($container.data('module')) {
        atomClass = {
          module: $container.data('module'),
          atomClassName: $container.data('atomclassname'),
          atomClassIdParent: parseInt($container.data('atomclassidparent') || 0)
        };
      } else {
        atomClass = env.site.atomClass;
      }

      var options = {
        language: env.language && env.language.current,
        where: {},
        orders: [['a.createdAt', 'desc']],
        page: {
          index: 0,
          size: env.article2.recentNum
        },
        mode: 'default'
      };
      util.performAction({
        method: 'post',
        url: '/a/cms/article/list',
        body: {
          atomClass: atomClass,
          options: options
        }
      }).then(function (data) {
        var $list = $('.list', $container);

        for (var i = 0; i < data.list.length; i++) {
          $list.append($(onParse(data.list[i], atomClass)));
        }
      });
    },
    _loadTags: function _loadTags(_ref2) {
      var $container = _ref2.$container,
          onParse = _ref2.onParse;
      var $list = $('.list', $container);

      for (var i = 0; i < window._tags.list.length; i++) {
        $list.append($(onParse(window._tags.list[i])));
      }
    },
    _loadCommentsRecent: function _loadCommentsRecent(_ref3) {
      var $container = _ref3.$container,
          onParse = _ref3.onParse;
      var atomClass;

      if ($container.data('module')) {
        atomClass = {
          module: $container.data('module'),
          atomClassName: $container.data('atomclassname'),
          atomClassIdParent: parseInt($container.data('atomclassidparent') || 0)
        };
      } else {
        atomClass = env.site.atomClass;
      }

      var options = {
        orders: [['h_updatedAt', 'desc']],
        page: {
          index: 0,
          size: env.comment.recentNum
        }
      };
      util.performAction({
        method: 'post',
        url: '/a/cms/comment/all',
        body: {
          atomClass: atomClass,
          options: options
        }
      }).then(function (data) {
        var $list = $('.list', $container);

        for (var i = 0; i < data.list.length; i++) {
          $list.append($(onParse(data.list[i], atomClass)));
        }
      });
    },
    _loadProfileAuthor: function _loadProfileAuthor(_ref4) {
      var $container = _ref4.$container,
          onParse = _ref4.onParse;
      util.performAction({
        method: 'post',
        url: '/a/user/public/profile',
        body: {
          userId: env.article.userIdCreated
        }
      }).then(function (data) {
        var $panelBody = $('.card-body', $container);
        $panelBody.append($(onParse(data)));
      });
    }
  };
})();
"use strict";

(function () {
  $(document).ready(function () {});
  $(document).on('echo-ready', function () {
    util.sidebar.tags({
      container: '.panel-tags'
    });
    util.sidebar.commentsRecent({
      container: '.panel-comments-recent'
    });
    util.sidebar.profileAuthor({
      container: '.panel-profile-author'
    });
    util.sidebar.articlePost({
      container: '.panel-article-post'
    });
    util.sidebar.articlesRecent({
      container: '.panel-articles-recent'
    });
  });
})();
var QRCode;!function(){function r(t){this.mode=o.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var i=[],n=this.data.charCodeAt(e);65536<n?(i[0]=240|(1835008&n)>>>18,i[1]=128|(258048&n)>>>12,i[2]=128|(4032&n)>>>6,i[3]=128|63&n):2048<n?(i[0]=224|(61440&n)>>>12,i[1]=128|(4032&n)>>>6,i[2]=128|63&n):128<n?(i[0]=192|(1984&n)>>>6,i[1]=128|63&n):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function h(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},h.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=h.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=v.getLostPoint(this);(0==r||i<t)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var o=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(i.beginFill(0,100),i.moveTo(s,o),i.lineTo(s+1,o),i.lineTo(s+1,o+1),i.lineTo(s,o+1),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=v.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[i+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=v.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=v.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[i][a-s]){var h=!1;o<t.length&&(h=1==(t[o]>>>n&1)),v.getMask(e,i,a-s)&&(h=!h),this.modules[i][a-s]=h,-1==--n&&(o++,n=7)}if((i+=r)<0||this.moduleCount<=i){i-=r,r=-r;break}}}},h.PAD0=236,h.PAD1=17,h.createData=function(t,e,r){for(var i=p.getRSBlocks(t,e),n=new m,o=0;o<r.length;o++){var a=r[o];n.put(a.mode,4),n.put(a.getLength(),v.getLengthInBits(a.mode,t)),a.write(n)}var s=0;for(o=0;o<i.length;o++)s+=i[o].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(h.PAD0,8),n.getLengthInBits()>=8*s));)n.put(h.PAD1,8);return h.createBytes(n,i)},h.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;i=Math.max(i,h),n=Math.max(n,l),o[s]=new Array(h);for(var u=0;u<o[s].length;u++)o[s][u]=255&t.buffer[u+r];r+=h;var c=v.getErrorCorrectPolynomial(l),f=new w(o[s],c.getLength()-1).mod(c);a[s]=new Array(c.getLength()-1);for(u=0;u<a[s].length;u++){var d=u+f.getLength()-a[s].length;a[s][u]=0<=d?f.get(d):0}}var g=0;for(u=0;u<e.length;u++)g+=e[u].totalCount;var p=new Array(g),m=0;for(u=0;u<i;u++)for(s=0;s<e.length;s++)u<o[s].length&&(p[m++]=o[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(p[m++]=a[s][u]);return p};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l={L:1,M:0,Q:3,H:2},i=0,n=1,a=2,s=3,u=4,c=5,f=6,d=7,v={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=v.getBCHDigit(e)-v.getBCHDigit(v.G15);)e^=v.G15<<v.getBCHDigit(e)-v.getBCHDigit(v.G15);return(t<<10|e)^v.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=v.getBCHDigit(e)-v.getBCHDigit(v.G18);)e^=v.G18<<v.getBCHDigit(e)-v.getBCHDigit(v.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return v.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i:return(e+r)%2==0;case n:return e%2==0;case a:return r%3==0;case s:return(e+r)%3==0;case u:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case c:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new w([1],0),r=0;r<t;r++)e=e.multiply(new w([1,g.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(i,n),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(i+s,n+h)&&o++;5<o&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var l=0;t.isDark(i,n)&&l++,t.isDark(i+1,n)&&l++,t.isDark(i,n+1)&&l++,t.isDark(i+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&u++;return r+=10*(Math.abs(100*u/e/e-50)/5)}},g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},t=0;t<8;t++)g.EXP_TABLE[t]=1<<t;for(t=8;t<256;t++)g.EXP_TABLE[t]=g.EXP_TABLE[t-4]^g.EXP_TABLE[t-5]^g.EXP_TABLE[t-6]^g.EXP_TABLE[t-8];for(t=0;t<255;t++)g.LOG_TABLE[g.EXP_TABLE[t]]=t;function w(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function p(t,e){this.totalCount=t,this.dataCount=e}function m(){this.buffer=[],this.length=0}w.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(i)));return new w(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=g.gexp(g.glog(t.get(i))+e);return new w(r,0).mod(t)}},p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p.getRSBlocks=function(t,e){var r=p.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],o=0;o<i;o++)for(var a=r[3*o+0],s=r[3*o+1],h=r[3*o+2],l=0;l<a;l++)n.push(new p(s,h));return n},p.getRsBlockTable=function(t,e){switch(e){case l.L:return p.RS_BLOCK_TABLE[4*(t-1)+0];case l.M:return p.RS_BLOCK_TABLE[4*(t-1)+1];case l.Q:return p.RS_BLOCK_TABLE[4*(t-1)+2];case l.H:return p.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},m.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var _=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function C(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var e,y,E=((e=function(t,e){this._el=t,this._htOption=e}).prototype.draw=function(t){var e=this._htOption,r=this._el,i=t.getModuleCount();function n(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}Math.floor(e.width/i),Math.floor(e.height/i),this.clear();var o=n("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(o),o.appendChild(n("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(n("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var s=0;s<i;s++)if(t.isDark(a,s)){var h=n("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(h)}},e.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},e),L="svg"===document.documentElement.tagName.toLowerCase()?E:"undefined"==typeof CanvasRenderingContext2D?((y=function(t,e){this._el=t,this._htOption=e}).prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),n=Math.floor(e.width/i),o=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){a.push("<tr>");for(var h=0;h<i;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+o+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var l=r.childNodes[0],u=(e.width-l.offsetWidth)/2,c=(e.height-l.offsetHeight)/2;0<u&&0<c&&(l.style.margin=c+"px "+u+"px")},y.prototype.clear=function(){this._el.innerHTML=""},y):function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var u=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,r,i,n,o,a,s,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var l=arguments.length-1;1<=l;l--)arguments[l]=arguments[l]*u;else void 0===s&&(e*=u,r*=u,i*=u,n*=u);c.apply(this,arguments)}}var e=function(t,e){this._bIsPainted=!1,this._android=C(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,n=t.getModuleCount(),o=i.width/n,a=i.height/n,s=Math.round(o),h=Math.round(a);e.style.display="none",this.clear();for(var l=0;l<n;l++)for(var u=0;u<n;u++){var c=t.isDark(l,u),f=u*o,d=l*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(f,d,o,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,h),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,h)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var i=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return i.onabort=n,i.onerror=n,i.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}.call(this,t)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},e}();function D(t,e){for(var r,i,n=1,o=(r=t,(i=encodeURI(r).toString().replace(/\%[0-9a-fA-F]{2}/g,"a")).length+(i.length!=r?3:0)),a=0,s=_.length;a<=s;a++){var h=0;switch(e){case l.L:h=_[a][0];break;case l.M:h=_[a][1];break;case l.Q:h=_[a][2];break;case l.H:h=_[a][3]}if(o<=h)break;n++}if(_.length<n)throw new Error("Too long data");return n}(QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(L=E),this._android=C(),this._el=t,this._oQRCode=null,this._oDrawing=new L(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new h(D(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||3<=this._android)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=l}(),function(r,o,h){var i,n,a,l=Array.prototype.indexOf,u=Object.assign,c=/MicroMessenger/i.test(navigator.userAgent),f=o.documentElement.clientWidth<=768,t=(o.images[0]||0).src||"",e=v("site")||v("Site")||o.title,s=v("title")||v("Title")||o.title,d=v("description")||v("Description")||"",g={url:location.href,origin:location.origin,source:e,title:s,description:d,image:t,imageSelector:h,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","douban","qzone","linkedin","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},p={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',weibo:"https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};function m(t){return(o.querySelectorAll||r.jQuery||r.Zepto||function(i){var n=[];return C(i.split(/\s*,\s*/),function(t){var e=t.match(/([#.])(\w+)/);if(null===e)throw Error("Supports only simple single #ID or .CLASS selector.");if(e[1]){var r=o.getElementById(e[2]);r&&n.push(r)}n=n.concat(w(i))}),n}).call(o,t)}function v(t){return(o.getElementsByName(t)[0]||0).content}function w(t,e,r){if(t.getElementsByClassName)return t.getElementsByClassName(e);var i=[],n=t.getElementsByTagName(r||"*");return e=" "+e+" ",C(n,function(t){0<=(" "+(t.className||"")+" ").indexOf(e)&&i.push(t)}),i}function _(t){var e=o.createElement("div");return e.innerHTML=t,e.childNodes}function C(t,e){var r=t.length;if(r===h){for(var i in t)if(t.hasOwnProperty(i)&&!1===e.call(t[i],t[i],i))break}else for(var n=0;n<r&&!1!==e.call(t[n],t[n],n);n++);}r.socialShare=function(t,e){(t="string"==typeof t?m(t):t).length===h&&(t=[t]),C(t,function(t){t.initialized||function(t,e){var r=function(){var t=arguments;if(u)return u.apply(null,t);var r={};return C(t,function(t){C(t,function(t,e){r[e]=t})}),t[0]=r}({},g,e||{},function(t){if(t.dataset)return JSON.parse(JSON.stringify(t.dataset));var r={};if(t.hasAttributes())return C(t.attributes,function(t){var e=t.name;if(0!==e.indexOf("data-"))return!0;e=e.replace(/^data-/i,"").replace(/-(\w)/g,function(t,e){return e.toUpperCase()}),r[e]=t.value}),r;return{}}(t));r.imageSelector&&(r.image=m(r.imageSelector).map(function(t){return t.src}).join("||"));(function(t,e){if(e&&"string"==typeof e){var r=(t.className+" "+e).split(/\s+/),i=" ";C(r,function(t){i.indexOf(" "+t+" ")<0&&(i+=t+" ")}),t.className=i.slice(1,-1)}})(t,"share-component social-share"),i=t,a=r,n=function(t){t.mobileSites.length||(t.mobileSites=t.sites);var e=(f?t.mobileSites:t.sites).slice(0),r=t.disabled;"string"==typeof e&&(e=e.split(/\s*,\s*/));"string"==typeof r&&(r=r.split(/\s*,\s*/));c&&r.push("wechat");return r.length&&C(r,function(t){e.splice(function(t,e,r){var i;if(e){if(l)return l.call(e,t,r);for(i=e.length,r=r?r<0?Math.max(0,i+r):r:0;r<i;r++)if(r in e&&e[r]===t)return r}return-1}(t,e),1)}),e}(a),s="prepend"==a.mode,C(s?n.reverse():n,function(t){var n,o,e=(n=t,(o=a).summary||(o.summary=o.description),p[n].replace(/\{\{(\w)(\w*)\}\}/g,function(t,e,r){var i=n+e+r.toLowerCase();return r=(e+r).toLowerCase(),encodeURIComponent((o[i]===h?o[r]:o[i])||"")})),r=a.initialized?w(i,"icon-"+t):_('<a class="social-share-icon icon-'+t+'"></a>');if(!r.length)return!0;r[0].href=e,"wechat"===t?r[0].tabindex=-1:r[0].target="_blank",a.initialized||(s?i.insertBefore(r[0],i.firstChild):i.appendChild(r[0]))}),function(t,e){var r=w(t,"icon-wechat","a");if(0===r.length)return;var i=_('<div class="wechat-qrcode"><h4>'+e.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+e.wechatQrcodeHelper+"</div></div>"),n=w(i[0],"qrcode","div");new QRCode(n[0],{text:e.url,width:e.wechatQrcodeSize,height:e.wechatQrcodeSize}),r[0].appendChild(i[0])}(t,r),t.initialized=!0;var i,a,n,s}(t,e)})},i=function(){socialShare(".social-share, .share-component")},a=o[n="addEventListener"]?"":"on",~o.readyState.indexOf("m")?i():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(t,e){(e?o:r)[a?"attachEvent":n](a+t,function(){i&&(e<6||~o.readyState.indexOf("m"))&&(i(),i=0)},!1)})}(window,document);
"use strict";

(function () {
  $(document).ready(function () {
    _sitetrack();
  });

  function _sitetrack() {}

  ;
})();
"use strict";

(function () {
  $(document).ready(function () {});
  $(document).on('echo-ready', function () {
    _renderNavbarUser({
      container: '.navbar-user'
    });

    _renderStatsUser({
      container: '.navbar-user'
    });
  });

  function _renderStatsUser(_ref) {
    var container = _ref.container;
    if (util.user.op.anonymous) return;
    window.setTimeout(function () {
      var subscribePath = '/a/stats/stats/a-user/user';
      util.io.subscribe(subscribePath, stats_onMessage, stats_onSubscribed);
    }, 0);

    function stats_onMessage(_ref2) {
      var message = _ref2.message;
      var content = JSON.parse(message.content);
      stats_setValue(content.value);
    }

    function stats_onSubscribed() {
      stats_loadValue();
    }

    function stats_loadValue() {
      util.performAction({
        method: 'post',
        url: '/a/stats/stats/get',
        body: {
          module: 'a-user',
          name: 'user',
          nameSub: null
        }
      }).then(function (value) {
        stats_setValue(value);
      });
    }

    function stats_setValue(value) {
      var $container = $(container);
      if ($container.length === 0) return;
      var $stats = $('.stats-user', $container);

      if (!value || !value.red && !value.orange) {
        $stats.html('');
      } else {
        var html;

        if (value.red) {
          html = "<span class=\"badge badge-danger\">".concat(value.red, "</span>");
        } else {
          html = "<span class=\"badge badge-warning\">".concat(value.orange, "</span>");
        }

        $stats.html(html);
      }
    }
  }

  function _renderNavbarUser(_ref3) {
    var container = _ref3.container;
    var $container = $(container);
    if ($container.length === 0) return;
    var $menu = $('.navbar-nav', $container);
    var $avatar = $('.avatar-user', $container);

    if (util.user.op.anonymous) {
      var avatar = util.url('plugins/cms-pluginbase/assets/images/avatar_user.png');
      $avatar.attr('src', avatar);
      var html = "\n<li class=\"nav-item user-signin\"><a class=\"nav-link\" href=\"#\" onclick=\"return onClickUserLogin();\"><i class=\"fas fa-sign-in-alt\"></i> Sign In</a></li>\n";
      $menu.append(html);
    } else {
      var _avatar = util.user.op.avatar || util.url('plugins/cms-pluginbase/assets/images/avatar_user.png');

      $avatar.attr('src', _avatar);

      var _html = "\n<li class=\"nav-item user-name\"><span class=\"navbar-text\">".concat(util.user.op.userName, "</span></li>\n<li class=\"nav-item dropdown-divider\"></li>\n<li class=\"nav-item\"><a class=\"nav-link\" href=\"http://localhost:9092/?__to=mine\">Profile</a></li>\n<li class=\"nav-item dropdown-divider\"></li>\n<li class=\"nav-item user-logout\"><a class=\"nav-link\" href=\"#\" onclick=\"return onClickUserLogout();\"><i class=\"fas fa-sign-out-alt\"></i> Log Out</a></li>\n");

      $menu.append(_html);
    }
  }

  window.onClickUserLogin = function () {
    util.login();
    return false;
  };

  window.onClickUserLogout = function () {
    util.logout();
    return false;
  };
})();
"use strict";

(function () {
  $(document).on('echo-ready', function () {
    if (_wechatcheckenv()) {
      if (_wechatautologin()) {
        _wechatsdkinit();
      }
    }
  });

  function _wechatcheckenv() {
    if (window.self !== window.top) return false;
    var _configExists = false;
    if (!_configExists) return false;
    var ua = navigator.userAgent.toLowerCase();
    var inWechat = ua && (ua.indexOf('micromessenger') > -1 || ua.indexOf('micromessage') > -1);
    return inWechat;
  }

  function _wechatautologin() {
    if (util.user.op.anonymous) {
      var url = "".concat(env.site.serverUrl, "/#!").concat(location.href);
      window.location.assign(url);
      return false;
    } else {
      window.setTimeout(function () {
        $('.navbar-user .user-logout').remove();
      }, 0);
      return true;
    }
  }

  function _wechatsdkinit() {
    util.performAction({
      method: 'post',
      url: '/a/wechat/jssdk/jsconfig',
      body: {
        url: location.href.split('#')[0]
      }
    }).then(function (params) {
      _wechatwxinit(params);
    });
  }

  function _wechatwxinit(params) {
    if (window.wx) return;
    util.loadScript('https://res.wx.qq.com/open/js/jweixin-1.6.0.js', function () {
      window.wx.config(params);
      window.wx.error(function (e) {
        console.error(e);
      });
      window.wx.ready(function () {
        $(document).trigger('wechatsdk-ready', window.wx);
      });
    });
  }
})();
"use strict";

(function () {
  $(document).on('wechatsdk-ready', function (event, wx) {
    _wechatshareinit(wx);
  });

  function _wechatshareinit(wx) {
    if (!env.article) return;
    var _article = env.article;
    if (_article.atomStage !== 1 || util.user.op.anonymous) return;
    util.performAction({
      method: 'post',
      url: '/a/share/share/generate',
      body: {
        host: 'wechat',
        atomId: _article.atomId,
        url: util.url(_article.url)
      }
    }).then(function (res) {
      var link = res.link;

      _wechatshareinit_share({
        wx: wx,
        _article: _article,
        link: link
      });
    });
  }

  function _wechatshareinit_share(_ref) {
    var wx = _ref.wx,
        _article = _ref._article,
        link = _ref.link;
    var title = _article.atomName;
    var desc = _article.description || _article.summary || '';
    var imgUrl = _article.imageCover || _article.imageFirst || '';
    wx.updateAppMessageShareData({
      title: title,
      desc: desc,
      link: link,
      imgUrl: imgUrl,
      success: function success() {}
    });
    wx.updateTimelineShareData({
      title: title,
      link: link,
      imgUrl: imgUrl,
      success: function success() {}
    });
  }
})();
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
var requirejs,require,define;!function(global,setTimeout){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.6",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;-1<i&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(i,e,r,n){return e&&eachProp(e,function(e,t){!r&&hasProp(i,t)||(!n||"object"!=typeof e||!e||isArray(e)||isFunction(e)||e instanceof RegExp?i[t]=e:(i[t]||(i[t]={}),mixin(i[t],e,r,n)))}),i}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttps://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(t){req[t]=function(){var e=contexts[defContextName];return e.require[t].apply(e,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(t,i,r){var e,n=t&&t.config||{};if(isBrowser)return(e=req.createNode(n,i,r)).setAttribute("data-requirecontext",t.contextName),e.setAttribute("data-requiremodule",i),!e.attachEvent||e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0||isOpera?(e.addEventListener("load",t.onScriptLoad,!1),e.addEventListener("error",t.onScriptError,!1)):(useInteractive=!0,e.attachEvent("onreadystatechange",t.onScriptLoad)),e.src=r,n.onNodeCreated&&n.onNodeCreated(e,n,i,r),currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),t.completeLoad(i)}catch(e){t.onError(makeError("importscripts","importScripts failed for "+i+" at "+r,e,[i]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(mainScript=(src=mainScript.split("/")).pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,i,t){var r,n;"string"!=typeof e&&(t=i,i=e,e=null),isArray(i)||(t=i,i=null),!i&&isFunction(t)&&(i=[],t.length&&(t.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,t){i.push(t)}),i=(1===t.length?["require"]:["require","exports","module"]).concat(i))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")]),n?(n.defQueue.push([e,i,t]),n.defQueueMap[e]=!0):globalDefQueue.push([e,i,t])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(u){var i,e,l,c,d,g={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},p={},f={},r={},h=[],m={},n={},v={},x=1,b=1;function q(e,t,i){var r,n,o,a,s,u,c,d,p,f,l=t&&t.split("/"),h=g.map,m=h&&h["*"];if(e&&(u=(e=e.split("/")).length-1,g.nodeIdCompat&&jsSuffixRegExp.test(e[u])&&(e[u]=e[u].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&l&&(e=l.slice(0,l.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;0<t&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),i&&h&&(l||m)){e:for(o=(n=e.split("/")).length;0<o;o-=1){if(s=n.slice(0,o).join("/"),l)for(a=l.length;0<a;a-=1)if((r=getOwn(h,l.slice(0,a).join("/")))&&(r=getOwn(r,s))){c=r,d=o;break e}!p&&m&&getOwn(m,s)&&(p=getOwn(m,s),f=o)}!c&&p&&(c=p,d=f),c&&(n.splice(0,d,c),e=n.join("/"))}return getOwn(g.pkgs,e)||e}function E(t){isBrowser&&each(scripts(),function(e){if(e.getAttribute("data-requiremodule")===t&&e.getAttribute("data-requirecontext")===l.contextName)return e.parentNode.removeChild(e),!0})}function w(e){var t=getOwn(g.paths,e);if(t&&isArray(t)&&1<t.length)return t.shift(),l.require.undef(e),l.makeRequire(null,{skipMap:!0})([e]),!0}function y(e){var t,i=e?e.indexOf("!"):-1;return-1<i&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function S(e,t,i,r){var n,o,a,s,u=null,c=t?t.name:null,d=e,p=!0,f="";return e||(p=!1,e="_@r"+(x+=1)),u=(s=y(e))[0],e=s[1],u&&(u=q(u,c,r),o=getOwn(m,u)),e&&(u?f=i?e:o&&o.normalize?o.normalize(e,function(e){return q(e,c,r)}):-1===e.indexOf("!")?q(e,c,r):e:(u=(s=y(f=q(e,c,r)))[0],f=s[1],i=!0,n=l.nameToUrl(f))),{prefix:u,name:f,parentMap:t,unnormalized:!!(a=!u||o||i?"":"_unnormalized"+(b+=1)),url:n,originalName:d,isDefine:p,id:(u?u+"!"+f:f)+a}}function k(e){var t=e.id,i=getOwn(p,t);return i||(i=p[t]=new l.Module(e)),i}function M(e,t,i){var r=e.id,n=getOwn(p,r);!hasProp(m,r)||n&&!n.defineEmitComplete?(n=k(e)).error&&"error"===t?i(n.error):n.on(t,i):"defined"===t&&i(m[r])}function O(i,e){var t=i.requireModules,r=!1;e?e(i):(each(t,function(e){var t=getOwn(p,e);t&&(t.error=i,t.events.error&&(r=!0,t.emit("error",i)))}),r||req.onError(i))}function j(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(l.defQueueMap[t]=!0),h.push(e)}),globalDefQueue=[])}function P(e){delete p[e],delete f[e]}function R(){var e,r,t=1e3*g.waitSeconds,n=t&&l.startTime+t<(new Date).getTime(),o=[],a=[],s=!1,u=!0;if(!i){if(i=!0,eachProp(f,function(e){var t=e.map,i=t.id;if(e.enabled&&(t.isDefine||a.push(e),!e.error))if(!e.inited&&n)w(i)?s=r=!0:(o.push(i),E(i));else if(!e.inited&&e.fetched&&t.isDefine&&(s=!0,!t.prefix))return u=!1}),n&&o.length)return(e=makeError("timeout","Load timeout for modules: "+o,null,o)).contextName=l.contextName,O(e);u&&each(a,function(e){!function n(o,a,s){var e=o.map.id;o.error?o.emit("error",o.error):(a[e]=!0,each(o.depMaps,function(e,t){var i=e.id,r=getOwn(p,i);!r||o.depMatched[t]||s[i]||(getOwn(a,i)?(o.defineDep(t,m[i]),o.check()):n(r,a,s))}),s[e]=!0)}(e,{},{})}),n&&!r||!s||!isBrowser&&!isWebWorker||d||(d=setTimeout(function(){d=0,R()},50)),i=!1}}function a(e){hasProp(m,e[0])||k(S(e[0],null,!0)).init(e[1],e[2])}function o(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function s(e){var t=e.currentTarget||e.srcElement;return o(t,l.onScriptLoad,"load","onreadystatechange"),o(t,l.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function T(){var e;for(j();h.length;){if(null===(e=h.shift())[0])return O(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));a(e)}l.defQueueMap={}}return c={require:function(e){return e.require?e.require:e.require=l.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?m[e.map.id]=e.exports:e.exports=m[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(g.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(e=function(e){this.events=getOwn(r,e.id)||{},this.map=e,this.shim=getOwn(g.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,l.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;n[e]||(n[e]=!0,l.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var t,e,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=l.execCb(i,o,r,n)}catch(e){t=e}else n=l.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&((e=this.module)?n=e.exports:this.usingExports&&(n=this.exports)),t)return t.requireMap=this.map,t.requireModules=this.map.isDefine?[this.map.id]:null,t.requireType=this.map.isDefine?"define":"require",O(this.error=t)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(m[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(l,this.map,a)}P(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(l.defQueueMap,i)||this.fetch()}},callPlugin:function(){var u=this.map,c=u.id,e=S(u.prefix);this.depMaps.push(e),M(e,"defined",bind(this,function(e){var o,t,i,r=getOwn(v,this.map.id),n=this.map.name,a=this.map.parentMap?this.map.parentMap.name:null,s=l.makeRequire(u.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(e.normalize&&(n=e.normalize(n,function(e){return q(e,a,!0)})||""),M(t=S(u.prefix+"!"+n,this.map.parentMap,!0),"defined",bind(this,function(e){this.map.normalizedMap=t,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((i=getOwn(p,t.id))&&(this.depMaps.push(t),this.events.error&&i.on("error",bind(this,function(e){this.emit("error",e)})),i.enable()))):r?(this.map.url=l.nameToUrl(r),void this.load()):((o=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,(this.error=e).requireModules=[c],eachProp(p,function(e){0===e.map.id.indexOf(c+"_unnormalized")&&P(e.map.id)}),O(e)}),o.fromText=bind(this,function(e,t){var i=u.name,r=S(i),n=useInteractive;t&&(e=t),n&&(useInteractive=!1),k(r),hasProp(g.config,c)&&(g.config[i]=g.config[c]);try{req.exec(e)}catch(e){return O(makeError("fromtexteval","fromText eval for "+c+" failed: "+e,e,[c]))}n&&(useInteractive=!0),this.depMaps.push(r),l.completeLoad(i),s([i],o)}),void e.load(u.name,s,o,g))})),l.enable(e,this),this.pluginMaps[e.id]=e},enable:function(){(f[this.map.id]=this).enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=S(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(c,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,M(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?M(e,"error",bind(this,this.errback)):this.events.error&&M(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=p[i],hasProp(c,i)||!r||r.enabled||l.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(p,e.id);t&&!t.enabled&&l.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},(l={config:g,contextName:u,registry:p,defined:m,urlFetched:n,defQueue:h,defQueueMap:{},Module:e,makeModuleMap:S,nextTick:req.nextTick,onError:O,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var i=e.urlArgs;e.urlArgs=function(e,t){return(-1===t.indexOf("?")?"?":"&")+i}}var r=g.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(g[t]||(g[t]={}),mixin(g[t],e,!0,!0)):g[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(v[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=l.makeShimExports(e)),r[t]=e}),g.shim=r),e.packages&&each(e.packages,function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(g.paths[t]=e.location),g.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(p,function(e,t){e.inited||e.map.unnormalized||(e.map=S(t,null,!0))}),(e.deps||e.callback)&&l.require(e.deps||[],e.callback)},makeShimExports:function(t){return function(){var e;return t.init&&(e=t.init.apply(global,arguments)),e||t.exports&&getGlobal(t.exports)}},makeRequire:function(o,a){function s(e,t,i){var r,n;return a.enableBuildCallback&&t&&isFunction(t)&&(t.__requireJsBuild=!0),"string"==typeof e?isFunction(t)?O(makeError("requireargs","Invalid require call"),i):o&&hasProp(c,e)?c[e](p[o.id]):req.get?req.get(l,e,o,s):(r=S(e,o,!1,!0).id,hasProp(m,r)?m[r]:O(makeError("notloaded",'Module name "'+r+'" has not been loaded yet for context: '+u+(o?"":". Use require([])")))):(T(),l.nextTick(function(){T(),(n=k(S(null,o))).skipMap=a.skipMap,n.init(e,t,i,{enabled:!0}),R()}),s)}return a=a||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var t,i=e.lastIndexOf("."),r=e.split("/")[0];return-1!==i&&(!("."===r||".."===r)||1<i)&&(t=e.substring(i,e.length),e=e.substring(0,i)),l.nameToUrl(q(e,o&&o.id,!0),t,!0)},defined:function(e){return hasProp(m,S(e,o,!1,!0).id)},specified:function(e){return e=S(e,o,!1,!0).id,hasProp(m,e)||hasProp(p,e)}}),o||(s.undef=function(i){j();var e=S(i,o,!0),t=getOwn(p,i);t.undefed=!0,E(i),delete m[i],delete n[e.url],delete r[i],eachReverse(h,function(e,t){e[0]===i&&h.splice(t,1)}),delete l.defQueueMap[i],t&&(t.events.defined&&(r[i]=t.events),P(i))}),s},enable:function(e){getOwn(p,e.id)&&k(e).enable()},completeLoad:function(e){var t,i,r,n=getOwn(g.shim,e)||{},o=n.exports;for(j();h.length;){if(null===(i=h.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);a(i)}if(l.defQueueMap={},r=getOwn(p,e),!t&&!hasProp(m,e)&&r&&!r.inited){if(!(!g.enforceDefine||o&&getGlobal(o)))return w(e)?void 0:O(makeError("nodefine","No define call for "+e,null,[e]));a([e,n.deps||[],n.exportsFn])}R()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c=getOwn(g.pkgs,e);if(c&&(e=c),u=getOwn(v,e))return l.nameToUrl(u,t,i);if(req.jsExtRegExp.test(e))a=e+(t||"");else{for(r=g.paths,o=(n=e.split("/")).length;0<o;o-=1)if(s=getOwn(r,n.slice(0,o).join("/"))){isArray(s)&&(s=s[0]),n.splice(0,o,s);break}a=n.join("/"),a=("/"===(a+=t||(/^data\:|^blob\:|\?/.test(a)||i?"":".js")).charAt(0)||a.match(/^[\w\+\.\-]+:/)?"":g.baseUrl)+a}return g.urlArgs&&!/^blob\:/.test(a)?a+g.urlArgs(e,a):a},load:function(e,t){req.load(l,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=s(e);l.completeLoad(t.id)}},onScriptError:function(e){var i=s(e);if(!w(i.id)){var r=[];return eachProp(p,function(e,t){0!==t.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===i.id)return r.push(t),!0})}),O(makeError("scripterror",'Script error for "'+i.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[i.id]))}}}).require=l.makeRequire(),l}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var runtime = function (exports) {
  'use strict';

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === 'function' ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || '@@iterator';
  var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
  var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    define({}, '');
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: 'normal',
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: 'throw',
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = 'suspendedStart';
  var GenStateSuspendedYield = 'suspendedYield';
  var GenStateExecuting = 'executing';
  var GenStateCompleted = 'completed';
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, 'constructor', GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, 'constructor', GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction');

  function defineIteratorMethods(prototype) {
    ['next', 'throw', 'return'].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === 'function' && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === 'GeneratorFunction' : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, 'GeneratorFunction');
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === 'throw') {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === 'object' && hasOwn.call(value, '__await')) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke('next', value, resolve, reject);
          }, function (err) {
            invoke('throw', err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke('throw', error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error('Generator is already running');
      }

      if (state === GenStateCompleted) {
        if (method === 'throw') {
          throw arg;
        }

        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === 'next') {
          context.sent = context._sent = context.arg;
        } else if (context.method === 'throw') {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === 'return') {
          context.abrupt('return', context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === 'normal') {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === 'throw') {
          state = GenStateCompleted;
          context.method = 'throw';
          context.arg = record.arg;
        }
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      context.delegate = null;

      if (context.method === 'throw') {
        if (delegate.iterator['return']) {
          context.method = 'return';
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === 'throw') {
            return ContinueSentinel;
          }
        }

        context.method = 'throw';
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === 'throw') {
      context.method = 'throw';
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = 'throw';
      context.arg = new TypeError('iterator result is not an object');
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;

      if (context.method !== 'return') {
        context.method = 'next';
        context.arg = undefined;
      }
    } else {
      return info;
    }

    context.delegate = null;
    return ContinueSentinel;
  }

  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, 'Generator');
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, 'toString', function () {
    return '[object Generator]';
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = 'normal';
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: 'root'
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === 'function') {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = 'next';
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === 'throw') {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = 'throw';
        record.arg = exception;
        context.next = loc;

        if (caught) {
          context.method = 'next';
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === 'root') {
          return handle('end');
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, 'catchLoc');
          var hasFinally = hasOwn.call(entry, 'finallyLoc');

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error('try statement without catch or finally');
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === 'break' || type === 'continue') && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = 'next';
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === 'throw') {
        throw record.arg;
      }

      if (record.type === 'break' || record.type === 'continue') {
        this.next = record.arg;
      } else if (record.type === 'return') {
        this.rval = this.arg = record.arg;
        this.method = 'return';
        this.next = 'end';
      } else if (record.type === 'normal' && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === 'throw') {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error('illegal catch attempt');
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === 'next') {
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
  return exports;
}((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function('r', 'regeneratorRuntime = r')(runtime);
  }
}
