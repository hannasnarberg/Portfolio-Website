import React from 'react';
import './navigation.css';
import { AiOutlineHome } from 'react-icons/ai';

function Navigation() {
   return (
      <nav>
         <a href="#">
            <AiOutlineHome />
         </a>
         <a href="#about">About</a>
         <a href="#skills">Skills</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
      </nav>
   );
}

export default Navigation;
