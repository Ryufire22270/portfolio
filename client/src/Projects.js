import React, { Component } from 'react';
import Header from './Header';

class Projects extends Component {
  render() {
    return(
        <div className="project-page">
          <Header />
          <div className="project-one-single">
            <img className="project-one-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544651796/Ball_Bouncer.png" alt="" />
            <h2 className="project-one-summary">A simple game where a user has to click on the red ball bouncing across the screen but if the user misses and hits the yellow they lose.</h2>
          </div>
          <a href="http://mattsjacobsproject1.surge.sh/#level1">Click to Try</a>
          <div className="project-two-single">
            <img className="project-two-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544653749/Spell_Finder.png" alt="" />
            <h2 className="project-two-summary">An app used for beginners of Dungeons and Dragons.  Introduces new players to a variety of different spell through a random spell finder.  Then if you find a favorite spell you can save it and look at it later.</h2>
          </div>
          <a href="http://handsome-flag.surge.sh/">Click to Try</a>
        </div>
      )
  }
}

export default Projects;
