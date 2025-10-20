/**
 * Componente Navbar - Sistema de navegación principal
 */

import { SITE_CONFIG, MENU_ITEMS } from '@utils/constants.js';
import { select, selectAll, on, addClass, removeClass, toggleClass } from '@utils/dom.js';

const BASE_URL = SITE_CONFIG.baseUrl ?? import.meta.env.BASE_URL ?? '/';
const resolveAssetPath = (path) => `${BASE_URL}${path.replace(/^\//, '')}`;
const normalizePath = (url) => {
  try {
    const { pathname } = new URL(url, window.location.origin);
    const basePath = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
    let cleaned = pathname;
    if (basePath && basePath !== '/' && cleaned.startsWith(basePath)) {
      cleaned = cleaned.slice(basePath.length);
    }
    return cleaned || '/';
  } catch (error) {
    if (url.startsWith('#')) {
      return '#';
    }
    return url || '/';
  }
};

export class Navbar {
  constructor(container) {
    this.container = typeof container === 'string' ? select(container) : container;
    this.isMobileMenuOpen = false;
    this.init();
  }

  init() {
    if (!this.container) {
      console.error('Navbar: Container not found');
      return;
    }
    this.render();
    this.attachEvents();
  }

  render() {
    this.container.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      ${this.getSubHeaderTemplate()}
      ${this.getMainHeaderTemplate()}
    `;
  }

  getSubHeaderTemplate() {
    return `
      <div class="sub-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="left-content">
                <p>Bienvenidos a la <em>${SITE_CONFIG.name}</em> - ${SITE_CONFIG.description}</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="right-icons">
                <ul>
                  <li><a href="${SITE_CONFIG.social.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="${SITE_CONFIG.social.youtube}" target="_blank" rel="noopener" title="YouTube"><i class="fa fa-youtube"></i></a></li>
                  <li><a href="${SITE_CONFIG.social.siaaxAlumnos}" target="_blank" rel="noopener" title="SIAAX Alumnos"><i class="fa fa-user"></i></a></li>
                  <li><a href="${SITE_CONFIG.social.siaax}" target="_blank" rel="noopener" title="SIAAX"><i class="fa fa-graduation-cap"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getMainHeaderTemplate() {
    return `
      <header class="header-area header-sticky">
        <div class="mobile-menu-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <!-- Logo -->
                <a href="${SITE_CONFIG.routes.home}" class="logo">
                  <img src="${resolveAssetPath('assets/images/logos/UPBC_FullColor-H-FondoClaro.png')}" 
                       alt="Logo ${SITE_CONFIG.shortName}" 
                       class="navbar-logo-img">
                </a>

                <!-- Menu Container -->
                <div class="menu-container">
                  <div class="menu-wrapper">
                    <ul class="nav single-row-menu">
                      <!-- Mobile Logo -->
                      <div class="mobile-menu-logo" style="display: none;">
            <img src="${resolveAssetPath('assets/images/logos/UPBC_FullColor-H-FondoClaro.png')}" 
                             alt="Logo ${SITE_CONFIG.shortName}" 
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
    `;
  }

  getMenuItemsTemplate() {
    return MENU_ITEMS.map(item => {
      if (item.type === 'dropdown') {
        return `
          <li class="has-sub">
            <a href="${item.url || 'javascript:void(0)'}">${item.label}</a>
            <ul class="sub-menu">
              ${item.items.map(subItem => `
                <li><a href="${subItem.url}">${subItem.label}</a></li>
              `).join('')}
            </ul>
          </li>
        `;
      } else {
        return `
          <li class="scroll-to-section">
            <a href="${item.url}" class="nav-link-${item.label.toLowerCase()}">${item.label}</a>
          </li>
        `;
      }
    }).join('');
  }

  attachEvents() {
    // Mobile menu toggle
    const menuTrigger = select('.menu-trigger', this.container);
    const mobileOverlay = select('.mobile-menu-overlay', this.container);
    const mobileClose = select('.mobile-menu-close', this.container);
    const menuContainer = select('.menu-container', this.container);

    if (menuTrigger) {
      on(menuTrigger, 'click', () => this.toggleMobileMenu());
    }

    if (mobileOverlay) {
      on(mobileOverlay, 'click', () => this.closeMobileMenu());
    }

    if (mobileClose) {
      on(mobileClose, 'click', () => this.closeMobileMenu());
    }

    // Dropdown menus
    const dropdownItems = selectAll('.has-sub', this.container);
    dropdownItems.forEach(item => {
      const link = select('a', item);
      on(link, 'click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          toggleClass(item, 'active');
        }
      });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => this.handleScroll());

    // Active link highlighting
    this.highlightActiveLink();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const menuContainer = select('.menu-container', this.container);
    const overlay = select('.mobile-menu-overlay', this.container);
    const body = document.body;

    if (this.isMobileMenuOpen) {
      addClass(menuContainer, 'active');
      addClass(overlay, 'active');
      addClass(body, 'menu-open');
    } else {
      this.closeMobileMenu();
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const menuContainer = select('.menu-container', this.container);
    const overlay = select('.mobile-menu-overlay', this.container);
    const body = document.body;

    removeClass(menuContainer, 'active');
    removeClass(overlay, 'active');
    removeClass(body, 'menu-open');
  }

  handleScroll() {
    const header = select('header', this.container);
    if (!header) return;

    if (window.scrollY > 50) {
      addClass(header, 'background-header');
    } else {
      removeClass(header, 'background-header');
    }
  }

  highlightActiveLink() {
    const currentPath = normalizePath(window.location.href);
    const links = selectAll('.nav a', this.container);

    links.forEach(link => {
      const href = link.getAttribute('href');
      const linkPath = normalizePath(href || link.href);
      if (linkPath === currentPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        addClass(link.parentElement, 'active');
      }
    });
  }

  destroy() {
    // Cleanup if needed
    this.container.innerHTML = '';
  }
}
