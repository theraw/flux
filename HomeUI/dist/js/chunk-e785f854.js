(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e785f854"],{"34e3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",[a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[a("b-form-group",{staticClass:"mb-0"},[a("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),a("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),a("b-col",{staticClass:"my-1",attrs:{md:"8"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"","empty-text":"No FluxNodes in DOS state"},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(e){return[a("a",{on:{click:e.toggleDetails}},[e.detailsShowing?t._e():a("v-icon",{attrs:{name:"chevron-down"}}),e.detailsShowing?a("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(e){return[a("b-card",{staticClass:"mx-2"},[e.item.collateral?a("list-entry",{attrs:{title:"Collateral",data:e.item.collateral}}):t._e()],1)]}}])})],1),a("b-col",{attrs:{cols:"12"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)},r=[],o=a("c7eb"),s=a("1da1"),i=(a("d81d"),a("4de4"),a("d3b7"),a("159b"),a("14d9"),a("205f")),c=a("29a1"),l=a("a15b"),u=a("b28b"),d=a("26d2"),f=a("8226"),b=a("8361"),m=a("5e12"),g=a("4797"),p=a("ccc0"),h=a("1947"),O=a("b307"),k=a("9e7b"),v=a("6076"),y=a("c9ae"),j={components:{BCard:i["a"],BTable:c["a"],BRow:l["a"],BCol:u["a"],BPagination:d["a"],BFormGroup:f["a"],BFormSelect:b["a"],BInputGroup:m["a"],BFormInput:g["a"],BInputGroupAppend:p["a"],BButton:h["a"],ListEntry:k["a"],ToastificationContent:O["a"]},data:function(){return{timeoptions:y,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0},{key:"eligible_in",label:"Eligible In Blocks",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.daemonGetDOSList()},methods:{daemonGetDOSList:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a,n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["a"].getDOSList();case 2:a=e.sent,"error"===a.data.status?t.$toast({component:O["a"],props:{title:a.data.data.message||a.data.data,icon:"InfoIcon",variant:"danger"}}):(n=t,a.data.data.forEach((function(t){n.items.push(t)})),t.totalRows=t.items.length,t.currentPage=1);case 4:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},w=j,_=(a("96ea"),a("2877")),B=Object(_["a"])(w,n,r,!1,null,null,null);e["default"]=B.exports},6076:function(t,e,a){"use strict";a("99af");var n=a("b4c0");e["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(n["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(n["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(n["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"78d8":function(t,e,a){},"96ea":function(t,e,a){"use strict";a("78d8")},"9e7b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",{staticClass:"row",class:t.classes},[a("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?a("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[a("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):a("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],o=(a("a9e3"),a("aa59")),s={components:{BLink:o["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=s,c=a("2877"),l=Object(c["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},c9ae:function(t,e,a){"use strict";a.r(e);var n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"};e["default"]={shortDate:n,date:r}},f07e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(){}}}]);