---
trigger: always_on
---

# WORKSPACE RULES — MOVIE DIRECTORY PROJECT

Project: Mini Project React - Movie Directory
Environment: Create React App (bukan Vite)
Tujuan: Pembelajaran React Redux, Redux Thunk, useEffect, useState

## ARSITEKTUR WAJIB

1. Gunakan:
   - Redux Toolkit
   - createAsyncThunk
   - Axios
   - React Router DOM
   - useEffect
   - useState

2. Semua request API harus melalui createAsyncThunk.
   - Tidak boleh fetch API langsung di component.

3. API key harus menggunakan environment variable:
   REACT_APP_TMDB_API_KEY
   REACT_APP_TMDB_BASE_URL

4. Gunakan satu slice utama: movieSlice.js
   Jangan membuat banyak slice karena ini mini project.

5. Global state harus mencakup:
   - movies
   - movieDetail
   - genres
   - favorites
   - loading
   - error

## STRUKTUR FOLDER WAJIB

Gunakan struktur sederhana:

src/
├── app/
│   └── store.js
├── features/
│   └── movies/
│       └── movieSlice.js
├── pages/
│   ├── Home.js
│   ├── Search.js
│   ├── MovieDetail.js
│   ├── Favorites.js
│   └── Category.js
├── services/
│   └── api.js
├── App.js
└── index.js

## HALAMAN YANG WAJIB ADA

1. Home
   - Fetch popular movies
   - Gunakan Flexbox

2. Search
   - Gunakan useState untuk input
   - Dispatch searchMovies thunk

3. Movie Detail
   - Gunakan useParams
   - Fetch detail movie
   - Ada tombol Add to Favorite

4. Favorites
   - Data diambil dari Redux

5. Category
   - Fetch genre list
   - Fetch movie berdasarkan genre

## BATASAN PROJECT

1. Jangan gunakan:
   - RTK Query
   - Middleware tambahan
   - Context API
   - Library state management lain

2. Jangan membuat fitur:
   - Authentication
   - Backend custom
   - Deployment configuration

3. Fokus pada:
   - Pemahaman Redux
   - Async flow
   - State management

## FLOW DATA YANG HARUS DIPATUHI

Component
→ dispatch
→ Async Thunk
→ API Request
→ Reducer
→ State Update
→ useSelector
→ Re-render

## TUJUAN AKHIR

Project harus:
- Sederhana
- Clean
- Mudah dijelaskan saat presentasi
- Tidak terlihat overengineered
- Memenuhi requirement Redux, Thunk, useEffect, useState, Flexbox
