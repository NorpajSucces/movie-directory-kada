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
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '40px 20px' }}>

            {/* Genre Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#2d3436', fontWeight: '700' }}>
                    Browse by Category
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
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
            <div style={{ maxWidth: '1200px', margin: '50px auto' }}>
                {!hasSelected ? (
                    <div style={{ textAlign: 'center', marginTop: '60px', color: '#b2bec3' }}>
                        <div style={{ fontSize: '64px', marginBottom: '15px' }}>🎬</div>
                        <h3 style={{ fontWeight: '400' }}>Please select a category to discover movies</h3>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #dfe6e9', paddingBottom: '10px' }}>
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