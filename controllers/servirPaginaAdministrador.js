const peliculas = require("../data/peliculas");
const fs = require("node:fs");

const servirPagina = (req, res) => {

    if (req.url === '/view') { 
        fs.readFile("./view/index.html", "utf-8", (err, data) => {
            if (err) 
                console.log('err :>> ', err);
            else {
                res.setHeader("content-type", "text/html; charset=utf-8");
                res.end(data);
            }
        });
    }
    else if (req.url === '/peliculas') {
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.end(JSON.stringify(peliculas));
    }
    else {
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.statusCode = 404;
        res.end("Error 404: página web no encontrada");
    }
}

module.exports = servirPagina;