import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Navigation/Navigation";
import Hero from "../pages/Hero/Hero";
import Movies from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieCast/MovieCast";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </main>
  );
};

export default App;
