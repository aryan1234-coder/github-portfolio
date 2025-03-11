import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

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
   
   <section id="contact">
   <Contact/>
   </section>
   

   </div>

  );
}

export default App;
