import React, { useRef } from 'react';
import './contact.css';
import ContactOption from './ContactOption';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
   return (
      <section id="contact">
         <h2> Contact Me</h2>
         <div className="container contact__container">
            <ContactOption
               icon={<MdOutlineEmail className="contact__option-icon" />}
               me={'hannasnaris@gmail.com'}
               reference={'mailto:hannasnaris@gmail.com'}
               prompt={'Send me an email'}
            />
            <ContactOption
               icon={<BsLinkedin className="contact__option-icon" />}
               me={'/hanna-snarberg'}
               reference={'https://www.linkedin.com/in/hanna-snarberg/'}
               prompt={'Check out my profile'}
            />
            <ContactOption
               icon={<BsLinkedin className="contact__option-icon" />}
               me={'/hanna-snarberg'}
               reference={'https://www.linkedin.com/in/hanna-snarberg/'}
               prompt={'Check out my profile'}
            />
         </div>
      </section>
   );
}

export default Contact;
