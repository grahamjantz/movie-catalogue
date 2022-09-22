import React from 'react'

const Movie = ({ movie }) => {
    return (
        <div>
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.path} />
          <p>{movie.overview}</p>
        </div>
      );
}

export default Movie