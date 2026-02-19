import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';

const Search = () => {
    const dispatch = useDispatch();
    
    // State lokal untuk input search
    const [query, setQuery] = useState('');
    // State lokal untuk melacak apakah user sudah melakukan pencarian
    const [hasSearched, setHasSearched] = useState(false); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            setHasSearched(true); // Tandai bahwa user sudah mulai mencari
            dispatch(searchMovies(query));
        }
    };
    
    // Ambil data dari Redux
    const { movies, loading, error } = useSelector((state) => state.movies);

    return (
        <div>
            <div className="search-container">
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a movie..."
                        className="search-input"
                    />
                    {query && (
                        <button
                            type="button"
                            className="clear-btn"
                            onClick={() => {
                                setQuery('');
                                setHasSearched(false); // Kembalikan ke tampilan awal jika di-clear
                            }}
                        >
                            ✕
                        </button>
                    )}
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
            
            {/* Logika Render yang Baru */}
            {!hasSearched ? (
                // Jika belum mencari, tampilkan pesan ini
                <p style={{ textAlign: 'center', marginTop: '2rem' }}></p>
            ) : loading ? (
                // Jika sedang mencari
                <p>Loading...</p>
            ) : error ? (
                // Jika terjadi error dari API
                <p>{error}</p>
            ) : movies && movies.length > 0 ? (
                // Jika pencarian selesai dan ada hasilnya
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                // Jika pencarian selesai tapi hasilnya kosong/tidak ditemukan
                <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                    Film "{query}" Not found.
                </p>
            )}
        </div>
    );
};

export default Search;