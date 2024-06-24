import{a as m,i as p,S as x}from"./assets/vendor-53a1b719.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();m.defaults.baseURL="https://pixabay.com";async function h(s,t){const a={q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true",key:"44394535-420bbb6d9539431cf03571547"},i=await m.get("/api/",{params:a});return console.log(i),i.data}const r={formEl:document.querySelector(".search-box"),inputEl:document.querySelector("#search-image"),searchBtn:document.querySelector(".search-btn"),listEl:document.querySelector(".image-list"),loader:document.querySelector(".load-box"),loadMoreBtn:document.querySelector(".load-btn")};function w({webformatURL:s,largeImageURL:t,tags:a,likes:i,views:e,comments:o,downloads:n}){return`<li class="list-item">
    <div class="box-image">
      <a href="${t}" class="list-link">
        <img src="${s}" alt="${a}" title="${a}">
      </a>
    </div>
    <div class="stats-box">
      <div class="likes-box">
        <span class="text">Likes</span>
        <span class="value">${i}</span>
      </div>
      <div class="views-box">
        <span class="text">Views</span>
        <span class="value">${e}</span>
      </div>
      <div class="comments-box">
        <span class="text">Comments</span>
        <span class="value">${o}</span>
      </div>
      <div class="downloads-box">
        <span class="text">Downloads</span>
        <span class="value">${n}</span>
      </div>
    </div>
  </li>`}function g(s){return s.map(w).join("")}function y(){p.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:16,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b",maxWidth:432})}function b(){r.loader.classList.remove("load-box")}function d(){r.loader.classList.add("load-box")}function E(){r.loadMoreBtn.classList.remove("hidden")}function f(){r.loadMoreBtn.classList.add("hidden")}function S(){const t=r.listEl.children[0].getBoundingClientRect().height*2;window.scrollBy({top:t,behavior:"smooth"})}let v=new x(".list-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:200}),l=1,c="",u=1;const B=15;r.formEl.addEventListener("submit",M);r.loadMoreBtn.addEventListener("click",q);async function M(s){if(s.preventDefault(),r.listEl.innerHTML="",l=1,c=r.inputEl.value.trim(),c!==""){b();try{const t=await h(c,l);if(t.hits.length===0)throw new Error;u=Math.ceil(t.totalHits/B);const a=g(t.hits);r.listEl.innerHTML=a,v.refresh(),L(),d()}catch{f(),y(),d()}r.formEl.reset()}}async function q(){l++,b(),f();try{const s=await h(c,l);if(s.hits.length===0)throw new Error;const t=g(s.hits);r.listEl.insertAdjacentHTML("beforeend",t),v.refresh(),S(),d()}catch{y(),d()}L()}function L(){l>=u?(f(),u&&p.info({message:"We're sorry, but you've reached the end of search results."})):E()}
//# sourceMappingURL=commonHelpers.js.map
