// src/components/Skills.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import skills from '../data/skills'; // Import skills array
export default function Skills() {
    return (
            <div>
              <h2>Skills</h2>
              <div className="mb-4">
                {skills.map((skill, index) => (
                  <span key={index} className="badge  me-2">{skill}</span>
                ))}
              </div>
            </div>
          );
};