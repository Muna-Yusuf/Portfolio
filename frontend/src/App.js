import React, { useEffect } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

import Particles from './components/Particles';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <div className="main-content">
		<Particles />
        <Element name="portfolio" className="section">
          <Portfolio />
        </Element>
        <Element name="about-me" className="section">
		  <Particles />
          <AboutMe />
        </Element>
        <Element name="my-projects" className="section">
		  <Particles />
          <MyProjects />
        </Element>
        <Element name="contact-me" className="section">
		  <Particles />
          <ContactMe />
        </Element>
		<Particles />
        <Footer />
      </div>
    </div>
  );
}

export default App;
