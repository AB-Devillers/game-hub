import useGame from "../hooks/useGame";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error, loading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <div
        className="text-white grid p-4 gap-4 
      sm:grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 place-content-center"
      >
        {loading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesGrid;
