
const comprobarDatos = (titulo, director, anio) => {

    let tituloCorrecto = false, directorCorrecto = false, anioCorrecto = false;

    if (titulo) tituloCorrecto = true;
    if (director !== null & director !== undefined & isNaN(director)) directorCorrecto = true;
    if (Number.isNaN(anio) || anio < 1900 || anio > 2024) anioCorrecto = false;
    else anioCorrecto = true;

    if (tituloCorrecto & directorCorrecto & anioCorrecto) {
        return true;
    }
    else {
        return false;
    }
}

const comprobarTituloPelicula = (tituloPelicula) => {
    if (tituloPelicula !== null && tituloPelicula !== undefined) return true;
    else return false;
}

module.exports = {
    comprobarDatos,
    comprobarTituloPelicula
}