(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5497:function(e,t,n){e.exports=n(5749)},5749:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(7),c=n(0),o=n.n(c),u=n(25),l=n.n(u),s=n(23),d=n(19),f={posts:[]},p=function(e){return{type:"MAIN_POST",payload:e}};var m=n(36),g=n(6),h=n(29),v=n.n(h),y=n(22),b=function(e){var t=e.label;return o.a.createElement("div",{style:{borderRadius:10,backgroundColor:"#EBEBEB",padding:5,paddingLeft:10,paddingRight:10,margin:5,display:"inline-block",fontSize:11}},t)},E=n(91),x=function(e){var t=e.onChange,n=e.label,a=e.style;return o.a.createElement("div",{style:a},o.a.createElement(g.c,{onChange:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,n){t(n)})}),n)},w=function(e){var t=e.tagList,n=e.selected,a=e.unSelected,r=v()({tagList:[],newTag:""}),i=r.state,u=r.setState;return Object(c.useEffect)(function(){u(function(e){return{tagList:Array.from(new Set([].concat(Object(E.a)(t),Object(E.a)(e.tagList))))}})},[t]),o.a.createElement("div",null,o.a.createElement(g.f,{placeholder:"input label",onChange:function(e){return u({newTag:e.target.value})},value:i.newTag,onKeyPress:function(e){"Enter"===e.key&&u(function(e){return{tagList:Array.from(new Set([e.newTag].concat(Object(E.a)(e.tagList)))),newTag:""}})},style:{padding:10}}),o.a.createElement("div",{style:{display:"flex"}},i.tagList.map(function(e){return o.a.createElement(x,{label:e,onChange:function(t){t?n(e):a&&a(e)},key:e})})))},k={title:"",text:"",tag:[],editLabel:!1},j=function(e){var t=e.onEdited,n=e.menus,a=e.initial,r=e.allTag,i=e.onClose,u=v()(k),l=u.state,s=u.setState;return Object(c.useEffect)(function(){if(console.log({initial:a}),a){var e=a.title,t=a.text,n=a.tag;s({title:e,text:t,tag:n})}},[a]),o.a.createElement("div",{style:{borderRadius:5,boxShadow:"0 0 4px gray",display:"grid",gridTemplateColumns:"1.6fr 0.2fr",gridTemplateRows:"auto auto auto auto auto",gridTemplateAreas:'"title star" "text text" "tag tag" "menu close" "option option"'}},o.a.createElement("div",{style:{gridArea:"title"}},o.a.createElement(g.f,{placeholder:"title",style:{width:"100%",padding:10},onChange:function(e){return s({title:e.target.value})},value:l.title})),o.a.createElement("div",{style:{gridArea:"star",display:"flex",justifyContent:"flex-end"}},o.a.createElement(g.e,null,o.a.createElement(y.h,null))),o.a.createElement("div",{style:{gridArea:"text"}},o.a.createElement(g.f,{placeholder:"input",multiline:!0,rows:2,rowsMax:30,style:{width:"97%",padding:10,paddingBottom:20,overflowY:"auto"},onChange:function(e){return s({text:e.target.value})},value:l.text})),o.a.createElement("div",{style:{gridArea:"tag"}},l.tag.map(function(e){return o.a.createElement(b,{label:e,key:e})})),o.a.createElement("div",{style:{gridArea:"menu",display:"flex"}},o.a.createElement(g.e,{style:{width:50,height:50},onClick:function(){return s(function(e){return{editLabel:!e.editLabel}})}},o.a.createElement(y.e,null)),n&&n()),o.a.createElement("div",{style:{gridArea:"close"}},o.a.createElement(g.b,{onClick:function(){(l.text.length>0||l.title.length>0)&&(t(l),s(k)),i()}},"close")),o.a.createElement("div",{style:{gridArea:"option",display:"flex"}},l.editLabel&&o.a.createElement(w,{tagList:r,selected:function(e){return s(function(t){return{tag:t.tag.concat(e)}})},unSelected:function(e){return s(function(t){return{tag:t.tag.filter(function(t){if(t!==e)return t})}})}})))},O=function(e){var t=e.onSubmit,n=e.allTag,a=Object(c.useState)(!1),r=Object(m.a)(a,2),i=r[0],u=r[1];return o.a.createElement("div",null,i?o.a.createElement(j,{onEdited:function(e){var n=e.text,a=e.title,r=e.tag;(n.length>0||a.length>0)&&t(a,n,r),u(!1)},initial:{title:"",text:"",tag:[]},allTag:n,onClose:function(){return u(!1)}}):o.a.createElement("div",{style:{display:"flex",borderRadius:5,boxShadow:"0 0 4px gray"},onClick:function(){return u(!0)}},o.a.createElement(g.j,{style:{padding:10}},"\u30e1\u30e2\u3092\u5165\u529b...")))};function C(e){var t=Object(c.useState)(!1),n=Object(m.a)(t,2),a=n[0],o=n[1],u=Object(c.useState)(!1),l=Object(m.a)(u,2),s=l[0],d=l[1];return{loading:a,fetch:function(){var t=Object(i.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o(!0),!n){t.next=7;break}return t.next=4,e(n);case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,e(void 0);case 9:t.t0=t.sent;case 10:return(a=t.t0)||d(!0),o(!1),t.abrupt("return",a);case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),error:s}}var S=n(30),T=n(31),A=n.n(T),M=n(88),I=n(37),L=n(208),R=function e(){var t=this;Object(M.a)(this,e),this.httpLink=void 0,this.query=function(){var e=Object(i.a)(r.a.mark(function e(n){var a,i,c,o=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:{},i={query:n,variables:a},e.prev=2,e.next=5,Object(I.d)(Object(I.b)(t.httpLink,i));case 5:return c=e.sent,e.abrupt("return",c.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),this.httpLink=new L.a({uri:"https://echosome.tk:1333/query"})};function W(){var e=Object(S.a)(['\n        mutation createMemo {\n          createMemo(\n            input: {\n              token: "','"\n              title: "','"\n              text: "','"\n              tag:',"\n            }\n          ) {\n            time\n            code\n          }\n        }\n      "]);return W=function(){return e},e}var N=new R;function _(){return(_=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t.tag)),e.next=3,N.query(A()(W(),t.token,t.title,t.text,JSON.stringify(t.tag))).catch();case 3:if(!(n=e.sent).createMemo){e.next=7;break}return a=n.createMemo,e.abrupt("return",{time:a.time,code:a.code});case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var q=function(e){return _.apply(this,arguments)},U=n(203),D=n.n(U),G=Object(s.b)(function(e){return Object(d.a)({},e.main,e.user)})(function(e){var t=e.dispatch,n=e.posts,a=e.session,c=C(q),u=c.loading,l=c.fetch,s=(c.error,n.flatMap(function(e){return e.tag.length>0?e.tag:[]})),d=function(){var e=Object(i.a)(r.a.mark(function e(n,i,c){var o,s,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=9;break}if(o=D()(Date.now()).utc().unix().toString(),s=Math.random().toString(),!a){e.next=8;break}return e.next=6,l({title:n,text:i,token:a,tag:c});case 6:(d=e.sent)&&(o=d.time,s=d.code);case 8:t(p({title:n,text:i,tag:c,time:o,code:s}));case 9:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}();return o.a.createElement(O,{onSubmit:d,allTag:s})}),J=n(204),B=n.n(J),H=function(e){var t,n=e.card,a=e.onRemove,r=e.modal,i=v()({open:!1,modal:!1}),c=i.state,u=i.setState,l=n.title,s=n.text,d=n.tag;return o.a.createElement("div",null,r(c.modal,function(){return u({modal:!1})},n),o.a.createElement("div",{style:{borderRadius:5,boxShadow:"0 0 1px gray",padding:5,paddingLeft:20},onMouseEnter:function(){return u({open:!0})},onMouseLeave:function(){return u({open:!1})}},o.a.createElement("div",{style:{width:"100%",display:"grid",gridTemplateColumns:"1.7fr 0.3fr",gridTemplateRows:"auto auto auto auto",gridTemplateAreas:'"title star" "text text" "tag tag" "menu menu"'}},o.a.createElement("div",{style:{gridArea:"title",overflow:"hidden"}},o.a.createElement("div",{style:{fontWeight:"bold",marginTop:10}},l)),o.a.createElement("div",{style:{gridArea:"text"},onClick:function(){u({modal:!0})}},o.a.createElement("div",{style:{wordWrap:"break-word"}},s)),o.a.createElement("div",{style:{gridArea:"star",display:"flex",justifyContent:"flex-end",height:50}},c.open&&o.a.createElement(g.e,{style:{width:50}},o.a.createElement(y.h,null))),d.length>0&&o.a.createElement("div",{style:{gridArea:"tag",paddingTop:10}},d.filter(function(e){return""!==e}).map(function(e){return o.a.createElement(b,{label:e,key:e})})),o.a.createElement("div",{style:{gridArea:"menu",display:"flex",justifyContent:"flex-end",marginTop:"auto",height:50}},o.a.createElement("div",{style:{display:(t=c.open,t?"":"none")}},o.a.createElement(g.e,{style:{width:50},onClick:function(){return a()}},o.a.createElement(y.b,null)),o.a.createElement(g.e,{style:{width:50}},o.a.createElement(y.e,null)),o.a.createElement(g.e,{style:{width:50}},o.a.createElement(y.f,null)))))))},V=function(e){var t=e.open,n=e.initial,a=e.onEdited,r=e.allTag,i=e.menus,c=e.onClose;return o.a.createElement(g.g,{open:t},o.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{style:{width:600,maxWidth:"90vw",backgroundColor:"white"}},o.a.createElement(j,{onEdited:a,initial:n,allTag:r,menus:i,onClose:c}))))},P=function(e){var t=e.posts,n=e.searchWord,a=e.viewTag,r=e.onRemove,i=e.onChange,c=t.flatMap(function(e){return e.tag.length>0?e.tag:[]});return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(B.a,{options:{fitWidth:!0,columnWidth:350}},t.map(function(e,t){if(function(e){return n.length>0&&(e.text.includes(n)||e.title.includes(n))?(console.log(1,n),!0):a&&e.tag.includes(a)?(console.log(2),!0):!(n.length>0||a)&&(console.log(3),!0)}(e))return o.a.createElement("div",{style:{width:350,maxWidth:"90vw"},key:t},o.a.createElement("div",{style:{padding:10}},o.a.createElement(H,{card:e,onRemove:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return r(e.time)}),modal:function(e,t,n){var a=n.title,u=n.text,l=n.time,s=n.tag,d=n.code;return o.a.createElement(V,{open:e,onEdited:function(e){var n=e.title,a=e.text,r=e.tag;i({code:d,time:l,title:n,text:a,tag:r}),t()},onClose:function(){return t()},initial:{title:a,text:u,tag:s},allTag:c,menus:function(){return o.a.createElement("div",null,o.a.createElement(g.e,{onClick:function(){r(n.time),t()}},o.a.createElement(y.b,null)))}})}})))})))};function Y(){var e=Object(S.a)(['\n        mutation EditMemo {\n          editMemo(\n            input: {\n              memoCode: "','"\n              token: "','"\n              title: "','"\n              text: "','"\n              tag: ',"\n            }\n          ) {\n            time\n          }\n        }\n      "]);return Y=function(){return e},e}var z=new R;function K(){return(K=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t.tag)),e.next=3,z.query(A()(Y(),t.memoCode,t.token,t.title,t.text,JSON.stringify(t.tag))).catch();case 3:if(!(n=e.sent).editMemo){e.next=7;break}return a=n.editMemo,e.abrupt("return",{time:a.time});case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var X,$=function(e){return K.apply(this,arguments)},F=Object(s.b)(function(e){return Object(d.a)({},e.main,e.ui,e.user)})(function(e){var t=e.posts,n=e.dispatch,a=e.viewTag,c=e.searchWord,u=e.session,l=C($),s=l.loading,f=l.fetch,p=function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=4;break}if(s){e.next=4;break}return e.next=4,f(Object(d.a)({memoCode:t.code,token:u},t));case 4:n({type:"MAIN_CHANGE",payload:{post:t,newTime:void 0}});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(P,{posts:t,searchWord:c,viewTag:a,onRemove:function(e){return n({type:"MAIN_REMOVE",payload:e})},onChange:p})}),Q=function(e){var t=e.onSubmit,n=v()({input:""}),a=n.state,r=n.setState;return o.a.createElement("div",{style:{marginLeft:20,borderRadius:5,backgroundColor:"rgba(255,255,255,0.25)",marginRight:10,width:"100%",display:"flex"}},o.a.createElement("div",{style:{padding:10,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(y.g,null)),o.a.createElement(g.f,{placeholder:"Search\u2026",style:{color:"inherit",width:"100%",padding:5,paddingLeft:10},onChange:function(e){r({input:e.target.value}),t(e.target.value)},value:a.input}),a.input.length>0&&o.a.createElement(g.e,{onClick:function(){r({input:""}),t("")}},o.a.createElement(y.a,null)))},Z=function(e){var t=e.drawer,n=e.enterSearch,a=e.account,r=v()({open:!1}),i=r.state,c=r.setState;return o.a.createElement("div",null,o.a.createElement(g.a,{position:"static"},o.a.createElement(g.i,null,o.a.createElement(g.e,{color:"inherit",onClick:function(){return c({open:!0})}},o.a.createElement(y.d,null)),o.a.createElement(g.j,{variant:"h6",color:"inherit"},"keep"),o.a.createElement(Q,{onSubmit:n}),o.a.createElement("div",null,a()))),o.a.createElement(g.d,{open:i.open,onClose:function(){return c({open:!1})}},t(function(){return c({open:!1})})))},ee=function(e){var t=e.label,n=e.onClick;return o.a.createElement("li",{style:{display:"flex",padding:10},onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return n(t)})},o.a.createElement(y.c,{style:{paddingRight:30,color:"gray"}}),t)},te=function(e){var t=e.labels,n=e.onClick,a=e.resetAll;return o.a.createElement("div",{style:{width:270}},o.a.createElement(g.j,{style:{padding:10}},"label"),o.a.createElement(ee,{label:"all",onClick:function(){return a()}}),t.filter(function(e){return""!==e}).map(function(e,t){return o.a.createElement(ee,{label:e,onClick:n,key:t})}))},ne={viewTag:"",searchWord:""};!function(e){e.SET_VIEWTAG="UI_SET_VIEWTAG",e.SET_SEARCH="UI_SET_SEARCH"}(X||(X={}));var ae=function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:X.SET_VIEWTAG,payload:t});case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:X.SET_SEARCH,payload:t});case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();var ie=n(5752),ce=Object(ie.a)(Object(s.b)(function(e){return Object(d.a)({},e.main,e.user)})(function(e){var t=e.children,n=e.posts,a=e.dispatch,r=e.history,i=e.name,c=Array.from(new Set(n.flatMap(function(e){return e.tag.length>0?e.tag:[]})));return console.log({allTag:c}),o.a.createElement("div",{style:{minHeight:"95vh"}},o.a.createElement(Z,{enterSearch:function(e){re(e,a)},drawer:function(e){return o.a.createElement(te,{labels:c,onClick:function(t){ae(t,a),e()},resetAll:function(){ae(void 0,a),e()}})},account:function(){return i?o.a.createElement(g.b,{color:"inherit",onClick:function(){console.log({history:r}),r.push("login")}},i):o.a.createElement(g.b,{color:"inherit",onClick:function(){console.log({history:r}),r.push("login")}},"login")}}),t)})),oe=function(){return o.a.createElement(ce,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{style:{padding:30,width:600,maxWidth:"90vw"}},o.a.createElement(G,null))),o.a.createElement(F,null))};function ue(){var e=Object(S.a)(['\n        query getAllMemo {\n          getAllMemo(\n            input: { token: "','" }\n          ) {\n            memos {\n              owner\n              code\n              title\n              time\n              text\n              tag\n            }\n          }\n        }\n      ']);return ue=function(){return e},e}var le=new R;function se(){return(se=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.query(A()(ue(),t.token)).catch();case 2:if(!(n=e.sent).getAllMemo){e.next=6;break}return a=n.getAllMemo,e.abrupt("return",a.memos?a.memos.map(function(e){return e.tag=e.tag.split(","),e}):void 0);case 6:return e.abrupt("return",void 0);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var de=function(e){return se.apply(this,arguments)},fe=Object(s.b)(function(e){return Object(d.a)({},e.main,e.user)})(function(e){var t=e.posts,n=e.session,a=(e.code,e.dispatch),u=C(de),l=u.loading,s=u.fetch;Object(c.useEffect)(function(){f()},[]);var f=function(){var e=Object(i.a)(r.a.mark(function e(){var i,c,o,u,f,m,g;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=32;break}if(l){e.next=32;break}return e.next=4,s({token:n}).catch();case 4:if(!(i=e.sent)){e.next=32;break}c=!0,o=!1,u=void 0,e.prev=9,f=r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=g.value,a=i.find(function(e){return t.code===e.code})){e.next=7;break}return e.next=5,q(Object(d.a)({token:n},t));case 5:e.next=10;break;case 7:if(!(Number(t.time)>Number(a.time))){e.next=10;break}return e.next=10,q(Object(d.a)({token:n},t));case 10:case"end":return e.stop()}},e,this)}),m=t[Symbol.iterator]();case 12:if(c=(g=m.next()).done){e.next=17;break}return e.delegateYield(f(),"t0",14);case 14:c=!0,e.next=12;break;case 17:e.next=23;break;case 19:e.prev=19,e.t1=e.catch(9),o=!0,u=e.t1;case 23:e.prev=23,e.prev=24,c||null==m.return||m.return();case 26:if(e.prev=26,!o){e.next=29;break}throw u;case 29:return e.finish(26);case 30:return e.finish(23);case 31:i.forEach(function(e){t.find(function(t){return t.code===e.code})||a(p(e))});case 32:case"end":return e.stop()}},e,this,[[9,19,23,31],[24,,26,30]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(oe,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(5754),me=n(5753),ge=n(53),he=n(207),ve=n.n(he),ye={},be=function(e,t,n){return{type:"UI_LOGIN",payload:{name:e,session:t,code:n}}};var Ee=n(45),xe=n.n(Ee);xe.a.config({driver:xe.a.INDEXEDDB});var we={},ke=function(){return function(e){var t=e.getState;return function(e){return function(){var n=Object(i.a)(r.a.mark(function n(a){var i,c,o,u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:i=e(a),c=Object.keys(t()),o=0;case 3:if(!(o<c.length)){n.next=12;break}return u=c[o],console.log({key:u}),we[u]=!0,n.next=9,xe.a.setItem(u,JSON.stringify(t()[u]));case 9:o++,n.next=3;break;case 12:return n.next=14,xe.a.setItem("root",JSON.stringify(we));case 14:return console.log({returnValue:i},t()),n.abrupt("return",i);case 16:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}}},je=Object(ge.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_POST":return t.payload.tag=t.payload.tag.filter(function(e){return""!==e}),Object(d.a)({},e,{posts:e.posts.concat(t.payload)});case"MAIN_REMOVE":return Object(d.a)({},e,{posts:e.posts.filter(function(e){if(e.time!==t.payload)return e})});case"MAIN_CHANGE":var n=e.posts.map(function(e){if(e.time===t.payload.post.time){var n=t.payload.post;return t.payload.newTime&&(n.time=t.payload.newTime),n.tag=n.tag.filter(function(e){return""!==e}),n}return e});return Object(d.a)({},e,{posts:n});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.SET_VIEWTAG:return Object(d.a)({},e,{viewTag:t.payload});case X.SET_SEARCH:return Object(d.a)({},e,{searchWord:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UI_LOGIN":return Object(d.a)({},e,t.payload);default:return e}}});var Oe=function(e){var t=e.type,n=e.onSubmit,a=Object(c.useState)(""),r=Object(m.a)(a,2),i=r[0],u=r[1],l=Object(c.useState)(""),s=Object(m.a)(l,2),d=s[0],f=s[1];return o.a.createElement("div",{style:{borderRadius:5,boxShadow:"0 0 1px gray",display:"flex",justifyContent:"center",padding:30}},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",height:210,width:500}},o.a.createElement(g.j,null,t),o.a.createElement(g.h,{variant:"outlined",placeholder:"name",label:"name",onChange:function(e){return u(e.target.value)},value:i}),o.a.createElement(g.h,{variant:"outlined",placeholder:"password",label:"password",onChange:function(e){return f(e.target.value)},value:d}),o.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},o.a.createElement(g.b,{onClick:function(){i&&d&&(n(i,d),u(""),f(""))}},t))))};function Ce(){var e=Object(S.a)(['\n          query getUser {\n            getUser(input: { name: "','", password: "','" }) {\n              token\n              code\n              name\n            }\n          }\n        ']);return Ce=function(){return e},e}var Se=function e(){var t=this;Object(M.a)(this,e),this.graphqlClient=new R,this.getMe=function(){var e=Object(i.a)(r.a.mark(function e(n){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.graphqlClient.query(A()(Ce(),n.name,n.password));case 3:a=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:if(!a.getUser){e.next=12;break}return i=a.getUser,e.abrupt("return",{token:i.token,code:i.code,name:i.name});case 12:return e.abrupt("return",void 0);case 13:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},Te=Object(ie.a)(Object(s.b)(function(){return{}})(function(e){var t=e.history,n=e.dispatch,a=C((new Se).getMe),c=a.loading,u=a.fetch,l=a.error;return o.a.createElement("div",null,l&&o.a.createElement("p",null,"error"),o.a.createElement(Oe,{type:"login",onSubmit:function(){var e=Object(i.a)(r.a.mark(function e(a,i){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=5;break}return e.next=3,u({name:a,password:i});case 3:(o=e.sent)&&(console.log("success",{res:o}),n(be(o.name,o.token,o.code)),t.push("/"));case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}))})),Ae=Object(ie.a)(function(e){var t=e.history;return o.a.createElement("div",{style:{height:"95vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("div",{style:{maxWidth:"90%"}},o.a.createElement(Te,null),o.a.createElement(g.b,{onClick:function(){return t.push("/signup")}},"sign up")))}),Me=n(5747);function Ie(){var e=Object(S.a)(['\n        mutation createUser {\n          createUser(input: { name: "','", password: "','" }) {\n            code\n            token\n            name\n          }\n        }\n      ']);return Ie=function(){return e},e}var Le=new R,Re=function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le.query(A()(Ie(),t.name,t.password));case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:if(!n||!n.createUser){e.next=12;break}return a=n.createUser,e.abrupt("return",{token:a.token,code:a.code,name:a.name});case 12:return e.abrupt("return",void 0);case 13:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),We=Object(Me.a)(Object(s.b)(function(){return{}})(function(e){var t=e.dispatch,n=e.history,a=C(Re),c=a.loading,u=a.fetch,l=a.error;return o.a.createElement("div",null,l&&o.a.createElement("p",null,"error"),o.a.createElement(Oe,{type:"signup",onSubmit:function(){var e=Object(i.a)(r.a.mark(function e(a,i){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=5;break}return e.next=3,u({name:a,password:i});case 3:(o=e.sent)&&(console.log("success",{res:o}),t(be(o.name,o.token,o.code)),n.push("/"));case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}))})),Ne=Object(ie.a)(function(e){var t=e.history;return o.a.createElement("div",{style:{height:"95vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("div",{style:{maxWidth:"90%"}},o.a.createElement(We,null),o.a.createElement(g.b,{onClick:function(){return t.push("/login")}},"login")))}),_e={store:Object(ge.d)(je,Object(ge.a)(ve.a,ke()))}.store;function qe(){return(qe=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.a.render(o.a.createElement(s.a,{store:_e},o.a.createElement(pe.a,null,o.a.createElement("div",null,o.a.createElement(me.a,{exact:!0,path:"/",component:fe}),o.a.createElement(me.a,{path:"/login",component:Ae}),o.a.createElement(me.a,{path:"/signup",component:Ne})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}!function(){qe.apply(this,arguments)}()}},[[5497,2,1]]]);
//# sourceMappingURL=main.48a22cab.chunk.js.map