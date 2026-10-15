import "./App.css";
import GameCard from "./components/GameCard";

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
  { id: 4, title: "Final Fantasy XVI", genre: "Aventura", price: 14.99, available: true },
  { id: 5, title: "Genshin Impact", genre: "Plataformas", price: 19.99, available: true },
  { id: 6, title: "Honkai Star Rail", genre: "Simulación", price: 13.99, available: false },
  { id: 7, title: "Monster Hunter Wilds", genre: "Aventura", price: 14.99, available: true },
  { id: 8, title: "Mario Kart", genre: "Aventura", price: 14.99, available: true },
  { id: 9, title: "Celeste", genre: "Plataformas", price: 19.99, available: true },
  { id: 10, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false },
];

function App() {
  return (
    <main className="app">
      <h1>GameShelf</h1>
      <p>Mi catálogo de videojuegos</p>
      <section className="catalog">
        {games.map((game) => (
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