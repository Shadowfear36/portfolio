import React from 'react'
import ProjectCard from './projectcard.js';
import './project.css';

export default function ProjectPage() {
  return (
    <div id="project-container" className="page-container">
        <h1 id="project-title">My Projects</h1>
        <ProjectCard/>
    </div>
  )
}
