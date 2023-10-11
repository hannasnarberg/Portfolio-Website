import React from 'react';
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import MainPage from './components/MainPage';
import projectsData from './components/projects/ProjectsData';
import ProjectDetails from './components/projects/projectDetails/ProjectDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';

const [
   RobinHoodCalculator,
   SlippedAway,
   StoryHunter,
   HideAndMeet,
   PreparingForTheFutureForAll,
   PlayBeyondPlay,
   ColorRelationsAndMemory,
   WeightPerceptionInVR,
   HowToSaveALife,
] = projectsData;

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<MainPage />} />
         <Route
            path="/Robin-Hood-Calculator"
            element={<ProjectDetails currentProject={RobinHoodCalculator} />}
         />
         <Route
            path="/Slipped-Away"
            element={<ProjectDetails currentProject={SlippedAway} />}
         />
         <Route
            path="/Story-Hunter"
            element={<ProjectDetails currentProject={StoryHunter} />}
         />
         <Route
            path="/Hide-and-Meet"
            element={<ProjectDetails currentProject={HideAndMeet} />}
         />
         <Route
            path="/Preparing-for-the-Future-for-All"
            element={
               <ProjectDetails currentProject={PreparingForTheFutureForAll} />
            }
         />
         <Route
            path="/Play-Beyond-Play"
            element={<ProjectDetails currentProject={PlayBeyondPlay} />}
         />
         <Route
            path="/Color-Relations-and-Memory"
            element={
               <ProjectDetails currentProject={ColorRelationsAndMemory} />
            }
         />
         <Route
            path="/Weight-Perception-in-VR"
            element={<ProjectDetails currentProject={WeightPerceptionInVR} />}
         />
         <Route
            path="/How-to-Save-a-Life"
            element={<ProjectDetails currentProject={HowToSaveALife} />}
         />
         <Route path="*" element={<PageNotFound />} />
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
