(this.webpackJsonpreactcodingexcercise=this.webpackJsonpreactcodingexcercise||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(10),i=n.n(a),r=(n(66),n(32)),l=(n(67),n(121)),s=n(6),u=function(e){var t=e.id,n=e.defaultValue,c=e.onChange;return Object(s.jsx)(l.a,{required:!0,id:t,defaultValue:n,onChange:c})},j=n(120),d=n(119),h=n(54),b=n.n(h),x=function(e,t,n,c){fetch("https://api.github.com/search/users?q=".concat(e,"&per_page=").concat(n,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}),(function(e){console.log(e)}))},v=n(111),O=n(112),f=n(113),g=n(114),p=n(123),m=n(115),C=n(41),y=Object(O.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),S=function(e){var t=e.user,n=e.handleClick,c=y();return Object(s.jsxs)(f.a,{button:!0,alignItems:"flex-start",onClick:function(){return n(t)},children:[Object(s.jsx)(g.a,{children:Object(s.jsx)(p.a,{src:null===t||void 0===t?void 0:t.avatar_url})}),Object(s.jsx)(m.a,{primary:null===t||void 0===t?void 0:t.login,secondary:Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsx)(C.a,{variant:"body2",className:c.inline,color:"textPrimary"})," More relevant info or description"]})})]})};S.defaultProps={user:{avatar_url:"",login:"",url:""}};var w=S,_=n(116),k=n(117),F=n(118),N=Object(O.a)({root:{minWidth:275},title:{fontSize:24},pos:{marginBottom:12},avatar:{height:"100px",width:"100px"}}),P=function(e){var t=e.user,n=N();return t?Object(s.jsxs)(_.a,{className:n.root,children:[Object(s.jsxs)(k.a,{children:[Object(s.jsx)(p.a,{src:null===t||void 0===t?void 0:t.avatar_url,className:n.avatar}),Object(s.jsx)(C.a,{variant:"h5",component:"h1",children:null===t||void 0===t?void 0:t.name}),Object(s.jsx)(C.a,{className:n.pos,color:"textSecondary",children:null===t||void 0===t?void 0:t.login}),Object(s.jsx)(C.a,{className:n.pos,color:"textSecondary",children:null===t||void 0===t?void 0:t.location}),Object(s.jsx)(C.a,{component:"h4",children:null===t||void 0===t?void 0:t.bio}),Object(s.jsxs)(C.a,{variant:"body1",component:"p",children:["Followers: ",null===t||void 0===t?void 0:t.followers]}),Object(s.jsxs)(C.a,{variant:"body2",component:"p",children:["following: ",null===t||void 0===t?void 0:t.following]})]}),Object(s.jsx)(F.a,{children:Object(s.jsx)(d.a,{href:null===t||void 0===t?void 0:t.html_url,children:"View Profile"})})]}):null},I=function(e){var t=e.results,n=Object(c.useState)(null),o=Object(r.a)(n,2),a=o[0],i=o[1];console.log(t);var l=function(e){var t,n;t=e.url,n=i,fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}),(function(e){console.log(e)}))},u=[];return t.items.forEach((function(e){u.push(Object(s.jsx)(w,{user:e,handleClick:l},e.id))})),Object(s.jsxs)(j.a,{container:!0,children:[Object(s.jsx)(j.a,{item:!0,xs:6,children:Object(s.jsx)(v.a,{children:u})}),Object(s.jsx)(j.a,{item:!0,xs:6,children:Object(s.jsx)(P,{user:a})})]})};I.defaultProps={results:{items:[],total_count:0}};var B=I,M=n(122),V=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(1),i=Object(r.a)(a,2),l=i[0],h=i[1],v=Object(c.useState)({items:[],total_count:0}),O=Object(r.a)(v,2),f=O[0],g=O[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(j.a,{container:!0,children:[Object(s.jsx)(j.a,{item:!0,xs:9,children:Object(s.jsx)(u,{id:"test",value:n,onChange:function(e){o(e.target.value)}})}),Object(s.jsx)(j.a,{item:!0,xs:3,children:Object(s.jsx)(d.a,{variant:"contained",startIcon:Object(s.jsx)(b.a,{}),onClick:function(){return x(n,l,10,g)},children:"Search"})})]}),Object(s.jsx)(B,{results:f}),f.total_count>0?Object(s.jsx)(M.a,{count:Math.floor(f.total_count/10),page:l,onChange:function(e,t){x(n,t,10,g),h(t)}}):null]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),q()}},[[76,1,2]]]);
//# sourceMappingURL=main.3e3cc526.chunk.js.map