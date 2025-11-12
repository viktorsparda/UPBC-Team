/**
 * Constantes globales de la aplicación UPBC
 */

const metaEnv = import.meta.env || {};
const BASE_URL = metaEnv.BASE_URL ?? '/';

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
    siaax: 'https://www2.upbc.edu.mx/siaax/Defaultx.aspx',
    siaaxAlumnos: 'https://www2.upbc.edu.mx/alumnos/siaax/'
  },

  portalLinks: [
    { label: 'SIAAX Alumnos', url: 'https://www2.upbc.edu.mx/alumnos/siaax/' },
    { label: 'SIAAX Docentes', url: 'https://www2.upbc.edu.mx/siaax/Defaultx.aspx' }
  ],

  // Rutas del sitio
  routes: {
    home: withBase(''),
    universidad: {
      historia: withBase('src/pages/historia.html'),
      misionVision: withBase('src/pages/mision-vision.html'),
      rectoria: `${withBase('src/pages/directorio.html')}#rectoria`,
      instalaciones: withBase('src/pages/instalaciones.html'),
      transparencia: 'https://www.upbc.edu.mx/trans_parencia/index.html',
      directorio: withBase('src/pages/directorio.html')
    },
    ofertaEducativa: {
      carreras: withBase('src/pages/carreras.html'),
      posgrados: withBase('src/pages/posgrados.html'),
      educacionContinua: withBase('src/pages/educacion-continua.html'),
      modeloEducativo: `${withBase('src/pages/mision-vision.html')}#modelo-educativo`
    },
    admisiones: {
      procesoInscripcion: withBase('admisiones/proceso-inscripcion/'),
      requisitos: withBase('admisiones/requisitos/'),
      costos: withBase('admisiones/costos/'),
      becas: withBase('src/pages/becas.html')
    },
    servicios: {
      main: withBase('src/pages/servicios/index.html'),
      procedimientos: {
        reinscripcion: withBase('src/pages/servicios/procedimientos/reinscripcion.html'),
        credencial: withBase('src/pages/servicios/procedimientos/credencial.html'),
        constancias: withBase('src/pages/servicios/procedimientos/constancias.html'),
        cambioCarrera: withBase('src/pages/servicios/procedimientos/cambio-carrera.html'),
        prestamoDocumentos: withBase('src/pages/servicios/procedimientos/prestamo-documentos.html'),
        certificadoParcial: withBase('src/pages/servicios/procedimientos/certificado-parcial.html'),
        ecrii: withBase('src/pages/servicios/procedimientos/ecrii.html')
      },
      solicitudes: {
        prorrogaPago: withBase('src/pages/servicios/solicitudes/prorroga-pago.html'),
        bajaTemporal: withBase('src/pages/servicios/solicitudes/baja-temporal.html'),
        bajaDefinitiva: withBase('src/pages/servicios/solicitudes/baja-definitiva.html')
      },
      bienestar: {
        servicioMedico: withBase('src/pages/servicios/bienestar/servicio-medico.html')
      },
      soporte: {
        correoInstitucional: withBase('src/pages/servicios/soporte/correo-institucional.html')
      }
    },
    vidaEstudiantil: {
      main: withBase('src/pages/vida-estudiantil.html'),
      bienestarSalud: `${withBase('src/pages/vida-estudiantil.html')}#bienestar-salud`,
      culturaDeportes: `${withBase('src/pages/vida-estudiantil.html')}#cultura-deportes`,
      gruposEstudiantiles: `${withBase('src/pages/vida-estudiantil.html')}#grupos-estudiantiles`,
      eventos: `${withBase('src/pages/vida-estudiantil.html')}#eventos`
    },
    serviciosVinculacion: {
      biblioteca: withBase('servicios/biblioteca/'),
      laboratorios: withBase('servicios/laboratorios/'),
      centroIdiomas: 'https://www.upbc.edu.mx/Universidad/cadi.html',
      vinculacionEstancias: 'https://www.upbc.edu.mx/WVINCULACION/ESTANCIAS.HTML'
    },
    news: {
      list: withBase('src/pages/novedades.html')
    },
    contacto: withBase('#contact')
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

const { routes } = SITE_CONFIG;

export const MENU_ITEMS = [
  {
    label: 'Inicio',
    url: routes.home,
    type: 'link'
  },
  {
    label: 'Universidad',
    url: routes.universidad.historia,
    type: 'dropdown',
    items: [
      { label: 'Historia', url: routes.universidad.historia },
      { label: 'Misión y Visión', url: routes.universidad.misionVision },
      { label: 'Rectoría', url: routes.universidad.rectoria },
      { label: 'Instalaciones', url: routes.universidad.instalaciones },
      { label: 'Transparencia', url: routes.universidad.transparencia },
      { label: 'Directorio', url: routes.universidad.directorio }
    ]
  },
  {
    label: 'Oferta Educativa',
    url: routes.ofertaEducativa.carreras,
    type: 'dropdown',
    items: [
      { label: 'Carreras', url: routes.ofertaEducativa.carreras },
      { label: 'Posgrados', url: routes.ofertaEducativa.posgrados },
      { label: 'Educación Continua', url: routes.ofertaEducativa.educacionContinua },
      { label: 'Modelo Educativo', url: routes.ofertaEducativa.modeloEducativo }
    ]
  },
  {
    label: 'Admisiones',
    url: routes.admisiones.procesoInscripcion,
    type: 'dropdown',
    items: [
      { label: 'Proceso de Inscripción', url: routes.admisiones.procesoInscripcion },
      { label: 'Requisitos', url: routes.admisiones.requisitos },
      { label: 'Costos', url: routes.admisiones.costos },
      { label: 'Becas', url: routes.admisiones.becas }
    ]
  },
  {
    label: 'Vida Estudiantil',
    url: routes.vidaEstudiantil.main,
    type: 'dropdown',
    items: [
      { label: 'Bienestar y Salud', url: routes.vidaEstudiantil.bienestarSalud },
      { label: 'Cultura y Deportes', url: routes.vidaEstudiantil.culturaDeportes },
      { label: 'Grupos Estudiantiles', url: routes.vidaEstudiantil.gruposEstudiantiles },
      { label: 'Eventos', url: routes.vidaEstudiantil.eventos }
    ]
  },
  {
    label: 'Servicios y Vinculación',
    url: routes.servicios.main,
    type: 'dropdown',
    items: [
      { label: 'Portal de Servicios', url: routes.servicios.main },
      {
        label: 'Servicios para Alumnos',
        items: [
          { label: 'Reinscripción', url: routes.servicios.procedimientos.reinscripcion },
          { label: 'Constancias y Documentos', url: routes.servicios.procedimientos.constancias },
          { label: 'Credencial institucional', url: routes.servicios.procedimientos.credencial },
          { label: 'Cambio de carrera', url: routes.servicios.procedimientos.cambioCarrera },
          { label: 'Préstamo de documentos', url: routes.servicios.procedimientos.prestamoDocumentos },
          { label: 'Certificado parcial', url: routes.servicios.procedimientos.certificadoParcial },
          { label: 'ECRII (Inglés)', url: routes.servicios.procedimientos.ecrii },
          { label: 'Prórroga de pago', url: routes.servicios.solicitudes.prorrogaPago },
          { label: 'Baja temporal', url: routes.servicios.solicitudes.bajaTemporal },
          { label: 'Baja definitiva', url: routes.servicios.solicitudes.bajaDefinitiva },
          { label: 'Correo institucional', url: routes.servicios.soporte.correoInstitucional }
        ]
      },
      {
        label: 'Servicios para Docentes',
        items: [
          { label: 'SIAAX Docentes', url: SITE_CONFIG.social.siaax },
          { label: 'Portal de servicios docentes', url: 'https://www.upbc.edu.mx/SERVICIOS20/Empleados/Empleado.html' }
        ]
      },
      { label: 'Servicio Médico', url: routes.servicios.bienestar.servicioMedico },
      { label: 'Biblioteca', url: routes.serviciosVinculacion.biblioteca },
      { label: 'Laboratorios', url: routes.serviciosVinculacion.laboratorios },
      { label: 'Centro de Idiomas (CADI)', url: routes.serviciosVinculacion.centroIdiomas },
      { label: 'Vinculación y Estancias', url: routes.serviciosVinculacion.vinculacionEstancias }
    ]
  },
  {
    label: 'Novedades',
    url: routes.news.list,
    type: 'link'
  },
  {
    label: 'Contacto',
    url: routes.contacto,
    type: 'link'
  }
];

export const getNewsDetailPath = (slug = '') => {
  if (!slug) {
    return routes.news.list;
  }
  return withBase(`src/pages/news-${slug}.html`);
};
