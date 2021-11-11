import React from 'react';

 const Filters = ({ filters, selectOptions }) => {
  return (
    <form className="mb-3">
      <div className="form-group">
        <label htmlFor="sort-by">Сортировать результаты по: </label>
        <select className="form-control" id="sort-by">
          <option value="popularity.desc" defaultChecked>Популярные по убыванию)</option>
          <option value="popularity.asc">Популярные по возростанию)</option>
          <option value="vote_average.desc">Рейтинг по убыванию)</option>
          <option value="vote_average.asc">Рейтинг по возростанию)</option>
        </select>
      </div>
    </form>
  );
}

export default Filters;