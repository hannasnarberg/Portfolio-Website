import React from 'react';
import './projectsEntry.css';

function ProjectsEntry({ id, image, title, keyWords, setCurrentProject }) {
   return (
      <article
         key={id}
         className="projectsEntry"
         onClick={() => setCurrentProject(id)}
      >
         <img src={image} alt={title} />
         <h3> {title} </h3>
         <div className="projectsEntry__keywords-container">
            {keyWords.map((keyWord, i) =>
               i === keyWords.length - 1 ? (
                  <span key={i} className="projectsEntry__keyWords">
                     {keyWord}
                  </span>
               ) : (
                  <span key={i} className="projectsEntry__keyWords">
                     {' '}
                     {keyWord},{' '}
                  </span>
               )
            )}
         </div>
      </article>
   );
}

export default ProjectsEntry;
