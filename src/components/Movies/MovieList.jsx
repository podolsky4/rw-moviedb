import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import { API_URL, API_KEY_3 } from '../../api/api';

const MovieList = ({filters}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${filters.sort_by}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  }, [filters.sort_by]);

  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-4 mt-4">
          <MovieItem item={movie} />
        </div>
        ))
      }
    </div>
  );
}

export default MovieList;