import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MyImage from './image/5.png';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const headingRef = useRef(null); // Ref for heading element

  useEffect(() => {
    const headingElement = headingRef.current;

    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-right');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingElement) {
      observer.observe(headingElement);
    }

    return () => {
      if (headingElement) observer.unobserve(headingElement); // Cleanup
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/contact/send_contact_email/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      setStatus('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Email sent successfully');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="form-column">
        <h1 className="contact-heading" ref={headingRef}>Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message"
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Send</button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="email-info">
          <p>For any inquiries, please contact me at:</p>
          <p>muna.y.a.jim@gmail.com</p>
        </div>
      </div>
      <div className="image-column floating">
        <img src={MyImage} alt="Hero" />
      </div>
    </div>
  );
}

export default ContactMe;
