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
               <h3>Programming</h3>
               <div className="experience__content">
                  <ExperienceEntry
                     experience={'JavaScript'}
                     level={'Experienced'}
                  />
                  <ExperienceEntry
                     experience={'HTML, CSS'}
                     level={'Experienced'}
                  />
                  <ExperienceEntry
                     experience={'Python'}
                     level={'Experienced'}
                  />
                  <ExperienceEntry experience={'C#, C/C++'} level={'Basic'} />
               </div>
            </div>
            <div>
               <h3>Design</h3>
               <div className="experience__content">
                  <ExperienceEntry
                     experience={'User-centered design'}
                     level={'Experienced'}
                  />
                  <ExperienceEntry
                     experience={'Accessibility'}
                     level={'Experienced'}
                  />
                  <ExperienceEntry experience={'Figma'} level={'Basic'} />
                  <ExperienceEntry
                     experience={'Adobe Illustrator'}
                     level={'Basic'}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Experience;
