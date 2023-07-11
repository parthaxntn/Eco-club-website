import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import "./DevelopingCalling.css";

const DevelopingCalling = ({ data }) => {
  const { name, desig, linkedin, github } = data;

  return (
    <div className="dev-container">
      <div className="im-container">
        <img src={data.src.logo} alt="placeholder" className="profile-pic" />
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="dev-details">
        <h5>{name}</h5>
        <p>{desig}</p>
      </div>
    </div>
  );
};

export default DevelopingCalling;
