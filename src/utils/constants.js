/**
 * Constantes globales de la aplicación UPBC
 */

export const SITE_CONFIG = {
  name: 'Universidad Politécnica de Baja California',
  shortName: 'UPBC',
  description: 'Formando profesionales de excelencia',
  
  // URLs de redes sociales
  social: {
    facebook: 'https://www.facebook.com/UPBCUNIVERSIDAD',
    instagram: 'https://www.instagram.com/upbcuniversidad/',
    youtube: 'https://www.youtube.com/channel/UCCROxBHIXoVourok76BnXNA',
    siaaxAlumnos: 'https://www2.upbc.edu.mx/alumnos/siaax/',
    siaax: 'https://www2.upbc.edu.mx/siaax/Defaultx.aspx'
  },

  // Rutas del sitio
  routes: {
    home: '/',
    universidad: {
      historia: '/src/pages/historia.html',
      misionVision: '/src/pages/mision-vision.html',
      directorio: '/src/pages/directorio.html',
      instalaciones: '/src/pages/instalaciones.html'
    },
    ofertaEducativa: {
      carreras: '/src/pages/carreras.html',
      posgrados: '/src/pages/posgrados.html',
      educacionContinua: '/src/pages/educacion-continua.html',
      modalidadesEspeciales: '/oferta-educativa/modalidades-especiales/'
    },
    admisiones: {
      requisitos: '/admisiones/requisitos/',
      procesoInscripcion: '/admisiones/proceso-inscripcion/',
      calendario: '/src/pages/calendario.html',
      costos: '/admisiones/costos/'
    },
    vidaUniversitaria: {
      main: '/src/pages/vida-universitaria.html',
      vidaEstudiantil: '/vida-universitaria/vida-estudiantil/',
      convivenciaEquidad: '/vida-universitaria/convivencia-equidad/',
      eventosEspeciales: '/vida-universitaria/eventos-especiales/',
      bienestarSalud: '/vida-universitaria/bienestar-salud/'
    },
    servicios: {
      biblioteca: '/servicios/biblioteca/',
      laboratorios: '/servicios/laboratorios/',
      serviciosEscolares: '/servicios/servicios-escolares/',
      becas: '/src/pages/becas.html'
    }
  },

  // Colores del tema
  colors: {
    primary: '#602b82',
    secondary: '#cd8b47',
    dark: '#1e1e1e',
    light: '#f8f9fa',
    white: '#ffffff'
  }
};

export const MENU_ITEMS = [
  {
    label: 'Inicio',
    url: '/',
    type: 'link'
  },
  {
    label: 'Universidad',
    type: 'dropdown',
    items: [
      { label: 'Historia', url: '/src/pages/historia.html' },
      { label: 'Misión y visión', url: '/src/pages/mision-vision.html' },
      { label: 'Directorio', url: '/src/pages/directorio.html' },
      { label: 'Instalaciones', url: '/src/pages/instalaciones.html' }
    ]
  },
  {
    label: 'Oferta educativa',
    type: 'dropdown',
    items: [
      { label: 'Carreras', url: '/src/pages/carreras.html' },
      { label: 'Posgrados', url: '/src/pages/posgrados.html' },
      { label: 'Educación continua', url: '/src/pages/educacion-continua.html' },
      { label: 'Modalidades especiales', url: '/oferta-educativa/modalidades-especiales/' }
    ]
  },
  {
    label: 'Admisiones',
    type: 'dropdown',
    items: [
      { label: 'Requisitos', url: '/admisiones/requisitos/' },
      { label: 'Proceso de inscripción', url: '/admisiones/proceso-inscripcion/' },
      { label: 'Calendario escolar', url: '/src/pages/calendario.html' },
      { label: 'Costos', url: '/admisiones/costos/' }
    ]
  },
  {
    label: 'Vida universitaria',
    url: '/src/pages/vida-universitaria.html',
    type: 'dropdown',
    items: [
      { label: 'Vida Estudiantil', url: '/vida-universitaria/vida-estudiantil/' },
      { label: 'Convivencia y Equidad', url: '/vida-universitaria/convivencia-equidad/' },
      { label: 'Eventos Especiales', url: '/vida-universitaria/eventos-especiales/' },
      { label: 'Bienestar y Salud', url: '/vida-universitaria/bienestar-salud/' }
    ]
  },
  {
    label: 'Servicios',
    type: 'dropdown',
    items: [
      { label: 'Biblioteca', url: '/servicios/biblioteca/' },
      { label: 'Laboratorios', url: '/servicios/laboratorios/' },
      { label: 'Servicios escolares', url: '/servicios/servicios-escolares/' },
      { label: 'Becas', url: '/src/pages/becas.html' }
    ]
  },
  {
    label: 'Contacto',
    url: '/#contact',
    type: 'link'
  }
];
