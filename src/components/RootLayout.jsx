import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { ScrollRestoration } from 'react-router-dom';

export default function RootLayout() {
   return (
      <>
         <ScrollRestoration
            getKey={(location) => {
               return location.pathname;
            }}
         />
         <Navigation />
         <main>
            <Outlet />
         </main>
      </>
   );
}
