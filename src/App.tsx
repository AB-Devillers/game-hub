import { useState } from "react";
import GamesGrid from "./Componants/GamesGrid";
import GenreList from "./Componants/GenreList";
import Navbar from "./Componants/Navbar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Componants/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <PlatformSelector />
          <GamesGrid selectedGenre={selectedGenre} />
        </main>
      </div>
    </div>
  );
}

export default App;
