import React from 'react';
import './experience.css';
import ExperienceEntry from './ExperienceEntry';

function Experience() {
   /* I should definetley do mapping here to avoid repeating code*/
   return (
      <section id="experience">
         <h2>My skills</h2>
         <div className="container experience__container">
            <div>
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
            <div>
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
