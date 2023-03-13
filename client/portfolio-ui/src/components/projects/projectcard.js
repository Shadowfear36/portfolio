import React from 'react'
import './projectcard.css';
import { BsGithub } from "react-icons/bs";

export default function ProjectCard() {
  return (
    <div className="card">
        <div id="card-header">
            <h3>Project Name</h3>
            <BsGithub size={21} />
        </div>
        <img src="https://place-hold.it/250X200"/>
        <div id="card-info-wrapper">
            <p>Project Description Goes Here</p>
            <button>View More</button>
        </div>

    </div>
  )
}
