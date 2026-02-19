# Technical Documentation - Movie Directory

## 1. Project Overview
**Movie Directory** is a React-based web application that allows users to discover, search, and manage a list of favorite movies. It utilizes **The Movie Database (TMDB) API** for fetching real-time movie data.

## 2. Technology Stack
-   **Framework**: React (v19)
-   **State Management**: Redux Toolkit & React Redux
-   **Routing**: React Router DOM (v7)
-   **HTTP Client**: Axios
-   **Build Tool**: Create React App (react-scripts)
-   **Styling**: CSS Modules / Standard CSS

## 3. Project Structure
```
src/
├── app/                # Redux store configuration
├── components/         # Reusable UI components
│   ├── MovieCard.js    # Display movie thumbnail & actions
│   └── Navbar.js       # Navigation bar
├── features/           # Redux slices
│   └── movies/
│       └── movieSlice.js # Main state logic (reducers & thunks)
├── pages/              # Application pages
│   ├── Home.js         # Landing page (Popular movies)
│   ├── Search.js       # Search functionality
│   ├── MovieDetail.js  # Detailed movie info & cast
│   ├── Favorites.js    # User's favorite list
│   └── Category.js     # Browse movies by genre
├── services/           # API services
│   └── api.js          # Axios instance with TMDB config
└── App.js              # Main component & Routing setup
```

## 4. State Management (Redux)
The application uses a single slice: `movies` (in [movieSlice.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js)).

### State Structure
```javascript
{
  movies: [],        // List of movies (Popular / Search results / Category results)
  movieDetail: null, // Selected movie details
  cast: [],          // Cast list for selected movie
  genres: [],        // List of available genres
  favorites: [],     // User's favorite movies list
  loading: false,    // Loading state indicator
  error: null        // Error message storage
}
```

### Key Actions (Async Thunks)
-   `fetchPopularMovies`: Get popular movies from TMDB.
-   `searchMovies`: Search movies by query string.
-   `fetchMovieDetail`: Get metadata for a specific movie ID.
-   `fetchMovieCredits`: Get cast/crew for a specific movie ID.
-   `fetchGenres`: Get list of movie genres.
-   `fetchMoviesByGenre`: Get movies filtered by genre ID.

### Synchronous Actions
-   [addToFavorites](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js#88-96): Adds a movie object to `favorites`.
-   [removeFromFavorites](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js#96-101): Removes a movie by ID from `favorites`.
-   [clearDetail](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js#102-106): Resets `movieDetail` and `cast` state.

## 5. Features & Implementation

### Favorites System
-   **Logic**: Managed via Redux. Movies are added/removed using [addToFavorites](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js#88-96) and [removeFromFavorites](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js#96-101) actions.
-   **UI**:
    -   **Add/Remove Button**: Integrated into [MovieCard.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/components/MovieCard.js). Checks if the movie ID exists in the `favorites` array to determine state.
    -   **Page**: [Favorites.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/pages/Favorites.js) renders the list of favorite movies. It displays a "No favorite movies yet." message if the list is empty.

### Navigation & Routing
Routes are defined in [App.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/App.js):
-   `/`: Home Page
-   `/search`: Search Page
-   `/movie/:id`: Movie Detail Page
-   `/favorites`: Favorites Page
-   `/category/:genreId`: Category Page

### API Configuration
-   Base URL: `https://api.themoviedb.org/3` (configured in `.env` as `REACT_APP_TMDB_BASE_URL`)
-   API Key: Loaded from `process.env.REACT_APP_TMDB_API_KEY`

## 6. Setup Instructions

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env` file in the root directory:
    ```
    REACT_APP_TMDB_API_KEY=your_api_key_here
    REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
    ```

3.  **Run Development Server**:
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

4.  **Build for Production**:
    ```bash
    npm run build
    ```
