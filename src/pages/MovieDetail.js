import { useParams } from "react-router-dom";
import { MOVIES } from "../data";

function MovieDetail() {
  const { id } = useParams();
  const movie = MOVIES.find(m => m.id === Number(id));

  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="detail">
      <button className="back" onClick={() => window.history.back()}>
        ⬅ Back
      </button>

      <div className="detail-inner">
        <img className="detail-poster" src={movie.poster} alt={movie.title} />

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
