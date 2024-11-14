import { Game } from "../hooks/useGame";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

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
        <h2 className="text-xl font-semibold text-white mb-2">{game.name}</h2>
        <div className="flex justify-between">
          <div className="w-9/12">
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
