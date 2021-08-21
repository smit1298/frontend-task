import React, { useState } from 'react'

const Contact = () => {
    return (
        <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email address" />
            <textarea placeholder="Your message"></textarea>
            <button>Send Message</button>
            <span>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default Contact;