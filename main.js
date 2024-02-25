(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var n={url:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{"Content-Type":"application/json",authorization:"0143bb88-07ef-4172-9e8d-bc173fe27541"}},r=function(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(n.url,"/").concat(r),function(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){var r,c,i,u;r=n,c=t,i=o[t],u=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(c),(c="symbol"==e(u)?u:String(u))in r?Object.defineProperty(r,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[c]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}({method:"GET",headers:n.headers},c)).then(o)},o=function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))},c=document.querySelector("#card-template").content,i=function(e,t,n,r,o){var i=c.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__like-count"),a=i.querySelector(".card__like-button");return u.textContent=e.likes.length,i.querySelector(".card__title").textContent=e.name,i.querySelector(".card__image").src=e.link,a.addEventListener("click",(function(){return r(e._id,a,u)})),i.querySelector(".card__image").addEventListener("click",(function(){return o(e.name,e.link)})),i.dataset.id=e._id,e.owner._id!=t?i.querySelector(".card__delete-button").remove():i.querySelector(".card__delete-button").addEventListener("click",(function(){return n(e._id)})),i},u=function(e,t,n){var o;t.classList.contains("card__like-button_is-active")?function(e){return r("cards/likes/".concat(e),{method:"DELETE"})}(e).then((function(e){t.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})):(o=e,r("cards/likes/".concat(o),{method:"PUT"})).then((function(e){t.classList.add("card__like-button_is-active"),n.textContent=e.likes.length}))},a=function(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",d)},l=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)},s=function(e){e.target.classList.contains("popup_is-opened")&&l(e.target)},d=function(e){27===e.keyCode&&l(document.querySelector(".popup_is-opened"))};function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e,t,n){var r=t.querySelector("#".concat(e.name,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},y=function(e,t,n){t?function(e,t){e.disabled=!1,e.classList.remove(t.inactiveButtonClass)}(e,n):function(e,t){e.classList.add(t.inactiveButtonClass),e.disabled="disabled"}(e,n)};function v(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);y(r,e.checkValidity(),t),p(n).forEach((function(n){m(n,e,t)}))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=document.querySelector(".places__list"),S=document.querySelectorAll(".popup"),h=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),q=document.querySelector(".profile__image"),C="",E="",k=document.querySelector(".profile__edit-button"),L=document.querySelector(".popup_type_edit"),O=document.forms["edit-profile"],j=O.querySelector(".popup__button"),x=O.elements.name,w=O.elements.description,A=document.querySelector(".profile__image"),P=document.querySelector(".popup_type_avatar"),D=document.forms["edit-avatar"],T=D.querySelector(".popup__button"),B=P.querySelector(".popup__input_type_url"),I=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_type_new-card"),V=document.forms["new-place"],N=V.querySelector(".popup__button"),J=V.elements["place-name"],U=V.elements.link,H=document.querySelector(".popup_type_delete"),$=H.querySelector(".popup__button"),z=document.querySelector(".popup__image"),G=document.querySelector(".popup_type_image"),F=document.querySelector(".popup__caption"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Q=function(e,t){z.src=t,z.alt=e,F.textContent=e,a(G)};function R(e){E=e,a(H)}k.addEventListener("click",(function(){"Сохранение..."===j.textContent&&(j.textContent="Сохранить"),x.value=h.textContent,w.value=g.textContent,v(O,K),a(L)})),O.addEventListener("submit",(function(e){e.preventDefault(),function(e,t){return r("users/me",{method:"PATCH",body:JSON.stringify({name:e,about:t})})}(x.value,w.value).then((function(e){j.textContent="Сохранение...",h.textContent=e.name,g.textContent=e.about,l(L)})).catch((function(e){console.log(e)}))})),A.addEventListener("click",(function(){v(D,K),"Сохранение..."===T.textContent&&(T.textContent="Сохранить"),a(P)})),D.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=B.value,r("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:t})})).then((function(e){T.textContent="Сохранение...",A.style="background-image: url('".concat(e.avatar,"')"),l(P)})).catch((function(e){console.log(e)}))})),I.addEventListener("click",(function(){"Сохранение..."===N.textContent&&(N.textContent="Сохранить"),v(V,K),a(M)})),V.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=J.value,n=U.value,r("cards",{method:"POST",body:JSON.stringify({name:t,link:n})})).then((function(e){N.textContent="Сохранение...",b.prepend(i(e,C,R,u,Q)),l(M),J.value="",U.value=""})).catch((function(e){console.log(e)}))})),$.addEventListener("click",(function(e){var t;e.preventDefault(),(t=E,r("cards/".concat(t),{method:"DELETE"})).then((function(){document.querySelector('.card[data-id="'.concat(E,'"]')).remove(),E="",l(H)})).catch((function(e){console.log(e)}))})),S.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return l(e)})),e.addEventListener("click",s)})),function(e){p(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);y(r,e.checkValidity(),t),p(n).forEach((function(n){n.addEventListener("input",(function(){y(r,e.checkValidity(),t),function(e,t,n){var r=e.validity;r.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),r.valid?m(e,t,n):function(e,t,n){var r=t.querySelector("#".concat(e.name,"-error"));e.classList.add(n.inputErrorClass),r.classList.add(n.errorClass),r.textContent=e.validationMessage}(e,t,n)}(n,e,t)}))})),e.addEventListener("submit",(function(e){e.preventDefault()}))}(t,e)}))}(K),Promise.all([r("users/me"),r("cards")]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,i,u=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];console.log(o),console.log(c),h.textContent=o.name,g.textContent=o.about,q.style="background-image: url('".concat(o.avatar,"')"),C=o._id,c.forEach((function(e){return b.append(i(e,C,R,u,Q))}))})).catch((function(e){console.log(e)}))})();