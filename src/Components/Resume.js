import React from 'react';
import '../CssComponents/Resume.css';

const Resume=()=>{

   

    const experiences=[
        {
        id: 1,
        title: 'Senior Systems Engineer',
        date: 'OCT 2024 - PRESENT',
        description: (
            <ul>
               <li>Led a team of 7 developers to deliver a 30% improvement in application performance by optimizing frontend-backend integration and database queries.</li>
                  <li>Spearheaded the development of high-performance logging utilities, reducing debugging time by 25% and improving monitoring efficiency across multiple applications.</li>
                  <li>Mentored 5+ junior developers on best practices for scalable application development,code optimization, and efficient logging strategies.</li>
            </ul>
          ),
        team: 'INFOSYS',
        align: 'left'
        },
        {
            id: 2,
            title: 'Systems Engineer',
            date: 'JULY 2022 - OCT 2024',
            description: (
                <ul>
                  <li>Architected and implemented a dynamic dashboard with role-based login functionality, improving user experience for 500+ employees.</li>
                  <li>Collaborated with cross-functional teams to optimize frontend-backend integration, reducing API response time by 40%.</li>
                  </ul>
              ),
            team: 'INFOSYS',
            align: 'right'
            },
            {
                id: 3,
                title: 'Systems Engineer Intern',
                date: 'FEB 2022 - APR 2022',
                description: (
                    <ul>
                      <li>Led a team of <strong>7 developers</strong> to deliver a <strong>30% improvement in application performance</strong> by optimizing frontend-backend integration and database queries.</li>
                      <li>Spearheaded the development of <strong>high-performance logging utilities</strong>, reducing debugging time by <strong>25%</strong> and improving monitoring efficiency across multiple applications.</li>
                      <li>Mentored <strong>5+ junior developers</strong> on best practices for <strong>scalable application development</strong>, <strong>code optimization</strong>, and <strong>efficient logging strategies</strong>.</li>
                    </ul>
                  ),
                team: 'INFOSYS',
                align: 'left'
                }
    ]

    const educations=[
        {
            id:1,
            title:"Galgotias College Of Engineering and Technology, Greater Noida UP",
            date:'JULY 2018 - JULY 2022',
            degree:"B.tech",
            description: "Graduated in Information Technology with Honors",
            align: 'right'
            
        },
        {
            id:2,
            title:"Heliger Boarden Education Center, Kanpur UP",
            degree:"12th Grade(Science)",
            date: "APR 2016 - JUN 2017",
            description: "Secured 83%",
            align: 'left'
            
        },
        {
            id:3,
            title:"Millennium Public School, Pukhrayana UP",
            date: "APR 2014 - MAY 2015 ",
            degree:"10th Grade(Science)",
            description: "Secured 9.2 CGPA",
            align: 'right'
            
        }
    ]

    return (
        <section id="experience" className="experience-section">
          <h2>Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className={`timeline-item ${exp.align}`}>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <p className="team">{exp.team}</p>
                  <p className="description">{exp.description}</p>
                  {/* <ul className='description'>
            {exp.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul> */}
                </div>
                <div className="timeline-date">
                  <div className="date-circle">
                    {exp.date.split(' - ').map((date, index) => (
                      <span key={index}>{date}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2>Education</h2>
          <div className="timeline">
            {educations.map((edu) => (
              <div key={edu.id} className={`timeline-item ${edu.align}`}>
                <div className="timeline-content">
                  <h4>{edu.title}</h4>
                  <p className="team">{edu.degree}</p>
                  <p className="description">{edu.description}</p>
                  {/* <ul className='description'>
            {exp.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul> */}
                </div>
                <div className="timeline-date">
                  <div className="date-circle">
                    {edu.date.split(' - ').map((date, index) => (
                      <span key={index}>{date}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}
export default Resume;