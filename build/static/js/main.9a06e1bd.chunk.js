(window.webpackJsonpoglay=window.webpackJsonpoglay||[]).push([[0],{213:function(e,t,a){e.exports=a(406)},218:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),l=a.n(c),i=(a(218),a(19)),o=a(20),s=a(22),m=a(21),u=a(23),d=a(15),p=a(32),h=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},"Log Out")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},"No Where")))},E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"SignUp")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"LogIn")))},b=function(){return r.a.createElement("nav",{className:"nav-wrapper blue"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Oglay"),r.a.createElement(h,null),r.a.createElement(E,null)))},g=function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"title grey-text lighten-1"},"Notifications"))},f=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",{className:"grey-text"},"date posted here..")))},j=function(e){var t=e.projects;return r.a.createElement("div",{className:"projects-list section"},r.a.createElement("h3",{className:"title grey-text lighten-1"},"Projects List"),t&&t.map(function(e){return r.a.createElement(f,{project:e,key:e.id})}))},v=a(46),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.projects;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(j,{projects:e})),r.a.createElement("div",{className:"col s12 m3 offset-m1 notification"},r.a.createElement(g,null))))}}]),t}(n.Component),O=Object(v.b)(function(e){return{projects:e.project.projects}})(N),y=function(e){var t=e.match.params.id;return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Project Title - ",t),r.a.createElement("p",null,"Hello this is test project you need to add projects here")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by the ninja"),r.a.createElement("div",null,"posted date here.."))))},w=a(30),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign-In"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"LogIn"))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign-Up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active",htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,className:"validate"})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active",htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active",htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange}),r.a.createElement("label",{className:"active",htmlFor:"lastName"},"Last Name")),r.a.createElement("div",{className:"form-control"},r.a.createElement("button",{className:"btn grey darken-1 z-depth-0"},"Register"))))}}]),t}(n.Component);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var S=function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("projects").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(w.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{authorFirstName:"Ali",authorLastName:"Noman",authorId:1234,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}},k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{className:"active",htmlFor:"title"},"Title")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"form-control"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),t}(n.Component),F=Object(v.b)(null,function(e){return{createProject:function(t){return e(S(t))}}})(k),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/project/:id",component:y}),r.a.createElement(p.a,{path:"/signin",component:C}),r.a.createElement(p.a,{path:"/signup",component:P}),r.a.createElement(p.a,{path:"/create",component:F}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(31),T={},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;arguments.length>1&&arguments[1];return e},z={projects:[{id:"1",title:"project 1",content:"this is first project"},{id:"2",title:"project 2",content:"this is 2nd project"},{id:"3",title:"project 3",content:"this is 3rd project"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Create project error",t.err),e;default:return e}},L=Object(A.c)({auth:I,project:D}),J=a(212),_=a(132),B=a(133),U=a(86),W=a.n(U);a(401),a(404);W.a.initializeApp({apiKey:"AIzaSyAAVhPRdpEVTLiPc1Bc7r9UMTOOL0nz8Ac",authDomain:"oglaydb.firebaseapp.com",databaseURL:"https://oglaydb.firebaseio.com",projectId:"oglaydb",storageBucket:"",messagingSenderId:"358271414279",appId:"1:358271414279:web:9092ab73080ab156863aa2"}),W.a.firestore().settings({timestampsInSnapShots:!0});var V=W.a,H=Object(A.e)(L,Object(A.d)(Object(A.a)(J.a.withExtraArgument({getFirebase:B.getFirebase,getFirestore:_.getFirestore})),Object(_.reduxFirestore)(V),Object(B.reactReduxFirebase)(V)));l.a.render(r.a.createElement(v.a,{store:H},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,1,2]]]);
//# sourceMappingURL=main.9a06e1bd.chunk.js.map