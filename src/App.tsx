import GamesGrid from "./Componants/GamesGrid";
import Navbar from "./Componants/Navbar";

function App() {
  return (
    <div className="bg-[#151515]">
      <nav>
        <Navbar />
      </nav>
      <div className="grid md:grid-cols-2">
        <aside className=" hidden text-white md:block">aside</aside>
        <main className="">
          <GamesGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
