import React from 'react';
import './projectsEntry.css';
import { Link } from 'react-router-dom';

function ProjectsEntry({ id, image, title, urlParam, keyWords }) {
   return (
      <Link to={`/${urlParam}`} preventScrollReset={true}>
         <article key={id} className="projectsEntry">
            <img
               className="projectsImage"
               src={image}
               alt={title}
               loading="lazy"
            />
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
      </Link>
   );
}

export default ProjectsEntry;
