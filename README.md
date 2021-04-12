# <img src="./public/favicon.jpg" width="50"/> **Rick and Morty Browser**

## **Description:**

This web site shows 20 characters of _Rick and Morty_, thanks to a request to the API [Rick and Morty Api](https://rickandmortyapi.com/documentation/#get-all-characters). The user can filter the characters by name or species.

The main goal of this project is practise React, JavaScrip and PropTypes.

## **Structure and funtionality:**

The first layout of this SPA (_Single Page Application_) is formed by the list of the first 20 characters returned by the _Rick and Morty_ API. The page includes a filter by name or by species.

When clicking on a character, a second page will be displayed where we can see more details of the selected character as well as a _Back_ button that will take us to the initial page, keeping the status of the previously selected filters.

## **Languages**:

- HTML, SASS.
- JavaScript (ES6) y React.
- PropTypes

## **Bonus**

- Layout using Grid
- Responsive
- Display of error pages

## **Run this code in your local system**

1. Clone the repository
2. Install the dependencies with

```bash
npm install
```

3.  Run the code:

```bash
npm start
```

#

## **Descripción:**

La página web presenta un listado de 20 personajes de _Rick and Morty_, obtenidos mediante la llamada a la API [Rick and Morty Api](https://rickandmortyapi.com/documentation/#get-all-characters). Los personajes se pueden filtrar por su nombre.

La página tendrá que estar desarrollada principalmente en React

## **Estructura y funcionamiento:**

La promero que se visualiza al entrar en esta SPA (_Single Page Application_) es la cabecera junto con los campos de búsqueda y la lista de los 20 personajes devueltos por la API de _Rick and Morty_. Desde esta página podemos filtrar por nombre o por especie, alterando la visualización de los personajes por aquellos que cumplan con las condiciones establecidas.

Al clickar sobre un personaje,se desplegará una segunda página dónde podremos ver más detalles del personaje seleccionado así como un botón de _Volver_ que nos llevará a la página inicial manteniéndose el estado de los filtros anteriormente seleccionados.

## **Herramientas utilizadas**:

- **Maquetación:** HTML, SASS.
- **Interactividad:** JavaScript (ES6) y React.
- **Gestión de enlaces:** React Router.
- **Comprobación de tipos**: PropTypes

## **Bonus**

Bonus propuestos implementados:

- Sistema de GRID para el maquetado del listado de personajes.
- Página responsive
- Incluye páginas de error

## **Páginas de Error**

En la página se han incluído las siguientes páginas de error:

- La página solicitada no existe.
- El personaje buscado no existe (url de detalle no válida).
- No hay ningún personaje que coincida con la búsqueda (no se han encontrado personajes que cumplan con los filtros marcados por el usuario).

## **Pasos a seguir para arrancar la web en local**

1. Clona este repositorio
2. Realizar la instalación de las dependencias.

```bash
npm install
```

3. Por último, ejecuta el siguiente comando para proceder a la visualización:

```bash
npm start
```

Se abrirá una ventana del explorador y ya podrás usar la aplicación.
