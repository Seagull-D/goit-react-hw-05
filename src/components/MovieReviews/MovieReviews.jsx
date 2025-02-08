import { useEffect, useState } from "react";
import fetchMovies from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [revievs, setRevievs] = useState([]);
  console.log(revievs);

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;

      const data = await fetchMovies("", movieId);
      setRevievs(data.reviews.results || []);
    };

    getData();
  }, [movieId]);

  return (
    <div>
      {revievs.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul className={s.revList}>
          {revievs.map((review) => (
            <li className={s.revItrem} key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;
