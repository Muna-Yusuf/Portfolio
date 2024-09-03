import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/my-projects">My Projects</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
