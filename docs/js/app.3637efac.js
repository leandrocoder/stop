(function(e){function t(t){for(var o,n,i=t[0],u=t[1],l=t[2],c=0,h=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);m&&m(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,n=1;n<r.length;n++){var u=r[n];0!==a[u]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},s=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b4ecf9b8"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=n(e);var l=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,r[1](l)}a[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var m=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0992":function(e,t,r){},2736:function(e,t,r){"use strict";r("d28a")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=(r("d3b7"),r("8c4f")),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],l={name:"HelloWorld",props:{msg:String}},c=l,m=(r("e2d3"),r("2877")),h=Object(m["a"])(c,i,u,!1,null,"1dfc7223",null),d=h.exports,p={name:"Home",components:{HelloWorld:d}},v=p,f=Object(m["a"])(v,s,n,!1,null,null,null),g=f.exports;o["a"].use(a["a"]);var _=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],b=new a["a"]({routes:_}),y=b,k=r("2f62");o["a"].use(k["a"]);var w=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("audio",{ref:"audioRoda",staticStyle:{display:"none"},attrs:{controls:""}},[r("source",{attrs:{src:"rodaroda.mp3",type:"audio/mpeg"}})]),r("audio",{ref:"audioErrou",staticStyle:{display:"none"},attrs:{controls:""}},[r("source",{attrs:{src:"errou.mp3",type:"audio/mpeg"}})]),r("p",{staticStyle:{margin:"0",padding:"1rem"}},[e._v("Stop")]),r("div",{staticClass:"letras"},e._l(e.letras,(function(t,o){return r("p",{key:"letter-"+o,class:e.letrasUsadas.indexOf(o)>=0?"letraUsada":o==e.letraIndex?"letraPassando":""},[e._v(e._s(t))])})),0),r("p",{staticClass:"letter"},[e._v(e._s(e.letras[e.letraIndex]))]),r("button",{on:{click:e.onClickRandomizeLetter}},[e._v("SORTEAR LETRA")]),r("div",{staticClass:"themeContainer"},[r("p",{staticClass:"med"},[e._v(e._s(e.temas[e.temaIndex]))])]),r("button",{on:{click:e.onClickRandomizeTheme}},[e._v("SORTEAR TEMA")]),r("p",{staticClass:"timer"},[e._v(e._s(e.timer.toFixed(2)))]),r("button",{on:{click:e.onClickTimer}},[e._v(e._s(e.timerLabel[e.timerStatus]))])])},C=[],j=(r("c975"),30),x={data:function(){return{letrasUsadas:[],letraIndex:0,letras:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],temaIndex:0,temas:["Famosos","Profissões","Clubes de Futebol","Bandas","Minha sogra é...","Hoje eu vou...",'Palavras com "RR"',"Pizza de...","Star Wars","Eletronicos","Invenções Famosas","Idiomas","Animais","Comida","Música","Marcas Famosas","Filmes e Séries","Nomes Masculinos","Nomes Femininos","Companhia Aerea","Carros","Harry Potter","Cidades"],min:65,max:90,timer:j,timerStatus:0,timerLabel:["INICIAR","PARAR"],lastTime:null,volume:1,wantedVolume:1,letraTimeout:null}},mounted:function(){this.resetColor();try{this.$refs["audioRoda"].volume=.2*this.volume}catch(e){}setInterval(this.updateTimer,10)},methods:{setErrorColor:function(){document.body.style.backgroundColor="#ff0000"},resetColor:function(){document.body.style.backgroundColor="#c5506d"},resetTimer:function(){this.timerStatus=0,this.timer=j},playAudio:function(e){try{this.$refs[e].play()}catch(t){}},updateTimer:function(){null==this.lastTime&&(this.lastTime=new Date);var e=new Date,t=(e.getTime()-this.lastTime.getTime())/1e3;this.lastTime=e,this.wantedVolume>this.volume&&(this.volume+=.01,this.volume>this.wantedVolume&&(this.volume=this.wantedVolume)),this.wantedVolume<this.volume&&(this.volume-=.01,this.volume<=this.wantedVolume&&(this.volume=this.wantedVolume,this.$refs.audioRoda.pause(),this.$refs.audioRoda.currentTime=0));try{this.$refs["audioRoda"].volume=.2*this.volume}catch(o){}if(1==this.timerStatus&&(this.timer-=t,this.timer<=0)){this.timerStatus=0,this.timer=0,this.playAudio("audioErrou");for(var r=0;r<8;r+=2)setTimeout(this.setErrorColor,200*r),setTimeout(this.resetColor,200*(r+1))}},onClickTimer:function(){this.timer<=0&&this.resetTimer(),this.timerStatus++,1==this.timerStatus&&(this.timer=j),2==this.timerStatus&&(this.timerStatus=0)},onClickRandomizeLetter:function(){this.resetTimer();try{this.wantedVolume=1,this.$refs.audioRoda.play()}catch(e){}this.randomize(Math.round(80*Math.random())+10,600,"letraIndex","letras","letrasUsadas")},onClickRandomizeTheme:function(){this.letrasUsadas=[],this.resetTimer(),this.randomize(Math.round(100*Math.random())+10,600,"temaIndex","temas")},randomize:function(e,t,r,o,a){var s=this,n=this[o].length,i=this[r];if(i++,i>=n&&(i=0),this[a])while(this[a].indexOf(i)>=0)i++,i>=n&&(i=0);if(this[r]=i,e+=10,e<t)clearTimeout(this.letraTimeout),this.letraTimeout=setTimeout((function(){s.randomize(e,t,r,o,a)}),e);else{a&&this[a].push(i);try{console.log(this.$refs),this.wantedVolume=0}catch(u){}}}}},S=x,E=(r("2736"),Object(m["a"])(S,T,C,!1,null,null,null)),R=E.exports;o["a"].config.productionTip=!1,new o["a"]({router:y,store:w,render:function(e){return e(R)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d28a:function(e,t,r){},e2d3:function(e,t,r){"use strict";r("0992")}});
//# sourceMappingURL=app.3637efac.js.map