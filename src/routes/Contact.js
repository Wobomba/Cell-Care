import Navbar from "../components/Nav/Navbar";
import Hero from '../components/Hero/Hero';
import AboutImg from '../assets/bwindi-forest-uganda.jpg';
import Footer from "../components/FooterPage/Footer";
import GalleryPage from "../components/GalleryComponent/GalleryPage";



function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Our Experiences'
                btnClass='hide'
            />
            <div className="Contact">
                <div className="container">
                    <h1 className="text-center">
                    </h1>
                    <GalleryPage/>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact;