import React from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectsOverview from './components/projects/ProjectsOverview';
import { useState } from 'react';
import ProjectModal from './components/projects/ProjectModal';

function App() {
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <>
         {currentProject && (
            <ProjectModal
               currentProject={currentProject}
               closeDetails={() => setCurrentProject(null)}
            />
         )}
         <Navigation />
         <Header />
         <About />
         <Skills />
         <ProjectsOverview
            setCurrentProject={(project) => setCurrentProject(project)}
         />
         <Contact />
      </>
   );
}

export default App;
