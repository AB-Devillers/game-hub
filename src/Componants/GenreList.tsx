import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: props) => {
  const { data, error, loading } = useGenre();
  const genre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {loading && genre.map((gen) => <GenreSkeleton key={gen} />)}
      {error && <p className="text-red-600">{error}</p>}
      <ul>
        {data.map((genre) => (
          <li className="flex items-center mb-3" key={genre.id}>
            <img
              className="w-11 h-11 rounded-lg object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt="img"
            />

            <button
              onClick={() => onSelectGenre(genre)}
              className={`m-3 text-lg ${
                genre.id === selectedGenre?.id ? "font-bold" : "font-normal"
              }  hover:underline `}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
