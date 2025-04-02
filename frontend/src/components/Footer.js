import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Built with React.js</p>
      <p>© {currentYear} Muna Jimale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
