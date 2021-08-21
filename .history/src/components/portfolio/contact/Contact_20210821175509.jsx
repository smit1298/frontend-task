import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div classNameName="container">
      <Row id="foot">
        <h2 classNameName="text-center">Contact</h2>
        <Col classNameName="col-sm-6 ms-2">
          <form id="contact-form" method="POST">
            <div classNameName="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" classNameName="form-control" />
            </div>
            <div classNameName="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                classNameName="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div classNameName="form-group">
              <label htmlFor="message">Message</label>
              <textarea classNameName="form-control" rows="5"></textarea>
            </div>
            <br />
            <button type="submit" classNameName="btn btn-primary mb-4">
              Submit
            </button>
          </form>
        </Col>
        <Col classNameName="col-sm-6 ms-2">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://www.fnfgo.com/">Friday Night Funkin Mods</a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
