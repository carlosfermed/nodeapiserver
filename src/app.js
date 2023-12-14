const http = require("node:http");
const fs = require("node:fs");
const servirPagina = require("../controllers/servirPagina");
const agregarPelicula = require("../controllers/agregarPelicula");
const eliminarPelicula = require("../controllers/eliminarPelicula");

const PORT = 3000;

http.createServer((req, res) => {
    const {method} = req;
    // const url = new URL(req.url, `http://${req.rawHeaders[1]}`);
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