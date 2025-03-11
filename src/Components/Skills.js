import React, { useState, useEffect } from 'react';
import '../CssComponents/Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  // List of skills with their percentages
  const skills = [
    { name: 'Data Structures', percentage: 80 },
    { name: 'Algorithms', percentage: 80 },
    { name: 'Java', percentage: 90 },
    { name: 'React.js', percentage: 80 },
    { name: 'Spring Boot', percentage: 70 },
    { name: 'Javascript', percentage: 70 },
    { name: 'Project Management', percentage: 70 },
  ];

  // Function to check if the skills section is in view
  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: animated ? `${skill.percentage}%` : '0%',
                  transition: 'width 2s ease-in-out', // Smooth animation
                }}
              ></div>
            </div>
            <div className="skill-percentage">
              {animated ? `${skill.percentage}%` : '0%'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;