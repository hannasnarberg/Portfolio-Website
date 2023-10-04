import React from 'react';
import './header.css';

function Header() {
   return (
      <header id="home">
         <div className="container header__container">
            <h1 className="header__title-first">Hanna</h1>
            <h1 className="header__title-last">Snarberg</h1>
            <h3 className="header__subtitle">
               {' '}
               Interactive Media Technology Student
            </h3>
         </div>
      </header>
   );
}

export default Header;
