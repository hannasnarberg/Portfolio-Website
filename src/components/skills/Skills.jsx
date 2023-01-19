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
               <h3>Programming</h3>
               <div className="skill__content">
                  <SkillEntry skill={'JavaScript'} level={'Intermediete'} />
                  <SkillEntry skill={'HTML, CSS'} level={'Intermediete'} />
                  <SkillEntry skill={'Python'} level={'Experienced'} />
                  <SkillEntry skill={'C#, C/C++'} level={'Basic'} />
               </div>
            </div>
            <div>
               <h3>Design</h3>
               <div className="skill__content">
                  <SkillEntry skill={'UX-Design'} level={'Experienced'} />
                  <SkillEntry skill={'Accessibility'} level={'Experienced'} />
                  <SkillEntry skill={'Figma'} level={'Basic'} />
                  <SkillEntry skill={'User Research'} level={'Experienced'} />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Skills;
