(this["webpackJsonpreact-to-do"]=this["webpackJsonpreact-to-do"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),s=n(30),o=n.n(s),i=n(12),l=n(52),u=n(53),d=n.n(u),p=n(54),f=n.n(p),b="dark",j=function(){var e=Object(l.useMediaQuery)({query:"(prefers-color-scheme: dark)"},void 0,(function(e){s(e)})),t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){c?document.documentElement.classList.add(b):document.documentElement.classList.remove(b)}),[c]),Object(r.jsx)("div",{className:f.a.DarkMode,children:Object(r.jsx)(d.a,{className:"DarkToggle",checked:c,onChange:function(e){return s(e.target.checked)},icons:{checked:"\ud83c\udf19",unchecked:"\ud83d\udd06"},"aria-label":"Dark mode"})})},O=n(5),m=n(10),h=n.n(m),v=n(13),_=n(9),x="COLORS_FETCH_START",y="COLORS_FETCH_STOP",g="COLORS_FETCH_ERROR",k="COLORS_FETCH_FILL",C="COLORS_FETCH_ASYNC";var I="LISTS_FETCH_START",w="LISTS_FETCH_STOP",S="LISTS_FETCH_ERROR",L="LISTS_FETCH_SYNC",T="LISTS_FETCH_ASYNC",A="LISTS_REMOVE_ITEM_SYNC",E="LISTS_REMOVE_ITEM_ASYNC",N="LISTS_ADD_SYNC",B="LISTS_ADD_ASYNC",F="UPDATE_LIST_TITLE_SYNC",H="UPDATE_LIST_TITLE_ASYNC";function M(){return{type:I}}function R(){return{type:w}}function P(){return{type:S,error:!0}}var D=function(){var e=Object(v.c)((function(e){return e.lists}));return{error:e.error,loading:e.loading,lists:e.lists}};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var K=a.createElement("path",{d:"M6 1V11",stroke:"#868686",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),W=a.createElement("path",{d:"M1 6H11",stroke:"#868686",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"});function Z(e,t){var n=e.title,r=e.titleId,c=Y(e,["title","titleId"]);return a.createElement("svg",V({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,K,W)}var U=a.forwardRef(Z),q=(n.p,n(33)),G=n.n(q),J=function(e){var t=e.handleShowAddListModal;return Object(r.jsxs)("button",{onClick:function(){return t()},className:G.a.addListHint,children:[Object(r.jsx)(U,{className:G.a.addListHintIcon}),Object(r.jsx)("p",{className:G.a.addListHintText,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443"})]})};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X=a.createElement("path",{d:"M10.315 0C4.62737 0 0 4.62737 0 10.315C0 16.0026 4.62737 20.63 10.315 20.63C16.0026 20.63 20.63 16.0026 20.63 10.315C20.63 4.62737 16.0026 0 10.315 0ZM14.0497 12.928C14.1265 13.0009 14.1879 13.0885 14.2303 13.1855C14.2727 13.2826 14.2952 13.3872 14.2966 13.4931C14.298 13.599 14.2781 13.7041 14.2382 13.8022C14.1983 13.9003 14.1392 13.9894 14.0643 14.0643C13.9894 14.1392 13.9003 14.1983 13.8022 14.2382C13.7041 14.2781 13.599 14.298 13.4931 14.2966C13.3872 14.2952 13.2826 14.2727 13.1855 14.2303C13.0885 14.1879 13.0009 14.1265 12.928 14.0497L10.315 11.4373L7.70203 14.0497C7.55202 14.1922 7.35226 14.2705 7.14536 14.2679C6.93846 14.2652 6.74077 14.1819 6.59446 14.0355C6.44814 13.8892 6.36477 13.6915 6.36212 13.4846C6.35947 13.2777 6.43775 13.078 6.58028 12.928L9.19275 10.315L6.58028 7.70203C6.43775 7.55202 6.35947 7.35226 6.36212 7.14536C6.36477 6.93846 6.44814 6.74077 6.59446 6.59446C6.74077 6.44814 6.93846 6.36477 7.14536 6.36212C7.35226 6.35947 7.55202 6.43775 7.70203 6.58028L10.315 9.19275L12.928 6.58028C13.078 6.43775 13.2777 6.35947 13.4846 6.36212C13.6915 6.36477 13.8892 6.44814 14.0355 6.59446C14.1819 6.74077 14.2652 6.93846 14.2679 7.14536C14.2705 7.35226 14.1922 7.55202 14.0497 7.70203L11.4373 10.315L14.0497 12.928Z",fill:"#5C5C5C"});function $(e,t){var n=e.title,r=e.titleId,c=Q(e,["title","titleId"]);return a.createElement("svg",z({width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,X)}var ee=a.forwardRef($),te=(n.p,n(39)),ne=n.n(te),re=function(e){var t=e.colorName,n=e.classNames,a=e.onClick;return Object(r.jsx)("i",{onClick:a,className:"".concat(ne.a.badge,"   ").concat(ne.a[t]," ").concat(n)})},ae=n(21),ce=n.n(ae),se=function(e){var t=e.setshowAddListModal,n=e.inputVal,a=e.setInputVal,c=e.handleSelectColor,s=e.handleAddNewList,o=e.colorPackage,i=function(){var e=Object(v.c)((function(e){return e.colors}));return{colors:e.colors,loading:e.loading,error:e.error}}().colors;return Object(r.jsxs)("div",{className:ce.a.modal,children:[Object(r.jsx)(ee,{onClick:function(){return t(!1)},className:ce.a.closeSvg}),Object(r.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",className:ce.a.input}),Object(r.jsx)("div",{className:ce.a.badgesContainer,children:i.map((function(e){return Object(r.jsx)(re,{onClick:function(){return c({colorId:e.id,name:e.name,hex:e.hex,id:e.id})},classNames:"\n                        ".concat(ce.a.badge,"\n                        ").concat(e.id===o.id&&ce.a.selectedBadge),colorName:e.name},e.id)}))}),Object(r.jsx)("button",{onClick:function(){return s()},className:ce.a.btn,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},oe=n(40),ie=n.n(oe);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=a.createElement("path",{d:"M10.96 5.10001H5.74001C5.24321 5.10001 5.20001 5.50231 5.20001 6.00001C5.20001 6.49771 5.24321 6.90001 5.74001 6.90001H10.96C11.4568 6.90001 11.5 6.49771 11.5 6.00001C11.5 5.50231 11.4568 5.10001 10.96 5.10001ZM12.76 9.60001H5.74001C5.24321 9.60001 5.20001 10.0023 5.20001 10.5C5.20001 10.9977 5.24321 11.4 5.74001 11.4H12.76C13.2568 11.4 13.3 10.9977 13.3 10.5C13.3 10.0023 13.2568 9.60001 12.76 9.60001ZM5.74001 2.40001H12.76C13.2568 2.40001 13.3 1.99771 13.3 1.50001C13.3 1.00231 13.2568 0.600006 12.76 0.600006H5.74001C5.24321 0.600006 5.20001 1.00231 5.20001 1.50001C5.20001 1.99771 5.24321 2.40001 5.74001 2.40001ZM2.86001 5.10001H1.24001C0.743212 5.10001 0.700012 5.50231 0.700012 6.00001C0.700012 6.49771 0.743212 6.90001 1.24001 6.90001H2.86001C3.35681 6.90001 3.40001 6.49771 3.40001 6.00001C3.40001 5.50231 3.35681 5.10001 2.86001 5.10001ZM2.86001 9.60001H1.24001C0.743212 9.60001 0.700012 10.0023 0.700012 10.5C0.700012 10.9977 0.743212 11.4 1.24001 11.4H2.86001C3.35681 11.4 3.40001 10.9977 3.40001 10.5C3.40001 10.0023 3.35681 9.60001 2.86001 9.60001ZM2.86001 0.600006H1.24001C0.743212 0.600006 0.700012 1.00231 0.700012 1.50001C0.700012 1.99771 0.743212 2.40001 1.24001 2.40001H2.86001C3.35681 2.40001 3.40001 1.99771 3.40001 1.50001C3.40001 1.00231 3.35681 0.600006 2.86001 0.600006Z",fill:"#7C7C7C"});function pe(e,t){var n=e.title,r=e.titleId,c=ue(e,["title","titleId"]);return a.createElement("svg",le({width:14,height:12,viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,de)}var fe=a.forwardRef(pe),be=(n.p,n(29)),je=n.n(be);function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=a.createElement("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"#E3E3E3"});function ve(e,t){var n=e.title,r=e.titleId,c=me(e,["title","titleId"]);return a.createElement("svg",Oe({width:11,height:11,viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,he)}var _e=a.forwardRef(ve),xe=(n.p,n(25)),ye=n.n(xe),ge=function(e){var t=e.handleRemoveListItem,n=D(),c=n.loading,s=n.lists,o=Object(a.useContext)(it),i=o.activeItem,l=o.setActiveItem,u=Object(_.d)();return Object(r.jsx)(r.Fragment,{children:!c&&Array.isArray(s)&&s.length?s.map((function(e){return Object(r.jsxs)("li",{className:"\n                        ".concat(ye.a.listItem," \n                        ").concat(Number(i)==e.id?ye.a.activeItem:""),onClick:function(){u.push("/?id=".concat(e.id)),l(h.a.toString(e.id))},children:[Object(r.jsx)(re,{colorName:e.color.name}),Object(r.jsx)("p",{className:ye.a.listItemText,children:e.name}),Object(r.jsx)(_e,{onClick:function(){return t(e.id)},className:ye.a.listItemRemoveSvg})]},e.id)})):Object(r.jsx)("li",{className:ye.a.IfArrrayIsEmpltyAlert,children:"\u041d\u0435\u0442 \u043f\u0430\u043f\u043e\u043a.."})})},ke=function(e){var t=e.handleRemoveListItem,n=e.refUL;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:je.a.AllTasks,children:[Object(r.jsx)(fe,{className:je.a.AllTasksIcon}),Object(r.jsx)("p",{className:je.a.AllTasksTitle,children:"All Tasks"})]}),Object(r.jsx)("ul",{ref:n,className:je.a.lists,children:Object(r.jsx)(ge,{handleRemoveListItem:t})})]})},Ce=function(){var e=D().lists,t=Object(_.d)(),n=Object(v.b)(),s=Object(a.useContext)(it).setActiveItem,o=c.a.useState({hex:"",colorId:0,name:"",id:0}),l=Object(i.a)(o,2),u=l[0],d=l[1],p=c.a.useState(!1),f=Object(i.a)(p,2),b=f[0],j=f[1],m=c.a.useState(""),x=Object(i.a)(m,2),y=x[0],g=x[1],k=c.a.useRef();c.a.useEffect((function(){n({type:T}),n({type:C})}),[n]),c.a.useEffect((function(){return t.push("/")}),[]),c.a.useEffect((function(){var n=h.a.chain(e).compact().last().value();h.a.isEmpty(n)||(t.push("/?id=".concat(n.id)),s(h.a.toString(n.id)),e.length>8&&I())}),[e.length]);var I=function(){k.current&&k.current.scrollTo({top:9999,behavior:"smooth"})};return Object(r.jsx)("div",{className:ie.a.ListSide,children:Object(r.jsxs)("div",{className:ie.a.ListsContainer,children:[Object(r.jsx)(ke,{refUL:k,handleRemoveListItem:function(e){n({type:E,payload:{id:e}}),t.push("/"),s("/")}}),b?Object(r.jsx)(se,{inputVal:y,colorPackage:u,setInputVal:g,handleAddNewList:function(){if(y&&u.colorId)return new Promise((function(e,t){var r;e(n((r={name:y,colorId:u.colorId,id:u.id,color:{hex:u.hex,name:u.name,id:u.id}},{type:B,paylaod:r})))})).then((function(){d((function(e){return Object(O.a)(Object(O.a)({},e),{},{id:0})})),g(""),j(!1)})).catch((function(){return alert("\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443!")}))},handleSelectColor:function(e){var t=e.id,n=e.colorId,r=e.name,a=e.hex;return d({id:t,colorId:n,name:r,hex:a})},setshowAddListModal:j}):Object(r.jsx)(J,{handleShowAddListModal:function(){return j(!0)}})]})})},Ie=n(43),we=n.n(Ie),Se=n(57),Le=n.n(Se);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ee=a.createElement("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z",fill:"#DFDFDF"});function Ne(e,t){var n=e.title,r=e.titleId,c=Ae(e,["title","titleId"]);return a.createElement("svg",Te({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Ee)}var Be=a.forwardRef(Ne),Fe=(n.p,c.a.forwardRef((function(e,t){var n=e.value,a=e.handleOnChange,c=e.handleonKeyDown,s=e.handleOnBlur,o=e.autoFocus,i=e.className,l=e.placeholder,u=e.defaultValue,d=e.handleOnClick;return Object(r.jsx)("input",{ref:t,value:n,placeholder:l,readOnly:t.current&&t.current.readOnly,autoFocus:o,className:i,defaultValue:u,onChange:function(e){h.a.isFunction(a)&&a(e)},onBlur:function(e){h.a.isFunction(s)&&s(e)},onKeyDown:function(e){h.a.isFunction(c)&&c(e)},onClick:function(){return h.a.isFunction(d)&&d()}})}))),He="ADD_NEW_TASK_SYNC",Me="ADD_NEW_TASK_ASYNC",Re="REMOVE_TASK_SYNC",Pe="REMOVE_TASK_ASYNC",De="SET_COMPLETED_SYNC",Ve="SET_COMPLETED_ASYNC",Ye="EDIT_TASK_NAME_SYNC",Ke="EDIT_TASK_NAME_ASYNC";var We=n(26),Ze=n.n(We),Ue=function(e){var t=e.setShowModalAddTaskForm,n=Object(_.d)(),s=Object(v.b)(),o=Object(a.useContext)(it).activeItem,l=c.a.useState({text:"",listId:0,completed:!1}),u=Object(i.a)(l,2),d=u[0],p=u[1],f=d.text,b=d.listId,j=d.completed;c.a.useEffect((function(){p((function(e){return Object(O.a)(Object(O.a)({},e),{},{listId:Number(o)})}))}),[n.location.search,o]);var m=function(){if(!f)return alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438!");s({type:Me,payload:{text:f,listId:b,completed:j}}),t(!1)};return Object(r.jsxs)("div",{className:Ze.a.AddTaskForm,children:[Object(r.jsx)("input",{placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){return p((function(t){return Object(O.a)(Object(O.a)({},t),{},{text:e.target.value})}))},autoFocus:!0,className:Ze.a.input}),Object(r.jsxs)("div",{className:Ze.a.btns,children:[Object(r.jsx)("button",{onClick:function(){return m()},className:Ze.a.addTaskBtn,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(r.jsx)("button",{onClick:function(){return t(!1)},className:Ze.a.CancelTaskAddingBtn,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})},qe=n(34),Ge=n.n(qe),Je=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)(Ue,{setShowModalAddTaskForm:a}):Object(r.jsxs)("div",{onClick:function(){return a(!0)},className:Ge.a.AddTaskHint,children:[Object(r.jsx)(U,{className:Ge.a.AddSvg}),Object(r.jsx)("button",{className:Ge.a.AddTaskHintBtn,children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})]})})},ze=n(20),Qe=n.n(ze);function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var et=a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#B3B3B3",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"});function tt(e,t){var n=e.title,r=e.titleId,c=$e(e,["title","titleId"]);return a.createElement("svg",Xe({width:11,height:8,viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,et)}var nt=a.forwardRef(tt),rt=(n.p,n(24)),at=n.n(rt),ct=function(e){var t=e.task,n=Object(v.b)(),s=Object(a.useRef)({readOnly:!0});c.a.useEffect((function(){s.current&&(s.current.readOnly=!0)}),[]);var o=function(){var e;s.current.readOnly=!0,n((e={id:t.id,listId:t.listId,text:s.current.value,completed:t.completed},{type:Ke,payload:e}))},i=function(){var e;n((e={id:t.id,listId:t.listId,completed:!t.completed},{type:Ve,payload:e}))},l=function(){var e;n((e={id:t.id,listId:t.listId,completed:t.completed,text:t.text},{type:Pe,payload:e}))};return Object(r.jsxs)("div",{className:at.a.taskItem,children:[Object(r.jsx)("label",{className:"\n                  ".concat(at.a.doneBlock,"\n                  ").concat(t.completed&&at.a.checked,"\n                  "),onClick:function(){return i()},children:Object(r.jsx)(nt,{className:"".concat(at.a.done," ")})}),Object(r.jsx)(Fe,{ref:s,handleOnClick:function(){t.completed||(s.current.readOnly=!1)},handleOnBlur:o,handleonKeyDown:function(e){return"Enter"==e.key&&o()},className:at.a.task,placeholder:"task name",defaultValue:t.text}),Object(r.jsx)(ee,{className:at.a.closeSvg,onClick:function(){return l()}})]},t.id)},st=function(){var e=D().lists,t=Object(_.d)(),n=Object(v.b)(),s=Object(a.useContext)(it),o=s.activeItem,l=s.setActiveItem,u=c.a.useState(),d=Object(i.a)(u,2),p=d[0],f=d[1],b=c.a.useState(""),j=Object(i.a)(b,2),O=j[0],m=j[1],x=Object(a.useRef)({readOnly:!0});c.a.useEffect((function(){h.a.isEmpty(x.current)||(x.current.readOnly=!0)}),[]),c.a.useEffect((function(){var t,n,r=function(e){return e.id==Number(o)},a=(null===(t=h.a.chain(e).filter(r).map((function(e){return e.name})).value()[0])||void 0===t?void 0:t.trim())||"";o?m(a):l("");var c=o&&e&&(null===(n=h.a.chain(e).filter(r).value()[0])||void 0===n?void 0:n.tasks);f(c)}),[o,e,e.length,l]),c.a.useEffect((function(){t.location.search&&l(function(){var e,n=h.a.toString(t.location.search).match(/(\?id=)\d{1,}$/);return h.a.isNull(n)||(e=n[0].match(/\d{1,}/gi)),h.a.toString(e)||""}())}),[t.location.search,o,l]);var y=function(){var e;x.current.readOnly=!0,n((e={listId:o,title:x.current.value},{type:H,payload:e}))};return Object(r.jsx)(r.Fragment,{children:o&&e.length?Object(r.jsxs)("div",{className:Qe.a.Content,children:[Object(r.jsxs)("div",{className:Qe.a.listTitleContainer,children:[Object(r.jsx)(Fe,{ref:x,value:O,handleOnChange:function(e){return m(e.target.value)},handleOnBlur:y,handleonKeyDown:function(e){return"Enter"==e.key&&y()},className:Qe.a.listTitle}),Object(r.jsx)(Be,{onClick:function(){return x.current.setSelectionRange(O.length,O.length),x.current.readOnly=!1,void x.current.focus()},className:Qe.a.EditSvg})]}),Object(r.jsx)("div",{className:Qe.a.tasksContainer,children:o&&p?p.map((function(e){return Object(r.jsx)(ct,{task:e},e.id)})):Object(r.jsx)("p",{className:Qe.a.IfArrrayIsEmpltyAlert,children:"There is not tasks yet.."})}),Object(r.jsx)(Je,{})]}):Object(r.jsx)("div",{className:Qe.a.Content,children:Object(r.jsx)("p",{className:Qe.a.IfArrrayIsEmpltyAlert,children:"Select a Folder or create one.."})})})},ot=function(){return Object(r.jsx)("div",{className:Le.a.contentSide,children:Object(r.jsx)(st,{})})},it=c.a.createContext({});it.displayName="ActiveItemContext";var lt=Object(_.e)((function(){var e=c.a.useState("/"),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:we.a.App,children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{className:we.a.content,children:Object(r.jsxs)(it.Provider,{value:{activeItem:n,setActiveItem:a},children:[Object(r.jsx)(Ce,{}),Object(r.jsx)(ot,{})]})})]})})),ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},dt=(n(80),n(81),n(19)),pt=n(60),ft=n(59),bt={lists:[],error:!1,loading:!1},jt={colors:[],error:!1,loading:!1},Ot=Object(dt.c)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(O.a)(Object(O.a)({},e),{},{error:!1,loading:!0});case w:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:!1});case S:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:!0});case L:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:!1,lists:t.payload});case T:return e;case A:return Object(O.a)(Object(O.a)({},e),{},{lists:e.lists.filter((function(e){return e.id!==t.payload.id}))});case E:return e;case N:return Object(O.a)(Object(O.a)({},e),{},{lists:[].concat(Object(ft.a)(e.lists),[t.payload])});case F:return Object(O.a)(Object(O.a)({},e),{},{lists:e.lists.map((function(e){return e.id==Number(t.payload.listId)?Object(O.a)(Object(O.a)({},e),{},{name:t.payload.title}):e}))});case He:var n=e.lists.filter((function(e){return e.id==t.payload.listId&&e.tasks.push(t.payload),e}));return Object(O.a)(Object(O.a)({},e),{},{lists:n});case Re:var r=e.lists.map((function(e){return e.id===t.payload.listId&&(e.tasks=e.tasks.filter((function(e){return e.id!==t.payload.id}))),e}));return Object(O.a)(Object(O.a)({},e),{},{lists:r});case De:var a=e.lists.map((function(e){return e.id===t.payload.listId&&(e.tasks=e.tasks.map((function(e){return e.id===t.payload.id&&(e.completed=t.payload.completed),e}))),e}));return Object(O.a)(Object(O.a)({},e),{},{lists:a});case Ye:var c=e.lists.map((function(e){return e.id===t.payload.listId&&(e.tasks=e.tasks.map((function(e){return e.id===t.payload.id&&(e.text=t.payload.text),e}))),e}));return Object(O.a)(Object(O.a)({},e),{},{lists:c});default:return e}},colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(O.a)(Object(O.a)({},e),{},{error:!1,loading:!0});case y:return Object(O.a)(Object(O.a)({},e),{},{error:!1,loading:!1});case g:return Object(O.a)(Object(O.a)({},e),{},{error:!0,loading:!1});case k:return Object(O.a)(Object(O.a)({},e),{},{error:!1,loading:!1,colors:t.payload});case C:default:return e}}}),mt=n(3),ht=n.n(mt),vt=n(8),_t=n(17),xt=n(58),yt=n.n(xt).a.create({headers:{"Content-Type":"application/json",Accept:"application/json"}}),gt=ht.a.mark(wt),kt=ht.a.mark(St);function Ct(){return It.apply(this,arguments)}function It(){return(It=Object(_t.a)(ht.a.mark((function e(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt.get("/db/colors").then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wt(){var e,t;return ht.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,{type:x};case 3:return n.next=5,Object(vt.b)(Ct);case 5:return e=n.sent,t=e.data,console.log("data",t),n.next=10,Object(vt.c)({type:k,payload:t});case 10:return n.next=12,{type:y};case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0);case 17:case"end":return n.stop()}}),gt,null,[[0,14]])}function St(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(C,wt);case 2:case"end":return e.stop()}}),kt)}var Lt=ht.a.mark(Pt),Tt=ht.a.mark(Dt),At=ht.a.mark(Kt),Et=ht.a.mark(Wt),Nt=ht.a.mark(qt),Bt=ht.a.mark(Gt),Ft=ht.a.mark(Qt),Ht=ht.a.mark(Xt);function Mt(){return Rt.apply(this,arguments)}function Rt(){return(Rt=Object(_t.a)(ht.a.mark((function e(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt.get("/db/lists?_expand=color&_embed=tasks").then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pt(){var e,t;return ht.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M();case 3:return n.next=5,Object(vt.b)(Mt);case 5:return e=n.sent,t=e.data,console.log("data",t),n.next=10,Object(vt.c)({type:L,payload:t});case 10:return n.next=12,R();case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),P();case 17:case"end":return n.stop()}}),Lt,null,[[0,14]])}function Dt(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(T,Pt);case 2:case"end":return e.stop()}}),Tt)}function Vt(e){return Yt.apply(this,arguments)}function Yt(){return(Yt=Object(_t.a)(ht.a.mark((function e(t){var n;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,yt.delete("/db/lists/"+n).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kt(e){var t,n;return ht.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,M();case 3:return r.next=5,Object(vt.b)(Vt,{id:e.payload.id});case 5:return t=r.sent,n=t.data,console.log("data",n),r.next=10,Object(vt.c)((a={id:e.payload.id},{type:A,payload:a}));case 10:return r.next=12,R();case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),P();case 17:case"end":return r.stop()}var a}),At,null,[[0,14]])}function Wt(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(E,Kt);case 2:case"end":return e.stop()}}),Et)}function Zt(e){return Ut.apply(this,arguments)}function Ut(){return(Ut=Object(_t.a)(ht.a.mark((function e(t){var n,r;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.colorId,e.next=3,yt.post("/db/lists/",{name:n,colorId:r}).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function qt(e){var t,n;return ht.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,M();case 3:return r.next=5,Object(vt.b)(Zt,{colorId:e.paylaod.colorId,name:e.paylaod.name});case 5:return t=r.sent,n=t.data,console.log("data",n),r.next=10,Object(vt.c)((a={name:n.name,colorId:n.colorId,id:n.id,tasks:[],color:{hex:e.paylaod.color.hex,name:e.paylaod.color.name,id:e.paylaod.color.id}},{type:N,payload:a}));case 10:return r.next=12,R();case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),P();case 17:case"end":return r.stop()}var a}),Nt,null,[[0,14]])}function Gt(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(B,qt);case 2:case"end":return e.stop()}}),Bt)}function Jt(e){return zt.apply(this,arguments)}function zt(){return(zt=Object(_t.a)(ht.a.mark((function e(t){var n,r;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.listId,e.next=3,yt.patch("/db/lists/"+r,{name:n}).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qt(e){var t,n;return ht.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,M();case 3:return r.next=5,Object(vt.b)(Jt,{title:e.payload.title,listId:e.payload.listId});case 5:return t=r.sent,n=t.data,console.log("data",n),r.next=10,Object(vt.c)((a={title:n.name,listId:n.id},{type:F,payload:a}));case 10:return r.next=12,R();case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(0),P();case 17:case"end":return r.stop()}var a}),Ft,null,[[0,14]])}function Xt(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(H,Qt);case 2:case"end":return e.stop()}}),Ht)}var $t=ht.a.mark(un),en=ht.a.mark(dn),tn=ht.a.mark(bn),nn=ht.a.mark(jn),rn=ht.a.mark(hn),an=ht.a.mark(vn),cn=ht.a.mark(yn),sn=ht.a.mark(gn);function on(e){return ln.apply(this,arguments)}function ln(){return(ln=Object(_t.a)(ht.a.mark((function e(t){var n,r,a;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.text,r=t.completed,a=t.listId,e.next=3,yt.post("/db/tasks",{listId:a,text:n,completed:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function un(e){var t,n;return ht.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(vt.b)(on,{listId:e.payload.listId,text:e.payload.text,completed:e.payload.completed});case 3:return t=r.sent,n=t.data,r.next=7,Object(vt.c)({type:He,payload:n});case 7:console.log("new TASKKK^--",n),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log("task error",r.t0);case 13:case"end":return r.stop()}}),$t,null,[[0,10]])}function dn(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(Me,un);case 2:case"end":return e.stop()}}),en)}function pn(e){return fn.apply(this,arguments)}function fn(){return(fn=Object(_t.a)(ht.a.mark((function e(t){var n;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,yt.delete("/db/tasks/"+n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bn(e){return ht.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(vt.b)(pn,{id:e.payload.id});case 3:return t.next=5,Object(vt.c)((n=e.payload,{type:Re,payload:n}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("remove error",t.t0);case 10:case"end":return t.stop()}var n}),tn,null,[[0,7]])}function jn(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(Pe,bn);case 2:case"end":return e.stop()}}),nn)}function On(e){return mn.apply(this,arguments)}function mn(){return(mn=Object(_t.a)(ht.a.mark((function e(t){var n,r;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.completed,r=t.id,e.next=3,yt.patch("/db/tasks/"+r,{completed:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hn(e){return ht.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(vt.b)(On,{id:e.payload.id,listId:e.payload.listId,completed:e.payload.completed});case 3:return t.next=5,Object(vt.c)((n=e.payload,{type:De,payload:n}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("set completed error",t.t0);case 10:case"end":return t.stop()}var n}),rn,null,[[0,7]])}function vn(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(Ve,hn);case 2:case"end":return e.stop()}}),an)}function _n(e){return xn.apply(this,arguments)}function xn(){return(xn=Object(_t.a)(ht.a.mark((function e(t){var n,r;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.text,r=t.id,e.next=3,yt.patch("/db/tasks/"+r,{text:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yn(e){return ht.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(vt.b)(_n,{id:e.payload.id,text:e.payload.text});case 3:return t.next=5,Object(vt.c)((n=e.payload,{type:Ye,payload:n}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("set completed error",t.t0);case 10:case"end":return t.stop()}var n}),cn,null,[[0,7]])}function gn(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.d)(Ke,yn);case 2:case"end":return e.stop()}}),sn)}var kn=ht.a.mark(Cn);function Cn(){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.a)([Dt(),Wt(),St(),Gt(),Xt(),dn(),jn(),vn(),gn()]);case 2:case"end":return e.stop()}}),kn)}var In=Object(pt.a)(),wn=[In],Sn=Object(dt.e)(Ot,Object(dt.d)(dt.a.apply(void 0,wn)));In.run(Cn);var Ln=n(22);o.a.render(Object(r.jsx)(v.a,{store:Sn,children:Object(r.jsx)(Ln.a,{children:Object(r.jsx)(lt,{})})}),document.getElementById("root")),ut()},20:function(e,t,n){e.exports={Content:"ListContent_Content__3IE0D",listTitle:"ListContent_listTitle__r6279",EditSvg:"ListContent_EditSvg__3zr6Z",tasksContainer:"ListContent_tasksContainer__2cdRG",IfArrrayIsEmpltyAlert:"ListContent_IfArrrayIsEmpltyAlert__w6Hhe"}},21:function(e,t,n){e.exports={modal:"AddListModal_modal__1GWcI",closeSvg:"AddListModal_closeSvg__cTN8O",input:"AddListModal_input__3Q8F9",badgesContainer:"AddListModal_badgesContainer__11KW6",selectedBadge:"AddListModal_selectedBadge__3rrFW",badge:"AddListModal_badge__1UFWZ",btn:"AddListModal_btn__tuxPJ"}},24:function(e,t,n){e.exports={taskItem:"Task_taskItem__3gW94",closeSvg:"Task_closeSvg__3NoGL",task:"Task_task__1JXpS",doneBlock:"Task_doneBlock__1UqHk",checked:"Task_checked__1j5GV",done:"Task_done__3Onnh"}},25:function(e,t,n){e.exports={listItem:"LIstItem_listItem__2fSqV",listItemRemoveSvg:"LIstItem_listItemRemoveSvg__2YxMo",listItemText:"LIstItem_listItemText__USFJz",activeItem:"LIstItem_activeItem__hBE04",IfArrrayIsEmpltyAlert:"LIstItem_IfArrrayIsEmpltyAlert__23rSq"}},26:function(e,t,n){e.exports={AddTaskForm:"AddTaskForm_AddTaskForm__3fuV6",input:"AddTaskForm_input__1A9fO",btns:"AddTaskForm_btns__2Unwb",addTaskBtn:"AddTaskForm_addTaskBtn__rn1MI",CancelTaskAddingBtn:"AddTaskForm_CancelTaskAddingBtn__3AubX"}},29:function(e,t,n){e.exports={AllTasks:"List_AllTasks__31-8f",AllTasksIcon:"List_AllTasksIcon__23TFE",AllTasksTitle:"List_AllTasksTitle__3l1NX",lists:"List_lists__N8qQ8"}},33:function(e,t,n){e.exports={addListHint:"AddListHintBtn_addListHint__UIVz6",addListHintText:"AddListHintBtn_addListHintText__2oiYs",addListHintIcon:"AddListHintBtn_addListHintIcon__qt2YI"}},34:function(e,t,n){e.exports={AddTaskHint:"AddTask_AddTaskHint__1rVku",AddTaskHintBtn:"AddTask_AddTaskHintBtn__1MJNx",AddSvg:"AddTask_AddSvg__qcCBB"}},39:function(e,t,n){e.exports={dark:"Badge_dark__2qW-B","react-toggle-track-check":"Badge_react-toggle-track-check__2P0C8","react-toggle-track-x":"Badge_react-toggle-track-x__2wF7K",badge:"Badge_badge__2Msff",grey:"Badge_grey__1saSz",lime:"Badge_lime__3ft7Z",purple:"Badge_purple__17Gkh",black:"Badge_black__3VVEK",red:"Badge_red__25suA",green:"Badge_green__efIq-",blue:"Badge_blue__r01Oc",pink:"Badge_pink__1ZuzL"}},40:function(e,t,n){e.exports={ListSide:"ListSide_ListSide__2-Ubv",ListsContainer:"ListSide_ListsContainer__1WlFG"}},43:function(e,t,n){e.exports={App:"App_App__2hClH",content:"App_content__Wju8W"}},54:function(e,t,n){e.exports={DarkMode:"DarkToggle_DarkMode__cy8U0"}},57:function(e,t,n){e.exports={dark:"ContentSide_dark__3_Byw","react-toggle-track-check":"ContentSide_react-toggle-track-check__1WTpS","react-toggle-track-x":"ContentSide_react-toggle-track-x__2-mRL",contentSide:"ContentSide_contentSide__1apaW"}},81:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.9658eb16.chunk.js.map