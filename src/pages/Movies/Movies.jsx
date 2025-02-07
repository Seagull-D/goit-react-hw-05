import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchMovies from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await fetchMovies(query);
      setmovies(data.moviesList);
    };
    getData();
  }, [query]);
  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
  };
  console.log(movies);

  return (
    <section>
      <SearchBar request={handleSetQuery} />
      <MoviesList movies={movies} />
    </section>
  );
};

export default Movies;
