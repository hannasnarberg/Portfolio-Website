import React from 'react';
import './contact.css';

function ContactOption({ icon, option, me, reference, prompt }) {
   return (
      <article className="contact__option">
         {icon}
         <h4>{option}</h4>
         <h5>{me}</h5>
         <a href={reference} target="_blank" rel="noreferrer">
            {prompt}
         </a>
      </article>
   );
}

export default ContactOption;