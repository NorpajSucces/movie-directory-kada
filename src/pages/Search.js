import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';

const Search = () => {
    // Tugas Member 3: Search Page
    const dispatch = useDispatch();
    // 1. TODO: Buat state lokal untuk input search
    const [query, setQuery] = useState('');
    // 2. TODO: Buat fungsi handleSubmit yang men-dispatch action searchMovies(query)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchMovies(query));
    };
    // 3. TODO: Tampilkan hasil pencarian dari state.movies
    const { movies, loading, error } = useSelector((state) => state.movies);

    return (
        <div>
            <h1></h1>
            {/* TODO: Render Search Input & Results Here */}
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
                            onClick={() => setQuery('')}
                        >
                            ✕
                        </button>
                    )}
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <div className="movie-grid">{movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}</div>}
        </div>
    );
};

export default Search;
