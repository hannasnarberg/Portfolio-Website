import React from 'react';
import './contact.css';

function ContactOption({ icon, me, reference }) {
   return (
      <article className="contact__option">
         <a href={reference} target="_blank" rel="noreferrer">
            {icon}
            <h5 className="contact_option-text">{me}</h5>
         </a>
      </article>
   );
}

export default ContactOption;
