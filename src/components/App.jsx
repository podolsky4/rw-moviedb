import React, { useState } from 'react'
import Filters from "./Filters/Filters";
import MovieList from "./Movies/MovieList";
import '../styles/App.css';

const App = () => {
  const [filters, setFilters] = useState({
    sort_by: "popularity.desc"
  });
  return (
    <div className="container">
      <h1>Популярные фильмы</h1>
      <div className="row mt-4">
        <div className="col-4">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h3>Фильтры</h3>
              <Filters filters={filters} selectOptions={setFilters}/>
            </div>
          </div>
        </div>
        <div className="col-8">
          <MovieList filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default App;