import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
  render() {
    return(
        <div className="home">
          <Header />
          <div className="announce-list">
            <h1 className="announce">Hi I'm Matthew Jacobs</h1>
            <h1 className="announce">Looking For A Web Developer?</h1>
            <h2 className="announce">Look no further! I am here to help with any of your Web Development needs!</h2>
          </div>
          <h3 className="tech-name">My Technologies</h3>
          <div className="tech-flex">
            <div className="tech-list">
              <img className="github-logo" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544646326/GitHub-Mark-120px-plus.png" alt="" />
              <img className="css-logo" src="https://camo.githubusercontent.com/cbbd8fb96742fb0970c862cf196903c8cce0a493/68747470733a2f2f63646e2e7261776769742e636f6d2f6269744865726f2f62697449636f6e2f6d61737465722f7376672f6373732d73712e737667" alt="" />
              <img className="html-logo" src="https://camo.githubusercontent.com/d0c360e7c26aef1fc725b8844d7b5eb5d82629f3/68747470733a2f2f63646e2e7261776769742e636f6d2f6269744865726f2f62697449636f6e2f6d61737465722f7376672f68746d6c2d73712e737667" alt="" />
              <img className="html5-logo" src="https://camo.githubusercontent.com/85595971d88a49ee6d72da9190aeb45da9e4a23e/68747470733a2f2f63646e2e7261776769742e636f6d2f6269744865726f2f62697449636f6e2f6d61737465722f7376672f68746d6c352d73712e737667" alt="" />
              <img className="js-logo" src="https://camo.githubusercontent.com/54a27ba4b8642c8bcd9ae726a2077cedf79efc17/68747470733a2f2f63646e2e7261776769742e636f6d2f6269744865726f2f62697449636f6e2f6d61737465722f7376672f6a732d73712e737667" alt="" />
              <img className="react-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
              <img className="node-logo" src="http://chittagongit.com//images/node-js-icon/node-js-icon-5.jpg" alt="" />
              <img className="express-logo" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544646035/express-logo.png" alt="" />
              <img className="sql-logo" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544648337/sql-icon.png" alt="" />
            </div>
          </div>
        </div>
      )
  }
}

export default Home;
