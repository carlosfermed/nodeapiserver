
const comprobarDatos = (titulo, director, anio) => {

  let tituloCorrecto, directorCorrecto, anioCorrecto;

  (titulo) ? tituloCorrecto = true : tituloCorrecto = false;
  (director !== null & director !== undefined & isNaN(director)) ? directorCorrecto = true : directorCorrecto = false;
  (!Number.isNaN(anio) || anio < 1900 || anio > 2024) ? anioCorrecto = true : anioCorrecto = false;

  if (tituloCorrecto & directorCorrecto & anioCorrecto) 
    return true;
  else 
    return false;
}

const comprobarTituloPelicula = (tituloPelicula) => {
  if (tituloPelicula !== null && tituloPelicula !== undefined) return true;
  else return false;
}

module.exports = {
  comprobarDatos,
  comprobarTituloPelicula
}