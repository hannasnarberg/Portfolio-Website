import Modal from 'react-modal';
import React from 'react';
import './projects.css';
import { AiOutlineClose } from 'react-icons/ai';

function ProjectModal({ currentProject, closeDetails }) {
   Modal.defaultStyles = {};
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
               <div className="project__picture">
                  <img src={currentProject.image} alt={currentProject.title} />
               </div>
               <div>
                  <div className="wrapper">
                     <h3> {currentProject.title} </h3>
                     <span className="project__details-links">
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
                     </span>
                  </div>
                  <p className="project__desription">
                     {' '}
                     {currentProject.description}{' '}
                  </p>
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
