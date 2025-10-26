/**
 * Utilidades para manipulación del DOM
 */

/**
 * Crea un elemento con atributos y contenido
 */
export function createElement(tag, attributes = {}, content = '') {
  const element = document.createElement(tag);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else {
      element.setAttribute(key, value);
    }
  });
  
  if (content) {
    if (typeof content === 'string') {
      element.innerHTML = content;
    } else {
      element.appendChild(content);
    }
  }
  
  return element;
}

/**
 * Selecciona un elemento del DOM
 */
export function select(selector, context = document) {
  return context.querySelector(selector);
}

/**
 * Selecciona múltiples elementos del DOM
 */
export function selectAll(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

/**
 * Añade event listeners de forma segura
 */
export function on(element, event, handler, options = {}) {
  if (!element) return;
  
  if (typeof element === 'string') {
    element = select(element);
  }
  
  if (element) {
    element.addEventListener(event, handler, options);
  }
}

/**
 * Elimina event listeners
 */
export function off(element, event, handler, options = {}) {
  if (!element) return;
  
  if (typeof element === 'string') {
    element = select(element);
  }
  
  if (element) {
    element.removeEventListener(event, handler, options);
  }
}

/**
 * Añade clases a un elemento
 */
export function addClass(element, ...classes) {
  if (!element) return;
  element.classList.add(...classes);
}

/**
 * Remueve clases de un elemento
 */
export function removeClass(element, ...classes) {
  if (!element) return;
  element.classList.remove(...classes);
}

/**
 * Toggle de clases
 */
export function toggleClass(element, className) {
  if (!element) return;
  element.classList.toggle(className);
}

/**
 * Verifica si un elemento tiene una clase
 */
export function hasClass(element, className) {
  if (!element) return false;
  return element.classList.contains(className);
}

/**
 * Inserta HTML de forma segura
 */
export function setHTML(element, html) {
  if (!element) return;
  element.innerHTML = html;
}

/**
 * Limpia el contenido de un elemento
 */
export function clearElement(element) {
  if (!element) return;
  element.innerHTML = '';
}

/**
 * Muestra un elemento
 */
export function show(element) {
  if (!element) return;
  element.style.display = '';
  removeClass(element, 'd-none');
}

/**
 * Oculta un elemento
 */
export function hide(element) {
  if (!element) return;
  addClass(element, 'd-none');
}

/**
 * Espera a que el DOM esté listo
 */
export function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

/**
 * Debounce para optimizar eventos
 */
export function debounce(func, wait = 250) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle para limitar ejecuciones
 */
export function throttle(func, limit = 250) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
