# Sesión 4 - Migración de Carreras

## Fecha
20 de octubre de 2025

## Resumen de la Sesión
Migración exitosa de 11 páginas individuales de carreras desde `/carreras/[nombre]/[nombre].html` a `/src/pages/[nombre].html` con estructura modular utilizando navbar y footer dinámicos.

## Páginas Migradas

### Carreras (11 páginas)
1. ✅ **Licenciatura en Administración** → `src/pages/administracion.html`
2. ✅ **Ingeniería en Animación y Efectos Visuales** → `src/pages/animacion.html`
3. ✅ **Licenciatura en Educación** → `src/pages/educacion.html`
4. ✅ **Ingeniería en Energía y Desarrollo Sostenible** → `src/pages/energia.html`
5. ✅ **Ingeniería en Gastronomía** → `src/pages/gastronomia.html`
6. ✅ **Ingeniería Industrial** → `src/pages/industrial.html`
7. ✅ **Ingeniería en Manufactura Aeronáutica** → `src/pages/manufactura.html`
8. ✅ **Ingeniería Mecatrónica** → `src/pages/mecatronica.html`
9. ✅ **Ingeniería en Microelectrónica** → `src/pages/microelectronica.html`
10. ✅ **Licenciatura en Negocios Internacionales** → `src/pages/negocios.html`
11. ✅ **Ingeniería en Tecnologías de la Información** → `src/pages/tecnologias.html`

## Cambios Realizados

### 1. Estructura de Archivos
**Antes:**
```
carreras/
├── administracion/
│   └── administracion.html
├── animacion/
│   └── animacion.html
├── educacion/
│   └── educacion.html
└── ... (8 carpetas más)
```

**Después:**
```
src/pages/
├── administracion.html
├── animacion.html
├── educacion.html
├── energia.html
├── gastronomia.html
├── industrial.html
├── manufactura.html
├── mecatronica.html
├── microelectronica.html
├── negocios.html
└── tecnologias.html
```

### 2. Cambios en Código

#### Rutas actualizadas
- `../../vendor/` → `/vendor/`
- `../../assets/` → `/assets/`
- `../../components-loader.js` → Eliminado

#### Elementos removidos
- `<div id="navbar-container"></div>` (navbar jQuery)
- `<div id="footer-container"></div>` (footer jQuery)
- Scripts jQuery y Bootstrap
- `components-loader.js`
- Scripts para menú móvil
- Estilos adicionales del footer

#### Elementos agregados
- `<script type="module" src="/src/main.js"></script>` (carga modular con Vite)

### 3. Configuración de Vite

Se actualizó `vite.config.js` agregando las 11 carreras:

```javascript
rollupOptions: {
  input: {
    main: path.resolve(__dirname, 'index.html'),
    // ... páginas anteriores ...
    // Carreras individuales
    administracion: path.resolve(__dirname, 'src/pages/administracion.html'),
    animacion: path.resolve(__dirname, 'src/pages/animacion.html'),
    educacion: path.resolve(__dirname, 'src/pages/educacion.html'),
    energia: path.resolve(__dirname, 'src/pages/energia.html'),
    gastronomia: path.resolve(__dirname, 'src/pages/gastronomia.html'),
    industrial: path.resolve(__dirname, 'src/pages/industrial.html'),
    manufactura: path.resolve(__dirname, 'src/pages/manufactura.html'),
    mecatronica: path.resolve(__dirname, 'src/pages/mecatronica.html'),
    microelectronica: path.resolve(__dirname, 'src/pages/microelectronica.html'),
    negocios: path.resolve(__dirname, 'src/pages/negocios.html'),
    tecnologias: path.resolve(__dirname, 'src/pages/tecnologias.html'),
  }
}
```

### 4. Enlaces Actualizados

Se actualizó `src/pages/carreras.html` para que todos los enlaces apunten a las páginas migradas:

**Antes:**
```html
<a href="/carreras/animacion/animacion.html">Ver detalles</a>
```

**Después:**
```html
<a href="/src/pages/animacion.html">Ver detalles</a>
```

## Proceso de Migración

### Script PowerShell Utilizado
```powershell
$carreras = @('animacion', 'educacion', 'energia', 'gastronomia', 
              'industrial', 'manufactura', 'mecatronica', 'microelectronica', 
              'negocios', 'tecnologias')

foreach ($carrera in $carreras) {
    $sourceFile = "carreras\$carrera\$carrera.html"
    $destFile = "src\pages\$carrera.html"
    
    # Leer y modificar contenido
    $content = Get-Content $sourceFile -Raw -Encoding UTF8
    
    # Reemplazos de rutas y estructura
    $content = $content -replace '\.\.\/\.\.\/vendor\/', '/vendor/'
    $content = $content -replace '\.\.\/\.\.\/assets\/', '/assets/'
    # ... más reemplazos ...
    
    # Guardar archivo migrado
    $content | Out-File -FilePath $destFile -Encoding UTF8 -NoNewline
}
```

### Actualización de Enlaces
```powershell
# Actualizar carreras.html
$content = Get-Content "src\pages\carreras.html" -Raw
$content = $content -replace '/carreras/([^/]+)/\1\.html', '/src/pages/$1.html'
```

## Carpetas Eliminadas
- ✅ `/carreras/administracion/`
- ✅ `/carreras/animacion/`
- ✅ `/carreras/educacion/`
- ✅ `/carreras/energia/`
- ✅ `/carreras/gastronomia/`
- ✅ `/carreras/industrial/`
- ✅ `/carreras/manufactura/`
- ✅ `/carreras/mecatronica/`
- ✅ `/carreras/microelectronica/`
- ✅ `/carreras/negocios/`
- ✅ `/carreras/tecnologias/`
- ✅ `/carreras/` (carpeta padre vacía)

## Arquitectura Actualizada

### Antes de la Migración
- Sistema jQuery con `components-loader.js`
- Navbar/Footer cargados dinámicamente con jQuery
- Rutas relativas `../../`
- 11 carpetas separadas para carreras

### Después de la Migración
- Sistema ES6 modules con Vite
- Navbar/Footer cargados con `BaseLayout` modular
- Rutas absolutas desde raíz `/`
- Todas las páginas en `src/pages/`
- Build optimizado con Vite

## Estadísticas

### Total de Páginas en src/pages/
- **25 páginas migradas** hasta ahora:
  - 1 página principal (index.html en raíz)
  - 7 páginas institucionales (historia, misión, becas, calendario, vida universitaria, directorio, instalaciones)
  - 3 páginas de oferta educativa (carreras, posgrados, educación continua)
  - 11 páginas de carreras individuales
  - 4 páginas de noticias

### Configuración de Vite
- **26 entradas** en rollupOptions.input (index.html + 25 páginas)

## Ventajas de la Nueva Estructura

1. **Organización centralizada**: Todas las páginas en una sola ubicación
2. **Rutas consistentes**: Todas usan rutas absolutas desde raíz
3. **Mantenibilidad**: Más fácil actualizar navbar/footer (un solo lugar)
4. **Performance**: Vite optimiza el bundle automáticamente
5. **Desarrollo**: Hot Module Replacement (HMR) funciona perfectamente
6. **Escalabilidad**: Agregar nuevas páginas es más sencillo

## Próximos Pasos

### Páginas Pendientes de Migración
1. **Subsecciones de Vida Universitaria** (5 páginas):
   - `vida-universitaria/bienestar-salud/bienestar-salud.html`
   - `vida-universitaria/comunidad-estudiantil/comunidad-estudiantil.html`
   - `vida-universitaria/convivencia-equidad/convivencia-equidad.html`
   - `vida-universitaria/eventos-especiales/eventos-especiales.html`
   - `vida-universitaria/vida-estudiantil/vida-estudiantil.html`

2. **Otras páginas**:
   - Admisiones (requisitos, proceso, costos)
   - Servicios (biblioteca, laboratorios, servicios escolares)
   - Cualquier otra página adicional en el sitio

## Notas Técnicas

### Rutas de Imágenes
Todas las imágenes de carreras permanecen en:
```
/assets/images/carreras/[nombre-carrera]/
```

### CSS Específico
Cada carrera mantiene sus estilos en:
- `/assets/css/carreras.css` (estilos generales)
- `/assets/css/section-titles.css` (títulos de secciones)
- `/assets/css/components/carrera-info-fix.css`
- `/assets/css/components/descripcion-carrera-fix.css`
- `/assets/css/components/carrera-detalle.css`

### Verificación de Funcionamiento
Todas las páginas son accesibles en:
```
http://localhost:3000/src/pages/[nombre-carrera].html
```

## Lecciones Aprendidas

1. **Automatización eficiente**: El script PowerShell permitió migrar 10 carreras en segundos
2. **Regex poderoso**: Los reemplazos con `-replace` fueron precisos y rápidos
3. **Verificación importante**: Revisar que las carpetas estén realmente vacías antes de eliminarlas
4. **Actualización de enlaces**: No olvidar actualizar todos los enlaces que apuntan a las páginas migradas

## Conclusión

✅ Migración de 11 carreras completada exitosamente
✅ vite.config.js actualizado con todas las entradas
✅ Enlaces en carreras.html actualizados
✅ Carpetas antiguas eliminadas
✅ Sistema funcionando correctamente

**Total de páginas migradas en el proyecto: 25**
**Total de páginas configuradas en Vite: 26 (incluyendo index.html)**
