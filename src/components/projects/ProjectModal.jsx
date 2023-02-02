import Modal from 'react-modal';
import React from 'react';
import './projectsModal.css';
import { AiOutlineClose } from 'react-icons/ai';

function ProjectModal({ currentProject, closeDetails, windowOffset }) {
   Modal.defaultStyles = {};
   function closeModal() {
      closeDetails();
      document.body.setAttribute('style', '');
      window.scrollTo({ top: windowOffset, behavior: 'instant' });
   }
   Modal.setAppElement('body');

   return (
      <>
         <Modal
            isOpen={currentProject ? true : false}
            onRequestClose={closeModal}
            contentLabel="Modal"
            closeTimeoutMS={400}
         >
            <article key={currentProject.id} className="projectModal__details">
               <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="projectModal__img"
               />
               <div className="projectModal__title-links">
                  <h3> {currentProject.title} </h3>
                  {currentProject.links.length ? (
                     <span className="projectModal__links">
                        {currentProject.links.map((link, i) => (
                           <a
                              href={link.link}
                              key={i}
                              className="btn"
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
               <div className="projectModal__description">
                  {currentProject.description}
               </div>
            </article>
            <button
               onClick={() => closeModal()}
               className="projectModal__close"
            >
               <AiOutlineClose />
            </button>
         </Modal>
      </>
   );
}

export default ProjectModal;
