import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserApp from "./userFolder/UserApp"
// import BucketListItemApp from "./bucketListFolder/BucketListApp"
import GetSingleUser from './userFolder/getSingleUser';
import GetSingleBucketListItem from './bucketListFolder/GetSingleBucketListItem';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Link to ="/">  Home  </Link> 
            <Link to ="/user/" >  Users  </Link> 
          <Switch>
          <Route exact path="/user/" component={UserApp} />
          <Route exact path="/user/:userId" component={GetSingleUser} />
          <Route exact path="/bucketlistitem/:bucketId" component={GetSingleBucketListItem} />
          </Switch>
        </Router>
      </div>
    )

  }
}