import { CAREERS_BY_SLUG, CAREER_CATEGORIES } from '@data/careers.js';
import { ready, select, clearElement, addClass } from '@utils/dom.js';

const DEFAULT_OPTIONS = {
  container: '#career-page'
};

const CATEGORY_LABEL_LOOKUP = CAREER_CATEGORIES.reduce((acc, category) => {
  acc[category.id] = category.label;
  return acc;
}, {});

function setDocumentMeta(career) {
  if (!career) return;

  if (career.metaTitle) {
    document.title = career.metaTitle;
    updateMetaTag('property', 'og:title', career.metaTitle);
    updateMetaTag('name', 'twitter:title', career.metaTitle);
  }

  if (career.metaDescription) {
    updateMetaTag('name', 'description', career.metaDescription, true);
    updateMetaTag('property', 'og:description', career.metaDescription);
    updateMetaTag('name', 'twitter:description', career.metaDescription);
  }
}

function updateMetaTag(attributeName, attributeValue, content, preferExisting = false) {
  let metaTag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);

  if (!metaTag) {
    if (preferExisting) {
      metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        metaTag.setAttribute('content', content);
        return;
      }
    }

    metaTag = document.createElement('meta');
    metaTag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(metaTag);
  }

  if (typeof content === 'string') {
    metaTag.setAttribute('content', content);
  }
}

function getCategoryLabel(categoryId) {
  return CATEGORY_LABEL_LOOKUP[categoryId] || 'Programa académico';
}

function renderHighlights(highlights = []) {
  if (!highlights.length) return '';

  return `
    <div class="career-hero__highlights">
      ${highlights.map((highlight) => `
        <span class="career-highlight">
          <i class="fa fa-star"></i>
          ${highlight}
        </span>
      `).join('')}
    </div>
  `;
}

function renderDescription(description) {
  if (!description) return '';

  const paragraphs = Array.isArray(description.paragraphs)
    ? description.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')
    : '';

  return `
    <div class="career-section">
      <div class="career-section__header">
        <h2 class="career-section__title">Descripción de la carrera</h2>
      </div>
      <div class="career-description">
        ${description.image ? `
          <figure class="career-description__image">
            <img src="${description.image}" alt="${description.alt || description.title || ''}">
          </figure>
        ` : ''}
        <div class="career-description__text">
          ${paragraphs}
        </div>
      </div>
    </div>
  `;
}

function renderListSection(title, lead, items = [], icon = 'fa-check-circle') {
  if (!items.length) return '';

  const listItems = items.map((item) => `
    <li>
      <i class="fa ${icon}"></i>
      <span>${item}</span>
    </li>
  `).join('');

  return `
    <div class="career-section">
      <div class="career-section__header">
        <h2 class="career-section__title">${title}</h2>
      </div>
      ${lead ? `<p class="career-section__lead">${lead}</p>` : ''}
      <ul class="career-list">
        ${listItems}
      </ul>
    </div>
  `;
}

function renderCurriculum(curriculum) {
  if (!curriculum || !Array.isArray(curriculum.items) || !curriculum.items.length) return '';

  const items = curriculum.items.map((item) => `
    <article class="career-curriculum__item">
      <header>
        <h4>${item.title}</h4>
      </header>
      <figure>
        <img src="${item.image}" alt="${item.alt || item.title}">
      </figure>
    </article>
  `).join('');

  return `
    <div class="career-section">
      <div class="career-section__header">
        <h2 class="career-section__title">${curriculum.title || 'Mapa curricular'}</h2>
      </div>
      ${curriculum.intro ? `<p class="career-section__lead">${curriculum.intro}</p>` : ''}
      <div class="career-curriculum__grid">
        ${items}
      </div>
    </div>
  `;
}

function renderStats(stats = []) {
  if (!stats.length) return '';

  const statItems = stats.map((stat) => `
    <div class="career-stat">
      <span>${stat.value}</span>
      ${stat.label}
    </div>
  `).join('');

  return `
    <div class="career-sidebar__block">
      <h4>Información clave</h4>
      <div class="career-stats">
        ${statItems}
      </div>
    </div>
  `;
}

function renderSidebarSections(sections = []) {
  if (!sections.length) return '';

  return sections.map((section) => `
    <div class="career-sidebar__block">
      <h4>${section.title}</h4>
      <ul class="career-sidebar__list">
        ${section.items.map((item) => `
          <li>
            <i class="fa fa-chevron-right"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderSidebar(career) {
  const blocks = [
    renderStats(career.stats),
    renderSidebarSections(career.sidebarSections)
  ].filter(Boolean);

  if (!blocks.length) return '';

  return `
    <aside class="career-sidebar">
      ${blocks.join('')}
    </aside>
  `;
}

function createCareerTemplate(career) {
  const categoryLabel = getCategoryLabel(career.category);

  return `
    <section class="career-hero">
      <div class="container">
        <span class="career-hero__badge">
          <i class="fa fa-graduation-cap"></i>
          ${categoryLabel}
        </span>
        <h1 class="career-hero__title">${career.name}</h1>
        ${career.tagline ? `<p class="career-hero__subtitle">${career.tagline}</p>` : ''}
        ${renderHighlights(career.highlights)}
      </div>
    </section>

    <section class="career-layout">
      <div class="container">
        <div class="row g-4 g-lg-5">
          <div class="col-lg-8">
            ${career.summary ? `<div class="career-summary">${career.summary}</div>` : ''}
            ${renderDescription(career.description)}
            ${renderListSection('Perfil de egreso', career.outcomes?.lead, career.outcomes?.items)}
            ${renderListSection('Campo laboral', career.labour?.lead, career.labour?.items, 'fa-briefcase')}
            ${renderCurriculum(career.curriculum)}
          </div>
          <div class="col-lg-4">
            ${renderSidebar(career)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderError(container) {
  container.innerHTML = `
    <section class="career-error">
      <div class="container">
        <h2>Lo sentimos</h2>
        <p>No encontramos la información de esta carrera. Por favor, regresa a la sección de oferta educativa.</p>
      </div>
    </section>
  `;
}

export function renderCareerPage(slug, options = {}) {
  const settings = { ...DEFAULT_OPTIONS, ...options };

  ready(() => {
    const career = CAREERS_BY_SLUG[slug];
    const container = select(settings.container);

    if (!container) {
      console.error(`[CareerPage] Contenedor no encontrado: ${settings.container}`);
      return;
    }

    addClass(container, 'career-page');
    clearElement(container);

    if (!career) {
      console.error(`[CareerPage] Carrera no encontrada para el slug: ${slug}`);
      renderError(container);
      return;
    }

    setDocumentMeta(career);
    container.innerHTML = createCareerTemplate(career);
  });
}
