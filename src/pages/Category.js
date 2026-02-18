import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres, fetchMoviesByGenre } from '../features/movies/movieSlice';

const Category = () => {
    const dispatch = useDispatch();
    
    // State to track if a user has selected a category yet
    const [hasSelected, setHasSelected] = useState(false);
    
    const { genres, movies, loading } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const handleGenreClick = (genreId) => {
        setHasSelected(true); // Toggle the switch to show results
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
                            style={{
                                padding: '10px 22px',
                                border: '1px solid #dfe6e9',
                                borderRadius: '30px',
                                backgroundColor: '#fff',
                                color: '#636e72',
                                cursor: 'pointer',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#0984e3';
                                e.target.style.color = '#fff';
                                e.target.style.borderColor = '#0984e3';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#fff';
                                e.target.style.color = '#636e72';
                                e.target.style.borderColor = '#dfe6e9';
                            }}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Section */}
            <div style={{ maxWidth: '1200px', margin: '50px auto' }}>
                {!hasSelected ? (
                    // Initial State: Shown before clicking any category
                    <div style={{ textAlign: 'center', marginTop: '60px', color: '#b2bec3' }}>
                        <div style={{ fontSize: '64px', marginBottom: '15px' }}>🎬</div>
                        <h3 style={{ fontWeight: '400' }}>Please select a category to discover movies</h3>
                    </div>
                ) : (
                    // Result State: Shown after a category is clicked
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #dfe6e9', paddingBottom: '10px' }}>
                            <h3 style={{ color: '#2d3436', margin: 0 }}>Showing Results</h3>
                            {loading && <span style={{ color: '#0984e3', fontWeight: 'bold' }}>Loading...</span>}
                        </div>

                        {!loading && movies.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#636e72' }}>No movies found for this category.</p>
                        ) : (
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                                gap: '30px' 
                            }}>
                                {movies.map((movie) => (
                                    <div key={movie.id} style={{ 
                                        backgroundColor: '#fff', 
                                        borderRadius: '15px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <img 
                                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
                                            alt={movie.title}
                                            style={{ width: '100%', height: '330px', objectFit: 'cover' }}
                                        />
                                        <div style={{ padding: '20px' }}>
                                            <h4 style={{ fontSize: '16px', margin: '0 0 8px 0', color: '#2d3436', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {movie.title}
                                            </h4>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '13px', color: '#b2bec3' }}>{movie.release_date?.split('-')[0] || 'N/A'}</span>
                                                <span style={{ color: '#fdcb6e', fontSize: '14px', fontWeight: 'bold' }}>★ {movie.vote_average?.toFixed(1)}</span>
                                            </div>
                                        </div>
                                    </div>
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