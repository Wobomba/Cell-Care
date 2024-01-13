import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/KDP_8035.jpg';



function International() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='What We Offer'
                btnClass='hide'
            />
            
            
        </>
    )
}

export default International;
