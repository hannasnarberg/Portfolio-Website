import React from 'react';
import './footer.css';

function Footer() {
   return (
      <footer>
         <a href="#" className="footer__logo">
            HANNASNARBERG
         </a>
         <ul className="permalinks">
            <li>
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Skills</a>
               <a href="#">Contact</a>
            </li>
         </ul>
      </footer>
   );
}

export default Footer;
