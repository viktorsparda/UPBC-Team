import{b as x}from"./vendor-Bcn1fxYS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const b="/UPBC-Team/",o=(i="")=>i?/^(https?:)?\/\//.test(i)||i.startsWith("mailto:")||i.startsWith("tel:")?i:i.startsWith("#")?`${b}${i}`:`${b}${i.replace(/^\//,"")}`:b,T=(i="")=>o(i),c={name:"Universidad Politécnica de Baja California",shortName:"UPBC",description:"Formando profesionales de excelencia",baseUrl:b,social:{facebook:"https://www.facebook.com/UPBCUNIVERSIDAD",instagram:"https://www.instagram.com/upbcuniversidad/",youtube:"https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA",siaax:"https://www2.upbc.edu.mx/siaax/Defaultx.aspx"},portalLinks:[{label:"SIAAX Alumnos",url:"https://www2.upbc.edu.mx/alumnos/siaax/"},{label:"SIAAX Docentes",url:"https://www2.upbc.edu.mx/siaax/Defaultx.aspx"}],routes:{home:o(""),universidad:{historia:o("src/pages/historia.html"),misionVision:o("src/pages/mision-vision.html"),rectoria:`${o("src/pages/directorio.html")}#rectoria`,instalaciones:o("src/pages/instalaciones.html"),transparencia:"https://www.upbc.edu.mx/trans_parencia/index.html",directorio:o("src/pages/directorio.html")},ofertaEducativa:{carreras:o("src/pages/carreras.html"),posgrados:o("src/pages/posgrados.html"),educacionContinua:o("src/pages/educacion-continua.html"),modeloEducativo:`${o("src/pages/mision-vision.html")}#modelo-educativo`},admisiones:{procesoInscripcion:o("admisiones/proceso-inscripcion/"),requisitos:o("admisiones/requisitos/"),costos:o("admisiones/costos/"),becas:o("src/pages/becas.html")},servicios:{main:o("src/pages/servicios/index.html"),procedimientos:{reinscripcion:o("src/pages/servicios/procedimientos/reinscripcion.html"),credencial:o("src/pages/servicios/procedimientos/credencial.html"),constancias:o("src/pages/servicios/procedimientos/constancias.html"),cambioCarrera:o("src/pages/servicios/procedimientos/cambio-carrera.html"),prestamoDocumentos:o("src/pages/servicios/procedimientos/prestamo-documentos.html"),certificadoParcial:o("src/pages/servicios/procedimientos/certificado-parcial.html"),ecrii:o("src/pages/servicios/procedimientos/ecrii.html")},solicitudes:{prorrogaPago:o("src/pages/servicios/solicitudes/prorroga-pago.html"),bajaTemporal:o("src/pages/servicios/solicitudes/baja-temporal.html"),bajaDefinitiva:o("src/pages/servicios/solicitudes/baja-definitiva.html")},bienestar:{servicioMedico:o("src/pages/servicios/bienestar/servicio-medico.html")},soporte:{correoInstitucional:o("src/pages/servicios/soporte/correo-institucional.html")}},vidaEstudiantil:{main:o("src/pages/vida-estudiantil.html"),bienestarSalud:`${o("src/pages/vida-estudiantil.html")}#bienestar-salud`,culturaDeportes:`${o("src/pages/vida-estudiantil.html")}#cultura-deportes`,gruposEstudiantiles:`${o("src/pages/vida-estudiantil.html")}#grupos-estudiantiles`,eventos:`${o("src/pages/vida-estudiantil.html")}#eventos`},serviciosVinculacion:{biblioteca:o("servicios/biblioteca/"),laboratorios:o("servicios/laboratorios/"),centroIdiomas:"https://www.upbc.edu.mx/Universidad/cadi.html",vinculacionEstancias:"https://www.upbc.edu.mx/WVINCULACION/ESTANCIAS.HTML"},contacto:o("#contact")}},{routes:a}=c,$=[{label:"Inicio",url:a.home,type:"link"},{label:"Universidad",url:a.universidad.historia,type:"dropdown",items:[{label:"Historia",url:a.universidad.historia},{label:"Misión y Visión",url:a.universidad.misionVision},{label:"Rectoría",url:a.universidad.rectoria},{label:"Instalaciones",url:a.universidad.instalaciones},{label:"Transparencia",url:a.universidad.transparencia},{label:"Directorio",url:a.universidad.directorio}]},{label:"Oferta Educativa",url:a.ofertaEducativa.carreras,type:"dropdown",items:[{label:"Carreras",url:a.ofertaEducativa.carreras},{label:"Posgrados",url:a.ofertaEducativa.posgrados},{label:"Educación Continua",url:a.ofertaEducativa.educacionContinua},{label:"Modelo Educativo",url:a.ofertaEducativa.modeloEducativo}]},{label:"Admisiones",url:a.admisiones.procesoInscripcion,type:"dropdown",items:[{label:"Proceso de Inscripción",url:a.admisiones.procesoInscripcion},{label:"Requisitos",url:a.admisiones.requisitos},{label:"Costos",url:a.admisiones.costos},{label:"Becas",url:a.admisiones.becas}]},{label:"Vida Estudiantil",url:a.vidaEstudiantil.main,type:"dropdown",items:[{label:"Bienestar y Salud",url:a.vidaEstudiantil.bienestarSalud},{label:"Cultura y Deportes",url:a.vidaEstudiantil.culturaDeportes},{label:"Grupos Estudiantiles",url:a.vidaEstudiantil.gruposEstudiantiles},{label:"Eventos",url:a.vidaEstudiantil.eventos}]},{label:"Servicios y Vinculación",url:a.servicios.main,type:"dropdown",items:[{label:"Portal de Servicios",url:a.servicios.main},{label:"Servicios para Alumnos",items:[{label:"Reinscripción",url:a.servicios.procedimientos.reinscripcion},{label:"Constancias y Documentos",url:a.servicios.procedimientos.constancias},{label:"Credencial institucional",url:a.servicios.procedimientos.credencial},{label:"Cambio de carrera",url:a.servicios.procedimientos.cambioCarrera},{label:"Préstamo de documentos",url:a.servicios.procedimientos.prestamoDocumentos},{label:"Certificado parcial",url:a.servicios.procedimientos.certificadoParcial},{label:"ECRII (Inglés)",url:a.servicios.procedimientos.ecrii},{label:"Prórroga de pago",url:a.servicios.solicitudes.prorrogaPago},{label:"Baja temporal",url:a.servicios.solicitudes.bajaTemporal},{label:"Baja definitiva",url:a.servicios.solicitudes.bajaDefinitiva},{label:"Correo institucional",url:a.servicios.soporte.correoInstitucional}]},{label:"Servicios para Docentes",items:[{label:"SIAAX Docentes",url:c.social.siaax},{label:"Portal de servicios docentes",url:"https://www.upbc.edu.mx/SERVICIOS20/Empleados/Empleado.html"}]},{label:"Servicio Médico",url:a.servicios.bienestar.servicioMedico},{label:"Biblioteca",url:a.serviciosVinculacion.biblioteca},{label:"Laboratorios",url:a.serviciosVinculacion.laboratorios},{label:"Centro de Idiomas (CADI)",url:a.serviciosVinculacion.centroIdiomas},{label:"Vinculación y Estancias",url:a.serviciosVinculacion.vinculacionEstancias}]},{label:"Contacto",url:a.contacto,type:"link"}];function l(i,e=document){return e.querySelector(i)}function g(i,e=document){return Array.from(e.querySelectorAll(i))}function p(i,e,t,s={}){i&&(typeof i=="string"&&(i=l(i)),i&&i.addEventListener(e,t,s))}function u(i,...e){i&&i.classList.add(...e)}function m(i,...e){i&&i.classList.remove(...e)}function M(i,e){i&&i.classList.toggle(e)}function B(i){i&&(i.innerHTML="")}function E(i){document.readyState!=="loading"?i():document.addEventListener("DOMContentLoaded",i)}function U(i,e=250){let t;return function(...r){const n=()=>{clearTimeout(t),i(...r)};clearTimeout(t),t=setTimeout(n,e)}}const h=c.baseUrl,y=i=>`${h}${i.replace(/^\//,"")}`,w=i=>{try{const{pathname:e}=new URL(i,window.location.origin),t=h.endsWith("/")?h.slice(0,-1):h;let s=e;return t&&t!=="/"&&s.startsWith(t)&&(s=s.slice(t.length)),s||"/"}catch{return i.startsWith("#")?"#":i||"/"}},v=(i="")=>/^(https?:)?\/\//.test(i)||i.startsWith("mailto:")||i.startsWith("tel:");class L{constructor(e){this.container=typeof e=="string"?l(e):e,this.isMobileMenuOpen=!1,this.init()}init(){if(!this.container){console.error("Navbar: Container not found");return}this.render(),this.attachEvents()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){return`
      ${this.getSubHeaderTemplate()}
      ${this.getMainHeaderTemplate()}
    `}getSubHeaderTemplate(){const e=c.portalLinks??[],t=c.social??{};return`
      <div class="sub-header">
        <div class="container">
          <div class="sub-header-top">
            <nav class="portal-menu" aria-label="Accesos para la comunidad UPBC">
              <ul>
                ${e.map(s=>`
                  <li>
                    <a href="${s.url}" ${v(s.url)?'target="_blank" rel="noopener"':""}>${s.label}</a>
                  </li>
                `).join("")}
              </ul>
            </nav>
            <div class="right-icons" aria-label="Redes sociales">
              <ul>
                <li><a href="${t.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="${t.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                <li><a href="${t.youtube}" target="_blank" rel="noopener" title="YouTube"><i class="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="left-content">
            <p>Bienvenidos a la <em>${c.name}</em> - ${c.description}</p>
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
                <a href="${c.routes.home}" class="logo">
                  <img src="${y("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" 
                       alt="Logo ${c.shortName}" 
                       class="navbar-logo-img">
                </a>

                <!-- Menu Container -->
                <div class="menu-container">
                  <div class="menu-wrapper">
                    <ul class="nav single-row-menu">
                      <!-- Mobile Logo -->
                      <div class="mobile-menu-logo" style="display: none;">
            <img src="${y("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" 
                             alt="Logo ${c.shortName}" 
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
    `}getMenuItemsTemplate(){return $.map(e=>{if(e.type==="dropdown"){const t=e.url||"javascript:void(0)",s=v(t)?' target="_blank" rel="noopener"':"";return`
          <li class="has-sub">
            <a href="${t}"${s}>${e.label}</a>
            <ul class="sub-menu">
              ${e.items.map(r=>this.getSubMenuItemTemplate(r)).join("")}
            </ul>
          </li>
        `}else return`
          <li class="scroll-to-section">
            <a href="${e.url}" class="nav-link-${e.label.toLowerCase()}">${e.label}</a>
          </li>
        `}).join("")}getSubMenuItemTemplate(e={}){const t=Array.isArray(e.items)&&e.items.length>0,s=e.url||"javascript:void(0)",r=v(s)?' target="_blank" rel="noopener"':"";return t?`
        <li class="has-sub nested">
          <a href="${s}"${r}>${e.label}</a>
          <ul class="sub-menu">
            ${e.items.map(n=>{const d=n.url||"javascript:void(0)",f=v(d)?' target="_blank" rel="noopener"':"";return`<li><a href="${d}"${f}>${n.label}</a></li>`}).join("")}
          </ul>
        </li>
      `:`<li><a href="${s}"${r}>${e.label}</a></li>`}attachEvents(){const e=l(".menu-trigger",this.container),t=l(".mobile-menu-overlay",this.container),s=l(".mobile-menu-close",this.container);l(".menu-container",this.container),e&&p(e,"click",()=>this.toggleMobileMenu()),t&&p(t,"click",()=>this.closeMobileMenu()),s&&p(s,"click",()=>this.closeMobileMenu()),g(".has-sub",this.container).forEach(n=>{const d=l("a",n);p(d,"click",f=>{window.innerWidth<=992&&(f.preventDefault(),M(n,"active"))})}),window.addEventListener("scroll",()=>this.handleScroll()),this.highlightActiveLink()}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen;const e=l(".menu-container",this.container),t=l(".mobile-menu-overlay",this.container),s=document.body;this.isMobileMenuOpen?(u(e,"active"),u(t,"active"),u(s,"menu-open")):this.closeMobileMenu()}closeMobileMenu(){this.isMobileMenuOpen=!1;const e=l(".menu-container",this.container),t=l(".mobile-menu-overlay",this.container),s=document.body;m(e,"active"),m(t,"active"),m(s,"menu-open")}handleScroll(){const e=l("header",this.container);e&&(window.scrollY>50?u(e,"background-header"):m(e,"background-header"))}highlightActiveLink(){const e=w(window.location.href);g(".nav a",this.container).forEach(s=>{const r=s.getAttribute("href"),n=w(r||s.href);(n===e||n!=="/"&&e.startsWith(n))&&u(s.parentElement,"active")})}destroy(){this.container.innerHTML=""}}const k=c.baseUrl,P=i=>`${k}${i.replace(/^\//,"")}`;class A{constructor(e){this.container=typeof e=="string"?l(e):e,this.init()}init(){if(!this.container){console.error("Footer: Container not found");return}this.render()}render(){this.container.innerHTML=this.getTemplate()}getTemplate(){const e=new Date().getFullYear(),{routes:t,social:s}=c;return`
      <footer>
        <div class="container">
          <div class="row">
            <!-- Columna 1: Logo y descripción -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>UPBC</h4>
                <img src="${P("assets/images/logos/UPBC_FullColor-H-FondoClaro.png")}" alt="Logo UPBC" class="img-fluid mb-3" style="max-width: 200px;">
                <p>Universidad Politécnica de Baja California - Formando profesionales de excelencia desde 2006.</p>
              </div>
            </div>
            
            <!-- Columna 2: Enlaces útiles -->
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="footer-widget">
                <h4>Enlaces útiles</h4>
                <ul class="footer-links">
                  <li><a href="${t.universidad.directorio}">Directorio</a></li>
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
    `}destroy(){this.container.innerHTML=""}}class S{constructor(e={}){this.options={navbarContainer:"#navbar-container",footerContainer:"#footer-container",...e},this.navbar=null,this.footer=null}init(){E(()=>{this.initNavbar(),this.initFooter(),this.onReady()})}initNavbar(){const e=document.querySelector(this.options.navbarContainer);e&&(this.navbar=new L(e))}initFooter(){const e=document.querySelector(this.options.footerContainer);e&&(this.footer=new A(e))}onReady(){}destroy(){this.navbar&&this.navbar.destroy(),this.footer&&this.footer.destroy()}}window.bootstrap=x;const C=new S;C.init();console.log("🚀 UPBC Web v2.0 - Inicializado correctamente");window.app=C;export{T as a,u as b,B as c,U as d,E as r,l as s};
