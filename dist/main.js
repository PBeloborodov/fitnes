!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=document.querySelector(".head"),t=e.querySelector("ul"),n=0;e.addEventListener("click",()=>{let e=event.target;if(n++,"club-select-btn"==e.className&&(n%2!=0?t.setAttribute("style","display:block "):t.setAttribute("style","display: none"),document.querySelector(".top-menu").addEventListener("mouseover",()=>{t.setAttribute("style","display: none"),n=0})),"open-popup"===e.className&&document.querySelector("#free_visit_form").setAttribute("style","display:block "),"btn callback-btn"===e.className&&document.querySelector("#callback_form").setAttribute("style","display:block "),"fixed-gift"===e.parentElement.className){let t=document.getElementById("gift");t.setAttribute("style","display:block"),e.setAttribute("style","display:none"),t.querySelector(".btn").addEventListener("click",()=>{t.style.display="none"})}})};var i=()=>{let e=document.querySelectorAll(".close-form"),t=document.querySelectorAll(".overlay");e.forEach(e=>{e.addEventListener("click",()=>{e.parentElement.parentElement.setAttribute("style","display:none")})}),t.forEach(e=>{e.addEventListener("click",e=>{e.target.parentNode.style.display="none"})})};var r=()=>{let e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0;setInterval(()=>{e[t].setAttribute("style","display:none"),++t>=e.length&&(t=0),e[t].setAttribute("style","display:flex")},3e3)};var o=()=>{let e=document.querySelector(".gallery-slider").querySelectorAll(".slide"),t=document.querySelector(".gallery-bg"),n=document.getElementById("arrows-left-gallery"),l=document.getElementById("arrows-right-gallery"),i=document.querySelector(".gallery-slider-min").querySelectorAll("div");for(let t=1;t<e.length;t++)e[t].style.display="none";let r=0;setInterval(()=>{s(r),++r>=i.length-1&&(r=0),o(r)},3e3);const o=t=>{e[t].style.display="block",i[t].classList.add("gallery-slider-min__item-active")},s=t=>{e[t].style.display="none",i[t].classList.remove("gallery-slider-min__item-active")};t.addEventListener("click",()=>{let t=event.target;t==n&&(0==r?(s(r),e[e.length-1].style.display="block",i[i.length-1].classList.add("gallery-slider-min__item-active"),r=e.length-1):(s(r),o(--r))),t==l&&(r<e.length-1?(s(r),o(++r)):(s(r),o(r=0))),t.matches(".gallery-slider-min__item-active")||t.matches(".gallery-slider-min__item")&&i.forEach((e,n)=>{e==t?o(r=n):s(n)})})};var s=()=>{new class{constructor({main:e,wrap:t,next:n,prev:l,position:i=0,slideToShow:r=5}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slide=document.querySelector(t).children,this.wrapper=this.main.querySelector(".wrapper"),this.next=document.querySelector(n),this.prev=document.querySelector(l),this.slideToShow=r,this.options={position:i,widthSlide:Math.floor(100/this.slideToShow)}}init(){this.addBpaClass(),this.addBpaStyle(),this.controlSlider()}addBpaClass(){this.main.classList.add("bpa-slide"),this.wrap.classList.add("bpa-slide__wrap"),this.wrapper.classList.add("bpa-wrapper");for(const e of this.slide)e.classList.add("bpa-slide__item")}addBpaStyle(){const e=document.createElement("style");e.id="sliderServices-style",e.textContent=`\n        .bpa-slide__wrap{\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .bpa-slide__item{\n          flex: 0 0 ${this.options.widthSlide}% !important;\n        }\n        .bpa-wrapper{\n          display: flex !important;\n          overflow: hidden !important;\n          flex-direction: column !important;\n          justify-content: center !important;\n        }\n      `,document.head.appendChild(e)}controlSlider(){this.next.addEventListener("click",this.nextSlider.bind(this)),this.prev.addEventListener("click",this.prevSlider.bind(this))}nextSlider(){this.options.position>=0&&this.options.position<this.slide.length-this.slideToShow&&(console.log(this.options.position),++this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}prevSlider(){this.options.position<this.slide.length&&this.options.position>0&&(console.log(this.options.position),--this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){}}({main:"#services",wrap:".services-slider",next:"#arrows-right-service",prev:"#arrows-left-service",slideToShow:5}).init()};var a=e=>{let t=document.getElementById("thanks"),n=document.createElement("div");e.addEventListener("submit",l=>{l.preventDefault(),e.appendChild(n),n.textContent="Загрузка",n.setAttribute("style","color: white; font-size:22px; position:relative; top:10px;");const i=new XMLHttpRequest;i.open("POST","../server.php"),i.addEventListener("readystatechange",l=>{let i=l.target;if(4===i.readyState)if(200==i.status){let l=new Event("click");e.parentNode.previousElementSibling&&e.parentNode.previousElementSibling.dispatchEvent(l),t.style.display="block",n.textContent=""}else t.querySelector("p").textContent="Ошибка!"}),i.setRequestHeader("Content-type","application/json");const r=new FormData(e);let o={};r.forEach((e,t)=>{o[t]=e}),i.send(JSON.stringify(o))}),t.querySelector("button").addEventListener("click",()=>{new Event("click");t.style.display="none"})};var d=()=>{document.querySelectorAll("input").forEach(e=>{"Ваше имя..."==e.placeholder&&e.addEventListener("input",e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\ ]+/g,"")}),"Ваш номер телефона..."==e.placeholder&&maskPhone(`#${e.id}`)})};var c=()=>{let e=document.getElementById("card_order"),t=e.querySelector("#price-total"),n=e.querySelector("#promocode");e.addEventListener("click",l=>{l.target;let i=e.querySelectorAll("input:checked");const r=e=>{e-=.3*e,t.textContent=e},o=(e,l,o,s)=>{1==i[0].value&&(t.textContent=e,n&&"ТЕЛО2019"==n.value&&r(e)),6==i[0].value&&(t.textContent=l,n&&"ТЕЛО2019"==n.value&&r(l)),9==i[0].value&&(t.textContent=o,n&&"ТЕЛО2019"==n.value&&r(o)),12==i[0].value&&(t.textContent=s,n&&"ТЕЛО2019"==n.value&&r(s))};i[1]&&"mozaika"==i[1].value&&o(1990,9990,13900,19900),i[1]&&"schelkovo"==i[1].value&&o(2990,14990,21900,24900)}),n&&n.addEventListener("input",()=>{"ТЕЛО2019"==n.value&&(t.textContent=Number(t.textContent)-.3*Number(t.textContent))})};var p=()=>{let e=document.querySelector(".top-menu"),t=document.getElementById("totop"),n=document.querySelector(".popup-menu"),l=document.querySelector("#burger-menu");t.style.display="none",screen.width&&e.setAttribute("style","display:block;"),window.addEventListener("scroll",()=>{pageYOffset>200?(e.style.position="fixed",t.style.display="block"):(e.style.position="",t.style.display="none")}),l.addEventListener("click",()=>{n.style.display="block"}),n.addEventListener("click",e=>{let t=e.target;"A"!=t.tagName&&"IMG"!=t.tagName||(n.style.display="none")})};window.addEventListener("DOMContentLoaded",()=>{l(),i(),r(),o(),s();let e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("banner-form"),u=document.getElementById("footer_form"),y=document.getElementById("card_order");a(e),a(t),a(n),a(u),a(y),d(),c(),p()})}]);