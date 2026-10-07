const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const filtroTipo = document.querySelector("#filtro-tipo");
const panelDetalles = document.querySelector("#panel-detalles");
const botonCargar = document.querySelector("#boton-cargar");
const botonReintentar = document.querySelector("#boton-reintentar");

let pokemons = [];

const obtenerPokemons = async () => {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);

  if (!respuesta.ok) {
    throw new Error("No se han podido cargar los Pokémon");
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

const cargarTipos = (pokemons) => {
  const tipos = pokemons.flatMap((pokemon) => pokemon.tipos);

  const tiposUnicos = [...new Set(tipos)];

  tiposUnicos.sort();

  tiposUnicos.forEach((tipo) => {
    const opcion = document.createElement("option");

    opcion.value = tipo;
    opcion.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);

    filtroTipo.appendChild(opcion);
  });
};

const mostrarPokemons = (pokemons) => {
  resultado.innerHTML = pokemons
    .map((pokemon) => {
      const tiposHTML = pokemon.tipos
        .map((tipo) => `<span class="tipo tipo-${tipo}">${tipo}</span>`)
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

const formatearTexto = (texto) => {
  return texto
    .replace("-", " ")
    .replace(/^./, (letra) => letra.toUpperCase());
};

const mostrarDetalles = (pokemon) => {
  const tiposHTML = pokemon.tipos
  .map((tipo) => `<span class="tipo tipo-${tipo}">${tipo}</span>`)
  .join("");


  const habilidadesHTML = pokemon.habilidades
    .map((habilidad) => `<li>${formatearTexto(habilidad)}</li>`)
    .join("");


  const estadisticasHTML = pokemon.estadisticas
    .map(
      (estadistica) => `
      <li>
        <strong>${formatearTexto(estadistica.nombre)}</strong>: ${estadistica.valor}
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
  const tipoSeleccionado = filtroTipo.value;

  const coincidencias = pokemons.filter((pokemon) => {
    const coincideBusqueda =
      !busqueda ||
      pokemon.nombre.includes(busqueda) ||
      String(pokemon.id) === busqueda;

    const coincideTipo =
      tipoSeleccionado === "todos" ||
      pokemon.tipos.includes(tipoSeleccionado);

    return coincideBusqueda && coincideTipo;
  });

  if (coincidencias.length === 0) {
    mensaje.textContent = "No se ha encontrado ningún Pokémon";
    resultado.innerHTML = "";
    return;
  }

  mensaje.textContent = "";
  mostrarPokemons(coincidencias);
};

inputBusqueda.addEventListener("input", filtrarPokemons);

filtroTipo.addEventListener("change", filtrarPokemons);

const iniciarApp = async () => {
  try {
    mensaje.textContent = "Cargando Pokémon...";
    botonCargar.disabled = true;
    botonCargar.textContent = "Cargando...";
    botonReintentar.hidden = true;

    pokemons = await obtenerPokemons();

    cargarTipos(pokemons);

    inputBusqueda.disabled = false;
    filtroTipo.disabled = false;
    botonCargar.hidden = true;

    mensaje.textContent = "Pokémon cargados correctamente";
    mostrarPokemons(pokemons);
  } catch (error) {
    mensaje.textContent =
      "No se han podido cargar los Pokémon. Comprueba tu conexión e inténtalo de nuevo";

    botonCargar.hidden = true;
    botonReintentar.hidden = false;
  }
};

botonCargar.addEventListener("click", iniciarApp);
botonReintentar.addEventListener("click", iniciarApp);