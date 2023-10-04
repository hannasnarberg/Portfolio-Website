import Modal from 'react-modal';
import React from 'react';
import './projectsModal.css';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function ProjectModal({ currentProject, closeDetails }) {
   Modal.defaultStyles = {};
   function closeModal() {
      closeDetails();
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
            <div className="projectModal__details-wrapper">
               <article
                  key={currentProject.id}
                  className="projectModal__details"
               >
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
                                 className={
                                    i === 0 ? 'btn' : 'btn alternativeBtn'
                                 }
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
            </div>
            <button
               onClick={() => closeModal()}
               className="projectModal__close"
            >
               <IconContext.Provider value={{ color: '#c9c0d1', size: '22px' }}>
                  <div>
                     <AiOutlineClose />
                  </div>
               </IconContext.Provider>
            </button>
         </Modal>
      </>
   );
}

export default ProjectModal;
