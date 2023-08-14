import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import AboutImg from '../assets/bwindi-forest-uganda.jpg';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Want To Reach Us?'
                btnClass='hide'
            />
            <div className="Contact">
                <div className="container">
                    <h1 className="text-center">
                        Contact Form
                    </h1>
                    <ContactForm/>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact;