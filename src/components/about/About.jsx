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
                  Are you seeking a creative UX/UI Designer or Front-End
                  Developer for a part-time role or summer internship? As a
                  Master's degree student in Interactive Media Technology, I
                  could be the ideal match. I have experience in designing,
                  developing, and evaluating interactive products, as well as
                  researching human-computer interaction topics. I am also
                  interested in sustainability and its relation to technology.
                  Other than that, I enjoy painting and sports activities of all
                  sorts. To learn more about me, have a look at my CV or view
                  some of my past projects below.
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
