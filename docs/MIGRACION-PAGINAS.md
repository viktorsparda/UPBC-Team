# Migración de Páginas a src/pages

## ✅ Páginas Migradas

Se han migrado las siguientes páginas del root a `src/pages/` con la nueva estructura modular:

### 1. **Historia** (`src/pages/historia.html`)
- **Ruta anterior:** `historia/historia.html`
- **Ruta nueva:** `src/pages/historia.html`
- **URL de desarrollo:** `http://localhost:3000/src/pages/historia.html`
- **Contenido:** Historia de la UPBC, rectores, infraestructura

### 2. **Misión y Visión** (`src/pages/mision-vision.html`)
- **Ruta anterior:** `mision-vision/mision-vision.html`
- **Ruta nueva:** `src/pages/mision-vision.html`
- **URL de desarrollo:** `http://localhost:3000/src/pages/mision-vision.html`
- **Contenido:** Misión, visión, valores, política de calidad, modelo educativo

### 3. **Becas** (`src/pages/becas.html`)
- **Ruta anterior:** `becas/becas.html`
- **Ruta nueva:** `src/pages/becas.html`
- **URL de desarrollo:** `http://localhost:3000/src/pages/becas.html`
- **Contenido:** Información de becas, requisitos, tipos de becas

### 4. **Calendario** (`src/pages/calendario.html`)
- **Ruta anterior:** `calendario.html`
- **Ruta nueva:** `src/pages/calendario.html`
- **URL de desarrollo:** `http://localhost:3000/src/pages/calendario.html`
- **Contenido:** Calendario escolar 2025 con visualizador PDF

## 🎯 Cambios Implementados

### Estructura HTML Modernizada
Todas las páginas ahora usan:
- ✅ **Navbar modular:** Carga automática desde `src/components/Navbar.js`
- ✅ **Footer modular:** Carga automática desde `src/components/Footer.js`
- ✅ **Rutas absolutas:** Todas las rutas usan `/` desde el root
- ✅ **Scripts ES6:** Uso de `type="module"` y `src/main.js`
- ✅ **Estilos inline:** Estilos específicos de página incluidos en `<style>`

### Ejemplo de Estructura
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Título - UPBC</title>
  <link rel="stylesheet" href="/assets/css/fontawesome.css">
  <style>
    /* Estilos específicos de la página */
  </style>
</head>
<body>
  <!-- Navbar Container -->
  <div id="navbar-container"></div>

  <!-- Main Content -->
  <main>
    <!-- Contenido de la página -->
  </main>

  <!-- Footer Container -->
  <div id="footer-container"></div>

  <!-- Main Script -->
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

## 📝 Actualización de Enlaces

### En el Navbar
Actualizar los enlaces en `src/components/Navbar.js` para apuntar a las nuevas rutas:

```javascript
// Ejemplo de enlaces actualizados
{
  label: 'Historia',
  href: '/src/pages/historia.html'
},
{
  label: 'Misión y Visión',
  href: '/src/pages/mision-vision.html'
},
{
  label: 'Becas',
  href: '/src/pages/becas.html'
},
{
  label: 'Calendario',
  href: '/src/pages/calendario.html'
}
```

## 🔧 Configuración de Vite

El archivo `vite.config.js` ha sido actualizado para incluir todas las páginas en el build:

```javascript
rollupOptions: {
  input: {
    main: path.resolve(__dirname, 'index.html'),
    historia: path.resolve(__dirname, 'src/pages/historia.html'),
    misionVision: path.resolve(__dirname, 'src/pages/mision-vision.html'),
    becas: path.resolve(__dirname, 'src/pages/becas.html'),
    calendario: path.resolve(__dirname, 'src/pages/calendario.html'),
  }
}
```

## 🚀 Cómo Probar las Páginas

1. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Acceder a las páginas:**
   - Historia: `http://localhost:3000/src/pages/historia.html`
   - Misión y Visión: `http://localhost:3000/src/pages/mision-vision.html`
   - Becas: `http://localhost:3000/src/pages/becas.html`
   - Calendario: `http://localhost:3000/src/pages/calendario.html`

## 📋 Próximos Pasos

### Páginas Pendientes de Migrar
- [ ] Vida Universitaria (`vida-universitaria/vida-universitaria.html`)
- [ ] Noticias (páginas en carpetas `news-*`)
- [ ] Páginas de carreras (carpetas en `carreras/`)
- [ ] Oferta Educativa (carpetas en `oferta-educativa/`)
- [ ] Universidad (carpetas en `universidad/`)

### Tareas Adicionales
- [ ] Actualizar todos los enlaces del navbar para usar las nuevas rutas
- [ ] Verificar que todas las imágenes y assets se carguen correctamente
- [ ] Probar responsive en todas las páginas migradas
- [ ] Limpiar las carpetas antiguas del root (opcional, después de verificar)

## 🎨 Características Mantenidas

Cada página migrada conserva:
- ✅ **Diseño original:** Todos los estilos y layouts se mantienen
- ✅ **Funcionalidad:** Scripts y comportamientos originales
- ✅ **Contenido:** Texto e imágenes sin cambios
- ✅ **Responsive:** Comportamiento móvil preservado
- ✅ **Colores UPBC:** Morado (#602b82) y dorado (#cd8b47)

## ⚠️ Notas Importantes

1. **Rutas de Imágenes:** Todas las rutas de imágenes ahora son absolutas desde el root (`/assets/images/...` o `/Imagenes de Historia/...`)

2. **PDF en Calendario:** La página de calendario usa PDF.js para visualizar el PDF del calendario escolar.

3. **Estilos Inline:** Los estilos específicos están en cada página para facilitar la personalización sin afectar otras páginas.

4. **Scripts Modular:** Todas las páginas cargan solo `/src/main.js` que a su vez carga navbar, footer y utilidades.

## 📞 Soporte

Si encuentras algún problema con las páginas migradas, verifica:
1. Que el servidor de desarrollo esté corriendo (`npm run dev`)
2. Que las rutas de assets sean correctas (deben empezar con `/`)
3. Que el navegador no tenga caché antiguo (F5 o Ctrl+Shift+R)
4. Que los componentes navbar y footer se carguen correctamente

---

**Última actualización:** 9 de octubre de 2025
**Versión:** 2.0
