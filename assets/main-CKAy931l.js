import{b as w}from"./vendor-Bcn1fxYS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="/",a=(i="")=>i?/^(https?:)?\/\//.test(i)||i.startsWith("mailto:")||i.startsWith("tel:")?i:i.startsWith("#")?`${m}${i}`:`${m}${i.replace(/^\//,"")}`:m,T=(i="")=>a(i),n={name:"Universidad Politécnica de Baja California",shortName:"UPBC",description:"Formando profesionales de excelencia",baseUrl:m,social:{facebook:"https://www.facebook.com/UPBCUNIVERSIDAD",instagram:"https://www.instagram.com/upbcuniversidad/",youtube:"https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA",siaaxAlumnos:"https://www2.upbc.edu.mx/alumnos/siaax/",siaax:"https://www2.upbc.edu.mx/siaax/Defaultx.aspx"},routes:{home:a(""),universidad:{historia:a("src/pages/historia.html"),misionVision:a("src/pages/mision-vision.html"),directorio:a("src/pages/directorio.html"),instalaciones:a("src/pages/instalaciones.html")},ofertaEducativa:{carreras:a("src/pages/carreras.html"),posgrados:a("src/pages/posgrados.html"),educacionContinua:a("src/pages/educacion-continua.html"),modalidadesEspeciales:a("oferta-educativa/modalidades-especiales/")},admisiones:{requisitos:a("admisiones/requisitos/"),procesoInscripcion:a("admisiones/proceso-inscripcion/"),calendario:a("src/pages/calendario.html"),costos:a("admisiones/costos/")},vidaUniversitaria:{main:a("src/pages/vida-universitaria.html"),vidaEstudiantil:a("src/pages/vida-estudiantil.html"),convivenciaEquidad:a("src/pages/convivencia-equidad.html"),eventosEspeciales:a("src/pages/eventos-especiales.html"),bienestarSalud:a("src/pages/bienestar-salud.html")},servicios:{biblioteca:a("servicios/biblioteca/"),laboratorios:a("servicios/laboratorios/"),serviciosEscolares:a("servicios/servicios-escolares/"),becas:a("src/pages/becas.html")}}},x=[{label:"Inicio",url:a(""),type:"link"},{label:"Universidad",type:"dropdown",items:[{label:"Historia",url:a("src/pages/historia.html")},{label:"Misión y visión",url:a("src/pages/mision-vision.html")},{label:"Directorio",url:a("src/pages/directorio.html")},{label:"Instalaciones",url:a("src/pages/instalaciones.html")}]},{label:"Oferta educativa",type:"dropdown",items:[{label:"Carreras",url:a("src/pages/carreras.html")},{label:"Posgrados",url:a("src/pages/posgrados.html")},{label:"Educación continua",url:a("src/pages/educacion-continua.html")},{label:"Modalidades especiales",url:a("oferta-educativa/modalidades-especiales/")}]},{label:"Admisiones",type:"dropdown",items:[{label:"Requisitos",url:a("admisiones/requisitos/")},{label:"Proceso de inscripción",url:a("admisiones/proceso-inscripcion/")},{label:"Calendario escolar",url:a("src/pages/calendario.html")},{label:"Costos",url:a("admisiones/costos/")}]},{label:"Vida universitaria",url:a("src/pages/vida-universitaria.html"),type:"dropdown",items:[{label:"Vida Estudiantil",url:a("src/pages/vida-estudiantil.html")},{label:"Convivencia y Equidad",url:a("src/pages/convivencia-equidad.html")},{label:"Eventos Especiales",url:a("src/pages/eventos-especiales.html")},{label:"Bienestar y Salud",url:a("src/pages/bienestar-salud.html")}]},{label:"Servicios",type:"dropdown",items:[{label:"Biblioteca",url:a("servicios/biblioteca/")},{label:"Laboratorios",url:a("servicios/laboratorios/")},{label:"Servicios escolares",url:a("servicios/servicios-escolares/")},{label:"Becas",url:a("src/pages/becas.html")}]},{label:"Contacto",url:a("#contact"),type:"link"}];function l(i,e=document){return e.querySelector(i)}function h(i,e=document){return Array.from(e.querySelectorAll(i))}function u(i,e,o,s={}){i&&(typeof i=="string"&&(i=l(i)),i&&i.addEventListener(e,o,s))}function d(i,...e){i&&i.classList.add(...e)}function p(i,...e){i&&i.classList.remove(...e)}function C(i,e){i&&i.classList.toggle(e)}function B(i){i&&(i.innerHTML="")}function M(i){document.readyState!=="loading"?i():document.addEventListener("DOMContentLoaded",i)}function S(i,e=250){let o;return function(...t){const r=()=>{clearTimeout(o),i(...t)};clearTimeout(o),o=setTimeout(r,e)}}const f=n.baseUrl,v=i=>`${f}${i.replace(/^\//,"")}`,b=i=>{try{const{pathname:e}=new URL(i,window.location.origin),o=f.endsWith("/")?f.slice(0,-1):f;let s=e;return o&&o!=="/"&&s.startsWith(o)&&(s=s.slice(o.length)),s||"/"}catch{return i.startsWith("#")?"#":i||"/"}};class ${constructor(e){this.container=typeof e=="string"?l(e):e,this.isMobileMenuOpen=!1,this.init()}init(){if(!this.container){console.error("Navbar: Container not found");return}this.render(),this.attachEvents()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){return`
      ${this.getSubHeaderTemplate()}
      ${this.getMainHeaderTemplate()}
    `}getSubHeaderTemplate(){return`
      <div class="sub-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="left-content">
                <p>Bienvenidos a la <em>${n.name}</em> - ${n.description}</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="right-icons">
                <ul>
                  <li><a href="${n.social.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="${n.social.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="${n.social.youtube}" target="_blank" rel="noopener" title="YouTube"><i class="fa fa-youtube"></i></a></li>
                  <li><a href="${n.social.siaaxAlumnos}" target="_blank" rel="noopener" title="SIAAX Alumnos"><i class="fa fa-user"></i></a></li>
                  <li><a href="${n.social.siaax}" target="_blank" rel="noopener" title="SIAAX"><i class="fa fa-graduation-cap"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}getMainHeaderTemplate(){return`
      <header class="header-area header-sticky">
        <div class="mobile-menu-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <!-- Logo -->
                <a href="${n.routes.home}" class="logo">
                  <img src="${v("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" 
                       alt="Logo ${n.shortName}" 
                       class="navbar-logo-img">
                </a>

                <!-- Menu Container -->
                <div class="menu-container">
                  <div class="menu-wrapper">
                    <ul class="nav single-row-menu">
                      <!-- Mobile Logo -->
                      <div class="mobile-menu-logo" style="display: none;">
            <img src="${v("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" 
                             alt="Logo ${n.shortName}" 
                             class="navbar-logo-img">
                        <div class="mobile-menu-close"><i class="fa fa-times"></i></div>
                      </div>

                      ${this.getMenuItemsTemplate()}

                      <!-- Mobile Search -->
                      <li class="mobile-search">
                        <div class="search-container">
                          <input type="text" placeholder="Buscar..." class="search-input">
                          <button class="search-btn"><i class="fa fa-search"></i></button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Mobile Menu Toggle -->
                <div class="menu-trigger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `}getMenuItemsTemplate(){return x.map(e=>e.type==="dropdown"?`
          <li class="has-sub">
            <a href="${e.url||"javascript:void(0)"}">${e.label}</a>
            <ul class="sub-menu">
              ${e.items.map(o=>`
                <li><a href="${o.url}">${o.label}</a></li>
              `).join("")}
            </ul>
          </li>
        `:`
          <li class="scroll-to-section">
            <a href="${e.url}" class="nav-link-${e.label.toLowerCase()}">${e.label}</a>
          </li>
        `).join("")}attachEvents(){const e=l(".menu-trigger",this.container),o=l(".mobile-menu-overlay",this.container),s=l(".mobile-menu-close",this.container);l(".menu-container",this.container),e&&u(e,"click",()=>this.toggleMobileMenu()),o&&u(o,"click",()=>this.closeMobileMenu()),s&&u(s,"click",()=>this.closeMobileMenu()),h(".has-sub",this.container).forEach(r=>{const c=l("a",r);u(c,"click",y=>{window.innerWidth<=992&&(y.preventDefault(),C(r,"active"))})}),window.addEventListener("scroll",()=>this.handleScroll()),this.highlightActiveLink()}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen;const e=l(".menu-container",this.container),o=l(".mobile-menu-overlay",this.container),s=document.body;this.isMobileMenuOpen?(d(e,"active"),d(o,"active"),d(s,"menu-open")):this.closeMobileMenu()}closeMobileMenu(){this.isMobileMenuOpen=!1;const e=l(".menu-container",this.container),o=l(".mobile-menu-overlay",this.container),s=document.body;p(e,"active"),p(o,"active"),p(s,"menu-open")}handleScroll(){const e=l("header",this.container);e&&(window.scrollY>50?d(e,"background-header"):p(e,"background-header"))}highlightActiveLink(){const e=b(window.location.href);h(".nav a",this.container).forEach(s=>{const t=s.getAttribute("href"),r=b(t||s.href);(r===e||r!=="/"&&e.startsWith(r))&&d(s.parentElement,"active")})}destroy(){this.container.innerHTML=""}}const k=n.baseUrl,L=i=>`${k}${i.replace(/^\//,"")}`;class E{constructor(e){this.container=typeof e=="string"?l(e):e,this.init()}init(){if(!this.container){console.error("Footer: Container not found");return}this.render()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){const e=new Date().getFullYear(),{routes:o,social:s}=n;return`
      <footer>
        <div class="container">
          <div class="row">
            <!-- Columna 1: Logo y descripción -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>UPBC</h4>
                <img src="${L("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" alt="Logo UPBC" class="img-fluid mb-3" style="max-width: 200px;">
                <p>Universidad Politécnica de Baja California - Formando profesionales de excelencia desde 2006.</p>
              </div>
            </div>
            
            <!-- Columna 2: Enlaces útiles -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>Enlaces útiles</h4>
                <ul class="footer-links">
                  <li><a href="${o.universidad.directorio}">Directorio</a></li>
                  <li><a href="#">Aviso de privacidad</a></li>
                  <li><a href="#">Términos y condiciones</a></li>
                  <li><a href="#">Preguntas frecuentes</a></li>
                  <li><a href="#">Mapa del sitio</a></li>
                </ul>
              </div>
            </div>
            
            <!-- Columna 3: Contacto -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>Contacto</h4>
                <ul class="footer-contact">
                  <li><i class="fa fa-map-marker"></i> Av Claridad, Plutarco Elías Calles, 21376 Mexicali, B.C.</li>
                  <li><i class="fa fa-phone"></i> (686) 104-2727</li>
                  <li><i class="fa fa-envelope"></i> contacto@upbc.edu.mx</li>
                  <li><i class="fa fa-clock-o"></i> Lun - Vie: 8:00 AM - 5:00 PM</li>
                </ul>
              </div>
            </div>
            
            <!-- Columna 4: Redes sociales y mapa -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>Síguenos</h4>
                <div class="footer-social" style="display: flex; justify-content: space-between; gap: 8px; margin-bottom: 20px;">
                  <a href="${s.facebook}" target="_blank" aria-label="Facebook" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="${s.instagram}" target="_blank" aria-label="Instagram" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="${s.youtube}" target="_blank" aria-label="YouTube" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="https://twitter.com/upbcuniversidad" target="_blank" aria-label="Twitter" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="${s.siaax}" target="_blank" aria-label="SIAX" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-graduation-cap"></i>
                  </a>
                </div>
                
                <!-- Mapa de Google -->
                <div class="footer-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.2632186748024!2d-115.37956612529813!3d32.62581319169947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d773e2203385c1%3A0x964adac652c8fcc0!2sUniversidad%20Polit%C3%A9cnica%20De%20Baja%20California!5e0!3m2!1ses!2smx!4v1757693223063!5m2!1ses!2smx" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Línea divisoria -->
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-text">
                <hr>
                <p>&copy; ${e} Universidad Politécnica de Baja California. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `}destroy(){this.container.innerHTML=""}}class P{constructor(e={}){this.options={navbarContainer:"#navbar-container",footerContainer:"#footer-container",...e},this.navbar=null,this.footer=null}init(){M(()=>{this.initNavbar(),this.initFooter(),this.onReady()})}initNavbar(){const e=document.querySelector(this.options.navbarContainer);e&&(this.navbar=new $(e))}initFooter(){const e=document.querySelector(this.options.footerContainer);e&&(this.footer=new E(e))}onReady(){}destroy(){this.navbar&&this.navbar.destroy(),this.footer&&this.footer.destroy()}}window.bootstrap=w;const g=new P;g.init();console.log("🚀 UPBC Web v2.0 - Inicializado correctamente");window.app=g;export{T as a,d as b,B as c,S as d,M as r,l as s};
