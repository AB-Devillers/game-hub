import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FecthingGames {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FecthingGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    console.log(games);
  });
  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="text-white">
        {games.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
