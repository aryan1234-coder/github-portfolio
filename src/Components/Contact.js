import React from 'react';
import { FaTelegram, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaGithub, 
    FaLinkedin  } from 'react-icons/fa';

    import { SiLeetcode } from 'react-icons/si';
import '../CssComponents/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Bangalore, India</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>aryansachan2017@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaTelegram className="contact-icon" />
          <p>@im.aryan</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://t.me/im.aryan" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/aryan.sachan.779/?_rdr" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com/aryan_sachan" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com/__ary.sachan1234/tagged/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://github.com/aryan1234-coder" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/aryan-sachan-a54525186/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
          <a href="https://leetcode.com/u/Sachan_123/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="social-icon" />
        </a>
      </div>
      <div className="copyright">
        <p>Copyright © 2018 Aryan Sachan</p>
      </div>
    </section>
  );
};

export default Contact;