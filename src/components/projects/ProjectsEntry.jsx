import React from 'react';
import './projects.css';

function ProjectsEntry({
   id,
   image,
   title,
   keyWords,
   shortDescription,
   setCurrentProject,
}) {
   console.log(keyWords);
   return (
      <article
         key={id}
         className="projects__item"
         onClick={() => setCurrentProject(id)}
      >
         <div className="projects__item-image">
            <img src={image} alt={title} />
         </div>
         <h3> {title} </h3>
         <div className="__projects__keywords-container">
            {keyWords.map((keyWord, i) =>
               i === keyWords.length - 1 ? (
                  <span className="projects__keyWords">{keyWord}</span>
               ) : (
                  <span className="projects__keyWords"> {keyWord}, </span>
               )
            )}
         </div>
         <p className="projects__shortDesription">{shortDescription}</p>
      </article>
   );
}

export default ProjectsEntry;
