import React from 'react';
import './projects.css';
import ProjectsOverview from './ProjectsOverview';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import projectsData from './ProjectsData';

function Projects() {
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <section id="projects">
         <h2>Projects</h2>
         {currentProject ? (
            <ProjectDetails
               currentProject={currentProject}
               onClose={() => setCurrentProject(null)}
            ></ProjectDetails>
         ) : (
            <ProjectsOverview
               setCurrentProject={(id) =>
                  setCurrentProject(
                     projectsData.find((project) => project.id === id)
                  )
               }
               projectsData={projectsData}
            ></ProjectsOverview>
         )}
      </section>
   );
}

export default Projects;
