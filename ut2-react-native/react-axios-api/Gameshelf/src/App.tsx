import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "./components/GameCard";
import "./App.css";
import type { Game } from "./types/Game";

const API_URL = "https://api.sampleapis.com/switch/games";

function App() {
    const [games, setGames] = useState<Game[]>([]); // Estado de React es un dato que la aplicación va a recordar mientras esté abierta
    const [loading, setLoading] = useState(true); // Mostrar y esperar hasta que la app se ejecute
    const [error, setError] = useState<string | null>(null); // Devuelve un error en caso de que la peticion falle
    const [selectedGenre, setSelectedGenre] = useState(""); // "" significa todos los géneros


    useEffect(() => {
        async function loadGames() {
            try {
                const response = await axios.get<Game[]>(API_URL);
                setGames(response.data);
            } catch (error) {
                console.log(error);
                setError("No se pudo cargar el catalogo. Intentelo de nuevo más tarde");
            } finally {
                setLoading(false);
            }
        }
        loadGames();
    }, []);

    // Géneros distintos que hay en los datos (sin repetir y ordenados)
    const genres = [...new Set(games.flatMap((game) => game.genre ?? []))].sort();

    const visibleGames = selectedGenre === ""
        ? games
        : games.filter((game) => game.genre?.includes(selectedGenre));

    return (
        <main className="app">
            <h1>Gameshelf</h1>
            <p>Videojuegos recibidos desde la API</p>

            {loading && <p role="status">Cargando videojuegos...</p>} {/*Muestra mensaje de carga mientras loading sea true */}

            {error && <p role="alert">{error}</p>} {/*Muestra un mensaje de error si existe */}

            {!loading && !error && games.length === 0 && ( // !loading: significa que ya no está cargando games.length === 0, la lista esta vacia
                <p>La API no ha devuelto videojuegos</p>
            )}

            {!loading && !error && games.length > 0 && (
                <>
                    <div className="filters">
                        <label>
                            Género:{" "}
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                            >
                                <option value="">Todos</option>
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <section className="catalog">
                        {visibleGames.map((game) => (
                            <GameCard key={game.id} game={game}/>
                        ))}
                    </section>
                </>
            )}
        </main>
    )
}

export default App;