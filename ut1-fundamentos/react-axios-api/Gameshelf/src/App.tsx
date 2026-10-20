import "./App.css";
import GameCard from "./components/GameCard";
import { useState, useEffect } from "react";
import axios from "axios";

type Game = {
  id: number;
  name: string;
  genre: string[];
};

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("https://api.sampleapis.com/switch/games");

        
        setGames(response.data);
      } catch (err) {
        setError("No se pudo cargar el catálogo de videojuegos. Inténtalo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <main className="app loading-container">
        <p>🔄 Cargando catálogo de videojuegos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="app error-container">
        <p className="error-message">⚠️ {error}</p>
      </main>
    );
  }

  return (
    <main className="app">
      <h1>GameShelf</h1>
      <p className="subtitle">Catálogo oficial de Nintendo Switch</p>

      <p className="counter-text">
        Mostrando {games.length} videojuegos disponibles
      </p>

      <section className="catalog">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            genre={Array.isArray(game.genre) ? game.genre.join(", ") : "Sin género"}
            price={0}
            available={true}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
