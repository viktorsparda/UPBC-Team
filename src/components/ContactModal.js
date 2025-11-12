/**
 * Modal de contacto reutilizable para todo el sitio.
 */

import { ready } from '@utils/dom.js';

function isContactLink(href) {
  if (!href) return false;

  if (href.startsWith('#')) {
    return href === '#contact' || href === '#contact-modal';
  }

  try {
    const url = new URL(href, window.location.href);
    return url.hash === '#contact';
  } catch (error) {
    return false;
  }
}

export class ContactModal {
  constructor() {
    this.modalElement = null;
    this.modalInstance = null;
    this.initialized = false;
  }

  init() {
    ready(() => {
      this.render();
      this.bindTriggers();
      this.checkInitialHash();
      this.initialized = true;
    });
  }

  render() {
    if (document.getElementById('contact-modal')) {
      this.modalElement = document.getElementById('contact-modal');
      this.modalInstance = this.createInstance(this.modalElement);
      return;
    }

    const template = `
      <div class="modal fade contact-modal" id="contact-modal" tabindex="-1" aria-hidden="true" aria-labelledby="contact-modal-title">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content" style="border: none; border-radius: 16px; overflow: hidden;">
            <div class="modal-header" style="border: none; padding: 24px 28px 0 28px;">
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.12em; color: #cd8b47; font-weight: 600;">Contacto</span>
                <h2 id="contact-modal-title" style="margin: 0; color: #602b82; font-weight: 700; font-size: clamp(1.6rem, 3vw, 2.1rem);">Escríbenos y recibe orientación personalizada</h2>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body" style="padding: 24px 28px 32px 28px;">
              <div class="row g-4">
                <div class="col-xl-7 col-lg-7">
                  <form id="contact-modal-form">
                    <div class="row g-3">
                      <div class="col-12">
                        <label for="contact-name" style="display: block; font-weight: 600; color: #602b82; margin-bottom: 0.35rem;">Nombre completo *</label>
                        <input id="contact-name" name="name" type="text" required placeholder="Tu nombre completo" style="width: 100%; padding: 14px; border: 1px solid #d4cbe2; border-radius: 10px; font-size: 0.95rem;">
                      </div>
                      <div class="col-md-6">
                        <label for="contact-email" style="display: block; font-weight: 600; color: #602b82; margin-bottom: 0.35rem;">Correo electrónico *</label>
                        <input id="contact-email" name="email" type="email" required placeholder="tucorreo@upbc.edu.mx" style="width: 100%; padding: 14px; border: 1px solid #d4cbe2; border-radius: 10px; font-size: 0.95rem;">
                      </div>
                      <div class="col-md-6">
                        <label for="contact-subject" style="display: block; font-weight: 600; color: #602b82; margin-bottom: 0.35rem;">Asunto *</label>
                        <input id="contact-subject" name="subject" type="text" required placeholder="Motivo de tu mensaje" style="width: 100%; padding: 14px; border: 1px solid #d4cbe2; border-radius: 10px; font-size: 0.95rem;">
                      </div>
                      <div class="col-12">
                        <label for="contact-message" style="display: block; font-weight: 600; color: #602b82; margin-bottom: 0.35rem;">Mensaje *</label>
                        <textarea id="contact-message" name="message" rows="5" required placeholder="Cuéntanos cómo podemos ayudarte" style="width: 100%; padding: 14px; border: 1px solid #d4cbe2; border-radius: 10px; font-size: 0.95rem; resize: vertical;"></textarea>
                      </div>
                      <div class="col-12" style="display: flex; justify-content: flex-end;">
                        <button type="submit" class="btn btn-primary" style="background: linear-gradient(135deg, #602b82 0%, #7d3a9e 100%); border: none; padding: 14px 32px; border-radius: 999px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Enviar mensaje</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-xl-5 col-lg-5">
                  <div style="background: rgba(96, 43, 130, 0.06); border-radius: 14px; padding: 1.75rem; height: 100%; display: flex; flex-direction: column; gap: 1.35rem;">
                    <div>
                      <h3 style="color: #602b82; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Contacto directo</h3>
                      <p style="margin: 0; color: #513667; font-weight: 600;">(686) 104-2727 ext. 130</p>
                      <p style="margin: 0; color: #513667;">contacto@upbc.edu.mx</p>
                    </div>
                    <div>
                      <h3 style="color: #602b82; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Horario</h3>
                      <p style="margin: 0; color: #513667;">Lunes a viernes de 8:00 a 16:00 h</p>
                    </div>
                    <div>
                      <h3 style="color: #602b82; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Ubicación</h3>
                      <p style="margin: 0; color: #513667;">Calle de la Claridad S/N, Col. Plutarco Elías Calles, Mexicali, B.C. C.P. 21376</p>
                    </div>
                    <a href="https://www.upbc.edu.mx" target="_blank" rel="noopener" style="margin-top: auto; display: inline-flex; align-items: center; gap: 0.5rem; color: #602b82; font-weight: 600; text-decoration: none;">
                      <i class="fa fa-external-link"></i>
                      www.upbc.edu.mx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', template);

    this.modalElement = document.getElementById('contact-modal');
    this.modalInstance = this.createInstance(this.modalElement);
  }

  createInstance(element) {
    if (!element) return null;

    if (window.bootstrap && typeof window.bootstrap.Modal === 'function') {
      return new window.bootstrap.Modal(element, { backdrop: 'static', keyboard: true });
    }

    return null;
  }

  open() {
    if (!this.modalElement) return;

    if (this.modalInstance) {
      this.modalInstance.show();
    } else {
      this.modalElement.classList.add('show');
      this.modalElement.style.display = 'block';
      this.modalElement.setAttribute('aria-hidden', 'false');
    }
  }

  bindTriggers() {
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('a[href]');
      if (!trigger) return;

      const href = trigger.getAttribute('href');
      if (!isContactLink(href)) return;

      event.preventDefault();
      this.open();
    });
  }

  checkInitialHash() {
    if (window.location.hash === '#contact') {
      this.open();
    }
  }
}
