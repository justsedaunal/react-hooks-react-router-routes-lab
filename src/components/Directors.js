import React from "react";
import { directors } from "../data";

function Directors() {
  return directors.map((item) => (
    <div>
      <h1>Directors Page</h1>
      <h2> Name : {item.name} </h2>
      <h3>Movies</h3>
      <ul>
        {item.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
}

export default Directors;
