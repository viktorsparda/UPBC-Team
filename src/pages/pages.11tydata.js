module.exports = {
    // default si no se define en front-matter
    layout: "layouts/creando.njk",
    
    

    // construccion de las paginas
    permalink: function(data) {
        let path = data.page.filePathStem;

        if (path.startsWith('/pages')) {
        path = path.substring(6);
        }

        // Si el path es '/index', se genera en la raiz.
        // if (path === '/index') {
        // return '/';
        // }

        // Si es un index dentro de un directorio '/ejemplo/index.md se crea una url /ejemplo/
        // if (path.endsWith('/index')) {
        // return path.slice(0, -5);
        // }

        // Para las demas agrega la exension .html
        return `${path}.html`;
    }
    // para claves que dependan del contenido en el archivo se agregan dentro de eleventyComputed: { } 

};