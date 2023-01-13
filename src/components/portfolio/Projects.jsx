import React from 'react';
import './projects.css';
import IMG1 from '../../assets/how_to_save_a_life.png';
import ProjectsEntry from './ProjectsEntry';

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

function Projects() {
   return (
      <section id="projects">
         <h2>Projects</h2>
         <div className="container projects__container">
            {data.map(({ id, image, title, github, demo }) => {
               return (
                  <ProjectsEntry
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

export default Projects;
