import React, { useState, useEffect } from "react";
import "../assets/SearchPage.css";

const SearchPage = () => {
  const [movieName, setMovieName] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${movieName}&type=movie`,
        );
        const data = await response.json();
        setRelatedMovies(data.Search);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    };

    const fetchRecommendedMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${movieName}&type=movie`,
        );
        const data = await response.json();
        setRecommendedMovies(data.Search);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    const fetchTopMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${movieName}&type=movie`,
        );
        const data = await response.json();
        setTopMovies(data.Search);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };

    if (movieName) {
      fetchRelatedMovies();
      fetchRecommendedMovies();
      fetchTopMovies();
    }
  }, [movieName]);

  const handleSearch = async () => {
    if (movieName) {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&t=${movieName}`,
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
  };

  return (
    <div className="search-page-container">
      <div className="search-page-top">
        <div className="search-page-content">
          <div className="search-bar-container">
            <input
              className="search-movie"
              type="text"
              placeholder="What do you want to watch?"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          {movieDetails && (
            <div className="result-container">
              <div className="poster-container">
                {movieDetails.Poster && (
                  <img
                    className="movie-poster"
                    src={movieDetails.Poster}
                    alt={`${movieDetails.Title} Poster`}
                  />
                )}
              </div>
              <div className="details-container">
                <h1 className="movie-title">{movieDetails.Title}</h1>
                <p className="tagline">{movieDetails.Tagline}</p>
                <div className="movie-info-row">
                  <p className="movie-year">{movieDetails.Year}</p>
                  <p className="movie-runtime">{movieDetails.Runtime}</p>
                  <p className="movie-rating">{movieDetails.Rating}</p>
                </div>
                <p className="movie-plot">{movieDetails.Plot}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {movieDetails && (
        <div className="search-page-bottom">
          <div className="page-bottom-content">
            <div className="links-container">
              <a className="details-link" href="">
                DETAILS
              </a>
              <a className="watchlist-link" href="">
                ADD TO WATCHLIST
              </a>
            </div>
            <div className="links-line"></div>

            <div className="movies-section">
              <h2 className="related-movies">Related Movies</h2>
              <div className="movies-grid">
                {relatedMovies &&
                  relatedMovies.slice(0, 4).map((movie) => (
                    <div className="movie-item" key={movie.imdbID}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movie-title-year">
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="movies-section">
              <h2 className="recommended-movies">Recommended Movies</h2>
              <div className="movies-grid">
                {recommendedMovies &&
                  recommendedMovies.slice(0, 4).map((movie) => (
                    <div className="movie-item" key={movie.imdbID}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movie-title-year">
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="movies-section">
              <h2 className="top-movies">Top Movies</h2>
              <div className="movies-grid">
                {topMovies &&
                  topMovies.slice(0, 4).map((movie) => (
                    <div className="movie-item" key={movie.imdbID}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movie-title-year">
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
