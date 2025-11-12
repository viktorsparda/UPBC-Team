# Portal de Servicios - Implementación

## Objetivo
Centraliza los trámites y apoyos de la comunidad UPBC en un micrositio propio bajo `src/pages/servicios/`. El portal actúa como índice visual y enlaza a once fichas detalladas (procedimientos, solicitudes, bienestar y soporte tecnológico).

## Estructura general
- **Ruta principal:** `src/pages/servicios/index.html` (entrada registrada en `vite.config.js` como `servicios`).
- **Subsecciones:**
  - `procedimientos/` (reinscripción, credencial, constancias, préstamo de documentos, cambio de carrera, certificado parcial, ECRII).
  - `solicitudes/` (baja temporal, baja definitiva, prórroga de pago).
  - `bienestar/servicio-medico.html`.
  - `soporte/correo-institucional.html`.
- **Layout:** todas las páginas montan `Navbar` y `Footer` mediante `BaseLayout` (`/src/main.js`).
- **Rutas de recursos:** usan el marcador `%BASE_URL%` para convivir con procesos de reemplazo durante la migración. Al construir con Vite, se sustituye por `/` o por la base configurada.

## Diseño y estilos
- `src/styles/pages/services.css` define el hero, cards, listas y componentes visuales del portal.
- Las fichas individuales heredan estilos de `src/styles/pages/institutional.css` (encabezado, contenido en dos columnas, sidebar de acciones rápidas).
- Se reutiliza la tipografía Montserrat/Poppins y la paleta institucional (`--color-primary` morado, `--color-secondary` dorado) declarada en `base/variables.css`.
- Los iconos provienen de `fontawesome.css` (cargado en cada HTML).

### Secciones clave del índice
1. **Hero** con breadcrumb, descripción y accesos rápidos a SIAAX, calendario escolar y reglamento (clase `.services-cta-row`).
2. **Procedimientos académicos esenciales** (cards con título, breve resumen, etiquetas contextuales y CTA `Ver proceso`).
3. **Solicitudes y apoyos especiales** con un dashboard de gestiones frecuentes, card destacada para bajas/certificados y lista de accesos rápidos.
4. **Bienestar integral** combinando listado de servicios (médico, correo institucional, examen ECRII) y un panel de contacto.

## Detalle de páginas individuales
Todas las fichas comparten la misma plantilla:
- `<section class="page-title">` para mostrar la jerarquía (Servicios » Procedimientos/Solicitudes/etc.).
- `<section class="page-content">` con la información principal (texto introductorio, pasos, requisitos).
- Columna derecha con `.sidebar` que agrupa enlaces rápidos, horarios o contactos específicos.

Consulta `docs/SERVICIOS-PAGINAS-DETALLE.md` para un resumen página por página.

## Registro en el build
Las entradas del portal aparecen en `vite.config.js`:
```javascript
rollupOptions: {
  input: {
    servicios: path.resolve(__dirname, 'src/pages/servicios/index.html'),
    servicioMedico: path.resolve(__dirname, 'src/pages/servicios/bienestar/servicio-medico.html'),
    serviciosReinscripcion: path.resolve(__dirname, 'src/pages/servicios/procedimientos/reinscripcion.html'),
    serviciosCredencial: path.resolve(__dirname, 'src/pages/servicios/procedimientos/credencial.html'),
    serviciosConstancias: path.resolve(__dirname, 'src/pages/servicios/procedimientos/constancias.html'),
    serviciosPrestamoDocumentos: path.resolve(__dirname, 'src/pages/servicios/procedimientos/prestamo-documentos.html'),
    serviciosCambioCarrera: path.resolve(__dirname, 'src/pages/servicios/procedimientos/cambio-carrera.html'),
    serviciosCertificadoParcial: path.resolve(__dirname, 'src/pages/servicios/procedimientos/certificado-parcial.html'),
    serviciosEcrii: path.resolve(__dirname, 'src/pages/servicios/procedimientos/ecrii.html'),
    serviciosBajaTemporal: path.resolve(__dirname, 'src/pages/servicios/solicitudes/baja-temporal.html'),
    serviciosBajaDefinitiva: path.resolve(__dirname, 'src/pages/servicios/solicitudes/baja-definitiva.html'),
    serviciosProrrogaPago: path.resolve(__dirname, 'src/pages/servicios/solicitudes/prorroga-pago.html'),
    serviciosCorreoInstitucional: path.resolve(__dirname, 'src/pages/servicios/soporte/correo-institucional.html')
  }
}
```
Esto garantiza un archivo HTML por servicio en la carpeta `dist/` y mantiene URL planas (`/servicios/...`).

## Mejores prácticas para extender el portal
1. **Nueva ficha:** duplica una página existente, actualiza metaetiquetas, encabezados y contenido. Mantén el prefijo correcto en el título (`Servicios » ...`).
2. **Actualizar tarjetas del índice:** edita los enlaces dentro de `index.html`. Usa `%BASE_URL%src/pages/...` mientras se mantenga el flujo de migración; si se elimina esa convención, reemplaza por rutas absolutas `/servicios/...`.
3. **Agregar estilos específicos:** extiende `services.css` o añade una sección a `institutional.css` si se trata de una ficha individual; evita estilos inline.
4. **Registrar la página en `vite.config.js`:** agrega una entrada adicional en `rollupOptions.input` para asegurar que el build genere el HTML.
5. **Revisar enlaces externos:** todos los CTAs a SIAAX, reglamentos o portales históricos funcionan con `target="_blank"` + `rel="noopener"` para seguridad.

## Validación recomendada
- Ejecutar `npm run dev` y navegar por `http://localhost:3000/src/pages/servicios/index.html` y cada ficha individual.
- Revisar consola del navegador (no debería haber errores 404 ni warnings de recursos faltantes).
- Probar el comportamiento responsive desde DevTools.

## Próximos pasos sugeridos
- Añadir fichas pendientes (biblioteca, laboratorios, bolsa de trabajo) siguiendo la misma plantilla.
- Construir componentes compartidos (por ejemplo, alertas o timelines) si se detecta repetición excesiva en futuras páginas.
- Documentar, en el CMS, las páginas que convenga administrar con Decap a mediano plazo.
