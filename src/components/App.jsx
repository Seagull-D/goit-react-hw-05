import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
// import Hero from "../pages/Hero/Hero";
// import Movies from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const App = () => {
  return (
    <main>
      <Toaster />
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}></Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Suspense />
    </main>
  );
};

export default App;
