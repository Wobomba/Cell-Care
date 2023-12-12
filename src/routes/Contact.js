import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import AboutImg from '../assets/bwindi-forest-uganda.jpg';
import Footer from "../components/Footer";
import GalleryPage from "../components/GalleryPage";



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