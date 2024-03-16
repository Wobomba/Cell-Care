import Hero from '../components/Hero/Hero';
import Navbar from "../components/Nav/Navbar";
import AboutImg from '../assets/bwindi.jpg';
import ServicesTrip from '../components/ServicePage/ServicesTrip';
import Footer from '../components/FooterPage/Footer';
import Trip from '../components/LandingPage/Trip/Trip';


function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='What We Offer'
                btnClass='hide'
            />
            
            <ServicesTrip/>
            <Trip/>
            <Footer />
        </>
    )
}

export default Service;