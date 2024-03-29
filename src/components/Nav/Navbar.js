import React, { Component } from 'react';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import logo from '../../assets/final-logo.png';

class Navbar extends Component {
    state = {
        clicked: false,
        scrolled: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        const { scrolled, clicked } = this.state;

        return (
            <nav className={`NavbarItems ${scrolled ? 'scrolled' : ''} ${clicked ? 'active' : ''}`}>
                <img src={logo} alt='TLC' style={{ width: '80px', height: 'auto' }} />
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
