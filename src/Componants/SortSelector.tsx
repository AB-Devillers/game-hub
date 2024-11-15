interface props {
  onSelectSort: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSort }: props) => {
  return (
    <>
      <select
        onChange={(e) => onSelectSort(e.target.value)}
        className="w-56 bg-blackish2 cursor-pointer text-white p-3 rounded custom-icon"
      >
        <option value="">Order by: Revelance</option>
        <option value="-added">Date Added</option>
        <option value="name">Name</option>
        <option value="-released">Release Date</option>
        <option value="-metacritic">Popularity</option>
        <option value="-rating">Avarage Rating</option>
      </select>
    </>
  );
};

export default SortSelector;
