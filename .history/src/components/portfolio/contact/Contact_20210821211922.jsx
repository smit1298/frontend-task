import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <Row id="foot">
        <h2 className="text-center">Contact</h2>
        <Col className="ms-2 my-4">
          <form action='mailto:isaiahtemitope4@gmail.com'  id="contact-form" method="POST">
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
            </div>
            <br />
            <button onC type="submit" className="btn btn-primary mb-4">
              Submit
            </button>
          </form>
        </Col>
        <Col className="me-2 my-4">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
              title='my location'
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=342&amp;height=258&amp;hl=en&amp;q=abule taylor bus-stop moses babalola&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
