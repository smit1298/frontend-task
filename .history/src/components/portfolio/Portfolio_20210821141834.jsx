import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  return (
    <div className="container-fluid">
      <Row>
        <h1 className="text-center">My Portfolio</h1>
        <div className="col-md-6">
          <div className="meet-me ms-4">
            <h2 className="text-center">About Me</h2>
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
              Fully proficient in &nbsp;
              <b>HTML, CSS, BOOTSTRAP, Javascript and ReactJs, </b>.
            </p>
          </div>

          <div className="education ms-4">
            <div>
              <h2 className="text-center">Education</h2>
              <dt>
                <h4>Ekiti State University</h4>
              </dt>
              <dl>Computer Engineering</dl>
              <dt>
                <h4>Alabian Solution Limited</h4>
              </dt>
              <dl>Mern Stack Developer</dl>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-center">Goals</h2>
          <p>
            During the course of my intern, i promise to be dedicated to
            whichever team am paired to work with as a frontend developer
          </p>
              <ol> <h4>Intern Objectives</h4> </ol>
              <li>working with other team members to carry out task</li>
              <li>making research to execute tasks when stucked or in dead end of task execution</li>
              <li>making progressive contribution to collaborators towards execution of task</li>
              <li>working towards deadline on all givern tasks</li>
         
        </div>
      </Row>
    </div>
  );
};

export default Portfolio;
