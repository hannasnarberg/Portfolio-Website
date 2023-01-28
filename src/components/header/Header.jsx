import React from 'react';
import './header.css';

function Header() {
   return (
      <header>
         <div className="container header__container">
            <div className="header__circle">
               <svg
                  className="header__circle-content"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
               >
                  <defs>
                     <path
                        id="circle"
                        d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                     />
                  </defs>
                  <text>
                     <textPath href="#circle">
                        Interactive Media Technology Student
                     </textPath>
                  </text>
               </svg>
            </div>
            <h1 className="header__title-first">Hanna</h1>
            <h1 className="header__title-last">Snarberg</h1>
            <h3 className="header__subtitle"> Welcome to my page!</h3>
         </div>
      </header>
   );
}

export default Header;
