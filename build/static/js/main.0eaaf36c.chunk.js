(this.webpackJsonpconf_frontend=this.webpackJsonpconf_frontend||[]).push([[0],{241:function(e,t,n){},402:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(54),c=n.n(s),a=(n(241),n(38)),o=n(11),i=n(435),l=n(436),u=n(13),d=n(20),j=n(26),f=n(440),b=n(10),h=n(2),p=function(e){var t=e.profile;return Object(h.jsxs)(i.a,{className:"m-3",children:[Object(h.jsx)(f.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(h.jsxs)(f.a.Text,{children:[t.username,Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"mb-2 text-muted",children:"".concat(t.fname," ").concat(t.lname)})]}),Object(h.jsx)(l.a,{children:Object(h.jsx)(b.LinkContainer,{to:"/profile/edit",children:Object(h.jsx)(f.a.Link,{className:"float-right text-white",children:Object(h.jsx)("i",{className:"fas fa-edit"})})})})]})},O=n(14),m=n.n(O),x=n(46),g=n(23),v="FOLLOW_SUCCESS",w="FOLLOW_ERROR",k="UNFOLLOW_SUCCESS",C=function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),o=r().firebase.auth.uid,(i=r().firebase.profile.following).push(e),t.next=8,a.collection("profile").doc(e).get();case 8:return l=t.sent,(u=l.data().followers).push(o),i=new Set(i),i=Object(x.a)(i),u=new Set(u),u=Object(x.a)(u),t.next=17,a.collection("profile").doc(o).update({following:i});case 17:return t.next=19,a.collection("profile").doc(e).update({followers:u});case 19:n({type:v}),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(1),console.log(t.t0),n({type:w,error:t.t0});case 26:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e,n,r){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),o=r().firebase.auth.uid,i=(i=r().firebase.profile.following).filter((function(t){return t!==e})),t.next=8,a.collection("profile").doc(e).get();case 8:return l=t.sent,u=(u=l.data().followers).filter((function(e){return e!==o})),i=new Set(i),i=Object(x.a)(i),u=new Set(u),u=Object(x.a)(u),t.next=17,a.collection("profile").doc(o).update({following:i});case 17:return t.next=19,a.collection("profile").doc(e).update({followers:u});case 19:n({type:k}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e,n,r){return t.apply(this,arguments)}}()},S=Object(d.d)(Object(u.b)((function(e){return{followers:e.firebase.profile.followers,following:e.firebase.profile.following,auth:e.firebase.auth}}),(function(e){return{followUser:function(t){return e(C(t))},unfollowUser:function(t){return e(N(t))}}})),Object(j.firestoreConnect)([{collection:"profile"}]))((function(e){var t=e.suggestion,n=e.following,r=(e.followers,e.followUser),s=e.auth,c=e.unfollowUser;return Object(h.jsxs)(i.a,{className:"m-auto",children:[Object(h.jsx)(f.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(h.jsxs)(f.a.Text,{children:[t.username,Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"mb-2 text-muted",children:"".concat(t.fname," ").concat(t.lname)})]}),Object(h.jsx)(l.a,{children:Object(h.jsx)(b.LinkContainer,{to:"#",children:"XBODMyuxsjQCw7LDM6ivYt0Atqq1"===t.id?Object(h.jsx)(f.a.Link,{className:"float-right text-white"}):(null===n||void 0===n?void 0:n.includes(t.id))?Object(h.jsx)(f.a.Link,{className:"float-right text-white",onClick:function(){return c(t.id)},children:"Unfollow"}):Object(h.jsx)(f.a.Link,{className:"float-right text-white",onClick:function(){s.uid?r(t.id):alert("Login first!")},children:"Follow"})})})]})})),y=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(l.a,{className:"float-left m-2",children:Object(h.jsx)("p",{className:"lead",children:"Suggestions"})}),Object(h.jsx)(l.a,{children:Object(h.jsx)("p",{className:"float-right m-2 lead",children:"See all"})})]})},L=Object(d.d)(Object(u.b)((function(e){return{profile:e.firebase.profile,users:e.firestore.ordered.profile}})),Object(j.firestoreConnect)([{collection:"profile"}]))((function(e){var t=e.profile,n=e.users;return Object(h.jsxs)(f.a,{className:"bg-dark position-fixed border-white",style:{width:"450px"},children:[Object(h.jsx)(p,{profile:t}),Object(h.jsx)(y,{}),Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{style:{overflowY:"scroll",height:"350px"},children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)(S,{suggestion:e},e.id)}))})})]})})),E=n(65),F=n(232),I=n(233),R=n.n(I),U=n(437),A="CREATE_CONFESSION_ERROR",_="CREATE_CONFESSION_SUCCESS",T="GET_CONFESSION",D="LIKE_CONFESSION",P="UNLIKE_CONFESSION",B="DELETE_CONFESSION",G="UPDATE_CONFESSION",M=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{unfollowUser:function(t){return e(N(t))},likeConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i,l,u,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),o=r().firebase.auth.uid,t.next=6,a.collection("confessions").doc(e).get();case 6:return i=t.sent,(l=i.data().likes)||(l=[]),l.push(o),t.next=12,a.collection("profile").doc(o).get();case 12:return u=t.sent,(d=u.data().likedConfessions)||(d=[]),d.push(e),l=new Set(l),d=new Set(d),l=Object(x.a)(l),d=Object(x.a)(d),t.next=22,a.collection("confessions").doc(e).update({likes:l});case 22:return t.next=24,a.collection("profile").doc(o).update({likedConfessions:d});case 24:n({type:D}),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(1),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[1,27]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))},unlikeConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i,l,u,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),o=r().firebase.auth.uid,t.next=6,a.collection("confessions").doc(e).get();case 6:return i=t.sent,l=(l=i.data().likes).filter((function(e){return e!==o})),t.next=11,a.collection("profile").doc(o).get();case 11:return u=t.sent,d=(d=u.data().likedConfessions).filter((function(t){return t!==e})),t.next=16,a.collection("confessions").doc(e).update({likes:l});case 16:return t.next=18,a.collection("profile").doc(o).update({likedConfessions:d});case 18:n({type:P}),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.following,n=e.confession,r=e.followUser,s=e.auth,c=e.unfollowUser,a=e.likeConfession,o=e.unlikeConfession,u=function(e){var t;s.uid?("Follow"===e.target.innerHTML&&r(n.userId),("fas fa-heart"===e.target.className||"far fa-heart"===e.target.className)&&((null===(t=n.likes)||void 0===t?void 0:t.includes(s.uid))?o(n.id):a(n.id))):alert("Login first!")};return Object(h.jsxs)(i.a,{children:[Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b.LinkContainer,{to:"#",onClick:u,children:Object(h.jsx)(f.a.Link,{className:"text-white",children:function(){var e,t;return Object(h.jsxs)("i",{className:"".concat((null===(e=n.likes)||void 0===e?void 0:e.includes(s.uid))?"fas":"far"," fa-heart"),children:[" ",0|(null===(t=n.likes)||void 0===t?void 0:t.length)]})}()})}),Object(h.jsx)(b.LinkContainer,{to:"#",children:Object(h.jsx)(f.a.Link,{className:"text-white",children:Object(h.jsx)("i",{className:"far fa-comment",children:" 0"})})})]}),Object(h.jsx)(l.a,{md:2,children:Object(h.jsx)(b.LinkContainer,{to:"#",children:"XBODMyuxsjQCw7LDM6ivYt0Atqq1"===n.userId?Object(h.jsx)(f.a.Link,{className:"float-right text-white"}):(null===t||void 0===t?void 0:t.includes(n.userId))?Object(h.jsx)(f.a.Link,{className:"float-right text-white",onClick:function(){return c(n.userId)},children:"Unfollow"}):Object(h.jsx)(f.a.Link,{className:"float-right text-white",onClick:u,children:"Follow"})})})]})})),W=Object(u.b)((function(e){return{followers:e.firebase.profile.followers,following:e.firebase.profile.following,auth:e.firebase.auth}}),(function(e){return{followUser:function(t){return e(C(t))},getConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),t.next=5,a.collection("confessions").doc(e).get();case 5:return o=t.sent,(i=o.data().views)?i++:i=1,t.next=10,a.collection("confessions").doc(e).update({views:i});case 10:n({type:T,confession:o}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))},deleteConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),t.next=5,a.collection("confessions").doc(e).delete();case 5:n({type:B}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t,n=e.confession,r=e.followUser,s=(e.followers,e.following),c=e.getConfession,a=e.auth,l=e.deleteConfession,u=e.edit,d=Object(o.l)();return Object(h.jsxs)(f.a,{className:"bg-dark overflow-hidden border-white",children:[Object(h.jsxs)(i.a,{className:"ml-2",children:[Object(h.jsx)(f.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(h.jsxs)(f.a.Text,{children:[n.username," ",Object(h.jsx)("span",{className:"m-3",children:a.uid===n.userId?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.LinkContainer,{to:"#create-confession",onClick:function(){return u(n)},children:Object(h.jsx)(f.a.Link,{className:"text-white",children:Object(h.jsx)("i",{className:"fas fa-edit"})})}),Object(h.jsx)(b.LinkContainer,{to:"/",onClick:function(){return l(n.id)},children:Object(h.jsx)(f.a.Link,{className:"text-white",children:Object(h.jsx)("i",{className:"fas fa-trash-alt",children:" "})})})]}):null}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"mb-2 text-muted",children:"".concat(n.userFname," ").concat(n.userLname)})]})]}),Object(h.jsx)(i.a,{className:"ml-2",children:Object(h.jsxs)("span",{className:"text-muted",children:[0|n.views," views \xb7 ",R()(null===(t=n.createdAt)||void 0===t?void 0:t.toDate()).endOf("day").fromNow()]})}),Object(h.jsxs)(U.a,{fluid:!0,children:[d.pathname!=="/confession/".concat(n.id)?n.content.substring(0,100):n.content,Object(h.jsx)(b.LinkContainer,{to:"/confession/".concat(n.id),onClick:function(){return c(n.id)},children:Object(h.jsx)(f.a.Link,{className:"text-secondary",children:d.pathname==="/confession/".concat(n.id)?"":" Read More..."})})]}),Object(h.jsx)(f.a,{className:"bg-dark pl-3 pt-2 pb-2 pr-3",children:Object(h.jsx)(M,{following:s,confession:n,followUser:r})})]})})),q=n(9),Y=n(41),K=n(39),X=n(40),J=n(44),Q=n(43),z=function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={content:"",location:e.props.location.pathname},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),"Confess"===t.target.innerText&&e.props.createConfession(e.state),"Edit"===t.target.innerText&&e.props.editConfession(Object(q.a)(Object(q.a)({},e.state),{},{id:e.props.editableConfession.id})),e.reset(),e.props.edit(null)},e.reset=function(t){e.setState({content:""})},e}return Object(X.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t;this.setState({content:e.editableConfession?null===(t=e.editableConfession)||void 0===t?void 0:t.content:""})}},{key:"render",value:function(){return Object(h.jsx)("div",{id:"create-confession",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("textarea",{required:!0,type:"text",id:"content",rows:10,cols:50,value:this.state.content,className:"form-control bg-dark text-white border-white",placeholder:"Confess here".concat("/explore"===this.props.location.pathname?" Anonymously":"","..."),onChange:this.handleChange})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-secondary btn-block btn-sm border-white",children:this.props.editableConfession||this.props.location.pathname.startsWith("/confession")?"Edit":"Confess"})]})})}}]),n}(r.Component),H=Object(u.b)(null,(function(e){return{createConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.getFirebase,c=s.getFirestore,t.prev=1,a=c(),"/explore"!==e.location){t.next=8;break}return t.next=6,a.collection("confessions").add({content:e.content,createdAt:new Date,username:"anonymous",userFname:"Anonymous",userLname:"User",userId:"XBODMyuxsjQCw7LDM6ivYt0Atqq1"});case 6:t.next=12;break;case 8:return o=r().firebase.profile,i=r().firebase.auth.uid,t.next=12,a.collection("confessions").add({content:e.content,createdAt:new Date,username:o.username,userFname:o.fname,userLname:o.lname,userId:i});case 12:n({type:_,confession:e}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),n({type:A,error:t.t0});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))},editConfession:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.getFirebase,c=s.getFirestore,t.prev=1,a=e.content,o=e.id,i=c(),t.next=6,i.collection("confessions").doc(o).update({content:a});case 6:n({type:G}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))}}}))(Object(o.o)(z)),V=Object(d.d)(Object(u.b)((function(e,t){var n=e.firebase.auth;return{confessions:e.firestore.ordered.confessions,auth:n}})),Object(j.firestoreConnect)([{collection:"confessions",limit:20,orderBy:["createdAt","desc"],startAfter:0}]))((function(e){var t=e.confessions,n=e.auth,s=Object(r.useState)(null),c=Object(E.a)(s,2),a=c[0],i=c[1],l=Object(o.l)();"/likes"===l.pathname&&(t=t.filter((function(e){var t;if(null===(t=e.likes)||void 0===t?void 0:t.includes(n.uid))return e})));var u=function(e){i(e)},d={default:"/explore"===l.pathname?4:"/likes"===l.pathname?5:3,1100:2,700:1};return Object(h.jsxs)(F.a,{breakpointCols:d,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:["/likes"!==l.pathname?Object(h.jsx)(H,{editableConfession:a,edit:u}):null,t&&t.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(W,{confession:e,edit:u})},e.id)}))]})})),Z=Object(u.b)((function(e){return{auth:e.firebase.auth}}))((function(e){return e.auth.uid?Object(h.jsxs)(i.a,{children:[Object(h.jsx)(l.a,{sm:12,md:12,lg:7,xl:8,children:Object(h.jsx)(V,{})}),Object(h.jsx)(l.a,{sm:12,md:12,lg:5,xl:4,children:Object(h.jsx)(L,{})})]}):Object(h.jsx)(o.c,{to:"/explore"})})),$=n(438),ee=n(439),te="SIGNIN_SUCCESS",ne="SIGNIN_ERROR",re="SIGNUP_ERROR",se="SIGNUP_SUCCESS",ce="SIGNOUT_SUCCESS",ae="SIGNOUT_ERROR",oe=Object(u.b)(null,(function(e){return{signOut:function(){return e(function(){var e=Object(g.a)(m.a.mark((function e(t,n,r){var s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.getFirebase,c=s(),e.next=4,c.auth().signOut();case 4:t({type:ce});case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.signOut;return Object(h.jsx)($.a,{id:"basic-navbar-nav",className:"right",children:Object(h.jsxs)(ee.a,{className:"mr-auto",children:[Object(h.jsx)(b.LinkContainer,{to:"/",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-home"})})}),Object(h.jsx)(b.LinkContainer,{to:"/messenger",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-comments"})})}),Object(h.jsx)(b.LinkContainer,{to:"/likes",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-heart"})})}),Object(h.jsx)(b.LinkContainer,{to:"/explore",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-compass"})})}),Object(h.jsx)(b.LinkContainer,{to:"/explore",children:Object(h.jsx)(ee.a.Link,{onClick:t,children:Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})})}),Object(h.jsx)(b.LinkContainer,{to:"/account",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("img",{src:"https://avatars.githubusercontent.com/u/48760865?v=4",style:{borderRadius:"50%",width:"40px",height:"40px",marginTop:"-7px"}})})})]})})})),ie=function(){return Object(h.jsx)($.a,{id:"basic-navbar-nav",className:"right",children:Object(h.jsxs)(ee.a,{className:"mr-auto",children:[Object(h.jsx)(b.LinkContainer,{to:"/",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-home"})})}),Object(h.jsx)(b.LinkContainer,{to:"/explore",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-compass"})})}),Object(h.jsx)(b.LinkContainer,{to:"/signin",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})})}),Object(h.jsx)(b.LinkContainer,{to:"/signup",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("i",{className:"fas fa-user-plus"})})}),Object(h.jsx)(b.LinkContainer,{to:"/account",children:Object(h.jsx)(ee.a.Link,{children:Object(h.jsx)("img",{src:"https://static.thenounproject.com/png/302770-200.png",style:{borderRadius:"50%",width:"40px",height:"40px",marginTop:"-7px"}})})})]})})},le=Object(u.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=Object(r.useState)([{profilePic:"https://avatars.githubusercontent.com/u/48760865?v=4"}]),s=Object(E.a)(n,2);s[0],s[1];return Object(h.jsx)($.a,{style:{background:"rgba(21, 0, 21, 0.5)",borderBottom:"1px solid white"},variant:"dark",expand:"lg",className:"sticky-top",collapseOnSelect:!0,children:Object(h.jsxs)(U.a,{fluid:!0,children:[Object(h.jsx)(b.LinkContainer,{to:"/",children:Object(h.jsx)($.a.Brand,{children:"Confession"})}),t.uid?Object(h.jsx)(oe,{}):Object(h.jsx)(ie,{})]})})})),ue=function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(X.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(h.jsx)(o.c,{to:"/"}):Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("h3",{children:"Sign In"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email address"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleChange})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(h.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})}}]),n}(r.Component),de=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s.getFirebase,t.prev=1,a=c(),t.next=5,a.auth().signInWithEmailAndPassword(e.email,e.password);case 5:n({type:te}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:ne,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))}}}))(ue),je=function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",fname:"",lname:"",username:""},e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(X.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(h.jsx)(o.c,{to:"/"}):Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("h3",{children:"Register"}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("input",{type:"text",id:"fname",className:"form-control",placeholder:"Enter First Name",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("input",{type:"text",id:"lname",className:"form-control",placeholder:"Enter Last Name",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Email address"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleChange})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(h.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"})]})})}}]),n}(r.Component),fe=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signUp:function(t){return e(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n,r,s){var c,a,o,i,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s.getFirebase,a=s.getFirestore,t.prev=1,o=c(),i=a(),t.next=6,o.auth().createUserWithEmailAndPassword(e.email,e.password);case 6:return l=t.sent,t.next=9,i.collection("profile").doc(l.user.uid).set({fname:e.fname,lname:e.lname,username:e.email.split("@")[0],followers:[l.user.uid],following:[l.user.uid]});case 9:n({type:"SIGNUP_SUCCESS"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n({type:re,error:t.t0});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n,r){return t.apply(this,arguments)}}()}(t))}}}))(je),be=Object(d.d)(Object(u.b)((function(e,t){var n=t.match.params.id,r=e.firestore.data.confessions,s=r?r[n]:null;return{confession:s=Object(q.a)(Object(q.a)({},s),{},{id:n}),auth:e.firebase.auth}})),Object(j.firestoreConnect)((function(e){return[{collection:"confessions",doc:e.match.params.id}]})))((function(e){var t=e.confession,n=(e.auth,Object(r.useState)(null)),s=Object(E.a)(n,2),c=s[0],a=s[1],o=function(e){a(e)};return Object(h.jsx)(U.a,{fluid:!0,children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(l.a,{lg:8,md:8,sm:12,children:Object(h.jsx)(W,{confession:t,edit:o})}),Object(h.jsx)(l.a,{lg:4,md:4,sm:12,children:Object(h.jsx)(H,{editableConfession:c,edit:o})})]})})})),he=function(){return Object(h.jsx)(V,{})},pe=(n(402),function(){return Object(h.jsxs)(a.BrowserRouter,{children:[Object(h.jsx)(le,{className:"position-fixed"}),Object(h.jsxs)("main",{className:"py-3 text-white container-fluid",children:[Object(h.jsx)(o.d,{path:"/",exact:!0,component:Z}),Object(h.jsx)(o.d,{path:"/signin",component:de}),Object(h.jsx)(o.d,{path:"/signup",component:fe}),Object(h.jsx)(o.d,{path:"/confess",component:H}),Object(h.jsx)(o.d,{path:"/explore",component:he}),Object(h.jsx)(o.d,{path:"/confession/:id",component:be}),Object(h.jsx)(o.d,{path:"/likes",component:V})]})]})}),Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,441)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))},me=n(236),xe=n(81),ge={auth:{authError:null}},ve={follow:{followError:null}},we="GET_USERS",ke={users:[]},Ce=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return console.log("Signin Success"),Object(q.a)(Object(q.a)({},e),{},{authError:null});case ne:return console.log("Signin Error"),Object(q.a)(Object(q.a)({},e),{},{authError:t.error});case se:return console.log("Signup Success"),Object(q.a)(Object(q.a)({},e),{},{authError:null});case re:return console.log("Signup Error"),Object(q.a)(Object(q.a)({},e),{},{authError:t.error});case ce:return console.log("Signout Success"),Object(q.a)(Object(q.a)({},e),{},{authError:null});case ae:return console.log("Signout Error"),Object(q.a)(Object(q.a)({},e),{},{authError:t.error});default:return e}},confessions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return console.log(t.confession),e;case A:return console.log("create confession error"),e;case T:return t.confession;case D:return console.log("like succcess"),e;case P:return console.log("unlike success"),e;case B:return console.log("delete confession success"),e;case G:return console.log("update confession success"),e;default:return e}},follow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return console.log("Follow Success"),Object(q.a)(Object(q.a)({},e),{},{followError:null});case w:return console.log("Follow error"),Object(q.a)(Object(q.a)({},e),{},{followError:t.error});case k:return console.log("unfollow success"),Object(q.a)(Object(q.a)({},e),{},{followError:null});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(q.a)(Object(q.a)({},e),{},{users:t.snapshots});default:return e}},firestore:xe.firestoreReducer,firebase:j.firebaseReducer}),Ne=n(114);n(433),n(430);Ne.a.initializeApp({apiKey:"AIzaSyAxvrD76ypETsfy64vEjDjYvIFJvX_se8w",authDomain:"confessions-ef73b.firebaseapp.com",projectId:"confessions-ef73b",storageBucket:"confessions-ef73b.appspot.com",messagingSenderId:"180663555283",appId:"1:180663555283:web:51a8ddab09d8372e803026",measurementId:"G-S5KVS39SWM"}),Ne.a.firestore().settings({timeStampsInSnapshots:!0});var Se=Ne.a,ye=Object(d.e)(Ce,Object(d.d)(Object(d.a)(me.a.withExtraArgument({getFirebase:j.getFirebase,getFirestore:xe.getFirestore})),Object(j.reactReduxFirebase)(Se,{attachAuthIsReady:!0,useFirestoreForProfile:!0,userProfile:"profile"}),Object(xe.reduxFirestore)(Se)));ye.firebaseAuthIsReady.then((function(){c.a.render(Object(h.jsx)(u.a,{store:ye,children:Object(h.jsx)(pe,{})}),document.getElementById("root"))})),Oe()}},[[432,1,2]]]);
//# sourceMappingURL=main.0eaaf36c.chunk.js.map