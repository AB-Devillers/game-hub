import useGenre from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { genres, error, loading } = useGenre();
  const genre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {loading && genre.map((gen) => <GenreSkeleton key={gen} />)}
      {error && <p className="text-red-600">{error}</p>}
      {genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </>
  );
};

export default GenreList;
