import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Movies() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    fetch("http://localhost:9000/movies")
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }, []);
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
}

export default Movies;
