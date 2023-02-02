import React from 'react';
import './projectsOverview.css';
import projectsData from './ProjectsData';
import ProjectsEntry from './ProjectsEntry';

function ProjectsOverview({ setCurrentProject, setWindowOffset }) {
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
                     setCurrentProject={(id) => {
                        setCurrentProject(
                           projectsData.find((project) => project.id === id)
                        );
                        setWindowOffset(window.pageYOffset);
                        document.body.setAttribute(
                           'style',
                           `position:fixed; top: -${window.pageYOffset}px; left:0; right:0;`
                        );
                     }}
                  />
               );
            })}
         </div>
      </section>
   );
}

export default ProjectsOverview;
