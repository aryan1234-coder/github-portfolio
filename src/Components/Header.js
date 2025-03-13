import React, { useState } from 'react';
import '../CssComponents/Header.css';
import { useEffect } from 'react';
import { useRef } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backgroundPhoto = document.querySelector('.background-photo');
      if (backgroundPhoto) {
        const backgroundPhotoHeight = backgroundPhoto.offsetHeight;
        if (window.scrollY > backgroundPhotoHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id,event) => {
    // document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',block: "start" });
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const headerRef = useRef(null); // Create a reference for the header section

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the header
    }
  };
  
  return (

    <>
        <div className="background-photo">
        <div className="overlay">
          <h1>Hello, I'm Aryan</h1>
          <p>Developer, Open Source enthusiast</p>
          <button onClick={scrollToHeader} className="know-me-button">
            Get to Know Me :) A
          </button>

        </div>
      </div>

 
    <header ref={headerRef} className={`header ${isFixed ? 'fixed' : ''}`}>
    {/* https://drive.google.com/file/d/1nojLf3tyank9OeIE7guk3AOn4cH_QGOX/view?usp=drive_link */}
    {/* https://drive.google.com/file/d/1nojLf3tyank9OeIE7guk3AOn4cH_QGOX/view?usp=drive_link */}
      {/* Left Side: Photo and Name */}
      <div className="left-side">
        <img 
          src="https://avatars.githubusercontent.com/u/71258465?v=4" // Replace with your image path// Replace with your image path
          alt="Aryan Sachan" 
          className="profile-photo" 
        />
        <h1>Aryan Sachan</h1>
       
      </div>

      {/* Right Side: Navigation Links */}
      <nav className={`right-side ${isMenuOpen ? 'open' : ''}`}>
         
        <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</a>
        <a href="#gallery" onClick={(e) => scrollToSection('gallery', e)}>Gallery</a>
        <a href="#resume" onClick={(e) => scrollToSection('resume', e)}>Resume</a>
        <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a>
      </nav>

      {/* Menu Icon for Smaller Screens */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
    </>
    
  );
};

export default Header;