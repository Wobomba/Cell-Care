import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Gallery from '../components/Gallery';

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                heroImg='https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                title='Your Journey Your Story'
                text='Choose Your Favourite Destination.'
                buttonText='Travel Plan'
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