import React from 'react';

 const MovieItem = ({ item }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img className="card-img-top"
       src={`https://image.tmdb.org/t/p/w500${item.poster_path ||
       item.backdrop_path}`} alt="Card caption" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Рейтинг: {item.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieItem;