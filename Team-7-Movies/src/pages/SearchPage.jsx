import React, { useState, useEffect } from "react";
import "../assets/SearchPage.css";
import axios from "axios";
import {  Link } from "react-router-dom";
const SearchPage = () => {
  const [movieName, setMovieName] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [submitedSearch, setSubmit] = useState("");

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      // try {
      //   const response = await fetch(
      //     `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${movieName}&type=movie`,
      //   );
      //   const data = await response.json();
      //   setRelatedMovies(data.Search);
      // } catch (error) {
      //   console.error("Error fetching related movies:", error);
      // }
    };

    const fetchRecommendedMovies = async (Moviegenre) => {
      // try {
      //   const response = await fetch(
      //     `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${submitedSearch}&type=movie`
      //   );
      //   const data = await response.json();
      //   setRecommendedMovies(data.Search);
      //   console.log("recommended");
      // } catch (error) {
      //   console.error("Error fetching recommended movies:", error);
      // }
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre",
        params: {
          genre: Moviegenre,
          limit: "100",
        },
        headers: {
          "X-RapidAPI-Key":
            "8dcb18c59bmsh9d15cdcd32b107bp1fca90jsn369dae7cf69b",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };
        console.log(Moviegenre)
      try {
        const response = await axios.request(options);
        const slicedResponse = response.data.slice(26, 34);
        const responseWithMovieId = slicedResponse.map((item) => {
          const parts = item.split("/");
          return parts[2];
        });

        const recommendList = await Promise.all(
          responseWithMovieId.map(async (id) => {
            const movieEndPoint = `https://www.omdbapi.com/?i=${id}&apikey=a034832a`;
            const response = await axios.get(movieEndPoint);
            return response.data;
          })
        );
        setRecommendedMovies(recommendList);
        setTopMovies(recommendList);
        console.log(recommendList);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTopMovies = async () => {
      // try {
      //   const response = await fetch(
      //     `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&s=${submitedSearch}&type=movie`
      //   );
      //   const data = await response.json();
      //   setTopMovies(data.Search);
      // } catch (error) {
      //   console.error("Error fetching top movies:", error);
      // }
    };
    const handleSearch = async () => {
      if (submitedSearch) {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=a034832a&t=${submitedSearch}`
          );
          const data = await response.json();
          setMovieDetails(data);
          fetchRecommendedMovies(data.Genre);

          console.log(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      }
    };
    if (submitedSearch) {
      handleSearch();
      // fetchRelatedMovies();
      // fetchTopMovies();
    }
  }, [submitedSearch]);

  return (
    <div className="search-page-container">
      <div className="search-page-top">
        <div className="search-page-content">
          <span className="search-bar-text">Search for Movies</span>
          <div className="search-bar-container">
            <form
              onSubmit={(e) => {
                e.preventDefault(), setSubmit(movieName);
              }}
              className="search-movie-form"
            >
              <input
                className="search-movie"
                type="text"
                placeholder="What do you want to watch?"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </form>
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
              <a className="details-link">DETAILS</a>
              <Link className="watchlist-link" to="/wishlist">
                {" "}
                ADD TO WATCHLIST
              </Link>
            </div>
            <div className="links-line"></div>

            {/* <div className="movies-section">
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
            </div> */}

            <div className="movies-section">
              <h2 className="recommended-movies">Popular Recommended Movies</h2>
              <div className="movies-grid">
                {recommendedMovies &&
                  recommendedMovies.map((movie) => (
                    <div className="movie-item" key={movie.imdbID}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movie-title-year">
                        <p>
                          <Link style={{color:"blue", textDecoration:"none"}} to={`/detail/${movie.imdbID}`}>
                            {movie.Title}
                          </Link>
                        </p>

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
                  topMovies.slice(4, 8).map((movie) => (
                    <div className="movie-item" key={movie.imdbID}>
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movie-title-year">
                        <p>
                          <Link style={{color:"black", textDecoration:"none"}}  to={`/detail/${movie.imdbID}`}>
                            {movie.Title}
                          </Link>
                        </p>
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
