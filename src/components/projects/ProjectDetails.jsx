import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectsData';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './projectsDetails.css';

function ProjectDetails() {
   const { projectUrl } = useParams();
   const project = projectsData.find(
      (project) => project.urlParam === projectUrl
   );

   return <div>hfsldhfsldhfblsdhfbs</div>;
}

export default ProjectDetails;
