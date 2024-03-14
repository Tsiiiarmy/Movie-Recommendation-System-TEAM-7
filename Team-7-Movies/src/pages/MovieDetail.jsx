import "../assets/wishlist.css";
import "../assets/detail.css";

import axios from "axios";
import React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MovieDetail = () => {
  const [fetchData, setFetch] = useState({});
  const [relatedList, setRelated] = useState([]);
  const fetchMovie = async () => {
    const EndPoint = `http://www.omdbapi.com/?i=tt3896198&apikey=959cd228`;
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              officia ad mollitia molestiae, autem nihil, alias dolore aliquid
              esse est aspernatur ipsa, a pariatur! Deserunt harum nisi aut sit
              sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quam, dignissimos corporis? Repellendus magni quam dolores dolore
              sunt id, quidem animi laboriosam nam? Quasi, asperiores deserunt
              in quas magni nihil quae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias vitae fugit blanditiis reiciendis
              laudantium, tempore id nihil quod distinctio deserunt quo odit
              error ex sunt corrupti. Iure, doloremque? Harum, pariatur! Lorem
              ip
              <br />
              sum, dolor sit amet consectetur adipisicing elit. Ipsa placeat
              voluptatem dolor accusamus asperiores est saepe voluptatum
              laudantium libero pariatur et mollitia numquam doloremque eligendi
              distinctio, eveniet laboriosam sequi. Numquam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cupiditate possimus rem
              cumque harum aspernatur, iste magnam enim deleniti delectus
              reprehenderit dicta voluptate eius maiores maxime qui nemo
              officiis, sequi aperiam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores expedita minus veniam, provident quasi
              doloremque fugiat voluptatem quod totam. Ab deserunt impedit
              magnam sed obcaecati dicta provident laudantium totam natus! lorem
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto, sit ad omnis a eveniet provident impedit cupiditate
              tempore atque voluptas, quis placeat mollitia perferendis beatae
              excepturi officia asperiores quaerat porro.
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
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
