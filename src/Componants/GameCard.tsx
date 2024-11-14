import { Game } from "../hooks/useGame";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <div
      className="w-full 
          sm:w-smCard 
          md:w-mdCard bg-blackish2 rounded-lg shadow-lg overflow-hidden mb-3 mx-auto 
          lg:w-lgCard "
    >
      <img
        className="w-full h-[200px] 
        sm:h-smImg
        md:h-smCard object-cover"
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
