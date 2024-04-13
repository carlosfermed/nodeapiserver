const http = require("node:http");
const { servirDatos, agregarPelicula, modificarPelicula, eliminarPelicula } = require("../controllers");

const PORT = process.env.PORT ?? 3000;

http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      servirDatos(req, res);
      break;
    case 'POST':
      agregarPelicula(req, res);
      break;
    case 'PUT':
      modificarPelicula(req, res);
      break;
    case 'DELETE':
      eliminarPelicula(req, res);
      break;
    default:
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.statusCode = 404;
      res.end("Error 404 not found");
  }
  
}).listen(PORT, () => console.log(`Servidor en puerto ${PORT} a la escucha...`));