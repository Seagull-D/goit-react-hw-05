import axios from "axios";

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
  let moviesList = [];
  let movieCard = null;
  let credits = null;

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
      console.error("Error fetching movies:", error);
    }
  }

  if (movieId) {
    try {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,

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
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,

        options
      );
      credits = credit.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  return { daily, moviesList, movieCard, credits };
};

export default fetchMovies;
