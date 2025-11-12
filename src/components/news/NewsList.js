/**
 * Renderiza el listado de novedades y noticias ordenadas por fecha.
 */

import { NEWS } from '@data/news.js';
import { ready, select, clearElement, addClass } from '@utils/dom.js';
import { SITE_CONFIG, getNewsDetailPath } from '@utils/constants.js';

const DEFAULT_OPTIONS = {
  container: '#news-archive'
};

const ARCHIVE_HEADER = {
  breadcrumb: 'Novedades',
  title: 'Novedades y noticias UPBC',
  summary: 'Explora los comunicados, convenios y actividades más recientes de la Universidad Politécnica de Baja California. Mantente al día con los proyectos, logros y eventos que fortalecen nuestra comunidad universitaria.'
};

const MONTH_FORMATTER = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return dateString;
    }
    return MONTH_FORMATTER.format(date);
  } catch (error) {
    console.warn('[NewsList] No se pudo formatear la fecha:', error);
    return dateString;
  }
}

function getSummary(news) {
  if (!news) return '';

  if (news.summary) return news.summary;
  if (news.subtitle) return news.subtitle;

  const firstParagraph = Array.isArray(news.body)
    ? news.body.find((block) => block && block.type === 'paragraph' && block.text)
    : null;

  if (firstParagraph && firstParagraph.text) {
    return firstParagraph.text;
  }

  return '';
}

function truncateText(text, maxLength = 240) {
  if (!text || text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : truncated.length)}…`;
}

function renderArchiveHeader() {
  return `
    <section class="page-title news-page-title">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h6>${ARCHIVE_HEADER.breadcrumb}</h6>
            <h2>${ARCHIVE_HEADER.title}</h2>
            <p class="news-summary">${ARCHIVE_HEADER.summary}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function groupNewsByYear(newsItems = []) {
  return newsItems.reduce((accumulator, item) => {
    const date = item.publishDate ? new Date(item.publishDate) : null;
    const year = date && !Number.isNaN(date.getTime()) ? date.getFullYear() : 'Sin fecha';

    if (!accumulator[year]) {
      accumulator[year] = [];
    }

    accumulator[year].push(item);
    return accumulator;
  }, {});
}

function renderTags(tags = []) {
  if (!Array.isArray(tags) || !tags.length) return '';

  const items = tags
    .filter(Boolean)
    .map((tag) => `<li>${tag}</li>`)
    .join('');

  if (!items) return '';

  return `
    <ul class="news-card-tags" aria-label="Etiquetas de la noticia">
      ${items}
    </ul>
  `;
}

function getFallbackImageFromBody(body = []) {
  if (!Array.isArray(body)) return null;

  for (const block of body) {
    if (!block) continue;

    if (block.type === 'image' && block.src) {
      return { src: block.src, alt: block.alt }; // direct image block
    }

    if (block.type === 'gallery' && Array.isArray(block.images) && block.images.length) {
      return block.images.find((image) => image && image.src) ?? null;
    }

    if (block.type === 'imageGrid' && Array.isArray(block.images) && block.images.length) {
      return block.images.find((image) => image && image.src) ?? null;
    }
  }

  return null;
}

function getCardImage(news) {
  if (news.cover && news.cover.src) {
    return news.cover;
  }

  if (Array.isArray(news.body)) {
    const fallback = getFallbackImageFromBody(news.body);
    if (fallback) return fallback;
  }

  return null;
}

function renderCardCover(news) {
  const image = getCardImage(news);
  if (!image || !image.src) return '';

  const altText = image.alt || news.title || 'Imagen de noticia';

  return `
    <div class="news-card-media">
      <img src="${image.src}" alt="${altText}">
    </div>
  `;
}

function renderNewsCard(news) {
  const detailUrl = getNewsDetailPath(news.slug);
  const dateLabel = formatDate(news.publishDate);
  const summary = truncateText(getSummary(news));

  return `
    <article class="news-card">
      ${renderCardCover(news)}
      <div class="news-card-content">
        ${dateLabel ? `<span class="news-card-date">${dateLabel}</span>` : ''}
        <h3 class="news-card-title"><a href="${detailUrl}">${news.title || 'Noticia'}</a></h3>
        ${summary ? `<p class="news-card-summary">${summary}</p>` : ''}
        ${renderTags(news.tags)}
        <a class="news-card-link" href="${detailUrl}">
          Ver detalle
          <i class="fa fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `;
}

function renderArchiveContent(newsItems = []) {
  if (!newsItems.length) {
    return `
      <section class="page-content news-page-content">
        <div class="container">
          <div class="news-archive-empty">
            <h3>No hay novedades por el momento</h3>
            <p>Vuelve pronto para consultar nuevas publicaciones o visita el portal principal de la universidad.</p>
            <a class="main-button" href="${SITE_CONFIG.routes.home}">Ir al inicio</a>
          </div>
        </div>
      </section>
    `;
  }

  const grouped = groupNewsByYear(newsItems);
  const years = Object.keys(grouped).sort((a, b) => {
    if (a === 'Sin fecha') return 1;
    if (b === 'Sin fecha') return -1;
    return Number(b) - Number(a);
  });

  const sections = years.map((year) => {
    const items = grouped[year];
    const countLabel = `${items.length} ${items.length === 1 ? 'publicación' : 'publicaciones'}`;

    return `
      <section class="news-archive-year" aria-labelledby="news-year-${year}">
        <div class="news-year-heading">
          <h3 id="news-year-${year}" class="news-year-title">${year}</h3>
          <span class="news-year-count">${countLabel}</span>
        </div>
        <div class="news-archive-grid">
          ${items.map(renderNewsCard).join('')}
        </div>
      </section>
    `;
  }).join('');

  return `
    <section class="page-content news-page-content">
      <div class="container">
        ${sections}
      </div>
    </section>
  `;
}

function createArchiveTemplate(newsItems = []) {
  return `
    ${renderArchiveHeader()}
    ${renderArchiveContent(newsItems)}
  `;
}

export function renderNewsList(options = {}) {
  const settings = { ...DEFAULT_OPTIONS, ...options };

  ready(() => {
    const container = select(settings.container);

    if (!container) {
      console.error(`[NewsList] Contenedor no encontrado: ${settings.container}`);
      return;
    }

    addClass(container, 'news-archive-root');
    clearElement(container);
    container.innerHTML = createArchiveTemplate(NEWS);
  });
}
