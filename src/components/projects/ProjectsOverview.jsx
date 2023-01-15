import React from 'react';
import './projects.css';
import ProjectsEntry from './ProjectsEntry';

function ProjectsOverview({ setCurrentProject, data }) {
   return (
      <div className="container projects__container">
         {data.map(({ id, image, title, github, demo }) => {
            return (
               <ProjectsEntry
                  id={id}
                  image={image}
                  title={title}
                  github={github}
                  demo={demo}
                  setCurrentProject={(id) => setCurrentProject(id)}
               />
            );
         })}
      </div>
   );
}

export default ProjectsOverview;
