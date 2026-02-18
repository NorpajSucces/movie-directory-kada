import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../features/movies/movieSlice';
import MovieCard from '../components/MovieCard';

const Home = () => {
    // Tugas Member 2: Home Page
    // 1. TODO: Gunakan useDispatch dan useSelector
    // 2. TODO: Dispatch fetchPopularMovies saat component mount
    // 3. TODO: Tampilkan list film dari state.movies
    // 4. TODO: Gunakan CSS flexbox/grid untuk layout
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Popular Movies</h1>
            {loading && <p>Loading movies...</p>}
            {error && <p>Error: {error}</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;
