import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import axios from "axios";
import { useDebounce } from "use-debounce";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [debouncedQuery] = useDebounce(query, 500);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError("");

    try {
      const apiKey = "350ef846f44a2e48a29e4a08670318df";
      const apiUrl = `https://api.themoviedb.org/3/search/movie`;

      const { data } = await axios.get(apiUrl, {
        params: {
          api_key: apiKey,
          query: searchQuery,
          language: "en-US",
          page: 1,
        },
      });

      setMovies(data.results);
    } catch {
      setError("Whooooooops!!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const queryParam = searchParams.get("query") || "";
    setQuery(queryParam);
  }, [searchParams]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchMovies(debouncedQuery);
      setSearchParams({ query: debouncedQuery }); // Update query in URL after debounce
    }
  }, [debouncedQuery, setSearchParams]); // Only trigger after debounce

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={css.moviesPage}>
      <h2 className={css.title}>Search for Movies</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className={css.searchInput}
        placeholder="Search by movie title..."
      />
      {loading && <b>Loading movies...</b>}
      {error && <b>{error}</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
