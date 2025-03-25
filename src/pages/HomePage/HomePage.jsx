import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "350ef846f44a2e48a29e4a08670318df";
  const apiUrl = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          language: "en-US",
          page: 1,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
