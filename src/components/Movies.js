import React from "react";
import { movies } from "../data";
import { nanoid } from "nanoid";

function Movies() {
  const movieCards = movies.map((movie) => {
    const movieGenres = movie.genres.map((genre) => (
      <li key={nanoid()}>{genre}</li>
    ));
    return (
      <div key={nanoid()}>
        <h2>{movie.title}</h2>
        <h4>Runtime: {movie.time} minutes</h4>
        <ul>Genres: {movieGenres}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieCards}
    </div>
  );
}

export default Movies;
