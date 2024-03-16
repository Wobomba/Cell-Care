import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/Exp57.jpeg';
import Footer from '../../FooterPage/Footer';
import UgandaData from './UgandaData';



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
            <UgandaData/>
            <Footer/>
        </>

    )
}

export default Uganda;