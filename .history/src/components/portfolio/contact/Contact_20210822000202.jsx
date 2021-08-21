import React from "react";
import { useForm } from "@formcarry/react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
const send ={
  
}
  // Call the `useForm` hook as function component
  const { state, submit } = useForm({
    id: "hrLefeyD3m-"
  });

  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }
  return (
    <div className="container">
      <Row id="foot">
        <h2 className="text-center">Contact</h2>
        <Col className="ms-2 my-4">
          <form onSubmit={submit} id="contact-form">
            <div className="form-group">
              <input
                className="form-control mb-4"
                type="text"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                className="form-control mb-4"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control mb-4"
                placeholder="Your message"
              ></textarea>
            </div>

            <button style={send} type="submit">Send</button>
          </form>
        </Col>
        <Col className="me-2 my-4">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                title="my location"
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
