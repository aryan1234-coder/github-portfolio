import React, { useState } from 'react';
import '../CssComponents/Header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  
  return (
      

 
    <header>
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
    
  );
};

export default Header;