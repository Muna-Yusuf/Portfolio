import React, { useEffect, useRef, useState } from 'react';
import MyImage from './image/4.png';

const Portfolio = () => {
  const [isVisible, setVisible] = useState(false);
  const introRef = useRef();

  useEffect(() => {
    const currentRef = introRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="portfolio-page">
      <div
        ref={introRef}
        className={`intro ${isVisible ? 'fade-in-right' : 'fade-out-right'}`}
      >
        <h2>Hi There,</h2>
        <h1>I'm Muna Jimale</h1>
        <p>I blend the precision of computer engineering with the creativity of backend development & turning complex challenges into sleek, efficient solutions.</p>
      </div>

      <div className="hero-image floating">
        <img src={MyImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Portfolio;
