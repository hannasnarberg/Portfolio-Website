import React from 'react';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './assets/font/Courgette-Regular.ttf';

function App() {
   return (
      <>
         <Navigator />
         <Header />
         <About />
         <Skills />
         <Projects />
         <Contact />
      </>
   );
}

export default App;
