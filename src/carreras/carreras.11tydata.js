module.exports = {
    // default si no se define en front-matter
    layout: "layouts/creando.njk",
    
    

    // construccion de las paginas
    permalink: function(data) {
        let path = data.page.filePathStem;

        
        return `${path}.html`;
    }
    // para claves que dependan del contenido en el archivo se agregan dentro de eleventyComputed: { } 

};