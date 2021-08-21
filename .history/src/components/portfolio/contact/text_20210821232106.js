import React, { useState } from "react";
import emailjs from 'emailjs-com'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    // const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };

    const submit = () => {
        if (name && email && message) {

            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
  return (
    <div className="container">
      <Row id="foot">
        <h2 className="text-center">Contact</h2>
        <Col className="ms-2 my-4">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
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


// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <div className="container">
//       <Row id="foot">
//         <h2 className="text-center">Contact</h2>
//         <Col className="ms-2 my-4">
//           <form action='mailto:isaiahtemitope4@gmail.com'  id="contact-form" method="POST">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 aria-describedby="emailHelp"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5"></textarea>
//             </div>
//             <br />
//             <button type="submit" className="btn btn-primary mb-4">
//               Submit
//             </button>
//           </form>
//         </Col>
//         <Col className="me-2 my-4">
//           <div class="mapouter">
//             <div class="gmap_canvas">
//               <iframe
//               title='my location'
//                 class="gmap_iframe"
//                 width="100%"
//                 frameborder="0"
//                 scrolling="no"
//                 marginheight="0"
//                 marginwidth="0"
//                 src="https://maps.google.com/maps?width=342&amp;height=258&amp;hl=en&amp;q=abule taylor bus-stop moses babalola&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//               ></iframe>
//               <a href="https://www.fnfgo.com/">Friday Night Funkin Mods</a>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Contact;
<form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email"/>
 
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"/>
 
        <button type="submit">Send</button>
    </form>