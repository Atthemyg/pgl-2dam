const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

let pokemons = [];

const obtenerPokemons = async () => {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);

  if (!respuesta.ok) {
    throw new Error("No se han podido cargar los Pokémon.");
  }

  const datos = await respuesta.json();

  const pokemons = await Promise.all(
    datos.results.map(async (pokemon) => {
      const respuestaPokemon = await fetch(pokemon.url);
      const datosPokemon = await respuestaPokemon.json();

      return {
        id: datosPokemon.id,
        nombre: datosPokemon.name,
        imagenBack: datosPokemon.sprites.back_default,
        imagenFront: datosPokemon.sprites.front_default,
        altura: datosPokemon.height,
        peso: datosPokemon.weight,
        tipos: datosPokemon.types.map(({ type }) => type.name),
      };

    })
  )
  return pokemons;
};

const formatearId = (id) => {
  return String(id).padStart(3, "0");
};

const mostrarPokemons = (pokemons) => {
  resultado.innerHTML = pokemons
    .map((pokemon) => {
      const tiposHTML = pokemon.tipos
        .map((tipo) => `<span class="tipo">${tipo}</span>`)
        .join("");

      return `
        <article class="pokemon">
          <p class="pokemon__numero">N.º ${formatearId(pokemon.id)}</p>

          <div class="galeria_pokemon">
            <img
              class="pokemon__imagen_back"
              src="${pokemon.imagenBack}"
              alt="Imagen trasera de ${pokemon.nombre}"
            >

            <img
              class="pokemon__imagen_front"
              src="${pokemon.imagenFront}"
              alt="Imagen frontal de ${pokemon.nombre}"
            >
          </div>

          <h2 class="pokemon__nombre">${pokemon.nombre}</h2>

          <div class="pokemon__datos">
            <p><strong>Altura</strong><br>${pokemon.altura / 10} m</p>
            <p><strong>Peso</strong><br>${pokemon.peso / 10} kg</p>
          </div>

          <div class="pokemon__tipos">
            ${tiposHTML}
          </div>
        </article>
      `;
    })
    .join("");
};

const filtrarPokemons = () => {
  const busqueda = inputBusqueda.value.trim().toLowerCase();

  if (!busqueda) {
    mensaje.textContent = "";
    mostrarPokemons(pokemons);
    return;
  }

  const coincidencias = pokemons.filter((pokemon) => {
    return (
      pokemon.nombre.includes(busqueda) ||
      String(pokemon.id) === busqueda
    );
  });

  if (coincidencias.length === 0) {
    mensaje.textContent = "No se ha encontrado ningún Pokémon.";
    resultado.innerHTML = "";
    return;
  }

  mensaje.textContent = "";
  mostrarPokemons(coincidencias);
};

inputBusqueda.addEventListener("input", filtrarPokemons);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  filtrarPokemons();
});

const iniciarApp = async () => {
  try {
    mensaje.textContent = "Cargando Pokémon...";

    pokemons = await obtenerPokemons();

    mensaje.textContent = "";
    mostrarPokemons(pokemons);
  } catch (error) {
    mensaje.textContent = error.message;
  }
};

iniciarApp();