import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/movies/movieSlice';
import '../App.css'; // Ensure CSS is available if not globally imported efficiently
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.movies);
    const { id, title, poster_path, release_date, vote_average } = movie;
    const year = release_date ? release_date.split('-')[0] : 'N/A';
    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const isFavorite = favorites.some((fav) => fav.id === id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFavorite) {
            dispatch(removeFromFavorites(id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    return (
        <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div className="movie-card" style={{ width: '200px' }}> {/* Keep width for Home page layout consistency if needed, or rely on grid */}


                <img
                    src={imageUrl}
                    alt={title}
                    className="movie-image"
                />
                <div className="movie-content">
                    <h4 className="movie-title" title={title} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {title}
                    </h4>
                    <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
                        Year: {year}
                    </p>
                    <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold', color: '#f5c518' }}>
                        ★ {vote_average ? vote_average.toFixed(1) : 'N/A'}
                    </p>

                    <button
                        className={`btn ${isFavorite ? 'btn-remove' : 'btn-add'}`}
                        onClick={handleFavoriteClick}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
