import React from 'react';
import './navigation.css';
import { useState } from 'react';

function Navigation() {
   const [solidNavBar, setSolidNavbar] = useState(false);

   function scrollFunction() {
      if (
         document.body.scrollTop > 20 ||
         document.documentElement.scrollTop > 20
      ) {
         setSolidNavbar(true);
      } else {
         setSolidNavbar(false);
      }
   }

   window.onscroll = function () {
      scrollFunction();
   };

   function scrollTo(ref) {
      const reference = document.getElementById(ref);
      if (!reference) {
         return;
      }
      reference.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <nav className={solidNavBar ? 'navSolid' : ''}>
         <a href="home" className="navHome" onClick={() => scrollTo('header')}>
            Hanna{' '}
         </a>
         <a onClick={() => scrollTo('about')} className="navAbout">
            About
         </a>
         <a onClick={() => scrollTo('skills')}>Skills</a>
         <a onClick={() => scrollTo('projects')}>Projects</a>
         <a onClick={() => scrollTo('contact')}>Contact</a>
      </nav>
   );
}

export default Navigation;
