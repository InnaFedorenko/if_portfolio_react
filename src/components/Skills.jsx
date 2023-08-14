// src/components/Skills.jsx
// purpose: This file contains the Skills component which is used to display the skills section of the portfolio page.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import skills from '../data/skills'; // Import skills array
export default function Skills() {
    return (
            <div>
              <h2>About me</h2>                
            <p className="text-gray-800 mb-8">
              I am a Full Stack Web Developer with a background in Business
              Administration and Management. I have a passion for learning and
              creating new things. I am a hard worker, a team player, and I am
              always looking for ways to improve my skills and knowledge. I am
              currently looking for a position as a Full Stack Web Developer.
            </p>                
              <h2>Skills</h2>
              <div className="mb-4 skills ">
                {skills.map((skill, index) => (
                  <span key={index} className="badge  bg-light me-2">{skill}</span>
                ))}
              </div>
            </div>
          );
};