import React from 'react';
import './header.css';

function Header() {
   return (
      <header>
         <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1 className="header__title-first">HANNA</h1>
            <h1 className="header__title-last">SNARBERG</h1>
            <h5 className="header__description"> Media Technology Student </h5>
         </div>
      </header>
   );
}

export default Header;
