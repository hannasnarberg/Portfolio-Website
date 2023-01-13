import React from 'react';
import './portfolio.css';

function PortfolioEntry({ id, image, title, github, demo }) {
   return (
      <article key={id} className="portfolio__item">
         <div className="portfolio__item-image">
            <img src={image} alt={title} />
         </div>
         <h3> {title} </h3>
         <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
               Github
            </a>
            <a
               href={demo}
               className="btn btn-primary"
               target="_blank"
               rel="noreferrer"
            >
               Demo
            </a>
         </div>
      </article>
   );
}

export default PortfolioEntry;
