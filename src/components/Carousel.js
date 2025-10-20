/**
 * Componente Carousel - Carrusel moderno y robusto
 * Reemplaza owl.carousel con solución nativa
 */

import { select, selectAll, addClass, removeClass } from '@utils/dom.js';

export class Carousel {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? select(container) : container;
    this.options = {
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      loop: true,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      },
      ...options
    };
    
    this.currentIndex = 0;
    this.items = [];
    this.autoplayInterval = null;
    this.init();
  }

  init() {
    if (!this.container) {
      console.error('Carousel: Container not found');
      return;
    }

    this.setupStructure();
    this.setupItems();
    this.setupControls();
    this.updateView();
    
    if (this.options.autoplay) {
      this.startAutoplay();
    }

    // Handle resize
    window.addEventListener('resize', () => this.handleResize());
  }

  setupStructure() {
    this.container.classList.add('upbc-carousel');
    
    // Wrap existing content
    const content = this.container.innerHTML;
    this.container.innerHTML = `
      <div class="carousel-wrapper">
        <div class="carousel-track">
          ${content}
        </div>
      </div>
    `;

    if (this.options.nav) {
      this.container.insertAdjacentHTML('beforeend', `
        <button class="carousel-nav carousel-prev" aria-label="Anterior">
          <i class="fa fa-chevron-left"></i>
        </button>
        <button class="carousel-nav carousel-next" aria-label="Siguiente">
          <i class="fa fa-chevron-right"></i>
        </button>
      `);
    }

    if (this.options.dots) {
      this.container.insertAdjacentHTML('beforeend', `
        <div class="carousel-dots"></div>
      `);
    }
  }

  setupItems() {
    const track = select('.carousel-track', this.container);
    this.items = selectAll('.carousel-item, .item', track);
    
    // Add classes to items
    this.items.forEach((item, index) => {
      addClass(item, 'carousel-item');
      item.dataset.index = index;
    });
  }

  setupControls() {
    // Navigation buttons
    const prevBtn = select('.carousel-prev', this.container);
    const nextBtn = select('.carousel-next', this.container);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prev());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.next());
    }

    // Dots
    if (this.options.dots) {
      this.setupDots();
    }

    // Touch/swipe support
    this.setupTouch();
  }

  setupDots() {
    const dotsContainer = select('.carousel-dots', this.container);
    if (!dotsContainer) return;

    const itemsPerView = this.getItemsPerView();
    const totalDots = Math.ceil(this.items.length / itemsPerView);

    let dotsHTML = '';
    for (let i = 0; i < totalDots; i++) {
      dotsHTML += `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`;
    }

    dotsContainer.innerHTML = dotsHTML;

    selectAll('.carousel-dot', dotsContainer).forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goTo(index * itemsPerView);
      });
    });
  }

  setupTouch() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const track = select('.carousel-track', this.container);

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      if (!isDragging) return;
      
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }

      isDragging = false;
    });
  }

  getItemsPerView() {
    const width = window.innerWidth;
    const responsive = this.options.responsive;

    let itemsPerView = this.options.items;

    Object.keys(responsive).sort((a, b) => b - a).forEach(breakpoint => {
      if (width >= parseInt(breakpoint)) {
        itemsPerView = responsive[breakpoint].items;
      }
    });

    return itemsPerView;
  }

  updateView() {
    const track = select('.carousel-track', this.container);
    const wrapper = select('.carousel-wrapper', this.container);
    const itemsPerView = this.getItemsPerView();
    const itemWidth = 100 / itemsPerView;
    
    // Get wrapper width in pixels
    const wrapperWidth = wrapper.offsetWidth;
    
    // Each item should be the full width of the wrapper divided by itemsPerView
    const itemWidthPx = wrapperWidth / itemsPerView;
    
    // Track width should be: number of items * width of each item
    const trackWidthPx = this.items.length * itemWidthPx;
    track.style.width = `${trackWidthPx}px`;

    // Update track transform (in pixels now)
    const translateXPx = -(this.currentIndex * itemWidthPx);
    track.style.transform = `translateX(${translateXPx}px)`;
    
    console.log('📐 Carousel updateView:', {
      currentIndex: this.currentIndex,
      itemsPerView,
      wrapperWidth: wrapperWidth + 'px',
      itemWidthPx: itemWidthPx + 'px',
      trackWidth: trackWidthPx + 'px',
      translateX: translateXPx + 'px',
      totalItems: this.items.length
    });

    // Update item widths in pixels
    this.items.forEach(item => {
      item.style.width = `${itemWidthPx}px`;
    });

    // Update dots
    this.updateDots();

    // Update nav buttons
    this.updateNavButtons();
  }

  updateDots() {
    const dots = selectAll('.carousel-dot', this.container);
    const itemsPerView = this.getItemsPerView();
    const activeDotIndex = Math.floor(this.currentIndex / itemsPerView);

    dots.forEach((dot, index) => {
      if (index === activeDotIndex) {
        addClass(dot, 'active');
      } else {
        removeClass(dot, 'active');
      }
    });
  }

  updateNavButtons() {
    const prevBtn = select('.carousel-prev', this.container);
    const nextBtn = select('.carousel-next', this.container);

    if (!this.options.loop) {
      if (this.currentIndex === 0) {
        addClass(prevBtn, 'disabled');
      } else {
        removeClass(prevBtn, 'disabled');
      }

      if (this.currentIndex >= this.items.length - this.getItemsPerView()) {
        addClass(nextBtn, 'disabled');
      } else {
        removeClass(nextBtn, 'disabled');
      }
    }
  }

  next() {
    const itemsPerView = this.getItemsPerView();
    
    if (this.options.loop) {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    } else {
      this.currentIndex = Math.min(this.currentIndex + 1, this.items.length - itemsPerView);
    }

    this.updateView();
    this.resetAutoplay();
  }

  prev() {
    const itemsPerView = this.getItemsPerView();
    
    if (this.options.loop) {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    } else {
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    }

    this.updateView();
    this.resetAutoplay();
  }

  goTo(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.items.length - 1));
    this.updateView();
    this.resetAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.options.autoplayTimeout);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  resetAutoplay() {
    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }

  handleResize() {
    this.updateView();
  }

  destroy() {
    this.stopAutoplay();
    window.removeEventListener('resize', () => this.handleResize());
  }
}
