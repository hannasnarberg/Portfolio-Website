import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import ContactOption from './ContactOption';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_jfrafc5',
            'template_t6k0rxb',
            form.current,
            'pqBf3m2pX03dpA4Tt'
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   };

   return (
      <section id="contact">
         <h5> Get in Touch</h5>
         <h2> Contact Me</h2>
         <div className="container contact__container">
            <div className="contact__options">
               <ContactOption
                  icon={<MdOutlineEmail className="contact__option-icon" />}
                  option={'Email'}
                  me={'hannasnaris@gmail.com'}
                  reference={'mailto:hannasnaris@gmail.com'}
                  prompt={'Send me an email'}
               />
               <ContactOption
                  icon={<BsLinkedin className="contact__option-icon" />}
                  option={'LinkedIn'}
                  me={'/hanna-snarberg'}
                  reference={'https://www.linkedin.com/in/hanna-snarberg/'}
                  prompt={'Check out my profile'}
               />
            </div>
            <form ref={form} onSubmit={sendEmail}>
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
