import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/dubai.jpg';
import Footer from '../../FooterPage/Footer';
import DubaiData from './DubaiData';



function Dubai() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Dubai'
                btnClass='hide'
            />
            <DubaiData/>
            <Footer/>
        </>

    )
}

export default Dubai;