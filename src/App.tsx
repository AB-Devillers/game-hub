import { useState } from "react";
import GamesGrid from "./Componants/GamesGrid";
import GenreList from "./Componants/GenreList";
import Navbar from "./Componants/Navbar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Componants/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className="bg-blackish min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <div className="grid lg:grid-cols-oneAndThree p-4">
        <aside className="hidden text-white lg:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <main className="w-full mx-auto">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GamesGrid gameQuery={gameQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
