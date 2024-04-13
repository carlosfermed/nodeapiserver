const peliculas = require("../data/peliculas");
const fs = require("node:fs");

const servirDatos = (req, res) => {

  const urlArray = req.url.split("/")
  const id = urlArray[2];

  if (!isNaN(id) && parseInt(id) > 0) {                                 // Solicitud de película individual (parámetro de ruta).
    const peliculaSolicitada = peliculas.find(pelicula => pelicula.id == id);
    if (peliculaSolicitada) {
      res.statusCode = 200;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify(peliculaSolicitada));
    } else {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Pelicula no encontrada");
    }
  }
  else if (req.url === '/view') {                                       // Solicitud de vista -panel de control-.
    fs.readFile("./view/index.html", "utf-8", (err, data) => {
      if (err) {
        console.log('err :>> ', err);
        res.statusCode = 500;                                           // Error interno del servidor
        res.setHeader("content-type", "text/plain; charset=utf-8");
        res.end("Error interno del servidor");
      }
      else {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.end(data);
      }
    });
  }
  else if (req.url === '/peliculas') {                                  // Solicitud de todas las películas.
    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify(peliculas));
    
  }
  else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("Error 404: página web no encontrada");
  }
}

module.exports = servirDatos;