function App() {
  return (
    <>
      <nav className="bg-red-600">nav</nav>
      <div className="grid md:grid-cols-2">
        <aside className="bg-indigo-700 hidden md:block">aside</aside>
        <main className="bg-slate-600">main</main>
      </div>
    </>
  );
}

export default App;
