import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import Favorites from "./pages/Favorites";
import Category from "./pages/Category";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-logo">🎬 MovieApp</div>

          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:genreId" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
