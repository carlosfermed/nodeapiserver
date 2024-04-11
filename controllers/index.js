
// Barrel pattern ->  Permite importar varios archivos desde un solo punto.

const agregarPelicula = require("./agregarPelicula");
const eliminarPelicula = require("./eliminarPelicula");
const modificarPelicula = require("./modificarPelicula");
const servirPaginaAdministrador = require("./servirPaginaAdministrador");

module.exports = {
    agregarPelicula,
    modificarPelicula,
    eliminarPelicula,
    servirPaginaAdministrador,
}