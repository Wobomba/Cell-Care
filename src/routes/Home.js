import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Gallery from '../components/Gallery';
import HomeImg from '../assets/bw.jpg';

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                heroImg={HomeImg}
                title='TLC    SAFARIS'
                text='Your Travel, Our Satisfaction'
                buttonText='Our Services'
                url='/'
                btnClass='show'
            />
            <Destination/>
            <div>
                <h1>Recent Travel Experiences</h1>
            </div>
            <Gallery/>
            <Footer/>
        </>
    );
}

export default Home;