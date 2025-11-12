import{a as l}from"./news-DhjLhEWd.js";import{r as d,s as u,a as f,c as p,b as m}from"./main-Dv7ROdF4.js";const h={container:"#news-page"},o={href:"/index.html#meetings",label:"Volver a Novedades"},$=[{id:"facebook",icon:"fa-facebook",label:"Facebook"},{id:"twitter",icon:"fa-twitter",label:"Twitter"},{id:"whatsapp",icon:"fa-whatsapp",label:"WhatsApp"},{id:"email",icon:"fa-envelope",label:"Correo"}];function g(e){if(!e)return;const{metaTitle:t,metaDescription:a,title:r}=e,n=t||r;n&&(document.title=n,i("property","og:title",n),i("name","twitter:title",n)),a&&(i("name","description",a,!0),i("property","og:description",a),i("name","twitter:description",a))}function i(e,t,a,r=!1){let n=document.querySelector(`meta[${e}="${t}"]`);if(!n){if(r&&(n=document.querySelector('meta[name="description"]'),n)){n.setAttribute("content",a);return}n=document.createElement("meta"),n.setAttribute(e,t),document.head.appendChild(n)}typeof a=="string"&&n.setAttribute("content",a)}function c(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat("es-MX",{day:"numeric",month:"long",year:"numeric"}).format(t)}catch(t){return console.warn("[NewsPage] No se pudo formatear la fecha:",t),e}}function v(e){if(!e||e.showMeta===!1)return[];if(Array.isArray(e.meta)&&e.meta.length)return e.meta;const t=[];return e.publishDate&&t.push({icon:"fa-calendar",label:e.displayDate||c(e.publishDate)}),e.author&&t.push({icon:"fa-user",label:e.author}),e.location&&t.push({icon:"fa-map-marker",label:e.location}),Array.isArray(e.tags)&&e.tags.length&&t.push({icon:"fa-tag",label:e.tags.join(", ")}),t}function y(e){const t=v(e),a=["Novedades"];e.category&&a.push(e.category);const r=e.subtitle||e.summary||"";return`
    <section class="page-title news-page-title">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h6>${a.join(" &raquo; ")}</h6>
            <h2>${e.title||""}</h2>
            ${r?`<p class="news-summary">${r}</p>`:""}
            ${t.length?b(t):""}
          </div>
        </div>
      </div>
    </section>
  `}function b(e){return`
    <ul class="news-meta">
      ${e.map(a=>`
    <li class="news-meta-item">
      ${a.icon?`<i class="fa ${a.icon}"></i>`:""}
      <span>${a.label}</span>
    </li>
  `).join("")}
    </ul>
  `}function w(e){return!e.cover||e.showCover===!1?"":`
    <figure class="news-cover">
      <img src="${e.cover.src}" alt="${e.cover.alt||""}">
      ${e.cover.caption?`<figcaption>${e.cover.caption}</figcaption>`:""}
    </figure>
  `}function A(e){return e.showDateInBody!==!1&&e.publishDate?`
    <div class="news-date">
      <i class="fa fa-calendar"></i>
      <span>${e.displayDate||c(e.publishDate)}</span>
    </div>
  `:""}function N(e=[]){return!Array.isArray(e)||!e.length?"":e.map(T).join("")}function s(e=""){return e.replace(/\n+/g,"<br>")}function T(e){if(!e||typeof e!="object")return"";switch(e.type){case"paragraph":return`<p>${s(e.text||"")}</p>`;case"image":return`
        <div class="news-image-container">
          <img src="${e.src}" alt="${e.alt||""}">
          ${e.caption?`<small>${e.caption}</small>`:""}
        </div>
      `;case"imageGrid":return!Array.isArray(e.images)||!e.images.length?"":`
        <div class="news-images-grid">
          ${e.images.map(t=>`
            <img src="${t.src}" alt="${t.alt||""}">
          `).join("")}
        </div>
      `;case"gallery":return!Array.isArray(e.images)||!e.images.length?"":`
        ${e.title?`<h3 class="news-section-title">${e.title}</h3>`:""}
        <div class="news-gallery">
          ${e.images.map(t=>`
            <div class="gallery-item">
              <img src="${t.src}" alt="${t.alt||""}">
            </div>
          `).join("")}
        </div>
      `;case"list":return!Array.isArray(e.items)||!e.items.length?"":C(e);default:return console.warn("[NewsPage] Tipo de bloque no soportado:",e.type),""}}function C(e){const a=e.style==="ordered"?"ol":"ul",r=e.items.map(n=>typeof n=="string"?`<li>${n}</li>`:`<li>${n.text||""}</li>`).join("");return`
    <${a} class="news-body-list">
      ${r}
    </${a}>
  `}function D(e=[]){return!Array.isArray(e)||!e.length?"":e.map(t=>{if(!t||typeof t!="object")return"";if(t.type==="text")return`
        <div class="sidebar-item">
          ${t.title?`<h4>${t.title}</h4>`:""}
          ${t.text?`<p>${s(t.text)}</p>`:""}
        </div>
      `;if(t.type==="list"){if(!Array.isArray(t.items)||!t.items.length)return"";const a=t.items.map(r=>{const n=typeof r=="string"?{text:r}:r;return`
          <li>
            ${n.icon?`<i class="${n.icon}"></i>`:""}
            <span>${n.text||""}</span>
          </li>
        `}).join("");return`
        <div class="sidebar-item">
          ${t.title?`<h4>${t.title}</h4>`:""}
          <ul class="news-sidebar-list">
            ${a}
          </ul>
        </div>
      `}return console.warn("[NewsPage] Tipo de bloque en sidebar no soportado:",t.type),""}).join("")}function x(e){const t=e?.cta;if(!(e?.ctaEnabled!==!1&&t&&typeof t=="object"))return"";const r=t.buttonLabel&&t.buttonUrl;return`
    <section class="news-cta">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            ${t.title?`<h3>${t.title}</h3>`:""}
            ${t.text?`<p>${s(t.text)}</p>`:""}
            ${r?`<a href="${t.buttonUrl}" class="news-cta-button">${t.buttonLabel}</a>`:""}
          </div>
        </div>
      </div>
    </section>
  `}function j(e){const t=e.shareEnabled!==!1,a=L(e.backLink),r=t?E():"";return!r&&!a?"":`
    <div class="news-footer">
      ${r}
      ${a}
    </div>
  `}function E(){return`
    <div class="news-share">
      <h4>Compartir esta noticia:</h4>
      <div class="share-buttons">
        ${$.map(t=>`
    <a href="#" class="share-button" data-share-platform="${t.id}" title="Compartir en ${t.label}">
      <i class="fa ${t.icon}"></i>
    </a>
  `).join("")}
      </div>
    </div>
  `}function L(e){const t={...o,...e||{}};return t.href?`
    <a href="${t.href}" class="back-link">
      <i class="fa fa-arrow-left"></i>
      <span>${t.label||o.label}</span>
    </a>
  `:""}function P(e){const t=m(".share-button",e);t.length&&t.forEach(a=>{a.addEventListener("click",r=>{r.preventDefault();const n=a.dataset.sharePlatform;S(n)})})}function S(e){const t=encodeURIComponent(window.location.href),a=encodeURIComponent(document.title);switch(e){case"facebook":window.open(`https://www.facebook.com/sharer/sharer.php?u=${t}&t=${a}`,"_blank");break;case"twitter":window.open(`https://twitter.com/intent/tweet?url=${t}&text=${a}`,"_blank");break;case"whatsapp":window.open(`https://api.whatsapp.com/send?text=${a}%20${t}`,"_blank");break;case"email":window.location.href=`mailto:?subject=${a}&body=Te comparto esta noticia: ${decodeURIComponent(t)}`;break;default:console.warn("[NewsPage] Plataforma de compartido no soportada:",e)}}function B(e){const t=Array.isArray(e.sidebar)&&e.sidebar.length,a=t?"col-lg-8 news-main":"col-lg-10 offset-lg-1 news-main",r=t?`<div class="col-lg-4">
        <aside class="sidebar news-sidebar">
          ${D(e.sidebar)}
        </aside>
      </div>`:"";return`
    ${y(e)}
    <section class="page-content news-page-content">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="${a}">
            ${w(e)}
            ${A(e)}
            <div class="news-body">
              ${N(e.body)}
            </div>
            ${j(e)}
          </div>
          ${r}
        </div>
      </div>
    </section>
    ${x(e)}
  `}function I(e){e.innerHTML=`
    <section class="news-error">
      <div class="container">
        <h2>Contenido no disponible</h2>
        <p>No encontramos la noticia solicitada. Por favor, regresa a la sección de novedades.</p>
      </div>
    </section>
  `}function M(e,t={}){const a={...h,...t};d(()=>{const r=u(a.container);if(!r){console.error(`[NewsPage] Contenedor no encontrado: ${a.container}`);return}const n=l[e];if(f(r,"news-page"),p(r),!n){console.error(`[NewsPage] Noticia no encontrada para el slug: ${e}`),I(r);return}g(n),r.innerHTML=B(n),P(r)})}function F(e,t){M(e,t)}export{F as b};
