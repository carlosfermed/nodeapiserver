const http = require("node:http");
const {servirPagina, agregarPelicula, eliminarPelicula} = require("../controllers"); 

const PORT = 3000;

http.createServer((req, res) => {
    const {method} = req;

    switch (method) {
        case 'GET':
            servirPagina(req, res);
            break;
        case 'POST':
            agregarPelicula(req, res);  
            break;
        case 'DELETE':
            eliminarPelicula(req, res); 
            break;
        default:
            res.setHeader("content-type", "text/html; charset=utf-8");
            res.statusCode = 404;
            res.end("Error 404 not found");
    }         
}).listen(PORT, () => console.log(`servidor a la escucha en puerto ${PORT}`));