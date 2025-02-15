import { useState } from "react";
import GamesGrid from "./Componants/GamesGrid";
import GenreList from "./Componants/GenreList";
import Navbar from "./Componants/Navbar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Componants/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./Componants/SortSelector";
import GameHeading from "./Componants/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className="bg-blackish min-h-screen">
      <nav>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </nav>
      <div className="grid lg:grid-cols-oneAndThree p-4">
        <aside className="hidden text-white lg:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <main className="w-full mx-auto ">
          <GameHeading gameQuery={gameQuery} />
          <div className="ml-9 flex items-center flex-wrap  cen">
            <div className="mb-3">
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </div>
            <span className="ml-6 mb-3">
              <SortSelector
                onSelectSort={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </span>
          </div>
          <GamesGrid gameQuery={gameQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
