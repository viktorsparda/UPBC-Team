# 🧪 Guía de Testing - UPBC Web Reestructurado

## 📋 Checklist de Validación

### ✅ Pre-requisitos
- [x] Node.js instalado
- [x] Dependencias instaladas (`npm install`)
- [x] Servidor de desarrollo corriendo (`npm run dev`)
- [x] URL: `http://localhost:3001/`

---

## 🖥️ TESTING DESKTOP (>992px)

### 1. Navbar (Header)
- [ ] **Sub-header visible** con teléfono y redes sociales
- [ ] **Logo UPBC** se muestra correctamente
- [ ] **Menú principal** con 5 items:
  - [ ] Inicio
  - [ ] Oferta Educativa (con dropdown)
  - [ ] Institucional (con dropdown)
  - [ ] Vida Universitaria (con dropdown)
  - [ ] Contacto
- [ ] **Dropdowns funcionan** al hacer hover
- [ ] **Sticky header** al hacer scroll (navbar se queda fijo arriba)
- [ ] **Links funcionan** (aunque lleven a páginas que aún no existen)

### 2. Hero Banner
- [ ] **Título principal** visible y legible
- [ ] **Subtítulo** presente
- [ ] **Texto descriptivo** legible
- [ ] **Dos botones CTA** visibles
- [ ] **Imagen de la derecha** carga correctamente
- [ ] **Fondo púrpura** con degradado

### 3. Novedades y Convocatorias
- [ ] **Título de sección** centrado
- [ ] **Sidebar izquierdo** con lista de convocatorias
- [ ] **Carousel de noticias** (lado derecho):
  - [ ] Muestra 2 noticias a la vez
  - [ ] Botones prev/next funcionan
  - [ ] Imágenes cargan correctamente
  - [ ] Hover en tarjetas hace efecto de elevación
  - [ ] Autoplay funciona (cambia cada 5 segundos)
  - [ ] Dots indicadores muestran página actual

### 4. Oferta Educativa
- [ ] **Fondo púrpura** de la sección
- [ ] **Dos cards informativos** (izquierda)
- [ ] **4 Accordions** (derecha):
  - [ ] Primer accordion abierto por defecto (Carreras Disponibles)
  - [ ] Al hacer click se abre/cierra
  - [ ] Solo uno puede estar abierto a la vez
  - [ ] Ícono chevron rota al abrir
  - [ ] Lista de 11 carreras visible

### 5. Vida Universitaria
- [ ] **Título de sección** centrado
- [ ] **Carousel de 4 items** horizontales:
  - [ ] Muestra 4 tarjetas en desktop
  - [ ] Navegación prev/next funciona
  - [ ] Imágenes cargan
  - [ ] Hover en cards hace elevación
  - [ ] Autoplay funciona (cada 4 segundos)
  - [ ] Links "Más información" visibles

### 6. Vinculación
- [ ] **Fondo gris claro**
- [ ] **Contenido lado izquierdo**:
  - [ ] Título "Colaboración Universidad-Empresa"
  - [ ] Párrafo descriptivo
  - [ ] Lista con checkmarks
  - [ ] Botón "Conoce nuestros convenios"
- [ ] **Grid de 4 servicios** (lado derecho):
  - [ ] Íconos visibles
  - [ ] Títulos y descripciones
  - [ ] Hover hace elevación

### 7. Historias de Éxito
- [ ] **Título de sección** centrado
- [ ] **Carousel de testimonios**:
  - [ ] Muestra 3 testimonios en desktop
  - [ ] Fotos circulares con borde púrpura
  - [ ] Quote icon dorado
  - [ ] Nombres, títulos y testimonios legibles
  - [ ] Navegación funciona
  - [ ] Autoplay funciona (cada 6 segundos)
- [ ] **Botón "Ver más"** centrado abajo

### 8. UPBC en Cifras
- [ ] **Fondo púrpura oscuro**
- [ ] **Título "La UPBC en Cifras"**
- [ ] **4 cajas de estadísticas**:
  - [ ] "92%" Empleabilidad
  - [ ] "156" Docentes Investigadores
  - [ ] "3500" Estudiantes Activos
  - [ ] "45" Convenios Internacionales
- [ ] **Ícono de play** (video institucional)

### 9. Contacto
- [ ] **Fondo gris claro**
- [ ] **Formulario** (lado izquierdo):
  - [ ] Título "Contacto"
  - [ ] 3 campos en fila: nombre, email, asunto
  - [ ] Textarea para mensaje
  - [ ] Botón "Enviar mensaje"
  - [ ] Focus en inputs muestra borde púrpura
  - [ ] Submit muestra alert (¡Gracias por tu mensaje!)
- [ ] **Info de contacto** (lado derecho):
  - [ ] Teléfono
  - [ ] Email
  - [ ] Dirección
  - [ ] Horario

### 10. Footer
- [ ] **Fondo oscuro**
- [ ] **3 columnas de widgets**:
  - [ ] Acerca de la UPBC
  - [ ] Enlaces útiles
  - [ ] Síguenos (redes sociales)
- [ ] **Copyright** con año dinámico
- [ ] **Todos los links visibles**

---

## 📱 TESTING TABLET (768px - 991px)

### Cambios Esperados:
- [ ] Navbar se mantiene pero más compacto
- [ ] News carousel muestra **1 noticia** a la vez
- [ ] Vida universitaria muestra **2 items** a la vez
- [ ] Historias muestra **2 testimonios** a la vez
- [ ] Grids de vinculación se reorganizan
- [ ] Formulario de contacto se mantiene

### Pruebas:
1. [ ] Redimensionar ventana a 800px de ancho
2. [ ] Verificar que carousels muestran cantidad correcta
3. [ ] Scroll vertical funciona bien
4. [ ] No hay overflow horizontal

---

## 📱 TESTING MOBILE (<768px)

### Cambios Esperados:
- [ ] **Navbar mobile**:
  - [ ] Hamburger button visible (☰)
  - [ ] Al hacer click, overlay oscuro aparece
  - [ ] Menú slide desde la izquierda
  - [ ] Items de menú apilados verticalmente
  - [ ] Dropdowns funcionan con click (muestran sub-items)
  - [ ] Botón X cierra el menú
  - [ ] Click en overlay cierra el menú

- [ ] **Hero banner**:
  - [ ] Texto e imagen apilados verticalmente
  - [ ] Botones apilados o side-by-side (según ancho)

- [ ] **Carousels**:
  - [ ] News: **1 noticia** a la vez
  - [ ] Vida universitaria: **1 item** a la vez
  - [ ] Historias: **1 testimonio** a la vez
  - [ ] Touch/swipe funciona para navegar
  - [ ] Botones nav más pequeños pero funcionales

- [ ] **Accordions**: Se mantienen funcionales

- [ ] **Vinculación**: Grid cambia a 1 columna

- [ ] **Formulario**: 
  - [ ] Campos apilados verticalmente
  - [ ] Fácil de completar en mobile

- [ ] **Footer**: Columnas apiladas verticalmente

### Pruebas:
1. [ ] Abrir en Chrome DevTools modo responsive
2. [ ] Probar en iPhone (375px)
3. [ ] Probar en Android (360px)
4. [ ] Touch/swipe en carousels
5. [ ] Mobile menu abre/cierra correctamente
6. [ ] Formulario se completa sin zoom excesivo

---

## 🎨 TESTING VISUAL

### Colores
- [ ] Púrpura primario: `#602b82` se usa consistentemente
- [ ] Dorado secundario: `#cd8b47` en acentos
- [ ] Texto oscuro legible: `#333333`
- [ ] Fondos alternados: blanco / gris claro

### Tipografía
- [ ] Fuente principal: Poppins
- [ ] Títulos grandes y legibles
- [ ] Texto de párrafos con line-height cómodo

### Espaciado
- [ ] Secciones con padding generoso
- [ ] No hay texto pegado a bordes
- [ ] Elementos bien separados

### Imágenes
- [ ] Todas las imágenes cargan
- [ ] No hay imágenes rotas (alt text visible si falla)
- [ ] Imágenes responsive (no se distorsionan)

---

## ⚡ TESTING DE FUNCIONALIDAD

### JavaScript
- [ ] Console no muestra errores críticos
- [ ] "Home page loaded" aparece en console
- [ ] Carousels se inicializan (3 instancias)
- [ ] Accordions responden a clicks
- [ ] Formulario previene submit y muestra alert

### CSS
- [ ] No hay estilos rotos
- [ ] Hover effects funcionan
- [ ] Transiciones suaves
- [ ] Box shadows visibles

### Navegación
- [ ] Links internos funcionan (#home, #contact, etc.)
- [ ] Scroll suave entre secciones
- [ ] Active link se resalta en navbar

---

## 🐛 PROBLEMAS COMUNES Y SOLUCIONES

### 1. "Cannot find module '@components/...'"
**Solución:** Reinicar el servidor de Vite
```bash
Ctrl+C
npm run dev
```

### 2. Imágenes no cargan (404)
**Verificar:**
- Que las imágenes existan en `/public/assets/images/`
- Que las rutas usen `/assets/...` (no `/public/assets/...`)

### 3. Carousels no funcionan
**Verificar:**
- Console del navegador (F12)
- Que los IDs de los carousels coincidan
- Que el script de inicialización esté al final del HTML

### 4. Mobile menu no abre
**Verificar:**
- Que el navbar se haya inicializado
- Console para ver errores
- Que los event listeners estén atados

### 5. Estilos se ven raros
**Verificar:**
- Que `main.css` importe todos los archivos necesarios
- Que Bootstrap esté cargando
- Cache del navegador (Ctrl+Shift+R para hard reload)

---

## ✅ CHECKLIST FINAL

Antes de considerar la Fase 4 completamente validada:

- [ ] Todos los tests de desktop pasaron
- [ ] Todos los tests de tablet pasaron
- [ ] Todos los tests de mobile pasaron
- [ ] Tests visuales pasaron
- [ ] Tests de funcionalidad pasaron
- [ ] No hay errores en console
- [ ] Performance es aceptable (página carga < 3 segundos)

---

## 📸 CAPTURAS SUGERIDAS

Tomar screenshots de:
1. Vista completa del home en desktop
2. Mobile menu abierto
3. Carousel de noticias (desktop)
4. Accordions (uno abierto)
5. Footer completo
6. Formulario de contacto

---

## 🚀 SIGUIENTES PASOS

Una vez validado todo:
1. ✅ Marcar Fase 4 como completamente validada
2. 🎯 Proceder con Fase 5 (Páginas Internas)
3. 📝 Documentar cualquier issue encontrado
4. 🔧 Hacer ajustes finos si es necesario

---

## 📞 SOPORTE

Si encuentras algún problema:
1. Revisar console del navegador (F12)
2. Verificar que el servidor esté corriendo
3. Hacer hard reload (Ctrl+Shift+R)
4. Verificar que las dependencias estén instaladas

---

**🎉 ¡Éxito en las pruebas!**

*Creado: Después de completar Fase 4*  
*Última actualización: $(Get-Date)*
