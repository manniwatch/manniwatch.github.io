!function(){"use strict";var e,n={},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var u=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every(function(e){return r.O[e](t[c])})?t.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,o,i]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce(function(n,t){return r.f[t](e,n),n},[]))},r.u=function(e){return(592===e?"common":e)+"-es5."+{72:"42b9582847411fe1e66d",187:"7d28b0b91c5b6c4c7d8f",277:"683d0ccf3f28ab1157ea",336:"5c1431c9e8242bcb831e",412:"57e7265299725a375a41",423:"e5d14ac3f25bc1c3a409",466:"e22c55e584db144ff646",547:"38db0f0e1db2a0891ecd",592:"855a5f99ba193a90a478",966:"4521cab718f1cbd595b9"}[e]+".js"},r.miniCssF=function(e){return"styles.c1e515b768b478a2e8a2.css"},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={},n="@manniwatch/client-ng:";r.l=function(t,o,i,u){if(e[t])e[t].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[o];var s=function(n,r){a.onerror=a.onload=null,clearTimeout(b);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(function(e){return e(r)}),n)return n(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.tu=function(n){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(n)}}(),r.p="",function(){var e={666:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else if(666!=n){var i=new Promise(function(t,r){o=e[n]=[t,r]});t.push(o[2]=i);var u=r.p+r.u(n),a=new Error;r.l(u,function(t){if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}},"chunk-"+n,n)}else e[n]=0},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,u=t[0],a=t[1],c=t[2],f=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r);for(n&&n(t);f<u.length;f++)r.o(e,i=u[f])&&e[i]&&e[i][0](),e[u[f]]=0;return r.O(l)},t=self.webpackChunk_manniwatch_client_ng=self.webpackChunk_manniwatch_client_ng||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}()}();