import React from 'react';
import Header from './header/Header';
import About from './about/About';
import Skills from './skills/Skills';
import ProjectsOverview from './projects/ProjectsOverview';
import Contact from './contact/Contact';
import { ScrollRestoration } from 'react-router-dom';

export default function mainPage() {
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