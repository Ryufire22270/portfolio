import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
  render() {
    return(
        <div className="about-me">
          <Header />
          <h1 className="title">About Me</h1>
          <br />
          <img className="headshot" src="https://i.imgur.com/Iefe4ij.jpg" title="source imgur.com" alt="" />
          <h2 className="name">Matthew Jacobs</h2>
          <h2 className="summary">As a web developer who holds over four years experience in education sales, I am an expert at diagnosing the root cause of any clients’ issue and developing customized solutions that speak to the heart of their needs. Outgoing, sociable, and innovative, I love meeting new people across all industries and working with collaboratively to break down complicated problems, into intuitive solutions. I strive to combine my comprehensible logic with clean code in order to exceed both internal and client expectations in every challenge I face.</h2>
        </div>
      )
  }
}

export default About;
