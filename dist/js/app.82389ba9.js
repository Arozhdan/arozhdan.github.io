(function(e){function t(t){for(var n,a,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-009c65df":"1d485e32","chunk-00b817ff":"2b25b0c4","chunk-2cbdfe5e":"2e40e520","chunk-2d0d7699":"fb0ea37c","chunk-3a4e8dfe":"d01512b5","chunk-4ac2d909":"757649f4","chunk-5da77046":"1fe0b662","chunk-72449522":"345c1046"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-4ac2d909":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-009c65df":"31d6cfe0","chunk-00b817ff":"31d6cfe0","chunk-2cbdfe5e":"31d6cfe0","chunk-2d0d7699":"31d6cfe0","chunk-3a4e8dfe":"31d6cfe0","chunk-4ac2d909":"dc8cc850","chunk-5da77046":"31d6cfe0","chunk-72449522":"31d6cfe0"}[e]+".css",c=s.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("1da1"),a=r("2b0e"),c=r("2f62"),i=(r("b0c0"),r("59ca")),o=r.n(i),s={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,c=t.password,r.prev=2,r.next=5,o.a.auth().signInWithEmailAndPassword(a,c);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,c=t.email,i=t.password,s=t.name,r.prev=2,r.next=5,o.a.auth().createUserWithEmailAndPassword(c,i);case 5:return r.next=7,n("getUid");case 7:return u=r.sent,r.next=10,o.a.database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=o.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},u=r("5530"),l={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,o.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:c=t.sent.val(),n("setInfo",c),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,c=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return i=r.sent,s=Object(u["a"])({},c.info,{},t),r.next=8,o.a.database().ref("/users/".concat(i,"/info")).update(s);case 8:a("setInfo",s),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},d=(r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,o.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return c=t.t0,t.abrupt("return",Object.keys(c).map((function(e){return Object(u["a"])({},c[e],{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return c=r.sent,r.next=7,o.a.database().ref("/users/".concat(c,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(u["a"])({},i,{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,c=t.title,i=t.limit,s=t.id,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,o.a.database().ref("/users/".concat(u,"/categories")).child(s).update({title:c,limit:i});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,c=t.title,i=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,o.a.database().ref("/users/".concat(s,"/categories")).push({title:c,limit:i});case 8:return u=r.sent,r.abrupt("return",{title:c,limit:i,id:u.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}}),f={actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,r.next=7,o.a.database().ref("/users/".concat(c,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,o.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return c=t.t0,t.abrupt("return",Object.keys(c).map((function(e){return Object(u["a"])({},c[e],{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,r.next=7,o.a.database().ref("/users/".concat(c,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(u["a"])({},i,{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}};a["a"].use(c["a"]);t["a"]=new c["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="8f9214babc75c4b97e80c3534b666238",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},modules:{auth:s,info:l,category:d,record:f}})},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},c=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},o=[],s=r("b444"),u={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(s["a"][e.code]||"Что-то пошло не так")}}},l=u,d=r("2877"),f=Object(d["a"])(l,i,o,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Создать новую запсь",expression:"'Создать новую запсь'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},h=[],g=(r("b64b"),r("96cf"),r("1da1")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},b=[],y=r("e977"),_={data:function(){return{links:[{title:Object(y["a"])("Menu_Bill"),url:"/",exact:!0},{title:Object(y["a"])("Menu_History"),url:"/history"},{title:Object(y["a"])("Menu_Planning"),url:"/planning"},{title:Object(y["a"])("Menu_Record"),url:"/record"},{title:Object(y["a"])("Menu_Category"),url:"/categories"}]}},props:["value"]},w=_,C=Object(d["a"])(w,v,b,!1,null,null,null),x=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(e._s(e._f("localize")("ProfileTitle"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout()}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(e._s(e._f("localize")("Exit"))+" ")])])])])])])])},R=[],O=(r("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/login?message=logout")}},computed:{name:function(){return this.$store.getters.info.name}},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy()&&this.dropdown.destroy()}}),E=O,j=Object(d["a"])(E,k,R,!1,null,null,null),U=j.exports,$={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:U,Sidebar:x},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(s["a"][e.code]||"Что-то пошло не так")}}},N=$,I=Object(d["a"])(N,m,h,!1,null,null,null),P=I.exports,A={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:p,MainLayout:P}},B=A,S=(r("5c0b"),Object(d["a"])(B,a,c,!1,null,null,null)),D=S.exports,T=r("f3e7"),L=r("8832"),H=r.n(L),z=(r("45fc"),r("d3b7"),r("8c4f")),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Bill")))]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:e.refresh}},[r("i",{staticClass:"material-icons"},[e._v("refresh")])])]),e.loading?r("Loader"):r("div",{staticClass:"row"},[r("HomeBill",{attrs:{rates:e.currency.rates}}),r("HomeCurrency",{attrs:{rates:e.currency.rates,date:e.currency.date}})],1)],1)},J=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card light-blue bill-card"},[r("div",{staticClass:"card-content white-text"},[r("span",{staticClass:"card-title"},[e._v(e._s(e._f("localize")("AmountIn")))]),e._l(e.currencies,(function(t){return r("p",{key:t,staticClass:"currency-line"},[r("span",[e._v(e._s(e._f("currency")(e.getCurrency(t),t)))])])}))],2)])])},q=[],K={props:["rates"],data:function(){return{currencies:["RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["RUB"]/this.rates["EUR"])}},methods:{getCurrency:function(e){return Math.floor(this.base*this.rates[e])}}},Q=K,V=Object(d["a"])(Q,W,q,!1,null,null,null),X=V.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col s12 m6 l8"},[r("div",{staticClass:"card orange darken-3 bill-card"},[r("div",{staticClass:"card-content white-text"},[r("div",{staticClass:"card-header"},[r("span",{staticClass:"card-title"},[e._v(e._s(e._f("localize")("CurrencyRate")))])]),r("table",[r("thead",[r("tr",[r("th",[e._v(e._s(e._f("localize")("Currency")))]),r("th",[e._v(e._s(e._f("localize")("Rate")))]),r("th",[e._v(e._s(e._f("localize")("Date")))])])]),r("tbody",e._l(e.currencies,(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),r("td",[e._v(e._s(e.rates[t].toFixed(2)))]),r("td",[e._v(e._s(e._f("date")(e.date,"date")))])])})),0)])])])])},Y=[],Z={props:["rates","date"],data:function(){return{currencies:["RUB","USD","EUR"]}}},ee=Z,te=Object(d["a"])(ee,G,Y,!1,null,null,null),re=te.exports,ne={name:"Home",metaInfo:function(){return{title:this.$title("Menu_Bill")}},data:function(){return{loading:!0,currency:null}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrency");case 2:e.currency=t.sent,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{HomeBill:X,HomeCurrency:re},methods:{refresh:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("fetchCurrency");case 3:e.currency=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}}},ae=ne,ce=Object(d["a"])(ae,F,J,!1,null,null,null),ie=ce.exports,oe=r("59ca"),se=r.n(oe);n["a"].use(z["a"]);var ue=[{path:"/",name:"Home",meta:{layout:"main",auth:!0},component:ie},{name:"login",path:"/login",meta:{layout:"empty"},component:function(){return r.e("chunk-3a4e8dfe").then(r.bind(null,"a55b"))}},{name:"categories",path:"/categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-5da77046").then(r.bind(null,"58c2"))}},{name:"history",path:"/history",meta:{layout:"main"},component:function(){return r.e("chunk-009c65df").then(r.bind(null,"e4bb"))}},{name:"detail-record",path:"/detail/:id",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d7699").then(r.bind(null,"7769"))}},{name:"planning",path:"/planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-72449522").then(r.bind(null,"6859"))}},{name:"profile",path:"/profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-4ac2d909").then(r.bind(null,"c66d"))}},{name:"record",path:"/record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2cbdfe5e").then(r.bind(null,"43ef"))}},{name:"register",path:"/register",meta:{layout:"empty"},component:function(){return r.e("chunk-00b817ff").then(r.bind(null,"73cf"))}}],le=new z["a"]({mode:"history",base:"/",routes:ue});le.beforeEach((function(e,t,r){var n=se.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var de=le,fe=r("4360"),pe=r("58ca"),me={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},he=(r("99af"),{install:function(e){e.prototype.$title=function(e){var t="Arozhdan";return"".concat(Object(y["a"])(e)," | ").concat(t)}}}),ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},ve=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],be={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},ye=be,_e=Object(d["a"])(ye,ge,ve,!1,null,null,null),we=_e.exports;r("caad"),r("2532");function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=fe["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var xe,ke=r("5bb3"),Re={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}};r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(T["a"]),n["a"].use(me),n["a"].use(pe["a"]),n["a"].use(he),n["a"].filter("date",Ce),n["a"].filter("currency",ke["a"]),n["a"].filter("localize",y["a"]),n["a"].component("Loader",we),n["a"].component("Paginate",H.a),n["a"].directive("tooltip",Re),se.a.initializeApp({apiKey:"AIzaSyAe5ElTqXHRa-TfoQt_hxxdkbQtu2W9XSw",authDomain:"vue-crm-37466.firebaseapp.com",databaseURL:"https://vue-crm-37466.firebaseio.com",projectId:"vue-crm-37466",storageBucket:"vue-crm-37466.appspot.com",messagingSenderId:"340967673168",appId:"1:340967673168:web:dacbaf102318fa0e433055"}),se.a.auth().onAuthStateChanged((function(){xe||(xe=new n["a"]({router:de,store:fe["a"],render:function(e){return e(D)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-Ru",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Имя не может быть пустым","Message_EnterNaming":"Введите название","Message_EnterCateg":"Введите название категории","Message_MinValue":"Минимальная значение: 100","Message_Exceeding":"Превышение лимита","Message_AmountLeft":"Осталось","Place_NoCateg":"Категорий пока нет","Place_NoRec":"Категорий пока нет","Of":"Из","Back":"Назад","Forward":"Вперед","Add":"Создать","Update":"Обновить","Name":"Имя","Menu_Bill":"Счет","Menu_History":"История","Menu_Planning":"Планирование","Menu_Record":"Новая запись","Menu_Category":"Категории","Record":"Запись","Categories":"Категории","CategoryCreate":"Создать","CategoryCreate_Naming":"Название","CategoryCreate_Limit":"Лимит","Edit":"Редактировать","CategoryChoose":"Выберите категорию","Income":"Доход","Outcome":"Расход","Amount":"Сумма","Description":"Описание","NewRecord":"Новая запись","Planning":"Планирование","History":"История","Date":"Дата","Type":"Тип","Open":"Открыть","Exit":"Выйти","Bill":"Счет","AmountIn":"Счет в валюте","CurrencyRate":"Курс валют","Currency":"Валюта","Rate":"Курс"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Вы вышли из системы",login:"Войдите в систему","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Неверный пароль","auth/email-already-in-use":"Email уже занят"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("4360"),a=r("7704"),c=r("edd4"),i={"ru-Ru":a,"en-US":c};function o(e){var t=n["a"].getters.info.locale||"ru-RU";return i[t][e]||"[Localize error] : ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter your name","Message_EnterCateg":"Enter category name","Message_EnterNaming":"Enter the naming","Message_MinValue":"Min value: 100","Message_Exceeding":"Exceeding the limit","Message_AmountLeft":"Available:","Place_NoCateg":"No categories yet","Place_NoRec":"No records yet","Of":"of","Back":"Back","Forward":"Next","Update":"Update","Name":"Name","Menu_Bill":"Home","Menu_History":"History","Menu_Planning":"Planning","Menu_Record":"New Record","Menu_Category":"Categories","Categories":"Categories","CategoryCreate":"Create","CategoryCreate_Naming":"Naming","CategoryCreate_Limit":"Limit","Edit":"Edit","CategoryChoose":"Choose category","Income":"Income","Outcome":"Outcome","Amount":"Amount","Description":"Description","NewRecord":"New Record","Planning":"Planning","History":"Records history","Date":"Date","Type":"Type","Open":"Open","Exit":"Exit","Record":"Record","Bill":"Bill","AmountIn":"Amount in currency","CurrencyRate":"Currencies rate ","Currency":"Currency","Rate":"Rate"}')}});
//# sourceMappingURL=app.82389ba9.js.map