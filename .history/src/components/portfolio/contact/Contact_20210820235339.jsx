import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container">
      <Row>
          <h2 className='text-center'>Contact</h2>
        <Col className='col-sm-6' >
          <form id="contact-form" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>{" "}
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Col>
        <Col>

        </Col>
      </Row>
    </div>
  );
};

export default Contact;
