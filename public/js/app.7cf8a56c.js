(function(e){function t(t){for(var r,n,l=t[0],u=t[1],i=t[2],s=0,p=[];s<l.length;s++)n=l[s],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&p.push(c[n][0]),c[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},c={app:0},o=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a19ce08d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"7574c47d"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===c))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){i=p[l],s=i.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=c[e]=[t,a]}));t.push(r[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var p=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,a[1](p)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ea2":function(e,t,a){},"0ed7":function(e,t,a){"use strict";a("0ea2")},"3fc8":function(e,t,a){"use strict";a("9816")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},c=Object(r["f"])("Home"),o=Object(r["f"])(" | "),l=Object(r["f"])("One screen Multiplayer"),u=Object(r["f"])(" | "),i=Object(r["f"])("Network Multiplayer");function s(e,t){var a=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",n,[Object(r["g"])(a,{to:"/"},{default:Object(r["C"])((function(){return[c]})),_:1}),o,Object(r["g"])(a,{to:"/local_multiplayer"},{default:Object(r["C"])((function(){return[l]})),_:1}),u,Object(r["g"])(a,{to:"/multiplayer"},{default:Object(r["C"])((function(){return[i]})),_:1})]),Object(r["g"])(s)],64)}a("3fc8");const p={};p.render=s;var d=p,f=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),v={class:"home"};function h(e,t,a,n,c,o){var l=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",v,[Object(r["g"])(l,{msg:"Welcome to Your Vue.js App"})])}var g=Object(r["E"])("data-v-0a39cc74");Object(r["s"])("data-v-0a39cc74");var y={class:"hello"},b=Object(r["e"])('<p data-v-0a39cc74> For a guide and recipes on how to configure / customize this project,<br data-v-0a39cc74> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>vue-cli documentation</a>. </p><h3 data-v-0a39cc74>Installed CLI Plugins</h3><ul data-v-0a39cc74><li data-v-0a39cc74><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-0a39cc74>babel</a></li><li data-v-0a39cc74><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-0a39cc74>eslint</a></li></ul><h3 data-v-0a39cc74>Essential Links</h3><ul data-v-0a39cc74><li data-v-0a39cc74><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>Core Docs</a></li><li data-v-0a39cc74><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>Forum</a></li><li data-v-0a39cc74><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>Community Chat</a></li><li data-v-0a39cc74><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-0a39cc74>Twitter</a></li><li data-v-0a39cc74><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>News</a></li></ul><h3 data-v-0a39cc74>Ecosystem</h3><ul data-v-0a39cc74><li data-v-0a39cc74><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>vue-router</a></li><li data-v-0a39cc74><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>vuex</a></li><li data-v-0a39cc74><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-0a39cc74>vue-devtools</a></li><li data-v-0a39cc74><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-0a39cc74>vue-loader</a></li><li data-v-0a39cc74><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-0a39cc74>awesome-vue</a></li></ul>',7);Object(r["q"])();var m=g((function(e,t,a,n,c,o){return Object(r["p"])(),Object(r["d"])("div",y,[Object(r["g"])("h1",null,Object(r["y"])(a.msg),1),b])})),j={name:"HelloWorld",props:{msg:String}};a("0ed7");j.render=m,j.__scopeId="data-v-0a39cc74";var O=j,k={name:"Home",components:{HelloWorld:O}};k.render=h;var _=k,w=[{path:"/",name:"Home",component:_},{path:"/local_multiplayer",name:"LocalMultiplayer",component:function(){return a.e("about").then(a.bind(null,"949a"))}},{path:"/multiplayer",name:"Multiplayer",component:function(){return a.e("about").then(a.bind(null,"4388"))}}],E=Object(f["a"])({mode:"history",history:Object(f["b"])(""),routes:w}),C=E,P=a("5502"),S=Object(P["a"])({state:{player:"castleP1",playerEnemy:"castleP2",castleP1:{gold:50,energy:20,brick:20,castle:30,factories:3,reactors:2,miners:3,shield:10,shieldGen:!0},castleP2:{gold:20,energy:20,brick:20,castle:50,factories:1,reactors:1,miners:1,shield:0,shieldGen:!0},pack1:[],pack2:[]},getters:{myCastle:function(e){return e.castleP1},enemyCastle:function(e){return e.castleP2},isPlayer:function(e){return e.player},packp1:function(e){return e.pack1},packp2:function(e){return e.pack2}},mutations:{increment:function(e,t){if(e[e.player].brick+=e[e.player].factories,e[e.player].energy+=e[e.player].reactors,e[e.player].gold+=e[e.player].miners,t)switch(t.effect){case"add":for(var a=0;a<t.target.length;a+=1)e[e.player][t.target[a]]+=t.effectCount,e[e.player][t.target[a]]>100&&(e[e.player][t.target[a]]=100);e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=0);break;case"remove":for(var r=0;r<t.target.length;r+=1){var n=[t.target[r]];0===e[e.playerEnemy].shield&&"shield"===[t.target[r]][0]&&(console.log("huraaaa"),n="castle"),e[e.playerEnemy][n]-=t.effectCount,e[e.playerEnemy][t.target[r]]<=0&&(e[e.playerEnemy][t.target[r]]=0)}e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=0);break;case"thief":for(var c=0;c<t.target.length;c+=1)e[e.playerEnemy][t.target[c]]-=t.effectCount,e[e.player][t.target[c]]+=t.effectCount,e[e.playerEnemy][t.target[c]]<=0&&(e[e.playerEnemy][t.target[c]]=0);e[e.player][t.currency]-=t.cost,e[e.player][t.currency]<=0&&(e[e.player][t.currency]=0);break;default:}},playerChange:function(e){var t=[e.playerEnemy,e.player];e.player=t[0],e.playerEnemy=t[1]},addPack1:function(e,t){e.pack1=t},addPack2:function(e,t){e.pack2=t}},actions:{},modules:{}});Object(r["c"])(d).use(S).use(C).mount("#app")},9816:function(e,t,a){}});
//# sourceMappingURL=app.7cf8a56c.js.map