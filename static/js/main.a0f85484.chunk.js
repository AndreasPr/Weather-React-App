(this["webpackJsonpweather-react-app"]=this["webpackJsonpweather-react-app"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(17),t(5)),s=t(2),l=t(3);function u(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  \n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return u=function(){return e},e}function m(){var e=Object(s.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return m=function(){return e},e}l.a.div(m()),l.a.div(u());var d="64983a533ca7d569f1af501a2d26810f",p="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)({}),s=Object(i.a)(c,2),l=s[0],u=s[1];return r.a.createElement("div",{className:"undefined"!=typeof l.main&&l.main.temp>18?"App warm":"App"},r.a.createElement("main",null,"undefined"!=typeof l.main?r.a.createElement("div",{className:"weather-container"},r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},l.name,", ",l.sys.country),r.a.createElement("div",{className:"date"}," ",function(e){var n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()],t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(n," ").concat(t," ").concat(a," ").concat(r)}(new Date)," ")),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(l.main.temp),"\u2103 "),r.a.createElement("div",{className:"weather"},l.weather[0].main," "))):"",r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return o(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(p,"weather?q=").concat(t,"&units=metric&appid=").concat(d)).then((function(e){return e.json()})).then((function(e){o(""),u(e),console.log(e)}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a0f85484.chunk.js.map