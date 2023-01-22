import Modal from 'react-modal';
import React from 'react';
import './projects.css';
import { AiOutlineClose } from 'react-icons/ai';

function ProjectModal({ currentProject, closeDetails }) {
   Modal.defaultStyles = {};
   function closeModal() {
      closeDetails();
   }

   return (
      <Modal
         isOpen={currentProject}
         onRequestClose={closeModal}
         contentLabel="Modal"
         closeTimeoutMS={400}
      >
         <article key={currentProject.id} className="project__details">
            <div className="project__info">
               <div className="project__picture">
                  <img src={currentProject.image} alt={currentProject.title} />
               </div>
               <div>
                  <div className="project__wrapper">
                     <h3> {currentProject.title} </h3>
                     {currentProject.links.length ? (
                        <span className="project__links">
                           {currentProject.links.map((link) => (
                              <a
                                 href={link.link}
                                 className="btn btn-primary"
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
                  <p className="project__desription">
                     {currentProject.description}
                  </p>
               </div>
            </div>
            <button onClick={() => closeModal()} className="project__close">
               <AiOutlineClose />
            </button>
         </article>
      </Modal>
   );
}

export default ProjectModal;
