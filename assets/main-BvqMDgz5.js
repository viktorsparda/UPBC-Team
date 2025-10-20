import{b as w}from"./vendor-Bcn1fxYS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="/UPBC-Team/",i=(a="")=>a?/^(https?:)?\/\//.test(a)||a.startsWith("mailto:")||a.startsWith("tel:")?a:a.startsWith("#")?`${m}${a}`:`${m}${a.replace(/^\//,"")}`:m,T=(a="")=>i(a),n={name:"Universidad Politécnica de Baja California",shortName:"UPBC",description:"Formando profesionales de excelencia",baseUrl:m,social:{facebook:"https://www.facebook.com/UPBCUNIVERSIDAD",instagram:"https://www.instagram.com/upbcuniversidad/",youtube:"https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA",siaaxAlumnos:"https://www2.upbc.edu.mx/alumnos/siaax/",siaax:"https://www2.upbc.edu.mx/siaax/Defaultx.aspx"},routes:{home:i(""),universidad:{historia:i("src/pages/historia.html"),misionVision:i("src/pages/mision-vision.html"),directorio:i("src/pages/directorio.html"),instalaciones:i("src/pages/instalaciones.html")},ofertaEducativa:{carreras:i("src/pages/carreras.html"),posgrados:i("src/pages/posgrados.html"),educacionContinua:i("src/pages/educacion-continua.html"),modalidadesEspeciales:i("oferta-educativa/modalidades-especiales/")},admisiones:{requisitos:i("admisiones/requisitos/"),procesoInscripcion:i("admisiones/proceso-inscripcion/"),calendario:i("src/pages/calendario.html"),costos:i("admisiones/costos/")},vidaUniversitaria:{main:i("src/pages/vida-universitaria.html"),vidaEstudiantil:i("src/pages/vida-estudiantil.html"),convivenciaEquidad:i("src/pages/convivencia-equidad.html"),eventosEspeciales:i("src/pages/eventos-especiales.html"),bienestarSalud:i("src/pages/bienestar-salud.html")},servicios:{biblioteca:i("servicios/biblioteca/"),laboratorios:i("servicios/laboratorios/"),serviciosEscolares:i("servicios/servicios-escolares/"),becas:i("src/pages/becas.html")}}},C=[{label:"Inicio",url:i(""),type:"link"},{label:"Universidad",type:"dropdown",items:[{label:"Historia",url:i("src/pages/historia.html")},{label:"Misión y visión",url:i("src/pages/mision-vision.html")},{label:"Directorio",url:i("src/pages/directorio.html")},{label:"Instalaciones",url:i("src/pages/instalaciones.html")}]},{label:"Oferta educativa",type:"dropdown",items:[{label:"Carreras",url:i("src/pages/carreras.html")},{label:"Posgrados",url:i("src/pages/posgrados.html")},{label:"Educación continua",url:i("src/pages/educacion-continua.html")},{label:"Modalidades especiales",url:i("oferta-educativa/modalidades-especiales/")}]},{label:"Admisiones",type:"dropdown",items:[{label:"Requisitos",url:i("admisiones/requisitos/")},{label:"Proceso de inscripción",url:i("admisiones/proceso-inscripcion/")},{label:"Calendario escolar",url:i("src/pages/calendario.html")},{label:"Costos",url:i("admisiones/costos/")}]},{label:"Vida universitaria",url:i("src/pages/vida-universitaria.html"),type:"dropdown",items:[{label:"Vida Estudiantil",url:i("src/pages/vida-estudiantil.html")},{label:"Convivencia y Equidad",url:i("src/pages/convivencia-equidad.html")},{label:"Eventos Especiales",url:i("src/pages/eventos-especiales.html")},{label:"Bienestar y Salud",url:i("src/pages/bienestar-salud.html")}]},{label:"Servicios",type:"dropdown",items:[{label:"Biblioteca",url:i("servicios/biblioteca/")},{label:"Laboratorios",url:i("servicios/laboratorios/")},{label:"Servicios escolares",url:i("servicios/servicios-escolares/")},{label:"Becas",url:i("src/pages/becas.html")}]},{label:"Contacto",url:i("#contact"),type:"link"}];function l(a,e=document){return e.querySelector(a)}function h(a,e=document){return Array.from(e.querySelectorAll(a))}function u(a,e,o,s={}){a&&(typeof a=="string"&&(a=l(a)),a&&a.addEventListener(e,o,s))}function d(a,...e){a&&a.classList.add(...e)}function p(a,...e){a&&a.classList.remove(...e)}function x(a,e){a&&a.classList.toggle(e)}function B(a){a&&(a.innerHTML="")}function M(a){document.readyState!=="loading"?a():document.addEventListener("DOMContentLoaded",a)}function S(a,e=250){let o;return function(...t){const r=()=>{clearTimeout(o),a(...t)};clearTimeout(o),o=setTimeout(r,e)}}const f=n.baseUrl,v=a=>`${f}${a.replace(/^\//,"")}`,b=a=>{try{const{pathname:e}=new URL(a,window.location.origin),o=f.endsWith("/")?f.slice(0,-1):f;let s=e;return o&&o!=="/"&&s.startsWith(o)&&(s=s.slice(o.length)),s||"/"}catch{return a.startsWith("#")?"#":a||"/"}};class ${constructor(e){this.container=typeof e=="string"?l(e):e,this.isMobileMenuOpen=!1,this.init()}init(){if(!this.container){console.error("Navbar: Container not found");return}this.render(),this.attachEvents()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){return`
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
    `}getMenuItemsTemplate(){return C.map(e=>e.type==="dropdown"?`
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
        `).join("")}attachEvents(){const e=l(".menu-trigger",this.container),o=l(".mobile-menu-overlay",this.container),s=l(".mobile-menu-close",this.container);l(".menu-container",this.container),e&&u(e,"click",()=>this.toggleMobileMenu()),o&&u(o,"click",()=>this.closeMobileMenu()),s&&u(s,"click",()=>this.closeMobileMenu()),h(".has-sub",this.container).forEach(r=>{const c=l("a",r);u(c,"click",y=>{window.innerWidth<=992&&(y.preventDefault(),x(r,"active"))})}),window.addEventListener("scroll",()=>this.handleScroll()),this.highlightActiveLink()}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen;const e=l(".menu-container",this.container),o=l(".mobile-menu-overlay",this.container),s=document.body;this.isMobileMenuOpen?(d(e,"active"),d(o,"active"),d(s,"menu-open")):this.closeMobileMenu()}closeMobileMenu(){this.isMobileMenuOpen=!1;const e=l(".menu-container",this.container),o=l(".mobile-menu-overlay",this.container),s=document.body;p(e,"active"),p(o,"active"),p(s,"menu-open")}handleScroll(){const e=l("header",this.container);e&&(window.scrollY>50?d(e,"background-header"):p(e,"background-header"))}highlightActiveLink(){const e=b(window.location.href);h(".nav a",this.container).forEach(s=>{const t=s.getAttribute("href"),r=b(t||s.href);(r===e||r!=="/"&&e.startsWith(r))&&d(s.parentElement,"active")})}destroy(){this.container.innerHTML=""}}const k=n.baseUrl,L=a=>`${k}${a.replace(/^\//,"")}`;class E{constructor(e){this.container=typeof e=="string"?l(e):e,this.init()}init(){if(!this.container){console.error("Footer: Container not found");return}this.render()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){const e=new Date().getFullYear(),{routes:o,social:s}=n;return`
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
