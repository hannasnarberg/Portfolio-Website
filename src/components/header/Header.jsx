import React from 'react';
import './header.css';

function Header() {
   return (
      <header>
         <div className="container header__container">
            <h3>Hello I'm</h3>
            <h1 className="header__title-first">HANNA</h1>
            <h1 className="header__title-last">SNARBERG</h1>
            <h3 className="header__description">
               {' '}
               A Media Technology Student{' '}
            </h3>
         </div>
      </header>
   );
}

export default Header;
