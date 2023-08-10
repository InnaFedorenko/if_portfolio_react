import React from "react";
import { Link } from "react-bootstrap";

const Logo = ({ linkTo, logoSrc, altText }) => {
    return (
      <Link to={linkTo}>
        <img src={logoSrc} alt={altText} />
      </Link>
    );
  };

export default GitLogo;