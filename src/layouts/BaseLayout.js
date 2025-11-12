/**
 * Layout Base - Estructura común para todas las páginas
 */

import { Navbar } from '@components/Navbar.js';
import { Footer } from '@components/Footer.js';
import { ContactModal } from '@components/ContactModal.js';
import { ready } from '@utils/dom.js';

export class BaseLayout {
  constructor(options = {}) {
    this.options = {
      navbarContainer: '#navbar-container',
      footerContainer: '#footer-container',
      ...options
    };
    
    this.navbar = null;
    this.footer = null;
    this.contactModal = null;
  }

  init() {
    ready(() => {
      this.initNavbar();
      this.initFooter();
      this.initContactModal();
      this.onReady();
    });
  }

  initNavbar() {
    const navbarContainer = document.querySelector(this.options.navbarContainer);
    if (navbarContainer) {
      this.navbar = new Navbar(navbarContainer);
    }
  }

  initContactModal() {
    if (this.contactModal) return;
    this.contactModal = new ContactModal();
    this.contactModal.init();
  }

  initFooter() {
    const footerContainer = document.querySelector(this.options.footerContainer);
    if (footerContainer) {
      this.footer = new Footer(footerContainer);
    }
  }

  // Hook para que las páginas implementen su lógica
  onReady() {
    // Override en páginas específicas
  }

  destroy() {
    if (this.navbar) this.navbar.destroy();
    if (this.footer) this.footer.destroy();
    this.contactModal = null;
  }
}
