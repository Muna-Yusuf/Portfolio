import React, { useEffect, useRef, useState } from 'react';
import MyImage from './image/2.png';

const AboutMe = () => {
  const [isVisibleContent, setVisibleContent] = useState(false);
  const [isVisibleTech, setVisibleTech] = useState(false);
  
  const contentRef = useRef();
  const techRef = useRef();

  useEffect(() => {
    const currentContentRef = contentRef.current;
    const currentTechRef = techRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === currentContentRef) {
            setVisibleContent(true);
          } else if (entry.target === currentTechRef) {
            setVisibleTech(true);
          }
        } else {
          if (entry.target === currentContentRef) {
            setVisibleContent(false);
          } else if (entry.target === currentTechRef) {
            setVisibleTech(false);
          }
        }
      });
    });

    if (currentContentRef) {
      observer.observe(currentContentRef);
    }

    if (currentTechRef) {
      observer.observe(currentTechRef);
    }

    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
      if (currentTechRef) {
        observer.unobserve(currentTechRef);
      }
    };
  }, []);

  return (
    <div className="aboutme-section">
      <div className="aboutme-image floating">
        <img src={MyImage} alt="About Me" />
      </div>
      <div className="aboutme-right">
        <div
          ref={contentRef}
          className={`aboutme-content ${isVisibleContent ? 'fade-in-right' : 'fade-out-right'}`}
        >
          <h1>About Me</h1>
          <p>
            I'm a Computer Engineering graduate specializing in Web Development,
            a member of the Saudi Council of Engineers, and an AWS Certified Cloud Practitioner.
            I’m passionate about building robust backend systems and cloud solutions, always eager to learn and grow.
            I approach challenges with energy, collaboration, and a drive for excellence.
          </p>
          <h2>Technologies I've been working with recently:</h2>
        </div>
        <div
          ref={techRef}
          className={`tech-container ${isVisibleTech ? 'fade-in-right' : 'fade-out-right'}`}
        >
          <ul className="tech-list">
            <li>Python - Django </li>
            <li>JavaScript (ES6+) - React </li>
            <li>HTML & (S)CSS - Node.js</li>
            <li>AWS - Mysql </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
