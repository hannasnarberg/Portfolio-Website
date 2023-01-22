import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import CV from '../../assets/CV_Hanna_Snarberg.pdf';

function About() {
   return (
      <section id="about">
         <h2>About me</h2>
         <div className="container about__container">
            <div className="about__me">
               <img src={ME} alt="me" />
            </div>
            <div className="about__content">
               <p>
                  Looking for a creative front-end developer or UX/UI-designer?
                  I am your (wo)man! I have a bachelor’s degree in Media
                  Technology from KTH and am currently in my first year at the
                  Interactive Media Technology master’s programme. This means I
                  have experience in designing, developing and evaluating
                  interactive products and researching topics related to
                  human-computer interaction. I highly value accessibility and
                  sustainability and have taken additional courses in those
                  areas. Other than that, I love painting and sports activities
                  of all sorts. Please take a look at my CV or scroll down to
                  see some of my projects.
               </p>
               <a href={CV} download className="btn">
                  Download CV
               </a>
            </div>
         </div>
      </section>
   );
}

export default About;
