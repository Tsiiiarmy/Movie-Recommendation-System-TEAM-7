import "../assets/wishlist.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
const WishPage = () => {
  const [search, setSearch] = useState("");
  const [searchedValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isfetching, setisFetch] = useState(true);
  const isMounted = React.useRef(true);
  const [show, setShow] = useState("search-results");
  const [watchlist, setWatchList] = useState([]);
  const fetchMovies = async () => {

    const moviesArray = [
      {
        id: 1,
        title: "Fast X",
        image: "images/fastx.jpg",
        year: 2023,
        isFavourite: false,
      },
      {
        id: 2,
        title: "The Godfather",
        image: "images/gof.jpg",
        year: 1972,
        isFavourite: false,
      },
      {
        id: 3,
        title: "Spider man HomeComing",
        image: "images/sp.jpg",
        year: 2018,
        isFavourite: false,
      },
    ];
    try {
      // const response = await axios.request(options);
      // if (response.data.results !== undefined) {
      //   console.log(response.data.results);
      //   setMovieData(response.data.results);
      //   setisFetch(false);
      //   setShow("search-results-show");
      // }
      const filterdList = searchedValue
        ? moviesArray.filter((item) =>
            item.title.toLowerCase().includes(searchedValue.toLowerCase())
          )
        : false;
      if (filterdList) {
        console.log(searchedValue);
        setMovieData(filterdList);
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
          image: item.image,
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
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      console.log("sadfghjk");
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
const SearchForm = ({search, setSearch, setSearchValue, setShow }) => {
  return (
    <div className="search-flex">
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            setSearchValue(search),
            setShow("search-results-show");
        }}
      >
        <input
          className="search-movie"
          placeholder="what do you want to watch"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn"> Search</button>
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
        <img src="images/loading.gif" />
      ) : (
        movieData.map((movie) => (
          <div key={movie.id} className="search-card">
            <img
              className="search-image"
              // src={movie.image ? movie.image.url : defaultpic}
              src={movie.image}
            />
            <span className="search-title">
              {movie.title} <br /> {movie.year}
            </span>
            <span
              style={{ marginLeft: "auto" }}
              onClick={() => handleNewItem(movie)}
            >
              <i
                className="favourite-btn fas fa-heart"
                style={{ color: movie.isFavourite ? "red" : "" }}
                aria-hidden="true"
              ></i>
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
            <div className="movie-card">
              <>
                <img
                  className="wishlist-image"
                  src={movie.image}
                  alt={`Movie Poster for ${movie.title}`}
                />
                <div className="movie-title">
                  <p>
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
            <p>Add Some Favourite from above</p>
            <i className="fa-solid fa-bucket"></i>
          </div>
        )}
      </div>
    </div>
  );
};
export default WishPage;
