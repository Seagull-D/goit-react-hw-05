import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
const TrendMoviesList = ({ trendMovies }) => {
  const location = useLocation();
  return (
    <div className={s.trendContainer}>
      <h2>TOP 20 today</h2>
      <ul>
        {trendMovies.map((movie) => (
          <li className={s.iteamContainer} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
            <p className={s.rating}>rating {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMoviesList;
