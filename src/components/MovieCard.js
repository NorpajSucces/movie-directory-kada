import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { title, poster_path, release_date, vote_average } = movie;
    const year = release_date ? release_date.split('-')[0] : 'N/A';
    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
          <Link
    to={`/movie/${movie.id}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
        <div style={{
            width: '200px',
            textAlign: 'center',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
            <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
                <h4 style={{ fontSize: '16px', margin: '10px 0 5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={title}>
                    {title}
                </h4>
                <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
                    Year: {year}
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold', color: '#f5c518' }}>
                    ★ {vote_average ? vote_average.toFixed(1) : 'N/A'}
                </p>
                {/*<p style={{ margin: '5px 0', fontSize: '12px', color: '#999' }}>
                    Duration: N/A
                </p>*/}
            </div>
        </div>
        </Link>
    );
};

export default MovieCard;
