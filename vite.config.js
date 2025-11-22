import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsHtmlEntries = Object.fromEntries(
  globSync('src/pages/news-*.html', { cwd: __dirname }).map((filePath) => {
    const name = path.basename(filePath, '.html');
    return [name, path.resolve(__dirname, filePath)];
  })
);

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const manualBase = process.env.VITE_PUBLIC_BASE_PATH;
const base = manualBase ?? ((process.env.GITHUB_ACTIONS === 'true' && repoName)
  ? `/${repoName}/`
  : '/');

export default defineConfig({
  root: '.',
  base,
  publicDir: 'public',
  appType: 'mpa',
  
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: false
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        historia: path.resolve(__dirname, 'src/pages/historia.html'),
        misionVision: path.resolve(__dirname, 'src/pages/mision-vision.html'),
        becas: path.resolve(__dirname, 'src/pages/becas.html'),
        calendario: path.resolve(__dirname, 'src/pages/calendario.html'),
        vidaUniversitaria: path.resolve(__dirname, 'src/pages/vida-universitaria.html'),
        directorio: path.resolve(__dirname, 'src/pages/directorio.html'),
        instalaciones: path.resolve(__dirname, 'src/pages/instalaciones.html'),
        carreras: path.resolve(__dirname, 'src/pages/carreras.html'),
        posgrados: path.resolve(__dirname, 'src/pages/posgrados.html'),
        educacionContinua: path.resolve(__dirname, 'src/pages/educacion-continua.html'),
    novedades: path.resolve(__dirname, 'src/pages/novedades.html'),
  ...newsHtmlEntries,
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
        // Subsecciones de Vida Universitaria
        bienestarSalud: path.resolve(__dirname, 'src/pages/bienestar-salud.html'),
        comunidadEstudiantil: path.resolve(__dirname, 'src/pages/comunidad-estudiantil.html'),
        convivenciaEquidad: path.resolve(__dirname, 'src/pages/convivencia-equidad.html'),
        eventosEspeciales: path.resolve(__dirname, 'src/pages/eventos-especiales.html'),
        vidaEstudiantil: path.resolve(__dirname, 'src/pages/vida-estudiantil.html'),
  // Portal de servicios
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
  serviciosCorreoInstitucional: path.resolve(__dirname, 'src/pages/servicios/soporte/correo-institucional.html'),
  // Admin panel
  admin: path.resolve(__dirname, 'admin/index.html'),
      },
      output: {
        manualChunks: {
          'vendor': ['bootstrap'],
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
  '@data': path.resolve(__dirname, './src/data'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@public': path.resolve(__dirname, './public')
    }
  },

  css: {
    devSourcemap: true
  }
});
