import React from "react";
import { Row } from "react-bootstrap";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import me from "../Assets/images/Temitope.jpeg";
import zuri from "../Assets/images/zuri1.jpg";
import "./Head.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Application = () => {
  const mystyle = {
    height: "150px",
    width: "150px",
    border: "3px solid #000",
    borderRadius: "100%"
  };

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div className="container-fluid">
      <Row >
        <div id="general">

        </div>
        
      </Row>
      <div className='row' id="navy">

      </div>
    </div>
  );
};

export default Application;
