import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import AboutImg from '../assets/2.jpg';
import Footer from "../components/Footer";


function onClickButton(event) {
    event.preventDefault();
}

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={AboutImg}
                title='Contact'
                btnClass='hide'
            />
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Enter Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form-group pt-3">
                                <label for="exampleFormControlInput1">Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="+91-"
                                />
                            </div>
                            <div className="form-group pt-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="form-group pt-3">
                                <label for="exampleFormControlTextarea1">
                                    Type your Message Here
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <div className="col-12 pt-3">
                                <button
                                    onClick={onClickButton}
                                    className="btn btn-outline-primary"
                                    type="submit"
                                >
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;