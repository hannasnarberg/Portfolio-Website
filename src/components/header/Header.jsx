import React from 'react';
import './header.css';

function Header() {
   return (
      <header>
         <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Hanna Snarberg</h1>
            <h5 className="text-light"> Media Technology Student </h5>
         </div>
      </header>
   );
}

export default Header;
