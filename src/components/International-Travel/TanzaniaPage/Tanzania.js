import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/KDP_0099.jpg';
import Footer from '../../FooterPage/Footer';
import TanzaniaData from './TanzaniaData';



function Tanzania() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Tanzania'
                btnClass='hide'
            />
            <TanzaniaData/>
            <Footer/>
        </>

    )
}

export default Tanzania;