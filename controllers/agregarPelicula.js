const peliculas = require("../data/peliculas");
const comprobarDatos = require("../plugins/comprobarDatos");              

const generarId = () => {
  let maxId = Math.max(...peliculas.map(pelicula => pelicula.id))
  maxId += 1;
  return maxId;
}

const agregarPelicula = (req, res) => {

  const url = new URL(req.url, `http://${req.rawHeaders[1]}`);  // Usamos los parámetros query.

  if (url.pathname === '/peliculas') {
    try {
      const titulo = url.searchParams.get("titulo");            // Se recupera el título envíado desde el cliente
      const director = url.searchParams.get("director");        // Se recupera el director envíado desde el cliente
      const anio = url.searchParams.get("anio");                // Se recupera el año envíado desde el cliente

      const peliculaYaExistente = peliculas.find(pelicula => pelicula.titulo == titulo);

      if (peliculaYaExistente) {
        res.statusCode = 409;                                   // Existe conflicto.
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ message: "La película ya está registrada." }));
      }
      else if (comprobarDatos(titulo, director, anio)) {
        const nuevaPelicula = {
          id: generarId(),
          titulo,
          director,
          anio
        };
        
        peliculas.push(nuevaPelicula);
        res.statusCode = 201;                                   // Nueva entrada creada.
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ message: "Película añadida." }));
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

module.exports = agregarPelicula;