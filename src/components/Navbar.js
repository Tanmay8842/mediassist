import React, { useState } from 'react';
import '../styles.css';  

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="logo_finale.png" alt="Logo" className="navbar-logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="/">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/hospitals">HOSPITALS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/medicals">MEDICALS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/diagnostics">DIAGNOSTIC LABS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#footer">CONTACT</a>
  </li>
</ul>
</div>
        <form className="form-inline d-flex ml-auto" id="search" onSubmit={handleSubmit}>
          <input
            className="form-control border-success"
            type="search"
            id="searchQuery"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit">Go</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;




<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="/">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/hospitals">HOSPITALS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/medicals">MEDICALS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/diagnostics">DIAGNOSTIC LABS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#footer">CONTACT</a>
  </li>
</ul>
</div>