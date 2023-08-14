import React from "react";
import { Link } from 'react-router-dom';

export default function Logo ({socialMedia}) {
    return (
      <Link to={socialMedia.url}>
        {socialMedia.name === 'GitHub' &&
        <img src="src/assets/images/socialmedia/github.svg" 
                alt="GitHub Logo" 
                className="git-logo me-2"
                style={{ width: '20px' }} needed                
                />
        }
        {socialMedia.name === 'Linkedin' && 
        <img src="src/assets/images/socialmedia/linkedin.svg"
                alt="LinkedIn Logo"
                className="linkedin-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      {socialMedia.name === 'Twitter' &&
        <img src="src/assets/images/socialmedia/twitter.svg"
                alt="Twitter Logo"
                className="twitter-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      {socialMedia.name === 'Email' &&
        <img src="src/assets/images/socialmedia/email.svg"
                alt="Email Logo"
                className="email-logo me-2"
                style={{ width: '20px' }} 
                />
      }
      </Link>
    );
  };

