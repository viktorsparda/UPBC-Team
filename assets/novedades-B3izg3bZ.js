import{r as o,s as l,a as u,c as d,S as f,g as m}from"./main-Dv7ROdF4.js";import{N as p}from"./news-DhjLhEWd.js";import"./vendor-Bcn1fxYS.js";const y={container:"#news-archive"},i={breadcrumb:"Novedades",title:"Novedades y noticias UPBC",summary:"Explora los comunicados, convenios y actividades más recientes de la Universidad Politécnica de Baja California. Mantente al día con los proyectos, logros y eventos que fortalecen nuestra comunidad universitaria."},h=new Intl.DateTimeFormat("es-MX",{day:"numeric",month:"long",year:"numeric"});function v(r){if(!r)return"";try{const e=new Date(r);return Number.isNaN(e.getTime())?r:h.format(e)}catch(e){return console.warn("[NewsList] No se pudo formatear la fecha:",e),r}}function g(r){if(!r)return"";if(r.summary)return r.summary;if(r.subtitle)return r.subtitle;const e=Array.isArray(r.body)?r.body.find(a=>a&&a.type==="paragraph"&&a.text):null;return e&&e.text?e.text:""}function $(r,e=240){if(!r||r.length<=e)return r;const a=r.slice(0,e),t=a.lastIndexOf(" ");return`${a.slice(0,t>0?t:a.length)}…`}function b(){return`
    <section class="page-title news-page-title">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h6>${i.breadcrumb}</h6>
            <h2>${i.title}</h2>
            <p class="news-summary">${i.summary}</p>
          </div>
        </div>
      </div>
    </section>
  `}function N(r=[]){return r.reduce((e,a)=>{const t=a.publishDate?new Date(a.publishDate):null,n=t&&!Number.isNaN(t.getTime())?t.getFullYear():"Sin fecha";return e[n]||(e[n]=[]),e[n].push(a),e},{})}function A(r=[]){if(!Array.isArray(r)||!r.length)return"";const e=r.filter(Boolean).map(a=>`<li>${a}</li>`).join("");return e?`
    <ul class="news-card-tags" aria-label="Etiquetas de la noticia">
      ${e}
    </ul>
  `:""}function w(r=[]){if(!Array.isArray(r))return null;for(const e of r)if(e){if(e.type==="image"&&e.src)return{src:e.src,alt:e.alt};if(e.type==="gallery"&&Array.isArray(e.images)&&e.images.length)return e.images.find(a=>a&&a.src)??null;if(e.type==="imageGrid"&&Array.isArray(e.images)&&e.images.length)return e.images.find(a=>a&&a.src)??null}return null}function T(r){if(r.cover&&r.cover.src)return r.cover;if(Array.isArray(r.body)){const e=w(r.body);if(e)return e}return null}function C(r){const e=T(r);if(!e||!e.src)return"";const a=e.alt||r.title||"Imagen de noticia";return`
    <div class="news-card-media">
      <img src="${e.src}" alt="${a}">
    </div>
  `}function D(r){const e=m(r.slug),a=v(r.publishDate),t=$(g(r));return`
    <article class="news-card">
      ${C(r)}
      <div class="news-card-content">
        ${a?`<span class="news-card-date">${a}</span>`:""}
        <h3 class="news-card-title"><a href="${e}">${r.title||"Noticia"}</a></h3>
        ${t?`<p class="news-card-summary">${t}</p>`:""}
        ${A(r.tags)}
        <a class="news-card-link" href="${e}">
          Ver detalle
          <i class="fa fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `}function E(r=[]){if(!r.length)return`
      <section class="page-content news-page-content">
        <div class="container">
          <div class="news-archive-empty">
            <h3>No hay novedades por el momento</h3>
            <p>Vuelve pronto para consultar nuevas publicaciones o visita el portal principal de la universidad.</p>
            <a class="main-button" href="${f.routes.home}">Ir al inicio</a>
          </div>
        </div>
      </section>
    `;const e=N(r);return`
    <section class="page-content news-page-content">
      <div class="container">
        ${Object.keys(e).sort((n,s)=>n==="Sin fecha"?1:s==="Sin fecha"?-1:Number(s)-Number(n)).map(n=>{const s=e[n],c=`${s.length} ${s.length===1?"publicación":"publicaciones"}`;return`
      <section class="news-archive-year" aria-labelledby="news-year-${n}">
        <div class="news-year-heading">
          <h3 id="news-year-${n}" class="news-year-title">${n}</h3>
          <span class="news-year-count">${c}</span>
        </div>
        <div class="news-archive-grid">
          ${s.map(D).join("")}
        </div>
      </section>
    `}).join("")}
      </div>
    </section>
  `}function I(r=[]){return`
    ${b()}
    ${E(r)}
  `}function F(r={}){const e={...y,...r};o(()=>{const a=l(e.container);if(!a){console.error(`[NewsList] Contenedor no encontrado: ${e.container}`);return}u(a,"news-archive-root"),d(a),a.innerHTML=I(p)})}F();
