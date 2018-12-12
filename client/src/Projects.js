import React, { Component } from 'react';
import Header from './Header';

class Projects extends Component {
  render() {
    return(
        <div className="project-page">
          <Header />
          <div className="project-page-full">
          <div className="project-one-single">
            <img className="project-one-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544651796/Ball_Bouncer.png" alt="" />
            <h2 className="project-one-summary">A simple game where a user has to click on the red ball bouncing across the screen but if the user misses and hits the yellow they lose.</h2>
          </div>
          <a className="project-links" href="http://mattsjacobsproject1.surge.sh/#level1">Click to Try</a>
          <div className="project-two-single">
            <img className="project-two-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544653749/Spell_Finder.png" alt="" />
            <h2 className="project-two-summary">An app used for beginners of Dungeons and Dragons.  Introduces new players to a variety of different spell through a random spell finder.  Then if you find a favorite spell you can save it and look at it later.</h2>
          </div>
          <a className="project-links" href="http://handsome-flag.surge.sh/">Click to Try</a>
          <div className="project-three-single">
            <img className="project-three-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544655681/Screen_Shot_2018-12-12_at_6.00.15_PM.png" alt="" />
            <h2 className="project-three-summary">This is a full-stack app refactoring of the Airbnb website.  This was a group project in which I was resposible for the back end and SQL servers</h2>
          </div>
          <a className="project-links" href="https://squad-fire-bnb.herokuapp.com/">Check it Out</a>
          <div className="project-four-single">
            <img className="project-four-image" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544655880/Screen_Shot_2018-12-12_at_6.04.25_PM.png" alt="" />
            <h2 className="project-four-summary">This is a full-stack app that I built alone, which is a simplified version of the Museum of Modern Art website.</h2>
          </div>
          <a className="project-links" href="https://simple-moma.herokuapp.com/">Check it Out</a>
        </div>
        </div>
      )
  }
}

export default Projects;
