import React from 'react';
import './navigator.css';
import { AiOutlineHome } from 'react-icons/ai';
import { useState } from 'react';

function Navigator() {
   const [activeNav, setActiveNav] = useState('#'); //not working with the classname.Stylings don't stick
   return (
      <nav>
         <a
            href="#"
            onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' : ''}
         >
            Home
         </a>
         <a
            href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
         >
            About
         </a>
         <a
            href="#skills"
            onClick={() => setActiveNav('#skills')}
            className={activeNav === '#skills' ? 'active' : ''}
         >
            Skills
         </a>
         <a
            href="#projects"
            onClick={() => setActiveNav('#projects')}
            className={activeNav === '#projects' ? 'active' : ''}
         >
            Projects
         </a>
         <a
            href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
         >
            Contact
         </a>
      </nav>
   );
}

export default Navigator;
