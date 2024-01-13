import React from 'react';
import '../components/InternationalDataStyles.css'
import HeroTravel from '../components/HeroTravel';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/KDP_8035.jpg';
import AboutTravelData from '../components/AboutTravelData';
import Country from '../components/CountryCircles';
import Footer from '../components/Footer'
function InternationalTravel() {
  return (
    <>
      <Navbar />
      <HeroTravel
        cName='hero-mid'
        heroImg={AboutImg}
        title='Travel With Us'
        btnClass='hide'
      />
      <AboutTravelData/>
      <Country/>
      <Footer/>

    </>
  );
}

export default InternationalTravel;
