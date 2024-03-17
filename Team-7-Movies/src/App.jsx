import { useState } from "react";
import "./assets/wishlist.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WishPage from "./pages/WishPage";
import MovieDetail from "./pages/MovieDetail";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import JoinNow from "./pages/JoinNow";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/searchpage">Home</Link>
          </li>
          <li>
            <Link to="/wishlist">Wish List</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/join">Join us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Movie Recommendation System (Team 7)</p>
    </div>
  );
};
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/detail/:movieId/" element={<MovieDetail />}></Route>
          <Route path="/wishlist" element={<WishPage />}></Route>
          <Route path="/searchpage" element={<SearchPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/join" element={<JoinNow />}></Route>
          <Route path="*" element={<SearchPage/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
