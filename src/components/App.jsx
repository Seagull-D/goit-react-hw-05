import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Hero from "../pages/Hero/Hero";
import Movies from "../pages/Movies/Movies";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </main>
  );
};

export default App;
