import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserApp from "./userFolder/UserApp"
import BucketListItemApp from "./bucketListFolder/BucketListApp"
import getSingleUser from './userFolder/getSingleUser';
import getSingleBucketListItem from './bucketListFolder/getSingleBucketListItem';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Link to ="/">  Home  </Link> 
            <Link to ="/user/" >  Users  </Link> 
            <Link to ="/bucketlistitem/" >  Bucket List Items  </Link> 
          <Switch>
          <Route exact path="/user/" component={UserApp} />
          <Route exact path="/bucketlistitem/" component={BucketListItemApp} />
          {/* <Route exact path="/user/:userId/bucketlistitem" component={BucketListItemApp} /> */}
          <Route exact path="/user/:userId" component={getSingleUser} />
          <Route path="/user/:userId/bucketlistitem/:bucketId" component={getSingleBucketListItem} />
          </Switch>
        </Router>
      </div>
    )
  }
}