import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutImg from '../assets/1.jpg';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Card from '../components/Card.jsx';
import img1 from "../assets/Exp.jpeg";
import img2 from "../assets/Exp2.jpeg";
import img3 from "../assets/Exp3.jpeg";
import img4 from "../assets/Exp4.jpeg";
import img5 from "../assets/Exp55.jpeg";
import img6 from "../assets/Exp56.jpeg";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Service'
                btnClass='hide'
            />

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card title="Safari Packages" imgsrc={img1} />
                            <Card title="Private Trips" imgsrc={img2} />
                            <Card title="Honey Moon Packages" imgsrc={img3} />
                            <Card title="Tour Guiding" imgsrc={img4} />
                            <Card title="Retreats" imgsrc={img5} />
                            <Card title="Airport Pickups and Drops" imgsrc={img6} />
                            <Card title="Hotel Bookings" imgsrc={img6} />
                            <Card title="Events Planning" imgsrc={img6} />
                            <Card title="Photography" imgsrc={img6} />
                            <Card title="Camp Tent Booking" imgsrc={img6} />
                        </div>
                    </div>
                </div>
            </div>

            <Trip />
            
        </>
    )
}

export default Service;