(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dece062c"],{"01e3":function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a("2f79"),r=a("b42e"),i=a("c637"),o=a("a723"),s=a("9b76"),c=a("365c"),l=a("cf75");function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=Object(l["d"])({label:Object(l["c"])(o["t"]),role:Object(l["c"])(o["t"],"status"),small:Object(l["c"])(o["g"],!1),tag:Object(l["c"])(o["t"],"span"),type:Object(l["c"])(o["t"],"border"),variant:Object(l["c"])(o["t"])},i["pb"]),b=Object(n["c"])({name:i["pb"],functional:!0,props:d,render:function(t,e){var a,n=e.props,i=e.data,o=e.slots,l=e.scopedSlots,d=o(),b=l||{},f=Object(c["b"])(s["s"],{},b,d)||n.label;return f&&(f=t("span",{staticClass:"sr-only"},f)),t(n.tag,Object(r["a"])(i,{attrs:{role:f?n.role||"status":null,"aria-hidden":f?null:"true"},class:(a={},u(a,"spinner-".concat(n.type),n.type),u(a,"spinner-".concat(n.type,"-sm"),n.small),u(a,"text-".concat(n.variant),n.variant),a)}),[f||t()])}})},"2bb7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[a("b-card",[a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[a("b-form-group",{staticClass:"mb-0"},[a("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),a("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),a("b-col",{staticClass:"my-1",attrs:{md:"8"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(e){return[a("a",{on:{click:e.toggleDetails}},[e.detailsShowing?t._e():a("v-icon",{attrs:{name:"chevron-down"}}),e.detailsShowing?a("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(e){return[a("b-card",{staticClass:"mx-2"},[e.item.collateral?a("list-entry",{attrs:{title:"Collateral",data:e.item.collateral}}):t._e(),e.item.txhash?a("list-entry",{attrs:{title:"TX Hash",data:e.item.txhash}}):t._e(),e.item.outidx?a("list-entry",{attrs:{title:"Output ID",data:e.item.outidx}}):t._e(),e.item.pubkey?a("list-entry",{attrs:{title:"Public Key",data:e.item.pubkey}}):t._e(),e.item.network?a("list-entry",{attrs:{title:"Network",data:e.item.network}}):t._e(),e.item.lastpaid?a("list-entry",{attrs:{title:"Last Paid",data:new Date(1e3*e.item.lastpaid).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),e.item.activesince?a("list-entry",{attrs:{title:"Active Since",data:new Date(1e3*e.item.activesince).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),e.item.last_paid_height?a("list-entry",{attrs:{title:"Last Paid Height",data:e.item.last_paid_height.toFixed(0)}}):t._e(),e.item.confirmed_height?a("list-entry",{attrs:{title:"Confirmed Height",data:e.item.confirmed_height.toFixed(0)}}):t._e(),e.item.last_confirmed_height?a("list-entry",{attrs:{title:"Last Confirmed Height",data:e.item.last_confirmed_height.toFixed(0)}}):t._e(),e.item.rank>=0?a("list-entry",{attrs:{title:"Rank",data:e.item.rank.toFixed(0)}}):t._e()],1)]}}])})],1),a("b-col",{attrs:{cols:"12"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)],1)},r=[],i=a("c7eb"),o=a("1da1"),s=(a("d81d"),a("4de4"),a("d3b7"),a("159b"),a("14d9"),a("205f")),c=a("29a1"),l=a("a15b"),u=a("b28b"),d=a("26d2"),b=a("8226"),f=a("8361"),p=a("5e12"),m=a("4797"),g=a("ccc0"),h=a("1947"),O=a("9b03"),y=a("b307"),v=a("9e7b"),j=a("6076"),w=a("c9ae"),k={components:{BCard:s["a"],BTable:c["a"],BRow:l["a"],BCol:u["a"],BPagination:d["a"],BFormGroup:b["a"],BFormSelect:f["a"],BInputGroup:p["a"],BFormInput:m["a"],BInputGroupAppend:g["a"],BButton:h["a"],BOverlay:O["a"],ListEntry:v["a"],ToastificationContent:y["a"]},data:function(){return{timeoptions:w,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"ip",label:"IP",sortable:!0},{key:"tier",label:"Tier",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0}],totalRows:1,currentPage:1,fluxListLoading:!0}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.daemonViewDeterministicZelNodeList()},methods:{daemonViewDeterministicZelNodeList:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,n;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].viewDeterministicZelNodeList();case 2:a=e.sent,"error"===a.data.status?t.$toast({component:y["a"],props:{title:a.data.data.message||a.data.data,icon:"InfoIcon",variant:"danger"}}):(n=t,a.data.data.forEach((function(t){n.items.push(t)})),t.totalRows=t.items.length,t.currentPage=1),t.fluxListLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},_=k,x=(a("da01"),a("2877")),C=Object(x["a"])(_,n,r,!1,null,null,null);e["default"]=C.exports},6076:function(t,e,a){"use strict";a("99af");var n=a("b4c0");e["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(n["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(n["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(n["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"84af":function(t,e,a){},"9b03":function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a("2f79"),r=a("c637"),i=a("0056"),o=a("a723"),s=a("9b76"),c=a("3a58"),l=a("8c18"),u=a("cf75"),d=a("01e3"),b=a("ce2a");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={top:0,left:0,bottom:0,right:0},h=Object(u["d"])({bgColor:Object(u["c"])(o["t"]),blur:Object(u["c"])(o["t"],"2px"),fixed:Object(u["c"])(o["g"],!1),noCenter:Object(u["c"])(o["g"],!1),noFade:Object(u["c"])(o["g"],!1),noWrap:Object(u["c"])(o["g"],!1),opacity:Object(u["c"])(o["o"],.85,(function(t){var e=Object(c["b"])(t,0);return e>=0&&e<=1})),overlayTag:Object(u["c"])(o["t"],"div"),rounded:Object(u["c"])(o["j"],!1),show:Object(u["c"])(o["g"],!1),spinnerSmall:Object(u["c"])(o["g"],!1),spinnerType:Object(u["c"])(o["t"],"border"),spinnerVariant:Object(u["c"])(o["t"]),variant:Object(u["c"])(o["t"],"light"),wrapTag:Object(u["c"])(o["t"],"div"),zIndex:Object(u["c"])(o["o"],10)},r["gb"]),O=Object(n["c"])({name:r["gb"],mixins:[l["a"]],props:h,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,a=t.spinnerVariant,n=t.spinnerSmall;return this.$createElement(d["a"],{props:{type:e,variant:a,small:n}})}},render:function(t){var e=this,a=this.show,n=this.fixed,r=this.noFade,o=this.noWrap,c=this.slotScope,l=t();if(a){var u=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:p(p({},g),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),d=t("div",{staticClass:"position-absolute",style:this.noCenter?p({},g):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(s["C"],c)||this.defaultOverlayFn(c)]);l=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!o||o&&!n,"position-fixed":o&&n},style:p(p({},g),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(i["f"],t)}},key:"overlay"},[u,d])}return l=t(b["a"],{props:{noFade:r,appear:!0},on:{"after-enter":function(){return e.$emit(i["O"])},"after-leave":function(){return e.$emit(i["s"])}}},[l]),o?l:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":a?"true":null}},o?[l]:[this.normalizeSlot(),l])}})},"9e7b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",{staticClass:"row",class:t.classes},[a("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?a("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[a("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],i=(a("a9e3"),a("aa59")),o={components:{BLink:i["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},s=o,c=a("2877"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["a"]=l.exports},c9ae:function(t,e,a){"use strict";a.r(e);var n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"};e["default"]={shortDate:n,date:r}},da01:function(t,e,a){"use strict";a("84af")},f07e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(){}}}]);