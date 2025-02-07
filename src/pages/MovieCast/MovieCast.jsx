import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../../services/api";
import s from "./MovieCast.module.css";

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
  console.log(movie.genres);
  return (
    <div className={s.wraper}>
      <div>
        <img
          className={s.movieImg}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <ul className={s.movieList}>
        <li className={s.movieItem}>
          <h2>{movie.title}</h2>
          <p>User Score {movie.vote_average * 10}%</p>
        </li>
        <li className={s.movieItem}>
          <h2>Owerviev</h2>
          <p className={s.movieItem}>{movie.overview}</p>
        </li>
        <li className={s.movieItem}>
          <h2>Genres</h2>
          <ul className={s.genresList}>
            {movie &&
              movie.genres?.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default MovieDetails;
