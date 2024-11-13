import useGame from "../hooks/useGame";

const GamesGrid = () => {
  const { games, error } = useGame();
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
