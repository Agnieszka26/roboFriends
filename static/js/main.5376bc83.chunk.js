(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),i=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),o=(n(13),n(2)),h=n(3),l=n(5),d=n(4),u=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"bg-light-green dib brd3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},f=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"650px"},children:e.children})},p=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",name:"search",id:"x",placeholder:"search robots",onChange:t})})},O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops. That is not good"}):this.props.children}}]),n}(r.Component),m=(n(15),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"tc",children:"RoboFriends"}),Object(u.jsx)(p,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(j,{robots:r})})})]}):Object(u.jsx)("h1",{children:"Loading"})}}]),n}(c.a.Component));s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.5376bc83.chunk.js.map