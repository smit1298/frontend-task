import React from "react";
import {Link}
import { Row } from "react-bootstrap";
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
  return (
    <div className="container-fluid">
      <Row id="general">
        <div className="col-md-4 text-center pt-3">
          <img src={me} alt="Isaiah Temitope" style={mystyle} />
        </div>
        <div className="col-md-4 text-center pt-3">
          <h2>Temitope Samson Isaiah</h2>
          <h4>
            HNG/ZURI Internship:<Link to="https://training.zuri.team/enrollment" onclick="window.open('https://training.zuri.team/enrollment')">🌏</Link>
          </h4>
          <h6>
            <i>Tel: +2348130134671</i> <br />
          </h6>
          <h6>
            <i>Email: isaiahtemitope4@gmail.com</i>
          </h6>
        </div>

        <div className="col-md-4 text-center pt-3">
          <img src={zuri} alt="Zuri-intern" style={mystyle} />
        </div>
      </Row>
    </div>
  );
};

export default Application;
