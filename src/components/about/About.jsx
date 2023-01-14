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
               <p className="about__description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
               </p>
               <a href={CV} download className="btn btn-primary">
                  Download CV
               </a>
            </div>
         </div>
      </section>
   );
}

export default About;
