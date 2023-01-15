import React from 'react';
import './projects.css';
import ProjectsOverview from './ProjectsOverview';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import IMG1 from '../../assets/how_to_save_a_life.png';
import IMG2 from '../../assets/Portfolio-trappkonst.svg';
import IMG3 from '../../assets/hide-and-meet-1.png';
import IMG4 from '../../assets/portfolio-humper.svg';
import IMG5 from '../../assets/Storyhunter.png';
import IMG6 from '../../assets/VR.svg';
import IMG7 from '../../assets/Information-kiosk.svg';
import IMG8 from '../../assets/Bländaren.svg';
import IMG9 from '../../assets/Hide_and_meet.svg';

function Projects() {
   const data = [
      {
         id: 1,
         image: IMG5,
         title: 'Storyhunter',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
         description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
         id: 2,
         image: IMG9,
         title: 'Hide and Meet',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },

      {
         id: 3,
         image: IMG4,
         title: 'Color Palettes & Memory',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 4,
         image: IMG6,
         title: 'Weight Perception in VR',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 5,
         image: IMG8,
         title: 'Bländaren',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },

      {
         id: 6,
         image: IMG7,
         title: 'Redesigning Information System',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 7,
         image: IMG1,
         title: 'How to Save a Life',
         github: 'http://github.com',
         demo: 'http://dribble.com/Alien_pixels',
      },
      {
         id: 8,
         image: IMG2,
         title: 'The Takeoff',
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
