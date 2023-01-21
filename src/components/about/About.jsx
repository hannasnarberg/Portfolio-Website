import React from 'react';
import './about.css';
import ME from '../../assets/me.JPG';
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
               <p className="about__description">
                  I am a KTH student with a bachelor in Media Technology,
                  currently halfway through my first year at the Interactive
                  Media Technology master’s programme. This means I have
                  experience in designing, developing and evaluating interactive
                  products as well as researching topics related to
                  human-computer interaction
                  <br></br>
                  <br></br>
                  My dream job involves front-end development or UX/UI-design
                  and allows me to explore my creative sides. Topics I find
                  important, and have taken additional courses in, are
                  accessibility and sustainability. Other than that, I have a
                  big interest in painting and sports activities of all sorts.
                  Please have a look at my CV or scroll down to see some of my
                  projects.
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
