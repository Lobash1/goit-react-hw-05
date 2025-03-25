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
      setSearchParams({ query: searchQuery }); // Обновляем строку запроса в URL
    } catch {
      setError("Whooooooops!!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Получаем параметр 'query' из URL
    const queryParam = searchParams.get("query") || "";
    setQuery(queryParam); // Обновляем состояние query
    if (queryParam) {
      fetchMovies(queryParam); // Если есть query, выполняем поиск
    }
  }, [searchParams]); // Обновляем поисковый запрос, когда изменяется строка запроса

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchParams({ query: newQuery }); // Обновляем query в URL при вводе
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
