import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/my-projects" element={<MyProjects />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
        </Router>
    );
}

export default App;
