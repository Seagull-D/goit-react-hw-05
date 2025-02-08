import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Hero from "../pages/Hero/Hero";
import Movies from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

const App = () => {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/revievs" element={<MovieReviews />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
