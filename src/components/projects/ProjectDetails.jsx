import React from 'react';
import './projects.css';
import { AiOutlineClose } from 'react-icons/ai';

function ProjectDetails({ currentProject, onClose }) {
   return (
      <div className="container projects__test">
         <article key={currentProject.id} className="project__details">
            <div className="project__info">
               <div className="project__pictures">
                  <img src={currentProject.image} alt={currentProject.title} />
                  <img
                     className="project__image2"
                     src={currentProject.image2}
                     alt={currentProject.title}
                  />
               </div>
               <div className="project__description">
                  <h3> {currentProject.title} </h3>
                  <p> {currentProject.description} </p>
               </div>
               <div className="project__details-links">
                  <a
                     href={currentProject.github}
                     className="btn"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Github
                  </a>
                  <a
                     href={currentProject.demo}
                     className="btn btn-primary"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Demo
                  </a>
               </div>
            </div>
            <a onClick={() => onClose()} className="project__close">
               <AiOutlineClose />
            </a>
         </article>
      </div>
   );
}

export default ProjectDetails;
