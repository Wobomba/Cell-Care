import Hero from '../components/Hero/Hero';
import Navbar from "../components/Nav/Navbar";
import AboutImg from '../assets/Exp57.jpeg';
import Footer from '../components/FooterPage/Footer';
import AboutData from '../components/AboutPage/AboutData';
import Trip from '../components/LandingPage/Trip/Trip';


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
           
           <Trip/>

            <Footer/>
        </>

    )
}

export default About;