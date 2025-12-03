import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="title">🎬 Movie Browser</h1>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
