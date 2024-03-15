import { useState } from "react";
import "./assets/wishlist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import "./App.css";
import WishPage from "./pages/WishPage";
import MovieDetail from "./pages/MovieDetail";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/detail/:movieId/" element={<MovieDetail/>}></Route>
        <Route path="/wishlist" element={<WishPage/>}></Route>
        <Route path="/searchpage" element={<SearchPage/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
