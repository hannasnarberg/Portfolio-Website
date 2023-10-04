import React from 'react';
import './navigation.css';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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

   // function scrollTo(ref) {
   //    const reference = document.getElementById(ref);
   //    if (!reference) {
   //       return;
   //    }
   //    reference.scrollIntoView({ behavior: 'smooth' });
   // }

   return (
      <nav className={solidNavBar ? 'navSolid' : ''}>
         <HashLink to="/#home" className="navHome" smooth>
            Hanna{' '}
         </HashLink>
         <HashLink to="/#about" className="navAbout" smooth>
            About
         </HashLink>
         <HashLink to="/#skills" smooth>
            Skills
         </HashLink>
         <HashLink to="/#projects" smooth>
            Projects
         </HashLink>
         <HashLink to="/#contact" smooth>
            Contact
         </HashLink>
      </nav>
   );
}

export default Navigation;
