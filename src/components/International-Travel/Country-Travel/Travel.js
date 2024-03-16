// Travel.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TravelStyles.css';
import TravelData from './TravelData';
import Mountain1 from '../../../assets/bungee.jpg';
import Mountain2 from '../../../assets/3_latest.jpg';
import Mountain3 from '../../../assets/4_latest.jpg';

const Travel = () => {
  const countries = [
    { name: 'Uganda', image: Mountain1, link: '/uganda' },
    { name: 'Kenya', image: Mountain2, link: '/kenya' },
    { name: 'Tanzania', image: Mountain3, link: '/tanzania' },
    { name: 'Zanzibar', image: Mountain3, link: '/zanzibar' },
    { name: 'Dubai', image: Mountain3, link: '/dubai' },
    { name: 'South Africa', image: Mountain3, link: '/south-africa' },
  ];

  return (
    <div className="destination">
      <h1>Destinations</h1>
      <div className="countries-container">
        {countries.map((country, index) => (
          <Link to={country.link} key={index} className={`country-item ${index % 2 === 1 ? 'reverse' : ''}`}>
            <TravelData
              heading={country.name}
              img1={country.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Travel;
