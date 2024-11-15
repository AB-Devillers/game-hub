import useGame from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

interface props {
  selectedGenre: Genre | null;
}

const GamesGrid = ({ selectedGenre }: props) => {
  const { data, error, loading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <div className="text-white flex flex-wrap p-4 gap-4 ">
        <div className="flex flex-wrap justify-center">
          {loading &&
            skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        </div>

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesGrid;
