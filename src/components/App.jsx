import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Hero from "../pages/Hero/Hero";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

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
