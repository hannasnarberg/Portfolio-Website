import React from 'react';
import './projectsOverview.css';
import projectsData from './ProjectsData';
import ProjectsEntry from './ProjectsEntry';

function ProjectsOverview({ setCurrentProject }) {
   return (
      <section id="projects">
         <h2>Projects</h2>
         <div className="container projectsOverview__container">
            {projectsData.map(({ id, image, title, keyWords }) => {
               return (
                  <ProjectsEntry
                     key={id}
                     id={id}
                     image={image}
                     title={title}
                     keyWords={keyWords}
                     setCurrentProject={(id) =>
                        setCurrentProject(
                           projectsData.find((project) => project.id === id)
                        )
                     }
                  />
               );
            })}
         </div>
      </section>
   );
}

export default ProjectsOverview;
