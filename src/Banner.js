import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(requests.fetchActionMovies);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    }
    getData();
  }, []);

  function truncate(string, number) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  const expandInfo = () => {
    document.querySelector('banner__button')
  }
  // console.log(movie);
  // const img = `This is the url, https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  // console.log(img);

  //     const poster = movie.map(moviePoster => {
  //         const poster =` https://image.tmdb.org/t/p/original${moviePoster.poster_path}`
  //     return <img src= {poster}/>
  // })

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        objectFit: 'contain',
        backgroundPosition:'center',
        backgroundImage: `url( 'https://image.tmdb.org/t/p/original/${movie?.poster_path} ' )`,
      }}
    >
      <div className="banner__container">
        <div className="banner__title">
          {movie?.original_title || movie.original_name || movie.name}
        </div>
        <div className="banner__movieInfo">{truncate(movie.overview, 90)}</div>
        <div className="buttons">
        <div className="banner__button">play</div>
        <div className="banner__button" onClick={expandInfo}>more info</div>
        </div>
      </div>
      <div className="banner__bottom"></div>
    </header>
  );
}

export default Banner;
