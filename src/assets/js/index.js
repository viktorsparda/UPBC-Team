/**
 * UPBC Web - Home Page Script
 * Gestiona interacciones y carruseles de la página principal.
 */

import initNav from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHomePage();
});

import { ready, debounce } from './utils/dom.js';

const CAROUSEL_INTERVAL_MS = 3000;
const SERVICES_ITEM_GAP = 15;
const NEWS_ITEM_GAP = 10;
const RESIZE_DEBOUNCE_MS = 150;

function syncHeights() {
  const bannerImage = document.querySelector('.upbc-banner-image');
  const carouselContainer = document.getElementById('carreras-hero-carousel');

  if (!bannerImage || !carouselContainer) return;

  const imageHeight = bannerImage.offsetHeight;
  carouselContainer.style.height = `${imageHeight}px`;
}

function getServiciosItemsPerView() {
  const width = window.innerWidth;
  if (width >= 992) return 4;
  if (width >= 768) return 2;
  return 1;
}

function getNewsItemsPerView() {
  return window.innerWidth >= 768 ? 2 : 1;
}

function initCarrerasCarousel() {
  const track = document.querySelector('.simple-carousel-track');
  const items = document.querySelectorAll('.simple-carousel-item');
  const prevBtn = document.getElementById('carreras-prev');
  const nextBtn = document.getElementById('carreras-next');
  const dotsContainer = document.getElementById('carreras-dots');

  if (!track || !items.length || !dotsContainer) return;

  let currentIndex = 0;
  const totalItems = items.length;

  dotsContainer.innerHTML = '';

  for (let i = 0; i < totalItems; i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.style.cssText = `
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid white;
      background: ${i === 0 ? 'white' : 'transparent'};
      cursor: pointer;
      padding: 0;
      transition: all 0.3s;
    `;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll('button');

  function updateCarousel() {
    const translateX = -(currentIndex * 100);
    track.style.transform = `translateX(${translateX}%)`;

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.style.background = isActive ? 'white' : 'transparent';
      dot.style.transform = isActive ? 'scale(1.3)' : 'scale(1)';
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  if (prevBtn && !prevBtn.dataset.carouselBound) {
    prevBtn.addEventListener('click', prev);
    prevBtn.dataset.carouselBound = 'true';
  }

  if (nextBtn && !nextBtn.dataset.carouselBound) {
    nextBtn.addEventListener('click', next);
    nextBtn.dataset.carouselBound = 'true';
  }

  if (window.__UPBC_CARRERAS_AUTOPLAY__) {
    clearInterval(window.__UPBC_CARRERAS_AUTOPLAY__);
  }

  window.__UPBC_CARRERAS_AUTOPLAY__ = setInterval(next, CAROUSEL_INTERVAL_MS);

  updateCarousel();
}

function initServiciosCarousel() {
  const serviciosTrack = document.getElementById('servicios-carousel-track');
  const serviciosItems = document.querySelectorAll('.servicio-item');
  const serviciosPrevBtn = document.getElementById('servicios-prev');
  const serviciosNextBtn = document.getElementById('servicios-next');

  if (!serviciosTrack || !serviciosItems.length) return;

  let serviciosCurrentIndex = 0;
  const serviciosTotalItems = serviciosItems.length;

  function updateServiciosCarousel() {
    const itemsPerView = getServiciosItemsPerView();
    const itemWidth = 100 / itemsPerView;

    serviciosItems.forEach((item) => {
      item.style.minWidth = `calc(${itemWidth}% - ${SERVICES_ITEM_GAP}px)`;
    });

    const translateX = -(serviciosCurrentIndex * itemWidth);
    serviciosTrack.style.transform = `translateX(${translateX}%)`;
  }

  function serviciosNext() {
    const itemsPerView = getServiciosItemsPerView();
    const maxIndex = serviciosTotalItems - itemsPerView;

    if (serviciosCurrentIndex < maxIndex) {
      serviciosCurrentIndex += 1;
      updateServiciosCarousel();
    }
  }

  function serviciosPrev() {
    if (serviciosCurrentIndex > 0) {
      serviciosCurrentIndex -= 1;
      updateServiciosCarousel();
    }
  }

  if (serviciosPrevBtn && !serviciosPrevBtn.dataset.carouselBound) {
    serviciosPrevBtn.addEventListener('click', serviciosPrev);
    serviciosPrevBtn.dataset.carouselBound = 'true';
  }

  if (serviciosNextBtn && !serviciosNextBtn.dataset.carouselBound) {
    serviciosNextBtn.addEventListener('click', serviciosNext);
    serviciosNextBtn.dataset.carouselBound = 'true';
  }

  if (window.__UPBC_SERVICIOS_RESIZE__) {
    window.removeEventListener('resize', window.__UPBC_SERVICIOS_RESIZE__);
  }

  window.__UPBC_SERVICIOS_RESIZE__ = debounce(() => {
    serviciosCurrentIndex = 0;
    updateServiciosCarousel();
  }, RESIZE_DEBOUNCE_MS);

  window.addEventListener('resize', window.__UPBC_SERVICIOS_RESIZE__);

  updateServiciosCarousel();
}

function initNewsCarousel() {
  const newsTrack = document.getElementById('news-carousel');
  const newsItems = document.querySelectorAll('.news-item');
  const newsPrevBtn = document.getElementById('news-prev');
  const newsNextBtn = document.getElementById('news-next');
  const newsIndicators = document.querySelectorAll('.news-page-indicator');

  if (!newsTrack || !newsItems.length) return;

  let newsCurrentIndex = 0;
  const newsTotalItems = newsItems.length;

  function updateNewsCarousel() {
    const itemsPerView = getNewsItemsPerView();
    const itemWidth = 100 / itemsPerView;

    newsItems.forEach((item) => {
      item.style.minWidth = `calc(${itemWidth}% - ${NEWS_ITEM_GAP}px)`;
    });

    const translateX = -(newsCurrentIndex * itemWidth);
    newsTrack.style.transform = `translateX(${translateX}%)`;

    const currentPage = Math.floor(newsCurrentIndex / itemsPerView);

    newsIndicators.forEach((indicator, index) => {
      const isActive = index === currentPage;
      indicator.style.background = isActive ? '#602b82' : '#ddd';
      indicator.style.transform = isActive ? 'scale(1.2)' : 'scale(1)';
    });
  }

  function newsNext() {
    const itemsPerView = getNewsItemsPerView();
    const maxIndex = newsTotalItems - itemsPerView;

    if (newsCurrentIndex < maxIndex) {
      newsCurrentIndex += 1;
      updateNewsCarousel();
    }
  }

  function newsPrev() {
    if (newsCurrentIndex > 0) {
      newsCurrentIndex -= 1;
      updateNewsCarousel();
    }
  }

  if (newsPrevBtn && !newsPrevBtn.dataset.carouselBound) {
    newsPrevBtn.addEventListener('click', newsPrev);
    newsPrevBtn.dataset.carouselBound = 'true';
  }

  if (newsNextBtn && !newsNextBtn.dataset.carouselBound) {
    newsNextBtn.addEventListener('click', newsNext);
    newsNextBtn.dataset.carouselBound = 'true';
  }

  newsIndicators.forEach((indicator, index) => {
    if (!indicator.dataset.carouselBound) {
      indicator.addEventListener('click', () => {
        const itemsPerView = getNewsItemsPerView();
        newsCurrentIndex = index * itemsPerView;
        updateNewsCarousel();
      });

      indicator.dataset.carouselBound = 'true';
    }
  });

  if (window.__UPBC_NEWS_RESIZE__) {
    window.removeEventListener('resize', window.__UPBC_NEWS_RESIZE__);
  }

  window.__UPBC_NEWS_RESIZE__ = debounce(() => {
    newsCurrentIndex = 0;
    updateNewsCarousel();
  }, RESIZE_DEBOUNCE_MS);

  window.addEventListener('resize', window.__UPBC_NEWS_RESIZE__);

  updateNewsCarousel();
}

function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    const head = accordion.querySelector('.accordion-head');
    const body = accordion.querySelector('.accordion-body');
    const icon = accordion.querySelector('.icon i');

    if (!head || !body || !icon) return;

    if (!accordion.dataset.accordionBound) {
      head.addEventListener('click', () => {
        const isActive = accordion.classList.contains('active');

        accordions.forEach((acc) => {
          const accBody = acc.querySelector('.accordion-body');
          const accIcon = acc.querySelector('.icon i');
          if (accBody) accBody.style.maxHeight = '0';
          if (accIcon) accIcon.style.transform = 'rotate(0deg)';
          acc.classList.remove('active');
        });

        if (!isActive) {
          body.style.maxHeight = `${body.scrollHeight}px`;
          icon.style.transform = 'rotate(180deg)';
          accordion.classList.add('active');
        }
      });

      head.addEventListener('mouseenter', function onEnter() {
        this.style.background = '#f8f9fa';
      });

      head.addEventListener('mouseleave', function onLeave() {
        this.style.background = '#fff';
      });

      accordion.dataset.accordionBound = 'true';
    }
  });
}

function initHoverEffects() {
  document.querySelectorAll('.servicio-card').forEach((card) => {
    if (card.dataset.hoverBound) return;

    card.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 15px rgba(0,0,0,0.1)';
    });

    card.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.servicio-link').forEach((link) => {
    if (link.dataset.hoverBound) return;

    link.addEventListener('mouseenter', function onEnter() {
      this.style.gap = '12px';
    });

    link.addEventListener('mouseleave', function onLeave() {
      this.style.gap = '8px';
    });

    link.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.meeting-item').forEach((card) => {
    if (card.dataset.hoverBound) return;

    card.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
      const img = this.querySelector('img');
      if (img) img.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
      const img = this.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    });

    card.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.categories ul li a').forEach((link) => {
    if (link.dataset.hoverBound) return;

    link.addEventListener('mouseenter', function onEnter() {
      this.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    link.addEventListener('mouseleave', function onLeave() {
      this.style.background = 'transparent';
    });

    link.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.accordion-body a').forEach((link) => {
    if (link.dataset.hoverBound) return;

    link.addEventListener('mouseenter', function onEnter() {
      this.style.color = '#602b82';
      this.style.paddingLeft = '5px';
    });

    link.addEventListener('mouseleave', function onLeave() {
      this.style.color = '#666';
      this.style.paddingLeft = '0';
    });

    link.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.apply-now .item').forEach((item) => {
    if (item.dataset.hoverBound) return;

    item.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'translateY(-5px)';
    });

    item.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'translateY(0)';
    });

    item.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.vinculacion-item').forEach((box) => {
    if (box.dataset.hoverBound) return;

    box.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
    });

    box.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 20px rgba(0,0,0,0.08)';
    });

    box.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.our-vinculacion .main-button-red a').forEach((btn) => {
    if (btn.dataset.hoverBound) return;

    btn.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 6px 20px rgba(96, 43, 130, 0.4)';
    });

    btn.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 4px 15px rgba(96, 43, 130, 0.3)';
    });

    btn.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.historia-item').forEach((item) => {
    if (item.dataset.hoverBound) return;

    item.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 30px rgba(96,43,130,0.15)';
    });

    item.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 20px rgba(96,43,130,0.08)';
    });

    item.dataset.hoverBound = 'true';
  });

  document.querySelectorAll('.our-historias .main-button-yellow a').forEach((btn) => {
    if (btn.dataset.hoverBound) return;

    btn.addEventListener('mouseenter', function onEnter() {
      this.style.transform = 'scale(1.05)';
      this.style.background = '#f5a425';
    });

    btn.addEventListener('mouseleave', function onLeave() {
      this.style.transform = 'scale(1)';
      this.style.background = '#cd8b47';
    });

    btn.dataset.hoverBound = 'true';
  });

  const submitBtn = document.getElementById('form-submit');
  if (submitBtn && !submitBtn.dataset.hoverBound) {
    submitBtn.addEventListener('mouseenter', function onEnter() {
      this.style.background = '#7d3a9e';
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 6px 20px rgba(96, 43, 130, 0.4)';
    });

    submitBtn.addEventListener('mouseleave', function onLeave() {
      this.style.background = '#602b82';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });

    submitBtn.dataset.hoverBound = 'true';
  }
}

function initHomePage() {
  const handleResize = debounce(syncHeights, RESIZE_DEBOUNCE_MS);

  syncHeights();
  window.addEventListener('resize', handleResize);

  const mainImage = document.querySelector('.upbc-banner-image img');
  if (mainImage && !mainImage.dataset.heightBound) {
    mainImage.addEventListener('load', syncHeights);
    mainImage.dataset.heightBound = 'true';
  }

  initCarrerasCarousel();
  initServiciosCarousel();
  initNewsCarousel();
  initAccordions();
  initHoverEffects();
}

ready(() => {
  initHomePage();
  console.log('✅ UPBC Web - Página principal inicializada');
});


