const peliculas = require("../data/peliculas");
const {comprobarDatos} = require("../plugins/comprobarDatos");

let idPeliculas = peliculas.length;                             // Se inicializa el id para el siguiente valor de id del objeto nuevaPelicula.               

const agregarPelicula = (req, res) => {

    const url = new URL(req.url, `http://${req.rawHeaders[1]}`);
    if (url.pathname === '/peliculas') {
        try {
            const titulo = url.searchParams.get("titulo");      // Se recupera el título envíado desde el cliente
            const director = url.searchParams.get("director");  // Se recupera el director envíado desde el cliente
            const anio = url.searchParams.get("anio");          // Se recupera el año envíado desde el cliente
            
            if (comprobarDatos(titulo, director, anio)) {
                const nuevaPelicula = {
                    id: ++idPeliculas,
                    titulo,
                    director,
                    anio
                };
                peliculas.push(nuevaPelicula);
                res.setHeader("content-type", "application/json; charset=utf-8");  
                res.end(JSON.stringify({message: "Película añadida."}));
            }      
            else {
                res.setHeader("content-type", "application/json; charset=utf-8");  
                res.end(JSON.stringify({message: "Algún dato sobre la película es incorrecto o está incompleto."}));
            }      
        }
        catch (err) {
            console.log('err :>> ', err);
        }
    }   
}

module.exports = agregarPelicula;