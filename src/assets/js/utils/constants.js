/**
 * Constantes globales de la aplicación UPBC
 */

const BASE_URL = '/';

const withBase = (path = '') => {
  if (!path) return BASE_URL;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  if (path.startsWith('#')) {
    return `${BASE_URL}${path}`;
  }
  return `${BASE_URL}${path.replace(/^\//, '')}`;
};

export const resolvePublicPath = (path = '') => withBase(path);

export const SITE_CONFIG = {
  name: 'Universidad Politécnica de Baja California',
  shortName: 'UPBC',
  description: 'Formando profesionales de excelencia',
  baseUrl: BASE_URL,
  
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
    home: withBase(''),
    universidad: {
      historia: withBase('src/pages/historia.html'),
      misionVision: withBase('src/pages/mision-vision.html'),
      directorio: withBase('src/pages/directorio.html'),
      instalaciones: withBase('src/pages/instalaciones.html')
    },
    ofertaEducativa: {
      carreras: withBase('src/pages/carreras.html'),
      posgrados: withBase('src/pages/posgrados.html'),
      educacionContinua: withBase('src/pages/educacion-continua.html'),
      modalidadesEspeciales: withBase('oferta-educativa/modalidades-especiales/')
    },
    admisiones: {
      requisitos: withBase('admisiones/requisitos/'),
      procesoInscripcion: withBase('admisiones/proceso-inscripcion/'),
      calendario: withBase('src/pages/calendario.html'),
      costos: withBase('admisiones/costos/')
    },
    vidaUniversitaria: {
      main: withBase('src/pages/vida-universitaria.html'),
      vidaEstudiantil: withBase('src/pages/vida-estudiantil.html'),
      convivenciaEquidad: withBase('src/pages/convivencia-equidad.html'),
      eventosEspeciales: withBase('src/pages/eventos-especiales.html'),
      bienestarSalud: withBase('src/pages/bienestar-salud.html')
    },
    servicios: {
      biblioteca: withBase('servicios/biblioteca/'),
      laboratorios: withBase('servicios/laboratorios/'),
      serviciosEscolares: withBase('servicios/servicios-escolares/'),
      becas: withBase('src/pages/becas.html')
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
    url: withBase(''),
    type: 'link'
  },
  {
    label: 'Universidad',
    type: 'dropdown',
    items: [
      { label: 'Historia', url: withBase('src/pages/historia.html') },
      { label: 'Misión y visión', url: withBase('src/pages/mision-vision.html') },
      { label: 'Directorio', url: withBase('src/pages/directorio.html') },
      { label: 'Instalaciones', url: withBase('src/pages/instalaciones.html') }
    ]
  },
  {
    label: 'Oferta educativa',
    type: 'dropdown',
    items: [
      { label: 'Carreras', url: withBase('src/pages/carreras.html') },
      { label: 'Posgrados', url: withBase('src/pages/posgrados.html') },
      { label: 'Educación continua', url: withBase('src/pages/educacion-continua.html') },
      { label: 'Modalidades especiales', url: withBase('oferta-educativa/modalidades-especiales/') }
    ]
  },
  {
    label: 'Admisiones',
    type: 'dropdown',
    items: [
      { label: 'Requisitos', url: withBase('admisiones/requisitos/') },
      { label: 'Proceso de inscripción', url: withBase('admisiones/proceso-inscripcion/') },
      { label: 'Calendario escolar', url: withBase('src/pages/calendario.html') },
      { label: 'Costos', url: withBase('admisiones/costos/') }
    ]
  },
  {
    label: 'Vida universitaria',
    url: withBase('src/pages/vida-universitaria.html'),
    type: 'dropdown',
    items: [
      { label: 'Vida Estudiantil', url: withBase('src/pages/vida-estudiantil.html') },
      { label: 'Convivencia y Equidad', url: withBase('src/pages/convivencia-equidad.html') },
      { label: 'Eventos Especiales', url: withBase('src/pages/eventos-especiales.html') },
      { label: 'Bienestar y Salud', url: withBase('src/pages/bienestar-salud.html') }
    ]
  },
  {
    label: 'Servicios',
    type: 'dropdown',
    items: [
      { label: 'Biblioteca', url: withBase('servicios/biblioteca/') },
      { label: 'Laboratorios', url: withBase('servicios/laboratorios/') },
      { label: 'Servicios escolares', url: withBase('servicios/servicios-escolares/') },
      { label: 'Becas', url: withBase('src/pages/becas.html') }
    ]
  },
  {
    label: 'Contacto',
    url: withBase('#contact'),
    type: 'link'
  }
];
