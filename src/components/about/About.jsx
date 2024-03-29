import React from 'react';
import './about.css';
import MyCV from '../../assets/CV.pdf';

function About() {
   return (
      <section id="about">
         <h2>About me</h2>
         <div className="container about__container">
            <p>
               Are you looking for a creative UX/UI Designer or Front-End
               Developer for a Master's Thesis project? As a student in
               Interactive Media Technology, I could be the perfect match! I
               have experience in designing, developing and evaluating
               interactive products, as well as researching human-computer
               interaction topics. I am also interested in sustainability and
               its relation to technology. Besides that, I like painting and
               sports activities of all sorts. To learn more about me, have a
               look at my CV or view some of my past projects below.
            </p>
            <a href={MyCV} download className="btn">
               Download CV
            </a>
         </div>
      </section>
   );
}

export default About;
