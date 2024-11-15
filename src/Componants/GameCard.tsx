import { Game } from "../hooks/useGame";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <div
      className="w-full bg-blackish2 rounded-lg shadow-lg overflow-hidden mb-3 mx-auto
    lg:w-lgCard
      md:w-laptop
      sm:w-tablet "
    >
      <img
        className="w-full h-[200px] 
        sm:h-smImg
        md:h-smCard object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div className="p-4">
        <div className="flex justify-between">
          <div className="w-9/12">
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
        <h2 className="text-xl font-semibold text-white mt-4">{game.name}</h2>
        <Emoji rating={game.rating_top} />
      </div>
    </div>
  );
};

export default GameCard;
