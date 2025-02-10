import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import fetchMovies from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const gobackURL = useRef(location?.state ?? "/");

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovies("_", movieId);
      setMovie(data.movieCard);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <Link to={gobackURL.current}>Go Back</Link>
      <div className={s.wraper}>
        <img
          className={s.movieImg}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

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
      <div className={s.detailsLink}>
        <NavLink className={buildLinkClass} to="cast">
          Custs
        </NavLink>

        <NavLink className={buildLinkClass} to="reviews">
          Revievs
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetails;
