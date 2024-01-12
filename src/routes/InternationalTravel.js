// InternationalTravel.js
import React, { useState, useEffect, useMemo } from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar"
import AboutData from '../components/AboutData'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import InterImg1 from '../assets/latest_1.jpg'
import InterImg2 from '../assets/latest_2.jpg'
import InterImg3 from '../assets/latest_3.jpg'
import InterImg4 from '../assets/latest_4.jpg'
import InterImg5 from '../assets/latest_5.jpg'

const InternationalTravel = () => {
  const images = useMemo(() => [InterImg1, InterImg2, InterImg3, InterImg4, InterImg5], []); // Memoize the images array
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
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={images[currentImageIndex]}
        title='Travel With Us'
        btnClass='hide'
      />

      <AboutData />

      <Trip />

      <Footer />
    </>
  );
};

export default InternationalTravel;
