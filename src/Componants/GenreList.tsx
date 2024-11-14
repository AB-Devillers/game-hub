import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, error, loading } = useGenre();
  const genre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {loading && genre.map((gen) => <GenreSkeleton key={gen} />)}
      {error && <p className="text-red-600">{error}</p>}
      {data.map((genre) => (
        <ul>
          <li className="flex items-center mb-3">
            <img
              className="w-11 h-11 rounded-lg object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt="img"
            />
            <p className="m-3 text-lg">{genre.name}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default GenreList;
