import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const manualBase = process.env.VITE_PUBLIC_BASE_PATH;
const base = manualBase ?? ((process.env.GITHUB_ACTIONS === 'true' && repoName)
  ? `/${repoName}/`
  : '/');

export default defineConfig({
  root: '.',
  base,
  publicDir: 'public',
  
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
        newsFeriaEstancias: path.resolve(__dirname, 'src/pages/news-feria-estancias.html'),
        newsFirmanConvenio: path.resolve(__dirname, 'src/pages/news-firman-convenio.html'),
        newsNuevasCarreras: path.resolve(__dirname, 'src/pages/news-nuevas-carreras.html'),
        newsReunionComvin: path.resolve(__dirname, 'src/pages/news-reunion-comvin.html'),
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
