webpackJsonp([20],{b99p:function(e,t,a){"use strict";t.a=function(e){return Object(n.a)({url:"/requestlog/pagedlist",method:"get",params:e})};var n=a("wY7H")},iI96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),i=a("exGp"),l=a.n(i),s=a("b99p"),o=a("7109"),u={name:"requestlog",data:function(){return{serverData:[],serverPagination:{page:1,rowsNumber:0,rowsPerPage:10,descending:!0},columns:[{name:"createdByName",required:!0,label:"用户",align:"left",field:"createdByName"},{name:"ip",required:!0,label:"IP",align:"left",field:"ip"},{name:"method",required:!0,label:"方法",align:"left",field:"method"},{name:"request",label:"请求",field:"request",align:"left"},{name:"time",label:"耗时(ms)",field:"time",align:"left"},{name:"createdDate",label:"时间",field:"createdDate",sortable:!0,align:"left"}],loading:!1}},methods:{request:function(e){var t=this;return l()(r.a.mark(function a(){var n,i,l,o,u,d,c,g;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,t.serverPagination=e.pagination,t.$refs.table,n=e.pagination,i=n.page,l=n.rowsPerPage,o=n.sortBy,u=n.descending,d={pageIndex:i,pageSize:l,sortBy:o,descending:u},a.next=6,Object(s.a)(d);case 6:c=a.sent,g=c.data.data,t.serverPagination.rowsNumber=g.totalCount,t.serverData=g.rows,setTimeout(function(){t.loading=!1},500);case 11:case"end":return a.stop()}},a,t)}))()},formatDate:function(e){return o.date.formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.request({pagination:this.serverPagination})}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"10px"}},[a("q-card",{staticClass:"fit shadow-6",attrs:{inline:""}},[a("q-card-main",{staticStyle:{height:"80%"}},[a("q-table",{ref:"table",attrs:{color:"primary",data:e.serverData,columns:e.columns,"row-key":"id",pagination:e.serverPagination,loading:e.loading,"rows-per-page-label":"每页数据","no-data-label":"没有数据"},on:{"update:pagination":function(t){e.serverPagination=t},request:e.request},scopedSlots:e._u([{key:"top-right",fn:function(e){return[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-createdDate",fn:function(t){return a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(e.formatDate(t.value))+"\n        ")])}}])})],1)],1)],1)},c=[];d._withStripped=!0;var g=a("XyMi"),f=Object(g.a)(u,d,c,!1,null,null,null);f.options.__file="src\\pages\\other\\requestlog.vue";t.default=f.exports}});