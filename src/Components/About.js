import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../CssComponents/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Oval-Shaped Photo */}
      <h2>About Me</h2>
      <div className="about-photo-container">
        <img 
          src="https://i.postimg.cc/763XPyCQ/IMG-20231014-011325-412.webp" // Replace with your image path // Replace with your image path
          alt="Aryan Sachan" 
          className="about-photo" 
        />
      </div>

      {/* About Me Title */}
     

      {/* About Me Description */}
      <div className="about-content">
        <p>
          Aryan Sachan is an experienced Software Developer with 2.8 years of expertise in building scalable web applications using React.js, Redux, and Spring Boot. Proficient in MySQL, SAP HANA, and CI/CD automation using Jenkins. Skilled in API integration and enterprise application development with MuleSoft, OpenText Exstream, and RESTful APIs.
        </p>
        <p>
          Apart from his work, Aryan enjoys exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in software development. In his free time, he likes to play badminton, read books, and travel.
        </p>
        <p>
          Aryan is passionate about creating efficient and user-friendly applications that solve real-world problems. He believes in continuous learning and strives to improve his skills every day.
        </p>

      </div>

      <div className="resume-box">
        <a 
          href="https://drive.google.com/file/d/1Vn2NLU_WgemeWhIyjVHjas0uhX0GaK86/view?usp=drive_link" // Replace with your Google Drive link
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaDownload className="download-icon" />  Resume
        </a>
      </div>
    </section>
  );
};

export default About;