import React from 'react';
import './projects.css';
import ProjectsEntry from './ProjectsEntry';

function ProjectsOverview({ setCurrentProject, projectsData }) {
   return (
      <div className="container projects__container">
         {projectsData.map(
            ({ id, image, title, keyWords, shortDescription }) => {
               return (
                  <ProjectsEntry
                     id={id}
                     image={image}
                     title={title}
                     keyWords={keyWords}
                     shortDescription={shortDescription}
                     setCurrentProject={(id) => setCurrentProject(id)}
                  />
               );
            }
         )}
      </div>
   );
}

export default ProjectsOverview;
