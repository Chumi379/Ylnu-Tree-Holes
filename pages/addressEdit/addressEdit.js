(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addressEdit/addressEdit"],{8116:function(e,t,n){},"8dec":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),a=(n("6ee4"),u(n("2726")),n("b475"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){c(i,r,a,u,o,"next",e)}function o(e){c(i,r,a,u,o,"throw",e)}u(void 0)}))}}var d={data:function(){return{title:"新增收货地址",form:{consignee:"",phone:void 0,gender:"1",detail:"",label:"公司"},labelList:["无","公司","家","学校"],id:void 0,activeIndex:0}},computed:{},created:function(){this.initData()},mounted:function(){},methods:{goBack:function(){history.go(-1)},initData:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=parseUrl(window.location.search),e.id=n.id,!n.id){t.next=8;break}return e.title="编辑收货地址",t.next=6,(0,a.addressFindOneApi)(n.id);case 6:i=t.sent,0===i.code?e.form=i.data:e.$notify({type:"warning",message:i.msg});case 8:case"end":return t.stop()}}),t)})))()},saveAddress:function(){var t=this;return s(r.default.mark((function n(){var i,u,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.form,i.consignee){n.next=3;break}return n.abrupt("return",e.$showMsg("请输入联系人",1500,"none"));case 3:if(i.phone){n.next=5;break}return n.abrupt("return",e.$showMsg("请输入手机号",1500,"none"));case 5:if(i.detail){n.next=7;break}return n.abrupt("return",e.$showMsg("请输入收货地址",1500,"none"));case 7:if(u=/^1[3|4|5|7|8][0-9]{9}$/,u.test(i.phone)){n.next=10;break}return n.abrupt("return",e.$showMsg("手机号不合法",1500,"none"));case 10:if(o={},!t.id){n.next=17;break}return n.next=14,(0,a.updateAddressApi)(t.form);case 14:o=n.sent,n.next=20;break;case 17:return n.next=19,(0,a.addAddressApi)(t.form);case 19:o=n.sent;case 20:0===o.code?e.navigateBack({delta:1}):t.$notify({type:"warning",message:o.msg});case 21:case"end":return n.stop()}}),n)})))()},deleteAddress:function(){var e=this;this.$dialog.confirm({title:"确认删除",message:"确认要删除当前地址吗？"}).then(s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.deleteAddressApi)({id:e.id});case 2:n=t.sent,0===n.code?window.requestAnimationFrame((function(){window.location.replace("/front/page/address.html")})):e.$notify({type:"warning",message:n.msg});case 4:case"end":return t.stop()}}),t)})))).catch((function(){}))}}};t.default=d}).call(this,n("543d")["default"])},"943a":function(e,t,n){"use strict";n.r(t);var r=n("d2fb"),a=n("b0db");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("ea71");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=c.exports},b0db:function(e,t,n){"use strict";n.r(t);var r=n("8dec"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},c64f:function(e,t,n){"use strict";(function(e){n("34c8");r(n("66fd"));var t=r(n("943a"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},d2fb:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"1230"))}},a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.form.gender="1"},e.e1=function(t){e.form.gender="0"},e.e2=function(t,n,r){var a=arguments[arguments.length-1].currentTarget.dataset,i=a.eventParams||a["event-params"];n=i.item,r=i.index;e.form.label=n,e.activeIndex=r})},i=[]},ea71:function(e,t,n){"use strict";var r=n("8116"),a=n.n(r);a.a}},[["c64f","common/runtime","common/vendor"]]]);