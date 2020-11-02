import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";


const img =  "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl }) {
  const [movieRow, setMovieRow] = useState([]);

  useEffect(() => {
    async function movieData() {
      const res = await axios.get(fetchUrl);
      setMovieRow(res.data.results);
    }
    movieData();
}, [fetchUrl]);
// console.log(movieRow);
  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
      {movieRow.map((data) => (
         <img 
         key={data.id}
         className='row__poster'
         src={`${img}${data.poster_path}`}
         />
      ))}
        </div>
    </div>
  );
}

export default Row;
