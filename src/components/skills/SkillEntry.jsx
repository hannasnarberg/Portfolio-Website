import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function SkillEntry({ skill, level }) {
   return (
      <article className="skill__details">
         <BsPatchCheckFill className="skill__details-icon" />
         <div>
            <h4>{skill}</h4>
            <small>{level}</small>
         </div>
      </article>
   );
}

export default SkillEntry;
