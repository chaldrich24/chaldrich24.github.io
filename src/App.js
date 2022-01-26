import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const sections = [
    {
      name: 'About',
      tag: <About />
    },
    {
      name: 'Portfolio',
      tag: <Portfolio />
    },
    {
      name: "Contact",
      tag: <Contact />
    },
    {
      name: "Resume",
      tag: <Resume />
    }
  ]

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="main">
      <main>
        <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} sections={sections} />
        {currentSection.tag}
      </main>
      <Footer />
    </div>
  );
}

export default App;
