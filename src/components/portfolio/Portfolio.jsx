import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/how_to_save_a_life.png';
import PortfolioEntry from './PortfolioEntry';

const data = [
   {
      id: 1,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
   {
      id: 2,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
   {
      id: 3,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
   {
      id: 4,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
   {
      id: 5,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
   {
      id: 6,
      image: IMG1,
      title: 'Project Title',
      github: 'http://github.com',
      demo: 'http://dribble.com/Alien_pixels',
   },
];

function Portfolio() {
   return (
      <section id="portfolio">
         <h5> My Recent Work</h5>
         <h2>Portfolio</h2>
         <div className="container portfolio__container">
            {data.map(({ id, image, title, github, demo }) => {
               return (
                  <PortfolioEntry
                     id={id}
                     image={image}
                     title={title}
                     github={github}
                     demo={demo}
                  />
               );
            })}
         </div>
      </section>
   );
}

export default Portfolio;
