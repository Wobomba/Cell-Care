import Hero from '../../Hero/Hero';
import Navbar from "../../Nav/Navbar";
import AboutImg from '../../../assets/Exp57.jpeg';
import Footer from '../../FooterPage/Footer';
import KenyaData from './KenyaData';



function Kenya() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Uganda'
                btnClass='hide'
            />
            <KenyaData/>
            <Footer/>
        </>

    )
}

export default Kenya;