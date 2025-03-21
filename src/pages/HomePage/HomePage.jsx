import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            headers: {
              // Замість api_read_access_token вставте свій токен
              Authorization: "Bearer api_read_access_token",
            },
          }
        );
        setMovie(response.data.results);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList movies={movie} />
    </div>
  );
}

// const url = "https://api.themoviedb.org/3/trending/movie/day";

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization: "Bearer api_read_access_token",
//   },
// };

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
