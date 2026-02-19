import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchMoviesByGenre } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';

const Category = () => {
    const dispatch = useDispatch();
    const [hasSelected, setHasSelected] = useState(false);
    const [selectedGenreId, setSelectedGenreId] = useState(null);
    const { genres, movies, loading } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const handleGenreClick = (genreId) => {
        setHasSelected(true);
        setSelectedGenreId(genreId);
        dispatch(fetchMoviesByGenre(genreId));
    };

    return (
        <div className="category-page">

            {/* Genre Section */}
            <div className="category-genre-section">
                <h2 className="category-title">Browse by Category</h2>
                <div className="genre-btn-group">
                    {genres.map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => handleGenreClick(genre.id)}
                            className={`genre-btn ${selectedGenreId === genre.id ? 'active' : ''}`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Section */}
            <div className="category-results">
                {!hasSelected ? (
                    <div className="category-empty">
                        <div style={{ fontSize: '64px', marginBottom: '15px' }}>🎬</div>
                        <h3 style={{ fontWeight: '400' }}>Please select a category to discover movies</h3>
                    </div>
                ) : (
                    <>
                        <div className="category-results-header">
                            <h3 style={{ color: '#2d3436', margin: 0 }}>Showing Results</h3>
                            {loading && <span style={{ color: '#0984e3', fontWeight: 'bold' }}>Loading...</span>}
                        </div>

                        {!loading && movies.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#636e72' }}>No movies found for this category.</p>
                        ) : (
                            <div className="movie-grid">
                                {movies.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Category;