import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function ExperienceEntry({ experience, level }) {
   return (
      <article className="experience__details">
         <BsPatchCheckFill className="experience__details-icon" />
         <div>
            <h4>{experience}</h4>
            <small className="text-light">{level}</small>
         </div>
      </article>
   );
}

export default ExperienceEntry;
