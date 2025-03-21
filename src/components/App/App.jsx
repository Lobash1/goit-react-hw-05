import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MoviesDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <div className={css.container}>
      <h1>DZ 5</h1>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

// // HomePage

// MoviesPage →
// MovieDetailsPage →
// MovieCast →
// MovieReviews →
// NotFoundPage →
// API-запити →
// Go back →
// стилізація →
// деплой.
