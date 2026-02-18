import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchMovieDetail,
    fetchMovieCredits,
    addToFavorites,
    removeFromFavorites,
} from "../features/movies/movieSlice";

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { movieDetail, cast, loading, error, favorites } = useSelector(
        (state) => state.movies
    );

    useEffect(() => {
        dispatch(fetchMovieDetail(id));
        dispatch(fetchMovieCredits(id));
    }, [dispatch, id]);

    if (loading) return <p style={{ padding: 30 }}>Loading...</p>;
    if (error) return <p style={{ padding: 30 }}>Error: {error}</p>;
    if (!movieDetail) return null;

    const isFavorite = favorites.find((movie) => movie.id === movieDetail.id);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(movieDetail.id));
        } else {
            dispatch(addToFavorites(movieDetail));
        }
    };

    return (
        <div className="detail-page">
            <div
                className="detail-backdrop"
                style={{
                    backgroundImage: `linear-gradient(
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.9)
          ), url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
                }}
            >
                {/* TOP SECTION */}
                <div className="detail-top">
                    {/* POSTER */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                        alt={movieDetail.title}
                        className="detail-poster"
                    />

                    {/* INFO */}
                    <div className="detail-info">
                        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
                            {movieDetail.title}
                        </h1>

                        <p style={{ color: "#bbb", marginBottom: "10px" }}>
                            ⭐ {movieDetail.vote_average} •{" "}
                            {movieDetail.release_date?.slice(0, 4)} •{" "}
                            {movieDetail.runtime} min
                        </p>

                        <p style={{ marginBottom: "15px" }}>
                            {movieDetail.genres?.map((g) => g.name).join(", ")}
                        </p>

                        {/* FAVORITE BUTTON - Now toggles Add/Remove */}
                        <button
                            onClick={handleFavoriteClick}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: isFavorite ? "#555" : "#e50914",
                                border: isFavorite ? "1px solid #e50914" : "none",
                                borderRadius: "6px",
                                color: "#fff",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginBottom: "20px",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
                        </button>

                        {/* OVERVIEW */}
                        <h3>Synopsis</h3>
                        <p style={{ lineHeight: "1.6", color: "#ddd" }}>
                            {movieDetail.overview}
                        </p>
                    </div>
                </div>

                {/* CAST */}
                <div style={{ marginTop: "40px" }}>
                    <h2>Cast</h2>
                    <div className="detail-cast">
                        {cast.slice(0, 10).map((actor) => (
                            <div key={actor.id} className="cast-card">
                                <img
                                    src={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                            : "https://via.placeholder.com/140x200"
                                    }
                                    alt={actor.name}
                                    style={{ width: "100%", borderRadius: "8px" }}
                                />
                                <p style={{ fontWeight: "bold", margin: "5px 0 0" }}>
                                    {actor.name}
                                </p>
                                <p style={{ fontSize: "12px", color: "#aaa" }}>
                                    {actor.character}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
