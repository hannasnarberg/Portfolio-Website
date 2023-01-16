import Modal from 'react-modal';
import React from 'react';
import './projects.css';

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
      >
         <h2>
            Hello fkjbslkfjbaskdfbaksjdbfaksjbdflakjs askdjfbksjbfksjbfkbs
            skjbksbfksb ksjdbfaksbfkasbdf aksbdfksb askdfbaksbfkasjbfkb ksdb
            kajsbfk sdkfb skdfbksbd kb skbfkbs kfb Hello
            fkjbslkfjbaskdfbaksjdbfaksjbdflakjs askdjfbksjbfksjbfkbs skjbksbfksb
            ksjdbfaksbfkasbdf aksbdfksb askdfbaksbfkasjbfkb ksdb kajsbfk sdkfb
            skdfbksbd kb skbfkbs kfb Hello fkjbslkfjbaskdfbaksjdbfaksjbdflakjs
            askdjfbksjbfksjbfkbs skjbksbfksb ksjdbfaksbfkasbdf aksbdfksb
            askdfbaksbfkasjbfkb ksdb kajsbfk sdkfb skdfbksbd kb skbfkbs kfb
            Hello fkjbslkfjbaskdfbaksjdbfaksjbdflakjs askdjfbksjbfksjbfkbs
            skjbksbfksb ksjdbfaksbfkasbdf aksbdfksb askdfbaksbfkasjbfkb ksdb
            kajsbfk sdkfb skdfbksbd kb skbfkbs kfb Hello
            fkjbslkfjbaskdfbaksjdbfaksjbdflakjs askdjfbksjbfksjbfkbs skjbksbfksb
            ksjdbfaksbfkasbdf aksbdfksb askdfbaksbfkasjbfkb ksdb kajsbfk sdkfb
            skdfbksbd kb skbfkbs kfb Hello fkjbslkfjbaskdfbaksjdbfaksjbdflakjs
            askdjfbksjbfksjbfkbs skjbksbfksb ksjdbfaksbfkasbdf aksbdfksb
            askdfbaksbfkasjbfkb ksdb kajsbfk sdkfb skdfbksbd kb skbfkbs kfb
         </h2>
         <button onClick={() => closeDetails()}>close</button>
         <div>{currentProject.id}</div>
         <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
         </form>
      </Modal>
   );
}

export default ProjectModal;
