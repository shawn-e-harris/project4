import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UApp from "./userFolder/UApp"
import SingleU from './userFolder/SingleU';
import SingleBL from './bucketListFolder/SingleBL';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Link to ="/">  Home  </Link> 
            <Link to ="/user/" >  Users  </Link> 
          <Switch>
          <Route exact path="/user/" component={UApp} />
          <Route exact path="/user/:userId" component={SingleU} />
          <Route exact path="/bucketlistitem/:bucketId" component={SingleBL} />
          </Switch>
        </Router>
      </div>
    )

  }
}