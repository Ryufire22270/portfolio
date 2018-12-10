import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
  render() {
    return(
        <div className="about-me">
          <Header />
          <h1 className="title">About Me</h1>
          <img className="headshot" src="https://i.imgur.com/Iefe4ij.jpg" title="source imgur.com"
          <br />
          <h2 className="name">Matthew Jacobs<h2>
          <h2 className="summary"><h2>
          <h2 className="useful-link"><h2>
        </div>
      )
  }
}

export default About;
