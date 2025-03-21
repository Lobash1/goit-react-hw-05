import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <p>
        404 Not Found! Please follow this <Link to="/dashboard">link</Link>
      </p>
    </div>
  );
}
