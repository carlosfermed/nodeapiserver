
// Barrel pattern ->  Permite importar varios archivos desde un solo punto, en nuestro caso desde index.js

const agregarPelicula = require("./agregarPelicula");
const eliminarPelicula = require("./eliminarPelicula");
const servirPagina = require("./servirPagina");

module.exports = {
    agregarPelicula,
    eliminarPelicula,
    servirPagina
}