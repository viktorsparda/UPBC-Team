# 🐛 Debug: Carousel No Aparece

## Problema Reportado
El usuario ve la imagen principal pero el carousel de carreras no aparece.

---

## ✅ Cambios Realizados

### 1. Corregido el formato de opciones del Carousel

**Antes (INCORRECTO):**
```javascript
const carrerasHeroCarousel = new Carousel('#carreras-hero-carousel', {
  itemsPerView: { desktop: 1, tablet: 1, mobile: 1 },  // ❌ No existe
  autoplayDelay: 3000,  // ❌ Debería ser autoplayTimeout
  showDots: true,       // ❌ Debería ser dots
  showNav: true         // ❌ Debería ser nav
});
```

**Ahora (CORRECTO):**
```javascript
const carrerasHeroCarousel = new Carousel('#carreras-hero-carousel', {
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,  // ✅ Correcto
  loop: true,
  nav: true,              // ✅ Correcto
  dots: true,             // ✅ Correcto
  responsive: {           // ✅ Estructura correcta
    0: { items: 1 },
    768: { items: 1 },
    992: { items: 1 }
  }
});
```

---

## 🔍 Cómo Verificar si Funciona

### Paso 1: Abre la Consola del Navegador
1. Presiona **F12** en el navegador
2. Ve a la pestaña **Console**
3. Busca estos mensajes:

**Deberías ver:**
```
🚀 UPBC Web - Cargando...
✅ Carousel de carreras inicializado Carousel {container: div#carreras-hero-carousel, ...}
✅ Carousel de servicios inicializado Carousel {container: div#servicios-carousel, ...}
✨ Página cargada completamente
```

**Si ves errores:**
- ❌ "Container not found" → El elemento `#carreras-hero-carousel` no existe
- ❌ "Carousel is not a constructor" → Problema de importación
- ❌ Cualquier error en rojo → Copia y pégame el error completo

---

### Paso 2: Inspecciona el HTML del Carousel

1. Click derecho en el área donde debería estar el carousel
2. Selecciona **Inspeccionar elemento**
3. Busca el elemento `<div id="carreras-hero-carousel">`

**Debería verse así:**
```html
<div id="carreras-hero-carousel" class="upbc-carousel">
  <div class="carousel-wrapper">
    <div class="carousel-track" style="transform: translateX(0%);">
      <div class="carousel-item" style="width: 100%;">
        <a href="#carreras-disponibles">
          <img src="/assets/images/carousel/...">
        </a>
      </div>
      <!-- más items... -->
    </div>
  </div>
  <button class="carousel-nav carousel-prev">...</button>
  <button class="carousel-nav carousel-next">...</button>
  <div class="carousel-dots">
    <button class="carousel-dot active"></button>
    <!-- más dots... -->
  </div>
</div>
```

**Verifica:**
- ✅ ¿Existe el `carousel-wrapper`?
- ✅ ¿Existe el `carousel-track`?
- ✅ ¿Los items tienen `style="width: 100%"`?
- ✅ ¿Existen los botones de navegación?
- ✅ ¿Existen los dots?

---

### Paso 3: Verifica que las Imágenes Cargan

En la pestaña **Network** (Red) de DevTools:
1. Recarga la página (Ctrl+R)
2. Filtra por "images"
3. Busca las imágenes del carousel

**Deberían aparecer con status 200:**
```
/assets/images/carousel/UPBC_POSTNuevacarrera_EDUCACION_1080x1080.jpg - 200 OK
/assets/images/carousel/UPBC_POSTNuevacarrera_GASTRONOMIA_1080x1080.jpg - 200 OK
...
```

**Si aparecen con 404:**
- Las rutas están mal
- Manda captura de la consola

---

### Paso 4: Verifica los Estilos CSS

En la pestaña **Elements** > **Computed**:
1. Selecciona el elemento `#carreras-hero-carousel`
2. Busca en "Computed" estas propiedades:

**Deberían estar aplicadas:**
```css
background: rgb(255, 255, 255) - white
border-radius: 15px
overflow: hidden
box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 20px
```

**También verifica `.carousel-track`:**
```css
display: flex
transition: transform 0.5s ease
```

---

## 🎯 Posibles Causas del Problema

### 1. JavaScript no se ejecutó
**Síntoma:** No ves los mensajes de consola  
**Solución:** Hard reload (Ctrl+Shift+R)

### 2. Carousel se construyó pero no es visible
**Síntoma:** Ves los mensajes pero no el carousel  
**Posibles causas:**
- CSS no cargó → Verifica que `main.css` esté cargando
- Altura colapsada → El contenedor tiene `height: 0`
- Imágenes no cargan → Rutas incorrectas

### 3. BaseLayout.init no ejecuta onReady
**Síntoma:** Solo ves "🚀 UPBC Web - Cargando..." pero no los demás mensajes  
**Solución:** Verifica que BaseLayout.js funcione correctamente

---

## 🔧 Quick Fix de Emergencia

Si nada funciona, podemos probar **inicializar sin BaseLayout**:

```html
<script type="module">
  import { Carousel } from '@components/Carousel.js';
  
  // Esperar a que el DOM cargue
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🔧 Inicializando carousels directamente...');
    
    // Pequeño delay para asegurar que todo cargó
    setTimeout(() => {
      const carrerasCarousel = new Carousel('#carreras-hero-carousel', {
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        nav: true,
        dots: true,
        responsive: {
          0: { items: 1 }
        }
      });
      console.log('✅ Carousel iniciado:', carrerasCarousel);
    }, 500);
  });
</script>
```

---

## 📸 Necesito de Ti

**Por favor envíame:**

1. **Captura de la consola (F12)**
   - Muéstrame todos los mensajes (errores y logs)

2. **Captura del inspector HTML**
   - Click derecho en el área del carousel → Inspeccionar
   - Muéstrame el árbol HTML del `#carreras-hero-carousel`

3. **¿Qué ves exactamente?**
   - ¿Ves espacio en blanco donde debería estar?
   - ¿Ves un rectángulo blanco vacío?
   - ¿No ves nada (como si no existiera)?

Con esa info puedo darte la solución exacta.

---

## ✅ Checklist Rápido

- [ ] Servidor Vite corriendo en http://localhost:3001/
- [ ] Página cargada sin errores 404
- [ ] Consola muestra "🚀 UPBC Web - Cargando..."
- [ ] Consola muestra "✅ Carousel de carreras inicializado"
- [ ] En inspector HTML existe `#carreras-hero-carousel`
- [ ] En inspector HTML existe `.carousel-wrapper` dentro del carousel
- [ ] En inspector HTML existe `.carousel-track` dentro del wrapper
- [ ] Las imágenes aparecen en Network tab con status 200
- [ ] El archivo `main.css` carga correctamente

---

**Actualización:** Opciones de carousel corregidas - ahora usa la estructura correcta que espera Carousel.js
