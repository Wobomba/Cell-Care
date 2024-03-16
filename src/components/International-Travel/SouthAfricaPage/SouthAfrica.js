import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/Exp57.jpeg';
import Footer from '../../FooterPage/Footer';
import SouthAfricaData from './SouthAfricaData';



function SouthAfrica() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Uganda'
                btnClass='hide'
            />
            <SouthAfricaData/>
            <Footer/>
        </>

    )
}

export default SouthAfrica;