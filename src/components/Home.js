import React from 'react';
import '../styles.css'; 

const Home = ({ searchResults }) => {
  return (
    <div className="home">
      
      {searchResults && (
        <div className="search-results mt-5">
          {searchResults === 'hospital' && (
            <div>
              <h2>Hospital Search Results</h2>
              {/* Display relevant hospital information */}
            </div>
          )}
          {searchResults === 'medical' && (
            <div>
              <h2>Medical Search Results</h2>
              {/* Display relevant medical information */}
            </div>
          )}
          {searchResults === 'diagnostic' && (
            <div>
              <h2>Diagnostic Lab Search Results</h2>
              {/* Display relevant diagnostic information */}
            </div>
          )}
        </div>
      )}
      <div className="container text-center mt-5">
        <div className="revealing-text">
          <p className="lead">Find Best Hospitals, Medicals & Diagnostics Labs in Bandra...</p>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="tile">
              <h2>Hospitals</h2>
              <p>Explore top hospitals in Bandra with state-of-the-art facilities.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tile">
              <h2>Medicals</h2>
              <p>Find the best medical stores near you for all your pharmaceutical needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tile">
              <h2>Diagnostic Labs</h2>
              <p>Get accurate diagnostics at the leading labs in Bandra.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
