(()=>{var e={681:function(e){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";(function(e){var n,a,s,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="top",c={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:o,force:o,confirm:o,input:o,select:"bottom",date:o}},i=t.setOptions=function(e){c=s({},c,e,{classes:s({},c.classes,e.classes),ids:s({},c.ids,e.ids),positions:s({},c.positions,e.positions)})},l=function(){return new Promise((function(e){return setTimeout(e,0)}))},d=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))},u=function(){document.activeElement&&document.activeElement.blur()},p=function(){return"notie-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},m={1:c.classes.backgroundSuccess,success:c.classes.backgroundSuccess,2:c.classes.backgroundWarning,warning:c.classes.backgroundWarning,3:c.classes.backgroundError,error:c.classes.backgroundError,4:c.classes.backgroundInfo,info:c.classes.backgroundInfo,5:c.classes.backgroundNeutral,neutral:c.classes.backgroundNeutral},f=function(){return c.transitionSelector+" "+c.transitionDuration+"s "+c.transitionCurve},v=function(e){return 13===e.keyCode},b=function(e){return 27===e.keyCode},g=function(e,t){e.classList.add(c.classes.container),e.style[t]="-10000px",document.body.appendChild(e),e.style[t]="-"+e.offsetHeight+"px",e.listener&&window.addEventListener("keydown",e.listener),l().then((function(){e.style.transition=f(),e.style[t]=0}))},y=function(e,t){var n=document.getElementById(e);n&&(n.style[t]="-"+n.offsetHeight+"px",n.listener&&window.removeEventListener("keydown",n.listener),d(c.transitionDuration).then((function(){n.parentNode&&n.parentNode.removeChild(n)})))},x=function(e,t){var n=document.createElement("div");n.id=c.ids.overlay,n.classList.add(c.classes.overlay),n.classList.add(c.classes.backgroundOverlay),n.style.opacity=0,e&&c.overlayClickDismiss&&(n.onclick=function(){y(e.id,t),h()}),document.body.appendChild(n),l().then((function(){n.style.transition=f(),n.style.opacity=c.overlayOpacity}))},h=function(){var e=document.getElementById(c.ids.overlay);e.style.opacity=0,d(c.transitionDuration).then((function(){e.parentNode&&e.parentNode.removeChild(e)}))},L=t.hideAlerts=function(e){var t=document.getElementsByClassName(c.classes.alert);if(t.length){for(var n=0;n<t.length;n++){var a=t[n];y(a.id,a.position)}e&&d(c.transitionDuration).then((function(){return e()}))}},k=t.alert=function(e){var t=e.type,n=void 0===t?4:t,a=e.text,s=e.time,o=void 0===s?c.alertTime:s,r=e.stay,i=void 0!==r&&r,l=e.position,f=void 0===l?c.positions.alert||f.top:l;u(),L();var x=document.createElement("div"),h=p();x.id=h,x.position=f,x.classList.add(c.classes.textbox),x.classList.add(m[n]),x.classList.add(c.classes.alert),x.innerHTML='<div class="'+c.classes.textboxInner+'">'+a+"</div>",x.onclick=function(){return y(h,f)},x.listener=function(e){(v(e)||b(e))&&L()},g(x,f),o&&o<1&&(o=1),!i&&o&&d(o).then((function(){return y(h,f)}))},S=t.force=function(e,t){var n=e.type,a=void 0===n?5:n,s=e.text,o=e.buttonText,r=void 0===o?"OK":o,i=e.callback,l=e.position,d=void 0===l?c.positions.force||d.top:l;u(),L();var f=document.createElement("div"),b=p();f.id=b;var k=document.createElement("div");k.classList.add(c.classes.textbox),k.classList.add(c.classes.backgroundInfo),k.innerHTML='<div class="'+c.classes.textboxInner+'">'+s+"</div>";var S=document.createElement("div");S.classList.add(c.classes.button),S.classList.add(m[a]),S.innerHTML=r,S.onclick=function(){y(b,d),h(),i?i():t&&t()},f.appendChild(k),f.appendChild(S),f.listener=function(e){v(e)&&S.click()},g(f,d),x()},E=t.confirm=function(e,t,n){var a=e.text,s=e.submitText,o=void 0===s?"Yes":s,r=e.cancelText,i=void 0===r?"Cancel":r,l=e.submitCallback,d=e.cancelCallback,m=e.position,f=void 0===m?c.positions.confirm||f.top:m;u(),L();var k=document.createElement("div"),S=p();k.id=S;var E=document.createElement("div");E.classList.add(c.classes.textbox),E.classList.add(c.classes.backgroundInfo),E.innerHTML='<div class="'+c.classes.textboxInner+'">'+a+"</div>";var C=document.createElement("div");C.classList.add(c.classes.button),C.classList.add(c.classes.elementHalf),C.classList.add(c.classes.backgroundSuccess),C.innerHTML=o,C.onclick=function(){y(S,f),h(),l?l():t&&t()};var T=document.createElement("div");T.classList.add(c.classes.button),T.classList.add(c.classes.elementHalf),T.classList.add(c.classes.backgroundError),T.innerHTML=i,T.onclick=function(){y(S,f),h(),d?d():n&&n()},k.appendChild(E),k.appendChild(C),k.appendChild(T),k.listener=function(e){v(e)?C.click():b(e)&&T.click()},g(k,f),x(k,f)},C=function(e,t,n){var s=e.text,o=e.submitText,r=void 0===o?"Submit":o,i=e.cancelText,l=void 0===i?"Cancel":i,d=e.submitCallback,m=e.cancelCallback,f=e.position,k=void 0===f?c.positions.input||k.top:f,S=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);u(),L();var E=document.createElement("div"),C=p();E.id=C;var T=document.createElement("div");T.classList.add(c.classes.textbox),T.classList.add(c.classes.backgroundInfo),T.innerHTML='<div class="'+c.classes.textboxInner+'">'+s+"</div>";var N=document.createElement("input");N.classList.add(c.classes.inputField),N.setAttribute("autocapitalize",S.autocapitalize||"none"),N.setAttribute("autocomplete",S.autocomplete||"off"),N.setAttribute("autocorrect",S.autocorrect||"off"),N.setAttribute("autofocus",S.autofocus||"true"),N.setAttribute("inputmode",S.inputmode||"verbatim"),N.setAttribute("max",S.max||""),N.setAttribute("maxlength",S.maxlength||""),N.setAttribute("min",S.min||""),N.setAttribute("minlength",S.minlength||""),N.setAttribute("placeholder",S.placeholder||""),N.setAttribute("spellcheck",S.spellcheck||"default"),N.setAttribute("step",S.step||"any"),N.setAttribute("type",S.type||"text"),N.value=S.value||"",S.allowed&&(N.oninput=function(){var e=void 0;if(Array.isArray(S.allowed)){for(var t="",n=S.allowed,s=0;s<n.length;s++)"an"===n[s]?t+="0-9a-zA-Z":"a"===n[s]?t+="a-zA-Z":"n"===n[s]&&(t+="0-9"),"s"===n[s]&&(t+=" ");e=new RegExp("[^"+t+"]","g")}else"object"===a(S.allowed)&&(e=S.allowed);N.value=N.value.replace(e,"")});var O=document.createElement("div");O.classList.add(c.classes.button),O.classList.add(c.classes.elementHalf),O.classList.add(c.classes.backgroundSuccess),O.innerHTML=r,O.onclick=function(){y(C,k),h(),d?d(N.value):t&&t(N.value)};var M=document.createElement("div");M.classList.add(c.classes.button),M.classList.add(c.classes.elementHalf),M.classList.add(c.classes.backgroundError),M.innerHTML=l,M.onclick=function(){y(C,k),h(),m?m(N.value):n&&n(N.value)},E.appendChild(T),E.appendChild(N),E.appendChild(O),E.appendChild(M),E.listener=function(e){v(e)?O.click():b(e)&&M.click()},g(E,k),N.focus(),x(E,k)};t.input=C;var T=t.select=function(e,t){var n=e.text,a=e.cancelText,s=void 0===a?"Cancel":a,o=e.cancelCallback,r=e.choices,i=e.position,l=void 0===i?c.positions.select||l.top:i;u(),L();var d=document.createElement("div"),f=p();d.id=f;var v=document.createElement("div");v.classList.add(c.classes.textbox),v.classList.add(c.classes.backgroundInfo),v.innerHTML='<div class="'+c.classes.textboxInner+'">'+n+"</div>",d.appendChild(v),r.forEach((function(e,t){var n=e.type,a=void 0===n?1:n,s=e.text,o=e.handler,i=document.createElement("div");i.classList.add(m[a]),i.classList.add(c.classes.button),i.classList.add(c.classes.selectChoice);var u=r[t+1];u&&!u.type&&(u.type=1),u&&u.type===a&&i.classList.add(c.classes.selectChoiceRepeated),i.innerHTML=s,i.onclick=function(){y(f,l),h(),o()},d.appendChild(i)}));var k=document.createElement("div");k.classList.add(c.classes.backgroundNeutral),k.classList.add(c.classes.button),k.innerHTML=s,k.onclick=function(){y(f,l),h(),o?o():t&&t()},d.appendChild(k),d.listener=function(e){b(e)&&k.click()},g(d,l),x(d,l)},N=t.date=function(e,t,n){var a=e.value,s=void 0===a?new Date:a,o=e.submitText,r=void 0===o?"OK":o,i=e.cancelText,l=void 0===i?"Cancel":i,d=e.submitCallback,m=e.cancelCallback,f=e.position,k=void 0===f?c.positions.date||k.top:f;u(),L();var S="&#9662",E=document.createElement("div"),C=document.createElement("div"),T=document.createElement("div"),N=function(e){E.innerHTML=c.dateMonths[e.getMonth()],C.innerHTML=e.getDate(),T.innerHTML=e.getFullYear()},O=function(e){N(s)},M=function(e){var t=new Date(s.getFullYear(),s.getMonth()+e+1,0).getDate();s.getDate()>t&&s.setDate(t),s.setMonth(s.getMonth()+e),N(s)},A=function(e){s.setDate(s.getDate()+e),N(s)},I=function(e){s.getFullYear()+e<0?s.setFullYear(0):s.setFullYear(s.getFullYear()+e),N(s)},H=document.createElement("div"),w=p();H.id=w;var j=document.createElement("div");j.classList.add(c.classes.backgroundInfo);var D=document.createElement("div");D.classList.add(c.classes.dateSelectorInner);var J=document.createElement("div");J.classList.add(c.classes.button),J.classList.add(c.classes.elementThird),J.classList.add(c.classes.dateSelectorUp),J.innerHTML=S;var P=document.createElement("div");P.classList.add(c.classes.button),P.classList.add(c.classes.elementThird),P.classList.add(c.classes.dateSelectorUp),P.innerHTML=S;var q=document.createElement("div");q.classList.add(c.classes.button),q.classList.add(c.classes.elementThird),q.classList.add(c.classes.dateSelectorUp),q.innerHTML=S,E.classList.add(c.classes.element),E.classList.add(c.classes.elementThird),E.innerHTML=c.dateMonths[s.getMonth()],C.classList.add(c.classes.element),C.classList.add(c.classes.elementThird),C.setAttribute("contentEditable",!0),C.addEventListener("input",(function(e){var t=new Date(s.getFullYear(),s.getMonth()+1,0).getDate(),n=e.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(n)>t&&(n=t.toString()),e.target.textContent=n,Number(n)<1&&(n="1"),s.setDate(Number(n))})),C.addEventListener("blur",O),C.innerHTML=s.getDate(),T.classList.add(c.classes.element),T.classList.add(c.classes.elementThird),T.setAttribute("contentEditable",!0),T.addEventListener("input",(function(e){var t=e.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);e.target.textContent=t,s.setFullYear(Number(t))})),T.addEventListener("blur",O),T.innerHTML=s.getFullYear();var F=document.createElement("div");F.classList.add(c.classes.button),F.classList.add(c.classes.elementThird),F.innerHTML=S;var Y=document.createElement("div");Y.classList.add(c.classes.button),Y.classList.add(c.classes.elementThird),Y.innerHTML=S;var $=document.createElement("div");$.classList.add(c.classes.button),$.classList.add(c.classes.elementThird),$.innerHTML=S,J.onclick=function(){return M(1)},P.onclick=function(){return A(1)},q.onclick=function(){return I(1)},F.onclick=function(){return M(-1)},Y.onclick=function(){return A(-1)},$.onclick=function(){return I(-1)};var _=document.createElement("div");_.classList.add(c.classes.button),_.classList.add(c.classes.elementHalf),_.classList.add(c.classes.backgroundSuccess),_.innerHTML=r,_.onclick=function(){y(w,k),h(),d?d(s):t&&t(s)};var z=document.createElement("div");z.classList.add(c.classes.button),z.classList.add(c.classes.elementHalf),z.classList.add(c.classes.backgroundError),z.innerHTML=l,z.onclick=function(){y(w,k),h(),m?m(s):n&&n(s)},D.appendChild(J),D.appendChild(P),D.appendChild(q),D.appendChild(E),D.appendChild(C),D.appendChild(T),D.appendChild(F),D.appendChild(Y),D.appendChild($),j.appendChild(D),H.appendChild(j),H.appendChild(_),H.appendChild(z),H.listener=function(e){v(e)?_.click():b(e)&&z.click()},g(H,k),x(H,k)};t.default={alert:k,force:S,confirm:E,input:C,select:T,date:N,setOptions:i,hideAlerts:L}}])},"object"===r(t)&&"object"===r(e)?e.exports=o():(a=[],void 0===(s="function"==typeof(n=o)?n.apply(t,a):n)||(e.exports=s))}).call(t,n(0)(e))}])}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";class e{constructor(e,t,n,a){this.title=e,this.project=t,this.description=n,this.priority=a}}class t{constructor(e,t){this.name=e,this.todos=t}addTodo(e){this.todos.push(e)}}const a=document.querySelector(".container"),s=document.querySelectorAll(".input"),o=()=>{const t=document.querySelector("#todoInput"),n=document.querySelector("#projectInput"),a=document.querySelector("#descriptionInput"),s=document.querySelector(".priorities");return new e(t.value,n.value,a.value,s.value)},r=()=>{Object.keys(localStorage).forEach((function(e){if(0!=localStorage.length){const t=JSON.parse(localStorage.getItem(e)).todos.length;0==t&&localStorage.removeItem(e);for(let n=0;n<t;n++)if(null==document.querySelector(`[data-project="${e}"][data-id="${n}"]`)){let t=JSON.parse(localStorage.getItem(e)).todos[n];const s=document.createElement("div");s.setAttribute("class","todo"),s.setAttribute("data-project",`${e}`),s.setAttribute("data-id",`${n}`);const o=document.createElement("div");o.setAttribute("class","lhs"),o.innerHTML=`\n                        <input type="checkbox">\n                        <p class="title-todo">${t.title}</p>  \n                    `,s.append(o);const r=document.createElement("div");let c;switch(r.setAttribute("class","rhs"),t.priority){case"high":c="red";break;case"medium":c="orange";break;case"low":c="green"}r.innerHTML=`\n                        <i class="far fa-flag" title="Priority" style = "color:${c}"></i>\n                        <i class="far fa-trash-alt" title="Delete todo"></i>\n                        <i class="far fa-edit" title="Edit"></i>\n                    `,s.append(r),a.append(s)}}}))},c=e=>{if(null==localStorage.getItem(e.project)){const n=new t(e.project,[e]);localStorage.setItem(e.project,JSON.stringify(n))}else{let t=JSON.parse(localStorage.getItem(e.project)).todos;t.push(e);let n=JSON.parse(localStorage.getItem(e.project));n.todos=t,localStorage.setItem(n.name,JSON.stringify(n))}r()},i=e=>{const t=e.target.parentNode.parentNode.getAttribute("data-project");let n=JSON.parse(localStorage.getItem(t)).todos;const a=e.target.parentNode.parentNode.getAttribute("data-id");n.splice(a,1);let s=JSON.parse(localStorage.getItem(t));s.todos=n,localStorage.setItem(s.name,JSON.stringify(s)),e.target.parentNode.parentNode.remove(),0==JSON.parse(localStorage.getItem(s.name)).todos.length&&localStorage.removeItem(s.name),location.reload()};var l=n(681),d=n.n(l);const u=document.querySelector(".navbar-container"),p=document.querySelector(".popup"),m=document.querySelector("#btnAdd"),f=document.querySelector("#btnEdit"),v=document.querySelector(".container"),b=document.querySelectorAll(".input");window.addEventListener("load",(()=>{r()})),u.addEventListener("click",(e=>{e.target.classList.contains("add")||"add to-do"==e.target.id?(p.style.display="flex",m.style.display="block",b.forEach((e=>{e.value=""}))):e.target.className})),p.addEventListener("click",(e=>{if("popup"==e.target.className)p.style.display="none",m.style.display="none",f.style.display="none";else if("btnAdd"==e.target.id){const e=o();c(e),p.style.display="none",m.style.display="none"}else"btnEdit"==e.target.id&&((e=>{const t=e.target.getAttribute("data-project"),n=e.target.getAttribute("data-id"),a=document.querySelector("#projectInput").value,r=o(),i=JSON.parse(localStorage.getItem(t)).todos;if(a==t){i.splice(n,1,r);let e=JSON.parse(localStorage.getItem(t));e.todos=i,localStorage.setItem(e.name,JSON.stringify(e)),location.reload()}else{i.splice(n,1);let a=JSON.parse(localStorage.getItem(t));a.todos=i,localStorage.setItem(a.name,JSON.stringify(a));const s=e.target.getAttribute("data-project"),o=e.target.getAttribute("data-id");document.querySelector(`[data-project="${s}"][data-id="${o}"]`).remove(),c(r)}s.forEach((e=>{e.value=""}))})(e),p.style.display="none",f.style.display="none")})),v.addEventListener("click",(e=>{"far fa-trash-alt"==e.target.className?d().confirm({text:"Do you want to delete this todo?",cancelText:"No",submitCallback:()=>{i(e)}}):"far fa-edit"==e.target.className?(p.style.display="flex",f.style.display="block",f.setAttribute("data-project",`${e.target.parentNode.parentNode.getAttribute("data-project")}`),f.setAttribute("data-id",`${e.target.parentNode.parentNode.getAttribute("data-id")}`)):"checkbox"==e.target.type&&d().confirm({text:"Complete todo?",cancelText:"No",submitCallback:()=>{i(e)},cancelCallback:()=>{e.target.checked=!1}})})),console.log(JSON.parse(localStorage.getItem("Study"))),console.log(JSON.parse(localStorage.getItem("Workout"))),console.log(localStorage)})()})();