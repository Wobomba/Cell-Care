import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/1.jpg';
import ServicesTrip from '../components/ServicesTrip';
import Footer from '../components/Footer';
import Trip from '../components/Trip';


function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Service'
                btnClass='hide'
            />
            


            <ServicesTrip/>
            <Trip/>
            <Footer />
        </>
    )
}

export default Service;