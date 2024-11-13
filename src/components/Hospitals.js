import React, { useState } from 'react';
import '../styles.css';

const Hospitals = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="hospital" className="mt-5">
      <div className="container">
        <h2 className="text-center">Hospitals in Bandra</h2>
        <ul className="list-group mt-4">
          <li id="holyFamily" className="list-group-item">
            <img src="holy-family-hospital.jpg" alt="Holy Family Multispeciality Hospital" className="img-thumbnail mb-2" />
            <a href="#holyFamilyInfo" onClick={() => handleToggle('holyFamilyInfo')} aria-expanded={expanded === 'holyFamilyInfo'} aria-controls="holyFamilyInfo">
              1) Holy Family Multispeciality Hospital, Bandra
            </a>
            <div className={`collapse mt-2 ${expanded === 'holyFamilyInfo' ? 'show' : ''}`} id="holyFamilyInfo">
              <p><strong>Location:</strong> St. Andrew's Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Multispeciality, 24x7 Emergency, ICU, Diagnostics</p>
              <p><strong>Contact:</strong> +91-22-2642-8000</p>
            </div>
          </li>
          <li id="shrutiNursing" className="list-group-item">
            <img src="shruti-nursing-home.jpg" alt="Shruti Nursing Home" className="img-thumbnail mb-2" />
            <a href="#shrutiNursingInfo" onClick={() => handleToggle('shrutiNursingInfo')} aria-expanded={expanded === 'shrutiNursingInfo'} aria-controls="shrutiNursingInfo">
              2) Shruti Nursing Home, Bandra
            </a>
            <div className={`collapse mt-2 ${expanded === 'shrutiNursingInfo' ? 'show' : ''}`} id="shrutiNursingInfo">
              <p><strong>Location:</strong> 34th Road, Pali Hill, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> General Surgery, Maternity, 24x7 Emergency</p>
              <p><strong>Contact:</strong> +91-22-2643-1234</p>
            </div>
          </li>
          <li id="symbiosis" className="list-group-item">
            <img src="symbiosis-speciality-hospital.jpg" alt="Symbiosis Speciality Hospital" className="img-thumbnail mb-2" />
            <a href="#symbiosisHospitalInfo" onClick={() => handleToggle('symbiosisHospitalInfo')} aria-expanded={expanded === 'symbiosisHospitalInfo'} aria-controls="symbiosisHospitalInfo">
              3) Symbiosis Speciality Hospital, Bandra
            </a>
            <div className={`collapse mt-2 ${expanded === 'symbiosisHospitalInfo' ? 'show' : ''}`} id="symbiosisHospitalInfo">
              <p><strong>Location:</strong> Linking Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Cardiology, Neurology, Diagnostics, ICU</p>
              <p><strong>Contact:</strong> +91-22-2645-5678</p>
            </div>
          </li>
          <li id="lilavati" className="list-group-item">
            <img src="lilavati-hospital.jpeg" alt="Lilavati Hospital" className="img-thumbnail mb-2" />
            <a href="#lilavatiInfo" onClick={() => handleToggle('lilavatiInfo')} aria-expanded={expanded === 'lilavatiInfo'} aria-controls="lilavatiInfo">
              4) Lilavati Hospital, Bandra
            </a>
            <div className={`collapse mt-2 ${expanded === 'lilavatiInfo' ? 'show' : ''}`} id="lilavatiInfo">
              <p><strong>Location:</strong> A-791, Bandra Reclamation, Bandra West, Mumbai, Maharashtra 400050</p>
              <p><strong>Services:</strong> Multispeciality services, ICU, Emergency services, Diagnostics, and more.</p>
              <p><strong>Contact:</strong> +91-22-2640-6666</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hospitals;
