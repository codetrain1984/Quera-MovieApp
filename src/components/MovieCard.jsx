import React from "react";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="card-img" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </h2>
        <p className="card-description">{movie.short_description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
