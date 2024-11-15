import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <h1 className="text-white text-5xl font-bold ml-8 mb-9">{heading}</h1>;
};

export default GameHeading;
