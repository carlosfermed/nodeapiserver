# nodeapiserver
Este proyecto consiste en un servidor HTTP que proporciona una API para acceder a una colección de películas en formato JSON. El servidor ofrece dos endpoints principales:

- `/peliculas`: Este endpoint devuelve una lista de todas las películas disponibles en formato JSON.
- `/peliculas/{id}`: Este endpoint permite acceder a una película específica proporcionando su ID como parámetro de ruta. Devuelve los detalles de la película correspondiente en formato JSON.

El servidor es útil para desarrolladores que deseen acceder a datos de películas en formato JSON para fines de desarrollo, pruebas o integración con otras aplicaciones. Inicialmente, la API incluye tres películas predefinidas, pero pueden ser modificadas.

## Instalación:
Para instalar el proyecto, clona el repositorio desde GitHub o descarga el código fuente. Asegúrate de tener Node.js instalado en tu sistema. Luego, ejecuta `npm install` en la raíz del proyecto para instalar las dependencias necesarias.

## Uso:
Una vez instalado, puedes ejecutar el servidor usando el comando `npm start`. El servidor escuchará en el puerto especificado (3000 por defecto, o el puerto definido en la variable de entorno PORT). Para poder hacer modificaciones sobre las entradas de las diferentes películas almacenas puedes acceder a la interfaz de administrador en tu navegador visitando http://localhost:3000/view. 

El servidor está diseñado para ofrecer un acceso rápido y eficiente a los datos de películas mediante el uso de una estrategia de almacenamiento en caché.

## Estado del proyecto:
El proyecto está activo y en estado de mejora continua en caso de que tengas alguna sugerencia.
