import React from 'react';
import '../styles.css'; 

const Diagnostics = () => {
  return (
    <section id="diagnostic" className="mt-5">
      <div className="container">
        <h2 className="text-center">Diagnostic Labs in Bandra</h2>
        <ul className="list-group mt-4">
          <li id="thyrocare" className="list-group-item">
            <img src="thyrocare.jpeg" alt="Thyrocare Diagnostic Centre" className="img-thumbnail mb-2" />
            <a href="#thyrocareInfo" data-toggle="collapse" aria-expanded="false" aria-controls="thyrocareInfo">
              1) Thyrocare Diagnostic Centre, Bandra
            </a>
            <div className="collapse mt-2" id="thyrocareInfo">
              <p><strong>Location:</strong> Hill Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pathology, Radiology, Health Checkups</p>
              <p><strong>Contact:</strong> +91-22-2640-5678</p>
            </div>
          </li>
          <li id="suburbanDiagnostics" className="list-group-item">
            <img src="suburbandiago.png" alt="Suburban Diagnostics" className="img-thumbnail mb-2" />
            <a href="#suburbanDiagnosticsInfo" data-toggle="collapse" aria-expanded="false" aria-controls="suburbanDiagnosticsInfo">
              2) Suburban Diagnostics, Bandra
            </a>
            <div className="collapse mt-2" id="suburbanDiagnosticsInfo">
              <p><strong>Location:</strong> Linking Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pathology, Radiology, Health Checkups</p>
              <p><strong>Contact:</strong> +91-22-2641-1234</p>
            </div>
          </li>
          <li id="drLalPathLabs" className="list-group-item">
            <img src="lalpath.png" alt="Dr. Lal PathLabs" className="img-thumbnail mb-2" />
            <a href="#drLalPathLabsInfo" data-toggle="collapse" aria-expanded="false" aria-controls="drLalPathLabsInfo">
              3) Dr. Lal PathLabs, Bandra
            </a>
            <div className="collapse mt-2" id="drLalPathLabsInfo">
              <p><strong>Location:</strong> Turner Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pathology, Radiology, Health Checkups</p>
              <p><strong>Contact:</strong> +91-22-2642-5678</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Diagnostics;
