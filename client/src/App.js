import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={About} />
            <Route exact path="/contactme" component={Contact} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
