import React from 'react';
import './skills.css';
import { AiFillCheckCircle } from 'react-icons/ai';

function SkillEntry({ skill, level }) {
   return (
      <article className="skill__details">
         <AiFillCheckCircle className="skill__details-icon" />
         <div className="skill__details-text">
            <p>{skill}</p>
            <small>{level}</small>
         </div>
      </article>
   );
}

export default SkillEntry;
