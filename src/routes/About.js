import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/night.jpg';
import Footer from '../components/Footer';
import AboutData from '../components/AboutData';

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Who we are'
                btnClass='hide'
            />

           <AboutData/>
           

            <Footer/>
        </>

    )
}

export default About;