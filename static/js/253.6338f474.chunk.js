"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[253],{1243:function(e,r,n){n.d(r,{n:function(){return s},v:function(){return o}});var t=n(4165),a=n(5861),u=n(4569),c=n.n(u)().create({baseURL:"https://fakerestapi.azurewebsites.net/api/v1"});c.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/Books");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/Books/".concat(r));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()},5762:function(e,r,n){n.d(r,{S:function(){return l}});var t=n(5671),a=n(3144),u=n(136),c=n(8557),s=n(2791),o=n(1125),i=n(184),l=function(e){(0,u.Z)(n,e);var r=(0,c.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(e=r.call.apply(r,[this].concat(u))).state={error:!1},e}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,i.jsx)(o.B,{}):this.props.children}}]),n}(s.Component)},1125:function(e,r,n){n.d(r,{B:function(){return o}});var t,a=n(168),u=n(6031).ZP.img(t||(t=(0,a.Z)(["\n  margin: 0 auto;\n  display: block;\n"]))),c=n.p+"static/media/error.d9aa7b1a785ebcbec41f.gif",s=n(184),o=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(u,{src:c,alt:"error"})})}},4834:function(e,r,n){n.r(r),n.d(r,{default:function(){return P}});var t,a,u,c=n(5762),s=n(885),o=n(2791),i=n(1243),l=n(1413),p=n(1358),d=n(168),f=n(4955),h=n(6031),Z=(0,h.ZP)(f.iA)(t||(t=(0,d.Z)(["\n  box-shadow: 0px 1px 5px rgb(177 167 169);\n  border-radius: 5px;\n  td {\n    min-width: 100px;\n  }\n"]))),v=n(184),x=function(e){var r=e.columns,n=e.data,t=(0,p.useTable)({columns:r,data:n}),a=t.getTableProps,u=t.getTableBodyProps,c=t.headerGroups,s=t.rows,o=t.prepareRow;return(0,v.jsxs)(Z,(0,l.Z)((0,l.Z)({},a()),{},{striped:!0,children:[(0,v.jsx)("thead",{children:c.map((function(e){return(0,v.jsx)("tr",(0,l.Z)((0,l.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,v.jsx)("th",(0,l.Z)((0,l.Z)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),(0,v.jsx)("tbody",(0,l.Z)((0,l.Z)({},u()),{},{children:s.map((function(e){return o(e),(0,v.jsx)("tr",(0,l.Z)((0,l.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,v.jsx)("td",(0,l.Z)((0,l.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))},b=n(1125),g=(0,h.ZP)(f.W2)(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),j=(0,h.ZP)(f.$j)(u||(u=(0,d.Z)(["\n  display: flex;\n  margin: 0 auto;\n  color: rgb(110 45 53);\n"]))),m=n(2426),w=n.n(m),y=function(){var e=(0,o.useState)([]),r=(0,s.Z)(e,2),n=r[0],t=r[1],a=(0,o.useState)(!0),u=(0,s.Z)(a,2),c=u[0],l=u[1],p=(0,o.useState)(!1),d=(0,s.Z)(p,2),f=d[0],h=d[1];(0,o.useEffect)((function(){(0,i.n)().then((function(e){t(e),l(!1)})).catch((function(){h(!0)})).finally((function(){l(!1)}))}),[]);var Z=(0,o.useMemo)((function(){return[{Header:"ID",accessor:"id"},{Header:"NAME",accessor:"title"},{Header:"DESCRIPTION",accessor:"description",Cell:function(e){var r=e.cell.value;return"".concat(r.slice(0,130),"...")}},{Header:"PAGES",accessor:"pageCount"},{Header:"CREATE DATE",accessor:"publishDate",Cell:function(e){var r=e.cell.value;return w()(r).format("DD/MM/YYYY")}}]}),[]);return(0,v.jsxs)(g,{children:[c&&!n.length&&!f&&(0,v.jsx)(j,{}),n&&!c&&!f&&(0,v.jsx)(x,{columns:Z,data:n}),f&&!c&&(0,v.jsx)(b.B,{})]})};function P(){return(0,v.jsx)(c.S,{children:(0,v.jsx)(y,{})})}}}]);
//# sourceMappingURL=253.6338f474.chunk.js.map