import type { Game } from "../types/Game.ts";

type GameCardProps = {
  game: Game;
};

export default function GameCard({
  game
}: GameCardProps) {
  return (
    <article className="card">
      <h2>{game.name}</h2>
      <p>Género: {game.genre?.join(", ") ?? "Sin género disponible"}</p>
      <p>
        Lanzamiento en Europa:{" "}
        Fecha de lanzamiento: {game.releaseDate?.Europe ?? "Sin dato disponible"}
      </p>
    </article>
  );
}
