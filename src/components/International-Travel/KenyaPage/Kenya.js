import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/KDP_9633.jpg';
import Footer from '../../FooterPage/Footer';
import KenyaData from './KenyaData';



function Kenya() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Kenya'
                btnClass='hide'
            />
            <KenyaData/>
            <Footer/>
        </>

    )
}

export default Kenya;