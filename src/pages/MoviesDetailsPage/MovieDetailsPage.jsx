import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import css from "./MoviesDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Получаем поисковый запрос из state
  const searchQuery = location.state?.searchQuery || "";

  // Сохраняем путь назад
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const apiKey = "350ef846f44a2e48a29e4a08670318df";
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

        const { data } = await axios.get(apiUrl, {
          params: {
            api_key: apiKey,
            language: "en-US",
          },
        });

        setMovie(data);
      } catch {
        setError("Failed to fetch movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    // Передаем поисковый запрос назад через state
    navigate(backLink.current, { state: { searchQuery } });
  };

  return (
    <div className={css.movieDetailsPage}>
      <button onClick={handleGoBack} className={css.goBackBtn}>
        Go Back
      </button>
      {loading && <p>Loading movie details...</p>}
      {error && <p className={css.error}>{error}</p>}

      {movie && (
        <>
          <div className={css.movieDetails}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://www.themoviedb.org/assets/2/v4/gfx/noposter-780a72594a0f66c2e4632836a01175d0.png"
              }
              alt={movie.title}
              className={css.poster}
            />
            <div className={css.details}>
              <h2 className={css.title}>{movie.title}</h2>
              <p className={css.releaseDate}>{movie.release_date}</p>
              <p className={css.overview}>{movie.overview}</p>
            </div>
          </div>

          {/* Блок с доп. информацией (Cast, Reviews) */}
          <div className={css.additionalInfo}>
            <h3>Additional Information</h3>
            <ul className={css.navLinks}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      )}
    </div>
  );
}
