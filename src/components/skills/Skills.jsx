import React from 'react';
import './skills.css';
import SkillEntry from './SkillEntry';

function Skills() {
   return (
      <section id="skills">
         <h2>Skills</h2>
         <div className="container skill__container">
            <div>
               <h3>Languages</h3>
               <div className="skill__content">
                  <SkillEntry skill={'Python'} level={'Experienced'} />
                  <SkillEntry skill={'JavaScript'} level={'Experienced'} />
                  <SkillEntry skill={'HTML, CSS'} level={'Experienced'} />
                  <SkillEntry skill={'Typescript'} level={'Beginner'} />
                  <SkillEntry skill={'C#, C/C++'} level={'Beginner'} />
               </div>
            </div>
            <div>
               <h3>Tools</h3>
               <div className="skill__content">
                  <SkillEntry skill={'React'} level={'Experienced'} />
                  <SkillEntry skill={'Node.js'} level={'Beginner'} />
                  <SkillEntry skill={'MongoDB'} level={'Beginner'} />
                  <SkillEntry skill={'Express'} level={'Beginner'} />
                  <SkillEntry skill={'Unity'} level={'Beginner'} />
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
         </div>
      </section>
   );
}

export default Skills;
