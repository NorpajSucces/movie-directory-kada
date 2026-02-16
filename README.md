# Movie Directory Project (Kada Batch 3)

Mini Project direktori film menggunakan React, Redux Toolkit, dan TMDB API.
Tujuan project ini adalah **LEARNING BY DOING**. Setiap anggota tim memiliki tugas coding masing-masing untuk memahami materi React Redux.

## Project Setup (Sudah Selesai)
- **Framework**: Create React App (CRA)
- **State Management**: Redux Toolkit (Store, Slice, AsyncThunk)
- **Routing**: React Router DOM
- **API**: Axios (TMDB)

## Pembagian Tugas

### 1. Setup & Redux Core (@NorpajSucces) - **DONE ✅**
- Setup struktur folder & CRA.
- Setup Redux Store & Slice (`movieSlice.js`).
- Setup Routing & Navigation (`App.js`).
- Membuat **TEMPLATE** Redux Thunk & Reducer untuk diisi oleh member lain.

### 2. Home Page (Member 2)
- Buka file `src/pages/Home.js`:
  - Implementasi logika `useEffect` & `useSelector`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `fetchPopularMovies` (panggil API `/movie/popular`).
  - Tambahkan case `pending`, `fulfilled`, `rejected` di `extraReducers`.

### 3. Search Movie (Member 3)
- Buka file `src/pages/Search.js`:
  - Buat state input search (`useState`).
  - Handle submit & dispatch action `searchMovies`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `searchMovies` (panggil API `/search/movie`).
  - Tambahkan case di `extraReducers`.

### 4. Movie Detail (Member 4)
- Buka file `src/pages/MovieDetail.js`:
  - Ambil parameter ID dari URL.
  - Dispatch `fetchMovieDetail`.
- Buka file `src/features/movies/movieSlice.js`:
  - Isi fungsi `fetchMovieDetail` (panggil API `/movie/{id}`).
  - Tambahkan case di `extraReducers`.

### 5. Favorites + Category (Member 5)
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
