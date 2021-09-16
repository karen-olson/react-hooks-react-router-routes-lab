import React from "react";
import { directors } from "../data";
import { nanoid } from "nanoid";

function Directors() {
  const directorCards = directors.map((director) => {
    const movieList = director.movies.map((movie) => (
      <li key={nanoid()}>{movie}</li>
    ));
    return (
      <div key={nanoid()}>
        <h2>{director.name}</h2>
        <ul>Movies: {movieList}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorCards}
    </div>
  );
}

export default Directors;
