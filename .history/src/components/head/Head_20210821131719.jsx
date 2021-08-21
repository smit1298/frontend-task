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
        
        <div className="col-md-4 text-center pt-3">
          <img src={me} alt="Isaiah Temitope" style={mystyle} />
        </div>
        <div className="col-md-4 text-center pt-3">
          <h2>Temitope Samson Isaiah</h2>
          <h4 onClick={() => handleClick("https://training.zuri.team")}>
            HNG/ZURI Internship:🌏
          </h4>
          <h6>
            <i>Tel: +2348130134671</i> <br />
          </h6>
          <h4 >
            <FiMail onClick={() => handleClick("https://gmail.com")} />  &nbsp;
            <FiLinkedin onClick={() => handleClick("https://www.linkedin.com/in/isaiah-temitope-03b43a19a/")}/> &nbsp;
            <FiGithub onClick={() => handleClick("https://github.com/smit1298")} /> 
          </h4>
          
        </div>

        <div className="col-md-4 text-center pt-3">
          <img src={zuri} alt="Zuri-intern" style={mystyle} />
        </div>
      </Row>
      <div className='row' id="navy">

      </div>
    </div>
  );
};

export default Application;
