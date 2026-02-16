# Movie Directory Project (Kada Batch 3)

Mini Project direktori film menggunakan React, Redux Toolkit, dan TMDB API.

## Project Setup (Sudah Selesai)
- **Framework**: Create React App (CRA)
- **State Management**: Redux Toolkit (Store, Slice, AsyncThunk)
- **Routing**: React Router DOM
- **API**: Axios (TMDB)

## Pembagian Tugas

### 1. Setup & Redux Core (@NorpajSucces) - **DONE ✅**
- Setup struktur folder & CRA.
- Setup Redux Store & Slice (`movieSlice.js`).
- Setup fungsi API: `fetchPopular`, `searchMovies`, `fetchDetail`, `fetchGenres`, `fetchByGenre`.
- Setup Routing & Navigation (`App.js`).

### 2. Home Page (Member 2)
- Tampilkan daftar "Popular Movies" di halaman utama.
- Gunakan selector: `state.movies`.
- Gunakan action: `fetchPopularMovies()`.
- Layout: Flexbox/Grid responsif.

### 3. Search Movie (Member 3)
- Buat input search.
- Saat user mengetik/submit, panggil `dispatch(searchMovies(keyword))`.
- Tampilkan hasil pencarian (gunakan selector `state.movies`).

### 4. Movie Detail (Member 4)
- Ambil ID dari URL (`useParams`).
- Panggil `dispatch(fetchMovieDetail(id))`.
- Tampilkan detail lengkap film (Judul, Poster, Deskripsi, Rating, dll).
- Tombol "Add to Favorite".

### 5. Favorites + Category (Member 5)
- **Favorites**: Tampilkan list film yang disukai (dari state `favorites`).
- **Category**: Tampilkan daftar genre (`fetchGenres`) & list film per genre (`fetchMoviesByGenre`).

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
   Copy isi dari `.env.example` (atau minta ke ketua tim) ke file baru bernama `.env`:
   ```env
   REACT_APP_TMDB_API_KEY=bc998fa94ab6a96a40fc661452272274
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Jalankan Project**
   ```bash
   npm start
   ```

## Catatan Redux (PENTING!)
Semua request API **WAJIB** lewat Redux Thunk di `src/features/movies/movieSlice.js`. Jangan fetch API langsung di component!

Gunakan `useSelector` untuk ambil data, dan `useDispatch` untuk panggil fungsi.
