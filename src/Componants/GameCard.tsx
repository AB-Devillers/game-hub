import { Game } from "../hooks/useGame";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] bg-[#1f1f1f] rounded-lg shadow-lg overflow-hidden mb-3 mx-auto lg:w-[230px] ">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        src={game.background_image}
        alt={game.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
