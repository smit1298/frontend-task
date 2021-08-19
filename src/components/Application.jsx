import React from "react";
import { Container, Row } from "react-bootstrap";
import me from "./Assets/images/Temitope.jpeg";
import zuri from "./Assets/images/zuri.jpg";
import "./Application.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Application = () => {
  const rowStyle = {
    border: "1px solid #000",
    borderRadius: "20px 0px 20px 0px",
    margin: "10px 0px 10px 0",
    paddingBottom: "10px"
  };
  const mystyle = {
    height: "150px",
    width: "150px",
    border: "3px solid #000",
    borderRadius: "100%"
  };
  return (
    <Container>
      <Row style={rowStyle}>
        <div className="header">
          <div className="col">
            <img
              src={me}
              alt="Isaiah Temitope"
              classname="me"
              style={mystyle}
            />
          </div>
          <div className="col-6 text-center">
            <h2>Temitope Samson Isaiah</h2>
            <h2>
              HNG/ZURI:<a href="https://training.zuri.team/enrollment">🌏</a>
            </h2>
            <h6>
              <i>Tel: +2348130134671</i> <br />
            </h6>
            <h6 className="align-center">
              <i>Email: isaiahtemitope4@gmail.com</i>
            </h6>
          </div>

          <div className="col">
            <img
              src={zuri}
              alt="Zuri-intern"
              className="zuri"
              style={mystyle}
            />
          </div>
        </div>
        <div className="body">
            
        </div>
      </Row>
    </Container>
  );
};

export default Application;
