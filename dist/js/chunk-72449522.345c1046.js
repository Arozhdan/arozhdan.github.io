(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72449522"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),o=r("ae40"),c=a("reduce"),s=o("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!s},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Planning")))]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e._f("currency")(t.spend))+" "+e._s(e._f("localize")("Of"))+" "+e._s(e._f("currency")(t.limit))+" ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"cat.tooltip"}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v(" "+e._s(e._f("localize")("Place_NoCateg"))+" "),r("router-link",{attrs:{to:"/categories"}},[r("br"),e._v(" "+e._s(e._f("localize")("Add")))])],1)],1)},i=[],a=(r("99af"),r("4de4"),r("d81d"),r("13d5"),r("96cf"),r("1da1")),o=r("5530"),c=r("2f62"),s=r("5bb3"),l=r("e977"),u={metaInfo:function(){return{title:this.$title("Planning")}},name:"planning",data:function(){return{loading:!0,categories:[]}},computed:Object(o["a"])({},Object(c["c"])(["info"])),mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:n=t.sent,e.categories=n.map((function(e){var t=r.filter((function(t){return t.categoryId===e.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+ +t.amount}),0),n=100*t/e.limit,i=n>100?100:n,a=n<60?"green":n<100?"yellow":"red",c=e.limit-t,u="".concat(c<0?Object(l["a"])("Message_Exceeding"):Object(l["a"])("Message_AmountLeft")," ").concat(Object(s["a"])(Math.abs(c)));return Object(o["a"])({},e,{progressPercent:i,progressColor:a,spend:t,tooltip:u})})),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},f=u,d=r("2877"),p=Object(d["a"])(f,n,i,!1,null,null,null);t["default"]=p.exports},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),o=r("50c4"),c=function(e){return function(t,r,c,s){n(r);var l=i(t),u=a(l),f=o(l.length),d=e?f-1:0,p=e?-1:1;if(c<2)while(1){if(d in u){s=u[d],d+=p;break}if(d+=p,e?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:f>d;d+=p)d in u&&(s=r(s,u[d],d,l));return s}};e.exports={left:c(!1),right:c(!0)}}}]);
//# sourceMappingURL=chunk-72449522.345c1046.js.map