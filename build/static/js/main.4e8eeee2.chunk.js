(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[1],{170:function(e,n,t){var i={"./ion-action-sheet.entry.js":[302,5],"./ion-alert.entry.js":[303,6],"./ion-app_8.entry.js":[304,7],"./ion-avatar_3.entry.js":[305,17],"./ion-back-button.entry.js":[306,18],"./ion-backdrop.entry.js":[307,43],"./ion-button_2.entry.js":[308,19],"./ion-card_5.entry.js":[309,20],"./ion-checkbox.entry.js":[310,21],"./ion-chip.entry.js":[311,22],"./ion-col_3.entry.js":[312,44],"./ion-datetime_3.entry.js":[313,10],"./ion-fab_3.entry.js":[314,23],"./ion-img.entry.js":[315,45],"./ion-infinite-scroll_2.entry.js":[316,46],"./ion-input.entry.js":[317,24],"./ion-item-option_3.entry.js":[318,25],"./ion-item_8.entry.js":[319,26],"./ion-loading.entry.js":[320,27],"./ion-menu_3.entry.js":[321,28],"./ion-modal.entry.js":[322,8],"./ion-nav_2.entry.js":[323,14],"./ion-popover.entry.js":[324,9],"./ion-progress-bar.entry.js":[325,29],"./ion-radio_2.entry.js":[326,30],"./ion-range.entry.js":[327,31],"./ion-refresher_2.entry.js":[328,11],"./ion-reorder_2.entry.js":[329,16],"./ion-ripple-effect.entry.js":[330,47],"./ion-route_4.entry.js":[331,32],"./ion-searchbar.entry.js":[332,33],"./ion-segment_2.entry.js":[333,34],"./ion-select_3.entry.js":[334,35],"./ion-slide_2.entry.js":[335,48],"./ion-spinner.entry.js":[336,13],"./ion-split-pane.entry.js":[337,49],"./ion-tab-bar_2.entry.js":[338,36],"./ion-tab_2.entry.js":[339,15],"./ion-text.entry.js":[340,37],"./ion-textarea.entry.js":[341,38],"./ion-toast.entry.js":[342,39],"./ion-toggle.entry.js":[343,12],"./ion-virtual-scroll.entry.js":[344,50]};function r(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(i)},r.id=170,e.exports=r},172:function(e,n,t){var i={"./ion-icon.entry.js":[345,57]};function r(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(i)},r.id=172,e.exports=r},180:function(e,n,t){},199:function(e,n){},201:function(e,n){},212:function(e,n){},214:function(e,n){},239:function(e,n){},241:function(e,n){},242:function(e,n){},247:function(e,n){},249:function(e,n){},268:function(e,n){},280:function(e,n){},283:function(e,n){},286:function(e,n,t){},287:function(e,n,t){},288:function(e,n,t){},299:function(e,n,t){},300:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),o=t(46),c=t.n(o),s=t(8),a=t(3),l=t(72),j=t(11),u=t.n(j),d=t(19),h=t(33),b=(t(180),t(29)),p=(t(100),t(77),t(28));function O(e){return{type:"SET_USER",payload:e}}var f=t(39),x=t.n(f),v=t(2),m="https://image.flaticon.com/icons/png/512/1177/1177568.png",g=t(111);b.a.apps.length?b.a.app():b.a.initializeApp({apiKey:"AIzaSyBOkpGmYEhzvH2WEVtc0ZN5A15iTDSjPMg",authDomain:"pencari-mutual.firebaseapp.com",projectId:"pencari-mutual",storageBucket:"pencari-mutual.appspot.com",messagingSenderId:"143095555281",appId:"1:143095555281:web:6104f111e09270ea53d1f0",measurementId:"G-CF723V5FEL"});var y=b.a.auth(),w=b.a.firestore(),I=function(){var e=Object(i.useState)(),n=Object(h.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(),c=Object(h.a)(o,2),l=c[0],j=c[1],f=Object(i.useState)(),I=Object(h.a)(f,2),k=I[0],C=I[1],_=Object(p.b)(),S=Object(s.f)();function P(){return(P=Object(d.a)(u.a.mark((function e(){var n,i,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t){e.next=5;break}x.a.fire("email cannot empty"),e.next=22;break;case 5:if(n.test(String(t).toLowerCase())){e.next=9;break}x.a.fire("invalid email format"),e.next=22;break;case 9:if(l){e.next=13;break}x.a.fire("password required"),e.next=22;break;case 13:if(l===k){e.next=17;break}x.a.fire("repeat password not same"),e.next=22;break;case 17:return i=w.collection("users").doc(t),e.next=20,i.get();case 20:e.sent.exists?x.a.fire("Email already registered"):(r=w.collection("users"),l=g.hashSync(l,10),r.doc(t).set({email:t,password:l,profilePic:m}),x.a.fire("Congratulation!","Sign up succeed","success"),S.push("/login"));case 22:document.getElementById("input-email").value="",document.getElementById("input-password").value="",document.getElementById("input-repeat-password").value="";case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsx)(a.j,{children:Object(v.jsx)(a.c,{children:Object(v.jsxs)("section",{className:"register-section",children:[Object(v.jsx)(a.h,{class:"content",lines:"full",children:Object(v.jsx)(a.p,{class:"title",children:"Create Account,"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.i,{class:"sub-title",children:" Sign up to get started!"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{onIonInput:function(e){return r(e.target.value)},id:"input-email",type:"email",placeholder:"Input email address"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{onIonInput:function(e){return j(e.target.value)},id:"input-password",type:"password",placeholder:"Input password"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{onIonInput:function(e){return C(e.target.value)},id:"input-repeat-password",type:"password",placeholder:"Repeat password"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{className:"button-register",onClick:function(){return P.apply(this,arguments)},class:"button",children:"Sign Up"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{className:"button-register",color:"tertiary",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;y.signInWithPopup(e).then((function(e){var n;if(null===(n=e.additionalUserInfo)||void 0===n?void 0:n.isNewUser){var t,i,r,o,c,s,a,l=w.collection("users"),j=g.hashSync(null===(t=e.user)||void 0===t?void 0:t.uid,10),u=(null===(i=e.user)||void 0===i?void 0:i.email)||void 0;l.doc(u).set({email:u,password:j,profilePic:null===(r=e.user)||void 0===r?void 0:r.photoURL,name:null===(o=e.user)||void 0===o?void 0:o.displayName}),_(O({name:null===(c=e.user)||void 0===c?void 0:c.displayName,email:null===(s=e.user)||void 0===s?void 0:s.email,profilePic:null===(a=e.user)||void 0===a?void 0:a.photoURL})),S.push("/")}else{var d,h=(null===(d=e.user)||void 0===d?void 0:d.email)||void 0;w.collection("users").doc(h).get().then((function(e){_(O(e.data())),S.push("/")}))}}))},children:"Connect With Google"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsxs)(a.i,{class:"to-login",children:["Already have account? ",Object(v.jsx)("a",{href:"/login",children:"Login Here"})]})})]})})})},k=(t(286),function(){var e=Object(p.c)((function(e){return e.user})),n=Object(p.b)(),t=Object(s.f)();return Object(v.jsx)(a.j,{children:Object(v.jsx)(a.c,{children:Object(v.jsxs)("section",{className:"profile-section",children:[Object(v.jsx)(a.f,{src:e.profilePic}),Object(v.jsxs)(a.i,{class:"label",children:["Name: ",e.name]})," ",Object(v.jsx)("br",{}),Object(v.jsxs)(a.i,{class:"label",children:["Email: ",e.email]})," ",Object(v.jsx)("br",{}),Object(v.jsxs)(a.i,{class:"label",children:["Birthdate: ",e.birthdate]}),Object(v.jsx)(a.b,{color:"tertiary",id:"logout-button",onClick:function(){t.push("/update")},children:"Update Profile"}),Object(v.jsx)(a.b,{color:"danger",id:"logout-button",onClick:function(){b.a.auth().signOut().then((function(){})).catch((function(e){return console.log(e)})),n(O(""))},children:"Logout"})]})})})}),C=(t(287),t(111)),_=b.a.auth(),S=b.a.firestore(),P=function(){var e=Object(i.useState)(),n=Object(h.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(),c=Object(h.a)(o,2),l=c[0],j=c[1],f=Object(p.b)(),m=Object(s.f)();function g(){return(g=Object(d.a)(u.a.mark((function e(){var n,i,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.collection("users").doc(t),e.next=3,n.get();case 3:(i=e.sent).exists?(r=i.data())&&(C.compareSync(l,r.password)?(f(O({email:r.email,name:r.name,birthdate:r.birthdate,profilePic:r.profilePic})),m.push("/CariJodoh")):x.a.fire("Invalid email/password")):x.a.fire("Invalid email/password"),document.getElementById("input-email").value="",document.getElementById("input-password").value="";case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsx)(a.j,{children:Object(v.jsx)(a.c,{children:Object(v.jsxs)("section",{className:"login-section",children:[Object(v.jsx)(a.h,{lines:"full",children:Object(v.jsx)(a.p,{class:"title",children:"Pencari Mutual"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.i,{class:"sub-title",children:" Sign in to continue!"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{onIonInput:function(e){return r(e.target.value)},id:"login-email",type:"email",placeholder:"Input email address"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{onIonInput:function(e){return j(e.target.value)},id:"login-password",type:"password",placeholder:"Input password"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{className:"button",onClick:function(){return g.apply(this,arguments)},class:"button",children:"Login"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{className:"button",color:"tertiary",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;_.signInWithPopup(e).then((function(e){var n;if(null===(n=e.additionalUserInfo)||void 0===n?void 0:n.isNewUser){var t,i,r,o,c,s,a,l=S.collection("users"),j=C.hashSync(null===(t=e.user)||void 0===t?void 0:t.uid,10),u=(null===(i=e.user)||void 0===i?void 0:i.email)||void 0;l.doc(u).set({email:u,password:j,profilePic:null===(r=e.user)||void 0===r?void 0:r.photoURL,name:null===(o=e.user)||void 0===o?void 0:o.displayName}),f(O({name:null===(c=e.user)||void 0===c?void 0:c.displayName,email:null===(s=e.user)||void 0===s?void 0:s.email,profilePic:null===(a=e.user)||void 0===a?void 0:a.photoURL})),m.push("/CariJodoh")}else{var d,h=(null===(d=e.user)||void 0===d?void 0:d.email)||void 0;S.collection("users").doc(h).get().then((function(e){f(O(e.data())),m.push("/CariJodoh")}))}}))},children:"Connect With Google"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsxs)(a.i,{class:"to-register",children:["Don't have an account? ",Object(v.jsx)("a",{href:"/register",children:"Register Here"})]})})]})})})},N=t(24),U=(t(288),b.a.auth(),b.a.firestore()),E=function(){var e=Object(p.c)((function(e){return e.user})),n=Object(i.useState)(e.name),t=Object(h.a)(n,2),r=t[0],o=t[1],c=Object(i.useState)(e.birthdate),l=Object(h.a)(c,2),j=l[0],b=l[1],f=Object(p.b)(),m=Object(s.f)();function g(){return(g=Object(d.a)(u.a.mark((function n(){var t,i,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return t=U.collection("users").doc(e.email),n.next=4,t.get();case 4:i=n.sent,(o=i.data())&&(o.name=r,o.birthdate=j,t.set(o),f(O(o)),x.a.fire("Congratulation!","Update succeed","success"),m.push("/Profile"));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(v.jsx)(a.j,{children:Object(v.jsx)(a.c,{children:Object(v.jsxs)("section",{className:"update-section",children:[Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.p,{class:"title-update",children:"Update Profile"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{value:e.name,onIonInput:function(e){return o(e.target.value)},id:"update-name",type:"email",placeholder:"Update your name"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.g,{value:e.birthdate,onIonInput:function(e){return b(e.target.value)},id:"update-birthdate",type:"date",placeholder:"Update your birthdate"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{onClick:function(){return g.apply(this,arguments)},class:"button",children:"Save The Update"})}),Object(v.jsx)(a.h,{lines:"none",children:Object(v.jsx)(a.b,{color:"danger",onClick:function(){m.push("/Profile")},class:"button",children:"Back To Profile"})})]})})})},L=function e(){var n=Object(p.c)((function(e){return e.user}));return Object(v.jsxs)(a.j,{children:[Object(v.jsx)(l.a,{children:Object(v.jsxs)(a.o,{children:[Object(v.jsxs)(a.l,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/profile",children:n?Object(v.jsx)(k,{}):Object(v.jsx)(s.a,{to:"/login"})}),Object(v.jsxs)(s.b,{exact:!0,path:"/update",children:[n?Object(v.jsx)(E,{}):Object(v.jsx)(s.a,{to:"/login"}),Object(v.jsx)(s.b,{exact:!0,path:"/CariJodoh",children:n?Object(v.jsx)(e,{}):Object(v.jsx)(s.a,{to:"/login"})})]})]}),Object(v.jsxs)(a.m,{slot:"bottom",children:[Object(v.jsxs)(a.n,{href:"/home",tab:"home",children:[Object(v.jsx)(a.e,{icon:N.i}),Object(v.jsx)(a.i,{children:"Login/Register"})]}),Object(v.jsxs)(a.n,{href:"/Cari_jodoh",tab:"Cari_Jodoh",children:[Object(v.jsx)(a.e,{icon:N.h}),Object(v.jsx)(a.i,{children:"Cari Jodoh"})]}),Object(v.jsxs)(a.n,{href:"/profile",tab:"Profile",children:[Object(v.jsx)(a.e,{icon:N.l}),Object(v.jsx)(a.i,{children:"Profil"})]})]})]})}),Object(v.jsx)(a.d,{children:Object(v.jsx)(a.q,{children:Object(v.jsx)(a.p,{children:"Cari Jodoh"})})}),Object(v.jsx)(a.c,{className:"ion-padding"})]})},B=(t(289),t(290),t(291),t(292),t(293),t(294),t(295),t(296),t(297),t(298),t(299),function(){var e=Object(p.c)((function(e){return e.user}));return Object(v.jsx)(a.a,{children:Object(v.jsx)(l.a,{children:Object(v.jsxs)(a.l,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/register",children:Object(v.jsx)(I,{})}),Object(v.jsx)(s.b,{exact:!0,path:"/login",children:Object(v.jsx)(P,{})}),Object(v.jsx)(s.b,{exact:!0,path:"/",children:e?Object(v.jsx)(k,{}):Object(v.jsx)(s.a,{to:"/login"})}),Object(v.jsx)(s.b,{exact:!0,path:"/CariJodoh",children:e?Object(v.jsx)(L,{}):Object(v.jsx)(s.a,{to:"/login"})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,362)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))},A=t(63),R=t(103),T=t(164),D={user:null};var F=Object(T.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0,t=n.type,i=n.payload;return"SET_USER"===t?Object(R.a)(Object(R.a)({},e),{},{user:i}):e})),W=F;c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(A.a,{children:Object(v.jsx)(p.a,{store:W,children:Object(v.jsx)(B,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),J()}},[[300,3,4]]]);
//# sourceMappingURL=main.4e8eeee2.chunk.js.map