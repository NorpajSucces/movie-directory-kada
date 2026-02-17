import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Initial state
const initialState = {
  movies: [],
  movieDetail: null,
  genres: [],
  favorites: [],
  loading: false,
  error: null,
};

// =====================================================================
// MOVIE SLICE (REDUX STATE MANAGEMENT)
// ---------------------------------------------------------------------
// TUGAS: Implementasi Redux Thunk & Reducer untuk masing-masing fitur.
// =====================================================================

// Async Thunks (ACTION CREATORS)
// ------------------------------
// Gunakan createAsyncThunk untuk request API.
// Format: createAsyncThunk('movies/namaAction', async (params) => { ... })

// 1. Fetch Popular Movies (TUGAS MEMBER 2: HOME PAGE)
// TODO: Implement fetchPopularMovies di sini
// export const fetchPopularMovies = ...

// 2. Search Movies (TUGAS MEMBER 3: SEARCH PAGE)
// TODO: Implement searchMovies di sini (terima parameter query)
// export const searchMovies = ...
// 1️⃣ Fetch Popular Movies
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/movie/popular");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// 3. Fetch Movie Detail (TUGAS MEMBER 4: MOVIE DETAIL)
// TODO: Implement fetchMovieDetail di sini (terima parameter id)
// export const fetchMovieDetail = ...

// 4. Fetch Genres (TUGAS MEMBER 5: CATEGORY PAGE)
// TODO: Implement fetchGenres di sini
// export const fetchGenres = ...

// 5. Fetch Movies by Genre (TUGAS MEMBER 5: CATEGORY PAGE)
// TODO: Implement fetchMoviesByGenre di sini (terima parameter genreId)
// export const fetchMoviesByGenre = ...

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // Sync Reducers (TUGAS MEMBER 4 & 5: FAVORITES)
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const isExist = state.favorites.find((item) => item.id === movie.id);
      if (!isExist) {
        state.favorites.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload,
      );
    },
    clearDetail: (state) => {
      state.movieDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ===============================================================
      // HANDLE ASYNC ACTIONS (PENDING, FULFILLED, REJECTED)
      // ===============================================================

      // 1. Handle fetchPopularMovies (MEMBER 2)
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // 2. Handle searchMovies
    // TODO: Tambahkan .addCase untuk searchMovies di sini...

    // 3. Handle fetchMovieDetail
    // TODO: Tambahkan .addCase untuk fetchMovieDetail di sini...

    // 4. Handle fetchGenres
    // TODO: Tambahkan .addCase untuk fetchGenres di sini...

    // 5. Handle fetchMoviesByGenre
    // TODO: Tambahkan .addCase untuk fetchMoviesByGenre di sini...
  },
});

export const { addToFavorites, removeFromFavorites, clearDetail } =
  movieSlice.actions;

export default movieSlice.reducer;
