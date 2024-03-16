import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/Exp57.jpeg';
import Footer from '../components/Footer';



function Uganda() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Uganda'
                btnClass='hide'
            />
            <Footer/>
        </>

    )
}

export default Uganda;