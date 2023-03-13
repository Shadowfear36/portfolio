import React from 'react';
import Typewriter from "typewriter-effect";
import './landing.css';

export default function LandingPage() {
  return (
    <div id="landing-container" className="page-container">
      <h2>></h2>
      <Typewriter
  
        onInit={(typewriter)=> {

        typewriter
        
        .typeString("hello")
          
        .pauseFor(700)
        .deleteAll()
        .typeString("my name is dylan")
        .pauseFor(700)
        .deleteAll()
        .typeString(`<a id="typewriter-text-link" href="http://localhost:3000/projects">click to check out my projects</a>`)
        .start();
        }}
      />
    </div>
  )
}


