// Travel.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TravelStyles.css';
import TravelData from './TravelData';
import Ug from '../../../assets/KDP_9483.jpg';
import Ke from '../../../assets/KDP_9504.jpg';
import Tz from '../../../assets/KDP_0099.jpg';
import Zn from '../../../assets/9_latest.jpg';
import Sa from '../../../assets/sa-1.jpg';
import Di from '../../../assets/8_latest.jpg';


const Travel = () => {
  const countries = [
    { name: 'Uganda', image: Ug, link: '/uganda' },
    { name: 'Kenya', image: Ke, link: '/kenya' },
    { name: 'Tanzania', image: Tz, link: '/tanzania' },
    { name: 'Zanzibar', image: Zn, link: '/zanzibar' },
    { name: 'Dubai', image: Di, link: '/dubai' },
    { name: 'South Africa', image: Sa, link: '/south-africa' },
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
