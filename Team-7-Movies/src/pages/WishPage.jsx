import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WishPage = () => {
  const [search, setSearch] = useState("");
  const [searchedValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isfetching, setisFetch] = useState(true);
  const isMounted = React.useRef(true);
  const [show, setShow] = useState("search-results");
  const [watchlist, setWatchList] = useState([]);
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/find",
      params: { q: searchedValue },
      headers: {
        "X-RapidAPI-Key": "8dcb18c59bmsh9d15cdcd32b107bp1fca90jsn369dae7cf69b",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.results !== undefined) {
        setMovieData(response.data.results);
        setisFetch(false);
        setShow("search-results-show");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewItem = (item) => {
    const isObjectInList = watchlist.some((obj) => obj.id === item.id);
    if (isObjectInList) {
      handleRemoveItem(item);
    } else {
      const newWatchList = [
        ...watchlist,
        {
          id: item.id,
          title: item.title,
          image: item.image.url,
          year: item.year,
          isFavourite: true,
        },
      ];
      const updatedMovieList = movieData.map((movie) =>
        movie.id === item.id ? { ...movie, isFavourite: true } : movie
      );
      setMovieData(updatedMovieList);
      setWatchList(newWatchList);
    }
  };

  const handleRemoveItem = (item) => {
    const newWatchList = watchlist.filter(
      (movie) => movie.title !== item.title
    );
    const updatedMovieList = movieData.map((movie) =>
      movie.id === item.id ? { ...movie, isFavourite: false } : movie
    );
    setMovieData(updatedMovieList);
    setWatchList(newWatchList);
  };

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      fetchMovies();
    }
  }, [searchedValue]);

  return (
    <div className="wish-list-container">
      <div className="wish-list-header">
        <div className="wish-header-content">
          <div className="header-title">
            <span>
              Enjoy our favorite <span style={{ color: "red" }}>movies</span>
            </span>
            <SearchForm
              search={search}
              setSearch={setSearch}
              setSearchValue={setSearchValue}
              setShow={setShow}
            />
            <SearchCard
              show={show}
              handleNewItem={handleNewItem}
              movieData={movieData}
              isfetching={isfetching}
              setShow={setShow}
            />
          </div>
        </div>
      </div>
      <Watchlist watchlist={watchlist} handleRemoveItem={handleRemoveItem} />

    </div>
  );
};

const SearchForm = ({ search, setSearch, setSearchValue, setShow }) => {
  return (
    <div className="search-flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchValue(search);
          setShow("search-results-show");
        }}
      >
        <input
          className="search-movie"
          placeholder="add some to your watch list"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
};

const SearchCard = ({
  show,
  isfetching,
  movieData,
  handleNewItem,
  setShow,
}) => {
  return (
    <div className={show}>
      <div className="close-btn">
        <i
          onClick={() => setShow("search-results")}
          className=" fa fa-times"
          aria-hidden="true"
        ></i>
      </div>
      {isfetching ? (
        <img style={{ textAlign: "center" }} src="images/loading.gif" />
      ) : (
        movieData.map((movie) => (
          <div key={movie.id} className="search-card">
            <img
              className="search-image"
              src={movie.image ? movie.image.url : "/images/default.png"}
              alt="Movie Poster"
            />
            <span className="search-title">
              {movie.title} <br /> {movie.year}
            </span>
            <span
              style={{ marginLeft: "auto" }}
              onClick={() => handleNewItem(movie)}
            >
              <FontAwesomeIcon
                className="favourite-btn"
                icon={faHeart}
                style={{ color: movie.isFavourite ? "red" : "" }}
              />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

const Watchlist = ({ watchlist, handleRemoveItem }) => {
  return (
    <div className="movies-container">
      <div className="movie-header">
        <span>Watchlist</span>
      </div>
      <div className="movie-list">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <>
                <img
                  className="wishlist-image"
                  src={movie.image}
                  alt={`Movie Poster for ${movie.title}`}
                />
                <div className="movie-title">
                  <p style={{display:"flex"}}>
                    <i
                      onClick={() => handleRemoveItem(movie)}
                      className="fas fa-trash"
                    ></i>
                  </p>
                </div>
              </>
            </div>
          ))
        ) : (
          <div className="no-watchlist">
            <p className="no-list-notice">Add Some Favourite from above</p>
            <i style={{overflow:"hidden"}} className="fa-solid fa-bucket"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishPage;
