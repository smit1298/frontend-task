import React, {useState}from "react";
import MapPicker from 'react-google-map-picker'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'


const DefaultLocation = { lat: 10, lng: 106};
const DefaultZoom = 10;

const Contact = () => {
    
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }
  
  return (
    <div className="container">
      <Row id='foot'>
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
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Col>
        <Col className='col-sm-6'>

        </Col>
      </Row>
    </div>
  );
};

export default Contact;
