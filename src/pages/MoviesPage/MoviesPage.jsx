import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import fetchMovies from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchMovies(query);
        setmovies(data.moviesList);
      } catch (error) {
        toast("Something wrong, try again later", {
          icon: "X",
          style: {
            borderRadius: "10px",
            background: "red",
            color: "#fff",
          },
          position: "top-left",
        });
        console.error(error);
      }
    };

    getData();
  }, [query]);
  const handleSetQuery = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
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
