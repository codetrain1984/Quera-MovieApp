import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  console.log(movie);
  const { movie_id } = useParams();
  const getMovie = () => {
    fetch(`http://localhost:9000/movies/${movie_id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    getMovie();
  });
  console.log("object");
  return (
    <div className="movie-detail container">
      <div className="detail-body">
        <div>
          <h2 className="card-title">
            {movie.title}
            <span className="release-year"> {movie.release_year}</span>
          </h2>
          <div className="detail-description">
            <p className="card-description">{movie.description}</p>
          </div>
        </div>
        <div className="images">
          <img className="detail-img" src={movie.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
