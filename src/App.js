
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Resume from './Components/Resume';


function App() {
  return (
    <div className="portfolio-container">
   <Header/>

  
  
   <section id="about">
   <About/>
   </section>

   <section id="skills">
   <Skills/>
   </section>

   <section id="resume">
   <Resume/>
   </section>

   <section id="contact">
   <Contact/>
   </section>
   

   </div>

  );
}

export default App;
