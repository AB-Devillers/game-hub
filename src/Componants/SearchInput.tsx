import { useRef } from "react";

interface props {
  onSearch: (serchText: string) => void;
}

const SearchInput = ({ onSearch }: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="w-9/12"
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <input
        type="text"
        className="w-full rounded-full p-3 bg-transparent border-gray-500 border-2 text-lg"
        placeholder="Search Games"
        ref={ref}
      />
    </form>
  );
};

export default SearchInput;
