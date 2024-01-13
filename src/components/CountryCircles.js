import React, { useState } from 'react';
import './CountryCirclesStyle.css';

const CountryCircle = ({ title, imageUrl, hoverImageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="country-circle-wrapper">
      <div
        className={`country-circle ${isHovered ? 'hovered' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ borderColor: '#808080' }}
      >
        <img src={isHovered ? hoverImageUrl : imageUrl} alt={title} />
        <p>{title}</p>
      </div>
      <p className="country-description">{description}</p>
    </div>
  );
};

const CountryCircles = () => {
  return (
    <div className="country-circles-container">
      <CountryCircle
        title="Uganda"
        imageUrl={require('../assets/2_latest.jpg')}
        hoverImageUrl={require('../assets/KDP_0130.jpg')}
        description="Uganda"
      />
      <CountryCircle
        title="Kenya"
        imageUrl={require('../assets/KDP_9633.jpg')}
        hoverImageUrl={require('../assets/KDP_0134.jpg')}
        description="Kenya"
      />
      <CountryCircle
        title="Tanzania"
        imageUrl={require('../assets/KDP_8216.jpg')}
        hoverImageUrl={require('../assets/KDP_8035.jpg')}
        description="Tanzania"
      />
      <CountryCircle
        title="Zanzibar"
        imageUrl={require('../assets/KDP_8199.jpg')}
        hoverImageUrl={require('../assets/9_latest.jpg')}
        description="Zanzibar"
      />
      <CountryCircle
        title="Rwanda"
        imageUrl={require('../assets/rwanda-02.jpg')}
        hoverImageUrl={require('../assets/rwanda-03.jpg')}
        description="Rwanda"
      />
      <CountryCircle
        title="South Africa"
        imageUrl={require('../assets/sa-1.jpg')}
        hoverImageUrl={require('../assets/sa-2.jpg')}
        description="South Africa"
      />
    </div>
  );
};

export default CountryCircles;
