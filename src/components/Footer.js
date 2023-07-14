import './FooterStyles.css'
import logo from '../assets/final-logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <h1>TLC Safaris</h1>
                <div>

                    <a href='https://instagram.com/tlcsafaris'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href='https://youtube.com/@TLCSAFARIS'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href='https://twitter.com/tlcsafaris'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>

                </div>
            </div>
            {/*
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact using</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms Of Service</a>
                    <a href='/'>Privacy</a>
                    <a href='/'>Policy</a>
                </div>
            </div>*/}
        </div>
    )

export default Footer;