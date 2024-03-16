import React from 'react';
import './TravelStyles.css';
import TravelData from './TravelData';
import Mountain1 from '../assets/bungee.jpg';
import Mountain2 from '../assets/3_latest.jpg';
import Mountain3 from '../assets/4_latest.jpg';

const Travel = () => {
  const countries = [
    { heading: 'Uganda', image: Mountain1 },
    { heading: 'Kenya', image: Mountain2 },
    { heading: 'Tanzania', image: Mountain3 },
    { heading: 'Zanzibar', image: Mountain3 },
    { heading: 'Dubai', image: Mountain3 },
    { heading: 'South Africa', image: Mountain3 },
  ];

  return (
    <div className="destination">
      <h1>Destinations</h1>
      <div className="countries-container">
        {countries.map((country, index) => (
          <TravelData
            key={index}
            className={`country-item ${index % 2 === 1 ? 'reverse' : ''}`}
            heading={country.heading}
            img1={country.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Travel;
