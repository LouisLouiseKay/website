!function(){return function t(e,n,r){function o(u,c){if(!n[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var a=n[u]={exports:{}};e[u][0].call(a.exports,function(t){return o(e[u][1][t]||t)},a,a.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}}()({1:[function(t,e,n){"use strict";function r(t){this.str=t,this.year=parseInt("20".concat(t.substr(0,2))),this.toString=function(){return this.str}}Date.prototype.desamber=function(){var t=new Date(this.getFullYear(),0,0),e=this-t+60*(t.getTimezoneOffset()-this.getTimezoneOffset())*1e3,n=Math.floor(e/864e5),o=this.getFullYear().toString().substr(2,2),i=String.fromCharCode(97+Math.floor((n-1)/364*26)).toUpperCase();i=365===n||366===n?"+":i;var u=n%14;return u="00"===(u=u<10?"0".concat(u):u)?"14":u,u=365===n?"01":366===n?"02":u,new r("".concat(o).concat(i).concat(u))}},{}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.inViewPort=void 0;var r=function(t){for(var e=t.offsetTop,n=t.offsetLeft,r=t.offsetWidth,o=t.offsetHeight;t.offsetParent;)e+=(t=t.offsetParent).offsetTop,n+=t.offsetLeft;return e<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&e+o>window.pageYOffset&&n+r>window.pageXOffset};n.inViewPort=r;var o=r;n.default=o},{}],3:[function(t,e,n){"use strict";var r=i(t("on-intersect")),o=i(t("./in-viewport"));function i(t){return t&&t.__esModule?t:{default:t}}t("./desamber"),document.addEventListener("DOMContentLoaded",function(t){document.querySelectorAll("time").forEach(function(t,e){t.innerHTML=new Date(t.dateTime).desamber().toString()}),function(){var t=document.querySelector("nav"),e=document.querySelector("header");(0,o.default)(e)||(t.style.backgroundColor="#000");(0,r.default)(e,{rootMargin:"-87px"},function(){t.style.backgroundColor="transparent"},function(){t.style.backgroundColor="#000"})}()})},{"./desamber":1,"./in-viewport":2,"on-intersect":9}],4:[function(t,e,n){(function(n){"use strict";var r=t("object-assign");function o(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function i(t){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var u=t("util/"),c=Object.prototype.hasOwnProperty,f=Array.prototype.slice,s="foo"===function(){}.name;function a(t){return Object.prototype.toString.call(t)}function l(t){return!i(t)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=e.exports=m,d=/\s*function\s+([^\(\s]*)\s*/;function g(t){if(u.isFunction(t)){if(s)return t.name;var e=t.toString().match(d);return e&&e[1]}}function y(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function h(t){if(s||!u.isFunction(t))return u.inspect(t);var e=g(t);return"[Function"+(e?": "+e:"")+"]"}function b(t,e,n,r,o){throw new p.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function m(t,e){t||b(t,!0,e,"==",p.ok)}function v(t,e,n,r){if(t===e)return!0;if(i(t)&&i(e))return 0===o(t,e);if(u.isDate(t)&&u.isDate(e))return t.getTime()===e.getTime();if(u.isRegExp(t)&&u.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(l(t)&&l(e)&&a(t)===a(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===o(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(t);return-1!==c&&c===r.expected.indexOf(e)||(r.actual.push(t),r.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(u.isPrimitive(t)||u.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=w(t),i=w(e);if(o&&!i||!o&&i)return!1;if(o)return t=f.call(t),e=f.call(e),v(t,e,n);var c,s,a=j(t),l=j(e);if(a.length!==l.length)return!1;for(a.sort(),l.sort(),s=a.length-1;s>=0;s--)if(a[s]!==l[s])return!1;for(s=a.length-1;s>=0;s--)if(c=a[s],!v(t[c],e[c],n,r))return!1;return!0}(t,e,n,r))}return n?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function O(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function E(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&b(o,n,"Missing expected exception"+r);var i="string"==typeof r,c=!t&&o&&!n;if((!t&&u.isError(o)&&i&&O(o,n)||c)&&b(o,n,"Got unwanted exception"+r),t&&o&&n&&!O(o,n)||!t&&o)throw o}p.AssertionError=function(t){var e;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=y(h((e=this).actual),128)+" "+e.operator+" "+y(h(e.expected),128),this.generatedMessage=!0);var n=t.stackStartFunction||b;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=g(n),u=o.indexOf("\n"+i);if(u>=0){var c=o.indexOf("\n",u+1);o=o.substring(c+1)}this.stack=o}}},u.inherits(p.AssertionError,Error),p.fail=b,p.ok=m,p.equal=function(t,e,n){t!=e&&b(t,e,n,"==",p.equal)},p.notEqual=function(t,e,n){t==e&&b(t,e,n,"!=",p.notEqual)},p.deepEqual=function(t,e,n){v(t,e,!1)||b(t,e,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,n){v(t,e,!0)||b(t,e,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,n){v(t,e,!1)&&b(t,e,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function t(e,n,r){v(e,n,!0)&&b(e,n,r,"notDeepStrictEqual",t)},p.strictEqual=function(t,e,n){t!==e&&b(t,e,n,"===",p.strictEqual)},p.notStrictEqual=function(t,e,n){t===e&&b(t,e,n,"!==",p.notStrictEqual)},p.throws=function(t,e,n){E(!0,t,e,n)},p.doesNotThrow=function(t,e,n){E(!1,t,e,n)},p.ifError=function(t){if(t)throw t},p.strict=r(function t(e,n){e||b(e,!0,n,"==",t)},p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var j=Object.keys||function(t){var e=[];for(var n in t)c.call(t,n)&&e.push(n);return e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"object-assign":8,"util/":7}],5:[function(t,e,n){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],6:[function(t,e,n){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],7:[function(t,e,n){(function(e,r){var o=/%[sdj%]/g;n.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),f=r[n];n<i;f=r[++n])y(f)||!w(f)?u+=" "+f:u+=" "+c(f);return u},n.deprecate=function(t,o){if(m(r.process))return function(){return n.deprecate(t,o).apply(this,arguments)};if(!0===e.noDeprecation)return t;var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(o);e.traceDeprecation?console.trace(o):console.error(o),i=!0}return t.apply(this,arguments)}};var i,u={};function c(t,e){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(e)?r.showHidden=e:e&&n._extend(r,e),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=f),a(r,t,r.depth)}function f(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function a(t,e,r){if(t.customInspect&&e&&j(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var o=e.inspect(r,t);return b(o)||(o=a(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(h(e))return t.stylize(""+e,"number");if(g(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,e);if(i)return i;var u=Object.keys(e),c=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(e)),E(e)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(e);if(0===u.length){if(j(e)){var f=e.name?": "+e.name:"";return t.stylize("[Function"+f+"]","special")}if(v(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(O(e))return t.stylize(Date.prototype.toString.call(e),"date");if(E(e))return l(e)}var s,w="",x=!1,S=["{","}"];(d(e)&&(x=!0,S=["[","]"]),j(e))&&(w=" [Function"+(e.name?": "+e.name:"")+"]");return v(e)&&(w=" "+RegExp.prototype.toString.call(e)),O(e)&&(w=" "+Date.prototype.toUTCString.call(e)),E(e)&&(w=" "+l(e)),0!==u.length||x&&0!=e.length?r<0?v(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special"):(t.seen.push(e),s=x?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)T(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))}),i}(t,e,r,c,u):u.map(function(n){return p(t,e,r,c,n,x)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,w,S)):S[0]+w+S[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,f;if((f=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=f.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):f.set&&(c=t.stylize("[Setter]","special")),T(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(f.value)<0?(c=y(n)?a(t,f.value,null):a(t,f.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n")):c=t.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function d(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function y(t){return null===t}function h(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===x(t)}function w(t){return"object"==typeof t&&null!==t}function O(t){return w(t)&&"[object Date]"===x(t)}function E(t){return w(t)&&("[object Error]"===x(t)||t instanceof Error)}function j(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}n.debuglog=function(t){if(m(i)&&(i=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!u[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var r=e.pid;u[t]=function(){var e=n.format.apply(n,arguments);console.error("%s %d: %s",t,r,e)}}else u[t]=function(){};return u[t]},n.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=g,n.isNull=y,n.isNullOrUndefined=function(t){return null==t},n.isNumber=h,n.isString=b,n.isSymbol=function(t){return"symbol"==typeof t},n.isUndefined=m,n.isRegExp=v,n.isObject=w,n.isDate=O,n.isError=E,n.isFunction=j,n.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},n.isBuffer=t("./support/isBuffer");var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}n.log=function(){var t,e;console.log("%s - %s",(t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),q[t.getMonth()],e].join(" ")),n.format.apply(n,arguments))},n.inherits=t("inherits"),n._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":6,_process:10,inherits:5}],8:[function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,c=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),f=1;f<arguments.length;f++){for(var s in n=Object(arguments[f]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var a=0;a<u.length;a++)i.call(n,u[a])&&(c[u[a]]=n[u[a]])}}return c}},{}],9:[function(t,e,n){var r=t("assert");function o(){}e.exports=function(t,e,n,i){r.ok("undefined"!=typeof window,"on-intersect: window did not exist. Are you calling this in the browser?"),r.equal(typeof t,"object","on-intersect: el should be a valid DOM node"),"function"==typeof e&&(i=n,n=e,e={});r.ok(n||i,"on-intersect: must have at least one listener"),n=n||o,i=i||o,r.equal(typeof e,"object","on-intersect: opts should be type object"),r.equal(typeof n,"function","on-intersect: onEnter should be type function"),r.equal(typeof i,"function","on-intersect: onExit should be type function");var u=!1,c=new window.IntersectionObserver(function(t,e){var r=t[0];("boolean"==typeof r.isIntersecting?r.isIntersecting:0!==r.intersectionRatio)?n(r):u&&i(r);u=!0},e);return c.observe(t),function(){c.disconnect()}}},{assert:4}],10:[function(t,e,n){var r,o,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function f(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(t){r=u}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(t){o=c}}();var s,a=[],l=!1,p=-1;function d(){l&&s&&(l=!1,s.length?a=s.concat(a):p=-1,a.length&&g())}function g(){if(!l){var t=f(d);l=!0;for(var e=a.length;e;){for(s=a,a=[];++p<e;)s&&s[p].run();p=-1,e=a.length}s=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new y(t,e)),1!==a.length||l||f(g)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}]},{},[3]);