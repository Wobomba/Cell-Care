import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/9_latest.jpg';
import Footer from '../../FooterPage/Footer';
import ZanzibarData from './ZanzibarData';



function Zanzibar() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Zanzibar'
                btnClass='hide'
            />
            <ZanzibarData/>
            <Footer/>
        </>

    )
}

export default Zanzibar;