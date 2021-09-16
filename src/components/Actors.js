import React from "react";
import { actors } from "../data";
import { nanoid } from "nanoid";

function Actors() {
  const actorCards = actors.map((actor) => {
    const movieCards = actor.movies.map((movie) => (
      <li key={nanoid()}>{movie}</li>
    ));
    return (
      <div key={nanoid()}>
        <h2>{actor.name}</h2>
        {movieCards}
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorCards}
    </div>
  );
}

export default Actors;
