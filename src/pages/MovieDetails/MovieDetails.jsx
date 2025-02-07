import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../../services/api";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log(movie);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovies("_", movieId);
      setMovie(data.movieCard);
    };
    getData();
  }, [movieId]);

  return <p>Detailes</p>;
};
export default MovieDetails;
