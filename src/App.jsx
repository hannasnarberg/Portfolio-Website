import React from 'react';
import Header from './components/header/Header';
import Navigator from './components/navigator/Navigator';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectDetails from './components/projects/ProjectDetails';
import ProjectsOverview from './components/projects/ProjectsOverview';
import './assets/font/Courgette-Regular.ttf';
import { useState } from 'react';
import ProjectModal from './components/projects/ProjectModal';

function App() {
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <>
         {currentProject && (
            <ProjectModal
               currentProject={currentProject}
               closeDetails={() => setCurrentProject(null)}
            />
         )}
         <Navigator />
         <Header />
         <About />
         <Skills />
         <ProjectsOverview
            setCurrentProject={(project) => setCurrentProject(project)}
         />
         <Contact />
      </>
   );
}

export default App;

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'blue',
      background: 'grey',
   },
};

function App() {
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
      setIsOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <div>
         <button onClick={openModal}>Open Modal</button>
         <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
               <input />
               <button>tab navigation</button>
               <button>stays</button>
               <button>inside</button>
               <button>the modal</button>
            </form>
         </Modal>
      </div>
   );
}

export default App;*/
