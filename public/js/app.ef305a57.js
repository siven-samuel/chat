(function(e){function t(t){for(var n,a,u=t[0],l=t[1],i=t[2],p=0,s=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"afb0e1e7"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"831a225d"}[e]+".css",o=l.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===n||p===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],p=i.getAttribute("data-href");if(p===n||p===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var y=document.getElementsByTagName("head")[0];y.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,l.nc&&p.setAttribute("nonce",l.nc),p.src=u(e);var s=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=p;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=Object(n["f"])("Home"),o=Object(n["f"])("One screen Multiplayer"),c=Object(n["f"])("Network Multiplayer"),u=Object(n["f"])("Deck Editor");function l(e,t,r,l,i,p){var s=Object(n["w"])("router-link"),f=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",{id:"nav",class:p.MenuVisble},[Object(n["g"])(s,{to:"/"},{default:Object(n["C"])((function(){return[a]})),_:1}),Object(n["g"])(s,{to:"/local_multiplayer"},{default:Object(n["C"])((function(){return[o]})),_:1}),Object(n["g"])(s,{to:"/multiplayer"},{default:Object(n["C"])((function(){return[c]})),_:1}),Object(n["g"])(s,{to:"/deck"},{default:Object(n["C"])((function(){return[u]})),_:1})],2),Object(n["g"])(f)],64)}var i={name:"Hand",computed:{MenuVisble:function(){return"/"!==this.$router.currentRoute.value.path?"hide":""}}};r("b3f4");i.render=l;var p=i,s=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),f={class:"home"};function y(e,t,r,a,o,c){return Object(n["p"])(),Object(n["d"])("div",f)}var d={name:"Home",components:{}};d.render=y;var m=d,b=[{path:"/",name:"Home",component:m},{path:"/local_multiplayer",name:"LocalMultiplayer",component:function(){return r.e("about").then(r.bind(null,"949a"))}},{path:"/multiplayer",name:"Multiplayer",component:function(){return r.e("about").then(r.bind(null,"4388"))}},{path:"/deck",name:"Deck",component:function(){return r.e("about").then(r.bind(null,"73d5"))}}],h=Object(s["a"])({mode:"history",history:Object(s["b"])(""),routes:b}),g=h,v=r("5502"),O=Object(v["a"])({state:{player:"P1",playerEnemy:"P2",P1:{weapons:20,energy:20,minerals:20,castle:30,factories:1,reactors:1,miners:1,shield:20,shieldGen:!0},P2:{weapons:20,energy:20,minerals:20,castle:30,factories:1,reactors:1,miners:1,shield:20,shieldGen:!0},pack1:[],pack2:[]},getters:{myCastle:function(e){return e.P1},enemyCastle:function(e){return e.P2},isPlayer:function(e){return e.player},packp1:function(e){return e.pack1},packp2:function(e){return e.pack2}},mutations:{increment:function(e,t){if(e[e.player].minerals+=e[e.player].factories,e[e.player].energy+=e[e.player].reactors,e[e.player].weapons+=e[e.player].miners,t)switch(t.effect){case"add":for(var r=0;r<t.target.length;r+=1)e[e.player][t.target[r]]+=t.effectCount,e[e.player][t.target[r]]>100&&(e[e.player][t.target[r]]=100);e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=1);break;case"remove":for(var n=0;n<t.target.length;n+=1){var a=[t.target[n]];0===e[e.playerEnemy].shield&&"shield"===[t.target[n]][0]&&(console.log("huraaaa"),a="castle"),e[e.playerEnemy][a]-=t.effectCount,e[e.playerEnemy][t.target[n]]<=0&&(e[e.playerEnemy][t.target[n]]=1)}e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=1);break;case"thief":for(var o=0;o<t.target.length;o+=1)e[e.playerEnemy][t.target[o]]-=t.effectCount,e[e.player][t.target[o]]+=t.effectCount,e[e.playerEnemy][t.target[o]]<=0&&(e[e.playerEnemy][t.target[o]]=1);e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=1);break;case"skip":break;default:}},playerChange:function(e){var t=[e.playerEnemy,e.player];e.player=t[0],e.playerEnemy=t[1]},addPack1:function(e,t){e.pack1=t},addPack2:function(e,t){e.pack2=t}},actions:{},modules:{}});Object(n["c"])(p).use(O).use(g).mount("#app")},a749:function(e,t,r){},b3f4:function(e,t,r){"use strict";r("a749")}});
//# sourceMappingURL=app.ef305a57.js.map