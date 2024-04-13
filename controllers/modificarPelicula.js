const peliculas = require("../data/peliculas");
const comprobarDatos = require("../plugins/comprobarDatos");


const modificarPelicula = (req, res) => {

  const url = new URL(req.url, `http://${req.rawHeaders[1]}`);  // Usamos los parámetros query.

  if (url.pathname === '/peliculas') {
    try {
      const titulo = url.searchParams.get("titulo");            // Se recupera el título envíado desde el cliente.
      const director = url.searchParams.get("director");        // Se recupera el director envíado desde el cliente.
      const anio = url.searchParams.get("anio");                // Se recupera el año envíado desde el cliente.

      if (comprobarDatos(titulo, director, anio)) {
        
        const pelicula = peliculas.find(pelicula => pelicula.titulo == titulo)

        if( pelicula ) {
          pelicula.director = director;
          pelicula.anio = anio;

          res.statusCode = 200;                                 // OK.
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ message: "Película modificada." }));
        }
        else {
          res.statusCode = 404;                                 // No encontrado.
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ message: "No se encontró la película." }));
        }
      }
      else {
        res.statusCode = 400;                                   // Solicitud incorrecta.
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ message: "Datos incorrectos." }));
      }
    }
    catch (err) {
      console.log('err :>> ', err);
      res.statusCode = 500;                                     // Error interno del servidor.
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ message: "Error interno del servidor." }));
    }
  }
}

module.exports = modificarPelicula