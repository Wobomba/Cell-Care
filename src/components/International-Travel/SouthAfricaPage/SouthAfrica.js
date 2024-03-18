import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/sa.jpg';
import Footer from '../../FooterPage/Footer';
import SouthAfricaData from './SouthAfricaData';



function SouthAfrica() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='South Africa'
                btnClass='hide'
            />
            <SouthAfricaData/>
            <Footer/>
        </>

    )
}

export default SouthAfrica;