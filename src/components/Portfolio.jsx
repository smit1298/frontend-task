import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  return (
    <div className="container-fluid">
      <Row>
        <h1 className="text-center">My Profile</h1>
        <div className="col-md-6">
          <div className="meet-me ms-4">
            <h2 className="text-center">Meet Me</h2>
            <p>
              Inventive Web Developer creates novel site designs and innovative
              user interfaces. Known for architecting customer-facing products
              that deliver unique experiences while complying with internal
              coding standards and technical requirements. Clever provider of
              fresh assets to grow usership. Knowledgeable Front End Developer
              adept at creating successful websites that meet customer needs.
              Specializing in collaborating with clients to gather requirements,
              produce plans and improve designs for usability and functionality.
            </p>
            <p>
              Fully proficient in
              <b>HTML, CSS, BOOTSTRAP, Javascript and ReactJs </b>.
            </p>
          </div>

          <div className="education ms-4">
            <div>
              <h2 className="text-center">Education</h2>
              <dd>
                <h3>Ekiti State University</h3>
              </dd>{" "}
              <dl>Computer Engineering</dl>
              <dl>Computer Engineering</dl>
              <dd>
                <h3>Alabian Solutions Limited</h3>
              </dd>
              <dl>MERN stack developer</dl>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>mike</h2>
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
