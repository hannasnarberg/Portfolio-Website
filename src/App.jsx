import React from 'react';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectDetails from './components/projects/ProjectDetails';
import ProjectsOverview from './components/projects/ProjectsOverview';
import './assets/font/Courgette-Regular.ttf';
import { useState } from 'react';

function App() {
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <>
         {currentProject && (
            <ProjectDetails
               currentProject={currentProject}
               onClose={() => setCurrentProject(null)}
            />
         )}
         <div>
            <Navigator />
            <Header />
            <About />
            <Skills />
            <ProjectsOverview
               setCurrentProject={(project) => setCurrentProject(project)}
            />
            <Contact />
         </div>
      </>
   );
}

export default App;
