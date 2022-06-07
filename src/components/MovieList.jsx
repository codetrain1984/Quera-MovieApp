import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="card-list container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
