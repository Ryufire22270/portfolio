import React, { Component } from 'react';
import Header from './Header';

class Contact extends Component {
  render() {
    return(
        <div className="contact-me-page">
          <Header />
            <h1 className="contact-title">Contact Me</h1>
          <br />
            <div className="contact-me-single">
              <img className="contact-headshot" src="https://i.imgur.com/Iefe4ij.jpg" title="source imgur.com" alt="" />
              <h2 className="contact-name">Matthew Jacobs</h2>
              <h2 className="contact-job">Web Developer</h2>
              <h2 className="contact-location">Greater New York Area</h2>
              <h2 className="contact-email">mjacobs21321@gmail.com</h2>
              <h2 className="contact-git">github.com/Ryufire22270</h2>
              <h2 className="contact-linkedin">linkedin.com/in/matthewjacobs21/</h2>
            </div>
        </div>
      )
  }
}

export default Contact;
