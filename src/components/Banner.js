import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './MovieList';
import Filters from './Filters';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    language: '',
    country: '',
    genre: ''
  });

  useEffect(() => {
    // Fetch movie data from JSON file from public/data/movies.json
    fetch('/data/movies.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched movies:', data); // Log fetched movies
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  const applyFilters = useCallback(() => {
    let filtered = movies;

    if (filters.language) {
      filtered = filtered.filter(movie => movie.language.includes(filters.language));
    }
    if (filters.country) {
      filtered = filtered.filter(movie => movie.country.includes(filters.country));
    }
    if (filters.genre) {
      filtered = filtered.filter(movie => movie.genre.includes(filters.genre));
    }

    setFilteredMovies(filtered);
  }, [filters, movies]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">Movie Hub</h1>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Banner;
