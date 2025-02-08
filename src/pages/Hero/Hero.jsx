import TrendMoviesList from "../../components/TrendMoviesList/TrendMoviesList";
import fetchMovies from "../../services/api";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import s from "./Hero.module.css";
const Hero = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies();
        setTrendMovies(data.daily);
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
  }, []);
  console.log(trendMovies);
  return (
    <section className={s.heloSection}>
      <TrendMoviesList trendMovies={trendMovies} />
    </section>
  );
};

export default Hero;
