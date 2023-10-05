import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import { BiArrowBack } from 'react-icons/bi';
import './projectsDetails.css';
import { Fade } from 'react-awesome-reveal';

function ProjectDetails() {
   const { projectUrl } = useParams();
   const currentProject = projectsData.find(
      (project) => project.urlParam === projectUrl
   );

   function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   useEffect(() => {
      topFunction();
   }, []);
   return (
      <Fade>
         <div className="container projectDetails__container">
            <article
               key={currentProject.id}
               className="projectDetails__details"
            >
               <img
                  src={currentProject.compressedImage}
                  alt={currentProject.title}
                  className="projectDetails__img"
               />
               <div className="projectDetails__title-links">
                  <h3> {currentProject.title} </h3>
                  {currentProject.links.length ? (
                     <span className="projectDetails__links">
                        {currentProject.links.map((link, i) => (
                           <a
                              href={link.link}
                              key={i}
                              className={i === 0 ? 'btn' : 'btn alternativeBtn'}
                              target="_blank"
                              rel="noreferrer"
                           >
                              {link.buttonText}
                           </a>
                        ))}
                     </span>
                  ) : (
                     ''
                  )}
               </div>
               <div className="projectDetails__description">
                  {currentProject.description}
               </div>
            </article>
         </div>
      </Fade>
   );
}

export default ProjectDetails;
