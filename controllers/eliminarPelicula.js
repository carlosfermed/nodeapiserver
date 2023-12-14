const peliculas = require("../data/peliculas");
const path = require("node:path");
const {comprobarTituloPelicula} = require("../plugins/comprobarDatos");

const eliminarPelicula = (req, res) => {

    const url = new URL(req.url, `http://${req.rawHeaders[1]}`);
    const {dir: ruta, name: titulo} = path.parse(url.pathname);

    const tituloDecodificado = decodeURIComponent(titulo);      // En caso de que el título conste de varias palabras.

    if (ruta === '/peliculas') {

        const indicePeliculaEncontrada = peliculas.findIndex(pelicula => pelicula.titulo === tituloDecodificado);

        if (comprobarTituloPelicula(titulo) & indicePeliculaEncontrada != -1) {
            peliculas.splice(indicePeliculaEncontrada, 1);
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end(`Película ${tituloDecodificado} eliminada.`);
        }
        else {
            res.setHeader("content-type", "text/plain; charset=utf-8");  
            res.statusCode = 404;
            res.end("Película no encontrada, asegúrese de escribir bien el título.");
        }          
    }
    else {
        res.setHeader("content-type", "text/plain; charset=utf-8"); 
        res.end("Introduce el título de la película que quieras eliminar.");
    }
}

module.exports = eliminarPelicula;