import { useEffect, useState } from "react";
import axios from "axios";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError("");

      try {
        const apiKey = "350ef846f44a2e48a29e4a08670318df";
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

        const { data } = await axios.get(apiUrl, {
          params: {
            api_key: apiKey,
            language: "en-US",
          },
        });

        setReviews(data.results);
      } catch {
        setError("Failed to fetch movie reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.movieReviews}>
      {loading && <p>Loading reviews...</p>}
      {error && <p className={css.error}>{error}</p>}
      {reviews.length === 0 ? (
        <p className={css.noReviews}>No reviews available for this movie.</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((review, index) => (
            <li key={`${review.id}-${index}`} className={css.reviewItem}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
