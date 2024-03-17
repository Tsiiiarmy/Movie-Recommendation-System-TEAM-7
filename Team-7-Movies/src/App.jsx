import { useState } from "react";
import "./assets/wishlist.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import WishPage from "./pages/WishPage";
import MovieDetail from "./pages/MovieDetail";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import JoinNow from "./pages/JoinNow";
// import NavBar from "../src/pages/NavBar"
import "../src/assets/NavBar.css";
import movie from "/images/movie.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-title">
          <img src={movie} alt="movie" className="logo" />
          <h1>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/searchpage"
            >
              TEAM7MOVIES
            </Link>
          </h1>
        </div>
        <div className="menu-btn">
          <ul className="navbar-menu">
            <li>
              <Link to="/searchpage">Home</Link>
            </li>
            <li>
              <Link to="/wishlist">Watch List</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/join">Join us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1F1E2B",
    color: "#fff",
    padding: "20px",
    fontSize: "20px",
    width: "100vw",
    height: "150px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    // fontFamily:'Saira Condensed',
  };

  const iconStyle = {
    marginLeft: "20px",
    marginRight: "10px",
    color: "#fff",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "10px",
    paddingLeft: "px",
  };

  return (
    <div style={footerStyle}>
      <div>
        <h2>
          READY FOR <br /> <span style={{ color: "red" }}>POPULAR</span> MOVIES?{" "}
        </h2>
        <div>
          <a href="mailto:team7@gmail.com" style={linkStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />{" "}
            team7@gmail.com
          </a>
        </div>
      </div>
      <div>
        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href="https://github.com/Tsiiiarmy/Movie-Recommendation-System-TEAM-7"
          style={iconStyle}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>{" "}
      <br />
      <div style={{ marginRight: "60px" }}>
        <a href="#" style={linkStyle}>
          Privacy Policy
        </a>
        <span style={{ marginLeft: "px", marginRight: "px" }}>|</span>
        <a href="#" style={linkStyle}>
          Terms and Conditions
        </a>
      </div>
    </div>
  );
};
function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <NavBar></NavBar>
          <div className="main-content">
            <Routes>
              <Route path="/detail/:movieId/" element={<MovieDetail />}></Route>
              <Route path="/wishlist" element={<WishPage />}></Route>
              <Route path="/searchpage" element={<SearchPage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/join" element={<JoinNow />}></Route>
              <Route path="*" element={<SearchPage />}></Route>
            </Routes>
          </div>

          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
