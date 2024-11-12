import React, { useState } from 'react';
import '../styles.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query, filter);
  };

  return (
    <form className="form-inline ml-lg-3 mt-3 mt-lg-0" id="search" onSubmit={handleSubmit}>
      <input
        className="form-control mr-sm-2"
        type="search"
        id="searchQuery"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="form-control mr-sm-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="hospitals">Hospitals</option>
        <option value="medicals">Medicals</option>
        <option value="diagnostics">Diagnostics</option>
      </select>
      <button className="btn btn-success my-2 my-sm-0" type="submit">Go</button>
    </form>
  );
};

export default Search;
