import { useEffect, useState } from "react";
import fetchMovies from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;

      const data = await fetchMovies("", movieId);
      setCast(data.credits?.cast || []);
    };

    getData();
  }, [movieId]);

  return (
    <div className={s.wraper}>
      <ul className={s.castList}>
        {cast.length > 0 ? (
          cast.map((actor) => (
            <li key={actor.id} className={s.castIteam}>
              <img
                className={s.castImg}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={actor.original_name}
              />
              <p>
                {actor.original_name} as {actor.character}
              </p>
            </li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
