import React from 'react';
import './skills.css';
import SkillEntry from './SkillEntry';

function Skills() {
   /* I should definetley do mapping here to avoid repeating code*/
   return (
      <section id="skills">
         <h2>Skills</h2>
         <div className="container skill__container">
            <div>
               <h3>Languages</h3>
               <div className="skill__content">
                  <SkillEntry skill={'Python'} level={'Experienced'} />
                  <SkillEntry skill={'JavaScript'} level={'Experienced'} />
                  <SkillEntry skill={'HTML, CSS'} level={'Intermediete'} />
                  <SkillEntry skill={'Typescript'} level={'Basic'} />
                  <SkillEntry skill={'C#, C/C++'} level={'Basic'} />
               </div>
            </div>
            <div>
               <h3>Tools</h3>
               <div className="skill__content">
                  <SkillEntry skill={'React'} level={'Experienced'} />
                  <SkillEntry skill={'Node.js'} level={'Basic'} />
                  <SkillEntry skill={'MongoDB'} level={'Basic'} />
                  <SkillEntry skill={'Express'} level={'Basic'} />
                  <SkillEntry skill={'Unity'} level={'Basic'} />
               </div>
            </div>
            <div>
               <h3>Design</h3>
               <div className="skill__content">
                  <SkillEntry skill={'User Research'} level={'Experienced'} />
                  <SkillEntry
                     skill={'Usability Testing'}
                     level={'Experienced'}
                  />
                  <SkillEntry skill={'Prototyping'} level={'Experienced'} />
                  <SkillEntry skill={'Accessibility'} level={'Intermediate'} />
                  <SkillEntry skill={'Figma'} level={'Intermediate'} />
               </div>
            </div>
            {/* <div className="skill__bonus">
               <h3>Bonus Skills</h3>
               <div className="skill__content">
                  <SkillEntry skill={'Soccer'} level={'Experienced'} />
                  <SkillEntry skill={'Painting'} level={'Experienced'} />
                  <SkillEntry skill={`Baking`} level={'Intermediate'} />
                  <SkillEntry skill={'Karaoke'} level={'Intermediate'} />
               </div>
            </div> */}
         </div>
      </section>
   );
}

export default Skills;
