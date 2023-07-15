import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import AboutImg from '../assets/2.jpg';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


function Contact() {
    return (
        <>
            <Navbar />
            
            <div className="App">
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