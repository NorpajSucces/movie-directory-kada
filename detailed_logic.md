# Detailed Logic Documentation

This document explains the specific implementation of core technologies in the **Movie Directory** project.

## 1. React Redux & Redux Thunk
Redux is used for global state management, specifically for handling movie data, authentication (if added), and cross-component communication.

### Implementation Details
-   **Store Configuration**: The global store is configured in `src/app/store.js` (implied) and provided to the app via `<Provider>` in [index.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/index.js).
-   **Slice Pattern**: We use `createSlice` from Redux Toolkit in [features/movies/movieSlice.js](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/features/movies/movieSlice.js) to bundle actions and reducers.

### Redux Thunk (Async Logic)
Redux Thunk is used to handle asynchronous API calls to TMDB.

**Example: Fetching Popular Movies**
```javascript
// src/features/movies/movieSlice.js

// 1. Create Async Thunk
export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
    // Performs async API call
    const response = await api.get('/discover/movie?sort_by=popularity.desc');
    return response.data.results; // Returns payload for fulfilled action
});

const movieSlice = createSlice({
    // ...
    extraReducers: (builder) => {
        builder
            // 2. Handle Loading State
            .addCase(fetchPopularMovies.pending, (state) => {
                state.loading = true;
            })
            // 3. Handle Success State
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload; // Update store with API data
            })
            // 4. Handle Error State
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
```

### Consumption in Components
Components connect to the store using React Redux hooks.

```javascript
// src/pages/Home.js
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    // Select specific part of state
    const { movies, loading } = useSelector((state) => state.movies);

    useEffect(() => {
        // Dispatch thunk to initiate fetching
        dispatch(fetchPopularMovies());
    }, [dispatch]);
};
```

## 2. React Hooks
Functional components utilize hooks to manage lifecycle events and local state.

### `useEffect`
Used for side effects like fetching data when a component mounts or when dependencies change.

**Example: Fetching Data on Mount**
```javascript
// src/pages/Category.js
useEffect(() => {
    // Fetches genre list once when component mounts
    dispatch(fetchGenres());
}, [dispatch]); // Dependency array ensures it runs only when dispatch changes (stable)
```

### `useState`
Used for managing local component state that doesn't need to be global.

**Example: Managing UI State**
```javascript
// src/pages/Category.js
const [hasSelected, setHasSelected] = useState(false); // Tracks if category is selected
const [selectedGenreId, setSelectedGenreId] = useState(null); // Tracks active genre

const handleGenreClick = (genreId) => {
    setHasSelected(true); // Trigger UI update
    setSelectedGenreId(genreId); // Update active ID
    // ...
};
```

## 3. Flexbox & CSS Layout
The application uses a mix of Flexbox and CSS Grid for responsive layouts.

### Global Flexbox Wrappers
**Examples from [src/App.css](file:///Users/macbook/Documents/KADA3/movie-directory-kada/src/App.css):**
```css
/* Centering content vertically and horizontally */
.App-header {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center;    /* Center horizontally */
  justify-content: center; /* Center vertically */
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between; /* Space out Logo and Links */
  align-items: center;    /* Vertically align based on height */
}
```

### Grid System for Movies
For the movie listing, **CSS Grid** is used for a more robust responsive layout that handles wrapping automatically without media queries for every breakpoint.

```css
/* src/App.css */
.movie-grid {
  display: grid;
  /* Auto-fill columns: minimum 200px width, expanding to fill 1fr */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px; /* Spacing between grid items */
}
```

### Inline Flex Styling
Inline styles are occasionally used for specific layouts within components.

```javascript
// src/pages/Category.js
<div style={{ 
    display: 'flex', 
    flexWrap: 'wrap', // Allow items to wrap to next line
    justifyContent: 'center', 
    gap: '12px' 
}}>
    {/* Genre Buttons */}
</div>
```
