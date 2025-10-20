import{b as h}from"./vendor-Bcn1fxYS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const l={name:"Universidad Politécnica de Baja California",shortName:"UPBC",description:"Formando profesionales de excelencia",social:{facebook:"https://www.facebook.com/UPBCUNIVERSIDAD",instagram:"https://www.instagram.com/upbcuniversidad/",youtube:"https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA",siaaxAlumnos:"https://www2.upbc.edu.mx/alumnos/siaax/",siaax:"https://www2.upbc.edu.mx/siaax/Defaultx.aspx"}},b=[{label:"Inicio",url:"/",type:"link"},{label:"Universidad",type:"dropdown",items:[{label:"Historia",url:"/src/pages/historia.html"},{label:"Misión y visión",url:"/src/pages/mision-vision.html"},{label:"Directorio",url:"/src/pages/directorio.html"},{label:"Instalaciones",url:"/src/pages/instalaciones.html"}]},{label:"Oferta educativa",type:"dropdown",items:[{label:"Carreras",url:"/src/pages/carreras.html"},{label:"Posgrados",url:"/src/pages/posgrados.html"},{label:"Educación continua",url:"/src/pages/educacion-continua.html"},{label:"Modalidades especiales",url:"/oferta-educativa/modalidades-especiales/"}]},{label:"Admisiones",type:"dropdown",items:[{label:"Requisitos",url:"/admisiones/requisitos/"},{label:"Proceso de inscripción",url:"/admisiones/proceso-inscripcion/"},{label:"Calendario escolar",url:"/src/pages/calendario.html"},{label:"Costos",url:"/admisiones/costos/"}]},{label:"Vida universitaria",url:"/src/pages/vida-universitaria.html",type:"dropdown",items:[{label:"Vida Estudiantil",url:"/vida-universitaria/vida-estudiantil/"},{label:"Convivencia y Equidad",url:"/vida-universitaria/convivencia-equidad/"},{label:"Eventos Especiales",url:"/vida-universitaria/eventos-especiales/"},{label:"Bienestar y Salud",url:"/vida-universitaria/bienestar-salud/"}]},{label:"Servicios",type:"dropdown",items:[{label:"Biblioteca",url:"/servicios/biblioteca/"},{label:"Laboratorios",url:"/servicios/laboratorios/"},{label:"Servicios escolares",url:"/servicios/servicios-escolares/"},{label:"Becas",url:"/src/pages/becas.html"}]},{label:"Contacto",url:"/#contact",type:"link"}];function r(a,e=document){return e.querySelector(a)}function f(a,e=document){return Array.from(e.querySelectorAll(a))}function d(a,e,s,t={}){a&&(typeof a=="string"&&(a=r(a)),a&&a.addEventListener(e,s,t))}function c(a,...e){a&&a.classList.add(...e)}function u(a,...e){a&&a.classList.remove(...e)}function v(a,e){a&&a.classList.toggle(e)}function M(a){a&&(a.innerHTML="")}function g(a){document.readyState!=="loading"?a():document.addEventListener("DOMContentLoaded",a)}function k(a,e=250){let s;return function(...i){const o=()=>{clearTimeout(s),a(...i)};clearTimeout(s),s=setTimeout(o,e)}}class y{constructor(e){this.container=typeof e=="string"?r(e):e,this.isMobileMenuOpen=!1,this.init()}init(){if(!this.container){console.error("Navbar: Container not found");return}this.render(),this.attachEvents()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){return`
      ${this.getSubHeaderTemplate()}
      ${this.getMainHeaderTemplate()}
    `}getSubHeaderTemplate(){return`
      <div class="sub-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="left-content">
                <p>Bienvenidos a la <em>${l.name}</em> - ${l.description}</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="right-icons">
                <ul>
                  <li><a href="${l.social.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="${l.social.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="${l.social.youtube}" target="_blank" rel="noopener" title="YouTube"><i class="fa fa-youtube"></i></a></li>
                  <li><a href="${l.social.siaaxAlumnos}" target="_blank" rel="noopener" title="SIAAX Alumnos"><i class="fa fa-user"></i></a></li>
                  <li><a href="${l.social.siaax}" target="_blank" rel="noopener" title="SIAAX"><i class="fa fa-graduation-cap"></i></a></li>
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
                <a href="/" class="logo">
                  <img src="/assets/images/logos/UPBC_FullColor-H-FondoClaro.png" 
                       alt="Logo ${l.shortName}" 
                       class="navbar-logo-img">
                </a>

                <!-- Menu Container -->
                <div class="menu-container">
                  <div class="menu-wrapper">
                    <ul class="nav single-row-menu">
                      <!-- Mobile Logo -->
                      <div class="mobile-menu-logo" style="display: none;">
                        <img src="/assets/images/logos/UPBC_FullColor-H-FondoClaro.png" 
                             alt="Logo ${l.shortName}" 
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
    `}getMenuItemsTemplate(){return b.map(e=>e.type==="dropdown"?`
          <li class="has-sub">
            <a href="${e.url||"javascript:void(0)"}">${e.label}</a>
            <ul class="sub-menu">
              ${e.items.map(s=>`
                <li><a href="${s.url}">${s.label}</a></li>
              `).join("")}
            </ul>
          </li>
        `:`
          <li class="scroll-to-section">
            <a href="${e.url}" class="nav-link-${e.label.toLowerCase()}">${e.label}</a>
          </li>
        `).join("")}attachEvents(){const e=r(".menu-trigger",this.container),s=r(".mobile-menu-overlay",this.container),t=r(".mobile-menu-close",this.container);r(".menu-container",this.container),e&&d(e,"click",()=>this.toggleMobileMenu()),s&&d(s,"click",()=>this.closeMobileMenu()),t&&d(t,"click",()=>this.closeMobileMenu()),f(".has-sub",this.container).forEach(o=>{const n=r("a",o);d(n,"click",m=>{window.innerWidth<=992&&(m.preventDefault(),v(o,"active"))})}),window.addEventListener("scroll",()=>this.handleScroll()),this.highlightActiveLink()}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen;const e=r(".menu-container",this.container),s=r(".mobile-menu-overlay",this.container),t=document.body;this.isMobileMenuOpen?(c(e,"active"),c(s,"active"),c(t,"menu-open")):this.closeMobileMenu()}closeMobileMenu(){this.isMobileMenuOpen=!1;const e=r(".menu-container",this.container),s=r(".mobile-menu-overlay",this.container),t=document.body;u(e,"active"),u(s,"active"),u(t,"menu-open")}handleScroll(){const e=r("header",this.container);e&&(window.scrollY>50?c(e,"background-header"):u(e,"background-header"))}highlightActiveLink(){const e=window.location.pathname;f(".nav a",this.container).forEach(t=>{const i=t.getAttribute("href");(i===e||e.startsWith(i))&&c(t.parentElement,"active")})}destroy(){this.container.innerHTML=""}}class w{constructor(e){this.container=typeof e=="string"?r(e):e,this.init()}init(){if(!this.container){console.error("Footer: Container not found");return}this.render()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){return`
      <footer>
        <div class="container">
          <div class="row">
            <!-- Columna 1: Logo y descripción -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>UPBC</h4>
                <img src="/assets/images/logos/UPBC_FullColor-H-FondoClaro.png" alt="Logo UPBC" class="img-fluid mb-3" style="max-width: 200px;">
                <p>Universidad Politécnica de Baja California - Formando profesionales de excelencia desde 2006.</p>
              </div>
            </div>
            
            <!-- Columna 2: Enlaces útiles -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>Enlaces útiles</h4>
                <ul class="footer-links">
                  <li><a href="/universidad/directorio/directorio.html">Directorio</a></li>
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
                  <a href="https://www.facebook.com/UPBCUNIVERSIDAD" target="_blank" aria-label="Facebook" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/upbcuniversidad/" target="_blank" aria-label="Instagram" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA" target="_blank" aria-label="YouTube" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="https://twitter.com/upbcuniversidad" target="_blank" aria-label="Twitter" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://siax.upbc.edu.mx" target="_blank" aria-label="SIAX" style="flex: 1; text-align: center; font-size: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s;">
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
                <p>&copy; ${new Date().getFullYear()} Universidad Politécnica de Baja California. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `}destroy(){this.container.innerHTML=""}}class x{constructor(e={}){this.options={navbarContainer:"#navbar-container",footerContainer:"#footer-container",...e},this.navbar=null,this.footer=null}init(){g(()=>{this.initNavbar(),this.initFooter(),this.onReady()})}initNavbar(){const e=document.querySelector(this.options.navbarContainer);e&&(this.navbar=new y(e))}initFooter(){const e=document.querySelector(this.options.footerContainer);e&&(this.footer=new w(e))}onReady(){}destroy(){this.navbar&&this.navbar.destroy(),this.footer&&this.footer.destroy()}}window.bootstrap=h;const p=new x;p.init();console.log("🚀 UPBC Web v2.0 - Inicializado correctamente");window.app=p;export{c as a,M as c,k as d,g as r,r as s};
