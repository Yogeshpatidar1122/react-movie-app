import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {movies.map(movie => (
        <MovieCard key={movie.Id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
