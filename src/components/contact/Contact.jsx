import React from 'react';
import './contact.css';
import ContactOption from './ContactOption';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
   return (
      <section id="contact">
         <h5> Get in Touch</h5>
         <h2> Contact Me</h2>
         <div className="container contact__container">
            <div className="contact__options">
               <ContactOption
                  icon={<MdOutlineEmail />}
                  option={'Email'}
                  me={'hannasnaris@gmail.com'}
                  reference={'mailto:hannasnaris@gmail.com'}
                  prompt={'Send me an email'}
               />
               <ContactOption
                  icon={<BsLinkedin />}
                  option={'LinkedIn'}
                  me={'/hanna-snarberg'}
                  reference={'https://www.linkedin.com/in/hanna-snarberg/'}
                  prompt={'Check out my profile'}
               />
            </div>
            <form action="">
               <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
               ></input>
               <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
               ></input>
               <textarea
                  name="message"
                  rows="7"
                  placeholder="Your message"
                  required
               ></textarea>
               <button type="submit" className="btn btn-primart">
                  Send message
               </button>
            </form>
         </div>
      </section>
   );
}

export default Contact;
