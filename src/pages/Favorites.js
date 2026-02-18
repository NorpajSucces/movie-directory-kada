import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import "../App.css";

const Favorites = () => {

  const { favorites } = useSelector((state) => state.movies);

  return (
    <div className="page-container">
      <h1 className="page-title">Favorite Movies</h1>

      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="empty-text">No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
