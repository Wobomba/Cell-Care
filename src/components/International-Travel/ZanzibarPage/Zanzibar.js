import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/Exp57.jpeg';
import Footer from '../../FooterPage/Footer';
import ZanzibarData from './ZanzibarData';



function Zanzibar() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Uganda'
                btnClass='hide'
            />
            <ZanzibarData/>
            <Footer/>
        </>

    )
}

export default Zanzibar;