"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[653],{5762:function(r,n,e){e.d(n,{S:function(){return l}});var t=e(5671),a=e(3144),o=e(136),c=e(7277),s=e(2791),i=e(1125),u=e(184),l=function(r){(0,o.Z)(e,r);var n=(0,c.Z)(e);function e(){var r;(0,t.Z)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(r=n.call.apply(n,[this].concat(o))).state={error:!1},r}return(0,a.Z)(e,[{key:"componentDidCatch",value:function(r){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)(i.B,{}):this.props.children}}]),e}(s.Component)},1125:function(r,n,e){e.d(n,{B:function(){return i}});var t,a=e(168),o=e(6031).ZP.img(t||(t=(0,a.Z)(["\n  margin: 0 auto;\n  display: block;\n"]))),c=e.p+"static/media/error.d9aa7b1a785ebcbec41f.gif",s=e(184),i=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(o,{src:c,alt:"error"})})}},9811:function(r,n,e){e.r(n),e.d(n,{default:function(){return S}});var t,a,o,c=e(2791),s=e(9434),i=e(1413),u=e(1358),l=e(168),d=e(7121),p=e(6031),f=(0,p.ZP)(d.iA)(t||(t=(0,l.Z)(["\n  box-shadow: 0px 1px 5px rgb(177 167 169);\n  border-radius: 2px;\n  td {\n    min-width: 100px;\n  }\n"]))),h=e(184),Z=function(r){var n=r.columns,e=r.data,t=(0,u.useTable)({columns:n,data:e}),a=t.getTableProps,o=t.getTableBodyProps,c=t.headerGroups,s=t.rows,l=t.prepareRow;return(0,h.jsxs)(f,(0,i.Z)((0,i.Z)({},a()),{},{striped:!0,children:[(0,h.jsx)("thead",{children:c.map((function(r){return(0,h.jsx)("tr",(0,i.Z)((0,i.Z)({},r.getHeaderGroupProps()),{},{children:r.headers.map((function(r){return(0,h.jsx)("th",(0,i.Z)((0,i.Z)({},r.getHeaderProps()),{},{children:r.render("Header")}))}))}))}))}),(0,h.jsx)("tbody",(0,i.Z)((0,i.Z)({},o()),{},{children:s.map((function(r){return l(r),(0,h.jsx)("tr",(0,i.Z)((0,i.Z)({},r.getRowProps()),{},{children:r.cells.map((function(r){return(0,h.jsx)("td",(0,i.Z)((0,i.Z)({},r.getCellProps()),{},{children:r.render("Cell")}))}))}))}))}))]}))},x=e(1125),b=e(5965),v=(0,p.ZP)(d.W2)(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),g=(0,p.ZP)(b.Z)(o||(o=(0,l.Z)(["\n  display: block;\n  .ant-spin-dot {\n    display: flex;\n    margin: 10px auto;\n  }\n  .ant-spin-dot-item {\n    background-color: rgb(110 45 53);\n  }\n"]))),m=e(5762),j=e(6916),P=function(r){return r.bookListStatistic},y=(0,j.P1)(P,(function(r){return r.loading})),k=(0,j.P1)(P,(function(r){return r.data})),C=(0,j.P1)(P,(function(r){return r.error})),w=e(3197),H=e(2426),D=e.n(H);function S(){var r=(0,s.v9)(y),n=(0,s.v9)(C),e=(0,s.v9)(k),t=(0,s.I0)();(0,c.useEffect)((function(){t((0,w.s)())}),[t]);var a=(0,c.useMemo)((function(){return[{Header:"ID",accessor:"_id"},{Header:"NAME",accessor:"title"},{Header:"DESCRIPTION",accessor:"description",Cell:function(r){var n=r.cell.value;return"".concat(n.slice(0,130),"...")}},{Header:"PAGES",accessor:"pageCount"},{Header:"DATE",accessor:"publishDate",Cell:function(r){var n=r.cell.value;return D()(n).format("DD/MM/YYYY")}}]}),[]);return(0,h.jsx)(m.S,{children:(0,h.jsxs)(v,{children:[r&&!n&&(0,h.jsx)(g,{}),!r&&!n&&(0,h.jsx)(Z,{columns:a,data:e}),n&&!r&&(0,h.jsx)(x.B,{})]})})}}}]);
//# sourceMappingURL=653.a1e375a8.chunk.js.map