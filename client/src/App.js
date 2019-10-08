import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import UserFunctions from "./userFolder/UserFunctions"
// import BucketListItemFunctions from "./bucketListFolder/BucketListItemFunctions"
// import CheckListItemFunctions from "./checkListFolder/CheckListItemFunctions"
import UserApp from "./userFolder/UserApp"
import BucketListItemApp from "./bucketListFolder/BucketListApp"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <Link to ="/api/">  Home  </Link> 
            <Link to ="/api/user/" >  Users  </Link> 
            <Link to ="/api/bucketlistitem/" >  Bucket List Items  </Link> 
          <Switch>
          <Route exact path="/api/user" component={UserApp} />
          <Route exact path="/api/bucketlistitem" component={BucketListItemApp} />
          </Switch>
        </Router>

        
        {/* <UserFunctions/> */}
        {/* <BucketListItemFunctions/>
        <CheckListItemFunctions/> */}
      </div>
    )
  }
}