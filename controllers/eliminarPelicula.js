const peliculas = require("../data/peliculas");
const path = require("node:path");

const comprobarTituloPelicula = (tituloPelicula) => !!tituloPelicula;

const eliminarPelicula = (req, res) => {

  const url = new URL(req.url, `http://${req.rawHeaders[1]}`);
  const { dir: ruta, name: titulo } = path.parse(url.pathname); // Recuperamos datos a partir de los parámetros de ruta.

  const tituloDecodificado = decodeURIComponent(titulo);        // En caso de que el título conste de varias palabras.

  if (ruta === '/peliculas') {

    const indicePeliculaEncontrada = peliculas.findIndex(pelicula => pelicula.titulo === tituloDecodificado);

    if (comprobarTituloPelicula(titulo) & indicePeliculaEncontrada != -1) {
      peliculas.splice(indicePeliculaEncontrada, 1);
      res.statusCode = 200;                                     // OK.
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end(`Película ${tituloDecodificado} eliminada.`);
    }
    else {
      res.statusCode = 404;                                     // No encontrado.
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Película no encontrada, revisa el título.");
    }
  }
  else {
    res.statusCode = 400;                                       // Solicitud incorrecta.
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Introduce el título de la película que quieras eliminar.");
  }
}

module.exports = eliminarPelicula;