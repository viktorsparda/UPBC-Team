# Integración de Decap CMS

## Propósito
Se habilitó [Decap CMS](https://decapcms.org/) para que editores gestionen el contenido del sitio sin modificar código. La configuración actual apunta al repositorio `viktorsparda/UPBC-Team` y se ejecuta con un backend local durante el desarrollo.

## Archivos y scripts relevantes
- `admin/index.html`: carga el bundle `decap-cms.js` con el atributo `defer` para garantizar que el elemento `#nc-root` exista antes de montar la aplicación.
- `public/admin/config.yml`: define el backend de GitHub, la colección de contenido y los ajustes de previsualización.
- `public/assets/images/uploads/`: carpeta destino de archivos subidos desde la UI (incluye `.gitkeep` para que exista en el repositorio).
- `package.json`: script `npm run cms` que ejecuta `decap-server` en el puerto `8081` y actúa como proxy local.

## Cómo ejecutarlo en desarrollo
1. Instala dependencias si aún no lo has hecho: `npm install`.
2. En una terminal inicia la aplicación: `npm run dev` (Vite en `http://localhost:3000`).
3. En otra terminal levanta el backend local: `npm run cms` (proxy en `http://localhost:8081/api/v1`).
4. Abre `http://localhost:3000/admin/`. El panel detecta automáticamente el proxy (`local_backend: true`) y permite iniciar sesión con el modo "Local Backend".

Si la UI no carga, verifica que el script en `admin/index.html` conserve el atributo `defer`; sin él, el bundle intenta acceder a `#nc-root` antes de que exista y la página queda en blanco.

## Modelo de contenido
La colección inicial administra los archivos JSON de `src/content/careers/`:
- `slug`, `name`, `shortName`, `category`, `metaTitle`, `metaDescription`, `tagline`, `summary`.
- Objetos anidados para `description`, `outcomes`, `labour`, `curriculum`, `stats`, `sidebarSections` y `highlights`.
- `preview_path: "{{slug}}.html"` abre la página generada tras el build (`dist/{slug}.html`).

Los cambios guardan commits directamente en la rama configurada (`main`) y se propagan al front-end mediante los archivos JSON. El módulo `src/data/careers.js` y los componentes que consumen esta información se actualizan automáticamente tras cada edición.

## Manejo de medios
- `media_folder: public/assets/images/uploads`
- `public_folder: /assets/images/uploads`
Las imágenes subidas se copian al árbol `public/`, por lo que Vite las sirve como recursos estáticos en producción.

## Notas para despliegue
- El backend configurado es GitHub. Para producción se recomienda registrar una aplicación OAuth (o usar un proveedor existente) y añadir en `config.yml` las claves `base_url` y `auth_endpoint` correspondientes.
- Sin OAuth, los editores solo podrán trabajar con el backend local.

## Próximos pasos sugeridos
1. Proteger la carpeta `/admin/` detrás de autenticación cuando se despliegue públicamente.
2. Añadir nuevas colecciones (por ejemplo, noticias o páginas estáticas) siguiendo la estructura de YAML actual.
3. Documentar el flujo de aprobación de cambios (ramas, revisiones, despliegue) una vez definido el proceso editorial.
