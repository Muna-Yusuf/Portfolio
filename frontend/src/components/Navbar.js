import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['portfolio', 'about-me', 'my-projects', 'contact-me'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollPosition >= sectionTop - 70 && scrollPosition < sectionTop + sectionHeight - 70) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the correct active link on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            className={`nav-link ${activeLink === 'portfolio' ? 'active-link' : ''}`} 
            offset={-70}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="about-me" 
            smooth={true} 
            duration={500} 
            className={`nav-link ${activeLink === 'about-me' ? 'active-link' : ''}`} 
            offset={-70}
          >
            About me
          </Link>
        </li>
        <li>
          <Link 
            to="my-projects" 
            smooth={true} 
            duration={500} 
            className={`nav-link ${activeLink === 'my-projects' ? 'active-link' : ''}`} 
            offset={-70}
          >
            My Projects
          </Link>
        </li>
        <li>
          <Link 
            to="contact-me" 
            smooth={true} 
            duration={500} 
            className={`nav-link ${activeLink === 'contact-me' ? 'active-link' : ''}`} 
            offset={-70}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
