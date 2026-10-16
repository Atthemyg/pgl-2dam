import "./App.css";
import GameCard from "./components/GameCard";
import { useState } from "react";

type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  available: boolean;
};

const games: Game[] = [
  { id: 1, title: "Hollow Knight", genre: "Aventura", price: 14.99, available: true },
  { id: 2, title: "Celeste", genre: "Plataformas", price: 19.99, available: true },
  { id: 3, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false },
  { id: 4, title: "Final Fantasy XVI", genre: "RPG de acción", price: 49.99, available: true },
  { id: 5, title: "Genshin Impact", genre: "RPG de acción", price: 0.0, available: true },
  { id: 6, title: "Honkai: Star Rail", genre: "RPG por turnos", price: 0.0, available: false },
  { id: 7, title: "Monster Hunter Wilds", genre: "Acción", price: 69.99, available: true },
  { id: 8, title: "Mario Kart 8 Deluxe", genre: "Carreras", price: 59.99, available: true },
  { id: 9, title: "Pokopia", genre: "Simulación", price: 69.99, available: true },
  { id: 10, title: "Animal Crossing: New Horizons", genre: "Simulación de vida", price: 59.99, available: false },
];

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyUnder15, setOnlyUnder15] = useState(false);


  const availableFiltered = onlyAvailable
    ? games.filter((game) => game.available)
    : games;

  
  const visibleGames = onlyUnder15
    ? availableFiltered.filter((game) => game.price < 15)
    : availableFiltered;

  return (
    <main className="app">
      <h1>GameShelf</h1>
      <p className="subtitle">Mi catálogo de videojuegos</p>

      <div className="filters">
        <button
          className={onlyAvailable ? "filter-button active" : "filter-button"}
          onClick={() => setOnlyAvailable(!onlyAvailable)}
        >
          {onlyAvailable ? "Mostrar todos" : "Mostrar disponibles"}
        </button>
        <button
          className={onlyUnder15 ? "filter-button active" : "filter-button"}
          onClick={() => setOnlyUnder15(!onlyUnder15)}
        >
          {onlyUnder15 ? "Quitar filtro de precio" : "Menos de 15 €"}
        </button>
      </div>

      <p className="counter-text">
        Mostrando {visibleGames.length} de {games.length} juegos
      </p>

      <section className="catalog">
        {visibleGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
