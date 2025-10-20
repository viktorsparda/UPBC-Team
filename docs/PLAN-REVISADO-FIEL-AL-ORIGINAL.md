# 📋 Plan Revisado - Migración Incremental (Basado en Original)

## 🎯 Objetivo
Replicar **exactamente** el diseño del `index.old.html` pero con la nueva arquitectura moderna.

---

## 📸 Análisis del Original

### Hero Banner (Main Banner)
**Estructura Real del Original:**
```
┌─────────────────────────────────────────────┐
│   FONDO PÚRPURA (#602b82)                   │
│  ┌────────────┐  ┌──────────────────────┐  │
│  │  Imagen    │  │  Carousel Carreras   │  │
│  │  Principal │  │  (11 imágenes)       │  │
│  │  + Botón   │  │  owl-carousel        │  │
│  │  Amarillo  │  │                      │  │
│  └────────────┘  └──────────────────────┘  │
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │  Carousel de Servicios (5 items)     │  │
│  │  - Calendario, Becas, SIAXX, etc.    │  │
│  └──────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**Elementos Clave:**
- 🟣 Fondo: `var(--upbc-purple)` o `#602b82`
- 📷 Imagen izquierda: `UPBC_PAGWEB_fotoprincipal_1080x1080.jpg`
- 🔘 Botón amarillo superpuesto: "¡INSCRÍBETE AHORA!" con icono
- 🎠 Carousel derecha: 11 imágenes de carreras (owl-carousel)
- 🎠 Carousel inferior: 5 servicios (owl-carousel)

### Novedades y Convocatorias
```
┌────────┐  ┌──────────────────────────┐
│ Sidebar│  │  Carousel de Noticias    │
│ Convoc.│  │  (4 noticias con fechas) │
└────────┘  └──────────────────────────┘
```

---

## ✅ Estado Actual vs Original

### ✅ Ya Tenemos (Correcto):
1. **Navbar** - ✅ Funcionando con nuevo sistema
2. **Footer** - ✅ Funcionando con nuevo sistema
3. **Componente Carousel.js** - ✅ Creado y listo para usar
4. **Estilos CSS** - ✅ Ya preparados en home.css

### ❌ Lo que Falta Corregir:

#### PASO 1 (Actual): Hero Banner - NECESITA AJUSTES
**Problema:** Implementé una versión simplificada diferente al original

**Lo que debería tener:**
- [ ] Fondo púrpura correcto
- [ ] Imagen principal con botón amarillo superpuesto (izquierda)
- [ ] Carousel de 11 carreras (derecha)  
- [ ] Carousel de 5 servicios (abajo)

#### PASO 2 (Actual): Novedades - PARCIALMENTE CORRECTO
**Lo que tiene:**
- ✅ Sidebar de convocatorias
- ⚠️ 2 noticias estáticas (debe ser carousel de 4)

**Lo que debe tener:**
- [ ] Carousel con 4 noticias
- [ ] Sistema de paginación (dots)
- [ ] Botones prev/next

---

## 🔄 Plan de Acción Corregido

### PRIORIDAD 1: Corregir Hero Banner
**Acción:** Reemplazar hero actual con versión fiel al original

**Estructura a implementar:**
```html
<section class="main-banner" style="background-color: #602b82;">
  <div class="container">
    <!-- Fila superior: Imagen + Carousel -->
    <div class="row">
      <!-- Columna izquierda: Imagen con botón -->
      <div class="col-lg-6">
        <div class="banner-image-container">
          <img src="/assets/images/imagen-inicio/UPBC_PAGWEB_fotoprincipal_1080x1080.jpg">
          <a href="#apply" class="inscribete-button">
            <i class="fa fa-arrow-right"></i>
            <span>¡INSCRÍBETE AHORA!</span>
          </a>
        </div>
      </div>
      
      <!-- Columna derecha: Carousel de carreras -->
      <div class="col-lg-6">
        <div id="carreras-carousel" class="upbc-carousel">
          <!-- 11 imágenes de carreras -->
        </div>
      </div>
    </div>
    
    <!-- Fila inferior: Carousel de servicios -->
    <div class="row">
      <div class="col-12">
        <div id="servicios-carousel" class="upbc-carousel">
          <!-- 5 servicios -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### PRIORIDAD 2: Agregar Carousel a Novedades
**Acción:** Convertir las 2 noticias estáticas en carousel de 4

### PRIORIDAD 3: Continuar con Resto de Secciones
- Oferta Educativa (accordions)
- Vida Universitaria (carousel)
- Vinculación
- Historias de Éxito (carousel)
- Cifras
- Contacto mejorado

---

## 🎨 Assets Necesarios del Original

### Imágenes del Carousel de Carreras:
1. `UPBC_POSTNuevacarrera_EDUCACION_1080x1080.jpg`
2. `UPBC_POSTNuevacarrera_GASTRONOMIA_1080x1080.jpg`
3. `UPBC_POSTNuevacarrera_INDUSTRIAL_1080x1080.jpg`
4. `UPBC_POSTNuevacarrera_NEGOCIOSyMERCADOTECNIA_1080x1080.jpg`
5. `UPBC_POSTPrimerasCarreras_ADMINISTRACION_1080x1080.jpg`
6. `UPBC_POSTPrimerasCarreras_ENERGIA_1080x1080.jpg`
7. `UPBC_POSTPrimerasCarreras_MANUFACTURA_1080x1080.jpg`
8. `UPBC_POSTPrimerasCarreras_MECATRONICA_1080x1080.jpg`
9. `UPBC_POSTPrimerasCarreras_TI_1080x1080.jpg`
10. `UPBC_POSTPrimrasCarreras_ANIMACION_1080x1080.jpg`
11. `UPBC_Semiconductores_POST_1080x1080-01.jpg`

### Imagen Principal:
- `UPBC_PAGWEB_fotoprincipal_1080x1080.jpg`

### Iconos de Servicios:
- `service-icon-01.png` (Calendario)
- `service-icon-02.png` (Becas)
- `service-icon-03.png` (SIAXX)

---

## 📝 Notas Importantes

1. **Usar owl-carousel original temporalmente:**
   - El original usa `owl.carousel`
   - Podemos usar nuestro `Carousel.js` pero debe verse IGUAL

2. **Mantener colores exactos:**
   - Púrpura: `#602b82` o `var(--upbc-purple)`
   - Amarillo: `#cd8b47` o `#ffc107`

3. **Verificar que las imágenes existan:**
   - Todas deben estar en `/public/assets/images/`

4. **Testing continuo:**
   - Después de cada cambio, verificar en navegador
   - Comparar lado a lado con el original si es posible

---

## 🚀 Siguiente Acción

**Opción A:** Corregir el Hero Banner para que sea fiel al original
**Opción B:** Dejar el Hero simple y continuar con otras secciones
**Opción C:** Primero verificar que todas las imágenes necesarias existan

**¿Qué prefieres?** 🤔

---

**Creado:** Después de revisar index.old.html  
**Propósito:** Asegurar fidelidad al diseño original
