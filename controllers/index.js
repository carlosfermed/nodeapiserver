
// Aplicado Barrel pattern ->  Permite importar varios ficheros desde un solo punto.

const agregarPelicula = require("./agregarPelicula");
const eliminarPelicula = require("./eliminarPelicula");
const modificarPelicula = require("./modificarPelicula");
const servirDatos = require("./servirDatos");

module.exports = {
    agregarPelicula,
    modificarPelicula,
    eliminarPelicula,
    servirDatos,
}