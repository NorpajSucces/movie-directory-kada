import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Initial state
const initialState = {
  movies: [],
  movieDetail: null,
  cast: [],
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
export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
    const response = await api.get('/discover/movie?sort_by=popularity.desc');
    return response.data.results;
});

// 2. Search Movies (TUGAS MEMBER 3: SEARCH PAGE)
// TODO: Implement searchMovies di sini (terima parameter query)
export const searchMovies = createAsyncThunk('movies/searchMovies', async (query) => {
    const response = await api.get(`/search/movie?query=${query}`);
    return response.data.results;
});


// 3. Fetch Movie Detail (TUGAS MEMBER 4: MOVIE DETAIL)
// TODO: Implement fetchMovieDetail di sini (terima parameter id)
// export const fetchMovieDetail = ...
export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 4. MOVIE CREDITS (ACTORS) ✅
export const fetchMovieCredits = createAsyncThunk(
  "movies/fetchMovieCredits",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/movie/${movieId}/credits`);
      return response.data.cast;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
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
        state.cast = [];
      },    
    },

    extraReducers: (builder) => {
        builder
            // ===============================================================
            // HANDLE ASYNC ACTIONS (PENDING, FULFILLED, REJECTED)
            // ===============================================================

            // 1. Handle fetchPopularMovies (MEMBER 2)
            .addCase(fetchPopularMovies.pending, (state) => {
                // TODO: Set loading true
                state.loading = true;
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                // TODO: Set loading false, simpan data ke state.movies
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                // TODO: Set loading false, simpan error message
                state.loading = false;
                state.error = action.error.message; 
            })

        // 2. Handle searchMovies 
        // TODO: Tambahkan .addCase untuk searchMovies di sini...
        .addCase(searchMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(searchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        })
        .addCase(searchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // 3. Handle fetchMovieDetail 
        // TODO: Tambahkan .addCase untuk fetchMovieDetail di sini...
        // 3. Handle fetchMovieDetail
  
        // ===== MOVIE DETAIL =====
      .addCase(fetchMovieDetail.pending, (state) => {
        state.loading = true;
        state.movieDetail = null;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetail = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     // ===== MOVIE CREDITS (ACTORS)  =====
      .addCase(fetchMovieCredits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.loading = false;
        state.cast = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
     });
  },
});

        // 4. Handle fetchGenres 
        // TODO: Tambahkan .addCase untuk fetchGenres di sini...

        // 5. Handle fetchMoviesByGenre 
        // TODO: Tambahkan .addCase untuk fetchMoviesByGenre di sini...
  /*  },
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
      })

    // 2. Handle searchMovies
    // TODO: Tambahkan .addCase untuk searchMovies di sini...
    .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
    })
    .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

    // 3. Handle fetchMovieDetail
    // TODO: Tambahkan .addCase untuk fetchMovieDetail di sini...
    

    // 4. Handle fetchGenres
    // TODO: Tambahkan .addCase untuk fetchGenres di sini...

    // 5. Handle fetchMoviesByGenre
    // TODO: Tambahkan .addCase untuk fetchMoviesByGenre di sini...
  },
});*/

export const { addToFavorites, removeFromFavorites, clearDetail } =
  movieSlice.actions;

export default movieSlice.reducer;
