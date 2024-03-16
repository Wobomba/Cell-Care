import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/Exp57.jpeg';
import Footer from '../../FooterPage/Footer';
import TanzaniaData from './TanzaniaData';



function Tanzania() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Uganda'
                btnClass='hide'
            />
            <TanzaniaData/>
            <Footer/>
        </>

    )
}

export default Tanzania;