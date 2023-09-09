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

   return (
      <nav className={solidNavBar ? 'navSolid' : ''}>
         <a href="#" className="navHome">
            Hanna
         </a>
         <a href="#about" className="navAbout">
            About
         </a>
         <a href="#skills">Skills</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
      </nav>
   );
}

export default Navigation;
