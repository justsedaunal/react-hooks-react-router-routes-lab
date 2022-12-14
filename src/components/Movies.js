import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  return movies.map((item) => (
    <div key={item.title}>
      <h1>Movies Page</h1>
      <h2> Name : {item.title} </h2>
      <span>Time : {item.time} </span>

      <>
        <ul>
          Genres:
          {item.genres.map((k) => (
            <li key={k}>
              {" "}
              {k} {}
            </li>
          ))}
        </ul>
      </>
    </div>
  ));
}

export default Movies;
