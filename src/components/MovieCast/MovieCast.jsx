import { useEffect, useState } from "react";
import axios from "axios";
import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      setError("");

      try {
        const apiKey = "350ef846f44a2e48a29e4a08670318df";
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

        const { data } = await axios.get(apiUrl, {
          params: {
            api_key: apiKey,
            language: "en-US",
          },
        });

        setCast(data.cast);
      } catch {
        setError("Failed to fetch movie cast. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.movieCast}>
      {loading && <p>Loading cast...</p>}
      {error && <p className={css.error}>{error}</p>}
      {cast.length === 0 ? (
        <p className={css.noCast}>No cast information available.</p>
      ) : (
        <ul className={css.castList}>
          {cast.map((actor, index) => (
            <li key={`${actor.id}-${index}`} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://www.themoviedb.org/assets/2/v4/gfx/noposter-780a72594a0f66c2e4632836a01175d0.png"
                }
                alt={actor.name}
                className={css.actorImage}
              />
              <p className={css.actorName}>{actor.name}</p>
              <p className={css.character}>as {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
