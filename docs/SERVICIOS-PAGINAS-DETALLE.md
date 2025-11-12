# Fichas del Portal de Servicios

Este documento describe el contenido y los vínculos clave de cada página bajo `src/pages/servicios/`. Todas reutilizan el layout institucional (encabezado con breadcrumb, cuerpo en dos columnas y barra lateral con enlaces de acción).

## Resumen general
- **Plantilla común:** encabezado (`.page-title`), cuerpo (`.page-content`), columna principal con descripciones/pasos, sidebar con recursos.
- **Dependencias:** `@styles/main.css` (incluye `institutional.css` y `services.css`), Font Awesome para íconos.
- **Scripts:** únicamente `/src/main.js` (monta Navbar y Footer). No requieren JavaScript adicional.
- **Formatos de enlace:** `%BASE_URL%src/pages/...` mientras continúe el flujo de migración; posteriormente puede reemplazarse por rutas absolutas `/servicios/...`.

## Listado de páginas

| Archivo | Vite input | Foco principal | Acciones destacadas |
| --- | --- | --- | --- |
| `servicios/index.html` | `servicios` | Portada del portal: presenta el hero con accesos rápidos, cards de procedimientos, tablero de solicitudes y bloque de bienestar. | Enlaces a SIAAX, calendario escolar, reglamento, fichas de procedimientos y solicitudes. |
| `bienestar/servicio-medico.html` | `servicioMedico` | Cobertura del consultorio médico y dental (servicios ofrecidos, horarios y recomendaciones). | Correo `serviciomedico@upbc.edu.mx`, teléfono ext. 160, enlace al portal histórico, anuncio "Guía de primeros auxilios" (placeholder). |
| `procedimientos/reinscripcion.html` | `serviciosReinscripcion` | Paso a paso de la reinscripción cuatrimestral, requisitos previos y casos especiales. | Accesos a SIAAX, pago en línea, prórroga de pago, calendario escolar y contacto de Servicios Escolares. |
| `procedimientos/credencial.html` | `serviciosCredencial` | Modalidades del trámite de credencial (primera emisión, duplicado, actualización) y requisitos. | Formato de reposición, SIAAX, pago en línea y correo de ventanilla. |
| `procedimientos/constancias.html` | `serviciosConstancias` | Solicitud digital o impresa de constancias y tiempos de entrega. | Portal histórico, reglamento escolar, pago en línea. |
| `procedimientos/prestamo-documentos.html` | `serviciosPrestamoDocumentos` | Flujo para préstamo temporal de documentos originales, con alerta de disponibilidad. | Formato PDF oficial, portal histórico, contacto de Servicios Escolares. |
| `procedimientos/cambio-carrera.html` | `serviciosCambioCarrera` | Requisitos, proceso digital y documentación para cambio de programa académico mediante Consejo de Calidad. | Correo de coordinación académica, extensión 220, portal del Consejo de Calidad. |
| `procedimientos/certificado-parcial.html` | `serviciosCertificadoParcial` | Solicitud de certificado parcial tras baja definitiva, con checklist de requisitos. | Paquete de requisitos PDF, lineamientos de fotografía, portal histórico, correo de Gestión Escolar. |
| `procedimientos/ecrii.html` | `serviciosEcrii` | Convocatoria, pago y registro para el examen de colocación de inglés (ECRII). | Correo y extensión CADI, sitio CADI, convocatoria histórica, pago en línea. |
| `solicitudes/baja-temporal.html` | `serviciosBajaTemporal` | Trámite amparado por el reglamento para suspender estudios un cuatrimestre; lista de firmas necesarias. | Correo y teléfono de Servicios Escolares, reglamento escolar, portal histórico. |
| `solicitudes/baja-definitiva.html` | `serviciosBajaDefinitiva` | Motivos, precauciones y pasos para concluir la trayectoria académica. | Contacto de Servicios Escolares, reglamento escolar, portal histórico. |
| `solicitudes/prorroga-pago.html` | `serviciosProrrogaPago` | Requisitos y evaluación financiera para diferir el pago de colegiatura. | Correo y extensión de Finanzas, portal histórico de finanzas, reglamento escolar. |
| `soporte/correo-institucional.html` | `serviciosCorreoInstitucional` | Activación de cuentas @upbc.edu.mx para estudiantes y personal. | Correo `soporte@upbc.edu.mx`, teléfono ext. 150, portal histórico, anuncio "Guía de configuración" (placeholder). |

## Convenciones editoriales
- **Encabezados:** el `<h6>` comunica la ruta (`Servicios » Procedimientos`), el `<h2>` nombra el trámite.
- **Listados:** se utilizan `ul` para requisitos y `ol` para pasos cronológicos; se promueve enlazar al reglamento y portales históricos oficiales.
- **Sidebar:** agrupa recursos por bloques (`.sidebar-item`) e incluye íconos Font Awesome para reforzar el tipo de enlace (PDF, teléfono, correo, etc.).
- **Alertas:** cuando se requiere una nota destacada (ej. préstamo de documentos) se usa `.alert` con estilos inline acordes al sistema cromático.

## Cómo crear nuevas páginas de servicio
1. Duplica una ficha existente acorde a la categoría (procedimiento, solicitud, etc.).
2. Actualiza metadatos (`<title>`, `meta description`, breadcrumb, encabezados, enlaces).
3. Ajusta la sidebar con recursos pertinentes y mantén la estructura en dos columnas (`col-lg-8` / `col-lg-4`).
4. Añade la nueva ruta al bloque `rollupOptions.input` de `vite.config.js` y, si corresponde, enlázala desde el índice (`servicios/index.html`).
5. Valida en `npm run dev` que la página cargue sin errores y que los recursos externos respondan con código 200.

## Seguimiento pendiente
- Completar los placeholders marcados como "Próximamente" cuando existan los recursos PDF.
- Evaluar la migración del contenido al CMS (Decap) si se requiere edición frecuente por personal no técnico.
