// src/pages/ResumePage.jsx
//purpose: to display resume page
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import Skills from '../components/Skills';


export default function ResumePage (){
return (   
  <Container className="mt-5">
    {/* <h1>Your Resume</h1> */}
    <Skills />
    <a href="src/assets/cv/resume_IF_FSD.pdf" className="btn btn-dark btn-lg" download>
        Download CV
      </a>
  </Container>
)
};

