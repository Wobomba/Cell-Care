import React from 'react';
import HeroTravel from '../components/Hero/HeroTravel';
import Navbar from "../components/Nav/Navbar";
import AboutImg from '../assets/KDP_8035.jpg';
import AboutTravel from '../components/International-Travel/Landing-Page/AboutTravel';
import Travel from '../components/International-Travel/Country-Travel/Travel';

import Footer from '../components/FooterPage/Footer'
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
