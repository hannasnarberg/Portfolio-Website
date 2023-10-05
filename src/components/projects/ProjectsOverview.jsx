import React from 'react';
import './projectsOverview.css';
import projectsData from './ProjectsData';
import ProjectsEntry from './ProjectsEntry';
import { Fade } from 'react-awesome-reveal';

function ProjectsOverview() {
   return (
      <section id="projects">
         <h2>Projects</h2>
         <div className="container projectsOverview__container">
            {projectsData.map(
               ({ id, compressedImage, title, urlParam, keyWords }, index) => {
                  return (
                     <Fade key={id} triggerOnce duration={2000}>
                        <ProjectsEntry
                           id={id}
                           image={compressedImage}
                           title={title}
                           urlParam={urlParam}
                           keyWords={keyWords}
                        />
                     </Fade>
                  );
               }
            )}
         </div>
      </section>
   );
}

export default ProjectsOverview;
