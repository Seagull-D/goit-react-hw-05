import TrendMoviesList from "../../components/TrendMoviesList/TrendMoviesList";
import fetchMovies from "../../services/api";
import { useState, useEffect } from "react";
import s from "./Hero.module.css";
const Hero = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies();
      setTrendMovies(data.daily);
    };
    getData();
  }, []);
  console.log(trendMovies);
  return (
    <section className={s.heloSection}>
      <TrendMoviesList trendMovies={trendMovies} />
    </section>
  );
};

export default Hero;
