import './contact.css';
import ContactOption from './ContactOption';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';

function Contact() {
   return (
      <section id="contact">
         <h2>Contact Me</h2>
         <Fade cascade duration={2000} damping={0.9}>
            <div className="container contact__container">
               <ContactOption
                  icon={<MdOutlineEmail className="contact__option-icon" />}
                  me={'hanna.m.snarberg@gmail.com'}
                  reference={'mailto:hanna.m.snarberg@gmail.com'}
               />
               <ContactOption
                  icon={<BsLinkedin className="contact__option-icon" />}
                  me={'/hanna-snarberg'}
                  reference={'https://www.linkedin.com/in/hanna-snarberg/'}
               />
               <ContactOption
                  icon={<BsGithub className="contact__option-icon" />}
                  me={'/hannasnarberg'}
                  reference={'https://www.github.com/hannasnarberg/'}
               />
            </div>
         </Fade>
      </section>
   );
}

export default Contact;
