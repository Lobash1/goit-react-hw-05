import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MovieList.module.css";

export default function MovieList({ movies, searchQuery }) {
  const location = useLocation();

  return (
    <div className={css.movieList}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, searchQuery }} // Сохраняем поисковый запрос в state
              className={css.link}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://www.themoviedb.org/assets/2/v4/gfx/noposter-780a72594a0f66c2e4632836a01175d0.png"
                }
                alt={movie.title}
                className={css.moviePoster}
              />
              <p className={css.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  searchQuery: PropTypes.string.isRequired, // Передаем поисковый запрос
};
