import { useState } from "react";
import GamesGrid from "./Componants/GamesGrid";
import GenreList from "./Componants/GenreList";
import Navbar from "./Componants/Navbar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Componants/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <div className="bg-blackish min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <div className="grid lg:grid-cols-oneAndThree p-4">
        <aside className="hidden text-white lg:block">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </aside>
        <main className="w-full mx-auto">
          <PlatformSelector
            onSelectPlatform={(plateform) => setSelectedPlatform(plateform)}
          />
          <GamesGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
