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
                <section className="catalog">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game}/>                    
                    ))}
                </section>
            )}
        </main>
    )
}

export default App;