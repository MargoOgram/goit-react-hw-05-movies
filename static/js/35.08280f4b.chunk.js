"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[35],{445:function(n,t,e){e.d(t,{Z:function(){return u}});var c="HeadingPage_title__ma9pD",r=e(184);var u=function(n){var t=n.text;return(0,r.jsx)("h1",{className:c,children:t})}},35:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var c=e(439),r=e(901),u=e(445),o=e(87),i=e(791),a=e(228),f=e(184),s=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],s=t[1];return(0,i.useEffect)((function(){(0,a.Df)().then(s)}),[]),(0,f.jsx)(r.Z,{children:(0,f.jsxs)("ul",{children:[(0,f.jsx)(u.Z,{text:"Trending Movies"}),e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))]})})}},228:function(n,t,e){e.d(t,{Df:function(){return u},TP:function(){return i},V0:function(){return o},jW:function(){return f},z0:function(){return a}});var c="https://api.themoviedb.org/3/",r="ad94ef6ae2904bd7834254c1a0283dc1";function u(){return fetch("".concat(c,"trending/all/day?api_key=").concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))}function o(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function i(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))}function a(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()})).then((function(n){return n.cast}))}function f(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=35.08280f4b.chunk.js.map