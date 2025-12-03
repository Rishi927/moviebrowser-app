import { NavLink } from "react-router-dom";
import { MOVIES } from "../data";

function Home() {
  return (
    <div>
      <h2 className="home-title">Welcome to Movie Browser</h2>
      <p className="home-sub">Browse your favorite movies.</p>

      <div className="grid">
        {MOVIES.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            <div className="card">
              <img src={movie.poster} alt={movie.title} />
              <div className="card-body">
                <h3>{movie.title}</h3>
                <p className="muted">{movie.year}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
