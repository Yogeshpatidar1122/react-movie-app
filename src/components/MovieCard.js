// MovieCard.js
import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=" bg-gray-600 rounded-lg shadow-md p-4 flex flex-col">
      <img src={movie.poster} alt={movie.title} className="w-full h-80 object-contain lg:object-fit group-hover:scale-105 duration-300" />
      <div>
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className={`text-black mb-2 ${showMore ? '' : 'truncate'}`}>Release Year: {movie.releaseYear}</p>
        <p className={`text-black mb-2 ${showMore ? '' : 'truncate'}`}>Language: {movie.language.join(', ')}</p>
        <p className={`text-black mb-2 ${showMore ? '' : 'truncate'}`}>Country: {movie.country.join(', ')}</p>
        <p className={`text-black mb-2 ${showMore ? '' : 'truncate'}`}>Genre: {movie.genre.join(', ')}</p>
        {!showMore && (
          <button className="text-blue-500" onClick={toggleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
