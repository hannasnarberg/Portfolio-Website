import React from 'react';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/portfolio/Projects';
import Contact from './components/contact/Contact';

function App() {
   return (
      <>
         <Header />
         <Navigator />
         <About />
         <Experience />
         <Projects />
         <Contact />
      </>
   );
}

export default App;
