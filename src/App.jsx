import React from 'react';
import ProjectDetails from './components/projects/ProjectDetails';
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import MainPage from './components/mainPage';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<MainPage />} />
         <Route path="/:projectUrl" element={<ProjectDetails />} />
      </Route>
   )
);

function App() {
   return (
      <>
         <RouterProvider router={router}></RouterProvider>
      </>
   );
}

export default App;
