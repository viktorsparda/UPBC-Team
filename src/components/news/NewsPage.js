import { NEWS_BY_SLUG } from '@data/news.js';
import { ready, select, selectAll, clearElement, addClass } from '@utils/dom.js';

const DEFAULT_OPTIONS = {
  container: '#news-page'
};

const DEFAULT_BACK_LINK = {
  href: '/index.html#meetings',
  label: 'Volver a Novedades'
};

const SHARE_PLATFORMS = [
  { id: 'facebook', icon: 'fa-facebook', label: 'Facebook' },
  { id: 'twitter', icon: 'fa-twitter', label: 'Twitter' },
  { id: 'whatsapp', icon: 'fa-whatsapp', label: 'WhatsApp' },
  { id: 'email', icon: 'fa-envelope', label: 'Correo' }
];

function setDocumentMeta(news) {
  if (!news) return;

  const { metaTitle, metaDescription, title } = news;
  const pageTitle = metaTitle || title;

  if (pageTitle) {
    document.title = pageTitle;
    updateMetaTag('property', 'og:title', pageTitle);
    updateMetaTag('name', 'twitter:title', pageTitle);
  }

  if (metaDescription) {
    updateMetaTag('name', 'description', metaDescription, true);
    updateMetaTag('property', 'og:description', metaDescription);
    updateMetaTag('name', 'twitter:description', metaDescription);
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

function formatDate(dateString) {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return dateString;
    }

    return new Intl.DateTimeFormat('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  } catch (error) {
    console.warn('[NewsPage] No se pudo formatear la fecha:', error);
    return dateString;
  }
}

function getMetaItems(news) {
  if (!news || news.showMeta === false) return [];

  if (Array.isArray(news.meta) && news.meta.length) {
    return news.meta;
  }

  const items = [];

  if (news.publishDate) {
    items.push({ icon: 'fa-calendar', label: news.displayDate || formatDate(news.publishDate) });
  }

  if (news.author) {
    items.push({ icon: 'fa-user', label: news.author });
  }

  if (news.location) {
    items.push({ icon: 'fa-map-marker', label: news.location });
  }

  if (Array.isArray(news.tags) && news.tags.length) {
    items.push({ icon: 'fa-tag', label: news.tags.join(', ') });
  }

  return items;
}

function renderHeader(news) {
  const metaItems = getMetaItems(news);
  const contextParts = ['Novedades'];

  if (news.category) {
    contextParts.push(news.category);
  }

  const headerNote = news.subtitle || news.summary || '';

  return `
    <section class="page-title news-page-title">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h6>${contextParts.join(' &raquo; ')}</h6>
            <h2>${news.title || ''}</h2>
            ${headerNote ? `<p class="news-summary">${headerNote}</p>` : ''}
            ${metaItems.length ? renderMeta(metaItems) : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMeta(metaItems) {
  const items = metaItems.map((item) => `
    <li class="news-meta-item">
      ${item.icon ? `<i class="fa ${item.icon}"></i>` : ''}
      <span>${item.label}</span>
    </li>
  `).join('');

  return `
    <ul class="news-meta">
      ${items}
    </ul>
  `;
}

function renderCover(news) {
  if (!news.cover || news.showCover === false) return '';

  return `
    <figure class="news-cover">
      <img src="${news.cover.src}" alt="${news.cover.alt || ''}">
      ${news.cover.caption ? `<figcaption>${news.cover.caption}</figcaption>` : ''}
    </figure>
  `;
}

function renderDate(news) {
  const shouldRender = news.showDateInBody !== false && news.publishDate;
  if (!shouldRender) return '';

  return `
    <div class="news-date">
      <i class="fa fa-calendar"></i>
      <span>${news.displayDate || formatDate(news.publishDate)}</span>
    </div>
  `;
}

function renderBody(body = []) {
  if (!Array.isArray(body) || !body.length) return '';

  return body.map(renderBodyBlock).join('');
}

function formatText(text = '') {
  return text.replace(/\n+/g, '<br>');
}

function renderBodyBlock(block) {
  if (!block || typeof block !== 'object') return '';

  switch (block.type) {
    case 'paragraph':
      return `<p>${formatText(block.text || '')}</p>`;

    case 'image':
      return `
        <div class="news-image-container">
          <img src="${block.src}" alt="${block.alt || ''}">
          ${block.caption ? `<small>${block.caption}</small>` : ''}
        </div>
      `;

    case 'imageGrid':
      if (!Array.isArray(block.images) || !block.images.length) return '';
      return `
        <div class="news-images-grid">
          ${block.images.map((image) => `
            <img src="${image.src}" alt="${image.alt || ''}">
          `).join('')}
        </div>
      `;

    case 'gallery':
      if (!Array.isArray(block.images) || !block.images.length) return '';
      return `
        ${block.title ? `<h3 class="news-section-title">${block.title}</h3>` : ''}
        <div class="news-gallery">
          ${block.images.map((image) => `
            <div class="gallery-item">
              <img src="${image.src}" alt="${image.alt || ''}">
            </div>
          `).join('')}
        </div>
      `;

    case 'list':
      if (!Array.isArray(block.items) || !block.items.length) return '';
      return renderList(block);

    default:
      console.warn('[NewsPage] Tipo de bloque no soportado:', block.type);
      return '';
  }
}

function renderList(block) {
  const isOrdered = block.style === 'ordered';
  const tag = isOrdered ? 'ol' : 'ul';

  const items = block.items.map((item) => {
    if (typeof item === 'string') {
      return `<li>${item}</li>`;
    }
    return `<li>${item.text || ''}</li>`;
  }).join('');

  return `
    <${tag} class="news-body-list">
      ${items}
    </${tag}>
  `;
}

function renderSidebar(sidebar = []) {
  if (!Array.isArray(sidebar) || !sidebar.length) return '';

  return sidebar.map((block) => {
    if (!block || typeof block !== 'object') return '';

    if (block.type === 'text') {
      return `
        <div class="sidebar-item">
          ${block.title ? `<h4>${block.title}</h4>` : ''}
          ${block.text ? `<p>${formatText(block.text)}</p>` : ''}
        </div>
      `;
    }

    if (block.type === 'list') {
      if (!Array.isArray(block.items) || !block.items.length) return '';

      const items = block.items.map((item) => {
        const source = typeof item === 'string' ? { text: item } : item;
        const icon = source.icon ? `<i class="${source.icon}"></i>` : '';
        return `
          <li>
            ${icon}
            <span>${source.text || ''}</span>
          </li>
        `;
      }).join('');

      return `
        <div class="sidebar-item">
          ${block.title ? `<h4>${block.title}</h4>` : ''}
          <ul class="news-sidebar-list">
            ${items}
          </ul>
        </div>
      `;
    }

    console.warn('[NewsPage] Tipo de bloque en sidebar no soportado:', block.type);
    return '';
  }).join('');
}

function renderCTA(news) {
  const cta = news?.cta;
  const isEnabled = news?.ctaEnabled !== false && cta && typeof cta === 'object';

  if (!isEnabled) return '';

  const hasButton = cta.buttonLabel && cta.buttonUrl;

  return `
    <section class="news-cta">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            ${cta.title ? `<h3>${cta.title}</h3>` : ''}
            ${cta.text ? `<p>${formatText(cta.text)}</p>` : ''}
            ${hasButton ? `<a href="${cta.buttonUrl}" class="news-cta-button">${cta.buttonLabel}</a>` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(news) {
  const shareEnabled = news.shareEnabled !== false;
  const backLink = renderBackLink(news.backLink);
  const shareSection = shareEnabled ? renderShareSection() : '';

  if (!shareSection && !backLink) return '';

  return `
    <div class="news-footer">
      ${shareSection}
      ${backLink}
    </div>
  `;
}

function renderShareSection() {
  const buttons = SHARE_PLATFORMS.map((platform) => `
    <a href="#" class="share-button" data-share-platform="${platform.id}" title="Compartir en ${platform.label}">
      <i class="fa ${platform.icon}"></i>
    </a>
  `).join('');

  return `
    <div class="news-share">
      <h4>Compartir esta noticia:</h4>
      <div class="share-buttons">
        ${buttons}
      </div>
    </div>
  `;
}

function renderBackLink(backLink) {
  const link = { ...DEFAULT_BACK_LINK, ...(backLink || {}) };

  if (!link.href) return '';

  return `
    <a href="${link.href}" class="back-link">
      <i class="fa fa-arrow-left"></i>
      <span>${link.label || DEFAULT_BACK_LINK.label}</span>
    </a>
  `;
}

function setupShareButtons(container) {
  const buttons = selectAll('.share-button', container);
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const platform = button.dataset.sharePlatform;
      shareArticle(platform);
    });
  });
}

function shareArticle(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  switch (platform) {
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
      break;
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
      break;
    case 'whatsapp':
      window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
      break;
    case 'email':
      window.location.href = `mailto:?subject=${title}&body=Te comparto esta noticia: ${decodeURIComponent(url)}`;
      break;
    default:
      console.warn('[NewsPage] Plataforma de compartido no soportada:', platform);
  }
}

function createNewsTemplate(news) {
  const hasSidebar = Array.isArray(news.sidebar) && news.sidebar.length;
  const mainColumnClass = hasSidebar ? 'col-lg-8 news-main' : 'col-lg-10 offset-lg-1 news-main';
  const sidebarColumn = hasSidebar
    ? `<div class="col-lg-4">
        <aside class="sidebar news-sidebar">
          ${renderSidebar(news.sidebar)}
        </aside>
      </div>`
    : '';

  return `
    ${renderHeader(news)}
    <section class="page-content news-page-content">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="${mainColumnClass}">
            ${renderCover(news)}
            ${renderDate(news)}
            <div class="news-body">
              ${renderBody(news.body)}
            </div>
            ${renderFooter(news)}
          </div>
          ${sidebarColumn}
        </div>
      </div>
    </section>
    ${renderCTA(news)}
  `;
}

function renderError(container) {
  container.innerHTML = `
    <section class="news-error">
      <div class="container">
        <h2>Contenido no disponible</h2>
        <p>No encontramos la noticia solicitada. Por favor, regresa a la sección de novedades.</p>
      </div>
    </section>
  `;
}

export function renderNewsPage(slug, options = {}) {
  const settings = { ...DEFAULT_OPTIONS, ...options };

  ready(() => {
    const container = select(settings.container);

    if (!container) {
      console.error(`[NewsPage] Contenedor no encontrado: ${settings.container}`);
      return;
    }

    const news = NEWS_BY_SLUG[slug];

    addClass(container, 'news-page');
    clearElement(container);

    if (!news) {
      console.error(`[NewsPage] Noticia no encontrada para el slug: ${slug}`);
      renderError(container);
      return;
    }

    setDocumentMeta(news);
    container.innerHTML = createNewsTemplate(news);
    setupShareButtons(container);
  });
}
