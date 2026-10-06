const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const filtroTipo = document.querySelector("#filtro-tipo");
const panelDetalles = document.querySelector("#panel-detalles");

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
        experiencia: datosPokemon.base_experience,
        habilidades: datosPokemon.abilities.map(({ ability }) => ability.name),
        estadisticas: datosPokemon.stats.map(({ base_stat, stat }) => ({
          nombre: stat.name,
          valor: base_stat,
        })),
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
          <div class="boton_detalles">
            <button class="boton-detalles" data-id="${pokemon.id}">
              Ver detalles
            </button>
          </div>
        </article>
      `;
    })
    .join("");
};

const mostrarDetalles = (pokemon) => {
  const tiposHTML = pokemon.tipos
    .map((tipo) => `<span class="tipo">${tipo}</span>`)
    .join("");


  const habilidadesHTML = pokemon.habilidades
    .map((habilidad) => `<li>${habilidad}</li>`)
    .join("");

  const estadisticasHTML = pokemon.estadisticas
    .map(
      (estadistica) => `
        <li>
          <strong>${estadistica.nombre}</strong>: ${estadistica.valor}
        </li>
      `
    )
    .join("");

  panelDetalles.innerHTML = `
    <div class="panel-detalles__contenido">
      <button class="panel-detalles__cerrar" type="button">
        Cerrar
      </button>

      <p>N.º ${formatearId(pokemon.id)}</p>

      <h2>${pokemon.nombre}</h2>

      <img
        src="${pokemon.imagenFront}"
        alt="Imagen frontal de ${pokemon.nombre}"
        class="panel-detalles__imagen"
      >

      <div class="pokemon__tipos">
        ${tiposHTML}
      </div>

      <div class="panel-detalles__datos">
      <div>
        <strong>Altura</strong>
        <span>${pokemon.altura / 10} m</span>
      </div>

      <div>
        <strong>Peso</strong>
        <span>${pokemon.peso / 10} kg</span>
      </div>

      <div>
        <strong>Experiencia</strong>
        <span>${pokemon.experiencia}</span>
      </div>
    </div>

      <h3>Habilidades</h3>
      <ul>
        ${habilidadesHTML}
      </ul>

      <h3>Estadísticas base</h3>
      <ul>
        ${estadisticasHTML}
      </ul>
    </div>
  `;

  panelDetalles.hidden = false;
};

resultado.addEventListener("click", (evento) => {
  if (!evento.target.classList.contains("boton-detalles")) {
    return;
  }

  const id = Number(evento.target.dataset.id);

  const pokemon = pokemons.find((pokemon) => pokemon.id === id);

  mostrarDetalles(pokemon);
});

panelDetalles.addEventListener("click", (evento) => {
  if (!evento.target.classList.contains("panel-detalles__cerrar")) {
    return;
  }

  panelDetalles.hidden = true;
});

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