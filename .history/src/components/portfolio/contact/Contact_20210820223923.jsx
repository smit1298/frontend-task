import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

const Contact = () => {
  return (
    <div classN="mb-4">

    <!--Section heading-->
    <h2 classN="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p classN="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div classN="row">

        <!--Grid column-->
        <div classN="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div classN="row">

                    <!--Grid column-->
                    <div classN="col-md-6">
                        <div classN="md-form mb-0">
                            <input type="text" id="name" name="name" classN="form-control">
                            <label for="name" classN="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div classN="col-md-6">
                        <div classN="md-form mb-0">
                            <input type="text" id="email" name="email" classN="form-control">
                            <label for="email" classN="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div classN="row">
                    <div classN="col-md-12">
                        <div classN="md-form mb-0">
                            <input type="text" id="subject" name="subject" classN="form-control">
                            <label for="subject" classN="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div classN="row">

                    <!--Grid column-->
                    <div classN="col-md-12">

                        <div classN="md-form">
                            <textarea type="text" id="message" name="message" rows="2" classN="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div classN="text-center text-md-left">
                <a classN="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div classN="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div classN="col-md-3 text-center">
            <ul classN="list-unstyled mb-0">
                <li><i classN="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i classN="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i classN="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
  );
};

export default Contact;
