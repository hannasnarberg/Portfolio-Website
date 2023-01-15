import React from 'react';
import './projects.css';
import ProjectsOverview from './ProjectsOverview';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import IMG1 from '../../assets/how_to_save_a_life.png';

function Projects() {
   const data = [
      {
         id: 1,
         image: IMG1,
         title: 'How to save a life',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
         id: 2,
         image: IMG1,
         title: 'Project Title2',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 3,
         image: IMG1,
         title: 'Project Title3',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 4,
         image: IMG1,
         title: 'Project Title4',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 5,
         image: IMG1,
         title: 'Project Title5',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 6,
         image: IMG1,
         title: 'Project Title6',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
   ];
   const [currentProject, setCurrentProject] = useState(null);
   return (
      <section id="projects">
         <h2>Projects</h2>
         {currentProject ? (
            <ProjectDetails
               currentProject={currentProject}
               onClose={() => setCurrentProject(null)}
            ></ProjectDetails>
         ) : (
            <ProjectsOverview
               setCurrentProject={(id) =>
                  setCurrentProject(data.find((project) => project.id === id))
               }
               data={data}
            ></ProjectsOverview>
         )}
      </section>
   );
}

export default Projects;
