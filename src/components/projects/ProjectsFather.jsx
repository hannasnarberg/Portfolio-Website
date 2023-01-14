import React from 'react';
import './projects.css';
import Projects from './Projects';
import { useState } from 'react';
import Projects from './Projects';

function ProjectsFather() {
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <section id="projects">
         <h2>Projects</h2>
         {currentProject ? (
            <Projects currentProject={currentProject}></Projects>
         ) : (
            <ProjectDetails
               onClose={() => setCurrentProject(null)}
            ></ProjectDetails>
         )}
      </section>
   );
}

export default ProjectsFather;
