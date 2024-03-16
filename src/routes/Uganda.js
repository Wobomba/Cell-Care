import React from 'react';
import HeroTravel from '../components/HeroTravel';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/KDP_8035.jpg';
import Footer from '../components/Footer'
import UgandaData from '../components/Uganda';

function Uganda() {
  return (
    <>
      <Navbar />
      <HeroTravel
        cName='hero-mid'
        heroImg={AboutImg}
        title='Uganda'
        btnClass='hide'
      />
      <UgandaData/>  
    
      <Footer/>

    </>
  );
}

export default Uganda;
