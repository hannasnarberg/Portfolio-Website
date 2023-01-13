import React from 'react';
import './experience.css';
import ExperienceEntry from './ExperienceEntry';

function Experience() {
   return (
      <section id="experience">
         <h5>My skills</h5>
         <h2>My experience</h2>
         <div className="container experience__container">
            <div className="container experience__frontend">
               <h3>Frontend development</h3>
               <div className="experience__content">
                  <ExperienceEntry experience={'HTML'} level={'Experienced'} />
                  <ExperienceEntry experience={'CSS'} level={'Intermediate'} />
                  <ExperienceEntry
                     experience={'JavaScript'}
                     level={'Intermediate'}
                  />
                  <ExperienceEntry
                     experience={'Bootstrap'}
                     level={'Intermediate'}
                  />
                  <ExperienceEntry
                     experience={'Tailwind'}
                     level={'Experienced'}
                  />
               </div>
            </div>
            <div className="container experience__UX">
               <h3>User Experience</h3>
               <div className="experience__content">
                  <ExperienceEntry experience={'HTML'} level={'Experienced'} />
                  <ExperienceEntry
                     experience={'Accessibility'}
                     level={'Intermediate'}
                  />
                  <ExperienceEntry experience={'JavaScript'} level={'Basic'} />
                  <ExperienceEntry
                     experience={'Bootstrap'}
                     level={'Intermediate'}
                  />
                  <ExperienceEntry
                     experience={'Tailwind'}
                     level={'Experienced'}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Experience;
