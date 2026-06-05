import{a as f,S as p,i as m}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="56162329-704add285f418fdbebe47467d",y="https://pixabay.com/api/";function l(n){const o=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`${y}?${o}`).then(t=>t.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(){u.innerHTML=""}function w(n){const o=n.map(t=>`
            <li class="gallery-item">
                <a href="${t.largeImageURL}">
                    <img
                     src="${t.webformatURL}"
                     alt="${t.tags}" 
                     />
                </a>
                <div class="info">
                <p> Likes: ${t.likes}</p>
                <p> Views: ${t.views}</p>
                <p> Comments: ${t.comments}</p>
                <p> Downloads: ${t.downloads}</p>
                </div>
            </li>
        `).join("");u.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}function i(n){m.error({message:n,position:"topRight"})}const c=document.querySelector(".form");c.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();o&&(L(),b(),l(o).then(t=>{const a=t.hits;if(!a.length){i("Sorry, there are no images matching your search query. Please try again.");return}w(a)}).catch(()=>{i("Something went wrong. Please try again later.")}).finally(()=>{S()}),c.reset())});l("cat").then(console.log);
//# sourceMappingURL=index.js.map
