(this["webpackJsonpbmf10.github.io"]=this["webpackJsonpbmf10.github.io"]||[]).push([[0],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_febriansyah_Dev_bmf10_github_io_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),reactour__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47),_style_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_febriansyah_Dev_bmf10_github_io_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState4=Object(_home_febriansyah_Dev_bmf10_github_io_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),on=_useState4[0],setOn=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState6=Object(_home_febriansyah_Dev_bmf10_github_io_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),open=_useState6[0],setOpen=_useState6[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){!1===!localStorage.getItem("uniqueUserCalculator")&&setOpen(!1)}),[]);var handleClick=function handleClick(e){var btnValue=e.target.value,currentValue=value.toString(),isNumber=/[0-9]/.test(currentValue.slice(-1)),isOperator=/[*/+-]/.test(currentValue.slice(-1));try{if("on"===btnValue)setValue(""),setOn(!on);else if("1"===btnValue&&on)setValue(currentValue+btnValue);else if("2"===btnValue&&on)setValue(currentValue+btnValue);else if("3"===btnValue&&on)setValue(currentValue+btnValue);else if("4"===btnValue&&on)setValue(currentValue+btnValue);else if("5"===btnValue&&on)setValue(currentValue+btnValue);else if("6"===btnValue&&on)setValue(currentValue+btnValue);else if("7"===btnValue&&on)setValue(currentValue+btnValue);else if("8"===btnValue&&on)setValue(currentValue+btnValue);else if("9"===btnValue&&on)setValue(currentValue+btnValue);else if("0"===btnValue&&on)(isNumber||isOperator)&&setValue(currentValue+btnValue);else if("00"===btnValue&&on)(isNumber||isOperator)&&setValue(currentValue+btnValue);else if("000"===btnValue&&on)(isNumber||isOperator)&&setValue(currentValue+btnValue);else if("+"===btnValue&&on)isNumber?setValue(currentValue+btnValue):isOperator&&setValue(currentValue.slice(0,-1)+btnValue);else if("-"===btnValue&&on)isNumber?setValue(currentValue+btnValue):isOperator&&setValue(currentValue.slice(0,-1)+btnValue);else if("/"===btnValue&&on)isNumber?setValue(currentValue+btnValue):isOperator&&setValue(currentValue.slice(0,-1)+btnValue);else if("*"===btnValue&&on)isNumber?setValue(currentValue+btnValue):isOperator&&setValue(currentValue.slice(0,-1)+btnValue);else if("="===btnValue&&on){if(isNumber){var result=eval(currentValue);setValue(result)}}else"c"===btnValue&&on?setValue(""):"ce"===btnValue&&on&&setValue(currentValue.slice(0,-1))}catch(error){setValue("Error! Invalid Input")}},step=[{selector:'[data-tut="button"]',content:"Action Button"},{selector:'[data-tut="on"]',content:"Power Button"},{selector:'[data-tut="input"]',content:"Input Container"}],handleClose=function(){setOpen(!1),localStorage.setItem("uniqueUserCalculator",!1)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container-child"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",placeholder:"",value:value,disabled:!on,className:"calculator-input","data-tut":"input"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{"data-tut":"button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"on",onClick:handleClick,type:"button","data-tut":"on"},on?"OFF":"ON"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"ce",onClick:handleClick,type:"button"},"CE"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"c",onClick:handleClick,type:"button"},"C"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"+",onClick:handleClick,type:"button"},"+")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"1",onClick:handleClick,type:"button"},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"2",onClick:handleClick,type:"button"},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"3",onClick:handleClick,type:"button"},"3"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"-",onClick:handleClick,type:"button"},"-")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"4",onClick:handleClick,type:"button"},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"5",onClick:handleClick,type:"button"},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"6",onClick:handleClick,type:"button"},"6"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"*",onClick:handleClick,type:"button"},"*")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"7",onClick:handleClick,type:"button"},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"8",onClick:handleClick,type:"button"},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"9",onClick:handleClick,type:"button"},"9"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"/",onClick:handleClick,type:"button"},"/")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-button"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"0",onClick:handleClick,type:"button"},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"00",onClick:handleClick,type:"button"},"00"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"000",onClick:handleClick,type:"button"},"000"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{value:"=",onClick:handleClick,type:"button"},"="))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"calculator-text"},"Made in Indonesia")))),open?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactour__WEBPACK_IMPORTED_MODULE_2__.a,{steps:step,isOpen:open,rounded:5,disableDotsNavigation:!1,showNavigationNumber:!1,onRequestClose:handleClose}):void 0)};__webpack_exports__.a=Calculator},31:function(e,t,a){e.exports=a.p+"static/media/img.aab5cca7.svg"},34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),_=a(12),u=a.n(_),r=(a(39),a(15)),c=a(3),o=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"Coming Soon"),l.a.createElement("h2",null,"Stay tune!"))))},s=a(24),i=a(9),E=a(31),m=a.n(E),b=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("img",{className:"img",src:m.a,alt:"default"}),l.a.createElement("h2",null,"Default Page"))},d=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"Hello, "),l.a.createElement("h2",null,function(){var e=(new Date).getHours();return e<10&&e>=5?"Good Morning!":e<=15&&e>=10?"Good Afternoon!":e<=18&&e>15?"Good Evening!":"Good Night!"}()))},O=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"If you need me"),l.a.createElement("h2",null,"you can contact me"," ",l.a.createElement("a",{className:"link",href:"https://wa.me/6289693943932"},"here")))},f=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I had 1 year experience"),l.a.createElement("h2",null,"as profesional programmer"))},p=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I'm a Programmer"),l.a.createElement("h2",null,"and this website, I made with React Js"))},h=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I'm Bima Febriansyah"),l.a.createElement("h2",null,"and this is my personal website"))},C=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I'm born in Pontianak City"),l.a.createElement("h2",null,"Kalimatan Barat"))},D=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I'm 22 years old"),l.a.createElement("h2",null,"when i made this"))},M=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"My motivation word is"),l.a.createElement("h2",{className:"motivation"},'"Lo Miskin, Ayo Kerja!"'))},P=a(13),V=function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"I hope you're happy"),l.a.createElement("h2",null,"to be here"))},v=function(){var e=Object(c.f)();return l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"See you later"),l.a.createElement("h2",null,"bye bye!"),l.a.createElement("button",{className:"btn-action",onClick:function(){return e.push("blog")}},"Blog"),l.a.createElement("button",{className:"btn-action",onClick:function(){return e.push("calculator")}},"Calculator"))},I=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],_=t[1],u=Object(n.useState)(!0),r=Object(i.a)(u,2),c=r[0],o=r[1],s=[{selector:'[data-tut="left"]',content:"Tap here for previous",position:[window.innerWidth/4-100,window.innerHeight/2-100]},{selector:'[data-tut="right"]',content:"Tap here for next",position:[window.innerWidth/4*3-100,window.innerHeight/2-100]}];Object(n.useEffect)((function(){!1===!localStorage.getItem("uniqueUser")&&o(!1)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App",onClick:function(e){var t=window.innerWidth/2,n=e.clientX;t>n?1!==a&&_(a-1):t<n&&10!==a&&_(a+1)}},l.a.createElement("div",{className:"App-header"},function(e){switch(e){case 1:return l.a.createElement(d,null);case 2:return l.a.createElement(h,null);case 3:return l.a.createElement(C,null);case 4:return l.a.createElement(D,null);case 5:return l.a.createElement(p,null);case 6:return l.a.createElement(f,null);case 7:return l.a.createElement(O,null);case 8:return l.a.createElement(M,null);case 9:return l.a.createElement(V,null);case 10:return l.a.createElement(v,null);default:return l.a.createElement(b,null)}}(a))),c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"left","data-tut":"left"}),l.a.createElement("div",{className:"right","data-tut":"right"}),l.a.createElement(P.a,{steps:s,isOpen:c,rounded:5,disableDotsNavigation:!1,showNavigationNumber:!1,onRequestClose:function(){o(!1),localStorage.setItem("uniqueUser",!1)}})):void 0)};a(49);var k=function(){return l.a.createElement(r.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",exact:!0,component:I}),l.a.createElement(c.a,{path:"/blog",exact:!0,component:o}),l.a.createElement(c.a,{path:"/calculator",exact:!0,component:s.a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.77a520b4.chunk.js.map