import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Hospitals from './components/Hospitals';
import Medicals from './components/Medicals';
import Diagnostics from './components/Diagnostics';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
   
    query = query.toLowerCase().trim();
    
   
    const hospitals = {
      'holy family': 'holyFamily',
      'shruti nursing': 'shrutiNursing',
      'symbiosis speciality': 'symbiosis',
      'lilavati hospital': 'lilavati'
    };

    const medicals = {
      'bandra medical store': 'bandraMedicalStore',
      'shree ganesh medical': 'shreeGaneshMedical', 
      'care chemist': 'careChemist', 
      'wellness forever': 'wellnessForever'
    };

    const diagnostics = {
      'thyrocare': 'thyrocare',
      'suburban diagnostics': 'suburbanDiagnostics',
      'dr lal pathlab': 'drLalPathlabs'
    };

    const allSections = { ...hospitals, ...medicals, ...diagnostics };

  
    function hideAllSections() {
      for (const key in allSections) {
        const element = document.getElementById(allSections[key]);
        if (element) {
          element.style.display = 'none';
        }
      }
    }

   
    hideAllSections();

   
    const hospitalId = hospitals[query];
    const medicalId = medicals[query];
    const diagnosticsId = diagnostics[query];

    if (hospitalId) {
      document.getElementById(hospitalId).style.display = 'block';
      document.getElementById(hospitalId).scrollIntoView({ behavior: 'smooth' });
    } else if (medicalId) {
      document.getElementById(medicalId).style.display = 'block';
      document.getElementById(medicalId).scrollIntoView({ behavior: 'smooth' });
    } else if (diagnosticsId) {
      document.getElementById(diagnosticsId).style.display = 'block';
      document.getElementById(diagnosticsId).scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Location not found. Please check the name and try again.');
      hideAllSections();
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/medicals" element={<Medicals />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
