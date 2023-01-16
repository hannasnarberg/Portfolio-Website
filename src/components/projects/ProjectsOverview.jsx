import React from 'react';
import './projects.css';
import projectsData from './ProjectsData';
import ProjectsEntry from './ProjectsEntry';

function ProjectsOverview({ setCurrentProject }) {
   return (
      <section id="projects">
         <h2>Projects</h2>
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
                        setCurrentProject={(id) =>
                           setCurrentProject(
                              projectsData.find((project) => project.id === id)
                           )
                        }
                     />
                  );
               }
            )}
         </div>
      </section>
   );
}

export default ProjectsOverview;
