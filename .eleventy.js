module.exports = function(eleventyConfig) {
    
    // css bootstrap
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/css/bootstrap.min.css": "assets/css/bootstrap.min.css"});
    // js bootstrap
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/js/bootstrap.bundle.min.js"});
    
    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

    // Registro de preprocesador que inyecta los macro imports de los componentes sobre
    // los archivos Markdown y Nunjuck.
    eleventyConfig.addPreprocessor('components-macros',['md', 'njk'], (data, content) => {
            try {
                const inputPath = data && data.page && data.page.inputPath;
                if (typeof inputPath === 'string' && (inputPath.endsWith('.md') || inputPath.endsWith('.njk'))) {
                    return '{% import "components/macros.njk" as components %}\n' + content;
                }
            } catch (e) {
                
            }
            return content;
        },
    );
    // temporalmente solo para ver estado de desarrollo
    eleventyConfig.addCollection("siteStats", function(collectionApi) {
        const paginas = collectionApi.getAll();
        const layoutProceso = "layouts/creando.njk";


        function porcentaje(done, total) {
        if (total === 0) { return 0; }
        return Math.round((100 * done) / total);
        }
        const enProceso = paginas.filter(p => p.data.layout === layoutProceso);
        const completadas = paginas.filter(p => p.data.layout !== undefined && p.data.layout !== layoutProceso);
        
        
        const totalPaginas = paginas.length;

        const completado = porcentaje(completadas.length, totalPaginas);
        return {
            progreso: completado,
            paginasConLayout: completadas,
            paginasSinLayout: enProceso
        };
    });

    return {
        dir: {
            input: 'src'
        },
        markdownTemplateEngine: 'njk'
    };
}