// International.js
import React, { useState, useEffect, useMemo } from 'react';
import './InternationalDataStyles.css';

// Import your static images
import image1 from '../assets/latest_1.jpg';
import image2 from '../assets/latest_2.jpg';
import image3 from '../assets/latest_3.jpg';
import image4 from '../assets/latest_4.jpg';
import image5 from '../assets/latest_5.jpg';

const International = () => {
  const images = useMemo(() => [image1, image2, image3, image4, image5], []); // Memoize the images array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance the slideshow every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className="international-container">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>

      <div className="content-container">
        <div className="left-content">
          {/* Add your left content (image) here */}
          <img src={images[currentImageIndex]} alt="Left Content" className="left-content-image" />
        </div>
        <div className="right-content">
          {/* Add your right content (text) here */}
          <p>Your text content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default International;
