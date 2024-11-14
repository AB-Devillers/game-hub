import GamesGrid from "./Componants/GamesGrid";
import Navbar from "./Componants/Navbar";

function App() {
  return (
    <div className="bg-blackish min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <div className="grid lg:grid-cols-oneAndThree p-4">
        <aside className="hidden text-white lg:block">aside</aside>
        <main className="w-full flex justify-center">
          <GamesGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
