import React from 'react';
import './projects.css';

function ProjectsEntry({ id, image, title, github, demo }) {
   return (
      <article key={id} className="projects__item">
         <div className="projects__item-image">
            <img src={image} alt={title} />
         </div>
         <h3> {title} </h3>
         <div className="projects__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
               Github
            </a>
            <a
               href={demo}
               className="btn btn-primary"
               target="_blank"
               rel="noreferrer"
            >
               Demo
            </a>
         </div>
      </article>
   );
}

export default ProjectsEntry;
