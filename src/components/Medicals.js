import React from 'react';
import '../styles.css';  

const Medicals = () => {
  return (
    <section id="medical" className="mt-5">
      <div className="container">
        <h2 className="text-center">Medicals in Bandra</h2>
        <ul className="list-group mt-4">
          <li id="bandraMedicalStore" className="list-group-item">
            <img src="bandramed.jpg" alt="Bandra Medical Store" className="img-thumbnail mb-2" />
            <a href="#bandraMedicalStoreInfo" data-toggle="collapse" aria-expanded="false" aria-controls="bandraMedicalStoreInfo">
              1) Bandra Medical Store, Bandra
            </a>
            <div className="collapse mt-2" id="bandraMedicalStoreInfo">
              <p><strong>Location:</strong> Hill Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pharmaceuticals, Health and Wellness Products</p>
              <p><strong>Contact:</strong> +91-22-2640-5678</p>
            </div>
          </li>
          <li id="shreeGaneshMedical" className="list-group-item">
            <img src="shree.jpeg" alt="Shree Ganesh Medical" className="img-thumbnail mb-2" />
            <a href="#shreeGaneshMedicalInfo" data-toggle="collapse" aria-expanded="false" aria-controls="shreeGaneshMedicalInfo">
              2) Shree Ganesh Medical, Bandra
            </a>
            <div className="collapse mt-2" id="shreeGaneshMedicalInfo">
              <p><strong>Location:</strong> Linking Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pharmaceuticals, Health and Wellness Products</p>
              <p><strong>Contact:</strong> +91-22-2641-1234</p>
            </div>
          </li>
          <li id="careChemist" className="list-group-item">
            <img src="caremed.png" alt="Care Chemist" className="img-thumbnail mb-2" />
            <a href="#careChemistInfo" data-toggle="collapse" aria-expanded="false" aria-controls="careChemistInfo">
              3) Care Chemist, Bandra
            </a>
            <div className="collapse mt-2" id="careChemistInfo">
              <p><strong>Location:</strong> Turner Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pharmaceuticals, Health and Wellness Products</p>
              <p><strong>Contact:</strong> +91-22-2642-5678</p>
            </div>
          </li>
          <li id="wellnessForever" className="list-group-item">
            <img src="wellnessmed.png" alt="Wellness Forever" className="img-thumbnail mb-2" />
            <a href="#wellnessForeverInfo" data-toggle="collapse" aria-expanded="false" aria-controls="wellnessForeverInfo">
              4) Wellness Forever, Bandra
            </a>
            <div className="collapse mt-2" id="wellnessForeverInfo">
              <p><strong>Location:</strong> Carter Road, Bandra West, Mumbai</p>
              <p><strong>Services:</strong> Pharmaceuticals, Health and Wellness Products</p>
              <p><strong>Contact:</strong> +91-22-2643-5678</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Medicals;
