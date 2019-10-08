import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import UserFunctions from "./userFolder/UserFunctions"
// import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"
// import CheckListItemFunctions from "./checkListFolder/CheckListItemFunctions"
import UserApp from "./userFolder/UserApp"
import BucketListItemApp from "./bucketListFolder/BucketListApp"
import getSingleUser from './userFolder/getSingleUser';

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
          <Route exact path="/bucketlistitem" component={BucketListItemApp} />
          <Route path="/user/:id" component={getSingleUser} />
          </Switch>
        </Router>

        
        {/* <UserFunctions/> */}
        {/* <BucketListItemFunctions/>
        <CheckListItemFunctions/> */}
      </div>
    )
  }
}