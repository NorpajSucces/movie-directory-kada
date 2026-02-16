# Movie Directory Project (Kada Batch 3)

Mini Project direktori film menggunakan React, Redux Toolkit, dan TMDB API.
T

## Project Setup (Sudah Selesai)
- **Framework**: Create React App (CRA)
- **State Management**: Redux Toolkit (Store, Slice, AsyncThunk)
- **Routing**: React Router DOM
- **API**: Axios (TMDB)

## Pembagian Tugas

### 1. Setup & Redux Core 
- Setup struktur folder & CRA.
- Setup Redux Store & Slice (`movieSlice.js`).
- Setup Routing & Navigation (`App.js`).

### 2. Home Page 
- Buka file `src/pages/Home.js`:
  - Implementasi logika `useEffect` & `useSelector`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `fetchPopularMovies` (panggil API `/movie/popular`).
  - Tambahkan case `pending`, `fulfilled`, `rejected` di `extraReducers`.

### 3. Search Movie 
- Buka file `src/pages/Search.js`:
  - Buat state input search (`useState`).
  - Handle submit & dispatch action `searchMovies`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `searchMovies` (panggil API `/search/movie`).
  - Tambahkan case di `extraReducers`.

### 4. Movie Detail
- Buka file `src/pages/MovieDetail.js`:
  - Ambil parameter ID dari URL.
  - Dispatch `fetchMovieDetail`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `fetchMovieDetail` (panggil API `/movie/{id}`).
  - Tambahkan case di `extraReducers`.

### 5. Favorites + Category 
- **Favorites**:
  - Implementasi `addToFavorites` & `removeFromFavorites` di reducer `movieSlice.js`.
  - Tampilkan list di `src/pages/Favorites.js`.
- **Category**:
  - Buka file `src/pages/Category.js`.
  - Buka file `src/features/movies/movieSlice.js`:
    - Isi fungsi `fetchGenres` & `fetchMoviesByGenre`.
    - Tambahkan case di `extraReducers`.

## Cara Menjalankan Project (Untuk Anggota Tim)

1. **Clone Repo**
   ```bash
   git clone https://github.com/NorpajSucces/movie-directory-kada.git
   cd movie-directory-kada
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Buat File `.env`**
   Buat file baru bernama `.env` di root folder, lalu isi:
   ```env
   REACT_APP_TMDB_API_KEY=bc998fa94ab6a96a40fc661452272274
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Jalankan Project**
   ```bash
   npm start
   ```

## Catatan Penting
Jangan lupa **pull** dulu sebelum **push** codingan kalian!
```bash
git pull origin main
# (coding...)
git add .
git commit -m "Pesan commit"
git push origin main
```
