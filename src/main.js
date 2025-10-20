/**
 * Punto de entrada principal - UPBC Web v2.0
 */

// Importar estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/main.css';

// Importar Bootstrap JS
import * as bootstrap from 'bootstrap';

// Importar layout base
import { BaseLayout } from '@layouts/BaseLayout.js';

// Hacer Bootstrap disponible globalmente
window.bootstrap = bootstrap;

// Inicializar la aplicación
const app = new BaseLayout();
app.init();

// Log para confirmar que la app se inicializó
console.log('🚀 UPBC Web v2.0 - Inicializado correctamente');

// Exportar app para debugging
window.app = app;
