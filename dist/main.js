(()=>{var e={681:function(e){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";(function(e){var n,a,s,c,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};c=function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c="top",i={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:c,force:c,confirm:c,input:c,select:"bottom",date:c}},r=t.setOptions=function(e){i=s({},i,e,{classes:s({},i.classes,e.classes),ids:s({},i.ids,e.ids),positions:s({},i.positions,e.positions)})},l=function(){return new Promise((function(e){return setTimeout(e,0)}))},d=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))},u=function(){document.activeElement&&document.activeElement.blur()},p=function(){return"notie-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},m={1:i.classes.backgroundSuccess,success:i.classes.backgroundSuccess,2:i.classes.backgroundWarning,warning:i.classes.backgroundWarning,3:i.classes.backgroundError,error:i.classes.backgroundError,4:i.classes.backgroundInfo,info:i.classes.backgroundInfo,5:i.classes.backgroundNeutral,neutral:i.classes.backgroundNeutral},f=function(){return i.transitionSelector+" "+i.transitionDuration+"s "+i.transitionCurve},v=function(e){return 13===e.keyCode},b=function(e){return 27===e.keyCode},y=function(e,t){e.classList.add(i.classes.container),e.style[t]="-10000px",document.body.appendChild(e),e.style[t]="-"+e.offsetHeight+"px",e.listener&&window.addEventListener("keydown",e.listener),l().then((function(){e.style.transition=f(),e.style[t]=0}))},g=function(e,t){var n=document.getElementById(e);n&&(n.style[t]="-"+n.offsetHeight+"px",n.listener&&window.removeEventListener("keydown",n.listener),d(i.transitionDuration).then((function(){n.parentNode&&n.parentNode.removeChild(n)})))},x=function(e,t){var n=document.createElement("div");n.id=i.ids.overlay,n.classList.add(i.classes.overlay),n.classList.add(i.classes.backgroundOverlay),n.style.opacity=0,e&&i.overlayClickDismiss&&(n.onclick=function(){g(e.id,t),h()}),document.body.appendChild(n),l().then((function(){n.style.transition=f(),n.style.opacity=i.overlayOpacity}))},h=function(){var e=document.getElementById(i.ids.overlay);e.style.opacity=0,d(i.transitionDuration).then((function(){e.parentNode&&e.parentNode.removeChild(e)}))},L=t.hideAlerts=function(e){var t=document.getElementsByClassName(i.classes.alert);if(t.length){for(var n=0;n<t.length;n++){var a=t[n];g(a.id,a.position)}e&&d(i.transitionDuration).then((function(){return e()}))}},k=t.alert=function(e){var t=e.type,n=void 0===t?4:t,a=e.text,s=e.time,c=void 0===s?i.alertTime:s,o=e.stay,r=void 0!==o&&o,l=e.position,f=void 0===l?i.positions.alert||f.top:l;u(),L();var x=document.createElement("div"),h=p();x.id=h,x.position=f,x.classList.add(i.classes.textbox),x.classList.add(m[n]),x.classList.add(i.classes.alert),x.innerHTML='<div class="'+i.classes.textboxInner+'">'+a+"</div>",x.onclick=function(){return g(h,f)},x.listener=function(e){(v(e)||b(e))&&L()},y(x,f),c&&c<1&&(c=1),!r&&c&&d(c).then((function(){return g(h,f)}))},E=t.force=function(e,t){var n=e.type,a=void 0===n?5:n,s=e.text,c=e.buttonText,o=void 0===c?"OK":c,r=e.callback,l=e.position,d=void 0===l?i.positions.force||d.top:l;u(),L();var f=document.createElement("div"),b=p();f.id=b;var k=document.createElement("div");k.classList.add(i.classes.textbox),k.classList.add(i.classes.backgroundInfo),k.innerHTML='<div class="'+i.classes.textboxInner+'">'+s+"</div>";var E=document.createElement("div");E.classList.add(i.classes.button),E.classList.add(m[a]),E.innerHTML=o,E.onclick=function(){g(b,d),h(),r?r():t&&t()},f.appendChild(k),f.appendChild(E),f.listener=function(e){v(e)&&E.click()},y(f,d),x()},C=t.confirm=function(e,t,n){var a=e.text,s=e.submitText,c=void 0===s?"Yes":s,o=e.cancelText,r=void 0===o?"Cancel":o,l=e.submitCallback,d=e.cancelCallback,m=e.position,f=void 0===m?i.positions.confirm||f.top:m;u(),L();var k=document.createElement("div"),E=p();k.id=E;var C=document.createElement("div");C.classList.add(i.classes.textbox),C.classList.add(i.classes.backgroundInfo),C.innerHTML='<div class="'+i.classes.textboxInner+'">'+a+"</div>";var T=document.createElement("div");T.classList.add(i.classes.button),T.classList.add(i.classes.elementHalf),T.classList.add(i.classes.backgroundSuccess),T.innerHTML=c,T.onclick=function(){g(E,f),h(),l?l():t&&t()};var S=document.createElement("div");S.classList.add(i.classes.button),S.classList.add(i.classes.elementHalf),S.classList.add(i.classes.backgroundError),S.innerHTML=r,S.onclick=function(){g(E,f),h(),d?d():n&&n()},k.appendChild(C),k.appendChild(T),k.appendChild(S),k.listener=function(e){v(e)?T.click():b(e)&&S.click()},y(k,f),x(k,f)},T=function(e,t,n){var s=e.text,c=e.submitText,o=void 0===c?"Submit":c,r=e.cancelText,l=void 0===r?"Cancel":r,d=e.submitCallback,m=e.cancelCallback,f=e.position,k=void 0===f?i.positions.input||k.top:f,E=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);u(),L();var C=document.createElement("div"),T=p();C.id=T;var S=document.createElement("div");S.classList.add(i.classes.textbox),S.classList.add(i.classes.backgroundInfo),S.innerHTML='<div class="'+i.classes.textboxInner+'">'+s+"</div>";var M=document.createElement("input");M.classList.add(i.classes.inputField),M.setAttribute("autocapitalize",E.autocapitalize||"none"),M.setAttribute("autocomplete",E.autocomplete||"off"),M.setAttribute("autocorrect",E.autocorrect||"off"),M.setAttribute("autofocus",E.autofocus||"true"),M.setAttribute("inputmode",E.inputmode||"verbatim"),M.setAttribute("max",E.max||""),M.setAttribute("maxlength",E.maxlength||""),M.setAttribute("min",E.min||""),M.setAttribute("minlength",E.minlength||""),M.setAttribute("placeholder",E.placeholder||""),M.setAttribute("spellcheck",E.spellcheck||"default"),M.setAttribute("step",E.step||"any"),M.setAttribute("type",E.type||"text"),M.value=E.value||"",E.allowed&&(M.oninput=function(){var e=void 0;if(Array.isArray(E.allowed)){for(var t="",n=E.allowed,s=0;s<n.length;s++)"an"===n[s]?t+="0-9a-zA-Z":"a"===n[s]?t+="a-zA-Z":"n"===n[s]&&(t+="0-9"),"s"===n[s]&&(t+=" ");e=new RegExp("[^"+t+"]","g")}else"object"===a(E.allowed)&&(e=E.allowed);M.value=M.value.replace(e,"")});var H=document.createElement("div");H.classList.add(i.classes.button),H.classList.add(i.classes.elementHalf),H.classList.add(i.classes.backgroundSuccess),H.innerHTML=o,H.onclick=function(){g(T,k),h(),d?d(M.value):t&&t(M.value)};var A=document.createElement("div");A.classList.add(i.classes.button),A.classList.add(i.classes.elementHalf),A.classList.add(i.classes.backgroundError),A.innerHTML=l,A.onclick=function(){g(T,k),h(),m?m(M.value):n&&n(M.value)},C.appendChild(S),C.appendChild(M),C.appendChild(H),C.appendChild(A),C.listener=function(e){v(e)?H.click():b(e)&&A.click()},y(C,k),M.focus(),x(C,k)};t.input=T;var S=t.select=function(e,t){var n=e.text,a=e.cancelText,s=void 0===a?"Cancel":a,c=e.cancelCallback,o=e.choices,r=e.position,l=void 0===r?i.positions.select||l.top:r;u(),L();var d=document.createElement("div"),f=p();d.id=f;var v=document.createElement("div");v.classList.add(i.classes.textbox),v.classList.add(i.classes.backgroundInfo),v.innerHTML='<div class="'+i.classes.textboxInner+'">'+n+"</div>",d.appendChild(v),o.forEach((function(e,t){var n=e.type,a=void 0===n?1:n,s=e.text,c=e.handler,r=document.createElement("div");r.classList.add(m[a]),r.classList.add(i.classes.button),r.classList.add(i.classes.selectChoice);var u=o[t+1];u&&!u.type&&(u.type=1),u&&u.type===a&&r.classList.add(i.classes.selectChoiceRepeated),r.innerHTML=s,r.onclick=function(){g(f,l),h(),c()},d.appendChild(r)}));var k=document.createElement("div");k.classList.add(i.classes.backgroundNeutral),k.classList.add(i.classes.button),k.innerHTML=s,k.onclick=function(){g(f,l),h(),c?c():t&&t()},d.appendChild(k),d.listener=function(e){b(e)&&k.click()},y(d,l),x(d,l)},M=t.date=function(e,t,n){var a=e.value,s=void 0===a?new Date:a,c=e.submitText,o=void 0===c?"OK":c,r=e.cancelText,l=void 0===r?"Cancel":r,d=e.submitCallback,m=e.cancelCallback,f=e.position,k=void 0===f?i.positions.date||k.top:f;u(),L();var E="&#9662",C=document.createElement("div"),T=document.createElement("div"),S=document.createElement("div"),M=function(e){C.innerHTML=i.dateMonths[e.getMonth()],T.innerHTML=e.getDate(),S.innerHTML=e.getFullYear()},H=function(e){M(s)},A=function(e){var t=new Date(s.getFullYear(),s.getMonth()+e+1,0).getDate();s.getDate()>t&&s.setDate(t),s.setMonth(s.getMonth()+e),M(s)},N=function(e){s.setDate(s.getDate()+e),M(s)},O=function(e){s.getFullYear()+e<0?s.setFullYear(0):s.setFullYear(s.getFullYear()+e),M(s)},w=document.createElement("div"),I=p();w.id=I;var D=document.createElement("div");D.classList.add(i.classes.backgroundInfo);var j=document.createElement("div");j.classList.add(i.classes.dateSelectorInner);var P=document.createElement("div");P.classList.add(i.classes.button),P.classList.add(i.classes.elementThird),P.classList.add(i.classes.dateSelectorUp),P.innerHTML=E;var F=document.createElement("div");F.classList.add(i.classes.button),F.classList.add(i.classes.elementThird),F.classList.add(i.classes.dateSelectorUp),F.innerHTML=E;var q=document.createElement("div");q.classList.add(i.classes.button),q.classList.add(i.classes.elementThird),q.classList.add(i.classes.dateSelectorUp),q.innerHTML=E,C.classList.add(i.classes.element),C.classList.add(i.classes.elementThird),C.innerHTML=i.dateMonths[s.getMonth()],T.classList.add(i.classes.element),T.classList.add(i.classes.elementThird),T.setAttribute("contentEditable",!0),T.addEventListener("input",(function(e){var t=new Date(s.getFullYear(),s.getMonth()+1,0).getDate(),n=e.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(n)>t&&(n=t.toString()),e.target.textContent=n,Number(n)<1&&(n="1"),s.setDate(Number(n))})),T.addEventListener("blur",H),T.innerHTML=s.getDate(),S.classList.add(i.classes.element),S.classList.add(i.classes.elementThird),S.setAttribute("contentEditable",!0),S.addEventListener("input",(function(e){var t=e.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);e.target.textContent=t,s.setFullYear(Number(t))})),S.addEventListener("blur",H),S.innerHTML=s.getFullYear();var Y=document.createElement("div");Y.classList.add(i.classes.button),Y.classList.add(i.classes.elementThird),Y.innerHTML=E;var _=document.createElement("div");_.classList.add(i.classes.button),_.classList.add(i.classes.elementThird),_.innerHTML=E;var J=document.createElement("div");J.classList.add(i.classes.button),J.classList.add(i.classes.elementThird),J.innerHTML=E,P.onclick=function(){return A(1)},F.onclick=function(){return N(1)},q.onclick=function(){return O(1)},Y.onclick=function(){return A(-1)},_.onclick=function(){return N(-1)},J.onclick=function(){return O(-1)};var $=document.createElement("div");$.classList.add(i.classes.button),$.classList.add(i.classes.elementHalf),$.classList.add(i.classes.backgroundSuccess),$.innerHTML=o,$.onclick=function(){g(I,k),h(),d?d(s):t&&t(s)};var z=document.createElement("div");z.classList.add(i.classes.button),z.classList.add(i.classes.elementHalf),z.classList.add(i.classes.backgroundError),z.innerHTML=l,z.onclick=function(){g(I,k),h(),m?m(s):n&&n(s)},j.appendChild(P),j.appendChild(F),j.appendChild(q),j.appendChild(C),j.appendChild(T),j.appendChild(S),j.appendChild(Y),j.appendChild(_),j.appendChild(J),D.appendChild(j),w.appendChild(D),w.appendChild($),w.appendChild(z),w.listener=function(e){v(e)?$.click():b(e)&&z.click()},y(w,k),x(w,k)};t.default={alert:k,force:E,confirm:C,input:T,select:S,date:M,setOptions:r,hideAlerts:L}}])},"object"===o(t)&&"object"===o(e)?e.exports=c():(a=[],void 0===(s="function"==typeof(n=c)?n.apply(t,a):n)||(e.exports=s))}).call(t,n(0)(e))}])}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var c=t[a]={exports:{}};return e[a].call(c.exports,c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=document.querySelector(".container");var t=n(681),a=n.n(t);const s=document.querySelector(".navbar-container"),c=document.querySelector(".popup"),o=document.querySelector("#btnAdd"),i=document.querySelector("#btnEdit"),r=document.querySelector(".container");Object.keys(localStorage).forEach((t=>{let n=localStorage.getItem(t);const a=document.createElement("div");a.setAttribute("class","todo"),a.setAttribute("id",`${localStorage.length}`);const s=document.createElement("div");s.setAttribute("class","lhs"),s.innerHTML=`\n            <input type="checkbox">\n            <p class="title-todo">${JSON.parse(n).title}</p>  \n        `,a.append(s);const c=document.createElement("div");c.setAttribute("class","rhs"),c.innerHTML='\n            <i class="far fa-flag" title="Priority"></i>\n            <i class="far fa-trash-alt" title="Delete todo"></i>\n            <i class="far fa-edit" title="Edit"></i>\n        ',a.append(c),e.append(a)})),s.addEventListener("click",(e=>{e.target.classList.contains("add")||"link-text"==e.target.className?(c.style.display="flex",o.style.display="block"):e.target.className})),c.addEventListener("click",(t=>{if("popup"==t.target.className&&(c.style.display="none",o.style.display="none",i.style.display="none"),"addtodo"==t.target.className){const t=document.querySelector("#todoInput"),n=document.querySelector("#projectInput"),a=document.querySelector("#descriptionInput"),s=document.querySelector(".priorities");(t=>{localStorage.setItem(`${localStorage.length}`,JSON.stringify(t));const n=document.createElement("div");n.setAttribute("class","todo"),n.setAttribute("id",`${localStorage.length}`);const a=document.createElement("div");a.setAttribute("class","lhs"),a.innerHTML=`\n        <input type="checkbox">\n        <p class="title-todo">${t.title}</p>  \n    `,n.append(a);const s=document.createElement("div");s.setAttribute("class","rhs"),s.innerHTML='\n        <i class="far fa-flag title="Priority"></i>\n        <i class="far fa-trash-alt title="Delete todo"></i>\n        <i class="far fa-edit" title="Edit"></i>\n    ',n.append(s),e.append(n)})(new class{constructor(e,t,n,a){this.title=e,this.project=t,this.description=n,this.priority=a}}(t.value,n.value,a.value,s.value)),c.style.display="none"}})),r.addEventListener("click",(e=>{"far fa-trash-alt"==e.target.className?a().confirm({text:"Do you want to delete this todo?",cancelText:"No",submitCallback:()=>{localStorage.removeItem(e.target.parentNode.parentNode.id-1),e.target.parentNode.parentNode.remove()}}):"far fa-edit"==e.target.className?(c.style.display="flex",i.style.display="block"):"checkbox"==e.target.type&&a().confirm({text:"Complete todo?",cancelText:"No",submitCallback:()=>{localStorage.removeItem(e.target.parentNode.parentNode.id-1),e.target.parentNode.parentNode.remove()},cancelCallback:()=>{e.target.checked=!1}})})),console.log(localStorage)})()})();