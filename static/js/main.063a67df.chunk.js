(this["webpackJsonpmain-dz"]=this["webpackJsonpmain-dz"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__2n4w5",listItem:"ContactList_listItem__1oxy2",button:"ContactList_button__3pN51",name:"ContactList_name__3GMTR",number:"ContactList_number__gvnwF"}},11:function(t,e,n){t.exports={box:"App_box__2llYb",title:"App_title__2tIO1",preloader:"App_preloader__3v7SJ"}},19:function(t,e,n){t.exports={transparent:"FormContact_transparent__1QuXK",formInner:"FormContact_formInner__1cRPu",buttom:"FormContact_buttom__2We0E"}},32:function(t,e,n){t.exports={lable:"ContactsFilter_lable__2Imt3"}},38:function(t,e,n){},39:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(12),o=n.n(c),u=(n(38),n(39),n(4)),s=n(14),i=n(15),b=n(18),l=n(17),f=n(67),j=n(19),d=n.n(j),m=n(6),p=n(7),O=n.n(p),h=n(20),v=n(2),x=n(9),C=n.n(x);C.a.defaults.baseURL=" http://localhost:3000";var _=Object(v.b)("contact/addContactRequest"),g=Object(v.b)("contact/add\u0421ontactSuccess"),y=Object(v.b)("contact/aadContactError"),F=Object(v.b)("contact/deleteContactRequest"),N=Object(v.b)("contact/deleteContactSuccess"),w=Object(v.b)("contact/deleteContactError"),k=Object(v.b)("contact/fetchContactRequest"),A=Object(v.b)("contact/fetch\u0421ontactSuccess"),S=Object(v.b)("contact/fetchContactError"),I=Object(v.b)("filterContact"),L=n(13),T=function(t){return t.contacts.items},z=function(t){return t.contacts.filter},R=function(t){return t.contacts.logger},q=Object(L.a)([T,z],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){var e=t.name;return e.toLowerCase().includes(n)}))})),E=n(1),P=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",id:""},t.addFormContact=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(u.a)({},r,a))},t.dominicToretto=function(){return t.props.contactsItems.find((function(e){var n=e.name,r=e.number;return n===t.state.name||r===t.state.number}))},t.SubmitForm=function(e){var n=t.state,r=n.name,a=n.number;if(e.preventDefault(),t.dominicToretto())return alert("the same name or phone number already exists");t.props.add\u0421ontact({name:r,number:a,id:Object(f.a)()}),t.setState({name:"",number:"",id:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(E.jsx)("form",{className:d.a.transparent,htmlFor:Object(f.a)(),onSubmit:this.SubmitForm,children:Object(E.jsxs)("div",{className:d.a.formInner,children:[Object(E.jsxs)("label",{children:["Name",Object(E.jsx)("input",{onChange:this.addFormContact,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(E.jsxs)("label",{children:["Number",Object(E.jsx)("input",{onChange:this.addFormContact,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(E.jsx)("button",{className:d.a.buttom,type:"submit",children:"aad contact"})]})})}}]),n}(r.Component);Function.defaultProps={contacts:[]};var J,M,B=Object(m.b)((function(t){return{contactsItems:T(t)}}),(function(t){return{"add\u0421ontact":function(e){return t(function(t){return function(){var e=Object(h.a)(O.a.mark((function e(n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(_()),e.prev=1,e.next=4,C.a.post("/users",t);case 4:r=e.sent,a=r.data,n(g(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(y(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(P),D=n(32),Z=n.n(D),G=Object(m.b)((function(t){return{filter:z(t)}}),(function(t){return{filterContactState:function(e){return t(I(e.currentTarget.value))}}}))((function(t){var e=t.filterContactState,n=t.filter;return Object(E.jsx)("input",{className:Z.a.lable,onChange:e,value:n,tupe:"text",name:"filter",title:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"})})),K=n(10),Q=n.n(K),U=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).componentDidMount=function(){t.props.fetchContact()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(E.jsx)("ul",{className:Q.a.list,children:this.props.filteredArrayContact.map((function(e){var n=e.name,r=e.number,a=e.id;return Object(E.jsxs)("li",{className:Q.a.listItem,children:[Object(E.jsxs)("p",{className:Q.a.name,children:[n,": ",Object(E.jsx)("span",{className:Q.a.number,children:r})]}),Object(E.jsx)("button",{className:Q.a.button,type:"button",onClick:function(){return t.props.deleteContact(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))})}}]),n}(r.Component),W=Object(m.b)((function(t){return{filteredArrayContact:q(t)}}),(function(t){return{deleteContact:function(e){return t(function(t){return function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(F()),e.prev=1,e.next=4,C.a.delete("/users/".concat(t));case 4:n(N(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(w(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))},fetchContact:function(){return t(function(){var t=Object(h.a)(O.a.mark((function t(e){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(k),t.prev=1,t.next=4,C.a.get("/users");case 4:n=t.sent,r=n.data,e(A(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(S(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(U),X=n(11),Y=n.n(X),$=Object(m.b)((function(t){return{logger:R(t)}}))((function(t){var e=t.logger;return Object(E.jsxs)("div",{className:Y.a.box,children:[Object(E.jsx)("h1",{className:Y.a.title,children:"Phonebook"}),Object(E.jsx)(B,{}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{className:Y.a.title,children:"contacts"}),Object(E.jsx)(G,{}),Object(E.jsx)(W,{}),e&&Object(E.jsx)("h1",{className:Y.a.preloader,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a..."})]})]})})),H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},V=n(16),tt=n(33),et=n.n(tt),nt=n(3),rt=Object(v.c)([],(J={},Object(u.a)(J,A,(function(t,e){return e.payload})),Object(u.a)(J,g,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(u.a)(J,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),J)),at=Object(v.c)(!1,(M={},Object(u.a)(M,_,(function(){return!0})),Object(u.a)(M,g,(function(){return!1})),Object(u.a)(M,y,(function(){return!1})),Object(u.a)(M,F,(function(){return!0})),Object(u.a)(M,N,(function(){return!1})),Object(u.a)(M,w,(function(){return!1})),Object(u.a)(M,k,(function(){return!0})),Object(u.a)(M,A,(function(){return!1})),Object(u.a)(M,S,(function(){return!1})),M)),ct=Object(v.c)("",Object(u.a)({},I,(function(t,e){return e.payload}))),ot=Object(nt.b)({items:rt,filter:ct,logger:at}),ut=n(8),st=[].concat(Object(V.a)(Object(v.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}})),[et.a]),it=Object(v.a)({reducer:{contacts:ot},middleware:st,devTools:!1});o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(m.a,{store:it,children:Object(E.jsx)($,{})})}),document.getElementById("root")),H()}},[[65,1,2]]]);
//# sourceMappingURL=main.063a67df.chunk.js.map