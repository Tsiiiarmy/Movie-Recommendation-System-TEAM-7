import "../assets/wishlist.css";
import "../assets/detail.css";

import axios from "axios";
import React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [fetchData, setFetch] = useState({});
  const [relatedList, setRelated] = useState([]);
  const fetchMovie = async () => {
    const EndPoint = `http://www.omdbapi.com/?i=${movieId}&apikey=959cd228`;
    try {
      const results = await axios.get(EndPoint);
      setFetch(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  const RelatedMovies = async () => {
    const EndPoint = `http://www.omdbapi.com/?s=guardian&apikey=959cd228`;
    try {
      const results = await axios.get(EndPoint);
      setRelated(results.data.Search);
      console.log(results.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovie();
    RelatedMovies();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="movie-container">
          <div className="movie-cd-2">
            <img className="movie-cd-img" src={fetchData.Poster} />
            <div className="movie-cd-3">
              <div className="movie-card-detail">
                <div className="movie-name-desc">
                  <span className="movie-name"> {fetchData.Title}</span>
                  <div className="movie-desc">{fetchData.Plot}</div>
                </div>

                <div className="year-rate">
                  <span className="year">{fetchData.Year}</span>
                  <span className="rating">Rating: {fetchData.imdbRating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-container">
        <div className="desc-card">
          <div className="desc-title">Details</div>
          <div className="desc">
            <span>
              {fetchData.Plot}
              <br />
            </span>
          </div>
          <div className="detail-grid">
            <div className="grid-header">Genre</div>
            <div className="grid-header">Release Date</div>
            <div className="grid-header">Run Time</div>
            <div className="grid-header">Language</div>
            <div className="grid-item">{fetchData.Genre}</div>
            <div className="grid-item">{fetchData.Year}</div>
            <div className="grid-item">{fetchData.Runtime}</div>
            <div className="grid-item">{fetchData.Language}</div>
            <div className="grid-header">Director</div>
            <div className="grid-header">Actors</div>
            <div className="grid-header">Writer</div>
            <div className="grid-header">Box Office</div>
            <div className="grid-item">{fetchData.Director}</div>
            <div className="grid-item">{fetchData.Actors}</div>
            <div className="grid-item">{fetchData.Writer}</div>
            <div className="grid-item">{fetchData.BoxOffice}</div>
          </div>
        </div>
      </div>
      <div className="related-container">
        <div className="related-inner">
          <div className="desc-title">Related Movies</div>
          <div className="related-movie">
            {relatedList.map((movie) => (
              <div className="related-card">
                <img className="related-img" src={movie.Poster} />
              </div>
            ))}
          </div>
          <div>
            <button style={{padding:"20px", cursor:"", borderRadius:"10px", color:"white" , backgroundColor:"black"}} onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
