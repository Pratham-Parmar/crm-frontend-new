(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){},47:function(e,t,n){e.exports=n(66)},56:function(e,t,n){},58:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),i=n.n(o),c=(n(56),n(58),n(36)),l=n(5),u=n(9),s=n(96),f=n(8),h=n(98),m=n(87),d=n(64),p=n(94),g=n(97),v=n(93),y=n(91),E=n(95),b="https://rate-crm.herokuapp.com",w=n(1);function O(){O=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var s={};function f(){}function h(){}function m(){}var d={};c(d,a,function(){return this});var p=Object.getPrototypeOf,g=p&&p(p(N([])));g&&g!==t&&n.call(g,a)&&(d=g);var v=m.prototype=f.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,c(v,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(v),c(v,i,"Generator"),c(v,a,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var x=function(){var e=Object(w.g)(),t=Object(r.useState)({source:"",destination:"",container_size:"",email:""}),n=Object(u.a)(t,2),o=n[0],i=(n[1],Object(r.useState)([])),x=Object(u.a)(i,2),L=x[0],N=x[1],S=Object(f.a)(m.a)(function(e){var t,n=e.theme;return t={},Object(l.a)(t,"&.".concat(d.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(l.a)(t,"&.".concat(d.a.body),{fontSize:14}),t});Object(r.useEffect)(function(){"Login_status"in localStorage&&"true"==localStorage.getItem("Login_status")||e("/login"),fetch(b+"/search?"+new URLSearchParams(o),{method:"GET",credentials:"include"}).then(function(){var e=Object(c.a)(O().mark(function e(t){var n;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log(n),N(n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[]);var j=Object(f.a)(v.a)(function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}});return a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,{variant:"contained",onClick:function(){return e("/add")}},"Add Rate"),a.a.createElement(y.a,{variant:"contained",onClick:function(){localStorage.clear(),e("/login")}},"Logout"),a.a.createElement(p.a,{component:E.a},a.a.createElement(s.a,{sx:{minWidth:450},"aria-label":"simple table"},a.a.createElement(g.a,null,a.a.createElement(j,null,a.a.createElement(S,null,"Ex/Im"),a.a.createElement(S,{align:"right"},"Port of Loading"),a.a.createElement(S,{align:"right"},"Port of Destination"),a.a.createElement(S,{align:"right"},"Container Size"),a.a.createElement(S,{align:"right"},"Rate"),a.a.createElement(S,{align:"right"},"Delete Rate"))),a.a.createElement(h.a,null,L.map(function(e){return a.a.createElement(j,{key:e.name,sx:{"&:last-child td, &:last-child th":{border:0}}},a.a.createElement(S,{component:"th",scope:"row"},e.exim),a.a.createElement(S,{align:"right"},e.source),a.a.createElement(S,{align:"right"},e.destination),a.a.createElement(S,{align:"right"},e.container_size),a.a.createElement(S,{align:"right"},e.rate),a.a.createElement(S,{align:"right"},e.created_by),a.a.createElement(S,null,a.a.createElement(y.a,{onClick:function(){return t=e.id,void fetch(b+"/delete",{method:"POST",credentials:"include",body:JSON.stringify({id:t})}).then(function(){var e=Object(c.a)(O().mark(function e(t){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.location.reload();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var t}},"Delete")))})))))};var L=n(26),N=n(30),S=(n(39),function(){var e=Object(w.g)(),t=Object(r.useState)({source:"",destination:"",rate:0,email:"",container_size:""}),n=Object(u.a)(t,2),o=n[0],i=n[1],c=function(e){e.persist(),i(function(t){return Object(N.a)({},t,Object(l.a)({},e.target.name,e.target.value))})};Object(r.useEffect)(function(){"Login_status"in localStorage&&"true"==localStorage.getItem("Login_status")||e("/login")},[]);return a.a.createElement("div",{className:"contact__wrap"},a.a.createElement("h1",null,"Add Rates"),a.a.createElement("form",{className:"contact__form"},a.a.createElement("div",null,a.a.createElement("label",null,a.a.createElement("input",{name:"exim",type:"radio",value:"Import",onChange:function(e){return c(e)}}),"Import"),a.a.createElement("label",null,a.a.createElement("input",{name:"exim",type:"radio",value:"Export",onChange:function(e){return c(e)}}),"Export")),a.a.createElement("select",{value:o.source,onChange:function(e){return c(e)},type:"text",name:"source",placeholder:"source",title:"Port of Loading",required:!0},["Port of Loading","NHAVA SHEVA","HAZIRA","CHENNAI","MUNDRA","ICD TKD","Qingdao","SHANGHAI","TAINJIN","SHEKOU","FUZHOU","NINGBO","NANSHA"].map(function(e){return a.a.createElement("option",{value:e},e)})),a.a.createElement("select",{value:o.destination,onChange:function(e){return c(e)},type:"text",name:"destination",placeholder:"destination",title:"Port of Destination",required:!0},["Port of Destination","NHAVA SHEVA","HAZIRA","CHENNAI","MUNDRA","ICD TKD","Qingdao","SHANGHAI","TAINJIN","SHEKOU","FUZHOU","NINGBO","NANSHA"].map(function(e){return a.a.createElement("option",{value:e},e)})),a.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},a.a.createElement("h3",{style:{marginRight:20}},"Container Size"),a.a.createElement("label",null,a.a.createElement("input",{name:"container_size",type:"radio",value:"20FT",onChange:function(e){return c(e)}}),"20FT"),a.a.createElement("label",null,a.a.createElement("input",{name:"container_size",type:"radio",value:"40FT",onChange:function(e){return c(e)}}),"40FT"),a.a.createElement("label",null,a.a.createElement("input",{name:"container_size",type:"radio",value:"40HQ",onChange:function(e){return c(e)}}),"40HQ")),a.a.createElement("input",{value:o.rate,onChange:function(e){return c(e)},type:"number",name:"rate",placeholder:"rate",title:"Rate",required:!0}),a.a.createElement("input",{type:"submit",onClick:function(t){t&&t.preventDefault(),fetch(b+"/add",{method:"POST",credentials:"include",body:JSON.stringify(o)}).then(function(t){200===t.status&&e("/table")})},value:"SUBMIT"})))}),j=function(){var e=Object(w.g)(),t=Object(r.useState)({username:"",password:""}),n=Object(u.a)(t,2),o=n[0],i=n[1],c=function(e){e.persist(),i(function(t){return Object(N.a)({},t,Object(l.a)({},e.target.name,e.target.value))})};return a.a.createElement("div",{className:"contact__wrap"},a.a.createElement("h1",null,"Login"),a.a.createElement("form",{onSubmit:function(t){return function(t){t&&t.preventDefault(),fetch(b+"/login",{method:"POST",crossDomain:!0,credentials:"include",body:JSON.stringify(o)}).then(function(t){200===t.status&&(localStorage.setItem("Login_status",!0),e("/table")),console.log(t)})}(t)},className:"contact__form"},a.a.createElement("div",null,a.a.createElement("label",null,"Email"),a.a.createElement("input",{name:"username",type:"text",value:o.email,onChange:function(e){return c(e)}})),a.a.createElement("div",null,a.a.createElement("label",null,"Password"),a.a.createElement("input",{name:"password",type:"password",value:o.password,onChange:function(e){return c(e)}})),a.a.createElement("input",{type:"submit",value:"LOGIN"})))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(L.a,null,a.a.createElement(w.d,null,a.a.createElement(w.b,{path:"/",element:a.a.createElement(w.a,{to:"/login"})}),a.a.createElement(w.b,{path:"/table",element:a.a.createElement(x,null)}),a.a.createElement(w.b,{path:"/login",element:a.a.createElement(j,null)}),a.a.createElement(w.b,{path:"/add",element:a.a.createElement(S,null)}))))}},[[47,2,1]]]);
//# sourceMappingURL=main.63093169.chunk.js.map