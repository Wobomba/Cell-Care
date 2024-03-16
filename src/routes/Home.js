import React, {useState, useEffect, useMemo} from 'react';
import Destination from "../components/LandingPage/Destination/Destination";
import Footer from "../components/FooterPage/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nav/Navbar";
import Gallery from '../components/GalleryComponent/Gallery';
import InterImg1 from '../assets/KDP_9537.jpg'
import InterImg2 from '../assets/KDP_9633.jpg'
import InterImg3 from '../assets/KDP_0130.jpg'
import InterImg4 from '../assets/KDP_0134.jpg'
import InterImg5 from '../assets/KDP_9483.jpg'

const Home = () => {
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
                cName='hero'
                heroImg={images[currentImageIndex]}
                title='TLC    SAFARIS'
                text='Your Travel, Our Satisfaction'
                buttonText='Our Services'
                url='/service'
                btnClass='show'
                textColor
            />
            <Destination/>
            <div>
                <h1>Recent Travel Experiences</h1>
            </div>
            <Gallery/>
            <Footer/>
        </>
    );
}

export default Home;
