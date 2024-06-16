import{S as l,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function u(o){const r="https://pixabay.com",t="/api",a=new URLSearchParams({key:"44394535-420bbb6d9539431cf03571547",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${t}/?${a.toString()}`;return fetch(e)}function d({webformatURL:o,largeImageURL:r,tags:t,likes:a,views:e,comments:s,downloads:n}){return`<li class="list-item">
    <div class="box-image">
      <a href="${r}" class="list-link">
        <img src="${o}" alt="${t}" title="${t}">
      </a>
    </div>
    <div class="stats-box">
      <div class="likes-box">
        <span class="text">Likes</span>
        <span class="value">${a}</span>
      </div>
      <div class="views-box">
        <span class="text">Views</span>
        <span class="value">${e}</span>
      </div>
      <div class="comments-box">
        <span class="text">Comments</span>
        <span class="value">${s}</span>
      </div>
      <div class="downloads-box">
        <span class="text">Downloads</span>
        <span class="value">${n}</span>
      </div>
    </div>
  </li>`}function m(o){return o.map(d).join("")}let f=new l(".list-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:200});const i={formEl:document.querySelector(".search-box"),inputEl:document.querySelector("#search-image"),searchBtn:document.querySelector(".search-btn"),listEl:document.querySelector(".image-list"),loader:document.querySelector(".load-box")};i.formEl.addEventListener("submit",p);function p(o){o.preventDefault(),i.listEl.innerHTML="";const r=i.inputEl.value.trim();r!==""&&(h(),u(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({hits:t,...a})=>{if(t.length===0)throw new Error;const e=m(t);i.listEl.innerHTML=e,f.refresh()}).catch(t=>c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:16,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b",maxWidth:432})).finally(()=>{g()}),i.formEl.reset())}function h(){i.loader.classList.remove("load-box")}function g(){i.loader.classList.add("load-box")}
//# sourceMappingURL=commonHelpers.js.map
