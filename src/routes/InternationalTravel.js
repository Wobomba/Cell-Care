import React from 'react';
import HeroTravel from '../components/HeroTravel';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/KDP_8035.jpg';
import AboutTravel from '../components/AboutTravel';
import Travel from '../components/Travel';

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
      <AboutTravel/>
      <Travel/>
     
    
      <Footer/>

    </>
  );
}

export default InternationalTravel;
