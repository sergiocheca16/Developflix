import peliculas from './peliculas.js'
const Accion = document.getElementById("genero-28");
const Thriller = document.getElementById("genero-53");
const Aventura = document.getElementById("genero-12");

function filtrarGenero(genreId) {
    return peliculas.filter(pelicula => pelicula.genre_ids.includes(genreId));
}

function mostrarPeliculas(peliculas, contenedor) {
    contenedor.innerHTML = "";
    peliculas.forEach(pelicula => {
        const peliculaElemento = document.createElement("div");
        peliculaElemento.classList.add("pelicula");

        const imagen = document.createElement("img");
        imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        imagen.alt = pelicula.title;

        const titulo = document.createElement("h3");
        titulo.textContent = pelicula.title;

        peliculaElemento.appendChild(imagen);
        peliculaElemento.appendChild(titulo);

        contenedor.appendChild(peliculaElemento);
    });
}

const peliculasAccion = filtrarGenero(28); 
const peliculasThriller = filtrarGenero(53);
const peliculasAventura = filtrarGenero(12);

mostrarPeliculas(peliculasAccion, Accion);
mostrarPeliculas(peliculasThriller, Thriller);
mostrarPeliculas(peliculasAventura, Aventura);