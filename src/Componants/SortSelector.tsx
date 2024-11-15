const SortSelector = () => {
  return (
    <>
      <select className="bg-blackish2 cursor-pointer text-white p-3 rounded custom-icon">
        <option>Order by</option>
        <option value="Revelance">Revelance</option>
        <option value="Date Added">Date Added</option>
        <option value="Name">Name</option>
        <option value="Release Date">Release Date</option>
        <option value="Popularity">Popularity</option>
        <option value="Avarage Rating">Avarage Rating</option>
      </select>
    </>
  );
};

export default SortSelector;
