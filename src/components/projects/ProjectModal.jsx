import Modal from 'react-modal';
import React from 'react';
import './projects.css';
import { AiOutlineClose } from 'react-icons/ai';
import App from '../../App';

function ProjectModal({ currentProject, closeDetails }) {
   Modal.defaultStyles = {};
   //Modal.setAppElement(App); förut hade jag också inga paranteser på closemodal()
   function closeModal() {
      {
         closeDetails();
      }
   }
   return (
      <Modal
         isOpen={currentProject}
         onRequestClose={closeModal}
         contentLabel="Example Modal"
         closeTimeoutMS={400}
      >
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
            <a onClick={() => closeModal()} className="project__close">
               <AiOutlineClose />
            </a>
         </article>
      </Modal>
   );
}

export default ProjectModal;
