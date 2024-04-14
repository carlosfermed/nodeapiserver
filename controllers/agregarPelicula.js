const peliculas = require("../data/peliculas");
const comprobarDatos = require("../plugins/comprobarDatos");

const generarId = () => {
  let maxId = Math.max(...peliculas.map(pelicula => pelicula.id))
  maxId += 1;
  return maxId;
}

const agregarPelicula = (req, res) => {

  if (req.url === '/peliculas') {
    try {
      let body = "";

      // Se usan los eventos 'data' y 'end' para manejar el cuerpo de la petición.
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        const titulo = body.titulo;
        const director = body.director;
        const anio = body.anio;

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
      })
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