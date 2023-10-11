import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import './projectsDetails.css';
import { Link } from 'react-router-dom';

function ProjectDetails({ currentProject }) {
   function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   useEffect(() => {
      topFunction();
   }, []);
   return (
      <div className="container projectDetails__container">
         <article key={currentProject.id} className="projectDetails__details">
            <img
               src={currentProject.compressedImage}
               alt={currentProject.title}
               className="projectDetails__img"
            />
            <div className="projectDetails__title-links">
               <Link to={'/'}>
                  <BiArrowBack className="projectDetails__BackIcon"></BiArrowBack>
               </Link>
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
   );
}

export default ProjectDetails;
