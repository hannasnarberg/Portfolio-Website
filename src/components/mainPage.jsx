import React from 'react';
import Header from './header/Header';
import About from './about/About';
import Skills from './skills/Skills';
import ProjectsOverview from './projects/projectsOverview/ProjectsOverview';
import Contact from './contact/Contact';

export default function MainPage() {
   return (
      <>
         <Header />
         <About />
         <Skills />
         <ProjectsOverview />
         <Contact />
      </>
   );
}
