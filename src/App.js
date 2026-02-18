import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import Category from './pages/Category';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:genreId" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
