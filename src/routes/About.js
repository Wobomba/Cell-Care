import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/Exp57.jpeg';
import Footer from '../components/Footer';
import AboutData from '../components/AboutData';
import Trip from '../components/Trip';
import Team from '../components/team';

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
           <Team/>
           <Trip/>

            <Footer/>
        </>

    )
}

export default About;