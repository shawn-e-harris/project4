import React from 'react';
import './App.css';
import UserFunctions from "./userFolder/UserFunctions"
// import UserApp from "./userFolder/UserApp"
// import BucketListItemApp from "./bucketListFolder/BucketListApp"
// import CheckListItemApp from "./checkListFolder/CheckListApp"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserFunctions/>
        {/* <UserApp /> */}
        {/* <BucketListItemApp /> */}
        {/*<CheckListItemApp /> */}
      </div>
    )
  }
}