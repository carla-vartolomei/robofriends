(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),o=n.n(s),i=(n(12),n(4)),a=n(5),h=n(7),l=n(6),d=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5 tc",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org//".concat(r,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchField;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},f=function(e){return Object(d.jsxs)("div",{style:{overflowY:"scroll",border:"0.3px solid light-green",height:"600px"},children:[e.children,";"]})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{robots:r})})]}):Object(d.jsx)("h1",{children:"Loading.."})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.4e5146a1.chunk.js.map