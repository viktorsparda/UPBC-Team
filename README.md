# UPBC Web v2.0

Sitio oficial de la Universidad Politécnica de Baja California (UPBC) reconstruido con Vite y una arquitectura modular que facilita el mantenimiento del contenido institucional.

## 🧾 Tabla de contenido

- [Objetivos del repositorio](#-objetivos-del-repositorio)
- [Requisitos previos](#-requisitos-previos)
- [Configuración inicial](#-configuración-inicial)
- [Estructura principal](#-estructura-principal)
- [Flujo de desarrollo](#-flujo-de-desarrollo)
- [Componentes y datos](#-componentes-y-datos)
- [Añadir o actualizar páginas](#-añadir-o-actualizar-páginas)
- [Estilos y assets](#-estilos-y-assets)
- [Scripts disponibles](#-scripts-disponibles)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Utilidades de mantenimiento](#-utilidades-de-mantenimiento)
- [Documentación complementaria](#-documentación-complementaria)
- [Convenciones de colaboración](#-convenciones-de-colaboración)
- [Checklist rápido antes de hacer PR](#-checklist-rápido-antes-de-hacer-pr)


## ✅ Requisitos previos

| Herramienta | Versión recomendada | Notas |
|-------------|---------------------|-------|
| [Node.js](https://nodejs.org/) | ≥ 18.0 | Vite 7 requiere Node 18 o superior. |
| npm (incluido con Node) | ≥ 9.0 | Se usa para manejar dependencias y scripts. |
| Git | Última estable | Necesario para clonar y colaborar. |
| Acceso a GitHub | - | Permisos para `clone`, `push` y publicar en `gh-pages`. |

> 💡 **Tip:** valida tu versión local con `node -v` y `npm -v`. Actualiza si estás por debajo de las recomendadas.

## 🧰 Configuración inicial

1. **Clona** el repositorio y entra a la carpeta del proyecto.
2. **Instala** las dependencias.
3. **Levanta** el servidor de desarrollo.

```powershell
git clone https://github.com/viktorsparda/UPBC-Team.git
cd UPBC-Team
npm install
npm run dev
```

- El servidor de desarrollo se abre en `http://localhost:3000` por defecto.
- Vite recarga automáticamente al guardar cambios en `src/` o `public/`.

## 🗂️ Estructura principal

```text
.
├── index.html                 # Landing principal controlada por Vite
├── package.json               # Scripts y dependencias
├── vite.config.js             # Configuración de Vite y entradas HTML
├── public/                    # Assets estáticos servidos tal cual
│   └── assets/, fonts/, images/, pdfs/
├── src/
│   ├── main.js                # Punto de entrada Vite
│   ├── layouts/               # Layouts compartidos (BaseLayout)
│   ├── components/            # Navbar, Footer, Carousel, etc.
│   ├── data/                  # Datos dinámicos (ej. carreras)
│   ├── pages/                 # HTML individuales migrados desde el legacy
│   ├── styles/                # CSS modularizado (base, components, pages)
│   └── utils/                 # Helpers (dom, constantes)
├── scripts/                   # Utilidades para ajustar rutas durante la migración
└── docs/                      # Bitácoras y guías de cada fase
```

## 🔄 Flujo de desarrollo

1. Inicia `npm run dev` y asegúrate de que la consola no muestre errores.
2. Edita contenido en `src/pages/*.html` o componentes JS/CSS según corresponda.
3. Valida en el navegador que el layout y los assets carguen correctamente.
4. Antes de hacer commit, revisa que no haya rutas absolutas (`/assets/...`) que rompan en producción (usa las utilidades descritas más abajo si tienes dudas).

### Hot reload con múltiples páginas

- Vite sirve cada entrada definida en `vite.config.js`. Puedes acceder directamente a:
  - `http://localhost:3000/src/pages/historia.html`
  - `http://localhost:3000/src/pages/carreras.html`
  - etc.
- Si agregas una página nueva, recuerda registrarla en la sección `build.rollupOptions.input`.

## 🧩 Componentes y datos

- `src/layouts/BaseLayout.js` inicializa la navegación y el footer en cualquier página que incluya los contenedores `#navbar-container` y `#footer-container`.
- `src/components/` alberga piezas reutilizables; los constructores aceptan el elemento contenedor y manejan su propio ciclo de vida.
- `src/data/careers.js` centraliza la información de carreras para reutilizarla en tablas o cards.
- `src/utils/dom.js` expone helpers como `ready()` para ejecutar lógica cuando el DOM está listo.

## 📝 Añadir o actualizar páginas

1. Crea o edita el archivo HTML dentro de `src/pages/`.
2. Asegúrate de incluir los contenedores esperados por `BaseLayout`:
	```html
	<div id="navbar-container"></div>
	<!-- Contenido específico de la página -->
	<div id="footer-container"></div>
	```
3. Importa `src/main.js` al final del `body` (Vite lo inyecta al compilar, pero en desarrollo usa la ruta `/src/main.js`).
4. Para páginas nuevas, registra la ruta en `vite.config.js` → `build.rollupOptions.input`.
5. Actualiza los links de navegación en `Navbar.js` si corresponde.

> 📌 **Buenas prácticas:** evita rutas absolutas (`/assets/...`); usa `%BASE_URL%assets/...` durante la migración o rutas relativas.

## 🎨 Estilos y assets

- Usa `src/styles/` para los estilos de nueva generación (preferencia).
- Los CSS heredados del sitio original se mantienen en `public/assets/css/` mientras se migran.
- Los nuevos estilos pueden importarse en componentes específicos o centralmente en `src/main.js`.
- Assets estáticos (imágenes, PDFs) van en `public/` porque Vite los copia sin procesar.
- Si necesitas importar assets desde `src`, apóyate en los alias configurados (`@styles`, `@components`, etc.).

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` con hot reload.
| `npm run build` | Compila para producción con base en el entorno actual (`/` por defecto).
| `npm run preview` | Sirve la carpeta `dist/` localmente para pruebas.
| `npm run serve` | Alias de preview en el puerto 5173.
| `npm run build:pages` | Compila con `VITE_PUBLIC_BASE_PATH=/UPBC-Team/` para GitHub Pages.
| `npm run deploy:pages` | Ejecuta `build:pages` y publica `dist/` en la rama `gh-pages` usando `npx gh-pages`.

## 🚀 Despliegue en GitHub Pages

1. **Asegura** que tienes permisos de escritura en el repositorio.
2. **Compila** usando la base correcta:
	```powershell
	npm run build:pages
	```
	Esto genera `dist/` apuntando a `https://<usuario>.github.io/UPBC-Team/`.
3. **Publica** con un solo comando (crea/actualiza la rama `gh-pages`):
	```powershell
	npm run deploy:pages
	```
4. **Verifica** en la configuración del repositorio que GitHub Pages apunte a la rama `gh-pages` y la carpeta raíz (`/`).

### Despliegue automático en CI/CD (opcional)

- GitHub Actions detecta automáticamente el nombre del repositorio (`GITHUB_REPOSITORY`) y ajusta `base` si se ejecuta con la variable `GITHUB_ACTIONS=true`.
- Si necesitas forzar otro `base`, exporta `VITE_PUBLIC_BASE_PATH` antes de `npm run build` (ya se hace en `build:pages`).

## 🧮 Utilidades de mantenimiento

- `scripts/fix-base-paths.mjs`: recorre `src/pages/` y reemplaza rutas absolutas (`/assets/...`) por `%BASE_URL%assets/...`. Útil cuando migras HTML legacy.
- `scripts/fix-module-scripts.mjs`: revierte rutas de módulos a `/src/main.js` para desarrollo local si algún reemplazo rompió los imports.
- Ambos scripts se ejecutan manualmente con `node` si los necesitas:
  ```powershell
  node scripts/fix-base-paths.mjs
  node scripts/fix-module-scripts.mjs
  ```
