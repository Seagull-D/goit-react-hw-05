import axios from "axios";
import toast from "react-hot-toast";

const URL = "https://api.themoviedb.org/3/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjk2MGZkNTZlYWEyNzRlZThmOTY1YWE4MDdlMTQ1YSIsIm5iZiI6MTczODg2ODI2OS44ODMwMDAxLCJzdWIiOiI2N2E1MDYyZDg4NThjODcwNWE2NmY4MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p9otXZ4U6Eao2HxhP0edpksdcW1qkXbtFmtHGmm3qnw";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization: TOKEN,
  },
};

const fetchMovies = async (request, movieId) => {
  let daily = [];
  let moviesList = null;
  let movieCard = null;
  let credits = null;
  let reviews = null;
  try {
    const TrendDayMovies = await axios.get(
      `${URL}trending/movie/day?language=en-US`,
      options
    );
    daily = TrendDayMovies.data.results;
  } catch (error) {
    console.error("Error fetching daily trends:", error);
  }
  if (request) {
    try {
      const movies = await axios.get(
        `${URL}search/movie?query=${request}&include_adult=true&language=en-US&page=1`,
        options
      );
      moviesList = movies.data.results;
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
      console.error("Error fetching movies:", error);
    }
  }

  if (movieId) {
    try {
      const movie = await axios.get(
        `${URL}movie/${movieId}?language=en-US`,

        options
      );
      movieCard = movie.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }
  if (movieId) {
    try {
      const credit = await axios.get(
        `${URL}movie/${movieId}/credits?language=en-US`,

        options
      );
      credits = credit.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }
  if (movieId) {
    try {
      const reviev = await axios.get(
        `${URL}movie/${movieId}/reviews?language=en-US`,

        options
      );
      reviews = reviev.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  return { daily, moviesList, movieCard, credits, reviews };
};

export default fetchMovies;
