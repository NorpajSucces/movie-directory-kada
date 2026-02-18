import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorites,
  addToFavorites,
  fetchPopularMovies,
} from "../features/movies/movieSlice";
import "../App.css";

const Favorites = () => {
  const dispatch = useDispatch();

  const { favorites, movies, loading } = useSelector((state) => state.movies);

  // Jika favorites kosong → ambil popular movies
  useEffect(() => {
    if (favorites.length === 0) {
      dispatch(fetchPopularMovies());
    }
  }, [dispatch, favorites.length]);

  return (
    <div className="page-container">
      <h1 className="page-title">Favorite Movies</h1>

      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />

              <div className="movie-content">
                <h3 className="movie-title">{movie.title}</h3>

                <button
                  className="btn btn-remove"
                  onClick={() => dispatch(removeFromFavorites(movie.id))}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="empty-text">No favorite movies yet.</p>

          <h2 className="page-title">Popular Movies</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie-grid">
              {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />

                  <div className="movie-content">
                    <h3 className="movie-title">{movie.title}</h3>

                    <button
                      className="btn btn-add"
                      onClick={() => dispatch(addToFavorites(movie))}
                    >
                      Add to Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Favorites;
