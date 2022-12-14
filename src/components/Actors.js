import React from "react";
import { actors } from "../data";

function Actors() {
  return actors.map((item) => (
    <div>
      <h1>Actors Page</h1> <h2>Name : {item.name}</h2>{" "}
      <ul>
        {item.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));
}

export default Actors;
