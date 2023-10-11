import React from 'react';
import { Link } from 'react-router-dom';
import './pageNotFound.css';

const PageNotFound = () => {
   return (
      <div className="pageNotFoundContainer">
         <div className="pageNotFoundContent">
            Sorry, this page can't be found. Please visit the{' '}
            <Link to="/" className="homePageLink">
               home page
            </Link>
         </div>
      </div>
   );
};

export default PageNotFound;
