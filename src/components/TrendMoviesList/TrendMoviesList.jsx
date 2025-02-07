import { Link } from "react-router-dom";
import s from "./TrendMoviesList.module.css";
const TrendMoviesList = ({ trendMovies }) => {
  return (
    <div className={s.trendContainer}>
      <h2>TOP 20 today</h2>
      <ul>
        {trendMovies.map((movie) => (
          <li className={s.iteamContainer} key={movie.id}>
            <Link to={movie.id}>{movie.title}</Link>
            <p className={s.rating}>rating {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendMoviesList;
