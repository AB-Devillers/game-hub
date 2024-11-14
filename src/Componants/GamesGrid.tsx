import useGame from "../hooks/useGame";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { data, error, loading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <div className="text-white flex flex-wrap p-4 gap-4 ">
        {loading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesGrid;
