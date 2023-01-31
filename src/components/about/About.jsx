import React from 'react';
import './about.css';
import MyPicture from '../../assets/pictures/me.png';
import MyCV from '../../assets/cv.pdf';

function About() {
   return (
      <section id="about">
         <h2>About me</h2>
         <div className="container about__container">
            <div className="about__image-container">
               <img src={MyPicture} alt="me" />
            </div>
            <div className="about__content">
               <p>
                  Looking for a creative UX/UI-designer or front-end developer
                  for a part time job or a summer internship? Look no further! I
                  am a KTH student with a bachelor’s degree in Media Technology,
                  currently in my first year at the Interactive Media Technology
                  master’s programme. This means I have experience in designing,
                  developing and evaluating interactive products and researching
                  topics related to human-computer interaction. I have also
                  taken additional courses in sustainability, a topic I find
                  very important. Other than that, I love painting and sports
                  activities of all sorts. Please take a look at my CV or scroll
                  down to view some of my projects.
               </p>
               <a href={MyCV} download className="btn">
                  Download CV
               </a>
            </div>
         </div>
      </section>
   );
}

export default About;
